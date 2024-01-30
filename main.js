import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import './style.css';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';
import CANNON, { Plane } from 'cannon';


const scene = new THREE.Scene()

const loader = new GLTFLoader();

const world = new CANNON.World()
//Array para meter todas los objetos para updatear
const objectsToUpdate = []

world.gravity.set(0, - 9.82, 0)


const objects = [];

//CREACION DE MATERIALES
const concreteMaterial = new CANNON.Material('concrete')
const plasticMaterial = new CANNON.Material('plastic')
//Añadir material al mundo
const concretePlasticContactMaterial = new CANNON.ContactMaterial(
  concreteMaterial,
  plasticMaterial,
  {
      friction: 0.1,
      restitution: 0.7
  }
)
const defaultMaterial = new CANNON.Material('default')
const defaultContactMaterial = new CANNON.ContactMaterial(
    defaultMaterial,
    defaultMaterial,
    {
        friction: 0.1,
        restitution: 0.7
    }
)
world.addContactMaterial(defaultContactMaterial)
//Configurar material como default
world.defaultContactMaterial = defaultContactMaterial

world.addContactMaterial(concretePlasticContactMaterial)

//PLANO
const geometry = new THREE.PlaneGeometry(20, 20);
const material = new THREE.MeshBasicMaterial({ color: 0x2b6a8a });
const plane = new THREE.Mesh(geometry, material);
plane.rotation.x = Math.PI * -0.5;
scene.add(plane);
//Plano mundo cannon
const floorShape = new CANNON.Plane()
const floorBody = new CANNON.Body()
floorBody.mass = 0
floorBody.quaternion.setFromAxisAngle(new CANNON.Vec3( -1 , 0, 0), Math.PI * 0.5)
floorBody.addShape(floorShape)
world.addBody(floorBody)
floorBody.quaternion.setFromAxisAngle(new CANNON.Vec3(- 1, 0, 0), Math.PI * 0.5)

//Esfera
const SphereGeometry = new THREE.SphereGeometry( 0.1 ); 
const SphereMaterial= new THREE.MeshBasicMaterial( { color: 0xffff00 } ); 
const sphere = new THREE.Mesh( SphereGeometry, SphereMaterial);
sphere.position.set(0,1,0) 
scene.add( sphere );
//Declarar esfera en el mundo cannon
const sphereShape = new CANNON.Sphere(0.1)
//Crear body de la esfera
const sphereBody = new CANNON.Body({
  mass: 1,
  position: new CANNON.Vec3(0, 3, 0),
  shape: sphereShape
})
//añadri esfera al mundo
world.addBody(sphereBody)

//APLICAR FUERZA 
//Asi le aplicamos fuerza a un costado al principio 
//sphereBody.applyLocalForce(new CANNON.Vec3(150, 0, 0), new CANNON.Vec3(0, 0, 0))



//Esfera creada con funcions
/*const createSphere = (radius, position) =>
{
    const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(radius, 20, 20),
        new THREE.MeshStandardMaterial({
            metalness: 0.3,
            roughness: 0.4,
            //envMap: environmentMapTexture,
            envMapIntensity: 0.5
        })
    )
    mesh.castShadow = true
    mesh.position.copy(position)
    scene.add(mesh)
    // Cannon.js body
    const shape = new CANNON.Sphere(radius)

    const body = new CANNON.Body({
        mass: 1,
        position: new CANNON.Vec3(0, 3, 0),
        shape: shape,
        material: defaultMaterial
    })
    body.position.copy(position)
    world.addBody(body)

    //Añadir a un array para updatear los objetos
    objectsToUpdate.push({
      mesh: mesh,
      body: body
    })
}
createSphere(0.5, { x: 0, y: 3, z: 0 })*/

const sizes = { width: window.innerWidth, height: window.innerHeight }

const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  1000)
camera.position.z = 4
camera.position.y = 4
camera.lookAt(plane.position);
scene.add(camera)

//RENDERER
const renderer = new THREE.WebGLRenderer()
renderer.setSize(sizes.width, sizes.height);
renderer.shadowMap.enabled = true
document.body.appendChild(renderer.domElement)
renderer.render(scene, camera)
renderer.xr.enabled = true;

//LUZ
const llum = new THREE.AmbientLight(0XFFFFFF, 1)
llum.intensity = 3
scene.add(llum)


//Para actuaizar las animaciones de las fisicas
const clock = new THREE.Clock()
let oldElapsedTime = 0

const tick = () => {
  const elapsedTime = clock.getElapsedTime()
  const deltaTime = elapsedTime - oldElapsedTime
  oldElapsedTime = elapsedTime
  //Para colocar la esfera visual en la posicion de la esfera fisica
  sphere.position.copy(sphereBody.position)
  
  //Aplicar fuerza a la esfera constantemente
  sphereBody.applyForce(new CANNON.Vec3(- 0.5, 0, 0), sphereBody.position)

  //Update renderer
  renderer.render(scene, camera)
  renderer.setAnimationLoop( tick);

  //Updatear array de objetos
  for(const object of objectsToUpdate) {
    object.mesh.position.copy(object.body.position)
  }

  // Update de las fisicas, depende del numero que divida
  // En este caso esta dividido por 60 entonces ira a 60 fps
  world.step(1 / 60, deltaTime, 3)
}





//Animacion del renderer
function animate() {
  requestAnimationFrame(animate);
  tick();
}

animate();


//Boton VR
document.body.appendChild(VRButton.createButton(renderer));

//CONTROLADORS
/*const controller1 = renderer.xr.getController( 0 );
const controller2 = renderer.xr.getController( 1 );

//Metodos que escuchan a los controladores
function onSelectStart() {
  this.userData.isSelecting = true;
}

function onSelectEnd() {
  this.userData.isSelecting = false;
}

controller1.addEventListener( 'selectstart', onSelectStart);
controller1.addEventListener( 'selectend', onSelectEnd );
controller1.addEventListener( 'connected', function ( event ) {
    this.add( buildController( event.data ) );
} );

controller2.addEventListener( 'selectstart', onSelectStart);
controller2.addEventListener( 'selectend',  onSelectEnd);
controller2.addEventListener( 'connected', function ( event ) {
    this.add( buildController( event.data ) );
} );*/





//update el size de la finestra

window.addEventListener('resize', () => {
  // Update sizes
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight
  // Update camera
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()
  // Update renderer
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

function loadModel(path, object3d, position, scale, rotation, systemToAdd, name) {
  //Carregam el fitxer
  loader.load(
    path,
    //FUNCIONS DE CALLBACK
    function (gltf) {
      //Si es carrega correctament l'afegim a l'escena
      object3d = gltf.scene;
      object3d.position.set(position.x, position.y, position.z);
      object3d.scale.set(scale.x, scale.y, scale.z);
      object3d.rotation.set(rotation.x, rotation.y, rotation.z)
      object3d.name = name;
      objects.push(object3d);

    },
    function (xhr) {
      //Aquesta funció de callback es crida mentre es carrega el model
      //i podem mostrar el progrés de càrrega
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    function (error) {
      //callback per quan hi ha un error. El podem mostrar per consola.
      console.error(error);
    }
  );
}
  