(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oa="160",fc=0,Ea=1,pc=2,xl=1,mc=2,Cn=3,Nn=0,Kt=1,gn=2,Xn=0,Ni=1,Ta=2,Aa=3,wa=4,vc=5,ii=100,gc=101,_c=102,ba=103,Ra=104,xc=200,yc=201,Mc=202,Sc=203,Ys=204,js=205,Ec=206,Tc=207,Ac=208,wc=209,bc=210,Rc=211,Cc=212,Pc=213,Lc=214,Ic=0,Nc=1,Dc=2,Kr=3,Uc=4,Fc=5,Bc=6,Oc=7,yl=0,zc=1,Vc=2,qn=0,Hc=1,Gc=2,kc=3,Wc=4,Xc=5,qc=6,Ca="attached",Yc="detached",Ml=300,Fi=301,Bi=302,Ks=303,Zs=304,ns=306,Oi=1e3,rn=1001,Zr=1002,Bt=1003,$s=1004,qr=1005,Yt=1006,Sl=1007,ci=1008,Yn=1009,jc=1010,Kc=1011,la=1012,El=1013,kn=1014,Pn=1015,hr=1016,Tl=1017,Al=1018,ai=1020,Zc=1021,sn=1023,$c=1024,Jc=1025,oi=1026,zi=1027,Qc=1028,wl=1029,eh=1030,bl=1031,Rl=1033,hs=33776,us=33777,ds=33778,fs=33779,Pa=35840,La=35841,Ia=35842,Na=35843,Cl=36196,Da=37492,Ua=37496,Fa=37808,Ba=37809,Oa=37810,za=37811,Va=37812,Ha=37813,Ga=37814,ka=37815,Wa=37816,Xa=37817,qa=37818,Ya=37819,ja=37820,Ka=37821,ps=36492,Za=36494,$a=36495,th=36283,Ja=36284,Qa=36285,eo=36286,ur=2300,Vi=2301,ms=2302,to=2400,no=2401,io=2402,nh=2500,ih=0,Pl=1,Js=2,Ll=3e3,li=3001,rh=3200,sh=3201,Il=0,ah=1,an="",Rt="srgb",Ot="srgb-linear",ca="display-p3",is="display-p3-linear",$r="linear",St="srgb",Jr="rec709",Qr="p3",pi=7680,ro=519,oh=512,lh=513,ch=514,Nl=515,hh=516,uh=517,dh=518,fh=519,Qs=35044,so="300 es",ea=1035,Ln=2e3,es=2001;class qi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ao=1234567;const ar=Math.PI/180,Hi=180/Math.PI;function fn(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vt[a&255]+Vt[a>>8&255]+Vt[a>>16&255]+Vt[a>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]).toLowerCase()}function Gt(a,e,t){return Math.max(e,Math.min(t,a))}function ha(a,e){return(a%e+e)%e}function ph(a,e,t,n,i){return n+(a-e)*(i-n)/(t-e)}function mh(a,e,t){return a!==e?(t-a)/(e-a):0}function or(a,e,t){return(1-t)*a+t*e}function vh(a,e,t,n){return or(a,e,1-Math.exp(-t*n))}function gh(a,e=1){return e-Math.abs(ha(a,e*2)-e)}function _h(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function xh(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function yh(a,e){return a+Math.floor(Math.random()*(e-a+1))}function Mh(a,e){return a+Math.random()*(e-a)}function Sh(a){return a*(.5-Math.random())}function Eh(a){a!==void 0&&(ao=a);let e=ao+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Th(a){return a*ar}function Ah(a){return a*Hi}function ta(a){return(a&a-1)===0&&a!==0}function wh(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function ts(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function bh(a,e,t,n,i){const r=Math.cos,s=Math.sin,o=r(t/2),l=s(t/2),h=r((e+n)/2),u=s((e+n)/2),c=r((e-n)/2),d=s((e-n)/2),f=r((n-e)/2),v=s((n-e)/2);switch(i){case"XYX":a.set(o*u,l*c,l*d,o*h);break;case"YZY":a.set(l*d,o*u,l*c,o*h);break;case"ZXZ":a.set(l*c,l*d,o*u,o*h);break;case"XZX":a.set(o*u,l*v,l*f,o*h);break;case"YXY":a.set(l*f,o*u,l*v,o*h);break;case"ZYZ":a.set(l*v,l*f,o*u,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function _n(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function yt(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const Rh={DEG2RAD:ar,RAD2DEG:Hi,generateUUID:fn,clamp:Gt,euclideanModulo:ha,mapLinear:ph,inverseLerp:mh,lerp:or,damp:vh,pingpong:gh,smoothstep:_h,smootherstep:xh,randInt:yh,randFloat:Mh,randFloatSpread:Sh,seededRandom:Eh,degToRad:Th,radToDeg:Ah,isPowerOfTwo:ta,ceilPowerOfTwo:wh,floorPowerOfTwo:ts,setQuaternionFromProperEuler:bh,normalize:yt,denormalize:_n};class dt{constructor(e=0,t=0){dt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*i+e.x,this.y=r*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rt{constructor(e,t,n,i,r,s,o,l,h){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,s,o,l,h)}set(e,t,n,i,r,s,o,l,h){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=s,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[3],l=n[6],h=n[1],u=n[4],c=n[7],d=n[2],f=n[5],v=n[8],g=i[0],m=i[3],p=i[6],_=i[1],y=i[4],x=i[7],A=i[2],b=i[5],I=i[8];return r[0]=s*g+o*_+l*A,r[3]=s*m+o*y+l*b,r[6]=s*p+o*x+l*I,r[1]=h*g+u*_+c*A,r[4]=h*m+u*y+c*b,r[7]=h*p+u*x+c*I,r[2]=d*g+f*_+v*A,r[5]=d*m+f*y+v*b,r[8]=d*p+f*x+v*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],h=e[7],u=e[8];return t*s*u-t*o*h-n*r*u+n*o*l+i*r*h-i*s*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],h=e[7],u=e[8],c=u*s-o*h,d=o*l-u*r,f=h*r-s*l,v=t*c+n*d+i*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=c*g,e[1]=(i*h-u*n)*g,e[2]=(o*n-i*s)*g,e[3]=d*g,e[4]=(u*t-i*l)*g,e[5]=(i*r-o*t)*g,e[6]=f*g,e[7]=(n*l-h*t)*g,e[8]=(s*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,s,o){const l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*s+h*o)+s+e,-i*h,i*l,-i*(-h*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(vs.makeScale(e,t)),this}rotate(e){return this.premultiply(vs.makeRotation(-e)),this}translate(e,t){return this.premultiply(vs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vs=new rt;function Dl(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function dr(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Ch(){const a=dr("canvas");return a.style.display="block",a}const oo={};function lr(a){a in oo||(oo[a]=!0,console.warn(a))}const lo=new rt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),co=new rt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),gr={[Ot]:{transfer:$r,primaries:Jr,toReference:a=>a,fromReference:a=>a},[Rt]:{transfer:St,primaries:Jr,toReference:a=>a.convertSRGBToLinear(),fromReference:a=>a.convertLinearToSRGB()},[is]:{transfer:$r,primaries:Qr,toReference:a=>a.applyMatrix3(co),fromReference:a=>a.applyMatrix3(lo)},[ca]:{transfer:St,primaries:Qr,toReference:a=>a.convertSRGBToLinear().applyMatrix3(co),fromReference:a=>a.applyMatrix3(lo).convertLinearToSRGB()}},Ph=new Set([Ot,is]),_t={enabled:!0,_workingColorSpace:Ot,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(a){if(!Ph.has(a))throw new Error(`Unsupported working color space, "${a}".`);this._workingColorSpace=a},convert:function(a,e,t){if(this.enabled===!1||e===t||!e||!t)return a;const n=gr[e].toReference,i=gr[t].fromReference;return i(n(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this._workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this._workingColorSpace)},getPrimaries:function(a){return gr[a].primaries},getTransfer:function(a){return a===an?$r:gr[a].transfer}};function Di(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function gs(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let mi;class Ul{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{mi===void 0&&(mi=dr("canvas")),mi.width=e.width,mi.height=e.height;const n=mi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=mi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=dr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=Di(r[s]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Di(t[n]/255)*255):t[n]=Di(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Lh=0;class Fl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=fn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?r.push(_s(i[s].image)):r.push(_s(i[s]))}else r=_s(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function _s(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Ul.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ih=0;class zt extends qi{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,n=rn,i=rn,r=Yt,s=ci,o=sn,l=Yn,h=zt.DEFAULT_ANISOTROPY,u=an){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=fn(),this.name="",this.source=new Fl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(lr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===li?Rt:an),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ml)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oi:e.x=e.x-Math.floor(e.x);break;case rn:e.x=e.x<0?0:1;break;case Zr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Oi:e.y=e.y-Math.floor(e.y);break;case rn:e.y=e.y<0?0:1;break;case Zr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return lr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Rt?li:Ll}set encoding(e){lr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===li?Rt:an}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Ml;zt.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,n=0,i=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,h=l[0],u=l[4],c=l[8],d=l[1],f=l[5],v=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(c-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(c+g)<.1&&Math.abs(v+m)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(h+1)/2,x=(f+1)/2,A=(p+1)/2,b=(u+d)/4,I=(c+g)/4,B=(v+m)/4;return y>x&&y>A?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=b/n,r=I/n):x>A?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=b/i,r=B/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=I/r,i=B/r),this.set(n,i,r,t),this}let _=Math.sqrt((m-v)*(m-v)+(c-g)*(c-g)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(c-g)/_,this.z=(d-u)/_,this.w=Math.acos((h+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nh extends qi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(lr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===li?Rt:an),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new zt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Fl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hi extends Nh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Bl extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dh extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,s,o){let l=n[i+0],h=n[i+1],u=n[i+2],c=n[i+3];const d=r[s+0],f=r[s+1],v=r[s+2],g=r[s+3];if(o===0){e[t+0]=l,e[t+1]=h,e[t+2]=u,e[t+3]=c;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=v,e[t+3]=g;return}if(c!==g||l!==d||h!==f||u!==v){let m=1-o;const p=l*d+h*f+u*v+c*g,_=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const A=Math.sqrt(y),b=Math.atan2(A,p*_);m=Math.sin(m*b)/A,o=Math.sin(o*b)/A}const x=o*_;if(l=l*m+d*x,h=h*m+f*x,u=u*m+v*x,c=c*m+g*x,m===1-o){const A=1/Math.sqrt(l*l+h*h+u*u+c*c);l*=A,h*=A,u*=A,c*=A}}e[t]=l,e[t+1]=h,e[t+2]=u,e[t+3]=c}static multiplyQuaternionsFlat(e,t,n,i,r,s){const o=n[i],l=n[i+1],h=n[i+2],u=n[i+3],c=r[s],d=r[s+1],f=r[s+2],v=r[s+3];return e[t]=o*v+u*c+l*f-h*d,e[t+1]=l*v+u*d+h*c-o*f,e[t+2]=h*v+u*f+o*d-l*c,e[t+3]=u*v-o*c-l*d-h*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,h=o(n/2),u=o(i/2),c=o(r/2),d=l(n/2),f=l(i/2),v=l(r/2);switch(s){case"XYZ":this._x=d*u*c+h*f*v,this._y=h*f*c-d*u*v,this._z=h*u*v+d*f*c,this._w=h*u*c-d*f*v;break;case"YXZ":this._x=d*u*c+h*f*v,this._y=h*f*c-d*u*v,this._z=h*u*v-d*f*c,this._w=h*u*c+d*f*v;break;case"ZXY":this._x=d*u*c-h*f*v,this._y=h*f*c+d*u*v,this._z=h*u*v+d*f*c,this._w=h*u*c-d*f*v;break;case"ZYX":this._x=d*u*c-h*f*v,this._y=h*f*c+d*u*v,this._z=h*u*v-d*f*c,this._w=h*u*c+d*f*v;break;case"YZX":this._x=d*u*c+h*f*v,this._y=h*f*c+d*u*v,this._z=h*u*v-d*f*c,this._w=h*u*c-d*f*v;break;case"XZY":this._x=d*u*c-h*f*v,this._y=h*f*c-d*u*v,this._z=h*u*v+d*f*c,this._w=h*u*c+d*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],s=t[1],o=t[5],l=t[9],h=t[2],u=t[6],c=t[10],d=n+o+c;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-h)*f,this._z=(s-i)*f}else if(n>o&&n>c){const f=2*Math.sqrt(1+n-o-c);this._w=(u-l)/f,this._x=.25*f,this._y=(i+s)/f,this._z=(r+h)/f}else if(o>c){const f=2*Math.sqrt(1+o-n-c);this._w=(r-h)/f,this._x=(i+s)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+c-n-o);this._w=(s-i)/f,this._x=(r+h)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,s=e._w,o=t._x,l=t._y,h=t._z,u=t._w;return this._x=n*u+s*o+i*h-r*l,this._y=i*u+s*l+r*o-n*h,this._z=r*u+s*h+n*l-i*o,this._w=s*u-n*o-i*l-r*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,s=this._w;let o=s*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*s+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const h=Math.sqrt(l),u=Math.atan2(h,o),c=Math.sin((1-t)*u)/h,d=Math.sin(t*u)/h;return this._w=s*c+this._w*d,this._x=n*c+this._x*d,this._y=i*c+this._y*d,this._z=r*c+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,t=0,n=0){J.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ho.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ho.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,s=e.y,o=e.z,l=e.w,h=2*(s*i-o*n),u=2*(o*t-r*i),c=2*(r*n-s*t);return this.x=t+l*h+s*c-o*u,this.y=n+l*u+o*h-r*c,this.z=i+l*c+r*u-s*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,s=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*s-n*l,this.z=n*o-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xs.copy(this).projectOnVector(e),this.sub(xs)}reflect(e){return this.sub(xs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xs=new J,ho=new Kn;class Dn{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,cn):cn.fromBufferAttribute(r,s),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_r.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_r.copy(n.boundingBox)),_r.applyMatrix4(e.matrixWorld),this.union(_r)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ji),xr.subVectors(this.max,Ji),vi.subVectors(e.a,Ji),gi.subVectors(e.b,Ji),_i.subVectors(e.c,Ji),Fn.subVectors(gi,vi),Bn.subVectors(_i,gi),Zn.subVectors(vi,_i);let t=[0,-Fn.z,Fn.y,0,-Bn.z,Bn.y,0,-Zn.z,Zn.y,Fn.z,0,-Fn.x,Bn.z,0,-Bn.x,Zn.z,0,-Zn.x,-Fn.y,Fn.x,0,-Bn.y,Bn.x,0,-Zn.y,Zn.x,0];return!ys(t,vi,gi,_i,xr)||(t=[1,0,0,0,1,0,0,0,1],!ys(t,vi,gi,_i,xr))?!1:(yr.crossVectors(Fn,Bn),t=[yr.x,yr.y,yr.z],ys(t,vi,gi,_i,xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(En),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const En=[new J,new J,new J,new J,new J,new J,new J,new J],cn=new J,_r=new Dn,vi=new J,gi=new J,_i=new J,Fn=new J,Bn=new J,Zn=new J,Ji=new J,xr=new J,yr=new J,$n=new J;function ys(a,e,t,n,i){for(let r=0,s=a.length-3;r<=s;r+=3){$n.fromArray(a,r);const o=i.x*Math.abs($n.x)+i.y*Math.abs($n.y)+i.z*Math.abs($n.z),l=e.dot($n),h=t.dot($n),u=n.dot($n);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>o)return!1}return!0}const Uh=new Dn,Qi=new J,Ms=new J;class Mn{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Uh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qi.subVectors(e,this.center);const t=Qi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Qi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ms.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qi.copy(e.center).add(Ms)),this.expandByPoint(Qi.copy(e.center).sub(Ms))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new J,Ss=new J,Mr=new J,On=new J,Es=new J,Sr=new J,Ts=new J;class rs{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tn.copy(this.origin).addScaledVector(this.direction,t),Tn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ss.copy(e).add(t).multiplyScalar(.5),Mr.copy(t).sub(e).normalize(),On.copy(this.origin).sub(Ss);const r=e.distanceTo(t)*.5,s=-this.direction.dot(Mr),o=On.dot(this.direction),l=-On.dot(Mr),h=On.lengthSq(),u=Math.abs(1-s*s);let c,d,f,v;if(u>0)if(c=s*l-o,d=s*o-l,v=r*u,c>=0)if(d>=-v)if(d<=v){const g=1/u;c*=g,d*=g,f=c*(c+s*d+2*o)+d*(s*c+d+2*l)+h}else d=r,c=Math.max(0,-(s*d+o)),f=-c*c+d*(d+2*l)+h;else d=-r,c=Math.max(0,-(s*d+o)),f=-c*c+d*(d+2*l)+h;else d<=-v?(c=Math.max(0,-(-s*r+o)),d=c>0?-r:Math.min(Math.max(-r,-l),r),f=-c*c+d*(d+2*l)+h):d<=v?(c=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+h):(c=Math.max(0,-(s*r+o)),d=c>0?r:Math.min(Math.max(-r,-l),r),f=-c*c+d*(d+2*l)+h);else d=s>0?-r:r,c=Math.max(0,-(s*d+o)),f=-c*c+d*(d+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,c),i&&i.copy(Ss).addScaledVector(Mr,d),f}intersectSphere(e,t){Tn.subVectors(e.center,this.origin);const n=Tn.dot(this.direction),i=Tn.dot(Tn)-n*n,r=e.radius*e.radius;if(i>r)return null;const s=Math.sqrt(r-i),o=n-s,l=n+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,s,o,l;const h=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,d=this.origin;return h>=0?(n=(e.min.x-d.x)*h,i=(e.max.x-d.x)*h):(n=(e.max.x-d.x)*h,i=(e.min.x-d.x)*h),u>=0?(r=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),n>s||r>i||((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),c>=0?(o=(e.min.z-d.z)*c,l=(e.max.z-d.z)*c):(o=(e.max.z-d.z)*c,l=(e.min.z-d.z)*c),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Tn)!==null}intersectTriangle(e,t,n,i,r){Es.subVectors(t,e),Sr.subVectors(n,e),Ts.crossVectors(Es,Sr);let s=this.direction.dot(Ts),o;if(s>0){if(i)return null;o=1}else if(s<0)o=-1,s=-s;else return null;On.subVectors(this.origin,e);const l=o*this.direction.dot(Sr.crossVectors(On,Sr));if(l<0)return null;const h=o*this.direction.dot(Es.cross(On));if(h<0||l+h>s)return null;const u=-o*On.dot(Ts);return u<0?null:this.at(u/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,n,i,r,s,o,l,h,u,c,d,f,v,g,m){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,s,o,l,h,u,c,d,f,v,g,m)}set(e,t,n,i,r,s,o,l,h,u,c,d,f,v,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=s,p[9]=o,p[13]=l,p[2]=h,p[6]=u,p[10]=c,p[14]=d,p[3]=f,p[7]=v,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/xi.setFromMatrixColumn(e,0).length(),r=1/xi.setFromMatrixColumn(e,1).length(),s=1/xi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(i),h=Math.sin(i),u=Math.cos(r),c=Math.sin(r);if(e.order==="XYZ"){const d=s*u,f=s*c,v=o*u,g=o*c;t[0]=l*u,t[4]=-l*c,t[8]=h,t[1]=f+v*h,t[5]=d-g*h,t[9]=-o*l,t[2]=g-d*h,t[6]=v+f*h,t[10]=s*l}else if(e.order==="YXZ"){const d=l*u,f=l*c,v=h*u,g=h*c;t[0]=d+g*o,t[4]=v*o-f,t[8]=s*h,t[1]=s*c,t[5]=s*u,t[9]=-o,t[2]=f*o-v,t[6]=g+d*o,t[10]=s*l}else if(e.order==="ZXY"){const d=l*u,f=l*c,v=h*u,g=h*c;t[0]=d-g*o,t[4]=-s*c,t[8]=v+f*o,t[1]=f+v*o,t[5]=s*u,t[9]=g-d*o,t[2]=-s*h,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const d=s*u,f=s*c,v=o*u,g=o*c;t[0]=l*u,t[4]=v*h-f,t[8]=d*h+g,t[1]=l*c,t[5]=g*h+d,t[9]=f*h-v,t[2]=-h,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const d=s*l,f=s*h,v=o*l,g=o*h;t[0]=l*u,t[4]=g-d*c,t[8]=v*c+f,t[1]=c,t[5]=s*u,t[9]=-o*u,t[2]=-h*u,t[6]=f*c+v,t[10]=d-g*c}else if(e.order==="XZY"){const d=s*l,f=s*h,v=o*l,g=o*h;t[0]=l*u,t[4]=-c,t[8]=h*u,t[1]=d*c+g,t[5]=s*u,t[9]=f*c-v,t[2]=v*c-f,t[6]=o*u,t[10]=g*c+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fh,e,Bh)}lookAt(e,t,n){const i=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),zn.crossVectors(n,Qt),zn.lengthSq()===0&&(Math.abs(n.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),zn.crossVectors(n,Qt)),zn.normalize(),Er.crossVectors(Qt,zn),i[0]=zn.x,i[4]=Er.x,i[8]=Qt.x,i[1]=zn.y,i[5]=Er.y,i[9]=Qt.y,i[2]=zn.z,i[6]=Er.z,i[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[4],l=n[8],h=n[12],u=n[1],c=n[5],d=n[9],f=n[13],v=n[2],g=n[6],m=n[10],p=n[14],_=n[3],y=n[7],x=n[11],A=n[15],b=i[0],I=i[4],B=i[8],M=i[12],E=i[1],L=i[5],z=i[9],q=i[13],U=i[2],V=i[6],Q=i[10],F=i[14],D=i[3],j=i[7],W=i[11],N=i[15];return r[0]=s*b+o*E+l*U+h*D,r[4]=s*I+o*L+l*V+h*j,r[8]=s*B+o*z+l*Q+h*W,r[12]=s*M+o*q+l*F+h*N,r[1]=u*b+c*E+d*U+f*D,r[5]=u*I+c*L+d*V+f*j,r[9]=u*B+c*z+d*Q+f*W,r[13]=u*M+c*q+d*F+f*N,r[2]=v*b+g*E+m*U+p*D,r[6]=v*I+g*L+m*V+p*j,r[10]=v*B+g*z+m*Q+p*W,r[14]=v*M+g*q+m*F+p*N,r[3]=_*b+y*E+x*U+A*D,r[7]=_*I+y*L+x*V+A*j,r[11]=_*B+y*z+x*Q+A*W,r[15]=_*M+y*q+x*F+A*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],s=e[1],o=e[5],l=e[9],h=e[13],u=e[2],c=e[6],d=e[10],f=e[14],v=e[3],g=e[7],m=e[11],p=e[15];return v*(+r*l*c-i*h*c-r*o*d+n*h*d+i*o*f-n*l*f)+g*(+t*l*f-t*h*d+r*s*d-i*s*f+i*h*u-r*l*u)+m*(+t*h*c-t*o*f-r*s*c+n*s*f+r*o*u-n*h*u)+p*(-i*o*u-t*l*c+t*o*d+i*s*c-n*s*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],h=e[7],u=e[8],c=e[9],d=e[10],f=e[11],v=e[12],g=e[13],m=e[14],p=e[15],_=c*m*h-g*d*h+g*l*f-o*m*f-c*l*p+o*d*p,y=v*d*h-u*m*h-v*l*f+s*m*f+u*l*p-s*d*p,x=u*g*h-v*c*h+v*o*f-s*g*f-u*o*p+s*c*p,A=v*c*l-u*g*l-v*o*d+s*g*d+u*o*m-s*c*m,b=t*_+n*y+i*x+r*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/b;return e[0]=_*I,e[1]=(g*d*r-c*m*r-g*i*f+n*m*f+c*i*p-n*d*p)*I,e[2]=(o*m*r-g*l*r+g*i*h-n*m*h-o*i*p+n*l*p)*I,e[3]=(c*l*r-o*d*r-c*i*h+n*d*h+o*i*f-n*l*f)*I,e[4]=y*I,e[5]=(u*m*r-v*d*r+v*i*f-t*m*f-u*i*p+t*d*p)*I,e[6]=(v*l*r-s*m*r-v*i*h+t*m*h+s*i*p-t*l*p)*I,e[7]=(s*d*r-u*l*r+u*i*h-t*d*h-s*i*f+t*l*f)*I,e[8]=x*I,e[9]=(v*c*r-u*g*r-v*n*f+t*g*f+u*n*p-t*c*p)*I,e[10]=(s*g*r-v*o*r+v*n*h-t*g*h-s*n*p+t*o*p)*I,e[11]=(u*o*r-s*c*r-u*n*h+t*c*h+s*n*f-t*o*f)*I,e[12]=A*I,e[13]=(u*g*i-v*c*i+v*n*d-t*g*d-u*n*m+t*c*m)*I,e[14]=(v*o*i-s*g*i-v*n*l+t*g*l+s*n*m-t*o*m)*I,e[15]=(s*c*i-u*o*i+u*n*l-t*c*l-s*n*d+t*o*d)*I,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,s=e.x,o=e.y,l=e.z,h=r*s,u=r*o;return this.set(h*s+n,h*o-i*l,h*l+i*o,0,h*o+i*l,u*o+n,u*l-i*s,0,h*l-i*o,u*l+i*s,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,s){return this.set(1,n,r,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,s=t._y,o=t._z,l=t._w,h=r+r,u=s+s,c=o+o,d=r*h,f=r*u,v=r*c,g=s*u,m=s*c,p=o*c,_=l*h,y=l*u,x=l*c,A=n.x,b=n.y,I=n.z;return i[0]=(1-(g+p))*A,i[1]=(f+x)*A,i[2]=(v-y)*A,i[3]=0,i[4]=(f-x)*b,i[5]=(1-(d+p))*b,i[6]=(m+_)*b,i[7]=0,i[8]=(v+y)*I,i[9]=(m-_)*I,i[10]=(1-(d+g))*I,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=xi.set(i[0],i[1],i[2]).length();const s=xi.set(i[4],i[5],i[6]).length(),o=xi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],hn.copy(this);const h=1/r,u=1/s,c=1/o;return hn.elements[0]*=h,hn.elements[1]*=h,hn.elements[2]*=h,hn.elements[4]*=u,hn.elements[5]*=u,hn.elements[6]*=u,hn.elements[8]*=c,hn.elements[9]*=c,hn.elements[10]*=c,t.setFromRotationMatrix(hn),n.x=r,n.y=s,n.z=o,this}makePerspective(e,t,n,i,r,s,o=Ln){const l=this.elements,h=2*r/(t-e),u=2*r/(n-i),c=(t+e)/(t-e),d=(n+i)/(n-i);let f,v;if(o===Ln)f=-(s+r)/(s-r),v=-2*s*r/(s-r);else if(o===es)f=-s/(s-r),v=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=c,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,s,o=Ln){const l=this.elements,h=1/(t-e),u=1/(n-i),c=1/(s-r),d=(t+e)*h,f=(n+i)*u;let v,g;if(o===Ln)v=(s+r)*c,g=-2*c;else if(o===es)v=r*c,g=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const xi=new J,hn=new st,Fh=new J(0,0,0),Bh=new J(1,1,1),zn=new J,Er=new J,Qt=new J,uo=new st,fo=new Kn;class ss{constructor(e=0,t=0,n=0,i=ss.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],s=i[4],o=i[8],l=i[1],h=i[5],u=i[9],c=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-c,r),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-c,f),this._z=Math.atan2(-s,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,h));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-c,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Gt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return uo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fo.setFromEuler(this),this.setFromQuaternion(fo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ss.DEFAULT_ORDER="XYZ";class Ol{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Oh=0;const po=new J,yi=new Kn,An=new st,Tr=new J,er=new J,zh=new J,Vh=new Kn,mo=new J(1,0,0),vo=new J(0,1,0),go=new J(0,0,1),Hh={type:"added"},Gh={type:"removed"};class wt extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new J,t=new ss,n=new Kn,i=new J(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new st},normalMatrix:{value:new rt}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ol,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.multiply(yi),this}rotateOnWorldAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.premultiply(yi),this}rotateX(e){return this.rotateOnAxis(mo,e)}rotateY(e){return this.rotateOnAxis(vo,e)}rotateZ(e){return this.rotateOnAxis(go,e)}translateOnAxis(e,t){return po.copy(e).applyQuaternion(this.quaternion),this.position.add(po.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mo,e)}translateY(e){return this.translateOnAxis(vo,e)}translateZ(e){return this.translateOnAxis(go,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Tr.copy(e):Tr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(er,Tr,this.up):An.lookAt(Tr,er,this.up),this.quaternion.setFromRotationMatrix(An),i&&(An.extractRotation(i.matrixWorld),yi.setFromRotationMatrix(An),this.quaternion.premultiply(yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Hh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),An.multiply(e.parent.matrixWorld)),e.applyMatrix4(An),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,e,zh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,Vh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){const c=l[h];r(e.shapes,c)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),h=s(e.textures),u=s(e.images),c=s(e.shapes),d=s(e.skeletons),f=s(e.animations),v=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),c.length>0&&(n.shapes=c),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),v.length>0&&(n.nodes=v)}return n.object=i,n;function s(o){const l=[];for(const h in o){const u=o[h];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}wt.DEFAULT_UP=new J(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new J,wn=new J,As=new J,bn=new J,Mi=new J,Si=new J,_o=new J,ws=new J,bs=new J,Rs=new J;let Ar=!1;class dn{constructor(e=new J,t=new J,n=new J){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),un.subVectors(e,t),i.cross(un);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){un.subVectors(i,t),wn.subVectors(n,t),As.subVectors(e,t);const s=un.dot(un),o=un.dot(wn),l=un.dot(As),h=wn.dot(wn),u=wn.dot(As),c=s*h-o*o;if(c===0)return r.set(0,0,0),null;const d=1/c,f=(h*l-o*u)*d,v=(s*u-o*l)*d;return r.set(1-f-v,v,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getUV(e,t,n,i,r,s,o,l){return Ar===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ar=!0),this.getInterpolation(e,t,n,i,r,s,o,l)}static getInterpolation(e,t,n,i,r,s,o,l){return this.getBarycoord(e,t,n,i,bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bn.x),l.addScaledVector(s,bn.y),l.addScaledVector(o,bn.z),l)}static isFrontFacing(e,t,n,i){return un.subVectors(n,t),wn.subVectors(e,t),un.cross(wn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),un.cross(wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Ar===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ar=!0),dn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return dn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let s,o;Mi.subVectors(i,n),Si.subVectors(r,n),ws.subVectors(e,n);const l=Mi.dot(ws),h=Si.dot(ws);if(l<=0&&h<=0)return t.copy(n);bs.subVectors(e,i);const u=Mi.dot(bs),c=Si.dot(bs);if(u>=0&&c<=u)return t.copy(i);const d=l*c-u*h;if(d<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(Mi,s);Rs.subVectors(e,r);const f=Mi.dot(Rs),v=Si.dot(Rs);if(v>=0&&f<=v)return t.copy(r);const g=f*h-l*v;if(g<=0&&h>=0&&v<=0)return o=h/(h-v),t.copy(n).addScaledVector(Si,o);const m=u*v-f*c;if(m<=0&&c-u>=0&&f-v>=0)return _o.subVectors(r,i),o=(c-u)/(c-u+(f-v)),t.copy(i).addScaledVector(_o,o);const p=1/(m+g+d);return s=g*p,o=d*p,t.copy(n).addScaledVector(Mi,s).addScaledVector(Si,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},wr={h:0,s:0,l:0};function Cs(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class tt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=_t.workingColorSpace){if(e=ha(e,1),t=Gt(t,0,1),n=Gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=Cs(s,r,e+1/3),this.g=Cs(s,r,e),this.b=Cs(s,r,e-1/3)}return _t.toWorkingColorSpace(this,i),this}setStyle(e,t=Rt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){const n=zl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=gs(e.r),this.g=gs(e.g),this.b=gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return _t.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Gt(Ht.r*255,0,255))*65536+Math.round(Gt(Ht.g*255,0,255))*256+Math.round(Gt(Ht.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.fromWorkingColorSpace(Ht.copy(this),t);const n=Ht.r,i=Ht.g,r=Ht.b,s=Math.max(n,i,r),o=Math.min(n,i,r);let l,h;const u=(o+s)/2;if(o===s)l=0,h=0;else{const c=s-o;switch(h=u<=.5?c/(s+o):c/(2-s-o),s){case n:l=(i-r)/c+(i<r?6:0);break;case i:l=(r-n)/c+2;break;case r:l=(n-i)/c+4;break}l/=6}return e.h=l,e.s=h,e.l=u,e}getRGB(e,t=_t.workingColorSpace){return _t.fromWorkingColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Rt){_t.fromWorkingColorSpace(Ht.copy(this),e);const t=Ht.r,n=Ht.g,i=Ht.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Vn),this.setHSL(Vn.h+e,Vn.s+t,Vn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vn),e.getHSL(wr);const n=or(Vn.h,wr.h,t),i=or(Vn.s,wr.s,t),r=or(Vn.l,wr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new tt;tt.NAMES=zl;let kh=0;class xn extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=fn(),this.name="",this.type="Material",this.blending=Ni,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ys,this.blendDst=js,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ro,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pi,this.stencilZFail=pi,this.stencilZPass=pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ys&&(n.blendSrc=this.blendSrc),this.blendDst!==js&&(n.blendDst=this.blendDst),this.blendEquation!==ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Kr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ro&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(t){const r=i(e.textures),s=i(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class In extends xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new J,br=new dt;class qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Qs,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix3(e),this.setXY(t,br.x,br.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_n(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_n(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_n(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_n(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qs&&(e.usage=this.usage),e}}class Vl extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Hl extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class on extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Wh=0;const tn=new st,Ps=new wt,Ei=new J,en=new Dn,tr=new Dn,Ft=new J;class pn extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=fn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dl(e)?Hl:Vl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new rt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,n){return tn.makeTranslation(e,t,n),this.applyMatrix4(tn),this}scale(e,t,n){return tn.makeScale(e,t,n),this.applyMatrix4(tn),this}lookAt(e){return Ps.lookAt(e),Ps.updateMatrix(),this.applyMatrix4(Ps.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new on(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new J,1/0);return}if(e){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];tr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(en.min,tr.min),en.expandByPoint(Ft),Ft.addVectors(en.max,tr.max),en.expandByPoint(Ft)):(en.expandByPoint(tr.min),en.expandByPoint(tr.max))}en.getCenter(n);let i=0;for(let r=0,s=e.count;r<s;r++)Ft.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ft));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],l=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)Ft.fromBufferAttribute(o,h),l&&(Ei.fromBufferAttribute(e,h),Ft.add(Ei)),i=Math.max(i,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,s=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,h=[],u=[];for(let E=0;E<o;E++)h[E]=new J,u[E]=new J;const c=new J,d=new J,f=new J,v=new dt,g=new dt,m=new dt,p=new J,_=new J;function y(E,L,z){c.fromArray(i,E*3),d.fromArray(i,L*3),f.fromArray(i,z*3),v.fromArray(s,E*2),g.fromArray(s,L*2),m.fromArray(s,z*2),d.sub(c),f.sub(c),g.sub(v),m.sub(v);const q=1/(g.x*m.y-m.x*g.y);isFinite(q)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-g.y).multiplyScalar(q),_.copy(f).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(q),h[E].add(p),h[L].add(p),h[z].add(p),u[E].add(_),u[L].add(_),u[z].add(_))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let E=0,L=x.length;E<L;++E){const z=x[E],q=z.start,U=z.count;for(let V=q,Q=q+U;V<Q;V+=3)y(n[V+0],n[V+1],n[V+2])}const A=new J,b=new J,I=new J,B=new J;function M(E){I.fromArray(r,E*3),B.copy(I);const L=h[E];A.copy(L),A.sub(I.multiplyScalar(I.dot(L))).normalize(),b.crossVectors(B,L);const q=b.dot(u[E])<0?-1:1;l[E*4]=A.x,l[E*4+1]=A.y,l[E*4+2]=A.z,l[E*4+3]=q}for(let E=0,L=x.length;E<L;++E){const z=x[E],q=z.start,U=z.count;for(let V=q,Q=q+U;V<Q;V+=3)M(n[V+0]),M(n[V+1]),M(n[V+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new J,r=new J,s=new J,o=new J,l=new J,h=new J,u=new J,c=new J;if(e)for(let d=0,f=e.count;d<f;d+=3){const v=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,v),r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),u.subVectors(s,r),c.subVectors(i,r),u.cross(c),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),h.fromBufferAttribute(n,m),o.add(u),l.add(u),h.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),u.subVectors(s,r),c.subVectors(i,r),u.cross(c),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){const h=o.array,u=o.itemSize,c=o.normalized,d=new h.constructor(l.length*u);let f=0,v=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*u;for(let p=0;p<u;p++)d[v++]=h[f++]}return new qt(d,u,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],h=e(l,n);t.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const l=[],h=r[o];for(let u=0,c=h.length;u<c;u++){const d=h[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const h=s[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const h=n[l];e.data.attributes[l]=h.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],u=[];for(let c=0,d=h.length;c<d;c++){const f=h[c];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const u=i[h];this.setAttribute(h,u.clone(t))}const r=e.morphAttributes;for(const h in r){const u=[],c=r[h];for(let d=0,f=c.length;d<f;d++)u.push(c[d].clone(t));this.morphAttributes[h]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let h=0,u=s.length;h<u;h++){const c=s[h];this.addGroup(c.start,c.count,c.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xo=new st,Jn=new rs,Rr=new Mn,yo=new J,Ti=new J,Ai=new J,wi=new J,Ls=new J,Cr=new J,Pr=new dt,Lr=new dt,Ir=new dt,Mo=new J,So=new J,Eo=new J,Nr=new J,Dr=new J;class jt extends wt{constructor(e=new pn,t=new In){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Cr.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const u=o[l],c=r[l];u!==0&&(Ls.fromBufferAttribute(c,e),s?Cr.addScaledVector(Ls,u):Cr.addScaledVector(Ls.sub(t),u))}t.add(Cr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(r),Jn.copy(e.ray).recast(e.near),!(Rr.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(Rr,yo)===null||Jn.origin.distanceToSquared(yo)>(e.far-e.near)**2))&&(xo.copy(r).invert(),Jn.copy(e.ray).applyMatrix4(xo),!(n.boundingBox!==null&&Jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Jn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,c=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(s))for(let v=0,g=d.length;v<g;v++){const m=d[v],p=s[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,A=y;x<A;x+=3){const b=o.getX(x),I=o.getX(x+1),B=o.getX(x+2);i=Ur(this,p,e,n,h,u,c,b,I,B),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const v=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=v,p=g;m<p;m+=3){const _=o.getX(m),y=o.getX(m+1),x=o.getX(m+2);i=Ur(this,s,e,n,h,u,c,_,y,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(s))for(let v=0,g=d.length;v<g;v++){const m=d[v],p=s[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,A=y;x<A;x+=3){const b=x,I=x+1,B=x+2;i=Ur(this,p,e,n,h,u,c,b,I,B),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const v=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=v,p=g;m<p;m+=3){const _=m,y=m+1,x=m+2;i=Ur(this,s,e,n,h,u,c,_,y,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Xh(a,e,t,n,i,r,s,o){let l;if(e.side===Kt?l=n.intersectTriangle(s,r,i,!0,o):l=n.intersectTriangle(i,r,s,e.side===Nn,o),l===null)return null;Dr.copy(o),Dr.applyMatrix4(a.matrixWorld);const h=t.ray.origin.distanceTo(Dr);return h<t.near||h>t.far?null:{distance:h,point:Dr.clone(),object:a}}function Ur(a,e,t,n,i,r,s,o,l,h){a.getVertexPosition(o,Ti),a.getVertexPosition(l,Ai),a.getVertexPosition(h,wi);const u=Xh(a,e,t,n,Ti,Ai,wi,Nr);if(u){i&&(Pr.fromBufferAttribute(i,o),Lr.fromBufferAttribute(i,l),Ir.fromBufferAttribute(i,h),u.uv=dn.getInterpolation(Nr,Ti,Ai,wi,Pr,Lr,Ir,new dt)),r&&(Pr.fromBufferAttribute(r,o),Lr.fromBufferAttribute(r,l),Ir.fromBufferAttribute(r,h),u.uv1=dn.getInterpolation(Nr,Ti,Ai,wi,Pr,Lr,Ir,new dt),u.uv2=u.uv1),s&&(Mo.fromBufferAttribute(s,o),So.fromBufferAttribute(s,l),Eo.fromBufferAttribute(s,h),u.normal=dn.getInterpolation(Nr,Ti,Ai,wi,Mo,So,Eo,new J),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const c={a:o,b:l,c:h,normal:new J,materialIndex:0};dn.getNormal(Ti,Ai,wi,c.normal),u.face=c}return u}class fr extends pn{constructor(e=1,t=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};const o=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const l=[],h=[],u=[],c=[];let d=0,f=0;v("z","y","x",-1,-1,n,t,e,s,r,0),v("z","y","x",1,-1,n,t,-e,s,r,1),v("x","z","y",1,1,e,n,t,i,s,2),v("x","z","y",1,-1,e,n,-t,i,s,3),v("x","y","z",1,-1,e,t,n,i,r,4),v("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new on(h,3)),this.setAttribute("normal",new on(u,3)),this.setAttribute("uv",new on(c,2));function v(g,m,p,_,y,x,A,b,I,B,M){const E=x/I,L=A/B,z=x/2,q=A/2,U=b/2,V=I+1,Q=B+1;let F=0,D=0;const j=new J;for(let W=0;W<Q;W++){const N=W*L-q;for(let G=0;G<V;G++){const w=G*E-z;j[g]=w*_,j[m]=N*y,j[p]=U,h.push(j.x,j.y,j.z),j[g]=0,j[m]=0,j[p]=b>0?1:-1,u.push(j.x,j.y,j.z),c.push(G/I),c.push(1-W/B),F+=1}}for(let W=0;W<B;W++)for(let N=0;N<I;N++){const G=d+N+V*W,w=d+N+V*(W+1),R=d+(N+1)+V*(W+1),C=d+(N+1)+V*W;l.push(G,w,C),l.push(w,R,C),D+=6}o.addGroup(f,D,M),f+=D,d+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gi(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Wt(a){const e={};for(let t=0;t<a.length;t++){const n=Gi(a[t]);for(const i in n)e[i]=n[i]}return e}function qh(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Gl(a){return a.getRenderTarget()===null?a.outputColorSpace:_t.workingColorSpace}const Yh={clone:Gi,merge:Wt};var jh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ui extends xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jh,this.fragmentShader=Kh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gi(e.uniforms),this.uniformsGroups=qh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class kl extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=Ln}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Xt extends kl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hi*2*Math.atan(Math.tan(ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ar*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,h=s.fullHeight;r+=s.offsetX*i/l,t-=s.offsetY*n/h,i*=s.width/l,n*=s.height/h}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const bi=-90,Ri=1;class Zh extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Xt(bi,Ri,e,t);i.layers=this.layers,this.add(i);const r=new Xt(bi,Ri,e,t);r.layers=this.layers,this.add(r);const s=new Xt(bi,Ri,e,t);s.layers=this.layers,this.add(s);const o=new Xt(bi,Ri,e,t);o.layers=this.layers,this.add(o);const l=new Xt(bi,Ri,e,t);l.layers=this.layers,this.add(l);const h=new Xt(bi,Ri,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,s,o,l]=t;for(const h of t)this.remove(h);if(e===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===es)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,h,u]=this.children,c=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,s),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,h),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(c,d,f),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Wl extends zt{constructor(e,t,n,i,r,s,o,l,h,u){e=e!==void 0?e:[],t=t!==void 0?t:Fi,super(e,t,n,i,r,s,o,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $h extends hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(lr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===li?Rt:an),this.texture=new Wl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new fr(5,5,5),r=new ui({name:"CubemapFromEquirect",uniforms:Gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:Xn});r.uniforms.tEquirect.value=t;const s=new jt(i,r),o=t.minFilter;return t.minFilter===ci&&(t.minFilter=Yt),new Zh(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(r)}}const Is=new J,Jh=new J,Qh=new rt;class ti{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Is.subVectors(n,t).cross(Jh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Is),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Qh.getNormalMatrix(e),i=this.coplanarPoint(Is).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qn=new Mn,Fr=new J;class ua{constructor(e=new ti,t=new ti,n=new ti,i=new ti,r=new ti,s=new ti){this.planes=[e,t,n,i,r,s]}set(e,t,n,i,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ln){const n=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],l=i[3],h=i[4],u=i[5],c=i[6],d=i[7],f=i[8],v=i[9],g=i[10],m=i[11],p=i[12],_=i[13],y=i[14],x=i[15];if(n[0].setComponents(l-r,d-h,m-f,x-p).normalize(),n[1].setComponents(l+r,d+h,m+f,x+p).normalize(),n[2].setComponents(l+s,d+u,m+v,x+_).normalize(),n[3].setComponents(l-s,d-u,m-v,x-_).normalize(),n[4].setComponents(l-o,d-c,m-g,x-y).normalize(),t===Ln)n[5].setComponents(l+o,d+c,m+g,x+y).normalize();else if(t===es)n[5].setComponents(o,c,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(e){return Qn.center.set(0,0,0),Qn.radius=.7071067811865476,Qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Fr.x=i.normal.x>0?e.max.x:e.min.x,Fr.y=i.normal.y>0?e.max.y:e.min.y,Fr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xl(){let a=null,e=!1,t=null,n=null;function i(r,s){t(r,s),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){a=r}}}function eu(a,e){const t=e.isWebGL2,n=new WeakMap;function i(h,u){const c=h.array,d=h.usage,f=c.byteLength,v=a.createBuffer();a.bindBuffer(u,v),a.bufferData(u,c,d),h.onUploadCallback();let g;if(c instanceof Float32Array)g=a.FLOAT;else if(c instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)g=a.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=a.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=a.SHORT;else if(c instanceof Uint32Array)g=a.UNSIGNED_INT;else if(c instanceof Int32Array)g=a.INT;else if(c instanceof Int8Array)g=a.BYTE;else if(c instanceof Uint8Array)g=a.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:v,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:h.version,size:f}}function r(h,u,c){const d=u.array,f=u._updateRange,v=u.updateRanges;if(a.bindBuffer(c,h),f.count===-1&&v.length===0&&a.bufferSubData(c,0,d),v.length!==0){for(let g=0,m=v.length;g<m;g++){const p=v[g];t?a.bufferSubData(c,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):a.bufferSubData(c,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}f.count!==-1&&(t?a.bufferSubData(c,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):a.bufferSubData(c,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function s(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function o(h){h.isInterleavedBufferAttribute&&(h=h.data);const u=n.get(h);u&&(a.deleteBuffer(u.buffer),n.delete(h))}function l(h,u){if(h.isGLBufferAttribute){const d=n.get(h);(!d||d.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const c=n.get(h);if(c===void 0)n.set(h,i(h,u));else if(c.version<h.version){if(c.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,h,u),c.version=h.version}}return{get:s,remove:o,update:l}}class as extends pn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,s=t/2,o=Math.floor(n),l=Math.floor(i),h=o+1,u=l+1,c=e/o,d=t/l,f=[],v=[],g=[],m=[];for(let p=0;p<u;p++){const _=p*d-s;for(let y=0;y<h;y++){const x=y*c-r;v.push(x,-_,0),g.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){const y=_+h*p,x=_+h*(p+1),A=_+1+h*(p+1),b=_+1+h*p;f.push(y,x,b),f.push(x,A,b)}this.setIndex(f),this.setAttribute("position",new on(v,3)),this.setAttribute("normal",new on(g,3)),this.setAttribute("uv",new on(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.width,e.height,e.widthSegments,e.heightSegments)}}var tu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,iu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ru=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,su=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,au=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ou=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cu=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,uu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,du=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,gu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_u=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Su=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Eu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Tu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Au=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ru=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Iu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Nu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Du=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Uu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Fu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ou=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ku=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Wu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ju=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ku=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$u=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ju=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ed=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,td=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,id=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ad=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,od=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ld=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ud=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,md=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,vd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,gd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,_d=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Md=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ed=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Td=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ad=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Pd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ld=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Id=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ud=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Bd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Od=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Vd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Gd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Kd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$d=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ef=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,af=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,of=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,cf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,df=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ff=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_f=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Sf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ef=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Af=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Pf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,If=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Nf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Df=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,it={alphahash_fragment:tu,alphahash_pars_fragment:nu,alphamap_fragment:iu,alphamap_pars_fragment:ru,alphatest_fragment:su,alphatest_pars_fragment:au,aomap_fragment:ou,aomap_pars_fragment:lu,batching_pars_vertex:cu,batching_vertex:hu,begin_vertex:uu,beginnormal_vertex:du,bsdfs:fu,iridescence_fragment:pu,bumpmap_pars_fragment:mu,clipping_planes_fragment:vu,clipping_planes_pars_fragment:gu,clipping_planes_pars_vertex:_u,clipping_planes_vertex:xu,color_fragment:yu,color_pars_fragment:Mu,color_pars_vertex:Su,color_vertex:Eu,common:Tu,cube_uv_reflection_fragment:Au,defaultnormal_vertex:wu,displacementmap_pars_vertex:bu,displacementmap_vertex:Ru,emissivemap_fragment:Cu,emissivemap_pars_fragment:Pu,colorspace_fragment:Lu,colorspace_pars_fragment:Iu,envmap_fragment:Nu,envmap_common_pars_fragment:Du,envmap_pars_fragment:Uu,envmap_pars_vertex:Fu,envmap_physical_pars_fragment:ju,envmap_vertex:Bu,fog_vertex:Ou,fog_pars_vertex:zu,fog_fragment:Vu,fog_pars_fragment:Hu,gradientmap_pars_fragment:Gu,lightmap_fragment:ku,lightmap_pars_fragment:Wu,lights_lambert_fragment:Xu,lights_lambert_pars_fragment:qu,lights_pars_begin:Yu,lights_toon_fragment:Ku,lights_toon_pars_fragment:Zu,lights_phong_fragment:$u,lights_phong_pars_fragment:Ju,lights_physical_fragment:Qu,lights_physical_pars_fragment:ed,lights_fragment_begin:td,lights_fragment_maps:nd,lights_fragment_end:id,logdepthbuf_fragment:rd,logdepthbuf_pars_fragment:sd,logdepthbuf_pars_vertex:ad,logdepthbuf_vertex:od,map_fragment:ld,map_pars_fragment:cd,map_particle_fragment:hd,map_particle_pars_fragment:ud,metalnessmap_fragment:dd,metalnessmap_pars_fragment:fd,morphcolor_vertex:pd,morphnormal_vertex:md,morphtarget_pars_vertex:vd,morphtarget_vertex:gd,normal_fragment_begin:_d,normal_fragment_maps:xd,normal_pars_fragment:yd,normal_pars_vertex:Md,normal_vertex:Sd,normalmap_pars_fragment:Ed,clearcoat_normal_fragment_begin:Td,clearcoat_normal_fragment_maps:Ad,clearcoat_pars_fragment:wd,iridescence_pars_fragment:bd,opaque_fragment:Rd,packing:Cd,premultiplied_alpha_fragment:Pd,project_vertex:Ld,dithering_fragment:Id,dithering_pars_fragment:Nd,roughnessmap_fragment:Dd,roughnessmap_pars_fragment:Ud,shadowmap_pars_fragment:Fd,shadowmap_pars_vertex:Bd,shadowmap_vertex:Od,shadowmask_pars_fragment:zd,skinbase_vertex:Vd,skinning_pars_vertex:Hd,skinning_vertex:Gd,skinnormal_vertex:kd,specularmap_fragment:Wd,specularmap_pars_fragment:Xd,tonemapping_fragment:qd,tonemapping_pars_fragment:Yd,transmission_fragment:jd,transmission_pars_fragment:Kd,uv_pars_fragment:Zd,uv_pars_vertex:$d,uv_vertex:Jd,worldpos_vertex:Qd,background_vert:ef,background_frag:tf,backgroundCube_vert:nf,backgroundCube_frag:rf,cube_vert:sf,cube_frag:af,depth_vert:of,depth_frag:lf,distanceRGBA_vert:cf,distanceRGBA_frag:hf,equirect_vert:uf,equirect_frag:df,linedashed_vert:ff,linedashed_frag:pf,meshbasic_vert:mf,meshbasic_frag:vf,meshlambert_vert:gf,meshlambert_frag:_f,meshmatcap_vert:xf,meshmatcap_frag:yf,meshnormal_vert:Mf,meshnormal_frag:Sf,meshphong_vert:Ef,meshphong_frag:Tf,meshphysical_vert:Af,meshphysical_frag:wf,meshtoon_vert:bf,meshtoon_frag:Rf,points_vert:Cf,points_frag:Pf,shadow_vert:Lf,shadow_frag:If,sprite_vert:Nf,sprite_frag:Df},Ue={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},mn={basic:{uniforms:Wt([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:Wt([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new tt(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:Wt([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:Wt([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:Wt([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new tt(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:Wt([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:Wt([Ue.points,Ue.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:Wt([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:Wt([Ue.common,Ue.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:Wt([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:Wt([Ue.sprite,Ue.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:Wt([Ue.common,Ue.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:Wt([Ue.lights,Ue.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};mn.physical={uniforms:Wt([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const Br={r:0,b:0,g:0};function Uf(a,e,t,n,i,r,s){const o=new tt(0);let l=r===!0?0:1,h,u,c=null,d=0,f=null;function v(m,p){let _=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?t:e).get(y)),y===null?g(o,l):y&&y.isColor&&(g(y,1),_=!0);const x=a.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,s):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(a.autoClear||_)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),y&&(y.isCubeTexture||y.mapping===ns)?(u===void 0&&(u=new jt(new fr(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:Gi(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,b,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=_t.getTransfer(y.colorSpace)!==St,(c!==y||d!==y.version||f!==a.toneMapping)&&(u.material.needsUpdate=!0,c=y,d=y.version,f=a.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(h===void 0&&(h=new jt(new as(2,2),new ui({name:"BackgroundMaterial",uniforms:Gi(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=y,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=_t.getTransfer(y.colorSpace)!==St,y.matrixAutoUpdate===!0&&y.updateMatrix(),h.material.uniforms.uvTransform.value.copy(y.matrix),(c!==y||d!==y.version||f!==a.toneMapping)&&(h.material.needsUpdate=!0,c=y,d=y.version,f=a.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null))}function g(m,p){m.getRGB(Br,Gl(a)),n.buffers.color.setClear(Br.r,Br.g,Br.b,p,s)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(o,l)},render:v}}function Ff(a,e,t,n){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||r!==null,o={},l=m(null);let h=l,u=!1;function c(U,V,Q,F,D){let j=!1;if(s){const W=g(F,Q,V);h!==W&&(h=W,f(h.object)),j=p(U,F,Q,D),j&&_(U,F,Q,D)}else{const W=V.wireframe===!0;(h.geometry!==F.id||h.program!==Q.id||h.wireframe!==W)&&(h.geometry=F.id,h.program=Q.id,h.wireframe=W,j=!0)}D!==null&&t.update(D,a.ELEMENT_ARRAY_BUFFER),(j||u)&&(u=!1,B(U,V,Q,F),D!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function d(){return n.isWebGL2?a.createVertexArray():r.createVertexArrayOES()}function f(U){return n.isWebGL2?a.bindVertexArray(U):r.bindVertexArrayOES(U)}function v(U){return n.isWebGL2?a.deleteVertexArray(U):r.deleteVertexArrayOES(U)}function g(U,V,Q){const F=Q.wireframe===!0;let D=o[U.id];D===void 0&&(D={},o[U.id]=D);let j=D[V.id];j===void 0&&(j={},D[V.id]=j);let W=j[F];return W===void 0&&(W=m(d()),j[F]=W),W}function m(U){const V=[],Q=[],F=[];for(let D=0;D<i;D++)V[D]=0,Q[D]=0,F[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Q,attributeDivisors:F,object:U,attributes:{},index:null}}function p(U,V,Q,F){const D=h.attributes,j=V.attributes;let W=0;const N=Q.getAttributes();for(const G in N)if(N[G].location>=0){const R=D[G];let C=j[G];if(C===void 0&&(G==="instanceMatrix"&&U.instanceMatrix&&(C=U.instanceMatrix),G==="instanceColor"&&U.instanceColor&&(C=U.instanceColor)),R===void 0||R.attribute!==C||C&&R.data!==C.data)return!0;W++}return h.attributesNum!==W||h.index!==F}function _(U,V,Q,F){const D={},j=V.attributes;let W=0;const N=Q.getAttributes();for(const G in N)if(N[G].location>=0){let R=j[G];R===void 0&&(G==="instanceMatrix"&&U.instanceMatrix&&(R=U.instanceMatrix),G==="instanceColor"&&U.instanceColor&&(R=U.instanceColor));const C={};C.attribute=R,R&&R.data&&(C.data=R.data),D[G]=C,W++}h.attributes=D,h.attributesNum=W,h.index=F}function y(){const U=h.newAttributes;for(let V=0,Q=U.length;V<Q;V++)U[V]=0}function x(U){A(U,0)}function A(U,V){const Q=h.newAttributes,F=h.enabledAttributes,D=h.attributeDivisors;Q[U]=1,F[U]===0&&(a.enableVertexAttribArray(U),F[U]=1),D[U]!==V&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,V),D[U]=V)}function b(){const U=h.newAttributes,V=h.enabledAttributes;for(let Q=0,F=V.length;Q<F;Q++)V[Q]!==U[Q]&&(a.disableVertexAttribArray(Q),V[Q]=0)}function I(U,V,Q,F,D,j,W){W===!0?a.vertexAttribIPointer(U,V,Q,D,j):a.vertexAttribPointer(U,V,Q,F,D,j)}function B(U,V,Q,F){if(n.isWebGL2===!1&&(U.isInstancedMesh||F.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const D=F.attributes,j=Q.getAttributes(),W=V.defaultAttributeValues;for(const N in j){const G=j[N];if(G.location>=0){let w=D[N];if(w===void 0&&(N==="instanceMatrix"&&U.instanceMatrix&&(w=U.instanceMatrix),N==="instanceColor"&&U.instanceColor&&(w=U.instanceColor)),w!==void 0){const R=w.normalized,C=w.itemSize,X=t.get(w);if(X===void 0)continue;const ne=X.buffer,ie=X.type,K=X.bytesPerElement,te=n.isWebGL2===!0&&(ie===a.INT||ie===a.UNSIGNED_INT||w.gpuType===El);if(w.isInterleavedBufferAttribute){const ce=w.data,Y=ce.stride,Ce=w.offset;if(ce.isInstancedInterleavedBuffer){for(let ue=0;ue<G.locationSize;ue++)A(G.location+ue,ce.meshPerAttribute);U.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ue=0;ue<G.locationSize;ue++)x(G.location+ue);a.bindBuffer(a.ARRAY_BUFFER,ne);for(let ue=0;ue<G.locationSize;ue++)I(G.location+ue,C/G.locationSize,ie,R,Y*K,(Ce+C/G.locationSize*ue)*K,te)}else{if(w.isInstancedBufferAttribute){for(let ce=0;ce<G.locationSize;ce++)A(G.location+ce,w.meshPerAttribute);U.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=w.meshPerAttribute*w.count)}else for(let ce=0;ce<G.locationSize;ce++)x(G.location+ce);a.bindBuffer(a.ARRAY_BUFFER,ne);for(let ce=0;ce<G.locationSize;ce++)I(G.location+ce,C/G.locationSize,ie,R,C*K,C/G.locationSize*ce*K,te)}}else if(W!==void 0){const R=W[N];if(R!==void 0)switch(R.length){case 2:a.vertexAttrib2fv(G.location,R);break;case 3:a.vertexAttrib3fv(G.location,R);break;case 4:a.vertexAttrib4fv(G.location,R);break;default:a.vertexAttrib1fv(G.location,R)}}}}b()}function M(){z();for(const U in o){const V=o[U];for(const Q in V){const F=V[Q];for(const D in F)v(F[D].object),delete F[D];delete V[Q]}delete o[U]}}function E(U){if(o[U.id]===void 0)return;const V=o[U.id];for(const Q in V){const F=V[Q];for(const D in F)v(F[D].object),delete F[D];delete V[Q]}delete o[U.id]}function L(U){for(const V in o){const Q=o[V];if(Q[U.id]===void 0)continue;const F=Q[U.id];for(const D in F)v(F[D].object),delete F[D];delete Q[U.id]}}function z(){q(),u=!0,h!==l&&(h=l,f(h.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:c,reset:z,resetDefaultState:q,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:L,initAttributes:y,enableAttribute:x,disableUnusedAttributes:b}}function Bf(a,e,t,n){const i=n.isWebGL2;let r;function s(u){r=u}function o(u,c){a.drawArrays(r,u,c),t.update(c,r,1)}function l(u,c,d){if(d===0)return;let f,v;if(i)f=a,v="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[v](r,u,c,d),t.update(c,r,d)}function h(u,c,d){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<d;v++)this.render(u[v],c[v]);else{f.multiDrawArraysWEBGL(r,u,0,c,0,d);let v=0;for(let g=0;g<d;g++)v+=c[g];t.update(v,r,1)}}this.setMode=s,this.render=o,this.renderInstances=l,this.renderMultiDraw=h}function Of(a,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(I){if(I==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&a.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const h=s||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,c=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),d=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=a.getParameter(a.MAX_TEXTURE_SIZE),v=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),g=a.getParameter(a.MAX_VERTEX_ATTRIBS),m=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),p=a.getParameter(a.MAX_VARYING_VECTORS),_=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,x=s||e.has("OES_texture_float"),A=y&&x,b=s?a.getParameter(a.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:h,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:c,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:_,vertexTextures:y,floatFragmentTextures:x,floatVertexTextures:A,maxSamples:b}}function zf(a){const e=this;let t=null,n=0,i=!1,r=!1;const s=new ti,o=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,d){const f=c.length!==0||d||n!==0||i;return i=d,n=c.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(c,d){t=u(c,d,0)},this.setState=function(c,d,f){const v=c.clippingPlanes,g=c.clipIntersection,m=c.clipShadows,p=a.get(c);if(!i||v===null||v.length===0||r&&!m)r?u(null):h();else{const _=r?0:n,y=_*4;let x=p.clippingState||null;l.value=x,x=u(v,d,y,f);for(let A=0;A!==y;++A)x[A]=t[A];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(c,d,f,v){const g=c!==null?c.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const p=f+g*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=f;y!==g;++y,x+=4)s.copy(c[y]).applyMatrix4(_,o),s.normal.toArray(m,x),m[x+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Vf(a){let e=new WeakMap;function t(s,o){return o===Ks?s.mapping=Fi:o===Zs&&(s.mapping=Bi),s}function n(s){if(s&&s.isTexture){const o=s.mapping;if(o===Ks||o===Zs)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const h=new $h(l.height/2);return h.fromEquirectangularTexture(a,s),e.set(s,h),s.addEventListener("dispose",i),t(h.texture,s.mapping)}else return null}}return s}function i(s){const o=s.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class da extends kl{constructor(e=-1,t=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,s=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,s=r+h*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Li=4,To=[.125,.215,.35,.446,.526,.582],ri=20,Ns=new da,Ao=new tt;let Ds=null,Us=0,Fs=0;const ni=(1+Math.sqrt(5))/2,Ci=1/ni,wo=[new J(1,1,1),new J(-1,1,1),new J(1,1,-1),new J(-1,1,-1),new J(0,ni,Ci),new J(0,ni,-Ci),new J(Ci,0,ni),new J(-Ci,0,ni),new J(ni,Ci,0),new J(-ni,Ci,0)];class bo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ds=this._renderer.getRenderTarget(),Us=this._renderer.getActiveCubeFace(),Fs=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Po(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Co(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ds,Us,Fs),e.scissorTest=!1,Or(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fi||e.mapping===Bi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ds=this._renderer.getRenderTarget(),Us=this._renderer.getActiveCubeFace(),Fs=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:hr,format:sn,colorSpace:Ot,depthBuffer:!1},i=Ro(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ro(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hf(r)),this._blurMaterial=Gf(r,e,t)}return i}_compileMaterial(e){const t=new jt(this._lodPlanes[0],e);this._renderer.compile(t,Ns)}_sceneToCubeUV(e,t,n,i){const o=new Xt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,c=u.autoClear,d=u.toneMapping;u.getClearColor(Ao),u.toneMapping=qn,u.autoClear=!1;const f=new In({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),v=new jt(new fr,f);let g=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,g=!0):(f.color.copy(Ao),g=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(o.up.set(0,l[p],0),o.lookAt(h[p],0,0)):_===1?(o.up.set(0,0,l[p]),o.lookAt(0,h[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,h[p]));const y=this._cubeSize;Or(i,_*y,p>2?y:0,y,y),u.setRenderTarget(i),g&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=c,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Fi||e.mapping===Bi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Po()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Co());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new jt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Or(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,Ns)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=wo[(i-1)%wo.length];this._blur(e,i-1,i,r,s)}t.autoClear=n}_blur(e,t,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,i,"latitudinal",r),this._halfBlur(s,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,s,o){const l=this._renderer,h=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,c=new jt(this._lodPlanes[i],h),d=h.uniforms,f=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ri-1),g=r/v,m=isFinite(r)?1+Math.floor(u*g):ri;m>ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ri}`);const p=[];let _=0;for(let I=0;I<ri;++I){const B=I/g,M=Math.exp(-B*B/2);p.push(M),I===0?_+=M:I<m&&(_+=2*M)}for(let I=0;I<p.length;I++)p[I]=p[I]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=s==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=v,d.mipInt.value=y-n;const x=this._sizeLods[i],A=3*x*(i>y-Li?i-y+Li:0),b=4*(this._cubeSize-x);Or(t,A,b,3*x,2*x),l.setRenderTarget(t),l.render(c,Ns)}}function Hf(a){const e=[],t=[],n=[];let i=a;const r=a-Li+1+To.length;for(let s=0;s<r;s++){const o=Math.pow(2,i);t.push(o);let l=1/o;s>a-Li?l=To[s-a+Li-1]:s===0&&(l=0),n.push(l);const h=1/(o-2),u=-h,c=1+h,d=[u,u,c,u,c,c,u,u,c,c,u,c],f=6,v=6,g=3,m=2,p=1,_=new Float32Array(g*v*f),y=new Float32Array(m*v*f),x=new Float32Array(p*v*f);for(let b=0;b<f;b++){const I=b%3*2/3-1,B=b>2?0:-1,M=[I,B,0,I+2/3,B,0,I+2/3,B+1,0,I,B,0,I+2/3,B+1,0,I,B+1,0];_.set(M,g*v*b),y.set(d,m*v*b);const E=[b,b,b,b,b,b];x.set(E,p*v*b)}const A=new pn;A.setAttribute("position",new qt(_,g)),A.setAttribute("uv",new qt(y,m)),A.setAttribute("faceIndex",new qt(x,p)),e.push(A),i>Li&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ro(a,e,t){const n=new hi(a,e,t);return n.texture.mapping=ns,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Or(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function Gf(a,e,t){const n=new Float32Array(ri),i=new J(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Co(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Po(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function fa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kf(a){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,h=l===Ks||l===Zs,u=l===Fi||l===Bi;if(h||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let c=e.get(o);return t===null&&(t=new bo(a)),c=h?t.fromEquirectangular(o,c):t.fromCubemap(o,c),e.set(o,c),c.texture}else{if(e.has(o))return e.get(o).texture;{const c=o.image;if(h&&c&&c.height>0||u&&c&&i(c)){t===null&&(t=new bo(a));const d=h?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function i(o){let l=0;const h=6;for(let u=0;u<h;u++)o[u]!==void 0&&l++;return l===h}function r(o){const l=o.target;l.removeEventListener("dispose",r);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function Wf(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Xf(a,e,t,n){const i={},r=new WeakMap;function s(c){const d=c.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const g=d.morphAttributes[v];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}d.removeEventListener("dispose",s),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(c,d){return i[d.id]===!0||(d.addEventListener("dispose",s),i[d.id]=!0,t.memory.geometries++),d}function l(c){const d=c.attributes;for(const v in d)e.update(d[v],a.ARRAY_BUFFER);const f=c.morphAttributes;for(const v in f){const g=f[v];for(let m=0,p=g.length;m<p;m++)e.update(g[m],a.ARRAY_BUFFER)}}function h(c){const d=[],f=c.index,v=c.attributes.position;let g=0;if(f!==null){const _=f.array;g=f.version;for(let y=0,x=_.length;y<x;y+=3){const A=_[y+0],b=_[y+1],I=_[y+2];d.push(A,b,b,I,I,A)}}else if(v!==void 0){const _=v.array;g=v.version;for(let y=0,x=_.length/3-1;y<x;y+=3){const A=y+0,b=y+1,I=y+2;d.push(A,b,b,I,I,A)}}else return;const m=new(Dl(d)?Hl:Vl)(d,1);m.version=g;const p=r.get(c);p&&e.remove(p),r.set(c,m)}function u(c){const d=r.get(c);if(d){const f=c.index;f!==null&&d.version<f.version&&h(c)}else h(c);return r.get(c)}return{get:o,update:l,getWireframeAttribute:u}}function qf(a,e,t,n){const i=n.isWebGL2;let r;function s(f){r=f}let o,l;function h(f){o=f.type,l=f.bytesPerElement}function u(f,v){a.drawElements(r,v,o,f*l),t.update(v,r,1)}function c(f,v,g){if(g===0)return;let m,p;if(i)m=a,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,v,o,f*l,g),t.update(v,r,g)}function d(f,v,g){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<g;p++)this.render(f[p]/l,v[p]);else{m.multiDrawElementsWEBGL(r,v,0,o,f,0,g);let p=0;for(let _=0;_<g;_++)p+=v[_];t.update(p,r,1)}}this.setMode=s,this.setIndex=h,this.render=u,this.renderInstances=c,this.renderMultiDraw=d}function Yf(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,o){switch(t.calls++,s){case a.TRIANGLES:t.triangles+=o*(r/3);break;case a.LINES:t.lines+=o*(r/2);break;case a.LINE_STRIP:t.lines+=o*(r-1);break;case a.LINE_LOOP:t.lines+=o*r;break;case a.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function jf(a,e){return a[0]-e[0]}function Kf(a,e){return Math.abs(e[1])-Math.abs(a[1])}function Zf(a,e,t){const n={},i=new Float32Array(8),r=new WeakMap,s=new Mt,o=[];for(let h=0;h<8;h++)o[h]=[h,0];function l(h,u,c){const d=h.morphTargetInfluences;if(e.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=v!==void 0?v.length:0;let m=r.get(u);if(m===void 0||m.count!==g){let V=function(){q.dispose(),r.delete(u),u.removeEventListener("dispose",V)};var f=V;m!==void 0&&m.texture.dispose();const y=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,b=u.morphAttributes.position||[],I=u.morphAttributes.normal||[],B=u.morphAttributes.color||[];let M=0;y===!0&&(M=1),x===!0&&(M=2),A===!0&&(M=3);let E=u.attributes.position.count*M,L=1;E>e.maxTextureSize&&(L=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const z=new Float32Array(E*L*4*g),q=new Bl(z,E,L,g);q.type=Pn,q.needsUpdate=!0;const U=M*4;for(let Q=0;Q<g;Q++){const F=b[Q],D=I[Q],j=B[Q],W=E*L*4*Q;for(let N=0;N<F.count;N++){const G=N*U;y===!0&&(s.fromBufferAttribute(F,N),z[W+G+0]=s.x,z[W+G+1]=s.y,z[W+G+2]=s.z,z[W+G+3]=0),x===!0&&(s.fromBufferAttribute(D,N),z[W+G+4]=s.x,z[W+G+5]=s.y,z[W+G+6]=s.z,z[W+G+7]=0),A===!0&&(s.fromBufferAttribute(j,N),z[W+G+8]=s.x,z[W+G+9]=s.y,z[W+G+10]=s.z,z[W+G+11]=j.itemSize===4?s.w:1)}}m={count:g,texture:q,size:new dt(E,L)},r.set(u,m),u.addEventListener("dispose",V)}let p=0;for(let y=0;y<d.length;y++)p+=d[y];const _=u.morphTargetsRelative?1:1-p;c.getUniforms().setValue(a,"morphTargetBaseInfluence",_),c.getUniforms().setValue(a,"morphTargetInfluences",d),c.getUniforms().setValue(a,"morphTargetsTexture",m.texture,t),c.getUniforms().setValue(a,"morphTargetsTextureSize",m.size)}else{const v=d===void 0?0:d.length;let g=n[u.id];if(g===void 0||g.length!==v){g=[];for(let x=0;x<v;x++)g[x]=[x,0];n[u.id]=g}for(let x=0;x<v;x++){const A=g[x];A[0]=x,A[1]=d[x]}g.sort(Kf);for(let x=0;x<8;x++)x<v&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(jf);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let _=0;for(let x=0;x<8;x++){const A=o[x],b=A[0],I=A[1];b!==Number.MAX_SAFE_INTEGER&&I?(m&&u.getAttribute("morphTarget"+x)!==m[b]&&u.setAttribute("morphTarget"+x,m[b]),p&&u.getAttribute("morphNormal"+x)!==p[b]&&u.setAttribute("morphNormal"+x,p[b]),i[x]=I,_+=I):(m&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),p&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}const y=u.morphTargetsRelative?1:1-_;c.getUniforms().setValue(a,"morphTargetBaseInfluence",y),c.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:l}}function $f(a,e,t,n){let i=new WeakMap;function r(l){const h=n.render.frame,u=l.geometry,c=e.get(l,u);if(i.get(c)!==h&&(e.update(c),i.set(c,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==h&&(t.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,a.ARRAY_BUFFER),i.set(l,h))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==h&&(d.update(),i.set(d,h))}return c}function s(){i=new WeakMap}function o(l){const h=l.target;h.removeEventListener("dispose",o),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:s}}class ql extends zt{constructor(e,t,n,i,r,s,o,l,h,u){if(u=u!==void 0?u:oi,u!==oi&&u!==zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===oi&&(n=kn),n===void 0&&u===zi&&(n=ai),super(null,i,r,s,o,l,u,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Bt,this.minFilter=l!==void 0?l:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Yl=new zt,jl=new ql(1,1);jl.compareFunction=Nl;const Kl=new Bl,Zl=new Dh,$l=new Wl,Lo=[],Io=[],No=new Float32Array(16),Do=new Float32Array(9),Uo=new Float32Array(4);function Yi(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let r=Lo[i];if(r===void 0&&(r=new Float32Array(i),Lo[i]=r),e!==0){n.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,a[s].toArray(r,o)}return r}function Nt(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function Dt(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function os(a,e){let t=Io[e];t===void 0&&(t=new Int32Array(e),Io[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function Jf(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Qf(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;a.uniform2fv(this.addr,e),Dt(t,e)}}function ep(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;a.uniform3fv(this.addr,e),Dt(t,e)}}function tp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;a.uniform4fv(this.addr,e),Dt(t,e)}}function np(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Nt(t,n))return;Uo.set(n),a.uniformMatrix2fv(this.addr,!1,Uo),Dt(t,n)}}function ip(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Nt(t,n))return;Do.set(n),a.uniformMatrix3fv(this.addr,!1,Do),Dt(t,n)}}function rp(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Nt(t,n))return;No.set(n),a.uniformMatrix4fv(this.addr,!1,No),Dt(t,n)}}function sp(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function ap(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;a.uniform2iv(this.addr,e),Dt(t,e)}}function op(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;a.uniform3iv(this.addr,e),Dt(t,e)}}function lp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;a.uniform4iv(this.addr,e),Dt(t,e)}}function cp(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function hp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;a.uniform2uiv(this.addr,e),Dt(t,e)}}function up(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;a.uniform3uiv(this.addr,e),Dt(t,e)}}function dp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;a.uniform4uiv(this.addr,e),Dt(t,e)}}function fp(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i);const r=this.type===a.SAMPLER_2D_SHADOW?jl:Yl;t.setTexture2D(e||r,i)}function pp(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Zl,i)}function mp(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||$l,i)}function vp(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Kl,i)}function gp(a){switch(a){case 5126:return Jf;case 35664:return Qf;case 35665:return ep;case 35666:return tp;case 35674:return np;case 35675:return ip;case 35676:return rp;case 5124:case 35670:return sp;case 35667:case 35671:return ap;case 35668:case 35672:return op;case 35669:case 35673:return lp;case 5125:return cp;case 36294:return hp;case 36295:return up;case 36296:return dp;case 35678:case 36198:case 36298:case 36306:case 35682:return fp;case 35679:case 36299:case 36307:return pp;case 35680:case 36300:case 36308:case 36293:return mp;case 36289:case 36303:case 36311:case 36292:return vp}}function _p(a,e){a.uniform1fv(this.addr,e)}function xp(a,e){const t=Yi(e,this.size,2);a.uniform2fv(this.addr,t)}function yp(a,e){const t=Yi(e,this.size,3);a.uniform3fv(this.addr,t)}function Mp(a,e){const t=Yi(e,this.size,4);a.uniform4fv(this.addr,t)}function Sp(a,e){const t=Yi(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function Ep(a,e){const t=Yi(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Tp(a,e){const t=Yi(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function Ap(a,e){a.uniform1iv(this.addr,e)}function wp(a,e){a.uniform2iv(this.addr,e)}function bp(a,e){a.uniform3iv(this.addr,e)}function Rp(a,e){a.uniform4iv(this.addr,e)}function Cp(a,e){a.uniform1uiv(this.addr,e)}function Pp(a,e){a.uniform2uiv(this.addr,e)}function Lp(a,e){a.uniform3uiv(this.addr,e)}function Ip(a,e){a.uniform4uiv(this.addr,e)}function Np(a,e,t){const n=this.cache,i=e.length,r=os(t,i);Nt(n,r)||(a.uniform1iv(this.addr,r),Dt(n,r));for(let s=0;s!==i;++s)t.setTexture2D(e[s]||Yl,r[s])}function Dp(a,e,t){const n=this.cache,i=e.length,r=os(t,i);Nt(n,r)||(a.uniform1iv(this.addr,r),Dt(n,r));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||Zl,r[s])}function Up(a,e,t){const n=this.cache,i=e.length,r=os(t,i);Nt(n,r)||(a.uniform1iv(this.addr,r),Dt(n,r));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||$l,r[s])}function Fp(a,e,t){const n=this.cache,i=e.length,r=os(t,i);Nt(n,r)||(a.uniform1iv(this.addr,r),Dt(n,r));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||Kl,r[s])}function Bp(a){switch(a){case 5126:return _p;case 35664:return xp;case 35665:return yp;case 35666:return Mp;case 35674:return Sp;case 35675:return Ep;case 35676:return Tp;case 5124:case 35670:return Ap;case 35667:case 35671:return wp;case 35668:case 35672:return bp;case 35669:case 35673:return Rp;case 5125:return Cp;case 36294:return Pp;case 36295:return Lp;case 36296:return Ip;case 35678:case 36198:case 36298:case 36306:case 35682:return Np;case 35679:case 36299:case 36307:return Dp;case 35680:case 36300:case 36308:case 36293:return Up;case 36289:case 36303:case 36311:case 36292:return Fp}}class Op{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=gp(t.type)}}class zp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bp(t.type)}}class Vp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Bs=/(\w+)(\])?(\[|\.)?/g;function Fo(a,e){a.seq.push(e),a.map[e.id]=e}function Hp(a,e,t){const n=a.name,i=n.length;for(Bs.lastIndex=0;;){const r=Bs.exec(n),s=Bs.lastIndex;let o=r[1];const l=r[2]==="]",h=r[3];if(l&&(o=o|0),h===void 0||h==="["&&s+2===i){Fo(t,h===void 0?new Op(o,a,e):new zp(o,a,e));break}else{let c=t.map[o];c===void 0&&(c=new Vp(o),Fo(t,c)),t=c}}}class Yr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),s=e.getUniformLocation(t,r.name);Hp(r,s,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,s=t.length;r!==s;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const s=e[i];s.id in t&&n.push(s)}return n}}function Bo(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}const Gp=37297;let kp=0;function Wp(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=i;s<r;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}function Xp(a){const e=_t.getPrimaries(_t.workingColorSpace),t=_t.getPrimaries(a);let n;switch(e===t?n="":e===Qr&&t===Jr?n="LinearDisplayP3ToLinearSRGB":e===Jr&&t===Qr&&(n="LinearSRGBToLinearDisplayP3"),a){case Ot:case is:return[n,"LinearTransferOETF"];case Rt:case ca:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",a),[n,"LinearTransferOETF"]}}function Oo(a,e,t){const n=a.getShaderParameter(e,a.COMPILE_STATUS),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const s=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Wp(a.getShaderSource(e),s)}else return i}function qp(a,e){const t=Xp(e);return`vec4 ${a}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Yp(a,e){let t;switch(e){case Hc:t="Linear";break;case Gc:t="Reinhard";break;case kc:t="OptimizedCineon";break;case Wc:t="ACESFilmic";break;case qc:t="AgX";break;case Xc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function jp(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.normalMapTangentSpace||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ii).join(`
`)}function Kp(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ii).join(`
`)}function Zp(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $p(a,e){const t={},n=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=a.getActiveAttrib(e,i),s=r.name;let o=1;r.type===a.FLOAT_MAT2&&(o=2),r.type===a.FLOAT_MAT3&&(o=3),r.type===a.FLOAT_MAT4&&(o=4),t[s]={type:r.type,location:a.getAttribLocation(e,s),locationSize:o}}return t}function Ii(a){return a!==""}function zo(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vo(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Jp=/^[ \t]*#include +<([\w\d./]+)>/gm;function na(a){return a.replace(Jp,em)}const Qp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function em(a,e){let t=it[e];if(t===void 0){const n=Qp.get(e);if(n!==void 0)t=it[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return na(t)}const tm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ho(a){return a.replace(tm,nm)}function nm(a,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Go(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function im(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===xl?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===mc?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Cn&&(e="SHADOWMAP_TYPE_VSM"),e}function rm(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Fi:case Bi:e="ENVMAP_TYPE_CUBE";break;case ns:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sm(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Bi:e="ENVMAP_MODE_REFRACTION";break}return e}function am(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case yl:e="ENVMAP_BLENDING_MULTIPLY";break;case zc:e="ENVMAP_BLENDING_MIX";break;case Vc:e="ENVMAP_BLENDING_ADD";break}return e}function om(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function lm(a,e,t,n){const i=a.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=im(t),h=rm(t),u=sm(t),c=am(t),d=om(t),f=t.isWebGL2?"":jp(t),v=Kp(t),g=Zp(r),m=i.createProgram();let p,_,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ii).join(`
`),p.length>0&&(p+=`
`),_=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ii).join(`
`),_.length>0&&(_+=`
`)):(p=[Go(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ii).join(`
`),_=[f,Go(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qn?"#define TONE_MAPPING":"",t.toneMapping!==qn?it.tonemapping_pars_fragment:"",t.toneMapping!==qn?Yp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,qp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ii).join(`
`)),s=na(s),s=zo(s,t),s=Vo(s,t),o=na(o),o=zo(o,t),o=Vo(o,t),s=Ho(s),o=Ho(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===so?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===so?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=y+p+s,A=y+_+o,b=Bo(i,i.VERTEX_SHADER,x),I=Bo(i,i.FRAGMENT_SHADER,A);i.attachShader(m,b),i.attachShader(m,I),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function B(z){if(a.debug.checkShaderErrors){const q=i.getProgramInfoLog(m).trim(),U=i.getShaderInfoLog(b).trim(),V=i.getShaderInfoLog(I).trim();let Q=!0,F=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(Q=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,m,b,I);else{const D=Oo(i,b,"vertex"),j=Oo(i,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+D+`
`+j)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(U===""||V==="")&&(F=!1);F&&(z.diagnostics={runnable:Q,programLog:q,vertexShader:{log:U,prefix:p},fragmentShader:{log:V,prefix:_}})}i.deleteShader(b),i.deleteShader(I),M=new Yr(i,m),E=$p(i,m)}let M;this.getUniforms=function(){return M===void 0&&B(this),M};let E;this.getAttributes=function(){return E===void 0&&B(this),E};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=i.getProgramParameter(m,Gp)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kp++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=I,this}let cm=0;class hm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new um(e),t.set(e,n)),n}}class um{constructor(e){this.id=cm++,this.code=e,this.usedTimes=0}}function dm(a,e,t,n,i,r,s){const o=new Ol,l=new hm,h=[],u=i.isWebGL2,c=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function m(M,E,L,z,q){const U=z.fog,V=q.geometry,Q=M.isMeshStandardMaterial?z.environment:null,F=(M.isMeshStandardMaterial?t:e).get(M.envMap||Q),D=F&&F.mapping===ns?F.image.height:null,j=v[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const W=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,N=W!==void 0?W.length:0;let G=0;V.morphAttributes.position!==void 0&&(G=1),V.morphAttributes.normal!==void 0&&(G=2),V.morphAttributes.color!==void 0&&(G=3);let w,R,C,X;if(j){const oe=mn[j];w=oe.vertexShader,R=oe.fragmentShader}else w=M.vertexShader,R=M.fragmentShader,l.update(M),C=l.getVertexShaderID(M),X=l.getFragmentShaderID(M);const ne=a.getRenderTarget(),ie=q.isInstancedMesh===!0,K=q.isBatchedMesh===!0,te=!!M.map,ce=!!M.matcap,Y=!!F,Ce=!!M.aoMap,ue=!!M.lightMap,se=!!M.bumpMap,ae=!!M.normalMap,We=!!M.displacementMap,Ae=!!M.emissiveMap,P=!!M.metalnessMap,S=!!M.roughnessMap,ee=M.anisotropy>0,de=M.clearcoat>0,he=M.iridescence>0,pe=M.sheen>0,Ee=M.transmission>0,_e=ee&&!!M.anisotropyMap,xe=de&&!!M.clearcoatMap,Ve=de&&!!M.clearcoatNormalMap,je=de&&!!M.clearcoatRoughnessMap,ge=he&&!!M.iridescenceMap,at=he&&!!M.iridescenceThicknessMap,et=pe&&!!M.sheenColorMap,qe=pe&&!!M.sheenRoughnessMap,He=!!M.specularMap,Oe=!!M.specularColorMap,Qe=!!M.specularIntensityMap,nt=Ee&&!!M.transmissionMap,ft=Ee&&!!M.thicknessMap,$e=!!M.gradientMap,Te=!!M.alphaMap,k=M.alphaTest>0,we=!!M.alphaHash,Le=!!M.extensions,Ke=!!V.attributes.uv1,Xe=!!V.attributes.uv2,pt=!!V.attributes.uv3;let mt=qn;return M.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(mt=a.toneMapping),{isWebGL2:u,shaderID:j,shaderType:M.type,shaderName:M.name,vertexShader:w,fragmentShader:R,defines:M.defines,customVertexShaderID:C,customFragmentShaderID:X,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:K,instancing:ie,instancingColor:ie&&q.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ne===null?a.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ot,map:te,matcap:ce,envMap:Y,envMapMode:Y&&F.mapping,envMapCubeUVHeight:D,aoMap:Ce,lightMap:ue,bumpMap:se,normalMap:ae,displacementMap:d&&We,emissiveMap:Ae,normalMapObjectSpace:ae&&M.normalMapType===ah,normalMapTangentSpace:ae&&M.normalMapType===Il,metalnessMap:P,roughnessMap:S,anisotropy:ee,anisotropyMap:_e,clearcoat:de,clearcoatMap:xe,clearcoatNormalMap:Ve,clearcoatRoughnessMap:je,iridescence:he,iridescenceMap:ge,iridescenceThicknessMap:at,sheen:pe,sheenColorMap:et,sheenRoughnessMap:qe,specularMap:He,specularColorMap:Oe,specularIntensityMap:Qe,transmission:Ee,transmissionMap:nt,thicknessMap:ft,gradientMap:$e,opaque:M.transparent===!1&&M.blending===Ni,alphaMap:Te,alphaTest:k,alphaHash:we,combine:M.combine,mapUv:te&&g(M.map.channel),aoMapUv:Ce&&g(M.aoMap.channel),lightMapUv:ue&&g(M.lightMap.channel),bumpMapUv:se&&g(M.bumpMap.channel),normalMapUv:ae&&g(M.normalMap.channel),displacementMapUv:We&&g(M.displacementMap.channel),emissiveMapUv:Ae&&g(M.emissiveMap.channel),metalnessMapUv:P&&g(M.metalnessMap.channel),roughnessMapUv:S&&g(M.roughnessMap.channel),anisotropyMapUv:_e&&g(M.anisotropyMap.channel),clearcoatMapUv:xe&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:je&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:at&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:et&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:qe&&g(M.sheenRoughnessMap.channel),specularMapUv:He&&g(M.specularMap.channel),specularColorMapUv:Oe&&g(M.specularColorMap.channel),specularIntensityMapUv:Qe&&g(M.specularIntensityMap.channel),transmissionMapUv:nt&&g(M.transmissionMap.channel),thicknessMapUv:ft&&g(M.thicknessMap.channel),alphaMapUv:Te&&g(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ae||ee),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:Ke,vertexUv2s:Xe,vertexUv3s:pt,pointsUvs:q.isPoints===!0&&!!V.attributes.uv&&(te||Te),fog:!!U,useFog:M.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:c,skinning:q.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:G,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:a.shadowMap.enabled&&L.length>0,shadowMapType:a.shadowMap.type,toneMapping:mt,useLegacyLights:a._useLegacyLights,decodeVideoTexture:te&&M.map.isVideoTexture===!0&&_t.getTransfer(M.map.colorSpace)===St,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===gn,flipSided:M.side===Kt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Le&&M.extensions.derivatives===!0,extensionFragDepth:Le&&M.extensions.fragDepth===!0,extensionDrawBuffers:Le&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Le&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Le&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)E.push(L),E.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(_(E,M),y(E,M),E.push(a.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function _(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function y(M,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),M.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function x(M){const E=v[M.type];let L;if(E){const z=mn[E];L=Yh.clone(z.uniforms)}else L=M.uniforms;return L}function A(M,E){let L;for(let z=0,q=h.length;z<q;z++){const U=h[z];if(U.cacheKey===E){L=U,++L.usedTimes;break}}return L===void 0&&(L=new lm(a,E,M,r),h.push(L)),L}function b(M){if(--M.usedTimes===0){const E=h.indexOf(M);h[E]=h[h.length-1],h.pop(),M.destroy()}}function I(M){l.remove(M)}function B(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:A,releaseProgram:b,releaseShaderCache:I,programs:h,dispose:B}}function fm(){let a=new WeakMap;function e(r){let s=a.get(r);return s===void 0&&(s={},a.set(r,s)),s}function t(r){a.delete(r)}function n(r,s,o){a.get(r)[s]=o}function i(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function pm(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function ko(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Wo(){const a=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function s(c,d,f,v,g,m){let p=a[e];return p===void 0?(p={id:c.id,object:c,geometry:d,material:f,groupOrder:v,renderOrder:c.renderOrder,z:g,group:m},a[e]=p):(p.id=c.id,p.object=c,p.geometry=d,p.material=f,p.groupOrder=v,p.renderOrder=c.renderOrder,p.z=g,p.group=m),e++,p}function o(c,d,f,v,g,m){const p=s(c,d,f,v,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(c,d,f,v,g,m){const p=s(c,d,f,v,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function h(c,d){t.length>1&&t.sort(c||pm),n.length>1&&n.sort(d||ko),i.length>1&&i.sort(d||ko)}function u(){for(let c=e,d=a.length;c<d;c++){const f=a[c];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:h}}function mm(){let a=new WeakMap;function e(n,i){const r=a.get(n);let s;return r===void 0?(s=new Wo,a.set(n,[s])):i>=r.length?(s=new Wo,r.push(s)):s=r[i],s}function t(){a=new WeakMap}return{get:e,dispose:t}}function vm(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new tt};break;case"SpotLight":t={position:new J,direction:new J,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new J,halfWidth:new J,halfHeight:new J};break}return a[e.id]=t,t}}}function gm(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let _m=0;function xm(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function ym(a,e){const t=new vm,n=gm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new J);const r=new J,s=new st,o=new st;function l(u,c){let d=0,f=0,v=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let g=0,m=0,p=0,_=0,y=0,x=0,A=0,b=0,I=0,B=0,M=0;u.sort(xm);const E=c===!0?Math.PI:1;for(let z=0,q=u.length;z<q;z++){const U=u[z],V=U.color,Q=U.intensity,F=U.distance,D=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=V.r*Q*E,f+=V.g*Q*E,v+=V.b*Q*E;else if(U.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(U.sh.coefficients[j],Q);M++}else if(U.isDirectionalLight){const j=t.get(U);if(j.color.copy(U.color).multiplyScalar(U.intensity*E),U.castShadow){const W=U.shadow,N=n.get(U);N.shadowBias=W.bias,N.shadowNormalBias=W.normalBias,N.shadowRadius=W.radius,N.shadowMapSize=W.mapSize,i.directionalShadow[g]=N,i.directionalShadowMap[g]=D,i.directionalShadowMatrix[g]=U.shadow.matrix,x++}i.directional[g]=j,g++}else if(U.isSpotLight){const j=t.get(U);j.position.setFromMatrixPosition(U.matrixWorld),j.color.copy(V).multiplyScalar(Q*E),j.distance=F,j.coneCos=Math.cos(U.angle),j.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),j.decay=U.decay,i.spot[p]=j;const W=U.shadow;if(U.map&&(i.spotLightMap[I]=U.map,I++,W.updateMatrices(U),U.castShadow&&B++),i.spotLightMatrix[p]=W.matrix,U.castShadow){const N=n.get(U);N.shadowBias=W.bias,N.shadowNormalBias=W.normalBias,N.shadowRadius=W.radius,N.shadowMapSize=W.mapSize,i.spotShadow[p]=N,i.spotShadowMap[p]=D,b++}p++}else if(U.isRectAreaLight){const j=t.get(U);j.color.copy(V).multiplyScalar(Q),j.halfWidth.set(U.width*.5,0,0),j.halfHeight.set(0,U.height*.5,0),i.rectArea[_]=j,_++}else if(U.isPointLight){const j=t.get(U);if(j.color.copy(U.color).multiplyScalar(U.intensity*E),j.distance=U.distance,j.decay=U.decay,U.castShadow){const W=U.shadow,N=n.get(U);N.shadowBias=W.bias,N.shadowNormalBias=W.normalBias,N.shadowRadius=W.radius,N.shadowMapSize=W.mapSize,N.shadowCameraNear=W.camera.near,N.shadowCameraFar=W.camera.far,i.pointShadow[m]=N,i.pointShadowMap[m]=D,i.pointShadowMatrix[m]=U.shadow.matrix,A++}i.point[m]=j,m++}else if(U.isHemisphereLight){const j=t.get(U);j.skyColor.copy(U.color).multiplyScalar(Q*E),j.groundColor.copy(U.groundColor).multiplyScalar(Q*E),i.hemi[y]=j,y++}}_>0&&(e.isWebGL2?a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ue.LTC_FLOAT_1,i.rectAreaLTC2=Ue.LTC_FLOAT_2):(i.rectAreaLTC1=Ue.LTC_HALF_1,i.rectAreaLTC2=Ue.LTC_HALF_2):a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ue.LTC_FLOAT_1,i.rectAreaLTC2=Ue.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Ue.LTC_HALF_1,i.rectAreaLTC2=Ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=v;const L=i.hash;(L.directionalLength!==g||L.pointLength!==m||L.spotLength!==p||L.rectAreaLength!==_||L.hemiLength!==y||L.numDirectionalShadows!==x||L.numPointShadows!==A||L.numSpotShadows!==b||L.numSpotMaps!==I||L.numLightProbes!==M)&&(i.directional.length=g,i.spot.length=p,i.rectArea.length=_,i.point.length=m,i.hemi.length=y,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=b+I-B,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=B,i.numLightProbes=M,L.directionalLength=g,L.pointLength=m,L.spotLength=p,L.rectAreaLength=_,L.hemiLength=y,L.numDirectionalShadows=x,L.numPointShadows=A,L.numSpotShadows=b,L.numSpotMaps=I,L.numLightProbes=M,i.version=_m++)}function h(u,c){let d=0,f=0,v=0,g=0,m=0;const p=c.matrixWorldInverse;for(let _=0,y=u.length;_<y;_++){const x=u[_];if(x.isDirectionalLight){const A=i.directional[d];A.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),d++}else if(x.isSpotLight){const A=i.spot[v];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),v++}else if(x.isRectAreaLight){const A=i.rectArea[g];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(p),o.identity(),s.copy(x.matrixWorld),s.premultiply(p),o.extractRotation(s),A.halfWidth.set(x.width*.5,0,0),A.halfHeight.set(0,x.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const A=i.point[f];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const A=i.hemi[m];A.direction.setFromMatrixPosition(x.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:l,setupView:h,state:i}}function Xo(a,e){const t=new ym(a,e),n=[],i=[];function r(){n.length=0,i.length=0}function s(c){n.push(c)}function o(c){i.push(c)}function l(c){t.setup(n,c)}function h(c){t.setupView(n,c)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:h,pushLight:s,pushShadow:o}}function Mm(a,e){let t=new WeakMap;function n(r,s=0){const o=t.get(r);let l;return o===void 0?(l=new Xo(a,e),t.set(r,[l])):s>=o.length?(l=new Xo(a,e),o.push(l)):l=o[s],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Sm extends xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Em extends xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Tm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Am=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function wm(a,e,t){let n=new ua;const i=new dt,r=new dt,s=new Mt,o=new Sm({depthPacking:sh}),l=new Em,h={},u=t.maxTextureSize,c={[Nn]:Kt,[Kt]:Nn,[gn]:gn},d=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:Tm,fragmentShader:Am}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const v=new pn;v.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new jt(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xl;let p=this.type;this.render=function(b,I,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const M=a.getRenderTarget(),E=a.getActiveCubeFace(),L=a.getActiveMipmapLevel(),z=a.state;z.setBlending(Xn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const q=p!==Cn&&this.type===Cn,U=p===Cn&&this.type!==Cn;for(let V=0,Q=b.length;V<Q;V++){const F=b[V],D=F.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const j=D.getFrameExtents();if(i.multiply(j),r.copy(D.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/j.x),i.x=r.x*j.x,D.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/j.y),i.y=r.y*j.y,D.mapSize.y=r.y)),D.map===null||q===!0||U===!0){const N=this.type!==Cn?{minFilter:Bt,magFilter:Bt}:{};D.map!==null&&D.map.dispose(),D.map=new hi(i.x,i.y,N),D.map.texture.name=F.name+".shadowMap",D.camera.updateProjectionMatrix()}a.setRenderTarget(D.map),a.clear();const W=D.getViewportCount();for(let N=0;N<W;N++){const G=D.getViewport(N);s.set(r.x*G.x,r.y*G.y,r.x*G.z,r.y*G.w),z.viewport(s),D.updateMatrices(F,N),n=D.getFrustum(),x(I,B,D.camera,F,this.type)}D.isPointLightShadow!==!0&&this.type===Cn&&_(D,B),D.needsUpdate=!1}p=this.type,m.needsUpdate=!1,a.setRenderTarget(M,E,L)};function _(b,I){const B=e.update(g);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new hi(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,a.setRenderTarget(b.mapPass),a.clear(),a.renderBufferDirect(I,null,B,d,g,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,a.setRenderTarget(b.map),a.clear(),a.renderBufferDirect(I,null,B,f,g,null)}function y(b,I,B,M){let E=null;const L=B.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)E=L;else if(E=B.isPointLight===!0?l:o,a.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const z=E.uuid,q=I.uuid;let U=h[z];U===void 0&&(U={},h[z]=U);let V=U[q];V===void 0&&(V=E.clone(),U[q]=V,I.addEventListener("dispose",A)),E=V}if(E.visible=I.visible,E.wireframe=I.wireframe,M===Cn?E.side=I.shadowSide!==null?I.shadowSide:I.side:E.side=I.shadowSide!==null?I.shadowSide:c[I.side],E.alphaMap=I.alphaMap,E.alphaTest=I.alphaTest,E.map=I.map,E.clipShadows=I.clipShadows,E.clippingPlanes=I.clippingPlanes,E.clipIntersection=I.clipIntersection,E.displacementMap=I.displacementMap,E.displacementScale=I.displacementScale,E.displacementBias=I.displacementBias,E.wireframeLinewidth=I.wireframeLinewidth,E.linewidth=I.linewidth,B.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const z=a.properties.get(E);z.light=B}return E}function x(b,I,B,M,E){if(b.visible===!1)return;if(b.layers.test(I.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&E===Cn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld);const q=e.update(b),U=b.material;if(Array.isArray(U)){const V=q.groups;for(let Q=0,F=V.length;Q<F;Q++){const D=V[Q],j=U[D.materialIndex];if(j&&j.visible){const W=y(b,j,M,E);b.onBeforeShadow(a,b,I,B,q,W,D),a.renderBufferDirect(B,null,q,W,b,D),b.onAfterShadow(a,b,I,B,q,W,D)}}}else if(U.visible){const V=y(b,U,M,E);b.onBeforeShadow(a,b,I,B,q,V,null),a.renderBufferDirect(B,null,q,V,b,null),b.onAfterShadow(a,b,I,B,q,V,null)}}const z=b.children;for(let q=0,U=z.length;q<U;q++)x(z[q],I,B,M,E)}function A(b){b.target.removeEventListener("dispose",A);for(const B in h){const M=h[B],E=b.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}function bm(a,e,t){const n=t.isWebGL2;function i(){let k=!1;const we=new Mt;let Le=null;const Ke=new Mt(0,0,0,0);return{setMask:function(Xe){Le!==Xe&&!k&&(a.colorMask(Xe,Xe,Xe,Xe),Le=Xe)},setLocked:function(Xe){k=Xe},setClear:function(Xe,pt,mt,ot,oe){oe===!0&&(Xe*=ot,pt*=ot,mt*=ot),we.set(Xe,pt,mt,ot),Ke.equals(we)===!1&&(a.clearColor(Xe,pt,mt,ot),Ke.copy(we))},reset:function(){k=!1,Le=null,Ke.set(-1,0,0,0)}}}function r(){let k=!1,we=null,Le=null,Ke=null;return{setTest:function(Xe){Xe?K(a.DEPTH_TEST):te(a.DEPTH_TEST)},setMask:function(Xe){we!==Xe&&!k&&(a.depthMask(Xe),we=Xe)},setFunc:function(Xe){if(Le!==Xe){switch(Xe){case Ic:a.depthFunc(a.NEVER);break;case Nc:a.depthFunc(a.ALWAYS);break;case Dc:a.depthFunc(a.LESS);break;case Kr:a.depthFunc(a.LEQUAL);break;case Uc:a.depthFunc(a.EQUAL);break;case Fc:a.depthFunc(a.GEQUAL);break;case Bc:a.depthFunc(a.GREATER);break;case Oc:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Le=Xe}},setLocked:function(Xe){k=Xe},setClear:function(Xe){Ke!==Xe&&(a.clearDepth(Xe),Ke=Xe)},reset:function(){k=!1,we=null,Le=null,Ke=null}}}function s(){let k=!1,we=null,Le=null,Ke=null,Xe=null,pt=null,mt=null,ot=null,oe=null;return{setTest:function(le){k||(le?K(a.STENCIL_TEST):te(a.STENCIL_TEST))},setMask:function(le){we!==le&&!k&&(a.stencilMask(le),we=le)},setFunc:function(le,fe,me){(Le!==le||Ke!==fe||Xe!==me)&&(a.stencilFunc(le,fe,me),Le=le,Ke=fe,Xe=me)},setOp:function(le,fe,me){(pt!==le||mt!==fe||ot!==me)&&(a.stencilOp(le,fe,me),pt=le,mt=fe,ot=me)},setLocked:function(le){k=le},setClear:function(le){oe!==le&&(a.clearStencil(le),oe=le)},reset:function(){k=!1,we=null,Le=null,Ke=null,Xe=null,pt=null,mt=null,ot=null,oe=null}}}const o=new i,l=new r,h=new s,u=new WeakMap,c=new WeakMap;let d={},f={},v=new WeakMap,g=[],m=null,p=!1,_=null,y=null,x=null,A=null,b=null,I=null,B=null,M=new tt(0,0,0),E=0,L=!1,z=null,q=null,U=null,V=null,Q=null;const F=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,j=0;const W=a.getParameter(a.VERSION);W.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(W)[1]),D=j>=1):W.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),D=j>=2);let N=null,G={};const w=a.getParameter(a.SCISSOR_BOX),R=a.getParameter(a.VIEWPORT),C=new Mt().fromArray(w),X=new Mt().fromArray(R);function ne(k,we,Le,Ke){const Xe=new Uint8Array(4),pt=a.createTexture();a.bindTexture(k,pt),a.texParameteri(k,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(k,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let mt=0;mt<Le;mt++)n&&(k===a.TEXTURE_3D||k===a.TEXTURE_2D_ARRAY)?a.texImage3D(we,0,a.RGBA,1,1,Ke,0,a.RGBA,a.UNSIGNED_BYTE,Xe):a.texImage2D(we+mt,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Xe);return pt}const ie={};ie[a.TEXTURE_2D]=ne(a.TEXTURE_2D,a.TEXTURE_2D,1),ie[a.TEXTURE_CUBE_MAP]=ne(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ie[a.TEXTURE_2D_ARRAY]=ne(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),ie[a.TEXTURE_3D]=ne(a.TEXTURE_3D,a.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),h.setClear(0),K(a.DEPTH_TEST),l.setFunc(Kr),Ae(!1),P(Ea),K(a.CULL_FACE),ae(Xn);function K(k){d[k]!==!0&&(a.enable(k),d[k]=!0)}function te(k){d[k]!==!1&&(a.disable(k),d[k]=!1)}function ce(k,we){return f[k]!==we?(a.bindFramebuffer(k,we),f[k]=we,n&&(k===a.DRAW_FRAMEBUFFER&&(f[a.FRAMEBUFFER]=we),k===a.FRAMEBUFFER&&(f[a.DRAW_FRAMEBUFFER]=we)),!0):!1}function Y(k,we){let Le=g,Ke=!1;if(k)if(Le=v.get(we),Le===void 0&&(Le=[],v.set(we,Le)),k.isWebGLMultipleRenderTargets){const Xe=k.texture;if(Le.length!==Xe.length||Le[0]!==a.COLOR_ATTACHMENT0){for(let pt=0,mt=Xe.length;pt<mt;pt++)Le[pt]=a.COLOR_ATTACHMENT0+pt;Le.length=Xe.length,Ke=!0}}else Le[0]!==a.COLOR_ATTACHMENT0&&(Le[0]=a.COLOR_ATTACHMENT0,Ke=!0);else Le[0]!==a.BACK&&(Le[0]=a.BACK,Ke=!0);Ke&&(t.isWebGL2?a.drawBuffers(Le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Le))}function Ce(k){return m!==k?(a.useProgram(k),m=k,!0):!1}const ue={[ii]:a.FUNC_ADD,[gc]:a.FUNC_SUBTRACT,[_c]:a.FUNC_REVERSE_SUBTRACT};if(n)ue[ba]=a.MIN,ue[Ra]=a.MAX;else{const k=e.get("EXT_blend_minmax");k!==null&&(ue[ba]=k.MIN_EXT,ue[Ra]=k.MAX_EXT)}const se={[xc]:a.ZERO,[yc]:a.ONE,[Mc]:a.SRC_COLOR,[Ys]:a.SRC_ALPHA,[bc]:a.SRC_ALPHA_SATURATE,[Ac]:a.DST_COLOR,[Ec]:a.DST_ALPHA,[Sc]:a.ONE_MINUS_SRC_COLOR,[js]:a.ONE_MINUS_SRC_ALPHA,[wc]:a.ONE_MINUS_DST_COLOR,[Tc]:a.ONE_MINUS_DST_ALPHA,[Rc]:a.CONSTANT_COLOR,[Cc]:a.ONE_MINUS_CONSTANT_COLOR,[Pc]:a.CONSTANT_ALPHA,[Lc]:a.ONE_MINUS_CONSTANT_ALPHA};function ae(k,we,Le,Ke,Xe,pt,mt,ot,oe,le){if(k===Xn){p===!0&&(te(a.BLEND),p=!1);return}if(p===!1&&(K(a.BLEND),p=!0),k!==vc){if(k!==_||le!==L){if((y!==ii||b!==ii)&&(a.blendEquation(a.FUNC_ADD),y=ii,b=ii),le)switch(k){case Ni:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Ta:a.blendFunc(a.ONE,a.ONE);break;case Aa:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case wa:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ni:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Ta:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case Aa:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case wa:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}x=null,A=null,I=null,B=null,M.set(0,0,0),E=0,_=k,L=le}return}Xe=Xe||we,pt=pt||Le,mt=mt||Ke,(we!==y||Xe!==b)&&(a.blendEquationSeparate(ue[we],ue[Xe]),y=we,b=Xe),(Le!==x||Ke!==A||pt!==I||mt!==B)&&(a.blendFuncSeparate(se[Le],se[Ke],se[pt],se[mt]),x=Le,A=Ke,I=pt,B=mt),(ot.equals(M)===!1||oe!==E)&&(a.blendColor(ot.r,ot.g,ot.b,oe),M.copy(ot),E=oe),_=k,L=!1}function We(k,we){k.side===gn?te(a.CULL_FACE):K(a.CULL_FACE);let Le=k.side===Kt;we&&(Le=!Le),Ae(Le),k.blending===Ni&&k.transparent===!1?ae(Xn):ae(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),l.setFunc(k.depthFunc),l.setTest(k.depthTest),l.setMask(k.depthWrite),o.setMask(k.colorWrite);const Ke=k.stencilWrite;h.setTest(Ke),Ke&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ee(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?K(a.SAMPLE_ALPHA_TO_COVERAGE):te(a.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(k){z!==k&&(k?a.frontFace(a.CW):a.frontFace(a.CCW),z=k)}function P(k){k!==fc?(K(a.CULL_FACE),k!==q&&(k===Ea?a.cullFace(a.BACK):k===pc?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):te(a.CULL_FACE),q=k}function S(k){k!==U&&(D&&a.lineWidth(k),U=k)}function ee(k,we,Le){k?(K(a.POLYGON_OFFSET_FILL),(V!==we||Q!==Le)&&(a.polygonOffset(we,Le),V=we,Q=Le)):te(a.POLYGON_OFFSET_FILL)}function de(k){k?K(a.SCISSOR_TEST):te(a.SCISSOR_TEST)}function he(k){k===void 0&&(k=a.TEXTURE0+F-1),N!==k&&(a.activeTexture(k),N=k)}function pe(k,we,Le){Le===void 0&&(N===null?Le=a.TEXTURE0+F-1:Le=N);let Ke=G[Le];Ke===void 0&&(Ke={type:void 0,texture:void 0},G[Le]=Ke),(Ke.type!==k||Ke.texture!==we)&&(N!==Le&&(a.activeTexture(Le),N=Le),a.bindTexture(k,we||ie[k]),Ke.type=k,Ke.texture=we)}function Ee(){const k=G[N];k!==void 0&&k.type!==void 0&&(a.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function _e(){try{a.compressedTexImage2D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xe(){try{a.compressedTexImage3D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ve(){try{a.texSubImage2D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function je(){try{a.texSubImage3D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function at(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function et(){try{a.texStorage2D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function qe(){try{a.texStorage3D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function He(){try{a.texImage2D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Oe(){try{a.texImage3D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Qe(k){C.equals(k)===!1&&(a.scissor(k.x,k.y,k.z,k.w),C.copy(k))}function nt(k){X.equals(k)===!1&&(a.viewport(k.x,k.y,k.z,k.w),X.copy(k))}function ft(k,we){let Le=c.get(we);Le===void 0&&(Le=new WeakMap,c.set(we,Le));let Ke=Le.get(k);Ke===void 0&&(Ke=a.getUniformBlockIndex(we,k.name),Le.set(k,Ke))}function $e(k,we){const Ke=c.get(we).get(k);u.get(we)!==Ke&&(a.uniformBlockBinding(we,Ke,k.__bindingPointIndex),u.set(we,Ke))}function Te(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),n===!0&&(a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),d={},N=null,G={},f={},v=new WeakMap,g=[],m=null,p=!1,_=null,y=null,x=null,A=null,b=null,I=null,B=null,M=new tt(0,0,0),E=0,L=!1,z=null,q=null,U=null,V=null,Q=null,C.set(0,0,a.canvas.width,a.canvas.height),X.set(0,0,a.canvas.width,a.canvas.height),o.reset(),l.reset(),h.reset()}return{buffers:{color:o,depth:l,stencil:h},enable:K,disable:te,bindFramebuffer:ce,drawBuffers:Y,useProgram:Ce,setBlending:ae,setMaterial:We,setFlipSided:Ae,setCullFace:P,setLineWidth:S,setPolygonOffset:ee,setScissorTest:de,activeTexture:he,bindTexture:pe,unbindTexture:Ee,compressedTexImage2D:_e,compressedTexImage3D:xe,texImage2D:He,texImage3D:Oe,updateUBOMapping:ft,uniformBlockBinding:$e,texStorage2D:et,texStorage3D:qe,texSubImage2D:Ve,texSubImage3D:je,compressedTexSubImage2D:ge,compressedTexSubImage3D:at,scissor:Qe,viewport:nt,reset:Te}}function Rm(a,e,t,n,i,r,s){const o=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let c;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,S){return f?new OffscreenCanvas(P,S):dr("canvas")}function g(P,S,ee,de){let he=1;if((P.width>de||P.height>de)&&(he=de/Math.max(P.width,P.height)),he<1||S===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const pe=S?ts:Math.floor,Ee=pe(he*P.width),_e=pe(he*P.height);c===void 0&&(c=v(Ee,_e));const xe=ee?v(Ee,_e):c;return xe.width=Ee,xe.height=_e,xe.getContext("2d").drawImage(P,0,0,Ee,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Ee+"x"+_e+")."),xe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function m(P){return ta(P.width)&&ta(P.height)}function p(P){return o?!1:P.wrapS!==rn||P.wrapT!==rn||P.minFilter!==Bt&&P.minFilter!==Yt}function _(P,S){return P.generateMipmaps&&S&&P.minFilter!==Bt&&P.minFilter!==Yt}function y(P){a.generateMipmap(P)}function x(P,S,ee,de,he=!1){if(o===!1)return S;if(P!==null){if(a[P]!==void 0)return a[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let pe=S;if(S===a.RED&&(ee===a.FLOAT&&(pe=a.R32F),ee===a.HALF_FLOAT&&(pe=a.R16F),ee===a.UNSIGNED_BYTE&&(pe=a.R8)),S===a.RED_INTEGER&&(ee===a.UNSIGNED_BYTE&&(pe=a.R8UI),ee===a.UNSIGNED_SHORT&&(pe=a.R16UI),ee===a.UNSIGNED_INT&&(pe=a.R32UI),ee===a.BYTE&&(pe=a.R8I),ee===a.SHORT&&(pe=a.R16I),ee===a.INT&&(pe=a.R32I)),S===a.RG&&(ee===a.FLOAT&&(pe=a.RG32F),ee===a.HALF_FLOAT&&(pe=a.RG16F),ee===a.UNSIGNED_BYTE&&(pe=a.RG8)),S===a.RGBA){const Ee=he?$r:_t.getTransfer(de);ee===a.FLOAT&&(pe=a.RGBA32F),ee===a.HALF_FLOAT&&(pe=a.RGBA16F),ee===a.UNSIGNED_BYTE&&(pe=Ee===St?a.SRGB8_ALPHA8:a.RGBA8),ee===a.UNSIGNED_SHORT_4_4_4_4&&(pe=a.RGBA4),ee===a.UNSIGNED_SHORT_5_5_5_1&&(pe=a.RGB5_A1)}return(pe===a.R16F||pe===a.R32F||pe===a.RG16F||pe===a.RG32F||pe===a.RGBA16F||pe===a.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function A(P,S,ee){return _(P,ee)===!0||P.isFramebufferTexture&&P.minFilter!==Bt&&P.minFilter!==Yt?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function b(P){return P===Bt||P===$s||P===qr?a.NEAREST:a.LINEAR}function I(P){const S=P.target;S.removeEventListener("dispose",I),M(S),S.isVideoTexture&&u.delete(S)}function B(P){const S=P.target;S.removeEventListener("dispose",B),L(S)}function M(P){const S=n.get(P);if(S.__webglInit===void 0)return;const ee=P.source,de=d.get(ee);if(de){const he=de[S.__cacheKey];he.usedTimes--,he.usedTimes===0&&E(P),Object.keys(de).length===0&&d.delete(ee)}n.remove(P)}function E(P){const S=n.get(P);a.deleteTexture(S.__webglTexture);const ee=P.source,de=d.get(ee);delete de[S.__cacheKey],s.memory.textures--}function L(P){const S=P.texture,ee=n.get(P),de=n.get(S);if(de.__webglTexture!==void 0&&(a.deleteTexture(de.__webglTexture),s.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(ee.__webglFramebuffer[he]))for(let pe=0;pe<ee.__webglFramebuffer[he].length;pe++)a.deleteFramebuffer(ee.__webglFramebuffer[he][pe]);else a.deleteFramebuffer(ee.__webglFramebuffer[he]);ee.__webglDepthbuffer&&a.deleteRenderbuffer(ee.__webglDepthbuffer[he])}else{if(Array.isArray(ee.__webglFramebuffer))for(let he=0;he<ee.__webglFramebuffer.length;he++)a.deleteFramebuffer(ee.__webglFramebuffer[he]);else a.deleteFramebuffer(ee.__webglFramebuffer);if(ee.__webglDepthbuffer&&a.deleteRenderbuffer(ee.__webglDepthbuffer),ee.__webglMultisampledFramebuffer&&a.deleteFramebuffer(ee.__webglMultisampledFramebuffer),ee.__webglColorRenderbuffer)for(let he=0;he<ee.__webglColorRenderbuffer.length;he++)ee.__webglColorRenderbuffer[he]&&a.deleteRenderbuffer(ee.__webglColorRenderbuffer[he]);ee.__webglDepthRenderbuffer&&a.deleteRenderbuffer(ee.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let he=0,pe=S.length;he<pe;he++){const Ee=n.get(S[he]);Ee.__webglTexture&&(a.deleteTexture(Ee.__webglTexture),s.memory.textures--),n.remove(S[he])}n.remove(S),n.remove(P)}let z=0;function q(){z=0}function U(){const P=z;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),z+=1,P}function V(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function Q(P,S){const ee=n.get(P);if(P.isVideoTexture&&We(P),P.isRenderTargetTexture===!1&&P.version>0&&ee.__version!==P.version){const de=P.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{C(ee,P,S);return}}t.bindTexture(a.TEXTURE_2D,ee.__webglTexture,a.TEXTURE0+S)}function F(P,S){const ee=n.get(P);if(P.version>0&&ee.__version!==P.version){C(ee,P,S);return}t.bindTexture(a.TEXTURE_2D_ARRAY,ee.__webglTexture,a.TEXTURE0+S)}function D(P,S){const ee=n.get(P);if(P.version>0&&ee.__version!==P.version){C(ee,P,S);return}t.bindTexture(a.TEXTURE_3D,ee.__webglTexture,a.TEXTURE0+S)}function j(P,S){const ee=n.get(P);if(P.version>0&&ee.__version!==P.version){X(ee,P,S);return}t.bindTexture(a.TEXTURE_CUBE_MAP,ee.__webglTexture,a.TEXTURE0+S)}const W={[Oi]:a.REPEAT,[rn]:a.CLAMP_TO_EDGE,[Zr]:a.MIRRORED_REPEAT},N={[Bt]:a.NEAREST,[$s]:a.NEAREST_MIPMAP_NEAREST,[qr]:a.NEAREST_MIPMAP_LINEAR,[Yt]:a.LINEAR,[Sl]:a.LINEAR_MIPMAP_NEAREST,[ci]:a.LINEAR_MIPMAP_LINEAR},G={[oh]:a.NEVER,[fh]:a.ALWAYS,[lh]:a.LESS,[Nl]:a.LEQUAL,[ch]:a.EQUAL,[dh]:a.GEQUAL,[hh]:a.GREATER,[uh]:a.NOTEQUAL};function w(P,S,ee){if(ee?(a.texParameteri(P,a.TEXTURE_WRAP_S,W[S.wrapS]),a.texParameteri(P,a.TEXTURE_WRAP_T,W[S.wrapT]),(P===a.TEXTURE_3D||P===a.TEXTURE_2D_ARRAY)&&a.texParameteri(P,a.TEXTURE_WRAP_R,W[S.wrapR]),a.texParameteri(P,a.TEXTURE_MAG_FILTER,N[S.magFilter]),a.texParameteri(P,a.TEXTURE_MIN_FILTER,N[S.minFilter])):(a.texParameteri(P,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(P,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),(P===a.TEXTURE_3D||P===a.TEXTURE_2D_ARRAY)&&a.texParameteri(P,a.TEXTURE_WRAP_R,a.CLAMP_TO_EDGE),(S.wrapS!==rn||S.wrapT!==rn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(P,a.TEXTURE_MAG_FILTER,b(S.magFilter)),a.texParameteri(P,a.TEXTURE_MIN_FILTER,b(S.minFilter)),S.minFilter!==Bt&&S.minFilter!==Yt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(a.texParameteri(P,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(P,a.TEXTURE_COMPARE_FUNC,G[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const de=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Bt||S.minFilter!==qr&&S.minFilter!==ci||S.type===Pn&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===hr&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(a.texParameterf(P,de.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function R(P,S){let ee=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",I));const de=S.source;let he=d.get(de);he===void 0&&(he={},d.set(de,he));const pe=V(S);if(pe!==P.__cacheKey){he[pe]===void 0&&(he[pe]={texture:a.createTexture(),usedTimes:0},s.memory.textures++,ee=!0),he[pe].usedTimes++;const Ee=he[P.__cacheKey];Ee!==void 0&&(he[P.__cacheKey].usedTimes--,Ee.usedTimes===0&&E(S)),P.__cacheKey=pe,P.__webglTexture=he[pe].texture}return ee}function C(P,S,ee){let de=a.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(de=a.TEXTURE_2D_ARRAY),S.isData3DTexture&&(de=a.TEXTURE_3D);const he=R(P,S),pe=S.source;t.bindTexture(de,P.__webglTexture,a.TEXTURE0+ee);const Ee=n.get(pe);if(pe.version!==Ee.__version||he===!0){t.activeTexture(a.TEXTURE0+ee);const _e=_t.getPrimaries(_t.workingColorSpace),xe=S.colorSpace===an?null:_t.getPrimaries(S.colorSpace),Ve=S.colorSpace===an||_e===xe?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,S.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,S.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const je=p(S)&&m(S.image)===!1;let ge=g(S.image,je,!1,i.maxTextureSize);ge=Ae(S,ge);const at=m(ge)||o,et=r.convert(S.format,S.colorSpace);let qe=r.convert(S.type),He=x(S.internalFormat,et,qe,S.colorSpace,S.isVideoTexture);w(de,S,at);let Oe;const Qe=S.mipmaps,nt=o&&S.isVideoTexture!==!0&&He!==Cl,ft=Ee.__version===void 0||he===!0,$e=A(S,ge,at);if(S.isDepthTexture)He=a.DEPTH_COMPONENT,o?S.type===Pn?He=a.DEPTH_COMPONENT32F:S.type===kn?He=a.DEPTH_COMPONENT24:S.type===ai?He=a.DEPTH24_STENCIL8:He=a.DEPTH_COMPONENT16:S.type===Pn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===oi&&He===a.DEPTH_COMPONENT&&S.type!==la&&S.type!==kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=kn,qe=r.convert(S.type)),S.format===zi&&He===a.DEPTH_COMPONENT&&(He=a.DEPTH_STENCIL,S.type!==ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=ai,qe=r.convert(S.type))),ft&&(nt?t.texStorage2D(a.TEXTURE_2D,1,He,ge.width,ge.height):t.texImage2D(a.TEXTURE_2D,0,He,ge.width,ge.height,0,et,qe,null));else if(S.isDataTexture)if(Qe.length>0&&at){nt&&ft&&t.texStorage2D(a.TEXTURE_2D,$e,He,Qe[0].width,Qe[0].height);for(let Te=0,k=Qe.length;Te<k;Te++)Oe=Qe[Te],nt?t.texSubImage2D(a.TEXTURE_2D,Te,0,0,Oe.width,Oe.height,et,qe,Oe.data):t.texImage2D(a.TEXTURE_2D,Te,He,Oe.width,Oe.height,0,et,qe,Oe.data);S.generateMipmaps=!1}else nt?(ft&&t.texStorage2D(a.TEXTURE_2D,$e,He,ge.width,ge.height),t.texSubImage2D(a.TEXTURE_2D,0,0,0,ge.width,ge.height,et,qe,ge.data)):t.texImage2D(a.TEXTURE_2D,0,He,ge.width,ge.height,0,et,qe,ge.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){nt&&ft&&t.texStorage3D(a.TEXTURE_2D_ARRAY,$e,He,Qe[0].width,Qe[0].height,ge.depth);for(let Te=0,k=Qe.length;Te<k;Te++)Oe=Qe[Te],S.format!==sn?et!==null?nt?t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Te,0,0,0,Oe.width,Oe.height,ge.depth,et,Oe.data,0,0):t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Te,He,Oe.width,Oe.height,ge.depth,0,Oe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage3D(a.TEXTURE_2D_ARRAY,Te,0,0,0,Oe.width,Oe.height,ge.depth,et,qe,Oe.data):t.texImage3D(a.TEXTURE_2D_ARRAY,Te,He,Oe.width,Oe.height,ge.depth,0,et,qe,Oe.data)}else{nt&&ft&&t.texStorage2D(a.TEXTURE_2D,$e,He,Qe[0].width,Qe[0].height);for(let Te=0,k=Qe.length;Te<k;Te++)Oe=Qe[Te],S.format!==sn?et!==null?nt?t.compressedTexSubImage2D(a.TEXTURE_2D,Te,0,0,Oe.width,Oe.height,et,Oe.data):t.compressedTexImage2D(a.TEXTURE_2D,Te,He,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage2D(a.TEXTURE_2D,Te,0,0,Oe.width,Oe.height,et,qe,Oe.data):t.texImage2D(a.TEXTURE_2D,Te,He,Oe.width,Oe.height,0,et,qe,Oe.data)}else if(S.isDataArrayTexture)nt?(ft&&t.texStorage3D(a.TEXTURE_2D_ARRAY,$e,He,ge.width,ge.height,ge.depth),t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,et,qe,ge.data)):t.texImage3D(a.TEXTURE_2D_ARRAY,0,He,ge.width,ge.height,ge.depth,0,et,qe,ge.data);else if(S.isData3DTexture)nt?(ft&&t.texStorage3D(a.TEXTURE_3D,$e,He,ge.width,ge.height,ge.depth),t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,et,qe,ge.data)):t.texImage3D(a.TEXTURE_3D,0,He,ge.width,ge.height,ge.depth,0,et,qe,ge.data);else if(S.isFramebufferTexture){if(ft)if(nt)t.texStorage2D(a.TEXTURE_2D,$e,He,ge.width,ge.height);else{let Te=ge.width,k=ge.height;for(let we=0;we<$e;we++)t.texImage2D(a.TEXTURE_2D,we,He,Te,k,0,et,qe,null),Te>>=1,k>>=1}}else if(Qe.length>0&&at){nt&&ft&&t.texStorage2D(a.TEXTURE_2D,$e,He,Qe[0].width,Qe[0].height);for(let Te=0,k=Qe.length;Te<k;Te++)Oe=Qe[Te],nt?t.texSubImage2D(a.TEXTURE_2D,Te,0,0,et,qe,Oe):t.texImage2D(a.TEXTURE_2D,Te,He,et,qe,Oe);S.generateMipmaps=!1}else nt?(ft&&t.texStorage2D(a.TEXTURE_2D,$e,He,ge.width,ge.height),t.texSubImage2D(a.TEXTURE_2D,0,0,0,et,qe,ge)):t.texImage2D(a.TEXTURE_2D,0,He,et,qe,ge);_(S,at)&&y(de),Ee.__version=pe.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function X(P,S,ee){if(S.image.length!==6)return;const de=R(P,S),he=S.source;t.bindTexture(a.TEXTURE_CUBE_MAP,P.__webglTexture,a.TEXTURE0+ee);const pe=n.get(he);if(he.version!==pe.__version||de===!0){t.activeTexture(a.TEXTURE0+ee);const Ee=_t.getPrimaries(_t.workingColorSpace),_e=S.colorSpace===an?null:_t.getPrimaries(S.colorSpace),xe=S.colorSpace===an||Ee===_e?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,S.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,S.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ve=S.isCompressedTexture||S.image[0].isCompressedTexture,je=S.image[0]&&S.image[0].isDataTexture,ge=[];for(let Te=0;Te<6;Te++)!Ve&&!je?ge[Te]=g(S.image[Te],!1,!0,i.maxCubemapSize):ge[Te]=je?S.image[Te].image:S.image[Te],ge[Te]=Ae(S,ge[Te]);const at=ge[0],et=m(at)||o,qe=r.convert(S.format,S.colorSpace),He=r.convert(S.type),Oe=x(S.internalFormat,qe,He,S.colorSpace),Qe=o&&S.isVideoTexture!==!0,nt=pe.__version===void 0||de===!0;let ft=A(S,at,et);w(a.TEXTURE_CUBE_MAP,S,et);let $e;if(Ve){Qe&&nt&&t.texStorage2D(a.TEXTURE_CUBE_MAP,ft,Oe,at.width,at.height);for(let Te=0;Te<6;Te++){$e=ge[Te].mipmaps;for(let k=0;k<$e.length;k++){const we=$e[k];S.format!==sn?qe!==null?Qe?t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,k,0,0,we.width,we.height,qe,we.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,k,Oe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qe?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,k,0,0,we.width,we.height,qe,He,we.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,k,Oe,we.width,we.height,0,qe,He,we.data)}}}else{$e=S.mipmaps,Qe&&nt&&($e.length>0&&ft++,t.texStorage2D(a.TEXTURE_CUBE_MAP,ft,Oe,ge[0].width,ge[0].height));for(let Te=0;Te<6;Te++)if(je){Qe?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,ge[Te].width,ge[Te].height,qe,He,ge[Te].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Oe,ge[Te].width,ge[Te].height,0,qe,He,ge[Te].data);for(let k=0;k<$e.length;k++){const Le=$e[k].image[Te].image;Qe?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,k+1,0,0,Le.width,Le.height,qe,He,Le.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,k+1,Oe,Le.width,Le.height,0,qe,He,Le.data)}}else{Qe?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,qe,He,ge[Te]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Oe,qe,He,ge[Te]);for(let k=0;k<$e.length;k++){const we=$e[k];Qe?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,k+1,0,0,qe,He,we.image[Te]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,k+1,Oe,qe,He,we.image[Te])}}}_(S,et)&&y(a.TEXTURE_CUBE_MAP),pe.__version=he.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function ne(P,S,ee,de,he,pe){const Ee=r.convert(ee.format,ee.colorSpace),_e=r.convert(ee.type),xe=x(ee.internalFormat,Ee,_e,ee.colorSpace);if(!n.get(S).__hasExternalTextures){const je=Math.max(1,S.width>>pe),ge=Math.max(1,S.height>>pe);he===a.TEXTURE_3D||he===a.TEXTURE_2D_ARRAY?t.texImage3D(he,pe,xe,je,ge,S.depth,0,Ee,_e,null):t.texImage2D(he,pe,xe,je,ge,0,Ee,_e,null)}t.bindFramebuffer(a.FRAMEBUFFER,P),ae(S)?l.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,de,he,n.get(ee).__webglTexture,0,se(S)):(he===a.TEXTURE_2D||he>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,de,he,n.get(ee).__webglTexture,pe),t.bindFramebuffer(a.FRAMEBUFFER,null)}function ie(P,S,ee){if(a.bindRenderbuffer(a.RENDERBUFFER,P),S.depthBuffer&&!S.stencilBuffer){let de=o===!0?a.DEPTH_COMPONENT24:a.DEPTH_COMPONENT16;if(ee||ae(S)){const he=S.depthTexture;he&&he.isDepthTexture&&(he.type===Pn?de=a.DEPTH_COMPONENT32F:he.type===kn&&(de=a.DEPTH_COMPONENT24));const pe=se(S);ae(S)?l.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,pe,de,S.width,S.height):a.renderbufferStorageMultisample(a.RENDERBUFFER,pe,de,S.width,S.height)}else a.renderbufferStorage(a.RENDERBUFFER,de,S.width,S.height);a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,P)}else if(S.depthBuffer&&S.stencilBuffer){const de=se(S);ee&&ae(S)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,de,a.DEPTH24_STENCIL8,S.width,S.height):ae(S)?l.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,de,a.DEPTH24_STENCIL8,S.width,S.height):a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_STENCIL,S.width,S.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,P)}else{const de=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let he=0;he<de.length;he++){const pe=de[he],Ee=r.convert(pe.format,pe.colorSpace),_e=r.convert(pe.type),xe=x(pe.internalFormat,Ee,_e,pe.colorSpace),Ve=se(S);ee&&ae(S)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ve,xe,S.width,S.height):ae(S)?l.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ve,xe,S.width,S.height):a.renderbufferStorage(a.RENDERBUFFER,xe,S.width,S.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function K(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(a.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Q(S.depthTexture,0);const de=n.get(S.depthTexture).__webglTexture,he=se(S);if(S.depthTexture.format===oi)ae(S)?l.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,de,0,he):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,de,0);else if(S.depthTexture.format===zi)ae(S)?l.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,de,0,he):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function te(P){const S=n.get(P),ee=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");K(S.__webglFramebuffer,P)}else if(ee){S.__webglDepthbuffer=[];for(let de=0;de<6;de++)t.bindFramebuffer(a.FRAMEBUFFER,S.__webglFramebuffer[de]),S.__webglDepthbuffer[de]=a.createRenderbuffer(),ie(S.__webglDepthbuffer[de],P,!1)}else t.bindFramebuffer(a.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=a.createRenderbuffer(),ie(S.__webglDepthbuffer,P,!1);t.bindFramebuffer(a.FRAMEBUFFER,null)}function ce(P,S,ee){const de=n.get(P);S!==void 0&&ne(de.__webglFramebuffer,P,P.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),ee!==void 0&&te(P)}function Y(P){const S=P.texture,ee=n.get(P),de=n.get(S);P.addEventListener("dispose",B),P.isWebGLMultipleRenderTargets!==!0&&(de.__webglTexture===void 0&&(de.__webglTexture=a.createTexture()),de.__version=S.version,s.memory.textures++);const he=P.isWebGLCubeRenderTarget===!0,pe=P.isWebGLMultipleRenderTargets===!0,Ee=m(P)||o;if(he){ee.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(o&&S.mipmaps&&S.mipmaps.length>0){ee.__webglFramebuffer[_e]=[];for(let xe=0;xe<S.mipmaps.length;xe++)ee.__webglFramebuffer[_e][xe]=a.createFramebuffer()}else ee.__webglFramebuffer[_e]=a.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){ee.__webglFramebuffer=[];for(let _e=0;_e<S.mipmaps.length;_e++)ee.__webglFramebuffer[_e]=a.createFramebuffer()}else ee.__webglFramebuffer=a.createFramebuffer();if(pe)if(i.drawBuffers){const _e=P.texture;for(let xe=0,Ve=_e.length;xe<Ve;xe++){const je=n.get(_e[xe]);je.__webglTexture===void 0&&(je.__webglTexture=a.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&ae(P)===!1){const _e=pe?S:[S];ee.__webglMultisampledFramebuffer=a.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let xe=0;xe<_e.length;xe++){const Ve=_e[xe];ee.__webglColorRenderbuffer[xe]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,ee.__webglColorRenderbuffer[xe]);const je=r.convert(Ve.format,Ve.colorSpace),ge=r.convert(Ve.type),at=x(Ve.internalFormat,je,ge,Ve.colorSpace,P.isXRRenderTarget===!0),et=se(P);a.renderbufferStorageMultisample(a.RENDERBUFFER,et,at,P.width,P.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+xe,a.RENDERBUFFER,ee.__webglColorRenderbuffer[xe])}a.bindRenderbuffer(a.RENDERBUFFER,null),P.depthBuffer&&(ee.__webglDepthRenderbuffer=a.createRenderbuffer(),ie(ee.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(he){t.bindTexture(a.TEXTURE_CUBE_MAP,de.__webglTexture),w(a.TEXTURE_CUBE_MAP,S,Ee);for(let _e=0;_e<6;_e++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)ne(ee.__webglFramebuffer[_e][xe],P,S,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,xe);else ne(ee.__webglFramebuffer[_e],P,S,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);_(S,Ee)&&y(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){const _e=P.texture;for(let xe=0,Ve=_e.length;xe<Ve;xe++){const je=_e[xe],ge=n.get(je);t.bindTexture(a.TEXTURE_2D,ge.__webglTexture),w(a.TEXTURE_2D,je,Ee),ne(ee.__webglFramebuffer,P,je,a.COLOR_ATTACHMENT0+xe,a.TEXTURE_2D,0),_(je,Ee)&&y(a.TEXTURE_2D)}t.unbindTexture()}else{let _e=a.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?_e=P.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(_e,de.__webglTexture),w(_e,S,Ee),o&&S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)ne(ee.__webglFramebuffer[xe],P,S,a.COLOR_ATTACHMENT0,_e,xe);else ne(ee.__webglFramebuffer,P,S,a.COLOR_ATTACHMENT0,_e,0);_(S,Ee)&&y(_e),t.unbindTexture()}P.depthBuffer&&te(P)}function Ce(P){const S=m(P)||o,ee=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let de=0,he=ee.length;de<he;de++){const pe=ee[de];if(_(pe,S)){const Ee=P.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,_e=n.get(pe).__webglTexture;t.bindTexture(Ee,_e),y(Ee),t.unbindTexture()}}}function ue(P){if(o&&P.samples>0&&ae(P)===!1){const S=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],ee=P.width,de=P.height;let he=a.COLOR_BUFFER_BIT;const pe=[],Ee=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,_e=n.get(P),xe=P.isWebGLMultipleRenderTargets===!0;if(xe)for(let Ve=0;Ve<S.length;Ve++)t.bindFramebuffer(a.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ve,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,_e.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ve,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Ve=0;Ve<S.length;Ve++){pe.push(a.COLOR_ATTACHMENT0+Ve),P.depthBuffer&&pe.push(Ee);const je=_e.__ignoreDepthValues!==void 0?_e.__ignoreDepthValues:!1;if(je===!1&&(P.depthBuffer&&(he|=a.DEPTH_BUFFER_BIT),P.stencilBuffer&&(he|=a.STENCIL_BUFFER_BIT)),xe&&a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,_e.__webglColorRenderbuffer[Ve]),je===!0&&(a.invalidateFramebuffer(a.READ_FRAMEBUFFER,[Ee]),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[Ee])),xe){const ge=n.get(S[Ve]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,ge,0)}a.blitFramebuffer(0,0,ee,de,0,0,ee,de,he,a.NEAREST),h&&a.invalidateFramebuffer(a.READ_FRAMEBUFFER,pe)}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),xe)for(let Ve=0;Ve<S.length;Ve++){t.bindFramebuffer(a.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ve,a.RENDERBUFFER,_e.__webglColorRenderbuffer[Ve]);const je=n.get(S[Ve]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,_e.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ve,a.TEXTURE_2D,je,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}}function se(P){return Math.min(i.maxSamples,P.samples)}function ae(P){const S=n.get(P);return o&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function We(P){const S=s.render.frame;u.get(P)!==S&&(u.set(P,S),P.update())}function Ae(P,S){const ee=P.colorSpace,de=P.format,he=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===ea||ee!==Ot&&ee!==an&&(_t.getTransfer(ee)===St?o===!1?e.has("EXT_sRGB")===!0&&de===sn?(P.format=ea,P.minFilter=Yt,P.generateMipmaps=!1):S=Ul.sRGBToLinear(S):(de!==sn||he!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),S}this.allocateTextureUnit=U,this.resetTextureUnits=q,this.setTexture2D=Q,this.setTexture2DArray=F,this.setTexture3D=D,this.setTextureCube=j,this.rebindTextures=ce,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=ae}function Cm(a,e,t){const n=t.isWebGL2;function i(r,s=an){let o;const l=_t.getTransfer(s);if(r===Yn)return a.UNSIGNED_BYTE;if(r===Tl)return a.UNSIGNED_SHORT_4_4_4_4;if(r===Al)return a.UNSIGNED_SHORT_5_5_5_1;if(r===jc)return a.BYTE;if(r===Kc)return a.SHORT;if(r===la)return a.UNSIGNED_SHORT;if(r===El)return a.INT;if(r===kn)return a.UNSIGNED_INT;if(r===Pn)return a.FLOAT;if(r===hr)return n?a.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Zc)return a.ALPHA;if(r===sn)return a.RGBA;if(r===$c)return a.LUMINANCE;if(r===Jc)return a.LUMINANCE_ALPHA;if(r===oi)return a.DEPTH_COMPONENT;if(r===zi)return a.DEPTH_STENCIL;if(r===ea)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Qc)return a.RED;if(r===wl)return a.RED_INTEGER;if(r===eh)return a.RG;if(r===bl)return a.RG_INTEGER;if(r===Rl)return a.RGBA_INTEGER;if(r===hs||r===us||r===ds||r===fs)if(l===St)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===hs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===us)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ds)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===fs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===hs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===us)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ds)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===fs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Pa||r===La||r===Ia||r===Na)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Pa)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===La)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ia)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Na)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Cl)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Da||r===Ua)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Da)return l===St?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Ua)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Fa||r===Ba||r===Oa||r===za||r===Va||r===Ha||r===Ga||r===ka||r===Wa||r===Xa||r===qa||r===Ya||r===ja||r===Ka)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Fa)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ba)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Oa)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===za)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Va)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ha)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ga)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ka)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Wa)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Xa)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===qa)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ya)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ja)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ka)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ps||r===Za||r===$a)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===ps)return l===St?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Za)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===$a)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===th||r===Ja||r===Qa||r===eo)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===ps)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Ja)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Qa)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===eo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ai?n?a.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):a[r]!==void 0?a[r]:null}return{convert:i}}class Pm extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class si extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lm={type:"move"};class Os{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,s=null;const o=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){s=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(h,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=h.joints["index-finger-tip"],c=h.joints["thumb-tip"],d=u.position.distanceTo(c.position),f=.02,v=.005;h.inputState.pinching&&d>f+v?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&d<=f-v&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Lm)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new si;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Im extends qi{constructor(e,t){super();const n=this;let i=null,r=1,s=null,o="local-floor",l=1,h=null,u=null,c=null,d=null,f=null,v=null;const g=t.getContextAttributes();let m=null,p=null;const _=[],y=[],x=new dt;let A=null;const b=new Xt;b.layers.enable(1),b.viewport=new Mt;const I=new Xt;I.layers.enable(2),I.viewport=new Mt;const B=[b,I],M=new Pm;M.layers.enable(1),M.layers.enable(2);let E=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(w){let R=_[w];return R===void 0&&(R=new Os,_[w]=R),R.getTargetRaySpace()},this.getControllerGrip=function(w){let R=_[w];return R===void 0&&(R=new Os,_[w]=R),R.getGripSpace()},this.getHand=function(w){let R=_[w];return R===void 0&&(R=new Os,_[w]=R),R.getHandSpace()};function z(w){const R=y.indexOf(w.inputSource);if(R===-1)return;const C=_[R];C!==void 0&&(C.update(w.inputSource,w.frame,h||s),C.dispatchEvent({type:w.type,data:w.inputSource}))}function q(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",U);for(let w=0;w<_.length;w++){const R=y[w];R!==null&&(y[w]=null,_[w].disconnect(R))}E=null,L=null,e.setRenderTarget(m),f=null,d=null,c=null,i=null,p=null,G.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(x.width,x.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(w){r=w,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(w){o=w,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||s},this.setReferenceSpace=function(w){h=w},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return c},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(w){if(i=w,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",q),i.addEventListener("inputsourceschange",U),g.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(x),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const R={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,R),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new hi(f.framebufferWidth,f.framebufferHeight,{format:sn,type:Yn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let R=null,C=null,X=null;g.depth&&(X=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,R=g.stencil?zi:oi,C=g.stencil?ai:kn);const ne={colorFormat:t.RGBA8,depthFormat:X,scaleFactor:r};c=new XRWebGLBinding(i,t),d=c.createProjectionLayer(ne),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new hi(d.textureWidth,d.textureHeight,{format:sn,type:Yn,depthTexture:new ql(d.textureWidth,d.textureHeight,C,void 0,void 0,void 0,void 0,void 0,void 0,R),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const ie=e.properties.get(p);ie.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),h=null,s=await i.requestReferenceSpace(o),G.setContext(i),G.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function U(w){for(let R=0;R<w.removed.length;R++){const C=w.removed[R],X=y.indexOf(C);X>=0&&(y[X]=null,_[X].disconnect(C))}for(let R=0;R<w.added.length;R++){const C=w.added[R];let X=y.indexOf(C);if(X===-1){for(let ie=0;ie<_.length;ie++)if(ie>=y.length){y.push(C),X=ie;break}else if(y[ie]===null){y[ie]=C,X=ie;break}if(X===-1)break}const ne=_[X];ne&&ne.connect(C)}}const V=new J,Q=new J;function F(w,R,C){V.setFromMatrixPosition(R.matrixWorld),Q.setFromMatrixPosition(C.matrixWorld);const X=V.distanceTo(Q),ne=R.projectionMatrix.elements,ie=C.projectionMatrix.elements,K=ne[14]/(ne[10]-1),te=ne[14]/(ne[10]+1),ce=(ne[9]+1)/ne[5],Y=(ne[9]-1)/ne[5],Ce=(ne[8]-1)/ne[0],ue=(ie[8]+1)/ie[0],se=K*Ce,ae=K*ue,We=X/(-Ce+ue),Ae=We*-Ce;R.matrixWorld.decompose(w.position,w.quaternion,w.scale),w.translateX(Ae),w.translateZ(We),w.matrixWorld.compose(w.position,w.quaternion,w.scale),w.matrixWorldInverse.copy(w.matrixWorld).invert();const P=K+We,S=te+We,ee=se-Ae,de=ae+(X-Ae),he=ce*te/S*P,pe=Y*te/S*P;w.projectionMatrix.makePerspective(ee,de,he,pe,P,S),w.projectionMatrixInverse.copy(w.projectionMatrix).invert()}function D(w,R){R===null?w.matrixWorld.copy(w.matrix):w.matrixWorld.multiplyMatrices(R.matrixWorld,w.matrix),w.matrixWorldInverse.copy(w.matrixWorld).invert()}this.updateCamera=function(w){if(i===null)return;M.near=I.near=b.near=w.near,M.far=I.far=b.far=w.far,(E!==M.near||L!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,L=M.far);const R=w.parent,C=M.cameras;D(M,R);for(let X=0;X<C.length;X++)D(C[X],R);C.length===2?F(M,b,I):M.projectionMatrix.copy(b.projectionMatrix),j(w,M,R)};function j(w,R,C){C===null?w.matrix.copy(R.matrixWorld):(w.matrix.copy(C.matrixWorld),w.matrix.invert(),w.matrix.multiply(R.matrixWorld)),w.matrix.decompose(w.position,w.quaternion,w.scale),w.updateMatrixWorld(!0),w.projectionMatrix.copy(R.projectionMatrix),w.projectionMatrixInverse.copy(R.projectionMatrixInverse),w.isPerspectiveCamera&&(w.fov=Hi*2*Math.atan(1/w.projectionMatrix.elements[5]),w.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(w){l=w,d!==null&&(d.fixedFoveation=w),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=w)};let W=null;function N(w,R){if(u=R.getViewerPose(h||s),v=R,u!==null){const C=u.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let X=!1;C.length!==M.cameras.length&&(M.cameras.length=0,X=!0);for(let ne=0;ne<C.length;ne++){const ie=C[ne];let K=null;if(f!==null)K=f.getViewport(ie);else{const ce=c.getViewSubImage(d,ie);K=ce.viewport,ne===0&&(e.setRenderTargetTextures(p,ce.colorTexture,d.ignoreDepthValues?void 0:ce.depthStencilTexture),e.setRenderTarget(p))}let te=B[ne];te===void 0&&(te=new Xt,te.layers.enable(ne),te.viewport=new Mt,B[ne]=te),te.matrix.fromArray(ie.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(ie.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(K.x,K.y,K.width,K.height),ne===0&&(M.matrix.copy(te.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),X===!0&&M.cameras.push(te)}}for(let C=0;C<_.length;C++){const X=y[C],ne=_[C];X!==null&&ne!==void 0&&ne.update(X,R,h||s)}W&&W(w,R),R.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:R}),v=null}const G=new Xl;G.setAnimationLoop(N),this.setAnimationLoop=function(w){W=w},this.dispose=function(){}}}function Nm(a,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Gl(a)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,_,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),c(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,_,y):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const y=a._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*y,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function c(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Kt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Dm(a,e,t,n){let i={},r={},s=[];const o=t.isWebGL2?a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,y){const x=y.program;n.uniformBlockBinding(_,x)}function h(_,y){let x=i[_.id];x===void 0&&(v(_),x=u(_),i[_.id]=x,_.addEventListener("dispose",m));const A=y.program;n.updateUBOMapping(_,A);const b=e.render.frame;r[_.id]!==b&&(d(_),r[_.id]=b)}function u(_){const y=c();_.__bindingPointIndex=y;const x=a.createBuffer(),A=_.__size,b=_.usage;return a.bindBuffer(a.UNIFORM_BUFFER,x),a.bufferData(a.UNIFORM_BUFFER,A,b),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,y,x),x}function c(){for(let _=0;_<o;_++)if(s.indexOf(_)===-1)return s.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const y=i[_.id],x=_.uniforms,A=_.__cache;a.bindBuffer(a.UNIFORM_BUFFER,y);for(let b=0,I=x.length;b<I;b++){const B=Array.isArray(x[b])?x[b]:[x[b]];for(let M=0,E=B.length;M<E;M++){const L=B[M];if(f(L,b,M,A)===!0){const z=L.__offset,q=Array.isArray(L.value)?L.value:[L.value];let U=0;for(let V=0;V<q.length;V++){const Q=q[V],F=g(Q);typeof Q=="number"||typeof Q=="boolean"?(L.__data[0]=Q,a.bufferSubData(a.UNIFORM_BUFFER,z+U,L.__data)):Q.isMatrix3?(L.__data[0]=Q.elements[0],L.__data[1]=Q.elements[1],L.__data[2]=Q.elements[2],L.__data[3]=0,L.__data[4]=Q.elements[3],L.__data[5]=Q.elements[4],L.__data[6]=Q.elements[5],L.__data[7]=0,L.__data[8]=Q.elements[6],L.__data[9]=Q.elements[7],L.__data[10]=Q.elements[8],L.__data[11]=0):(Q.toArray(L.__data,U),U+=F.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,z,L.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function f(_,y,x,A){const b=_.value,I=y+"_"+x;if(A[I]===void 0)return typeof b=="number"||typeof b=="boolean"?A[I]=b:A[I]=b.clone(),!0;{const B=A[I];if(typeof b=="number"||typeof b=="boolean"){if(B!==b)return A[I]=b,!0}else if(B.equals(b)===!1)return B.copy(b),!0}return!1}function v(_){const y=_.uniforms;let x=0;const A=16;for(let I=0,B=y.length;I<B;I++){const M=Array.isArray(y[I])?y[I]:[y[I]];for(let E=0,L=M.length;E<L;E++){const z=M[E],q=Array.isArray(z.value)?z.value:[z.value];for(let U=0,V=q.length;U<V;U++){const Q=q[U],F=g(Q),D=x%A;D!==0&&A-D<F.boundary&&(x+=A-D),z.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=x,x+=F.storage}}}const b=x%A;return b>0&&(x+=A-b),_.__size=x,_.__cache={},this}function g(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){const y=_.target;y.removeEventListener("dispose",m);const x=s.indexOf(y.__bindingPointIndex);s.splice(x,1),a.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(const _ in i)a.deleteBuffer(i[_]);s=[],i={},r={}}return{bind:l,update:h,dispose:p}}class Jl{constructor(e={}){const{canvas:t=Ch(),context:n=null,depth:i=!0,stencil:r=!0,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:c=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=s;const f=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const p=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rt,this._useLegacyLights=!1,this.toneMapping=qn,this.toneMappingExposure=1;const y=this;let x=!1,A=0,b=0,I=null,B=-1,M=null;const E=new Mt,L=new Mt;let z=null;const q=new tt(0);let U=0,V=t.width,Q=t.height,F=1,D=null,j=null;const W=new Mt(0,0,V,Q),N=new Mt(0,0,V,Q);let G=!1;const w=new ua;let R=!1,C=!1,X=null;const ne=new st,ie=new dt,K=new J,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ce(){return I===null?F:1}let Y=n;function Ce(T,H){for(let Z=0;Z<T.length;Z++){const O=T[Z],$=t.getContext(O,H);if($!==null)return $}return null}try{const T={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${oa}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",k,!1),t.addEventListener("webglcontextcreationerror",we,!1),Y===null){const H=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&H.shift(),Y=Ce(H,T),Y===null)throw Ce(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Y instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ue,se,ae,We,Ae,P,S,ee,de,he,pe,Ee,_e,xe,Ve,je,ge,at,et,qe,He,Oe,Qe,nt;function ft(){ue=new Wf(Y),se=new Of(Y,ue,e),ue.init(se),Oe=new Cm(Y,ue,se),ae=new bm(Y,ue,se),We=new Yf(Y),Ae=new fm,P=new Rm(Y,ue,ae,Ae,se,Oe,We),S=new Vf(y),ee=new kf(y),de=new eu(Y,se),Qe=new Ff(Y,ue,de,se),he=new Xf(Y,de,We,Qe),pe=new $f(Y,he,de,We),et=new Zf(Y,se,P),je=new zf(Ae),Ee=new dm(y,S,ee,ue,se,Qe,je),_e=new Nm(y,Ae),xe=new mm,Ve=new Mm(ue,se),at=new Uf(y,S,ee,ae,pe,d,l),ge=new wm(y,pe,se),nt=new Dm(Y,We,se,ae),qe=new Bf(Y,ue,We,se),He=new qf(Y,ue,We,se),We.programs=Ee.programs,y.capabilities=se,y.extensions=ue,y.properties=Ae,y.renderLists=xe,y.shadowMap=ge,y.state=ae,y.info=We}ft();const $e=new Im(y,Y);this.xr=$e,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const T=ue.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ue.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(T){T!==void 0&&(F=T,this.setSize(V,Q,!1))},this.getSize=function(T){return T.set(V,Q)},this.setSize=function(T,H,Z=!0){if($e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=T,Q=H,t.width=Math.floor(T*F),t.height=Math.floor(H*F),Z===!0&&(t.style.width=T+"px",t.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(V*F,Q*F).floor()},this.setDrawingBufferSize=function(T,H,Z){V=T,Q=H,F=Z,t.width=Math.floor(T*Z),t.height=Math.floor(H*Z),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(W)},this.setViewport=function(T,H,Z,O){T.isVector4?W.set(T.x,T.y,T.z,T.w):W.set(T,H,Z,O),ae.viewport(E.copy(W).multiplyScalar(F).floor())},this.getScissor=function(T){return T.copy(N)},this.setScissor=function(T,H,Z,O){T.isVector4?N.set(T.x,T.y,T.z,T.w):N.set(T,H,Z,O),ae.scissor(L.copy(N).multiplyScalar(F).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(T){ae.setScissorTest(G=T)},this.setOpaqueSort=function(T){D=T},this.setTransparentSort=function(T){j=T},this.getClearColor=function(T){return T.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor.apply(at,arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha.apply(at,arguments)},this.clear=function(T=!0,H=!0,Z=!0){let O=0;if(T){let $=!1;if(I!==null){const ve=I.texture.format;$=ve===Rl||ve===bl||ve===wl}if($){const ve=I.texture.type,Fe=ve===Yn||ve===kn||ve===la||ve===ai||ve===Tl||ve===Al,Re=at.getClearColor(),De=at.getClearAlpha(),Se=Re.r,Ye=Re.g,Ze=Re.b;Fe?(f[0]=Se,f[1]=Ye,f[2]=Ze,f[3]=De,Y.clearBufferuiv(Y.COLOR,0,f)):(v[0]=Se,v[1]=Ye,v[2]=Ze,v[3]=De,Y.clearBufferiv(Y.COLOR,0,v))}else O|=Y.COLOR_BUFFER_BIT}H&&(O|=Y.DEPTH_BUFFER_BIT),Z&&(O|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",k,!1),t.removeEventListener("webglcontextcreationerror",we,!1),xe.dispose(),Ve.dispose(),Ae.dispose(),S.dispose(),ee.dispose(),pe.dispose(),Qe.dispose(),nt.dispose(),Ee.dispose(),$e.dispose(),$e.removeEventListener("sessionstart",oe),$e.removeEventListener("sessionend",le),X&&(X.dispose(),X=null),fe.stop()};function Te(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const T=We.autoReset,H=ge.enabled,Z=ge.autoUpdate,O=ge.needsUpdate,$=ge.type;ft(),We.autoReset=T,ge.enabled=H,ge.autoUpdate=Z,ge.needsUpdate=O,ge.type=$}function we(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Le(T){const H=T.target;H.removeEventListener("dispose",Le),Ke(H)}function Ke(T){Xe(T),Ae.remove(T)}function Xe(T){const H=Ae.get(T).programs;H!==void 0&&(H.forEach(function(Z){Ee.releaseProgram(Z)}),T.isShaderMaterial&&Ee.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,Z,O,$,ve){H===null&&(H=te);const Fe=$.isMesh&&$.matrixWorld.determinant()<0,Re=ze(T,H,Z,O,$);ae.setMaterial(O,Fe);let De=Z.index,Se=1;if(O.wireframe===!0){if(De=he.getWireframeAttribute(Z),De===void 0)return;Se=2}const Ye=Z.drawRange,Ze=Z.attributes.position;let ht=Ye.start*Se,At=(Ye.start+Ye.count)*Se;ve!==null&&(ht=Math.max(ht,ve.start*Se),At=Math.min(At,(ve.start+ve.count)*Se)),De!==null?(ht=Math.max(ht,0),At=Math.min(At,De.count)):Ze!=null&&(ht=Math.max(ht,0),At=Math.min(At,Ze.count));const vt=At-ht;if(vt<0||vt===1/0)return;Qe.setup($,O,Re,Z,De);let lt,gt=qe;if(De!==null&&(lt=de.get(De),gt=He,gt.setIndex(lt)),$.isMesh)O.wireframe===!0?(ae.setLineWidth(O.wireframeLinewidth*ce()),gt.setMode(Y.LINES)):gt.setMode(Y.TRIANGLES);else if($.isLine){let Ge=O.linewidth;Ge===void 0&&(Ge=1),ae.setLineWidth(Ge*ce()),$.isLineSegments?gt.setMode(Y.LINES):$.isLineLoop?gt.setMode(Y.LINE_LOOP):gt.setMode(Y.LINE_STRIP)}else $.isPoints?gt.setMode(Y.POINTS):$.isSprite&&gt.setMode(Y.TRIANGLES);if($.isBatchedMesh)gt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)gt.renderInstances(ht,vt,$.count);else if(Z.isInstancedBufferGeometry){const Ge=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,$t=Math.min(Z.instanceCount,Ge);gt.renderInstances(ht,vt,$t)}else gt.render(ht,vt)};function pt(T,H,Z){T.transparent===!0&&T.side===gn&&T.forceSinglePass===!1?(T.side=Kt,T.needsUpdate=!0,re(T,H,Z),T.side=Nn,T.needsUpdate=!0,re(T,H,Z),T.side=gn):re(T,H,Z)}this.compile=function(T,H,Z=null){Z===null&&(Z=T),m=Ve.get(Z),m.init(),_.push(m),Z.traverseVisible(function($){$.isLight&&$.layers.test(H.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),T!==Z&&T.traverseVisible(function($){$.isLight&&$.layers.test(H.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),m.setupLights(y._useLegacyLights);const O=new Set;return T.traverse(function($){const ve=$.material;if(ve)if(Array.isArray(ve))for(let Fe=0;Fe<ve.length;Fe++){const Re=ve[Fe];pt(Re,Z,$),O.add(Re)}else pt(ve,Z,$),O.add(ve)}),_.pop(),m=null,O},this.compileAsync=function(T,H,Z=null){const O=this.compile(T,H,Z);return new Promise($=>{function ve(){if(O.forEach(function(Fe){Ae.get(Fe).currentProgram.isReady()&&O.delete(Fe)}),O.size===0){$(T);return}setTimeout(ve,10)}ue.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let mt=null;function ot(T){mt&&mt(T)}function oe(){fe.stop()}function le(){fe.start()}const fe=new Xl;fe.setAnimationLoop(ot),typeof self<"u"&&fe.setContext(self),this.setAnimationLoop=function(T){mt=T,$e.setAnimationLoop(T),T===null?fe.stop():fe.start()},$e.addEventListener("sessionstart",oe),$e.addEventListener("sessionend",le),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),$e.enabled===!0&&$e.isPresenting===!0&&($e.cameraAutoUpdate===!0&&$e.updateCamera(H),H=$e.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,H,I),m=Ve.get(T,_.length),m.init(),_.push(m),ne.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),w.setFromProjectionMatrix(ne),C=this.localClippingEnabled,R=je.init(this.clippingPlanes,C),g=xe.get(T,p.length),g.init(),p.push(g),me(T,H,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(D,j),this.info.render.frame++,R===!0&&je.beginShadows();const Z=m.state.shadowsArray;if(ge.render(Z,T,H),R===!0&&je.endShadows(),this.info.autoReset===!0&&this.info.reset(),at.render(g,T),m.setupLights(y._useLegacyLights),H.isArrayCamera){const O=H.cameras;for(let $=0,ve=O.length;$<ve;$++){const Fe=O[$];Je(g,T,Fe,Fe.viewport)}}else Je(g,T,H);I!==null&&(P.updateMultisampleRenderTarget(I),P.updateRenderTargetMipmap(I)),T.isScene===!0&&T.onAfterRender(y,T,H),Qe.resetDefaultState(),B=-1,M=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function me(T,H,Z,O){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||w.intersectsSprite(T)){O&&K.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ne);const Fe=pe.update(T),Re=T.material;Re.visible&&g.push(T,Fe,Re,Z,K.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||w.intersectsObject(T))){const Fe=pe.update(T),Re=T.material;if(O&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),K.copy(T.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),K.copy(Fe.boundingSphere.center)),K.applyMatrix4(T.matrixWorld).applyMatrix4(ne)),Array.isArray(Re)){const De=Fe.groups;for(let Se=0,Ye=De.length;Se<Ye;Se++){const Ze=De[Se],ht=Re[Ze.materialIndex];ht&&ht.visible&&g.push(T,Fe,ht,Z,K.z,Ze)}}else Re.visible&&g.push(T,Fe,Re,Z,K.z,null)}}const ve=T.children;for(let Fe=0,Re=ve.length;Fe<Re;Fe++)me(ve[Fe],H,Z,O)}function Je(T,H,Z,O){const $=T.opaque,ve=T.transmissive,Fe=T.transparent;m.setupLightsView(Z),R===!0&&je.setGlobalState(y.clippingPlanes,Z),ve.length>0&&Be($,ve,H,Z),O&&ae.viewport(E.copy(O)),$.length>0&&ye($,H,Z),ve.length>0&&ye(ve,H,Z),Fe.length>0&&ye(Fe,H,Z),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function Be(T,H,Z,O){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;const ve=se.isWebGL2;X===null&&(X=new hi(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")?hr:Yn,minFilter:ci,samples:ve?4:0})),y.getDrawingBufferSize(ie),ve?X.setSize(ie.x,ie.y):X.setSize(ts(ie.x),ts(ie.y));const Fe=y.getRenderTarget();y.setRenderTarget(X),y.getClearColor(q),U=y.getClearAlpha(),U<1&&y.setClearColor(16777215,.5),y.clear();const Re=y.toneMapping;y.toneMapping=qn,ye(T,Z,O),P.updateMultisampleRenderTarget(X),P.updateRenderTargetMipmap(X);let De=!1;for(let Se=0,Ye=H.length;Se<Ye;Se++){const Ze=H[Se],ht=Ze.object,At=Ze.geometry,vt=Ze.material,lt=Ze.group;if(vt.side===gn&&ht.layers.test(O.layers)){const gt=vt.side;vt.side=Kt,vt.needsUpdate=!0,Ie(ht,Z,O,At,vt,lt),vt.side=gt,vt.needsUpdate=!0,De=!0}}De===!0&&(P.updateMultisampleRenderTarget(X),P.updateRenderTargetMipmap(X)),y.setRenderTarget(Fe),y.setClearColor(q,U),y.toneMapping=Re}function ye(T,H,Z){const O=H.isScene===!0?H.overrideMaterial:null;for(let $=0,ve=T.length;$<ve;$++){const Fe=T[$],Re=Fe.object,De=Fe.geometry,Se=O===null?Fe.material:O,Ye=Fe.group;Re.layers.test(Z.layers)&&Ie(Re,H,Z,De,Se,Ye)}}function Ie(T,H,Z,O,$,ve){T.onBeforeRender(y,H,Z,O,$,ve),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(y,H,Z,O,T,ve),$.transparent===!0&&$.side===gn&&$.forceSinglePass===!1?($.side=Kt,$.needsUpdate=!0,y.renderBufferDirect(Z,H,O,$,T,ve),$.side=Nn,$.needsUpdate=!0,y.renderBufferDirect(Z,H,O,$,T,ve),$.side=gn):y.renderBufferDirect(Z,H,O,$,T,ve),T.onAfterRender(y,H,Z,O,$,ve)}function re(T,H,Z){H.isScene!==!0&&(H=te);const O=Ae.get(T),$=m.state.lights,ve=m.state.shadowsArray,Fe=$.state.version,Re=Ee.getParameters(T,$.state,ve,H,Z),De=Ee.getProgramCacheKey(Re);let Se=O.programs;O.environment=T.isMeshStandardMaterial?H.environment:null,O.fog=H.fog,O.envMap=(T.isMeshStandardMaterial?ee:S).get(T.envMap||O.environment),Se===void 0&&(T.addEventListener("dispose",Le),Se=new Map,O.programs=Se);let Ye=Se.get(De);if(Ye!==void 0){if(O.currentProgram===Ye&&O.lightsStateVersion===Fe)return Ne(T,Re),Ye}else Re.uniforms=Ee.getUniforms(T),T.onBuild(Z,Re,y),T.onBeforeCompile(Re,y),Ye=Ee.acquireProgram(Re,De),Se.set(De,Ye),O.uniforms=Re.uniforms;const Ze=O.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ze.clippingPlanes=je.uniform),Ne(T,Re),O.needsLights=Me(T),O.lightsStateVersion=Fe,O.needsLights&&(Ze.ambientLightColor.value=$.state.ambient,Ze.lightProbe.value=$.state.probe,Ze.directionalLights.value=$.state.directional,Ze.directionalLightShadows.value=$.state.directionalShadow,Ze.spotLights.value=$.state.spot,Ze.spotLightShadows.value=$.state.spotShadow,Ze.rectAreaLights.value=$.state.rectArea,Ze.ltc_1.value=$.state.rectAreaLTC1,Ze.ltc_2.value=$.state.rectAreaLTC2,Ze.pointLights.value=$.state.point,Ze.pointLightShadows.value=$.state.pointShadow,Ze.hemisphereLights.value=$.state.hemi,Ze.directionalShadowMap.value=$.state.directionalShadowMap,Ze.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ze.spotShadowMap.value=$.state.spotShadowMap,Ze.spotLightMatrix.value=$.state.spotLightMatrix,Ze.spotLightMap.value=$.state.spotLightMap,Ze.pointShadowMap.value=$.state.pointShadowMap,Ze.pointShadowMatrix.value=$.state.pointShadowMatrix),O.currentProgram=Ye,O.uniformsList=null,Ye}function be(T){if(T.uniformsList===null){const H=T.currentProgram.getUniforms();T.uniformsList=Yr.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function Ne(T,H){const Z=Ae.get(T);Z.outputColorSpace=H.outputColorSpace,Z.batching=H.batching,Z.instancing=H.instancing,Z.instancingColor=H.instancingColor,Z.skinning=H.skinning,Z.morphTargets=H.morphTargets,Z.morphNormals=H.morphNormals,Z.morphColors=H.morphColors,Z.morphTargetsCount=H.morphTargetsCount,Z.numClippingPlanes=H.numClippingPlanes,Z.numIntersection=H.numClipIntersection,Z.vertexAlphas=H.vertexAlphas,Z.vertexTangents=H.vertexTangents,Z.toneMapping=H.toneMapping}function ze(T,H,Z,O,$){H.isScene!==!0&&(H=te),P.resetTextureUnits();const ve=H.fog,Fe=O.isMeshStandardMaterial?H.environment:null,Re=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ot,De=(O.isMeshStandardMaterial?ee:S).get(O.envMap||Fe),Se=O.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ye=!!Z.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Ze=!!Z.morphAttributes.position,ht=!!Z.morphAttributes.normal,At=!!Z.morphAttributes.color;let vt=qn;O.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(vt=y.toneMapping);const lt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,gt=lt!==void 0?lt.length:0,Ge=Ae.get(O),$t=m.state.lights;if(R===!0&&(C===!0||T!==M)){const Lt=T===M&&O.id===B;je.setState(O,T,Lt)}let ct=!1;O.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==$t.state.version||Ge.outputColorSpace!==Re||$.isBatchedMesh&&Ge.batching===!1||!$.isBatchedMesh&&Ge.batching===!0||$.isInstancedMesh&&Ge.instancing===!1||!$.isInstancedMesh&&Ge.instancing===!0||$.isSkinnedMesh&&Ge.skinning===!1||!$.isSkinnedMesh&&Ge.skinning===!0||$.isInstancedMesh&&Ge.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ge.instancingColor===!1&&$.instanceColor!==null||Ge.envMap!==De||O.fog===!0&&Ge.fog!==ve||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==je.numPlanes||Ge.numIntersection!==je.numIntersection)||Ge.vertexAlphas!==Se||Ge.vertexTangents!==Ye||Ge.morphTargets!==Ze||Ge.morphNormals!==ht||Ge.morphColors!==At||Ge.toneMapping!==vt||se.isWebGL2===!0&&Ge.morphTargetsCount!==gt)&&(ct=!0):(ct=!0,Ge.__version=O.version);let Et=Ge.currentProgram;ct===!0&&(Et=re(O,H,$));let Pt=!1,Ut=!1,Jt=!1;const ke=Et.getUniforms(),Ct=Ge.uniforms;if(ae.useProgram(Et.program)&&(Pt=!0,Ut=!0,Jt=!0),O.id!==B&&(B=O.id,Ut=!0),Pt||M!==T){ke.setValue(Y,"projectionMatrix",T.projectionMatrix),ke.setValue(Y,"viewMatrix",T.matrixWorldInverse);const Lt=ke.map.cameraPosition;Lt!==void 0&&Lt.setValue(Y,K.setFromMatrixPosition(T.matrixWorld)),se.logarithmicDepthBuffer&&ke.setValue(Y,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ke.setValue(Y,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Ut=!0,Jt=!0)}if($.isSkinnedMesh){ke.setOptional(Y,$,"bindMatrix"),ke.setOptional(Y,$,"bindMatrixInverse");const Lt=$.skeleton;Lt&&(se.floatVertexTextures?(Lt.boneTexture===null&&Lt.computeBoneTexture(),ke.setValue(Y,"boneTexture",Lt.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(ke.setOptional(Y,$,"batchingTexture"),ke.setValue(Y,"batchingTexture",$._matricesTexture,P));const bt=Z.morphAttributes;if((bt.position!==void 0||bt.normal!==void 0||bt.color!==void 0&&se.isWebGL2===!0)&&et.update($,Z,Et),(Ut||Ge.receiveShadow!==$.receiveShadow)&&(Ge.receiveShadow=$.receiveShadow,ke.setValue(Y,"receiveShadow",$.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Ct.envMap.value=De,Ct.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Ut&&(ke.setValue(Y,"toneMappingExposure",y.toneMappingExposure),Ge.needsLights&&Pe(Ct,Jt),ve&&O.fog===!0&&_e.refreshFogUniforms(Ct,ve),_e.refreshMaterialUniforms(Ct,O,F,Q,X),Yr.upload(Y,be(Ge),Ct,P)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Yr.upload(Y,be(Ge),Ct,P),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ke.setValue(Y,"center",$.center),ke.setValue(Y,"modelViewMatrix",$.modelViewMatrix),ke.setValue(Y,"normalMatrix",$.normalMatrix),ke.setValue(Y,"modelMatrix",$.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Lt=O.uniformsGroups;for(let ln=0,cs=Lt.length;ln<cs;ln++)if(se.isWebGL2){const vr=Lt[ln];nt.update(vr,Et),nt.bind(vr,Et)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Et}function Pe(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function Me(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(T,H,Z){Ae.get(T.texture).__webglTexture=H,Ae.get(T.depthTexture).__webglTexture=Z;const O=Ae.get(T);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=Z===void 0,O.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,H){const Z=Ae.get(T);Z.__webglFramebuffer=H,Z.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,Z=0){I=T,A=H,b=Z;let O=!0,$=null,ve=!1,Fe=!1;if(T){const De=Ae.get(T);De.__useDefaultFramebuffer!==void 0?(ae.bindFramebuffer(Y.FRAMEBUFFER,null),O=!1):De.__webglFramebuffer===void 0?P.setupRenderTarget(T):De.__hasExternalTextures&&P.rebindTextures(T,Ae.get(T.texture).__webglTexture,Ae.get(T.depthTexture).__webglTexture);const Se=T.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(Fe=!0);const Ye=Ae.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ye[H])?$=Ye[H][Z]:$=Ye[H],ve=!0):se.isWebGL2&&T.samples>0&&P.useMultisampledRTT(T)===!1?$=Ae.get(T).__webglMultisampledFramebuffer:Array.isArray(Ye)?$=Ye[Z]:$=Ye,E.copy(T.viewport),L.copy(T.scissor),z=T.scissorTest}else E.copy(W).multiplyScalar(F).floor(),L.copy(N).multiplyScalar(F).floor(),z=G;if(ae.bindFramebuffer(Y.FRAMEBUFFER,$)&&se.drawBuffers&&O&&ae.drawBuffers(T,$),ae.viewport(E),ae.scissor(L),ae.setScissorTest(z),ve){const De=Ae.get(T.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+H,De.__webglTexture,Z)}else if(Fe){const De=Ae.get(T.texture),Se=H||0;Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,De.__webglTexture,Z||0,Se)}B=-1},this.readRenderTargetPixels=function(T,H,Z,O,$,ve,Fe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Ae.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Fe!==void 0&&(Re=Re[Fe]),Re){ae.bindFramebuffer(Y.FRAMEBUFFER,Re);try{const De=T.texture,Se=De.format,Ye=De.type;if(Se!==sn&&Oe.convert(Se)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ze=Ye===hr&&(ue.has("EXT_color_buffer_half_float")||se.isWebGL2&&ue.has("EXT_color_buffer_float"));if(Ye!==Yn&&Oe.convert(Ye)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ye===Pn&&(se.isWebGL2||ue.has("OES_texture_float")||ue.has("WEBGL_color_buffer_float")))&&!Ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-O&&Z>=0&&Z<=T.height-$&&Y.readPixels(H,Z,O,$,Oe.convert(Se),Oe.convert(Ye),ve)}finally{const De=I!==null?Ae.get(I).__webglFramebuffer:null;ae.bindFramebuffer(Y.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(T,H,Z=0){const O=Math.pow(2,-Z),$=Math.floor(H.image.width*O),ve=Math.floor(H.image.height*O);P.setTexture2D(H,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,Z,0,0,T.x,T.y,$,ve),ae.unbindTexture()},this.copyTextureToTexture=function(T,H,Z,O=0){const $=H.image.width,ve=H.image.height,Fe=Oe.convert(Z.format),Re=Oe.convert(Z.type);P.setTexture2D(Z,0),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,Z.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,Z.unpackAlignment),H.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,O,T.x,T.y,$,ve,Fe,Re,H.image.data):H.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,O,T.x,T.y,H.mipmaps[0].width,H.mipmaps[0].height,Fe,H.mipmaps[0].data):Y.texSubImage2D(Y.TEXTURE_2D,O,T.x,T.y,Fe,Re,H.image),O===0&&Z.generateMipmaps&&Y.generateMipmap(Y.TEXTURE_2D),ae.unbindTexture()},this.copyTextureToTexture3D=function(T,H,Z,O,$=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=T.max.x-T.min.x+1,Fe=T.max.y-T.min.y+1,Re=T.max.z-T.min.z+1,De=Oe.convert(O.format),Se=Oe.convert(O.type);let Ye;if(O.isData3DTexture)P.setTexture3D(O,0),Ye=Y.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)P.setTexture2DArray(O,0),Ye=Y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,O.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,O.unpackAlignment);const Ze=Y.getParameter(Y.UNPACK_ROW_LENGTH),ht=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),At=Y.getParameter(Y.UNPACK_SKIP_PIXELS),vt=Y.getParameter(Y.UNPACK_SKIP_ROWS),lt=Y.getParameter(Y.UNPACK_SKIP_IMAGES),gt=Z.isCompressedTexture?Z.mipmaps[$]:Z.image;Y.pixelStorei(Y.UNPACK_ROW_LENGTH,gt.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,gt.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,T.min.x),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,T.min.y),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,T.min.z),Z.isDataTexture||Z.isData3DTexture?Y.texSubImage3D(Ye,$,H.x,H.y,H.z,ve,Fe,Re,De,Se,gt.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(Ye,$,H.x,H.y,H.z,ve,Fe,Re,De,gt.data)):Y.texSubImage3D(Ye,$,H.x,H.y,H.z,ve,Fe,Re,De,Se,gt),Y.pixelStorei(Y.UNPACK_ROW_LENGTH,Ze),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,ht),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,At),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,vt),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,lt),$===0&&O.generateMipmaps&&Y.generateMipmap(Ye),ae.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?P.setTextureCube(T,0):T.isData3DTexture?P.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?P.setTexture2DArray(T,0):P.setTexture2D(T,0),ae.unbindTexture()},this.resetState=function(){A=0,b=0,I=null,ae.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ca?"display-p3":"srgb",t.unpackColorSpace=_t.workingColorSpace===is?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Rt?li:Ll}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===li?Rt:Ot}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Um extends Jl{}Um.prototype.isWebGL1Renderer=!0;class Fm extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Bm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qs,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=fn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kt=new J;class pa{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_n(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_n(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_n(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_n(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array),r=yt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new pa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const qo=new J,Yo=new Mt,jo=new Mt,Om=new J,Ko=new st,zr=new J,zs=new Mn,Zo=new st,Vs=new rs;class zm extends jt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ca,this.bindMatrix=new st,this.bindMatrixInverse=new st,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Dn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,zr),this.boundingBox.expandByPoint(zr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Mn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,zr),this.boundingSphere.expandByPoint(zr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zs.copy(this.boundingSphere),zs.applyMatrix4(i),e.ray.intersectsSphere(zs)!==!1&&(Zo.copy(i).invert(),Vs.copy(e.ray).applyMatrix4(Zo),!(this.boundingBox!==null&&Vs.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Vs)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Mt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ca?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Yc?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Yo.fromBufferAttribute(i.attributes.skinIndex,e),jo.fromBufferAttribute(i.attributes.skinWeight,e),qo.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const s=jo.getComponent(r);if(s!==0){const o=Yo.getComponent(r);Ko.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Om.copy(qo).applyMatrix4(Ko),s)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Ql extends wt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Vm extends zt{constructor(e=null,t=1,n=1,i,r,s,o,l,h=Bt,u=Bt,c,d){super(null,s,o,l,h,u,i,r,c,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $o=new st,Hm=new st;class ma{constructor(e=[],t=[]){this.uuid=fn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new st)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new st;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=e.length;r<s;r++){const o=e[r]?e[r].matrixWorld:Hm;$o.multiplyMatrices(o,t[r]),$o.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ma(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Vm(t,e,e,sn,Pn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let s=t[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new Ql),this.bones.push(s),this.boneInverses.push(new st().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const s=t[i];e.bones.push(s.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class ia extends qt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Pi=new st,Jo=new st,Vr=[],Qo=new Dn,Gm=new st,nr=new jt,ir=new Mn;class km extends jt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ia(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Gm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Pi),Qo.copy(e.boundingBox).applyMatrix4(Pi),this.boundingBox.union(Qo)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Pi),ir.copy(e.boundingSphere).applyMatrix4(Pi),this.boundingSphere.union(ir)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(nr.geometry=this.geometry,nr.material=this.material,nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ir.copy(this.boundingSphere),ir.applyMatrix4(n),e.ray.intersectsSphere(ir)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Pi),Jo.multiplyMatrices(n,Pi),nr.matrixWorld=Jo,nr.raycast(e,Vr);for(let s=0,o=Vr.length;s<o;s++){const l=Vr[s];l.instanceId=r,l.object=this,t.push(l)}Vr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ia(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class ec extends xn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const el=new J,tl=new J,nl=new st,Hs=new rs,Hr=new Mn;class va extends wt{constructor(e=new pn,t=new ec){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)el.fromBufferAttribute(t,i-1),tl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=el.distanceTo(tl);e.setAttribute("lineDistance",new on(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(i),Hr.radius+=r,e.ray.intersectsSphere(Hr)===!1)return;nl.copy(i).invert(),Hs.copy(e.ray).applyMatrix4(nl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=new J,u=new J,c=new J,d=new J,f=this.isLineSegments?2:1,v=n.index,m=n.attributes.position;if(v!==null){const p=Math.max(0,s.start),_=Math.min(v.count,s.start+s.count);for(let y=p,x=_-1;y<x;y+=f){const A=v.getX(y),b=v.getX(y+1);if(h.fromBufferAttribute(m,A),u.fromBufferAttribute(m,b),Hs.distanceSqToSegment(h,u,d,c)>l)continue;d.applyMatrix4(this.matrixWorld);const B=e.ray.origin.distanceTo(d);B<e.near||B>e.far||t.push({distance:B,point:c.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,s.start),_=Math.min(m.count,s.start+s.count);for(let y=p,x=_-1;y<x;y+=f){if(h.fromBufferAttribute(m,y),u.fromBufferAttribute(m,y+1),Hs.distanceSqToSegment(h,u,d,c)>l)continue;d.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(d);b<e.near||b>e.far||t.push({distance:b,point:c.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const il=new J,rl=new J;class Wm extends va{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)il.fromBufferAttribute(t,i),rl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+il.distanceTo(rl);e.setAttribute("lineDistance",new on(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xm extends va{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class tc extends xn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const sl=new st,ra=new rs,Gr=new Mn,kr=new J;class qm extends wt{constructor(e=new pn,t=new tc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(i),Gr.radius+=r,e.ray.intersectsSphere(Gr)===!1)return;sl.copy(i).invert(),ra.copy(e.ray).applyMatrix4(sl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=n.index,c=n.attributes.position;if(h!==null){const d=Math.max(0,s.start),f=Math.min(h.count,s.start+s.count);for(let v=d,g=f;v<g;v++){const m=h.getX(v);kr.fromBufferAttribute(c,m),al(kr,m,l,i,e,t,this)}}else{const d=Math.max(0,s.start),f=Math.min(c.count,s.start+s.count);for(let v=d,g=f;v<g;v++)kr.fromBufferAttribute(c,v),al(kr,v,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function al(a,e,t,n,i,r,s){const o=ra.distanceSqToPoint(a);if(o<t){const l=new J;ra.closestPointToPoint(a,l),l.applyMatrix4(n);const h=i.ray.origin.distanceTo(l);if(h<i.near||h>i.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:s})}}let Ym=class nc extends pn{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(s+o,Math.PI);let h=0;const u=[],c=new J,d=new J,f=[],v=[],g=[],m=[];for(let p=0;p<=n;p++){const _=[],y=p/n;let x=0;p===0&&s===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let A=0;A<=t;A++){const b=A/t;c.x=-e*Math.cos(i+b*r)*Math.sin(s+y*o),c.y=e*Math.cos(s+y*o),c.z=e*Math.sin(i+b*r)*Math.sin(s+y*o),v.push(c.x,c.y,c.z),d.copy(c).normalize(),g.push(d.x,d.y,d.z),m.push(b+x,1-y),_.push(h++)}u.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){const y=u[p][_+1],x=u[p][_],A=u[p+1][_],b=u[p+1][_+1];(p!==0||s>0)&&f.push(y,x,b),(p!==n-1||l<Math.PI)&&f.push(x,A,b)}this.setIndex(f),this.setAttribute("position",new on(v,3)),this.setAttribute("normal",new on(g,3)),this.setAttribute("uv",new on(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};class ga extends xn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Il,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Un extends ga{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Wr(a,e,t){return!a||!t&&a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function jm(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function Km(a){function e(i,r){return a[i]-a[r]}const t=a.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ol(a,e,t){const n=a.length,i=new a.constructor(n);for(let r=0,s=0;s!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[s++]=a[o+l]}return i}function ic(a,e,t,n){let i=1,r=a[0];for(;r!==void 0&&r[n]===void 0;)r=a[i++];if(r===void 0)return;let s=r[n];if(s!==void 0)if(Array.isArray(s))do s=r[n],s!==void 0&&(e.push(r.time),t.push.apply(t,s)),r=a[i++];while(r!==void 0);else if(s.toArray!==void 0)do s=r[n],s!==void 0&&(e.push(r.time),s.toArray(t,t.length)),r=a[i++];while(r!==void 0);else do s=r[n],s!==void 0&&(e.push(r.time),t.push(s)),r=a[i++];while(r!==void 0)}class pr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let s;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}s=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}s=n,n=0;break t}break n}for(;n<s;){const o=n+s>>>1;e<t[o]?s=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let s=0;s!==i;++s)t[s]=n[r+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Zm extends pr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:to,endingEnd:to}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,s=e+1,o=i[r],l=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case no:r=e,o=2*t-n;break;case io:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case no:s=e,l=2*n-t;break;case io:s=1,l=n+i[1]-i[0];break;default:s=e-1,l=t}const h=(n-t)*.5,u=this.valueSize;this._weightPrev=h/(t-o),this._weightNext=h/(l-n),this._offsetPrev=r*u,this._offsetNext=s*u}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,u=this._offsetPrev,c=this._offsetNext,d=this._weightPrev,f=this._weightNext,v=(n-t)/(i-t),g=v*v,m=g*v,p=-d*m+2*d*g-d*v,_=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*v+1,y=(-1-f)*m+(1.5+f)*g+.5*v,x=f*m-f*g;for(let A=0;A!==o;++A)r[A]=p*s[u+A]+_*s[h+A]+y*s[l+A]+x*s[c+A];return r}}class $m extends pr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,u=(n-t)/(i-t),c=1-u;for(let d=0;d!==o;++d)r[d]=s[h+d]*c+s[l+d]*u;return r}}class Jm extends pr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Sn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Wr(t,this.TimeBufferType),this.values=Wr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Wr(e.times,Array),values:Wr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Jm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $m(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ur:t=this.InterpolantFactoryMethodDiscrete;break;case Vi:t=this.InterpolantFactoryMethodLinear;break;case ms:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ur;case this.InterpolantFactoryMethodLinear:return Vi;case this.InterpolantFactoryMethodSmooth:return ms}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<e;)++r;for(;s!==-1&&n[s]>t;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const o=this.getValueSize();this.times=n.slice(r,s),this.values=this.values.slice(r*o,s*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(s!==null&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,s),e=!1;break}s=l}if(i!==void 0&&jm(i))for(let o=0,l=i.length;o!==l;++o){const h=i[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ms,r=e.length-1;let s=1;for(let o=1;o<r;++o){let l=!1;const h=e[o],u=e[o+1];if(h!==u&&(o!==1||h!==e[0]))if(i)l=!0;else{const c=o*n,d=c-n,f=c+n;for(let v=0;v!==n;++v){const g=t[c+v];if(g!==t[d+v]||g!==t[f+v]){l=!0;break}}}if(l){if(o!==s){e[s]=e[o];const c=o*n,d=s*n;for(let f=0;f!==n;++f)t[d+f]=t[c+f]}++s}}if(r>0){e[s]=e[r];for(let o=r*n,l=s*n,h=0;h!==n;++h)t[l+h]=t[o+h];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=Vi;class ji extends Sn{}ji.prototype.ValueTypeName="bool";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=ur;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;class rc extends Sn{}rc.prototype.ValueTypeName="color";class ki extends Sn{}ki.prototype.ValueTypeName="number";class Qm extends pr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let h=e*o;for(let u=h+o;h!==u;h+=4)Kn.slerpFlat(r,0,s,h-o,s,h,l);return r}}class di extends Sn{InterpolantFactoryMethodLinear(e){return new Qm(this.times,this.values,this.getValueSize(),e)}}di.prototype.ValueTypeName="quaternion";di.prototype.DefaultInterpolation=Vi;di.prototype.InterpolantFactoryMethodSmooth=void 0;class Ki extends Sn{}Ki.prototype.ValueTypeName="string";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=ur;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;class Wi extends Sn{}Wi.prototype.ValueTypeName="vector";class ev{constructor(e,t=-1,n,i=nh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=fn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let s=0,o=n.length;s!==o;++s)t.push(nv(n[s]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,s=n.length;r!==s;++r)t.push(Sn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,s=[];for(let o=0;o<r;o++){let l=[],h=[];l.push((o+r-1)%r,o,(o+1)%r),h.push(0,1,0);const u=Km(l);l=ol(l,1,u),h=ol(h,1,u),!i&&l[0]===0&&(l.push(r),h.push(h[0])),s.push(new ki(".morphTargetInfluences["+t[o].name+"]",l,h).scale(1/n))}return new this(e,-1,s)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const h=e[o],u=h.name.match(r);if(u&&u.length>1){const c=u[1];let d=i[c];d||(i[c]=d=[]),d.push(h)}}const s=[];for(const o in i)s.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return s}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(c,d,f,v,g){if(f.length!==0){const m=[],p=[];ic(f,m,p,v),m.length!==0&&g.push(new c(d,m,p))}},i=[],r=e.name||"default",s=e.fps||30,o=e.blendMode;let l=e.length||-1;const h=e.hierarchy||[];for(let c=0;c<h.length;c++){const d=h[c].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let v;for(v=0;v<d.length;v++)if(d[v].morphTargets)for(let g=0;g<d[v].morphTargets.length;g++)f[d[v].morphTargets[g]]=-1;for(const g in f){const m=[],p=[];for(let _=0;_!==d[v].morphTargets.length;++_){const y=d[v];m.push(y.time),p.push(y.morphTarget===g?1:0)}i.push(new ki(".morphTargetInfluence["+g+"]",m,p))}l=f.length*s}else{const f=".bones["+t[c].name+"]";n(Wi,f+".position",d,"pos",i),n(di,f+".quaternion",d,"rot",i),n(Wi,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function tv(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ki;case"vector":case"vector2":case"vector3":case"vector4":return Wi;case"color":return rc;case"quaternion":return di;case"bool":case"boolean":return ji;case"string":return Ki}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function nv(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=tv(a.type);if(a.times===void 0){const t=[],n=[];ic(a.keys,t,n,"value"),a.times=t,a.values=n}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const Wn={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class iv{constructor(e,t,n){const i=this;let r=!1,s=0,o=0,l;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,s,o),r=!0},this.itemEnd=function(u){s++,i.onProgress!==void 0&&i.onProgress(u,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,c){return h.push(u,c),this},this.removeHandler=function(u){const c=h.indexOf(u);return c!==-1&&h.splice(c,2),this},this.getHandler=function(u){for(let c=0,d=h.length;c<d;c+=2){const f=h[c],v=h[c+1];if(f.global&&(f.lastIndex=0),f.test(u))return v}return null}}}const rv=new iv;class Zi{constructor(e){this.manager=e!==void 0?e:rv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Zi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Rn={};class sv extends Error{constructor(e,t){super(e),this.response=t}}class sc extends Zi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Wn.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Rn[e]!==void 0){Rn[e].push({onLoad:t,onProgress:n,onError:i});return}Rn[e]=[],Rn[e].push({onLoad:t,onProgress:n,onError:i});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(s).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const u=Rn[e],c=h.body.getReader(),d=h.headers.get("Content-Length")||h.headers.get("X-File-Size"),f=d?parseInt(d):0,v=f!==0;let g=0;const m=new ReadableStream({start(p){_();function _(){c.read().then(({done:y,value:x})=>{if(y)p.close();else{g+=x.byteLength;const A=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:f});for(let b=0,I=u.length;b<I;b++){const B=u[b];B.onProgress&&B.onProgress(A)}p.enqueue(x),_()}})}}});return new Response(m)}else throw new sv(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(l){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return h.json();default:if(o===void 0)return h.text();{const c=/charset="?([^;"\s]*)"?/i.exec(o),d=c&&c[1]?c[1].toLowerCase():void 0,f=new TextDecoder(d);return h.arrayBuffer().then(v=>f.decode(v))}}}).then(h=>{Wn.add(e,h);const u=Rn[e];delete Rn[e];for(let c=0,d=u.length;c<d;c++){const f=u[c];f.onLoad&&f.onLoad(h)}}).catch(h=>{const u=Rn[e];if(u===void 0)throw this.manager.itemError(e),h;delete Rn[e];for(let c=0,d=u.length;c<d;c++){const f=u[c];f.onError&&f.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class av extends Zi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Wn.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const o=dr("img");function l(){u(),Wn.add(e,this),t&&t(this),r.manager.itemEnd(e)}function h(c){u(),i&&i(c),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class ov extends Zi{constructor(e){super(e)}load(e,t,n,i){const r=new zt,s=new av(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class ls extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Gs=new st,ll=new J,cl=new J;class _a{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ua,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ll.setFromMatrixPosition(e.matrixWorld),t.position.copy(ll),cl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cl),t.updateMatrixWorld(),Gs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Gs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class lv extends _a{constructor(){super(new Xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Hi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class cv extends ls{constructor(e,t,n=0,i=Math.PI/3,r=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new lv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const hl=new st,rr=new J,ks=new J;class hv extends _a{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new Mt(2,1,1,1),new Mt(0,1,1,1),new Mt(3,1,1,1),new Mt(1,1,1,1),new Mt(3,0,1,1),new Mt(1,0,1,1)],this._cubeDirections=[new J(1,0,0),new J(-1,0,0),new J(0,0,1),new J(0,0,-1),new J(0,1,0),new J(0,-1,0)],this._cubeUps=[new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,0,1),new J(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),rr.setFromMatrixPosition(e.matrixWorld),n.position.copy(rr),ks.copy(n.position),ks.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ks),n.updateMatrixWorld(),i.makeTranslation(-rr.x,-rr.y,-rr.z),hl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hl)}}class uv extends ls{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new hv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class dv extends _a{constructor(){super(new da(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fv extends ls{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new dv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class pv extends ls{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class cr{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class mv extends Zi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Wn.get(e);if(s!==void 0){if(r.manager.itemStart(e),s.then){s.then(h=>{t&&t(h),r.manager.itemEnd(e)}).catch(h=>{i&&i(h)});return}return setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(h){return Wn.add(e,h),t&&t(h),r.manager.itemEnd(e),h}).catch(function(h){i&&i(h),Wn.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Wn.add(e,l),r.manager.itemStart(e)}}class vv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ul(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ul();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ul(){return(typeof performance>"u"?Date:performance).now()}const xa="\\[\\]\\.:\\/",gv=new RegExp("["+xa+"]","g"),ya="[^"+xa+"]",_v="[^"+xa.replace("\\.","")+"]",xv=/((?:WC+[\/:])*)/.source.replace("WC",ya),yv=/(WCOD+)?/.source.replace("WCOD",_v),Mv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ya),Sv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ya),Ev=new RegExp("^"+xv+yv+Mv+Sv+"$"),Tv=["material","materials","bones","map"];class Av{constructor(e,t,n){const i=n||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class xt{constructor(e,t,n){this.path=t,this.parsedPath=n||xt.parseTrackName(t),this.node=xt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new xt.Composite(e,t,n):new xt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(gv,"")}static parseTrackName(e){const t=Ev.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Tv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let s=0;s<r.length;s++){const o=r[s];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=xt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===h){h=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const s=e[i];if(s===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}xt.Composite=Av;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oa);function dl(a,e){if(e===ih)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),a;if(e===Js||e===Pl){let t=a.getIndex();if(t===null){const s=[],o=a.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)s.push(l);a.setIndex(s),t=a.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const n=t.count-2,i=[];if(e===Js)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=a.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),a}class wv extends Zi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Lv(t)}),this.register(function(t){return new Vv(t)}),this.register(function(t){return new Hv(t)}),this.register(function(t){return new Gv(t)}),this.register(function(t){return new Nv(t)}),this.register(function(t){return new Dv(t)}),this.register(function(t){return new Uv(t)}),this.register(function(t){return new Fv(t)}),this.register(function(t){return new Pv(t)}),this.register(function(t){return new Bv(t)}),this.register(function(t){return new Iv(t)}),this.register(function(t){return new zv(t)}),this.register(function(t){return new Ov(t)}),this.register(function(t){return new Rv(t)}),this.register(function(t){return new kv(t)}),this.register(function(t){return new Wv(t)})}load(e,t,n,i){const r=this;let s;if(this.resourcePath!=="")s=this.resourcePath;else if(this.path!==""){const h=cr.extractUrlBase(e);s=cr.resolveURL(h,this.path)}else s=cr.extractUrlBase(e);this.manager.itemStart(e);const o=function(h){i?i(h):console.error(h),r.manager.itemError(e),r.manager.itemEnd(e)},l=new sc(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(h){try{r.parse(h,s,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const s={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===ac){try{s[ut.KHR_BINARY_GLTF]=new Xv(e)}catch(c){i&&i(c);return}r=JSON.parse(s[ut.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new rg(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const c=this.pluginCallbacks[u](h);c.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[c.name]=c,s[c.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const c=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(c){case ut.KHR_MATERIALS_UNLIT:s[c]=new Cv;break;case ut.KHR_DRACO_MESH_COMPRESSION:s[c]=new qv(r,this.dracoLoader);break;case ut.KHR_TEXTURE_TRANSFORM:s[c]=new Yv;break;case ut.KHR_MESH_QUANTIZATION:s[c]=new jv;break;default:d.indexOf(c)>=0&&o[c]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+c+'".')}}h.setExtensions(s),h.setPlugins(o),h.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function bv(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}const ut={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Rv{constructor(e){this.parser=e,this.name=ut.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let h;const u=new tt(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Ot);const c=l.range!==void 0?l.range:0;switch(l.type){case"directional":h=new fv(u),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new uv(u),h.distance=c;break;case"spot":h=new cv(u),h.distance=c,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,h.angle=l.spot.outerConeAngle,h.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return h.position.set(0,0,0),h.decay=2,Gn(h,l),l.intensity!==void 0&&(h.intensity=l.intensity),h.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(h),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class Cv{constructor(){this.name=ut.KHR_MATERIALS_UNLIT}getMaterialType(){return In}extendParams(e,t,n){const i=[];e.color=new tt(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const s=r.baseColorFactor;e.color.setRGB(s[0],s[1],s[2],Ot),e.opacity=s[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Rt))}return Promise.all(i)}}class Pv{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Lv{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const o=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new dt(o,o)}return Promise.all(r)}}class Iv{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(r)}}class Nv{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new tt(0,0,0),t.sheenRoughness=0,t.sheen=1;const s=i.extensions[this.name];if(s.sheenColorFactor!==void 0){const o=s.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Ot)}return s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",s.sheenColorTexture,Rt)),s.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(r)}}class Dv{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(r)}}class Uv{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;const o=s.attenuationColor||[1,1,1];return t.attenuationColor=new tt().setRGB(o[0],o[1],o[2],Ot),Promise.all(r)}}class Fv{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Bv{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",s.specularTexture));const o=s.specularColorFactor||[1,1,1];return t.specularColor=new tt().setRGB(o[0],o[1],o[2],Ot),s.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",s.specularColorTexture,Rt)),Promise.all(r)}}class Ov{constructor(e){this.parser=e,this.name=ut.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return t.bumpScale=s.bumpFactor!==void 0?s.bumpFactor:1,s.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",s.bumpTexture)),Promise.all(r)}}class zv{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.anisotropyStrength!==void 0&&(t.anisotropy=s.anisotropyStrength),s.anisotropyRotation!==void 0&&(t.anisotropyRotation=s.anisotropyRotation),s.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",s.anisotropyTexture)),Promise.all(r)}}class Vv{constructor(e){this.parser=e,this.name=ut.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,s)}}class Hv{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],o=i.images[s.source];let l=n.textureLoader;if(o.uri){const h=n.options.manager.getHandler(o.uri);h!==null&&(l=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,s.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Gv{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],o=i.images[s.source];let l=n.textureLoader;if(o.uri){const h=n.options.manager.getHandler(o.uri);h!==null&&(l=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,s.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class kv{constructor(e){this.name=ut.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,h=i.byteLength||0,u=i.count,c=i.byteStride,d=new Uint8Array(o,l,h);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(u,c,d,i.mode,i.filter).then(function(f){return f.buffer}):s.ready.then(function(){const f=new ArrayBuffer(u*c);return s.decodeGltfBuffer(new Uint8Array(f),u,c,d,i.mode,i.filter),f})})}else return null}}class Wv{constructor(e){this.name=ut.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const h of i.primitives)if(h.mode!==nn.TRIANGLES&&h.mode!==nn.TRIANGLE_STRIP&&h.mode!==nn.TRIANGLE_FAN&&h.mode!==void 0)return null;const s=n.extensions[this.name].attributes,o=[],l={};for(const h in s)o.push(this.parser.getDependency("accessor",s[h]).then(u=>(l[h]=u,l[h])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(h=>{const u=h.pop(),c=u.isGroup?u.children:[u],d=h[0].count,f=[];for(const v of c){const g=new st,m=new J,p=new Kn,_=new J(1,1,1),y=new km(v.geometry,v.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&_.fromBufferAttribute(l.SCALE,x),y.setMatrixAt(x,g.compose(m,p,_));for(const x in l)if(x==="_COLOR_0"){const A=l[x];y.instanceColor=new ia(A.array,A.itemSize,A.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&v.geometry.setAttribute(x,l[x]);wt.prototype.copy.call(y,v),this.parser.assignFinalMaterial(y),f.push(y)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const ac="glTF",sr=12,fl={JSON:1313821514,BIN:5130562};class Xv{constructor(e){this.name=ut.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,sr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ac)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-sr,r=new DataView(e,sr);let s=0;for(;s<i;){const o=r.getUint32(s,!0);s+=4;const l=r.getUint32(s,!0);if(s+=4,l===fl.JSON){const h=new Uint8Array(e,sr+s,o);this.content=n.decode(h)}else if(l===fl.BIN){const h=sr+s;this.body=e.slice(h,h+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class qv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ut.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,o={},l={},h={};for(const u in s){const c=sa[u]||u.toLowerCase();o[c]=s[u]}for(const u in e.attributes){const c=sa[u]||u.toLowerCase();if(s[u]!==void 0){const d=n.accessors[e.attributes[u]],f=Ui[d.componentType];h[c]=f.name,l[c]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(c,d){i.decodeDracoFile(u,function(f){for(const v in f.attributes){const g=f.attributes[v],m=l[v];m!==void 0&&(g.normalized=m)}c(f)},o,h,Ot,d)})})}}class Yv{constructor(){this.name=ut.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class jv{constructor(){this.name=ut.KHR_MESH_QUANTIZATION}}class oc extends pr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let s=0;s!==i;s++)t[s]=n[r+s];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=o*2,h=o*3,u=i-t,c=(n-t)/u,d=c*c,f=d*c,v=e*h,g=v-h,m=-2*f+3*d,p=f-d,_=1-m,y=p-d+c;for(let x=0;x!==o;x++){const A=s[g+x+o],b=s[g+x+l]*u,I=s[v+x+o],B=s[v+x]*u;r[x]=_*A+y*b+m*I+p*B}return r}}const Kv=new Kn;class Zv extends oc{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Kv.fromArray(r).normalize().toArray(r),r}}const nn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ui={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},pl={9728:Bt,9729:Yt,9984:$s,9985:Sl,9986:qr,9987:ci},ml={33071:rn,33648:Zr,10497:Oi},Ws={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},sa={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Hn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},$v={CUBICSPLINE:void 0,LINEAR:Vi,STEP:ur},Xs={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Jv(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new ga({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Nn})),a.DefaultMaterial}function ei(a,e,t){for(const n in t.extensions)a[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Gn(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Qv(a,e,t){let n=!1,i=!1,r=!1;for(let h=0,u=e.length;h<u;h++){const c=e[h];if(c.POSITION!==void 0&&(n=!0),c.NORMAL!==void 0&&(i=!0),c.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(a);const s=[],o=[],l=[];for(let h=0,u=e.length;h<u;h++){const c=e[h];if(n){const d=c.POSITION!==void 0?t.getDependency("accessor",c.POSITION):a.attributes.position;s.push(d)}if(i){const d=c.NORMAL!==void 0?t.getDependency("accessor",c.NORMAL):a.attributes.normal;o.push(d)}if(r){const d=c.COLOR_0!==void 0?t.getDependency("accessor",c.COLOR_0):a.attributes.color;l.push(d)}}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(l)]).then(function(h){const u=h[0],c=h[1],d=h[2];return n&&(a.morphAttributes.position=u),i&&(a.morphAttributes.normal=c),r&&(a.morphAttributes.color=d),a.morphTargetsRelative=!0,a})}function eg(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)a.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function tg(a){let e;const t=a.extensions&&a.extensions[ut.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+qs(t.attributes):e=a.indices+":"+qs(a.attributes)+":"+a.mode,a.targets!==void 0)for(let n=0,i=a.targets.length;n<i;n++)e+=":"+qs(a.targets[n]);return e}function qs(a){let e="";const t=Object.keys(a).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+a[t[n]]+";";return e}function aa(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ng(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const ig=new st;class rg{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new bv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new ov(this.options.manager):this.textureLoader=new mv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new sc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(s){const o={scene:s[0][i.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:i.asset,parser:n,userData:{}};return ei(r,o,i),Gn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i].joints;for(let o=0,l=s.length;o<l;o++)e[s[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const s=e[i];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(n[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(s,o)=>{const l=this.associations.get(s);l!=null&&this.associations.set(o,l);for(const[h,u]of s.children.entries())r(u,o.children[h])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,s){return n.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ut.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,s){n.load(cr.resolveURL(t.uri,i.path),r,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const s=Ws[i.type],o=Ui[i.componentType],l=i.normalized===!0,h=new o(i.count*s);return Promise.resolve(new qt(h,s,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(s){const o=s[0],l=Ws[i.type],h=Ui[i.componentType],u=h.BYTES_PER_ELEMENT,c=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,v=i.normalized===!0;let g,m;if(f&&f!==c){const p=Math.floor(d/f),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=t.cache.get(_);y||(g=new h(o,p*f,i.count*f/u),y=new Bm(g,f/u),t.cache.add(_,y)),m=new pa(y,l,d%f/u,v)}else o===null?g=new h(i.count*l):g=new h(o,d,i.count*l),m=new qt(g,l,v);if(i.sparse!==void 0){const p=Ws.SCALAR,_=Ui[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,A=new _(s[1],y,i.sparse.count*p),b=new h(s[2],x,i.sparse.count*l);o!==null&&(m=new qt(m.array.slice(),m.itemSize,m.normalized));for(let I=0,B=A.length;I<B;I++){const M=A[I];if(m.setX(M,b[I*l]),l>=2&&m.setY(M,b[I*l+1]),l>=3&&m.setZ(M,b[I*l+2]),l>=4&&m.setW(M,b[I*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,s=t.images[r];let o=this.textureLoader;if(s.uri){const l=n.manager.getHandler(s.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,s=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+s.sampler;if(this.textureCache[l])return this.textureCache[l];const h=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=s.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(r.samplers||{})[s.sampler]||{};return u.magFilter=pl[d.magFilter]||Yt,u.minFilter=pl[d.minFilter]||ci,u.wrapS=ml[d.wrapS]||Oi,u.wrapT=ml[d.wrapT]||Oi,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=h,h}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(c=>c.clone());const s=i.images[e],o=self.URL||self.webkitURL;let l=s.uri||"",h=!1;if(s.bufferView!==void 0)l=n.getDependency("bufferView",s.bufferView).then(function(c){h=!0;const d=new Blob([c],{type:s.mimeType});return l=o.createObjectURL(d),l});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(c){return new Promise(function(d,f){let v=d;t.isImageBitmapLoader===!0&&(v=function(g){const m=new zt(g);m.needsUpdate=!0,d(m)}),t.load(cr.resolveURL(c,r.path),v,void 0,f)})}).then(function(c){return h===!0&&o.revokeObjectURL(l),c.userData.mimeType=s.mimeType||ng(s.uri),c}).catch(function(c){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),c});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(s){if(!s)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(s=s.clone(),s.channel=n.texCoord),r.extensions[ut.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[ut.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(s);s=r.extensions[ut.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),r.associations.set(s,l)}}return i!==void 0&&(s.colorSpace=i),e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new tc,xn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new ec,xn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||s){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),s&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),s&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ga}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let s;const o={},l=r.extensions||{},h=[];if(l[ut.KHR_MATERIALS_UNLIT]){const c=i[ut.KHR_MATERIALS_UNLIT];s=c.getMaterialType(),h.push(c.extendParams(o,r,t))}else{const c=r.pbrMetallicRoughness||{};if(o.color=new tt(1,1,1),o.opacity=1,Array.isArray(c.baseColorFactor)){const d=c.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Ot),o.opacity=d[3]}c.baseColorTexture!==void 0&&h.push(t.assignTexture(o,"map",c.baseColorTexture,Rt)),o.metalness=c.metallicFactor!==void 0?c.metallicFactor:1,o.roughness=c.roughnessFactor!==void 0?c.roughnessFactor:1,c.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(o,"metalnessMap",c.metallicRoughnessTexture)),h.push(t.assignTexture(o,"roughnessMap",c.metallicRoughnessTexture))),s=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=gn);const u=r.alphaMode||Xs.OPAQUE;if(u===Xs.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Xs.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&s!==In&&(h.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new dt(1,1),r.normalTexture.scale!==void 0)){const c=r.normalTexture.scale;o.normalScale.set(c,c)}if(r.occlusionTexture!==void 0&&s!==In&&(h.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&s!==In){const c=r.emissiveFactor;o.emissive=new tt().setRGB(c[0],c[1],c[2],Ot)}return r.emissiveTexture!==void 0&&s!==In&&h.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Rt)),Promise.all(h).then(function(){const c=new s(o);return r.name&&(c.name=r.name),Gn(c,r),t.associations.set(c,{materials:e}),r.extensions&&ei(i,c,r),c})}createUniqueName(e){const t=xt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[ut.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return vl(l,o,t)})}const s=[];for(let o=0,l=e.length;o<l;o++){const h=e[o],u=tg(h),c=i[u];if(c)s.push(c.promise);else{let d;h.extensions&&h.extensions[ut.KHR_DRACO_MESH_COMPRESSION]?d=r(h):d=vl(new pn,h,t),i[u]={primitive:h,promise:d},s.push(d)}}return Promise.all(s)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],s=r.primitives,o=[];for(let l=0,h=s.length;l<h;l++){const u=s[l].material===void 0?Jv(this.cache):this.getDependency("material",s[l].material);o.push(u)}return o.push(t.loadGeometries(s)),Promise.all(o).then(function(l){const h=l.slice(0,l.length-1),u=l[l.length-1],c=[];for(let f=0,v=u.length;f<v;f++){const g=u[f],m=s[f];let p;const _=h[f];if(m.mode===nn.TRIANGLES||m.mode===nn.TRIANGLE_STRIP||m.mode===nn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new zm(g,_):new jt(g,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===nn.TRIANGLE_STRIP?p.geometry=dl(p.geometry,Pl):m.mode===nn.TRIANGLE_FAN&&(p.geometry=dl(p.geometry,Js));else if(m.mode===nn.LINES)p=new Wm(g,_);else if(m.mode===nn.LINE_STRIP)p=new va(g,_);else if(m.mode===nn.LINE_LOOP)p=new Xm(g,_);else if(m.mode===nn.POINTS)p=new qm(g,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&eg(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Gn(p,r),m.extensions&&ei(i,p,m),t.assignFinalMaterial(p),c.push(p)}for(let f=0,v=c.length;f<v;f++)t.associations.set(c[f],{meshes:e,primitives:f});if(c.length===1)return r.extensions&&ei(i,c[0],r),c[0];const d=new si;r.extensions&&ei(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,v=c.length;f<v;f++)d.add(c[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Xt(Rh.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new da(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Gn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),s=i,o=[],l=[];for(let h=0,u=s.length;h<u;h++){const c=s[h];if(c){o.push(c);const d=new st;r!==null&&d.fromArray(r.array,h*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new ma(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,s=[],o=[],l=[],h=[],u=[];for(let c=0,d=i.channels.length;c<d;c++){const f=i.channels[c],v=i.samplers[f.sampler],g=f.target,m=g.node,p=i.parameters!==void 0?i.parameters[v.input]:v.input,_=i.parameters!==void 0?i.parameters[v.output]:v.output;g.node!==void 0&&(s.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",_)),h.push(v),u.push(g))}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(l),Promise.all(h),Promise.all(u)]).then(function(c){const d=c[0],f=c[1],v=c[2],g=c[3],m=c[4],p=[];for(let _=0,y=d.length;_<y;_++){const x=d[_],A=f[_],b=v[_],I=g[_],B=m[_];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const M=n._createAnimationTracks(x,A,b,I,B);if(M)for(let E=0;E<M.length;E++)p.push(M[E])}return new ev(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const s=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&s.traverse(function(o){if(o.isMesh)for(let l=0,h=i.weights.length;l<h;l++)o.morphTargetInfluences[l]=i.weights[l]}),s})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),s=[],o=i.children||[];for(let h=0,u=o.length;h<u;h++)s.push(n.getDependency("node",o[h]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(s),l]).then(function(h){const u=h[0],c=h[1],d=h[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,ig)});for(let f=0,v=c.length;f<v;f++)u.add(c[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],s=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(h){return i._getNodeRef(i.cameraCache,r.camera,h)})),i._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){o.push(h)}),this.nodeCache[e]=Promise.all(o).then(function(h){let u;if(r.isBone===!0?u=new Ql:h.length>1?u=new si:h.length===1?u=h[0]:u=new wt,u!==h[0])for(let c=0,d=h.length;c<d;c++)u.add(h[c]);if(r.name&&(u.userData.name=r.name,u.name=s),Gn(u,r),r.extensions&&ei(n,u,r),r.matrix!==void 0){const c=new st;c.fromArray(r.matrix),u.applyMatrix4(c)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new si;n.name&&(r.name=i.createUniqueName(n.name)),Gn(r,n),n.extensions&&ei(t,r,n);const s=n.nodes||[],o=[];for(let l=0,h=s.length;l<h;l++)o.push(i.getDependency("node",s[l]));return Promise.all(o).then(function(l){for(let u=0,c=l.length;u<c;u++)r.add(l[u]);const h=u=>{const c=new Map;for(const[d,f]of i.associations)(d instanceof xn||d instanceof zt)&&c.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&c.set(d,f)}),c};return i.associations=h(r),r})}_createAnimationTracks(e,t,n,i,r){const s=[],o=e.name?e.name:e.uuid,l=[];Hn[r.path]===Hn.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let h;switch(Hn[r.path]){case Hn.weights:h=ki;break;case Hn.rotation:h=di;break;case Hn.position:case Hn.scale:h=Wi;break;default:switch(n.itemSize){case 1:h=ki;break;case 2:case 3:default:h=Wi;break}break}const u=i.interpolation!==void 0?$v[i.interpolation]:Vi,c=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const v=new h(l[d]+"."+Hn[r.path],t.array,c,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),s.push(v)}return s}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=aa(t.constructor),i=new Float32Array(t.length);for(let r=0,s=t.length;r<s;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof di?Zv:oc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function sg(a,e,t){const n=e.attributes,i=new Dn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,h=o.max;if(l!==void 0&&h!==void 0){if(i.set(new J(l[0],l[1],l[2]),new J(h[0],h[1],h[2])),o.normalized){const u=aa(Ui[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new J,l=new J;for(let h=0,u=r.length;h<u;h++){const c=r[h];if(c.POSITION!==void 0){const d=t.json.accessors[c.POSITION],f=d.min,v=d.max;if(f!==void 0&&v!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(v[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(v[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(v[2]))),d.normalized){const g=aa(Ui[d.componentType]);l.multiplyScalar(g)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}a.boundingBox=i;const s=new Mn;i.getCenter(s.center),s.radius=i.min.distanceTo(i.max)/2,a.boundingSphere=s}function vl(a,e,t){const n=e.attributes,i=[];function r(s,o){return t.getDependency("accessor",s).then(function(l){a.setAttribute(o,l)})}for(const s in n){const o=sa[s]||s.toLowerCase();o in a.attributes||i.push(r(n[s],o))}if(e.indices!==void 0&&!a.index){const s=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});i.push(s)}return _t.workingColorSpace!==Ot&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${_t.workingColorSpace}" not supported.`),Gn(a,e),sg(a,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Qv(a,e.targets,t):a})}class Xi{static createButton(e){const t=document.createElement("button");function n(){let l=null;async function h(d){d.addEventListener("end",u),await e.xr.setSession(d),t.textContent="EXIT VR",l=d}function u(){l.removeEventListener("end",u),t.textContent="ENTER VR",l=null}t.style.display="",t.style.cursor="pointer",t.style.left="calc(50% - 50px)",t.style.width="100px",t.textContent="ENTER VR";const c={optionalFeatures:["local-floor","bounded-floor","hand-tracking","layers"]};t.onmouseenter=function(){t.style.opacity="1.0"},t.onmouseleave=function(){t.style.opacity="0.5"},t.onclick=function(){l===null?navigator.xr.requestSession("immersive-vr",c).then(h):(l.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",c).then(h))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",c).then(h)}function i(){t.style.display="",t.style.cursor="auto",t.style.left="calc(50% - 75px)",t.style.width="150px",t.onmouseenter=null,t.onmouseleave=null,t.onclick=null}function r(){i(),t.textContent="VR NOT SUPPORTED"}function s(l){i(),console.warn("Exception when trying to call xr.isSessionSupported",l),t.textContent="VR NOT ALLOWED"}function o(l){l.style.position="absolute",l.style.bottom="20px",l.style.padding="12px 6px",l.style.border="1px solid #fff",l.style.borderRadius="4px",l.style.background="rgba(0,0,0,0.1)",l.style.color="#fff",l.style.font="normal 13px sans-serif",l.style.textAlign="center",l.style.opacity="0.5",l.style.outline="none",l.style.zIndex="999"}if("xr"in navigator)return t.id="VRButton",t.style.display="none",o(t),navigator.xr.isSessionSupported("immersive-vr").then(function(l){l?n():r(),l&&Xi.xrSessionIsGranted&&t.click()}).catch(s),t;{const l=document.createElement("a");return window.isSecureContext===!1?(l.href=document.location.href.replace(/^http:/,"https:"),l.innerHTML="WEBXR NEEDS HTTPS"):(l.href="https://immersiveweb.dev/",l.innerHTML="WEBXR NOT AVAILABLE"),l.style.left="calc(50% - 90px)",l.style.width="180px",l.style.textDecoration="none",o(l),l}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{Xi.xrSessionIsGranted=!0})}}}Xi.xrSessionIsGranted=!1;Xi.registerSessionGrantedListener();function ag(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}function Xr(a){throw new Error('Could not dynamically require "'+a+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var lc={exports:{}};(function(a,e){(function(t){a.exports=t()})(function(){return function t(n,i,r){function s(h,u){if(!i[h]){if(!n[h]){var c=typeof Xr=="function"&&Xr;if(!u&&c)return c(h,!0);if(o)return o(h,!0);throw new Error("Cannot find module '"+h+"'")}var d=i[h]={exports:{}};n[h][0].call(d.exports,function(f){var v=n[h][1][f];return s(v||f)},d,d.exports,t,n,i,r)}return i[h].exports}for(var o=typeof Xr=="function"&&Xr,l=0;l<r.length;l++)s(r[l]);return s}({1:[function(t,n,i){n.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(t,n,i){n.exports={version:t("../package.json").version,AABB:t("./collision/AABB"),ArrayCollisionMatrix:t("./collision/ArrayCollisionMatrix"),Body:t("./objects/Body"),Box:t("./shapes/Box"),Broadphase:t("./collision/Broadphase"),Constraint:t("./constraints/Constraint"),ContactEquation:t("./equations/ContactEquation"),Narrowphase:t("./world/Narrowphase"),ConeTwistConstraint:t("./constraints/ConeTwistConstraint"),ContactMaterial:t("./material/ContactMaterial"),ConvexPolyhedron:t("./shapes/ConvexPolyhedron"),Cylinder:t("./shapes/Cylinder"),DistanceConstraint:t("./constraints/DistanceConstraint"),Equation:t("./equations/Equation"),EventTarget:t("./utils/EventTarget"),FrictionEquation:t("./equations/FrictionEquation"),GSSolver:t("./solver/GSSolver"),GridBroadphase:t("./collision/GridBroadphase"),Heightfield:t("./shapes/Heightfield"),HingeConstraint:t("./constraints/HingeConstraint"),LockConstraint:t("./constraints/LockConstraint"),Mat3:t("./math/Mat3"),Material:t("./material/Material"),NaiveBroadphase:t("./collision/NaiveBroadphase"),ObjectCollisionMatrix:t("./collision/ObjectCollisionMatrix"),Pool:t("./utils/Pool"),Particle:t("./shapes/Particle"),Plane:t("./shapes/Plane"),PointToPointConstraint:t("./constraints/PointToPointConstraint"),Quaternion:t("./math/Quaternion"),Ray:t("./collision/Ray"),RaycastVehicle:t("./objects/RaycastVehicle"),RaycastResult:t("./collision/RaycastResult"),RigidVehicle:t("./objects/RigidVehicle"),RotationalEquation:t("./equations/RotationalEquation"),RotationalMotorEquation:t("./equations/RotationalMotorEquation"),SAPBroadphase:t("./collision/SAPBroadphase"),SPHSystem:t("./objects/SPHSystem"),Shape:t("./shapes/Shape"),Solver:t("./solver/Solver"),Sphere:t("./shapes/Sphere"),SplitSolver:t("./solver/SplitSolver"),Spring:t("./objects/Spring"),Trimesh:t("./shapes/Trimesh"),Vec3:t("./math/Vec3"),Vec3Pool:t("./utils/Vec3Pool"),World:t("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(t,n,i){var r=t("../math/Vec3");t("../utils/Utils"),n.exports=s;function s(h){h=h||{},this.lowerBound=new r,h.lowerBound&&this.lowerBound.copy(h.lowerBound),this.upperBound=new r,h.upperBound&&this.upperBound.copy(h.upperBound)}var o=new r;s.prototype.setFromPoints=function(h,u,c,d){var f=this.lowerBound,v=this.upperBound,g=c;f.copy(h[0]),g&&g.vmult(f,f),v.copy(f);for(var m=1;m<h.length;m++){var p=h[m];g&&(g.vmult(p,o),p=o),p.x>v.x&&(v.x=p.x),p.x<f.x&&(f.x=p.x),p.y>v.y&&(v.y=p.y),p.y<f.y&&(f.y=p.y),p.z>v.z&&(v.z=p.z),p.z<f.z&&(f.z=p.z)}return u&&(u.vadd(f,f),u.vadd(v,v)),d&&(f.x-=d,f.y-=d,f.z-=d,v.x+=d,v.y+=d,v.z+=d),this},s.prototype.copy=function(h){return this.lowerBound.copy(h.lowerBound),this.upperBound.copy(h.upperBound),this},s.prototype.clone=function(){return new s().copy(this)},s.prototype.extend=function(h){var u=h.lowerBound.x;this.lowerBound.x>u&&(this.lowerBound.x=u);var c=h.upperBound.x;this.upperBound.x<c&&(this.upperBound.x=c);var u=h.lowerBound.y;this.lowerBound.y>u&&(this.lowerBound.y=u);var c=h.upperBound.y;this.upperBound.y<c&&(this.upperBound.y=c);var u=h.lowerBound.z;this.lowerBound.z>u&&(this.lowerBound.z=u);var c=h.upperBound.z;this.upperBound.z<c&&(this.upperBound.z=c)},s.prototype.overlaps=function(h){var u=this.lowerBound,c=this.upperBound,d=h.lowerBound,f=h.upperBound;return(d.x<=c.x&&c.x<=f.x||u.x<=f.x&&f.x<=c.x)&&(d.y<=c.y&&c.y<=f.y||u.y<=f.y&&f.y<=c.y)&&(d.z<=c.z&&c.z<=f.z||u.z<=f.z&&f.z<=c.z)},s.prototype.contains=function(h){var u=this.lowerBound,c=this.upperBound,d=h.lowerBound,f=h.upperBound;return u.x<=d.x&&c.x>=f.x&&u.y<=d.y&&c.y>=f.y&&u.z<=d.z&&c.z>=f.z},s.prototype.getCorners=function(h,u,c,d,f,v,g,m){var p=this.lowerBound,_=this.upperBound;h.copy(p),u.set(_.x,p.y,p.z),c.set(_.x,_.y,p.z),d.set(p.x,_.y,_.z),f.set(_.x,p.y,p.z),v.set(p.x,_.y,p.z),g.set(p.x,p.y,_.z),m.copy(_)};var l=[new r,new r,new r,new r,new r,new r,new r,new r];s.prototype.toLocalFrame=function(h,u){var c=l,d=c[0],f=c[1],v=c[2],g=c[3],m=c[4],p=c[5],_=c[6],y=c[7];this.getCorners(d,f,v,g,m,p,_,y);for(var x=0;x!==8;x++){var A=c[x];h.pointToLocal(A,A)}return u.setFromPoints(c)},s.prototype.toWorldFrame=function(h,u){var c=l,d=c[0],f=c[1],v=c[2],g=c[3],m=c[4],p=c[5],_=c[6],y=c[7];this.getCorners(d,f,v,g,m,p,_,y);for(var x=0;x!==8;x++){var A=c[x];h.pointToWorld(A,A)}return u.setFromPoints(c)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(t,n,i){n.exports=r;function r(){this.matrix=[]}r.prototype.get=function(s,o){if(s=s.index,o=o.index,o>s){var l=o;o=s,s=l}return this.matrix[(s*(s+1)>>1)+o-1]},r.prototype.set=function(s,o,l){if(s=s.index,o=o.index,o>s){var h=o;o=s,s=h}this.matrix[(s*(s+1)>>1)+o-1]=l?1:0},r.prototype.reset=function(){for(var s=0,o=this.matrix.length;s!==o;s++)this.matrix[s]=0},r.prototype.setNumObjects=function(s){this.matrix.length=s*(s-1)>>1}},{}],5:[function(t,n,i){var r=t("../objects/Body"),s=t("../math/Vec3"),o=t("../math/Quaternion");t("../shapes/Shape"),t("../shapes/Plane"),n.exports=l;function l(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}l.prototype.collisionPairs=function(g,m,p){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var h=r.STATIC|r.KINEMATIC;l.prototype.needBroadphaseCollision=function(g,m){return!(!(g.collisionFilterGroup&m.collisionFilterMask)||!(m.collisionFilterGroup&g.collisionFilterMask)||(g.type&h||g.sleepState===r.SLEEPING)&&(m.type&h||m.sleepState===r.SLEEPING))},l.prototype.intersectionTest=function(g,m,p,_){this.useBoundingBoxes?this.doBoundingBoxBroadphase(g,m,p,_):this.doBoundingSphereBroadphase(g,m,p,_)};var u=new s;new s,new o,new s,l.prototype.doBoundingSphereBroadphase=function(g,m,p,_){var y=u;m.position.vsub(g.position,y);var x=Math.pow(g.boundingRadius+m.boundingRadius,2),A=y.norm2();A<x&&(p.push(g),_.push(m))},l.prototype.doBoundingBoxBroadphase=function(g,m,p,_){g.aabbNeedsUpdate&&g.computeAABB(),m.aabbNeedsUpdate&&m.computeAABB(),g.aabb.overlaps(m.aabb)&&(p.push(g),_.push(m))};var c={keys:[]},d=[],f=[];l.prototype.makePairsUnique=function(g,m){for(var p=c,_=d,y=f,x=g.length,A=0;A!==x;A++)_[A]=g[A],y[A]=m[A];g.length=0,m.length=0;for(var A=0;A!==x;A++){var b=_[A].id,I=y[A].id,B=b<I?b+","+I:I+","+b;p[B]=A,p.keys.push(B)}for(var A=0;A!==p.keys.length;A++){var B=p.keys.pop(),M=p[B];g.push(_[M]),m.push(y[M]),delete p[B]}},l.prototype.setWorld=function(g){};var v=new s;l.boundingSphereCheck=function(g,m){var p=v;return g.position.vsub(m.position,p),Math.pow(g.shape.boundingSphereRadius+m.shape.boundingSphereRadius,2)>p.norm2()},l.prototype.aabbQuery=function(g,m,p){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(t,n,i){n.exports=l;var r=t("./Broadphase"),s=t("../math/Vec3"),o=t("../shapes/Shape");function l(u,c,d,f,v){r.apply(this),this.nx=d||10,this.ny=f||10,this.nz=v||10,this.aabbMin=u||new s(100,100,100),this.aabbMax=c||new s(-100,-100,-100);var g=this.nx*this.ny*this.nz;if(g<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=g,this.binLengths.length=g;for(var m=0;m<g;m++)this.bins[m]=[],this.binLengths[m]=0}l.prototype=new r,l.prototype.constructor=l;var h=new s;new s,l.prototype.collisionPairs=function(u,c,d){var f=u.numObjects(),v=u.bodies,ne=this.aabbMax,X=this.aabbMin,g=this.nx,m=this.ny,p=this.nz,_=m*p,y=p,x=1,A=ne.x,b=ne.y,I=ne.z,B=X.x,M=X.y,E=X.z,L=g/(A-B),z=m/(b-M),q=p/(I-E),U=(A-B)/g,V=(b-M)/m,Q=(I-E)/p,F=Math.sqrt(U*U+V*V+Q*Q)*.5,D=o.types,j=D.SPHERE,W=D.PLANE;D.BOX,D.COMPOUND,D.CONVEXPOLYHEDRON;for(var N=this.bins,G=this.binLengths,w=this.bins.length,R=0;R!==w;R++)G[R]=0;var C=Math.ceil,X=Math.min,ne=Math.max;function ie(ge,at,et,qe,He,Oe,Qe){var nt=(ge-B)*L|0,ft=(at-M)*z|0,$e=(et-E)*q|0,Te=C((qe-B)*L),k=C((He-M)*z),we=C((Oe-E)*q);nt<0?nt=0:nt>=g&&(nt=g-1),ft<0?ft=0:ft>=m&&(ft=m-1),$e<0?$e=0:$e>=p&&($e=p-1),Te<0?Te=0:Te>=g&&(Te=g-1),k<0?k=0:k>=m&&(k=m-1),we<0?we=0:we>=p&&(we=p-1),nt*=_,ft*=y,$e*=x,Te*=_,k*=y,we*=x;for(var Le=nt;Le<=Te;Le+=_)for(var Ke=ft;Ke<=k;Ke+=y)for(var Xe=$e;Xe<=we;Xe+=x){var pt=Le+Ke+Xe;N[pt][G[pt]++]=Qe}}for(var R=0;R!==f;R++){var K=v[R],te=K.shape;switch(te.type){case j:var ce=K.position.x,Y=K.position.y,Ce=K.position.z,ue=te.radius;ie(ce-ue,Y-ue,Ce-ue,ce+ue,Y+ue,Ce+ue,K);break;case W:te.worldNormalNeedsUpdate&&te.computeWorldNormal(K.quaternion);var se=te.worldNormal,ae=B+U*.5-K.position.x,We=M+V*.5-K.position.y,Ae=E+Q*.5-K.position.z,P=h;P.set(ae,We,Ae);for(var S=0,ee=0;S!==g;S++,ee+=_,P.y=We,P.x+=U)for(var de=0,he=0;de!==m;de++,he+=y,P.z=Ae,P.y+=V)for(var pe=0,Ee=0;pe!==p;pe++,Ee+=x,P.z+=Q)if(P.dot(se)<F){var _e=ee+he+Ee;N[_e][G[_e]++]=K}break;default:K.aabbNeedsUpdate&&K.computeAABB(),ie(K.aabb.lowerBound.x,K.aabb.lowerBound.y,K.aabb.lowerBound.z,K.aabb.upperBound.x,K.aabb.upperBound.y,K.aabb.upperBound.z,K);break}}for(var R=0;R!==w;R++){var xe=G[R];if(xe>1)for(var Ve=N[R],S=0;S!==xe;S++)for(var K=Ve[S],de=0;de!==S;de++){var je=Ve[de];this.needBroadphaseCollision(K,je)&&this.intersectionTest(K,je,c,d)}}this.makePairsUnique(c,d)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(t,n,i){n.exports=o;var r=t("./Broadphase"),s=t("./AABB");function o(){r.apply(this)}o.prototype=new r,o.prototype.constructor=o,o.prototype.collisionPairs=function(l,h,u){var c=l.bodies,d=c.length,f,v,g,m;for(f=0;f!==d;f++)for(v=0;v!==f;v++)g=c[f],m=c[v],this.needBroadphaseCollision(g,m)&&this.intersectionTest(g,m,h,u)},new s,o.prototype.aabbQuery=function(l,h,u){u=u||[];for(var c=0;c<l.bodies.length;c++){var d=l.bodies[c];d.aabbNeedsUpdate&&d.computeAABB(),d.aabb.overlaps(h)&&u.push(d)}return u}},{"./AABB":3,"./Broadphase":5}],8:[function(t,n,i){n.exports=r;function r(){this.matrix={}}r.prototype.get=function(s,o){if(s=s.id,o=o.id,o>s){var l=o;o=s,s=l}return s+"-"+o in this.matrix},r.prototype.set=function(s,o,l){if(s=s.id,o=o.id,o>s){var h=o;o=s,s=h}l?this.matrix[s+"-"+o]=!0:delete this.matrix[s+"-"+o]},r.prototype.reset=function(){this.matrix={}},r.prototype.setNumObjects=function(s){}},{}],9:[function(t,n,i){n.exports=c;var r=t("../math/Vec3"),s=t("../math/Quaternion"),o=t("../math/Transform");t("../shapes/ConvexPolyhedron"),t("../shapes/Box");var l=t("../collision/RaycastResult"),h=t("../shapes/Shape"),u=t("../collision/AABB");function c(w,R){this.from=w?w.clone():new r,this.to=R?R.clone():new r,this._direction=new r,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=c.ANY,this.result=new l,this.hasHit=!1,this.callback=function(C){}}c.prototype.constructor=c,c.CLOSEST=1,c.ANY=2,c.ALL=4;var d=new u,f=[];c.prototype.intersectWorld=function(w,R){return this.mode=R.mode||c.ANY,this.result=R.result||new l,this.skipBackfaces=!!R.skipBackfaces,this.collisionFilterMask=typeof R.collisionFilterMask<"u"?R.collisionFilterMask:-1,this.collisionFilterGroup=typeof R.collisionFilterGroup<"u"?R.collisionFilterGroup:-1,R.from&&this.from.copy(R.from),R.to&&this.to.copy(R.to),this.callback=R.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(d),f.length=0,w.broadphase.aabbQuery(w,d,f),this.intersectBodies(f),this.hasHit};var v=new r,g=new r;c.pointInTriangle=m;function m(w,R,C,X){X.vsub(R,W),C.vsub(R,v),w.vsub(R,g);var ne=W.dot(W),ie=W.dot(v),K=W.dot(g),te=v.dot(v),ce=v.dot(g),Y,Ce;return(Y=te*K-ie*ce)>=0&&(Ce=ne*ce-ie*K)>=0&&Y+Ce<ne*te-ie*ie}var p=new r,_=new s;c.prototype.intersectBody=function(w,R){R&&(this.result=R,this._updateDirection());var C=this.checkCollisionResponse;if(!(C&&!w.collisionResponse)&&!(!(this.collisionFilterGroup&w.collisionFilterMask)||!(w.collisionFilterGroup&this.collisionFilterMask)))for(var X=p,ne=_,ie=0,K=w.shapes.length;ie<K;ie++){var te=w.shapes[ie];if(!(C&&!te.collisionResponse)&&(w.quaternion.mult(w.shapeOrientations[ie],ne),w.quaternion.vmult(w.shapeOffsets[ie],X),X.vadd(w.position,X),this.intersectShape(te,ne,X,w),this.result._shouldStop))break}},c.prototype.intersectBodies=function(w,R){R&&(this.result=R,this._updateDirection());for(var C=0,X=w.length;!this.result._shouldStop&&C<X;C++)this.intersectBody(w[C])},c.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},c.prototype.intersectShape=function(w,R,C,X){var ne=this.from,ie=G(ne,this._direction,C);if(!(ie>w.boundingSphereRadius)){var K=this[w.type];K&&K.call(this,w,R,C,X)}},new r,new r;var y=new r,x=new r,A=new r,b=new r;new r,new l,c.prototype.intersectBox=function(w,R,C,X){return this.intersectConvex(w.convexPolyhedronRepresentation,R,C,X)},c.prototype[h.types.BOX]=c.prototype.intersectBox,c.prototype.intersectPlane=function(w,R,C,X){var ne=this.from,ie=this.to,K=this._direction,te=new r(0,0,1);R.vmult(te,te);var ce=new r;ne.vsub(C,ce);var Y=ce.dot(te);ie.vsub(C,ce);var Ce=ce.dot(te);if(!(Y*Ce>0)&&!(ne.distanceTo(ie)<Y)){var ue=te.dot(K);if(!(Math.abs(ue)<this.precision)){var se=new r,ae=new r,We=new r;ne.vsub(C,se);var Ae=-te.dot(se)/ue;K.scale(Ae,ae),ne.vadd(ae,We),this.reportIntersection(te,We,w,X,-1)}}},c.prototype[h.types.PLANE]=c.prototype.intersectPlane,c.prototype.getAABB=function(w){var R=this.to,C=this.from;w.lowerBound.x=Math.min(R.x,C.x),w.lowerBound.y=Math.min(R.y,C.y),w.lowerBound.z=Math.min(R.z,C.z),w.upperBound.x=Math.max(R.x,C.x),w.upperBound.y=Math.max(R.y,C.y),w.upperBound.z=Math.max(R.z,C.z)};var I={faceList:[0]};c.prototype.intersectHeightfield=function(w,R,C,X){w.data,w.elementSize;var ne=new r,ie=new c(this.from,this.to);o.pointToLocalFrame(C,R,ie.from,ie.from),o.pointToLocalFrame(C,R,ie.to,ie.to);var K=[],te=null,ce=null,Y=null,Ce=null,ue=w.getIndexOfPosition(ie.from.x,ie.from.y,K,!1);if(ue&&(te=K[0],ce=K[1],Y=K[0],Ce=K[1]),ue=w.getIndexOfPosition(ie.to.x,ie.to.y,K,!1),ue&&((te===null||K[0]<te)&&(te=K[0]),(Y===null||K[0]>Y)&&(Y=K[0]),(ce===null||K[1]<ce)&&(ce=K[1]),(Ce===null||K[1]>Ce)&&(Ce=K[1])),te!==null){var se=[];w.getRectMinMax(te,ce,Y,Ce,se),se[0],se[1];for(var ae=te;ae<=Y;ae++)for(var We=ce;We<=Ce;We++){if(this.result._shouldStop||(w.getConvexTrianglePillar(ae,We,!1),o.pointToWorldFrame(C,R,w.pillarOffset,ne),this.intersectConvex(w.pillarConvex,R,ne,X,I),this.result._shouldStop))return;w.getConvexTrianglePillar(ae,We,!0),o.pointToWorldFrame(C,R,w.pillarOffset,ne),this.intersectConvex(w.pillarConvex,R,ne,X,I)}}},c.prototype[h.types.HEIGHTFIELD]=c.prototype.intersectHeightfield;var B=new r,M=new r;c.prototype.intersectSphere=function(w,R,C,X){var ne=this.from,ie=this.to,K=w.radius,te=Math.pow(ie.x-ne.x,2)+Math.pow(ie.y-ne.y,2)+Math.pow(ie.z-ne.z,2),ce=2*((ie.x-ne.x)*(ne.x-C.x)+(ie.y-ne.y)*(ne.y-C.y)+(ie.z-ne.z)*(ne.z-C.z)),Y=Math.pow(ne.x-C.x,2)+Math.pow(ne.y-C.y,2)+Math.pow(ne.z-C.z,2)-Math.pow(K,2),Ce=Math.pow(ce,2)-4*te*Y,ue=B,se=M;if(!(Ce<0))if(Ce===0)ne.lerp(ie,Ce,ue),ue.vsub(C,se),se.normalize(),this.reportIntersection(se,ue,w,X,-1);else{var ae=(-ce-Math.sqrt(Ce))/(2*te),We=(-ce+Math.sqrt(Ce))/(2*te);if(ae>=0&&ae<=1&&(ne.lerp(ie,ae,ue),ue.vsub(C,se),se.normalize(),this.reportIntersection(se,ue,w,X,-1)),this.result._shouldStop)return;We>=0&&We<=1&&(ne.lerp(ie,We,ue),ue.vsub(C,se),se.normalize(),this.reportIntersection(se,ue,w,X,-1))}},c.prototype[h.types.SPHERE]=c.prototype.intersectSphere;var E=new r;new r,new r;var L=new r;c.prototype.intersectConvex=function(R,C,X,ne,ie){for(var K=E,te=L,ce=ie&&ie.faceList||null,Y=R.faces,Ce=R.vertices,ue=R.faceNormals,se=this._direction,ae=this.from,We=this.to,Ae=ae.distanceTo(We),P=ce?ce.length:Y.length,S=this.result,ee=0;!S._shouldStop&&ee<P;ee++){var de=ce?ce[ee]:ee,he=Y[de],pe=ue[de],Ee=C,_e=X;te.copy(Ce[he[0]]),Ee.vmult(te,te),te.vadd(_e,te),te.vsub(ae,te),Ee.vmult(pe,K);var xe=se.dot(K);if(!(Math.abs(xe)<this.precision)){var Ve=K.dot(te)/xe;if(!(Ve<0)){se.mult(Ve,y),y.vadd(ae,y),x.copy(Ce[he[0]]),Ee.vmult(x,x),_e.vadd(x,x);for(var je=1;!S._shouldStop&&je<he.length-1;je++){A.copy(Ce[he[je]]),b.copy(Ce[he[je+1]]),Ee.vmult(A,A),Ee.vmult(b,b),_e.vadd(A,A),_e.vadd(b,b);var ge=y.distanceTo(ae);!(m(y,x,A,b)||m(y,A,x,b))||ge>Ae||this.reportIntersection(K,y,R,ne,de)}}}}},c.prototype[h.types.CONVEXPOLYHEDRON]=c.prototype.intersectConvex;var z=new r,q=new r,U=new r,V=new r,Q=new r,F=new r;new u;var D=[],j=new o;c.prototype.intersectTrimesh=function(R,C,X,ne,ie){var K=z,te=D,ce=j,Y=L,Ce=q,ue=U,se=V,ae=F,We=Q;ie&&ie.faceList;var Ae=R.indices;R.vertices,R.faceNormals;var P=this.from,S=this.to,ee=this._direction;ce.position.copy(X),ce.quaternion.copy(C),o.vectorToLocalFrame(X,C,ee,Ce),o.pointToLocalFrame(X,C,P,ue),o.pointToLocalFrame(X,C,S,se);var de=ue.distanceSquared(se);R.tree.rayQuery(this,ce,te);for(var he=0,pe=te.length;!this.result._shouldStop&&he!==pe;he++){var Ee=te[he];R.getNormal(Ee,K),R.getVertex(Ae[Ee*3],x),x.vsub(ue,Y);var _e=Ce.dot(K),xe=K.dot(Y)/_e;if(!(xe<0)){Ce.scale(xe,y),y.vadd(ue,y),R.getVertex(Ae[Ee*3+1],A),R.getVertex(Ae[Ee*3+2],b);var Ve=y.distanceSquared(ue);!(m(y,A,x,b)||m(y,x,A,b))||Ve>de||(o.vectorToWorldFrame(C,K,We),o.pointToWorldFrame(X,C,y,ae),this.reportIntersection(We,ae,R,ne,Ee))}}te.length=0},c.prototype[h.types.TRIMESH]=c.prototype.intersectTrimesh,c.prototype.reportIntersection=function(w,R,C,X,ne){var ie=this.from,K=this.to,te=ie.distanceTo(R),ce=this.result;if(!(this.skipBackfaces&&w.dot(this._direction)>0))switch(ce.hitFaceIndex=typeof ne<"u"?ne:-1,this.mode){case c.ALL:this.hasHit=!0,ce.set(ie,K,w,R,C,X,te),ce.hasHit=!0,this.callback(ce);break;case c.CLOSEST:(te<ce.distance||!ce.hasHit)&&(this.hasHit=!0,ce.hasHit=!0,ce.set(ie,K,w,R,C,X,te));break;case c.ANY:this.hasHit=!0,ce.hasHit=!0,ce.set(ie,K,w,R,C,X,te),ce._shouldStop=!0;break}};var W=new r,N=new r;function G(w,R,C){C.vsub(w,W);var X=W.dot(R);R.mult(X,N),N.vadd(w,N);var ne=C.distanceTo(N);return ne}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(t,n,i){var r=t("../math/Vec3");n.exports=s;function s(){this.rayFromWorld=new r,this.rayToWorld=new r,this.hitNormalWorld=new r,this.hitPointWorld=new r,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}s.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},s.prototype.abort=function(){this._shouldStop=!0},s.prototype.set=function(o,l,h,u,c,d,f){this.rayFromWorld.copy(o),this.rayToWorld.copy(l),this.hitNormalWorld.copy(h),this.hitPointWorld.copy(u),this.shape=c,this.body=d,this.distance=f}},{"../math/Vec3":30}],11:[function(t,n,i){t("../shapes/Shape");var r=t("../collision/Broadphase");n.exports=s;function s(o){r.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var l=this.axisList;this._addBodyHandler=function(h){l.push(h.body)},this._removeBodyHandler=function(h){var u=l.indexOf(h.body);u!==-1&&l.splice(u,1)},o&&this.setWorld(o)}s.prototype=new r,s.prototype.setWorld=function(o){this.axisList.length=0;for(var l=0;l<o.bodies.length;l++)this.axisList.push(o.bodies[l]);o.removeEventListener("addBody",this._addBodyHandler),o.removeEventListener("removeBody",this._removeBodyHandler),o.addEventListener("addBody",this._addBodyHandler),o.addEventListener("removeBody",this._removeBodyHandler),this.world=o,this.dirty=!0},s.insertionSortX=function(o){for(var l=1,h=o.length;l<h;l++){for(var u=o[l],c=l-1;c>=0&&!(o[c].aabb.lowerBound.x<=u.aabb.lowerBound.x);c--)o[c+1]=o[c];o[c+1]=u}return o},s.insertionSortY=function(o){for(var l=1,h=o.length;l<h;l++){for(var u=o[l],c=l-1;c>=0&&!(o[c].aabb.lowerBound.y<=u.aabb.lowerBound.y);c--)o[c+1]=o[c];o[c+1]=u}return o},s.insertionSortZ=function(o){for(var l=1,h=o.length;l<h;l++){for(var u=o[l],c=l-1;c>=0&&!(o[c].aabb.lowerBound.z<=u.aabb.lowerBound.z);c--)o[c+1]=o[c];o[c+1]=u}return o},s.prototype.collisionPairs=function(o,l,h){var u=this.axisList,c=u.length,d=this.axisIndex,f,v;for(this.dirty&&(this.sortList(),this.dirty=!1),f=0;f!==c;f++){var g=u[f];for(v=f+1;v<c;v++){var m=u[v];if(this.needBroadphaseCollision(g,m)){if(!s.checkBounds(g,m,d))break;this.intersectionTest(g,m,l,h)}}}},s.prototype.sortList=function(){for(var o=this.axisList,l=this.axisIndex,h=o.length,u=0;u!==h;u++){var c=o[u];c.aabbNeedsUpdate&&c.computeAABB()}l===0?s.insertionSortX(o):l===1?s.insertionSortY(o):l===2&&s.insertionSortZ(o)},s.checkBounds=function(o,l,h){var u,c;h===0?(u=o.position.x,c=l.position.x):h===1?(u=o.position.y,c=l.position.y):h===2&&(u=o.position.z,c=l.position.z);var d=o.boundingRadius,f=l.boundingRadius,v=u+d,g=c-f;return g<v},s.prototype.autoDetectAxis=function(){for(var o=0,l=0,h=0,u=0,c=0,d=0,f=this.axisList,v=f.length,g=1/v,m=0;m!==v;m++){var p=f[m],_=p.position.x;o+=_,l+=_*_;var y=p.position.y;h+=y,u+=y*y;var x=p.position.z;c+=x,d+=x*x}var A=l-o*o*g,b=u-h*h*g,I=d-c*c*g;A>b?A>I?this.axisIndex=0:this.axisIndex=2:b>I?this.axisIndex=1:this.axisIndex=2},s.prototype.aabbQuery=function(o,l,h){h=h||[],this.dirty&&(this.sortList(),this.dirty=!1);var u=this.axisIndex,c="x";u===1&&(c="y"),u===2&&(c="z");var d=this.axisList;l.lowerBound[c],l.upperBound[c];for(var f=0;f<d.length;f++){var v=d[f];v.aabbNeedsUpdate&&v.computeAABB(),v.aabb.overlaps(l)&&h.push(v)}return h}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(t,n,i){n.exports=h,t("./Constraint");var r=t("./PointToPointConstraint"),s=t("../equations/ConeEquation"),o=t("../equations/RotationalEquation");t("../equations/ContactEquation");var l=t("../math/Vec3");function h(u,c,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6,v=d.pivotA?d.pivotA.clone():new l,g=d.pivotB?d.pivotB.clone():new l;this.axisA=d.axisA?d.axisA.clone():new l,this.axisB=d.axisB?d.axisB.clone():new l,r.call(this,u,v,c,g,f),this.collideConnected=!!d.collideConnected,this.angle=typeof d.angle<"u"?d.angle:0;var m=this.coneEquation=new s(u,c,d),p=this.twistEquation=new o(u,c,d);this.twistAngle=typeof d.twistAngle<"u"?d.twistAngle:0,m.maxForce=0,m.minForce=-f,p.maxForce=0,p.minForce=-f,this.equations.push(m,p)}h.prototype=new r,h.constructor=h,new l,new l,h.prototype.update=function(){var u=this.bodyA,c=this.bodyB,d=this.coneEquation,f=this.twistEquation;r.prototype.update.call(this),u.vectorToWorldFrame(this.axisA,d.axisA),c.vectorToWorldFrame(this.axisB,d.axisB),this.axisA.tangents(f.axisA,f.axisA),u.vectorToWorldFrame(f.axisA,f.axisA),this.axisB.tangents(f.axisB,f.axisB),c.vectorToWorldFrame(f.axisB,f.axisB),d.angle=this.angle,f.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(t,n,i){n.exports=s;var r=t("../utils/Utils");function s(o,l,h){h=r.defaults(h,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=o,this.bodyB=l,this.id=s.idCounter++,this.collideConnected=h.collideConnected,h.wakeUpBodies&&(o&&o.wakeUp(),l&&l.wakeUp())}s.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},s.prototype.enable=function(){for(var o=this.equations,l=0;l<o.length;l++)o[l].enabled=!0},s.prototype.disable=function(){for(var o=this.equations,l=0;l<o.length;l++)o[l].enabled=!1},s.idCounter=0},{"../utils/Utils":53}],14:[function(t,n,i){n.exports=o;var r=t("./Constraint"),s=t("../equations/ContactEquation");function o(l,h,u,c){r.call(this,l,h),typeof u>"u"&&(u=l.position.distanceTo(h.position)),typeof c>"u"&&(c=1e6),this.distance=u;var d=this.distanceEquation=new s(l,h);this.equations.push(d),d.minForce=-c,d.maxForce=c}o.prototype=new r,o.prototype.update=function(){var l=this.bodyA,h=this.bodyB,u=this.distanceEquation,c=this.distance*.5,d=u.ni;h.position.vsub(l.position,d),d.normalize(),d.mult(c,u.ri),d.mult(-c,u.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(t,n,i){n.exports=h,t("./Constraint");var r=t("./PointToPointConstraint"),s=t("../equations/RotationalEquation"),o=t("../equations/RotationalMotorEquation");t("../equations/ContactEquation");var l=t("../math/Vec3");function h(d,f,v){v=v||{};var g=typeof v.maxForce<"u"?v.maxForce:1e6,m=v.pivotA?v.pivotA.clone():new l,p=v.pivotB?v.pivotB.clone():new l;r.call(this,d,m,f,p,g);var _=this.axisA=v.axisA?v.axisA.clone():new l(1,0,0);_.normalize();var y=this.axisB=v.axisB?v.axisB.clone():new l(1,0,0);y.normalize();var x=this.rotationalEquation1=new s(d,f,v),A=this.rotationalEquation2=new s(d,f,v),b=this.motorEquation=new o(d,f,g);b.enabled=!1,this.equations.push(x,A,b)}h.prototype=new r,h.constructor=h,h.prototype.enableMotor=function(){this.motorEquation.enabled=!0},h.prototype.disableMotor=function(){this.motorEquation.enabled=!1},h.prototype.setMotorSpeed=function(d){this.motorEquation.targetVelocity=d},h.prototype.setMotorMaxForce=function(d){this.motorEquation.maxForce=d,this.motorEquation.minForce=-d};var u=new l,c=new l;h.prototype.update=function(){var d=this.bodyA,f=this.bodyB,v=this.motorEquation,g=this.rotationalEquation1,m=this.rotationalEquation2,p=u,_=c,y=this.axisA,x=this.axisB;r.prototype.update.call(this),d.quaternion.vmult(y,p),f.quaternion.vmult(x,_),p.tangents(g.axisA,m.axisA),g.axisB.copy(_),m.axisB.copy(_),this.motorEquation.enabled&&(d.quaternion.vmult(this.axisA,v.axisA),f.quaternion.vmult(this.axisB,v.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(t,n,i){n.exports=l,t("./Constraint");var r=t("./PointToPointConstraint"),s=t("../equations/RotationalEquation");t("../equations/RotationalMotorEquation"),t("../equations/ContactEquation");var o=t("../math/Vec3");function l(h,u,c){c=c||{};var d=typeof c.maxForce<"u"?c.maxForce:1e6,f=new o,v=new o,g=new o;h.position.vadd(u.position,g),g.scale(.5,g),u.pointToLocalFrame(g,v),h.pointToLocalFrame(g,f),r.call(this,h,f,u,v,d);var m=this.rotationalEquation1=new s(h,u,c),p=this.rotationalEquation2=new s(h,u,c),_=this.rotationalEquation3=new s(h,u,c);this.equations.push(m,p,_)}l.prototype=new r,l.constructor=l,new o,new o,l.prototype.update=function(){var h=this.bodyA,u=this.bodyB;this.motorEquation;var c=this.rotationalEquation1,d=this.rotationalEquation2,f=this.rotationalEquation3;r.prototype.update.call(this),h.vectorToWorldFrame(o.UNIT_X,c.axisA),u.vectorToWorldFrame(o.UNIT_Y,c.axisB),h.vectorToWorldFrame(o.UNIT_Y,d.axisA),u.vectorToWorldFrame(o.UNIT_Z,d.axisB),h.vectorToWorldFrame(o.UNIT_Z,f.axisA),u.vectorToWorldFrame(o.UNIT_X,f.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(t,n,i){n.exports=l;var r=t("./Constraint"),s=t("../equations/ContactEquation"),o=t("../math/Vec3");function l(h,u,c,d,f){r.call(this,h,c),f=typeof f<"u"?f:1e6,this.pivotA=u?u.clone():new o,this.pivotB=d?d.clone():new o;var v=this.equationX=new s(h,c),g=this.equationY=new s(h,c),m=this.equationZ=new s(h,c);this.equations.push(v,g,m),v.minForce=g.minForce=m.minForce=-f,v.maxForce=g.maxForce=m.maxForce=f,v.ni.set(1,0,0),g.ni.set(0,1,0),m.ni.set(0,0,1)}l.prototype=new r,l.prototype.update=function(){var h=this.bodyA,u=this.bodyB,c=this.equationX,d=this.equationY,f=this.equationZ;h.quaternion.vmult(this.pivotA,c.ri),u.quaternion.vmult(this.pivotB,c.rj),d.ri.copy(c.ri),d.rj.copy(c.rj),f.ri.copy(c.ri),f.rj.copy(c.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(t,n,i){n.exports=o;var r=t("../math/Vec3");t("../math/Mat3");var s=t("./Equation");function o(u,c,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6;s.call(this,u,c,-f,f),this.axisA=d.axisA?d.axisA.clone():new r(1,0,0),this.axisB=d.axisB?d.axisB.clone():new r(0,1,0),this.angle=typeof d.angle<"u"?d.angle:0}o.prototype=new s,o.prototype.constructor=o;var l=new r,h=new r;o.prototype.computeB=function(u){var c=this.a,d=this.b,f=this.axisA,v=this.axisB,g=l,m=h,p=this.jacobianElementA,_=this.jacobianElementB;f.cross(v,g),v.cross(f,m),p.rotational.copy(m),_.rotational.copy(g);var y=Math.cos(this.angle)-f.dot(v),x=this.computeGW(),A=this.computeGiMf(),b=-y*c-x*d-u*A;return b}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(t,n,i){n.exports=o;var r=t("./Equation"),s=t("../math/Vec3");t("../math/Mat3");function o(m,p,_){_=typeof _<"u"?_:1e6,r.call(this,m,p,0,_),this.restitution=0,this.ri=new s,this.rj=new s,this.ni=new s}o.prototype=new r,o.prototype.constructor=o;var l=new s,h=new s,u=new s;o.prototype.computeB=function(m){var p=this.a,_=this.b,y=this.bi,x=this.bj,A=this.ri,b=this.rj,I=l,B=h,M=y.velocity,E=y.angularVelocity;y.force,y.torque;var L=x.velocity,z=x.angularVelocity;x.force,x.torque;var q=u,U=this.jacobianElementA,V=this.jacobianElementB,Q=this.ni;A.cross(Q,I),b.cross(Q,B),Q.negate(U.spatial),I.negate(U.rotational),V.spatial.copy(Q),V.rotational.copy(B),q.copy(x.position),q.vadd(b,q),q.vsub(y.position,q),q.vsub(A,q);var F=Q.dot(q),D=this.restitution+1,j=D*L.dot(Q)-D*M.dot(Q)+z.dot(B)-E.dot(I),W=this.computeGiMf(),N=-F*p-j*_-m*W;return N};var c=new s,d=new s,f=new s,v=new s,g=new s;o.prototype.getImpactVelocityAlongNormal=function(){var m=c,p=d,_=f,y=v,x=g;return this.bi.position.vadd(this.ri,_),this.bj.position.vadd(this.rj,y),this.bi.getVelocityAtWorldPoint(_,m),this.bj.getVelocityAtWorldPoint(y,p),m.vsub(p,x),this.ni.dot(x)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(t,n,i){n.exports=o;var r=t("../math/JacobianElement"),s=t("../math/Vec3");function o(g,m,p,_){this.id=o.id++,this.minForce=typeof p>"u"?-1e6:p,this.maxForce=typeof _>"u"?1e6:_,this.bi=g,this.bj=m,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new r,this.jacobianElementB=new r,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}o.prototype.constructor=o,o.id=0,o.prototype.setSpookParams=function(g,m,p){var _=m,y=g,x=p;this.a=4/(x*(1+4*_)),this.b=4*_/(1+4*_),this.eps=4/(x*x*y*(1+4*_))},o.prototype.computeB=function(g,m,p){var _=this.computeGW(),y=this.computeGq(),x=this.computeGiMf();return-y*g-_*m-x*p},o.prototype.computeGq=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,y=p.position,x=_.position;return g.spatial.dot(y)+m.spatial.dot(x)};var l=new s;o.prototype.computeGW=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,y=p.velocity,x=_.velocity,A=p.angularVelocity||l,b=_.angularVelocity||l;return g.multiplyVectors(y,A)+m.multiplyVectors(x,b)},o.prototype.computeGWlambda=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,y=p.vlambda,x=_.vlambda,A=p.wlambda||l,b=_.wlambda||l;return g.multiplyVectors(y,A)+m.multiplyVectors(x,b)};var h=new s,u=new s,c=new s,d=new s;o.prototype.computeGiMf=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,y=p.force,x=p.torque,A=_.force,b=_.torque,I=p.invMassSolve,B=_.invMassSolve;return p.invInertiaWorldSolve?p.invInertiaWorldSolve.vmult(x,c):c.set(0,0,0),_.invInertiaWorldSolve?_.invInertiaWorldSolve.vmult(b,d):d.set(0,0,0),y.mult(I,h),A.mult(B,u),g.multiplyVectors(h,c)+m.multiplyVectors(u,d)};var f=new s;o.prototype.computeGiMGt=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,y=p.invMassSolve,x=_.invMassSolve,A=p.invInertiaWorldSolve,b=_.invInertiaWorldSolve,I=y+x;return A&&(A.vmult(g.rotational,f),I+=f.dot(g.rotational)),b&&(b.vmult(m.rotational,f),I+=f.dot(m.rotational)),I};var v=new s;new s,new s,new s,new s,new s,o.prototype.addToWlambda=function(g){var m=this.jacobianElementA,p=this.jacobianElementB,_=this.bi,y=this.bj,x=v;m.spatial.mult(_.invMassSolve*g,x),_.vlambda.vadd(x,_.vlambda),p.spatial.mult(y.invMassSolve*g,x),y.vlambda.vadd(x,y.vlambda),_.invInertiaWorldSolve&&(_.invInertiaWorldSolve.vmult(m.rotational,x),x.mult(g,x),_.wlambda.vadd(x,_.wlambda)),y.invInertiaWorldSolve&&(y.invInertiaWorldSolve.vmult(p.rotational,x),x.mult(g,x),y.wlambda.vadd(x,y.wlambda))},o.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(t,n,i){n.exports=o;var r=t("./Equation"),s=t("../math/Vec3");t("../math/Mat3");function o(u,c,d){r.call(this,u,c,-d,d),this.ri=new s,this.rj=new s,this.t=new s}o.prototype=new r,o.prototype.constructor=o;var l=new s,h=new s;o.prototype.computeB=function(u){this.a;var c=this.b;this.bi,this.bj;var d=this.ri,f=this.rj,v=l,g=h,m=this.t;d.cross(m,v),f.cross(m,g);var p=this.jacobianElementA,_=this.jacobianElementB;m.negate(p.spatial),v.negate(p.rotational),_.spatial.copy(m),_.rotational.copy(g);var y=this.computeGW(),x=this.computeGiMf(),A=-y*c-u*x;return A}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(t,n,i){n.exports=o;var r=t("../math/Vec3");t("../math/Mat3");var s=t("./Equation");function o(u,c,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6;s.call(this,u,c,-f,f),this.axisA=d.axisA?d.axisA.clone():new r(1,0,0),this.axisB=d.axisB?d.axisB.clone():new r(0,1,0),this.maxAngle=Math.PI/2}o.prototype=new s,o.prototype.constructor=o;var l=new r,h=new r;o.prototype.computeB=function(u){var c=this.a,d=this.b,f=this.axisA,v=this.axisB,g=l,m=h,p=this.jacobianElementA,_=this.jacobianElementB;f.cross(v,g),v.cross(f,m),p.rotational.copy(m),_.rotational.copy(g);var y=Math.cos(this.maxAngle)-f.dot(v),x=this.computeGW(),A=this.computeGiMf(),b=-y*c-x*d-u*A;return b}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(t,n,i){n.exports=o;var r=t("../math/Vec3");t("../math/Mat3");var s=t("./Equation");function o(l,h,u){u=typeof u<"u"?u:1e6,s.call(this,l,h,-u,u),this.axisA=new r,this.axisB=new r,this.targetVelocity=0}o.prototype=new s,o.prototype.constructor=o,o.prototype.computeB=function(l){this.a;var h=this.b;this.bi,this.bj;var u=this.axisA,c=this.axisB,d=this.jacobianElementA,f=this.jacobianElementB;d.rotational.copy(u),c.negate(f.rotational);var v=this.computeGW()-this.targetVelocity,g=this.computeGiMf(),m=-v*h-l*g;return m}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(t,n,i){var r=t("../utils/Utils");n.exports=s;function s(o,l,h){h=r.defaults(h,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=s.idCounter++,this.materials=[o,l],this.friction=h.friction,this.restitution=h.restitution,this.contactEquationStiffness=h.contactEquationStiffness,this.contactEquationRelaxation=h.contactEquationRelaxation,this.frictionEquationStiffness=h.frictionEquationStiffness,this.frictionEquationRelaxation=h.frictionEquationRelaxation}s.idCounter=0},{"../utils/Utils":53}],25:[function(t,n,i){n.exports=r;function r(s){var o="";s=s||{},typeof s=="string"?(o=s,s={}):typeof s=="object"&&(o=""),this.name=o,this.id=r.idCounter++,this.friction=typeof s.friction<"u"?s.friction:-1,this.restitution=typeof s.restitution<"u"?s.restitution:-1}r.idCounter=0},{}],26:[function(t,n,i){n.exports=s;var r=t("./Vec3");function s(){this.spatial=new r,this.rotational=new r}s.prototype.multiplyElement=function(o){return o.spatial.dot(this.spatial)+o.rotational.dot(this.rotational)},s.prototype.multiplyVectors=function(o,l){return o.dot(this.spatial)+l.dot(this.rotational)}},{"./Vec3":30}],27:[function(t,n,i){n.exports=s;var r=t("./Vec3");function s(o){o?this.elements=o:this.elements=[0,0,0,0,0,0,0,0,0]}s.prototype.identity=function(){var o=this.elements;o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=1,o[5]=0,o[6]=0,o[7]=0,o[8]=1},s.prototype.setZero=function(){var o=this.elements;o[0]=0,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=0,o[6]=0,o[7]=0,o[8]=0},s.prototype.setTrace=function(o){var l=this.elements;l[0]=o.x,l[4]=o.y,l[8]=o.z},s.prototype.getTrace=function(l){var l=l||new r,h=this.elements;l.x=h[0],l.y=h[4],l.z=h[8]},s.prototype.vmult=function(o,l){l=l||new r;var h=this.elements,u=o.x,c=o.y,d=o.z;return l.x=h[0]*u+h[1]*c+h[2]*d,l.y=h[3]*u+h[4]*c+h[5]*d,l.z=h[6]*u+h[7]*c+h[8]*d,l},s.prototype.smult=function(o){for(var l=0;l<this.elements.length;l++)this.elements[l]*=o},s.prototype.mmult=function(o,l){for(var h=l||new s,u=0;u<3;u++)for(var c=0;c<3;c++){for(var d=0,f=0;f<3;f++)d+=o.elements[u+f*3]*this.elements[f+c*3];h.elements[u+c*3]=d}return h},s.prototype.scale=function(o,l){l=l||new s;for(var h=this.elements,u=l.elements,c=0;c!==3;c++)u[3*c+0]=o.x*h[3*c+0],u[3*c+1]=o.y*h[3*c+1],u[3*c+2]=o.z*h[3*c+2];return l},s.prototype.solve=function(o,l){l=l||new r;for(var h=3,u=4,c=[],d=0;d<h*u;d++)c.push(0);var d,f;for(d=0;d<3;d++)for(f=0;f<3;f++)c[d+u*f]=this.elements[d+3*f];c[3+4*0]=o.x,c[3+4*1]=o.y,c[3+4*2]=o.z;var v=3,g=v,m,p=4,_;do{if(d=g-v,c[d+u*d]===0){for(f=d+1;f<g;f++)if(c[d+u*f]!==0){m=p;do _=p-m,c[_+u*d]+=c[_+u*f];while(--m);break}}if(c[d+u*d]!==0)for(f=d+1;f<g;f++){var y=c[d+u*f]/c[d+u*d];m=p;do _=p-m,c[_+u*f]=_<=d?0:c[_+u*f]-c[_+u*d]*y;while(--m)}}while(--v);if(l.z=c[2*u+3]/c[2*u+2],l.y=(c[1*u+3]-c[1*u+2]*l.z)/c[1*u+1],l.x=(c[0*u+3]-c[0*u+2]*l.z-c[0*u+1]*l.y)/c[0*u+0],isNaN(l.x)||isNaN(l.y)||isNaN(l.z)||l.x===1/0||l.y===1/0||l.z===1/0)throw"Could not solve equation! Got x=["+l.toString()+"], b=["+o.toString()+"], A=["+this.toString()+"]";return l},s.prototype.e=function(o,l,h){if(h===void 0)return this.elements[l+3*o];this.elements[l+3*o]=h},s.prototype.copy=function(o){for(var l=0;l<o.elements.length;l++)this.elements[l]=o.elements[l];return this},s.prototype.toString=function(){for(var o="",l=",",h=0;h<9;h++)o+=this.elements[h]+l;return o},s.prototype.reverse=function(o){o=o||new s;for(var l=3,h=6,u=[],c=0;c<l*h;c++)u.push(0);var c,d;for(c=0;c<3;c++)for(d=0;d<3;d++)u[c+h*d]=this.elements[c+3*d];u[3+6*0]=1,u[3+6*1]=0,u[3+6*2]=0,u[4+6*0]=0,u[4+6*1]=1,u[4+6*2]=0,u[5+6*0]=0,u[5+6*1]=0,u[5+6*2]=1;var f=3,v=f,g,m=h,p;do{if(c=v-f,u[c+h*c]===0){for(d=c+1;d<v;d++)if(u[c+h*d]!==0){g=m;do p=m-g,u[p+h*c]+=u[p+h*d];while(--g);break}}if(u[c+h*c]!==0)for(d=c+1;d<v;d++){var _=u[c+h*d]/u[c+h*c];g=m;do p=m-g,u[p+h*d]=p<=c?0:u[p+h*d]-u[p+h*c]*_;while(--g)}}while(--f);c=2;do{d=c-1;do{var _=u[c+h*d]/u[c+h*c];g=h;do p=h-g,u[p+h*d]=u[p+h*d]-u[p+h*c]*_;while(--g)}while(d--)}while(--c);c=2;do{var _=1/u[c+h*c];g=h;do p=h-g,u[p+h*c]=u[p+h*c]*_;while(--g)}while(c--);c=2;do{d=2;do{if(p=u[l+d+h*c],isNaN(p)||p===1/0)throw"Could not reverse! A=["+this.toString()+"]";o.e(c,d,p)}while(d--)}while(c--);return o},s.prototype.setRotationFromQuaternion=function(o){var l=o.x,h=o.y,u=o.z,c=o.w,d=l+l,f=h+h,v=u+u,g=l*d,m=l*f,p=l*v,_=h*f,y=h*v,x=u*v,A=c*d,b=c*f,I=c*v,B=this.elements;return B[3*0+0]=1-(_+x),B[3*0+1]=m-I,B[3*0+2]=p+b,B[3*1+0]=m+I,B[3*1+1]=1-(g+x),B[3*1+2]=y-A,B[3*2+0]=p-b,B[3*2+1]=y+A,B[3*2+2]=1-(g+_),this},s.prototype.transpose=function(o){o=o||new s;for(var l=o.elements,h=this.elements,u=0;u!==3;u++)for(var c=0;c!==3;c++)l[3*u+c]=h[3*c+u];return o}},{"./Vec3":30}],28:[function(t,n,i){n.exports=s;var r=t("./Vec3");function s(d,f,v,g){this.x=d!==void 0?d:0,this.y=f!==void 0?f:0,this.z=v!==void 0?v:0,this.w=g!==void 0?g:1}s.prototype.set=function(d,f,v,g){this.x=d,this.y=f,this.z=v,this.w=g},s.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},s.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},s.prototype.setFromAxisAngle=function(d,f){var v=Math.sin(f*.5);this.x=d.x*v,this.y=d.y*v,this.z=d.z*v,this.w=Math.cos(f*.5)},s.prototype.toAxisAngle=function(d){d=d||new r,this.normalize();var f=2*Math.acos(this.w),v=Math.sqrt(1-this.w*this.w);return v<.001?(d.x=this.x,d.y=this.y,d.z=this.z):(d.x=this.x/v,d.y=this.y/v,d.z=this.z/v),[d,f]};var o=new r,l=new r;s.prototype.setFromVectors=function(d,f){if(d.isAntiparallelTo(f)){var v=o,g=l;d.tangents(v,g),this.setFromAxisAngle(v,Math.PI)}else{var m=d.cross(f);this.x=m.x,this.y=m.y,this.z=m.z,this.w=Math.sqrt(Math.pow(d.norm(),2)*Math.pow(f.norm(),2))+d.dot(f),this.normalize()}};var h=new r,u=new r,c=new r;s.prototype.mult=function(d,f){f=f||new s;var v=this.w,g=h,m=u,p=c;return g.set(this.x,this.y,this.z),m.set(d.x,d.y,d.z),f.w=v*d.w-g.dot(m),g.cross(m,p),f.x=v*m.x+d.w*g.x+p.x,f.y=v*m.y+d.w*g.y+p.y,f.z=v*m.z+d.w*g.z+p.z,f},s.prototype.inverse=function(d){var f=this.x,v=this.y,g=this.z,m=this.w;d=d||new s,this.conjugate(d);var p=1/(f*f+v*v+g*g+m*m);return d.x*=p,d.y*=p,d.z*=p,d.w*=p,d},s.prototype.conjugate=function(d){return d=d||new s,d.x=-this.x,d.y=-this.y,d.z=-this.z,d.w=this.w,d},s.prototype.normalize=function(){var d=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(d=1/d,this.x*=d,this.y*=d,this.z*=d,this.w*=d)},s.prototype.normalizeFast=function(){var d=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=d,this.y*=d,this.z*=d,this.w*=d)},s.prototype.vmult=function(d,f){f=f||new r;var v=d.x,g=d.y,m=d.z,p=this.x,_=this.y,y=this.z,x=this.w,A=x*v+_*m-y*g,b=x*g+y*v-p*m,I=x*m+p*g-_*v,B=-p*v-_*g-y*m;return f.x=A*x+B*-p+b*-y-I*-_,f.y=b*x+B*-_+I*-p-A*-y,f.z=I*x+B*-y+A*-_-b*-p,f},s.prototype.copy=function(d){return this.x=d.x,this.y=d.y,this.z=d.z,this.w=d.w,this},s.prototype.toEuler=function(d,f){f=f||"YZX";var v,g,m,p=this.x,_=this.y,y=this.z,x=this.w;switch(f){case"YZX":var A=p*_+y*x;if(A>.499&&(v=2*Math.atan2(p,x),g=Math.PI/2,m=0),A<-.499&&(v=-2*Math.atan2(p,x),g=-Math.PI/2,m=0),isNaN(v)){var b=p*p,I=_*_,B=y*y;v=Math.atan2(2*_*x-2*p*y,1-2*I-2*B),g=Math.asin(2*A),m=Math.atan2(2*p*x-2*_*y,1-2*b-2*B)}break;default:throw new Error("Euler order "+f+" not supported yet.")}d.y=v,d.z=g,d.x=m},s.prototype.setFromEuler=function(d,f,v,g){g=g||"XYZ";var m=Math.cos(d/2),p=Math.cos(f/2),_=Math.cos(v/2),y=Math.sin(d/2),x=Math.sin(f/2),A=Math.sin(v/2);return g==="XYZ"?(this.x=y*p*_+m*x*A,this.y=m*x*_-y*p*A,this.z=m*p*A+y*x*_,this.w=m*p*_-y*x*A):g==="YXZ"?(this.x=y*p*_+m*x*A,this.y=m*x*_-y*p*A,this.z=m*p*A-y*x*_,this.w=m*p*_+y*x*A):g==="ZXY"?(this.x=y*p*_-m*x*A,this.y=m*x*_+y*p*A,this.z=m*p*A+y*x*_,this.w=m*p*_-y*x*A):g==="ZYX"?(this.x=y*p*_-m*x*A,this.y=m*x*_+y*p*A,this.z=m*p*A-y*x*_,this.w=m*p*_+y*x*A):g==="YZX"?(this.x=y*p*_+m*x*A,this.y=m*x*_+y*p*A,this.z=m*p*A-y*x*_,this.w=m*p*_-y*x*A):g==="XZY"&&(this.x=y*p*_-m*x*A,this.y=m*x*_-y*p*A,this.z=m*p*A+y*x*_,this.w=m*p*_+y*x*A),this},s.prototype.clone=function(){return new s(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(t,n,i){var r=t("./Vec3"),s=t("./Quaternion");n.exports=o;function o(h){h=h||{},this.position=new r,h.position&&this.position.copy(h.position),this.quaternion=new s,h.quaternion&&this.quaternion.copy(h.quaternion)}var l=new s;o.pointToLocalFrame=function(h,u,c,f){var f=f||new r;return c.vsub(h,f),u.conjugate(l),l.vmult(f,f),f},o.prototype.pointToLocal=function(h,u){return o.pointToLocalFrame(this.position,this.quaternion,h,u)},o.pointToWorldFrame=function(h,u,c,f){var f=f||new r;return u.vmult(c,f),f.vadd(h,f),f},o.prototype.pointToWorld=function(h,u){return o.pointToWorldFrame(this.position,this.quaternion,h,u)},o.prototype.vectorToWorldFrame=function(h,c){var c=c||new r;return this.quaternion.vmult(h,c),c},o.vectorToWorldFrame=function(h,u,c){return h.vmult(u,c),c},o.vectorToLocalFrame=function(h,u,c,f){var f=f||new r;return u.w*=-1,u.vmult(c,f),u.w*=-1,f}},{"./Quaternion":28,"./Vec3":30}],30:[function(t,n,i){n.exports=s;var r=t("./Mat3");function s(u,c,d){this.x=u||0,this.y=c||0,this.z=d||0}s.ZERO=new s(0,0,0),s.UNIT_X=new s(1,0,0),s.UNIT_Y=new s(0,1,0),s.UNIT_Z=new s(0,0,1),s.prototype.cross=function(u,c){var d=u.x,f=u.y,v=u.z,g=this.x,m=this.y,p=this.z;return c=c||new s,c.x=m*v-p*f,c.y=p*d-g*v,c.z=g*f-m*d,c},s.prototype.set=function(u,c,d){return this.x=u,this.y=c,this.z=d,this},s.prototype.setZero=function(){this.x=this.y=this.z=0},s.prototype.vadd=function(u,c){if(c)c.x=u.x+this.x,c.y=u.y+this.y,c.z=u.z+this.z;else return new s(this.x+u.x,this.y+u.y,this.z+u.z)},s.prototype.vsub=function(u,c){if(c)c.x=this.x-u.x,c.y=this.y-u.y,c.z=this.z-u.z;else return new s(this.x-u.x,this.y-u.y,this.z-u.z)},s.prototype.crossmat=function(){return new r([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},s.prototype.normalize=function(){var u=this.x,c=this.y,d=this.z,f=Math.sqrt(u*u+c*c+d*d);if(f>0){var v=1/f;this.x*=v,this.y*=v,this.z*=v}else this.x=0,this.y=0,this.z=0;return f},s.prototype.unit=function(u){u=u||new s;var c=this.x,d=this.y,f=this.z,v=Math.sqrt(c*c+d*d+f*f);return v>0?(v=1/v,u.x=c*v,u.y=d*v,u.z=f*v):(u.x=1,u.y=0,u.z=0),u},s.prototype.norm=function(){var u=this.x,c=this.y,d=this.z;return Math.sqrt(u*u+c*c+d*d)},s.prototype.length=s.prototype.norm,s.prototype.norm2=function(){return this.dot(this)},s.prototype.lengthSquared=s.prototype.norm2,s.prototype.distanceTo=function(u){var c=this.x,d=this.y,f=this.z,v=u.x,g=u.y,m=u.z;return Math.sqrt((v-c)*(v-c)+(g-d)*(g-d)+(m-f)*(m-f))},s.prototype.distanceSquared=function(u){var c=this.x,d=this.y,f=this.z,v=u.x,g=u.y,m=u.z;return(v-c)*(v-c)+(g-d)*(g-d)+(m-f)*(m-f)},s.prototype.mult=function(u,c){c=c||new s;var d=this.x,f=this.y,v=this.z;return c.x=u*d,c.y=u*f,c.z=u*v,c},s.prototype.scale=s.prototype.mult,s.prototype.dot=function(u){return this.x*u.x+this.y*u.y+this.z*u.z},s.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},s.prototype.negate=function(u){return u=u||new s,u.x=-this.x,u.y=-this.y,u.z=-this.z,u};var o=new s,l=new s;s.prototype.tangents=function(u,c){var d=this.norm();if(d>0){var f=o,v=1/d;f.set(this.x*v,this.y*v,this.z*v);var g=l;Math.abs(f.x)<.9?(g.set(1,0,0),f.cross(g,u)):(g.set(0,1,0),f.cross(g,u)),f.cross(u,c)}else u.set(1,0,0),c.set(0,1,0)},s.prototype.toString=function(){return this.x+","+this.y+","+this.z},s.prototype.toArray=function(){return[this.x,this.y,this.z]},s.prototype.copy=function(u){return this.x=u.x,this.y=u.y,this.z=u.z,this},s.prototype.lerp=function(u,c,d){var f=this.x,v=this.y,g=this.z;d.x=f+(u.x-f)*c,d.y=v+(u.y-v)*c,d.z=g+(u.z-g)*c},s.prototype.almostEquals=function(u,c){return c===void 0&&(c=1e-6),!(Math.abs(this.x-u.x)>c||Math.abs(this.y-u.y)>c||Math.abs(this.z-u.z)>c)},s.prototype.almostZero=function(u){return u===void 0&&(u=1e-6),!(Math.abs(this.x)>u||Math.abs(this.y)>u||Math.abs(this.z)>u)};var h=new s;s.prototype.isAntiparallelTo=function(u,c){return this.negate(h),h.almostEquals(u,c)},s.prototype.clone=function(){return new s(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(t,n,i){n.exports=c;var r=t("../utils/EventTarget");t("../shapes/Shape");var s=t("../math/Vec3"),o=t("../math/Mat3"),l=t("../math/Quaternion");t("../material/Material");var h=t("../collision/AABB"),u=t("../shapes/Box");function c(L){L=L||{},r.apply(this),this.id=c.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new s,this.collisionFilterGroup=typeof L.collisionFilterGroup=="number"?L.collisionFilterGroup:1,this.collisionFilterMask=typeof L.collisionFilterMask=="number"?L.collisionFilterMask:1,this.collisionResponse=!0,this.position=new s,L.position&&this.position.copy(L.position),this.previousPosition=new s,this.initPosition=new s,this.velocity=new s,L.velocity&&this.velocity.copy(L.velocity),this.initVelocity=new s,this.force=new s;var z=typeof L.mass=="number"?L.mass:0;this.mass=z,this.invMass=z>0?1/z:0,this.material=L.material||null,this.linearDamping=typeof L.linearDamping=="number"?L.linearDamping:.01,this.type=z<=0?c.STATIC:c.DYNAMIC,typeof L.type==typeof c.STATIC&&(this.type=L.type),this.allowSleep=typeof L.allowSleep<"u"?L.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof L.sleepSpeedLimit<"u"?L.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof L.sleepTimeLimit<"u"?L.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new s,this.quaternion=new l,L.quaternion&&this.quaternion.copy(L.quaternion),this.initQuaternion=new l,this.angularVelocity=new s,L.angularVelocity&&this.angularVelocity.copy(L.angularVelocity),this.initAngularVelocity=new s,this.interpolatedPosition=new s,this.interpolatedQuaternion=new l,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new s,this.invInertia=new s,this.invInertiaWorld=new o,this.invMassSolve=0,this.invInertiaSolve=new s,this.invInertiaWorldSolve=new o,this.fixedRotation=typeof L.fixedRotation<"u"?L.fixedRotation:!1,this.angularDamping=typeof L.angularDamping<"u"?L.angularDamping:.01,this.aabb=new h,this.aabbNeedsUpdate=!0,this.wlambda=new s,L.shape&&this.addShape(L.shape),this.updateMassProperties()}c.prototype=new r,c.prototype.constructor=c,c.DYNAMIC=1,c.STATIC=2,c.KINEMATIC=4,c.AWAKE=0,c.SLEEPY=1,c.SLEEPING=2,c.idCounter=0,c.prototype.wakeUp=function(){var L=this.sleepState;this.sleepState=0,L===c.SLEEPING&&this.dispatchEvent({type:"wakeup"})},c.prototype.sleep=function(){this.sleepState=c.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},c.sleepyEvent={type:"sleepy"},c.sleepEvent={type:"sleep"},c.prototype.sleepTick=function(L){if(this.allowSleep){var z=this.sleepState,q=this.velocity.norm2()+this.angularVelocity.norm2(),U=Math.pow(this.sleepSpeedLimit,2);z===c.AWAKE&&q<U?(this.sleepState=c.SLEEPY,this.timeLastSleepy=L,this.dispatchEvent(c.sleepyEvent)):z===c.SLEEPY&&q>U?this.wakeUp():z===c.SLEEPY&&L-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(c.sleepEvent))}},c.prototype.updateSolveMassProperties=function(){this.sleepState===c.SLEEPING||this.type===c.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},c.prototype.pointToLocalFrame=function(L,q){var q=q||new s;return L.vsub(this.position,q),this.quaternion.conjugate().vmult(q,q),q},c.prototype.vectorToLocalFrame=function(L,q){var q=q||new s;return this.quaternion.conjugate().vmult(L,q),q},c.prototype.pointToWorldFrame=function(L,q){var q=q||new s;return this.quaternion.vmult(L,q),q.vadd(this.position,q),q},c.prototype.vectorToWorldFrame=function(L,q){var q=q||new s;return this.quaternion.vmult(L,q),q};var d=new s,f=new l;c.prototype.addShape=function(L,z,q){var U=new s,V=new l;return z&&U.copy(z),q&&V.copy(q),this.shapes.push(L),this.shapeOffsets.push(U),this.shapeOrientations.push(V),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},c.prototype.updateBoundingRadius=function(){for(var L=this.shapes,z=this.shapeOffsets,q=L.length,U=0,V=0;V!==q;V++){var Q=L[V];Q.updateBoundingSphereRadius();var F=z[V].norm(),D=Q.boundingSphereRadius;F+D>U&&(U=F+D)}this.boundingRadius=U};var v=new h;c.prototype.computeAABB=function(){for(var L=this.shapes,z=this.shapeOffsets,q=this.shapeOrientations,U=L.length,V=d,Q=f,F=this.quaternion,D=this.aabb,j=v,W=0;W!==U;W++){var N=L[W];q[W].mult(F,Q),Q.vmult(z[W],V),V.vadd(this.position,V),N.calculateWorldAABB(V,Q,j.lowerBound,j.upperBound),W===0?D.copy(j):D.extend(j)}this.aabbNeedsUpdate=!1};var g=new o,m=new o;new o,c.prototype.updateInertiaWorld=function(L){var z=this.invInertia;if(!(z.x===z.y&&z.y===z.z&&!L)){var q=g,U=m;q.setRotationFromQuaternion(this.quaternion),q.transpose(U),q.scale(z,q),q.mmult(U,this.invInertiaWorld)}};var p=new s,_=new s;c.prototype.applyForce=function(L,z){if(this.type===c.DYNAMIC){var q=p;z.vsub(this.position,q);var U=_;q.cross(L,U),this.force.vadd(L,this.force),this.torque.vadd(U,this.torque)}};var y=new s,x=new s;c.prototype.applyLocalForce=function(L,z){if(this.type===c.DYNAMIC){var q=y,U=x;this.vectorToWorldFrame(L,q),this.pointToWorldFrame(z,U),this.applyForce(q,U)}};var A=new s,b=new s,I=new s;c.prototype.applyImpulse=function(L,z){if(this.type===c.DYNAMIC){var q=A;z.vsub(this.position,q);var U=b;U.copy(L),U.mult(this.invMass,U),this.velocity.vadd(U,this.velocity);var V=I;q.cross(L,V),this.invInertiaWorld.vmult(V,V),this.angularVelocity.vadd(V,this.angularVelocity)}};var B=new s,M=new s;c.prototype.applyLocalImpulse=function(L,z){if(this.type===c.DYNAMIC){var q=B,U=M;this.vectorToWorldFrame(L,q),this.pointToWorldFrame(z,U),this.applyImpulse(q,U)}};var E=new s;c.prototype.updateMassProperties=function(){var L=E;this.invMass=this.mass>0?1/this.mass:0;var z=this.inertia,q=this.fixedRotation;this.computeAABB(),L.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),u.calculateInertia(L,this.mass,z),this.invInertia.set(z.x>0&&!q?1/z.x:0,z.y>0&&!q?1/z.y:0,z.z>0&&!q?1/z.z:0),this.updateInertiaWorld(!0)},c.prototype.getVelocityAtWorldPoint=function(L,z){var q=new s;return L.vsub(this.position,q),this.angularVelocity.cross(q,z),this.velocity.vadd(z,z),z}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(t,n,i){t("./Body");var r=t("../math/Vec3"),s=t("../math/Quaternion");t("../collision/RaycastResult");var o=t("../collision/Ray"),l=t("../objects/WheelInfo");n.exports=h;function h(F){this.chassisBody=F.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof F.indexRightAxis<"u"?F.indexRightAxis:1,this.indexForwardAxis=typeof F.indexForwardAxis<"u"?F.indexForwardAxis:0,this.indexUpAxis=typeof F.indexUpAxis<"u"?F.indexUpAxis:2}new r,new r,new r;var u=new r,c=new r,d=new r;new o,h.prototype.addWheel=function(F){F=F||{};var D=new l(F),j=this.wheelInfos.length;return this.wheelInfos.push(D),j},h.prototype.setSteeringValue=function(F,D){var j=this.wheelInfos[D];j.steering=F},new r,h.prototype.applyEngineForce=function(F,D){this.wheelInfos[D].engineForce=F},h.prototype.setBrake=function(F,D){this.wheelInfos[D].brake=F},h.prototype.addToWorld=function(F){this.constraints,F.add(this.chassisBody);var D=this;this.preStepCallback=function(){D.updateVehicle(F.dt)},F.addEventListener("preStep",this.preStepCallback),this.world=F},h.prototype.getVehicleAxisWorld=function(F,D){D.set(F===0?1:0,F===1?1:0,F===2?1:0),this.chassisBody.vectorToWorldFrame(D,D)},h.prototype.updateVehicle=function(F){for(var D=this.wheelInfos,j=D.length,W=this.chassisBody,N=0;N<j;N++)this.updateWheelTransform(N);this.currentVehicleSpeedKmHour=3.6*W.velocity.norm();var G=new r;this.getVehicleAxisWorld(this.indexForwardAxis,G),G.dot(W.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var N=0;N<j;N++)this.castRay(D[N]);this.updateSuspension(F);for(var w=new r,R=new r,N=0;N<j;N++){var C=D[N],X=C.suspensionForce;X>C.maxSuspensionForce&&(X=C.maxSuspensionForce),C.raycastResult.hitNormalWorld.scale(X*F,w),C.raycastResult.hitPointWorld.vsub(W.position,R),W.applyImpulse(w,C.raycastResult.hitPointWorld)}this.updateFriction(F);var ne=new r,ie=new r,K=new r;for(N=0;N<j;N++){var C=D[N];W.getVelocityAtWorldPoint(C.chassisConnectionPointWorld,K);var te=1;switch(this.indexUpAxis){case 1:te=-1;break}if(C.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,ie);var ce=ie.dot(C.raycastResult.hitNormalWorld);C.raycastResult.hitNormalWorld.scale(ce,ne),ie.vsub(ne,ie);var Y=ie.dot(K);C.deltaRotation=te*Y*F/C.radius}(C.sliding||!C.isInContact)&&C.engineForce!==0&&C.useCustomSlidingRotationalSpeed&&(C.deltaRotation=(C.engineForce>0?1:-1)*C.customSlidingRotationalSpeed*F),Math.abs(C.brake)>Math.abs(C.engineForce)&&(C.deltaRotation=0),C.rotation+=C.deltaRotation,C.deltaRotation*=.99}},h.prototype.updateSuspension=function(F){for(var D=this.chassisBody,j=D.mass,W=this.wheelInfos,N=W.length,G=0;G<N;G++){var w=W[G];if(w.isInContact){var R,C=w.suspensionRestLength,X=w.suspensionLength,ne=C-X;R=w.suspensionStiffness*ne*w.clippedInvContactDotSuspension;var ie=w.suspensionRelativeVelocity,K;ie<0?K=w.dampingCompression:K=w.dampingRelaxation,R-=K*ie,w.suspensionForce=R*j,w.suspensionForce<0&&(w.suspensionForce=0)}else w.suspensionForce=0}},h.prototype.removeFromWorld=function(F){this.constraints,F.remove(this.chassisBody),F.removeEventListener("preStep",this.preStepCallback),this.world=null};var f=new r,v=new r;h.prototype.castRay=function(F){var D=f,j=v;this.updateWheelTransformWorld(F);var W=this.chassisBody,N=-1,G=F.suspensionRestLength+F.radius;F.directionWorld.scale(G,D);var w=F.chassisConnectionPointWorld;w.vadd(D,j);var R=F.raycastResult;R.reset();var C=W.collisionResponse;W.collisionResponse=!1,this.world.rayTest(w,j,R),W.collisionResponse=C;var X=R.body;if(F.raycastResult.groundObject=0,X){N=R.distance,F.raycastResult.hitNormalWorld=R.hitNormalWorld,F.isInContact=!0;var ne=R.distance;F.suspensionLength=ne-F.radius;var ie=F.suspensionRestLength-F.maxSuspensionTravel,K=F.suspensionRestLength+F.maxSuspensionTravel;F.suspensionLength<ie&&(F.suspensionLength=ie),F.suspensionLength>K&&(F.suspensionLength=K,F.raycastResult.reset());var te=F.raycastResult.hitNormalWorld.dot(F.directionWorld),ce=new r;W.getVelocityAtWorldPoint(F.raycastResult.hitPointWorld,ce);var Y=F.raycastResult.hitNormalWorld.dot(ce);if(te>=-.1)F.suspensionRelativeVelocity=0,F.clippedInvContactDotSuspension=1/.1;else{var Ce=-1/te;F.suspensionRelativeVelocity=Y*Ce,F.clippedInvContactDotSuspension=Ce}}else F.suspensionLength=F.suspensionRestLength+0*F.maxSuspensionTravel,F.suspensionRelativeVelocity=0,F.directionWorld.scale(-1,F.raycastResult.hitNormalWorld),F.clippedInvContactDotSuspension=1;return N},h.prototype.updateWheelTransformWorld=function(F){F.isInContact=!1;var D=this.chassisBody;D.pointToWorldFrame(F.chassisConnectionPointLocal,F.chassisConnectionPointWorld),D.vectorToWorldFrame(F.directionLocal,F.directionWorld),D.vectorToWorldFrame(F.axleLocal,F.axleWorld)},h.prototype.updateWheelTransform=function(F){var D=u,j=c,W=d,N=this.wheelInfos[F];this.updateWheelTransformWorld(N),N.directionLocal.scale(-1,D),j.copy(N.axleLocal),D.cross(j,W),W.normalize(),j.normalize();var G=N.steering,w=new s;w.setFromAxisAngle(D,G);var R=new s;R.setFromAxisAngle(j,N.rotation);var C=N.worldTransform.quaternion;this.chassisBody.quaternion.mult(w,C),C.mult(R,C),C.normalize();var X=N.worldTransform.position;X.copy(N.directionWorld),X.scale(N.suspensionLength,X),X.vadd(N.chassisConnectionPointWorld,X)};var g=[new r(1,0,0),new r(0,1,0),new r(0,0,1)];h.prototype.getWheelTransformWorld=function(F){return this.wheelInfos[F].worldTransform};var m=new r,p=[],_=[],y=1;h.prototype.updateFriction=function(F){for(var D=m,j=this.wheelInfos,W=j.length,N=this.chassisBody,G=_,w=p,R=0;R<W;R++){var C=j[R],X=C.raycastResult.body;C.sideImpulse=0,C.forwardImpulse=0,G[R]||(G[R]=new r),w[R]||(w[R]=new r)}for(var R=0;R<W;R++){var C=j[R],X=C.raycastResult.body;if(X){var ne=w[R],ie=this.getWheelTransformWorld(R);ie.vectorToWorldFrame(g[this.indexRightAxis],ne);var K=C.raycastResult.hitNormalWorld,te=ne.dot(K);K.scale(te,D),ne.vsub(D,ne),ne.normalize(),K.cross(ne,G[R]),G[R].normalize(),C.sideImpulse=Q(N,C.raycastResult.hitPointWorld,X,C.raycastResult.hitPointWorld,ne),C.sideImpulse*=y}}var ce=1,Y=.5;this.sliding=!1;for(var R=0;R<W;R++){var C=j[R],X=C.raycastResult.body,Ce=0;if(C.slipInfo=1,X){var ue=0,se=C.brake?C.brake:ue;Ce=I(N,X,C.raycastResult.hitPointWorld,G[R],se),Ce+=C.engineForce*F;var ae=se/Ce;C.slipInfo*=ae}if(C.forwardImpulse=0,C.skidInfo=1,X){C.skidInfo=1;var We=C.suspensionForce*F*C.frictionSlip,Ae=We,P=We*Ae;C.forwardImpulse=Ce;var S=C.forwardImpulse*Y,ee=C.sideImpulse*ce,de=S*S+ee*ee;if(C.sliding=!1,de>P){this.sliding=!0,C.sliding=!0;var ae=We/Math.sqrt(de);C.skidInfo*=ae}}}if(this.sliding)for(var R=0;R<W;R++){var C=j[R];C.sideImpulse!==0&&C.skidInfo<1&&(C.forwardImpulse*=C.skidInfo,C.sideImpulse*=C.skidInfo)}for(var R=0;R<W;R++){var C=j[R],he=new r;if(he.copy(C.raycastResult.hitPointWorld),C.forwardImpulse!==0){var pe=new r;G[R].scale(C.forwardImpulse,pe),N.applyImpulse(pe,he)}if(C.sideImpulse!==0){var X=C.raycastResult.body,Ee=new r;Ee.copy(C.raycastResult.hitPointWorld);var _e=new r;w[R].scale(C.sideImpulse,_e),N.pointToLocalFrame(he,he),he["xyz"[this.indexUpAxis]]*=C.rollInfluence,N.pointToWorldFrame(he,he),N.applyImpulse(_e,he),_e.scale(-1,_e),X.applyImpulse(_e,Ee)}}};var x=new r,A=new r,b=new r;function I(F,D,j,W,N){var G=0,w=j,R=x,C=A,X=b;F.getVelocityAtWorldPoint(w,R),D.getVelocityAtWorldPoint(w,C),R.vsub(C,X);var ne=W.dot(X),ie=z(F,j,W),K=z(D,j,W),te=1,ce=te/(ie+K);return G=-ne*ce,N<G&&(G=N),G<-N&&(G=-N),G}var B=new r,M=new r,E=new r,L=new r;function z(F,D,j){var W=B,N=M,G=E,w=L;return D.vsub(F.position,W),W.cross(j,N),F.invInertiaWorld.vmult(N,w),w.cross(W,G),F.invMass+j.dot(G)}var q=new r,U=new r,V=new r;function Q(F,D,j,W,N,te){var w=N.norm2();if(w>1.1)return 0;var R=q,C=U,X=V;F.getVelocityAtWorldPoint(D,R),j.getVelocityAtWorldPoint(W,C),R.vsub(C,X);var ne=N.dot(X),ie=.2,K=1/(F.invMass+j.invMass),te=-ie*ne*K;return te}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(t,n,i){var r=t("./Body"),s=t("../shapes/Sphere"),o=t("../shapes/Box"),l=t("../math/Vec3"),h=t("../constraints/HingeConstraint");n.exports=u;function u(f){if(this.wheelBodies=[],this.coordinateSystem=typeof f.coordinateSystem>"u"?new l(1,2,3):f.coordinateSystem.clone(),this.chassisBody=f.chassisBody,!this.chassisBody){var v=new o(new l(5,2,.5));this.chassisBody=new r(1,v)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}u.prototype.addWheel=function(f){f=f||{};var v=f.body;v||(v=new r(1,new s(1.2))),this.wheelBodies.push(v),this.wheelForces.push(0),new l;var g=typeof f.position<"u"?f.position.clone():new l,m=new l;this.chassisBody.pointToWorldFrame(g,m),v.position.set(m.x,m.y,m.z);var p=typeof f.axis<"u"?f.axis.clone():new l(0,1,0);this.wheelAxes.push(p);var _=new h(this.chassisBody,v,{pivotA:g,axisA:p,pivotB:l.ZERO,axisB:p,collideConnected:!1});return this.constraints.push(_),this.wheelBodies.length-1},u.prototype.setSteeringValue=function(f,v){var g=this.wheelAxes[v],m=Math.cos(f),p=Math.sin(f),_=g.x,y=g.y;this.constraints[v].axisA.set(m*_-p*y,p*_+m*y,0)},u.prototype.setMotorSpeed=function(f,v){var g=this.constraints[v];g.enableMotor(),g.motorTargetVelocity=f},u.prototype.disableMotor=function(f){var v=this.constraints[f];v.disableMotor()};var c=new l;u.prototype.setWheelForce=function(f,v){this.wheelForces[v]=f},u.prototype.applyWheelForce=function(f,v){var g=this.wheelAxes[v],m=this.wheelBodies[v],p=m.torque;g.scale(f,c),m.vectorToWorldFrame(c,c),p.vadd(c,p)},u.prototype.addToWorld=function(f){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)f.add(g[m]);for(var m=0;m<v.length;m++)f.addConstraint(v[m]);f.addEventListener("preStep",this._update.bind(this))},u.prototype._update=function(){for(var f=this.wheelForces,v=0;v<f.length;v++)this.applyWheelForce(f[v],v)},u.prototype.removeFromWorld=function(f){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)f.remove(g[m]);for(var m=0;m<v.length;m++)f.removeConstraint(v[m])};var d=new l;u.prototype.getWheelSpeed=function(f){var v=this.wheelAxes[f],g=this.wheelBodies[f],m=g.angularVelocity;return this.chassisBody.vectorToWorldFrame(v,d),m.dot(d)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(t,n,i){n.exports=s,t("../shapes/Shape");var r=t("../math/Vec3");t("../math/Quaternion"),t("../shapes/Particle"),t("../objects/Body"),t("../material/Material");function s(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}s.prototype.add=function(v){this.particles.push(v),this.neighbors.length<this.particles.length&&this.neighbors.push([])},s.prototype.remove=function(v){var g=this.particles.indexOf(v);g!==-1&&(this.particles.splice(g,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var o=new r;s.prototype.getNeighbors=function(v,g){for(var m=this.particles.length,p=v.id,_=this.smoothingRadius*this.smoothingRadius,y=o,x=0;x!==m;x++){var A=this.particles[x];A.position.vsub(v.position,y),p!==A.id&&y.norm2()<_&&g.push(A)}};var l=new r,h=new r,u=new r,c=new r,d=new r,f=new r;s.prototype.update=function(){for(var v=this.particles.length,g=l,m=this.speedOfSound,p=this.eps,_=0;_!==v;_++){var y=this.particles[_],x=this.neighbors[_];x.length=0,this.getNeighbors(y,x),x.push(this.particles[_]);for(var A=x.length,b=0,I=0;I!==A;I++){y.position.vsub(x[I].position,g);var B=g.norm(),M=this.w(B);b+=x[I].mass*M}this.densities[_]=b,this.pressures[_]=m*m*(this.densities[_]-this.density)}for(var E=h,L=u,z=c,q=d,U=f,_=0;_!==v;_++){var V=this.particles[_];E.set(0,0,0),L.set(0,0,0);for(var Q,F,x=this.neighbors[_],A=x.length,I=0;I!==A;I++){var D=x[I];V.position.vsub(D.position,q);var j=q.norm();Q=-D.mass*(this.pressures[_]/(this.densities[_]*this.densities[_]+p)+this.pressures[I]/(this.densities[I]*this.densities[I]+p)),this.gradw(q,z),z.mult(Q,z),E.vadd(z,E),D.velocity.vsub(V.velocity,U),U.mult(1/(1e-4+this.densities[_]*this.densities[I])*this.viscosity*D.mass,U),F=this.nablaw(j),U.mult(F,U),L.vadd(U,L)}L.mult(V.mass,L),E.mult(V.mass,E),V.force.vadd(L,V.force),V.force.vadd(E,V.force)}},s.prototype.w=function(v){var g=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(g,9))*Math.pow(g*g-v*v,3)},s.prototype.gradw=function(v,g){var m=v.norm(),p=this.smoothingRadius;v.mult(945/(32*Math.PI*Math.pow(p,9))*Math.pow(p*p-m*m,2),g)},s.prototype.nablaw=function(v){var g=this.smoothingRadius,m=945/(32*Math.PI*Math.pow(g,9))*(g*g-v*v)*(7*v*v-3*g*g);return m}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(t,n,i){var r=t("../math/Vec3");n.exports=s;function s(_,y,x){x=x||{},this.restLength=typeof x.restLength=="number"?x.restLength:1,this.stiffness=x.stiffness||100,this.damping=x.damping||1,this.bodyA=_,this.bodyB=y,this.localAnchorA=new r,this.localAnchorB=new r,x.localAnchorA&&this.localAnchorA.copy(x.localAnchorA),x.localAnchorB&&this.localAnchorB.copy(x.localAnchorB),x.worldAnchorA&&this.setWorldAnchorA(x.worldAnchorA),x.worldAnchorB&&this.setWorldAnchorB(x.worldAnchorB)}s.prototype.setWorldAnchorA=function(_){this.bodyA.pointToLocalFrame(_,this.localAnchorA)},s.prototype.setWorldAnchorB=function(_){this.bodyB.pointToLocalFrame(_,this.localAnchorB)},s.prototype.getWorldAnchorA=function(_){this.bodyA.pointToWorldFrame(this.localAnchorA,_)},s.prototype.getWorldAnchorB=function(_){this.bodyB.pointToWorldFrame(this.localAnchorB,_)};var o=new r,l=new r,h=new r,u=new r,c=new r,d=new r,f=new r,v=new r,g=new r,m=new r,p=new r;s.prototype.applyForce=function(){var _=this.stiffness,y=this.damping,x=this.restLength,A=this.bodyA,b=this.bodyB,I=o,B=l,M=h,E=u,L=p,z=c,q=d,U=f,V=v,Q=g,F=m;this.getWorldAnchorA(z),this.getWorldAnchorB(q),z.vsub(A.position,U),q.vsub(b.position,V),q.vsub(z,I);var D=I.norm();B.copy(I),B.normalize(),b.velocity.vsub(A.velocity,M),b.angularVelocity.cross(V,L),M.vadd(L,M),A.angularVelocity.cross(U,L),M.vsub(L,M),B.mult(-_*(D-x)-y*M.dot(B),E),A.force.vsub(E,A.force),b.force.vadd(E,b.force),U.cross(E,Q),V.cross(E,F),A.torque.vsub(Q,A.torque),b.torque.vadd(F,b.torque)}},{"../math/Vec3":30}],36:[function(t,n,i){var r=t("../math/Vec3"),s=t("../math/Transform"),o=t("../collision/RaycastResult"),l=t("../utils/Utils");n.exports=h;function h(d){d=l.defaults(d,{chassisConnectionPointLocal:new r,chassisConnectionPointWorld:new r,directionLocal:new r,directionWorld:new r,axleLocal:new r,axleWorld:new r,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=d.maxSuspensionTravel,this.customSlidingRotationalSpeed=d.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=d.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=d.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=d.chassisConnectionPointWorld.clone(),this.directionLocal=d.directionLocal.clone(),this.directionWorld=d.directionWorld.clone(),this.axleLocal=d.axleLocal.clone(),this.axleWorld=d.axleWorld.clone(),this.suspensionRestLength=d.suspensionRestLength,this.suspensionMaxLength=d.suspensionMaxLength,this.radius=d.radius,this.suspensionStiffness=d.suspensionStiffness,this.dampingCompression=d.dampingCompression,this.dampingRelaxation=d.dampingRelaxation,this.frictionSlip=d.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=d.rollInfluence,this.maxSuspensionForce=d.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=d.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new o,this.worldTransform=new s,this.isInContact=!1}var c=new r,u=new r,c=new r;h.prototype.updateWheel=function(d){var f=this.raycastResult;if(this.isInContact){var v=f.hitNormalWorld.dot(f.directionWorld);f.hitPointWorld.vsub(d.position,u),d.getVelocityAtWorldPoint(u,c);var g=f.hitNormalWorld.dot(c);if(v>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var m=-1/v;this.suspensionRelativeVelocity=g*m,this.clippedInvContactDotSuspension=m}}else f.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,f.directionWorld.scale(-1,f.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(t,n,i){n.exports=l;var r=t("./Shape"),s=t("../math/Vec3"),o=t("./ConvexPolyhedron");function l(c){r.call(this),this.type=r.types.BOX,this.halfExtents=c,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}l.prototype=new r,l.prototype.constructor=l,l.prototype.updateConvexPolyhedronRepresentation=function(){var c=this.halfExtents.x,d=this.halfExtents.y,f=this.halfExtents.z,v=s,g=[new v(-c,-d,-f),new v(c,-d,-f),new v(c,d,-f),new v(-c,d,-f),new v(-c,-d,f),new v(c,-d,f),new v(c,d,f),new v(-c,d,f)],m=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new v(0,0,1),new v(0,1,0),new v(1,0,0);var p=new o(g,m);this.convexPolyhedronRepresentation=p,p.material=this.material},l.prototype.calculateLocalInertia=function(c,d){return d=d||new s,l.calculateInertia(this.halfExtents,c,d),d},l.calculateInertia=function(c,d,f){var v=c;f.x=1/12*d*(2*v.y*2*v.y+2*v.z*2*v.z),f.y=1/12*d*(2*v.x*2*v.x+2*v.z*2*v.z),f.z=1/12*d*(2*v.y*2*v.y+2*v.x*2*v.x)},l.prototype.getSideNormals=function(c,d){var f=c,v=this.halfExtents;if(f[0].set(v.x,0,0),f[1].set(0,v.y,0),f[2].set(0,0,v.z),f[3].set(-v.x,0,0),f[4].set(0,-v.y,0),f[5].set(0,0,-v.z),d!==void 0)for(var g=0;g!==f.length;g++)d.vmult(f[g],f[g]);return f},l.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},l.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var h=new s;new s,l.prototype.forEachWorldCorner=function(c,d,f){for(var v=this.halfExtents,g=[[v.x,v.y,v.z],[-v.x,v.y,v.z],[-v.x,-v.y,v.z],[-v.x,-v.y,-v.z],[v.x,-v.y,-v.z],[v.x,v.y,-v.z],[-v.x,v.y,-v.z],[v.x,-v.y,v.z]],m=0;m<g.length;m++)h.set(g[m][0],g[m][1],g[m][2]),d.vmult(h,h),c.vadd(h,h),f(h.x,h.y,h.z)};var u=[new s,new s,new s,new s,new s,new s,new s,new s];l.prototype.calculateWorldAABB=function(c,d,f,v){var g=this.halfExtents;u[0].set(g.x,g.y,g.z),u[1].set(-g.x,g.y,g.z),u[2].set(-g.x,-g.y,g.z),u[3].set(-g.x,-g.y,-g.z),u[4].set(g.x,-g.y,-g.z),u[5].set(g.x,g.y,-g.z),u[6].set(-g.x,g.y,-g.z),u[7].set(g.x,-g.y,g.z);var m=u[0];d.vmult(m,m),c.vadd(m,m),v.copy(m),f.copy(m);for(var p=1;p<8;p++){var m=u[p];d.vmult(m,m),c.vadd(m,m);var _=m.x,y=m.y,x=m.z;_>v.x&&(v.x=_),y>v.y&&(v.y=y),x>v.z&&(v.z=x),_<f.x&&(f.x=_),y<f.y&&(f.y=y),x<f.z&&(f.z=x)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(t,n,i){n.exports=l;var r=t("./Shape"),s=t("../math/Vec3");t("../math/Quaternion");var o=t("../math/Transform");function l(N,G,w){r.call(this),this.type=r.types.CONVEXPOLYHEDRON,this.vertices=N||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=G||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=w?w.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}l.prototype=new r,l.prototype.constructor=l;var h=new s;l.prototype.computeEdges=function(){var N=this.faces,G=this.vertices;G.length;var w=this.uniqueEdges;w.length=0;for(var R=h,C=0;C!==N.length;C++)for(var X=N[C],ne=X.length,ie=0;ie!==ne;ie++){var K=(ie+1)%ne;G[X[ie]].vsub(G[X[K]],R),R.normalize();for(var te=!1,ce=0;ce!==w.length;ce++)if(w[ce].almostEquals(R)||w[ce].almostEquals(R)){te=!0;break}te||w.push(R.clone())}},l.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var N=0;N<this.faces.length;N++){for(var G=0;G<this.faces[N].length;G++)if(!this.vertices[this.faces[N][G]])throw new Error("Vertex "+this.faces[N][G]+" not found!");var w=this.faceNormals[N]||new s;this.getFaceNormal(N,w),w.negate(w),this.faceNormals[N]=w;var R=this.vertices[this.faces[N][0]];if(w.dot(R)<0){console.error(".faceNormals["+N+"] = Vec3("+w.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var G=0;G<this.faces[N].length;G++)console.warn(".vertices["+this.faces[N][G]+"] = Vec3("+this.vertices[this.faces[N][G]].toString()+")")}}};var u=new s,c=new s;l.computeNormal=function(N,G,w,R){G.vsub(N,c),w.vsub(G,u),u.cross(c,R),R.isZero()||R.normalize()},l.prototype.getFaceNormal=function(N,G){var w=this.faces[N],R=this.vertices[w[0]],C=this.vertices[w[1]],X=this.vertices[w[2]];return l.computeNormal(R,C,X,G)};var d=new s;l.prototype.clipAgainstHull=function(N,G,w,R,C,X,ne,ie,K){for(var te=d,ce=-1,Y=-Number.MAX_VALUE,Ce=0;Ce<w.faces.length;Ce++){te.copy(w.faceNormals[Ce]),C.vmult(te,te);var ue=te.dot(X);ue>Y&&(Y=ue,ce=Ce)}for(var se=[],ae=w.faces[ce],We=ae.length,Ae=0;Ae<We;Ae++){var P=w.vertices[ae[Ae]],S=new s;S.copy(P),C.vmult(S,S),R.vadd(S,S),se.push(S)}ce>=0&&this.clipFaceAgainstHull(X,N,G,se,ne,ie,K)};var f=new s,v=new s,g=new s,m=new s,p=new s,_=new s;l.prototype.findSeparatingAxis=function(N,G,w,R,C,X,ne,ie){var K=f,te=v,ce=g,Y=m,Ce=p,ue=_,se=Number.MAX_VALUE,ae=this;if(ae.uniqueAxes)for(var Ae=0;Ae!==ae.uniqueAxes.length;Ae++){w.vmult(ae.uniqueAxes[Ae],K);var S=ae.testSepAxis(K,N,G,w,R,C);if(S===!1)return!1;S<se&&(se=S,X.copy(K))}else for(var We=ne?ne.length:ae.faces.length,Ae=0;Ae<We;Ae++){var P=ne?ne[Ae]:Ae;K.copy(ae.faceNormals[P]),w.vmult(K,K);var S=ae.testSepAxis(K,N,G,w,R,C);if(S===!1)return!1;S<se&&(se=S,X.copy(K))}if(N.uniqueAxes)for(var Ae=0;Ae!==N.uniqueAxes.length;Ae++){C.vmult(N.uniqueAxes[Ae],te);var S=ae.testSepAxis(te,N,G,w,R,C);if(S===!1)return!1;S<se&&(se=S,X.copy(te))}else for(var ee=ie?ie.length:N.faces.length,Ae=0;Ae<ee;Ae++){var P=ie?ie[Ae]:Ae;te.copy(N.faceNormals[P]),C.vmult(te,te);var S=ae.testSepAxis(te,N,G,w,R,C);if(S===!1)return!1;S<se&&(se=S,X.copy(te))}for(var de=0;de!==ae.uniqueEdges.length;de++){w.vmult(ae.uniqueEdges[de],Y);for(var he=0;he!==N.uniqueEdges.length;he++)if(C.vmult(N.uniqueEdges[he],Ce),Y.cross(Ce,ue),!ue.almostZero()){ue.normalize();var pe=ae.testSepAxis(ue,N,G,w,R,C);if(pe===!1)return!1;pe<se&&(se=pe,X.copy(ue))}}return R.vsub(G,ce),ce.dot(X)>0&&X.negate(X),!0};var y=[],x=[];l.prototype.testSepAxis=function(N,G,w,R,C,X){var ne=this;l.project(ne,N,w,R,y),l.project(G,N,C,X,x);var ie=y[0],K=y[1],te=x[0],ce=x[1],Y=ie-ce,Ce=te-K,ue=Y<Ce?Y:Ce;return ue};var A=new s,b=new s;l.prototype.calculateLocalInertia=function(N,G){this.computeLocalAABB(A,b);var w=b.x-A.x,R=b.y-A.y,C=b.z-A.z;G.x=1/12*N*(2*R*2*R+2*C*2*C),G.y=1/12*N*(2*w*2*w+2*C*2*C),G.z=1/12*N*(2*R*2*R+2*w*2*w)},l.prototype.getPlaneConstantOfFace=function(N){var G=this.faces[N],w=this.faceNormals[N],R=this.vertices[G[0]],C=-w.dot(R);return C};var I=new s,B=new s,M=new s,E=new s,L=new s,z=new s,q=new s,U=new s;l.prototype.clipFaceAgainstHull=function(N,G,w,R,C,X,ne){for(var ie=I,K=B,te=M,ce=E,Y=L,Ce=z,ue=q,se=U,ae=this,We=[],Ae=R,P=We,S=-1,ee=Number.MAX_VALUE,de=0;de<ae.faces.length;de++){ie.copy(ae.faceNormals[de]),w.vmult(ie,ie);var he=ie.dot(N);he<ee&&(ee=he,S=de)}if(!(S<0)){var pe=ae.faces[S];pe.connectedFaces=[];for(var Ee=0;Ee<ae.faces.length;Ee++)for(var _e=0;_e<ae.faces[Ee].length;_e++)pe.indexOf(ae.faces[Ee][_e])!==-1&&Ee!==S&&pe.connectedFaces.indexOf(Ee)===-1&&pe.connectedFaces.push(Ee);Ae.length;for(var xe=pe.length,Ve=0;Ve<xe;Ve++){var je=ae.vertices[pe[Ve]],ge=ae.vertices[pe[(Ve+1)%xe]];je.vsub(ge,K),te.copy(K),w.vmult(te,te),G.vadd(te,te),ce.copy(this.faceNormals[S]),w.vmult(ce,ce),G.vadd(ce,ce),te.cross(ce,Y),Y.negate(Y),Ce.copy(je),w.vmult(Ce,Ce),G.vadd(Ce,Ce),-Ce.dot(Y);var qe;{var at=pe.connectedFaces[Ve];ue.copy(this.faceNormals[at]);var et=this.getPlaneConstantOfFace(at);se.copy(ue),w.vmult(se,se);var qe=et-se.dot(G)}for(this.clipFaceAgainstPlane(Ae,P,se,qe);Ae.length;)Ae.shift();for(;P.length;)Ae.push(P.shift())}ue.copy(this.faceNormals[S]);var et=this.getPlaneConstantOfFace(S);se.copy(ue),w.vmult(se,se);for(var qe=et-se.dot(G),Ee=0;Ee<Ae.length;Ee++){var He=se.dot(Ae[Ee])+qe;if(He<=C&&(console.log("clamped: depth="+He+" to minDist="+(C+"")),He=C),He<=X){var Oe=Ae[Ee];if(He<=0){var Qe={point:Oe,normal:se,depth:He};ne.push(Qe)}}}}},l.prototype.clipFaceAgainstPlane=function(N,G,w,R){var C,X,ne=N.length;if(ne<2)return G;var ie=N[N.length-1],K=N[0];C=w.dot(ie)+R;for(var te=0;te<ne;te++){if(K=N[te],X=w.dot(K)+R,C<0)if(X<0){var ce=new s;ce.copy(K),G.push(ce)}else{var ce=new s;ie.lerp(K,C/(C-X),ce),G.push(ce)}else if(X<0){var ce=new s;ie.lerp(K,C/(C-X),ce),G.push(ce),G.push(K)}ie=K,C=X}return G},l.prototype.computeWorldVertices=function(N,G){for(var w=this.vertices.length;this.worldVertices.length<w;)this.worldVertices.push(new s);for(var R=this.vertices,C=this.worldVertices,X=0;X!==w;X++)G.vmult(R[X],C[X]),N.vadd(C[X],C[X]);this.worldVerticesNeedsUpdate=!1},new s,l.prototype.computeLocalAABB=function(N,G){var w=this.vertices.length,R=this.vertices;N.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),G.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var C=0;C<w;C++){var X=R[C];X.x<N.x?N.x=X.x:X.x>G.x&&(G.x=X.x),X.y<N.y?N.y=X.y:X.y>G.y&&(G.y=X.y),X.z<N.z?N.z=X.z:X.z>G.z&&(G.z=X.z)}},l.prototype.computeWorldFaceNormals=function(N){for(var G=this.faceNormals.length;this.worldFaceNormals.length<G;)this.worldFaceNormals.push(new s);for(var w=this.faceNormals,R=this.worldFaceNormals,C=0;C!==G;C++)N.vmult(w[C],R[C]);this.worldFaceNormalsNeedsUpdate=!1},l.prototype.updateBoundingSphereRadius=function(){for(var N=0,G=this.vertices,w=0,R=G.length;w!==R;w++){var C=G[w].norm2();C>N&&(N=C)}this.boundingSphereRadius=Math.sqrt(N)};var V=new s;l.prototype.calculateWorldAABB=function(N,G,w,R){for(var C=this.vertices.length,X=this.vertices,ne,ie,K,te,ce,Y,Ce=0;Ce<C;Ce++){V.copy(X[Ce]),G.vmult(V,V),N.vadd(V,V);var ue=V;ue.x<ne||ne===void 0?ne=ue.x:(ue.x>te||te===void 0)&&(te=ue.x),ue.y<ie||ie===void 0?ie=ue.y:(ue.y>ce||ce===void 0)&&(ce=ue.y),ue.z<K||K===void 0?K=ue.z:(ue.z>Y||Y===void 0)&&(Y=ue.z)}w.set(ne,ie,K),R.set(te,ce,Y)},l.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},l.prototype.getAveragePointLocal=function(N){N=N||new s;for(var G=this.vertices.length,w=this.vertices,R=0;R<G;R++)N.vadd(w[R],N);return N.mult(1/G,N),N},l.prototype.transformAllPoints=function(N,G){var w=this.vertices.length,R=this.vertices;if(G){for(var C=0;C<w;C++){var X=R[C];G.vmult(X,X)}for(var C=0;C<this.faceNormals.length;C++){var X=this.faceNormals[C];G.vmult(X,X)}}if(N)for(var C=0;C<w;C++){var X=R[C];X.vadd(N,X)}};var Q=new s,F=new s,D=new s;l.prototype.pointIsInside=function(N){var G=this.vertices.length,w=this.vertices,R=this.faces,C=this.faceNormals,X=null,ne=this.faces.length,ie=Q;this.getAveragePointLocal(ie);for(var K=0;K<ne;K++){this.faces[K].length;var G=C[K],te=w[R[K][0]],ce=F;N.vsub(te,ce);var Y=G.dot(ce),Ce=D;ie.vsub(te,Ce);var ue=G.dot(Ce);if(Y<0&&ue>0||Y>0&&ue<0)return!1}return X?1:-1},new s;var j=new s,W=new s;l.project=function(N,G,w,R,C){var X=N.vertices.length,ne=j,ie=0,K=0,te=W,ce=N.vertices;te.setZero(),o.vectorToLocalFrame(w,R,G,ne),o.pointToLocalFrame(w,R,te,te);var Y=te.dot(ne);K=ie=ce[0].dot(ne);for(var Ce=1;Ce<X;Ce++){var ue=ce[Ce].dot(ne);ue>ie&&(ie=ue),ue<K&&(K=ue)}if(K-=Y,ie-=Y,K>ie){var se=K;K=ie,ie=se}C[0]=ie,C[1]=K}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(t,n,i){n.exports=l;var r=t("./Shape"),s=t("../math/Vec3");t("../math/Quaternion");var o=t("./ConvexPolyhedron");function l(h,u,c,d){var f=d,v=[],g=[],m=[],p=[],_=[],y=Math.cos,x=Math.sin;v.push(new s(u*y(0),u*x(0),-c*.5)),p.push(0),v.push(new s(h*y(0),h*x(0),c*.5)),_.push(1);for(var A=0;A<f;A++){var b=2*Math.PI/f*(A+1),I=2*Math.PI/f*(A+.5);A<f-1?(v.push(new s(u*y(b),u*x(b),-c*.5)),p.push(2*A+2),v.push(new s(h*y(b),h*x(b),c*.5)),_.push(2*A+3),m.push([2*A+2,2*A+3,2*A+1,2*A])):m.push([0,1,2*A+1,2*A]),(f%2===1||A<f/2)&&g.push(new s(y(I),x(I),0))}m.push(_),g.push(new s(0,0,1));for(var B=[],A=0;A<p.length;A++)B.push(p[p.length-A-1]);m.push(B),this.type=r.types.CONVEXPOLYHEDRON,o.call(this,v,m,g)}l.prototype=new o},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(t,n,i){var r=t("./Shape"),s=t("./ConvexPolyhedron"),o=t("../math/Vec3"),l=t("../utils/Utils");n.exports=h;function h(u,c){c=l.defaults(c,{maxValue:null,minValue:null,elementSize:1}),this.data=u,this.maxValue=c.maxValue,this.minValue=c.minValue,this.elementSize=c.elementSize,c.minValue===null&&this.updateMinValue(),c.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,r.call(this),this.pillarConvex=new s,this.pillarOffset=new o,this.type=r.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}h.prototype=new r,h.prototype.update=function(){this._cachedPillars={}},h.prototype.updateMinValue=function(){for(var u=this.data,c=u[0][0],d=0;d!==u.length;d++)for(var f=0;f!==u[d].length;f++){var v=u[d][f];v<c&&(c=v)}this.minValue=c},h.prototype.updateMaxValue=function(){for(var u=this.data,c=u[0][0],d=0;d!==u.length;d++)for(var f=0;f!==u[d].length;f++){var v=u[d][f];v>c&&(c=v)}this.maxValue=c},h.prototype.setHeightValueAtIndex=function(u,c,d){var f=this.data;f[u][c]=d,this.clearCachedConvexTrianglePillar(u,c,!1),u>0&&(this.clearCachedConvexTrianglePillar(u-1,c,!0),this.clearCachedConvexTrianglePillar(u-1,c,!1)),c>0&&(this.clearCachedConvexTrianglePillar(u,c-1,!0),this.clearCachedConvexTrianglePillar(u,c-1,!1)),c>0&&u>0&&this.clearCachedConvexTrianglePillar(u-1,c-1,!0)},h.prototype.getRectMinMax=function(u,c,d,f,v){v=v||[];for(var g=this.data,m=this.minValue,p=u;p<=d;p++)for(var _=c;_<=f;_++){var y=g[p][_];y>m&&(m=y)}v[0]=this.minValue,v[1]=m},h.prototype.getIndexOfPosition=function(u,c,d,f){var v=this.elementSize,g=this.data,m=Math.floor(u/v),p=Math.floor(c/v);return d[0]=m,d[1]=p,f&&(m<0&&(m=0),p<0&&(p=0),m>=g.length-1&&(m=g.length-1),p>=g[0].length-1&&(p=g[0].length-1)),!(m<0||p<0||m>=g.length-1||p>=g[0].length-1)},h.prototype.getHeightAt=function(u,c,d){var f=[];this.getIndexOfPosition(u,c,f,d);var v=[];return this.getRectMinMax(f[0],f[1]+1,f[0],f[1]+1,v),(v[0]+v[1])/2},h.prototype.getCacheConvexTrianglePillarKey=function(u,c,d){return u+"_"+c+"_"+(d?1:0)},h.prototype.getCachedConvexTrianglePillar=function(u,c,d){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,c,d)]},h.prototype.setCachedConvexTrianglePillar=function(u,c,d,f,v){this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,c,d)]={convex:f,offset:v}},h.prototype.clearCachedConvexTrianglePillar=function(u,c,d){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,c,d)]},h.prototype.getConvexTrianglePillar=function(u,c,d){var f=this.pillarConvex,v=this.pillarOffset;if(this.cacheEnabled){var g=this.getCachedConvexTrianglePillar(u,c,d);if(g){this.pillarConvex=g.convex,this.pillarOffset=g.offset;return}f=new s,v=new o,this.pillarConvex=f,this.pillarOffset=v}var g=this.data,m=this.elementSize,p=f.faces;f.vertices.length=6;for(var _=0;_<6;_++)f.vertices[_]||(f.vertices[_]=new o);p.length=5;for(var _=0;_<5;_++)p[_]||(p[_]=[]);var y=f.vertices,x=(Math.min(g[u][c],g[u+1][c],g[u][c+1],g[u+1][c+1])-this.minValue)/2+this.minValue;d?(v.set((u+.75)*m,(c+.75)*m,x),y[0].set(.25*m,.25*m,g[u+1][c+1]-x),y[1].set(-.75*m,.25*m,g[u][c+1]-x),y[2].set(.25*m,-.75*m,g[u+1][c]-x),y[3].set(.25*m,.25*m,-x-1),y[4].set(-.75*m,.25*m,-x-1),y[5].set(.25*m,-.75*m,-x-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=2,p[2][1]=5,p[2][2]=3,p[2][3]=0,p[3][0]=3,p[3][1]=4,p[3][2]=1,p[3][3]=0,p[4][0]=1,p[4][1]=4,p[4][2]=5,p[4][3]=2):(v.set((u+.25)*m,(c+.25)*m,x),y[0].set(-.25*m,-.25*m,g[u][c]-x),y[1].set(.75*m,-.25*m,g[u+1][c]-x),y[2].set(-.25*m,.75*m,g[u][c+1]-x),y[3].set(-.25*m,-.25*m,-x-1),y[4].set(.75*m,-.25*m,-x-1),y[5].set(-.25*m,.75*m,-x-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=0,p[2][1]=2,p[2][2]=5,p[2][3]=3,p[3][0]=1,p[3][1]=0,p[3][2]=3,p[3][3]=4,p[4][0]=4,p[4][1]=5,p[4][2]=2,p[4][3]=1),f.computeNormals(),f.computeEdges(),f.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(u,c,d,f,v)},h.prototype.calculateLocalInertia=function(u,c){return c=c||new o,c.set(0,0,0),c},h.prototype.volume=function(){return Number.MAX_VALUE},h.prototype.calculateWorldAABB=function(u,c,d,f){d.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),f.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},h.prototype.updateBoundingSphereRadius=function(){var u=this.data,c=this.elementSize;this.boundingSphereRadius=new o(u.length*c,u[0].length*c,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(t,n,i){n.exports=o;var r=t("./Shape"),s=t("../math/Vec3");function o(){r.call(this),this.type=r.types.PARTICLE}o.prototype=new r,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(l,h){return h=h||new s,h.set(0,0,0),h},o.prototype.volume=function(){return 0},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},o.prototype.calculateWorldAABB=function(l,h,u,c){u.copy(l),c.copy(l)}},{"../math/Vec3":30,"./Shape":43}],42:[function(t,n,i){n.exports=o;var r=t("./Shape"),s=t("../math/Vec3");function o(){r.call(this),this.type=r.types.PLANE,this.worldNormal=new s,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}o.prototype=new r,o.prototype.constructor=o,o.prototype.computeWorldNormal=function(h){var u=this.worldNormal;u.set(0,0,1),h.vmult(u,u),this.worldNormalNeedsUpdate=!1},o.prototype.calculateLocalInertia=function(h,u){return u=u||new s,u},o.prototype.volume=function(){return Number.MAX_VALUE};var l=new s;o.prototype.calculateWorldAABB=function(h,u,c,d){l.set(0,0,1),u.vmult(l,l);var f=Number.MAX_VALUE;c.set(-f,-f,-f),d.set(f,f,f),l.x===1&&(d.x=h.x),l.y===1&&(d.y=h.y),l.z===1&&(d.z=h.z),l.x===-1&&(c.x=h.x),l.y===-1&&(c.y=h.y),l.z===-1&&(c.z=h.z)},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(t,n,i){n.exports=r;var r=t("./Shape");t("../math/Vec3"),t("../math/Quaternion"),t("../material/Material");function r(){this.id=r.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}r.prototype.constructor=r,r.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},r.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},r.prototype.calculateLocalInertia=function(s,o){throw"calculateLocalInertia() not implemented for shape type "+this.type},r.idCounter=0,r.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(t,n,i){n.exports=o;var r=t("./Shape"),s=t("../math/Vec3");function o(l){if(r.call(this),this.radius=l!==void 0?Number(l):1,this.type=r.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}o.prototype=new r,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(l,h){h=h||new s;var u=2*l*this.radius*this.radius/5;return h.x=u,h.y=u,h.z=u,h},o.prototype.volume=function(){return 4*Math.PI*this.radius/3},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},o.prototype.calculateWorldAABB=function(l,h,u,c){for(var d=this.radius,f=["x","y","z"],v=0;v<f.length;v++){var g=f[v];u[g]=l[g]-d,c[g]=l[g]+d}}},{"../math/Vec3":30,"./Shape":43}],45:[function(t,n,i){n.exports=u;var r=t("./Shape"),s=t("../math/Vec3");t("../math/Quaternion");var o=t("../math/Transform"),l=t("../collision/AABB"),h=t("../utils/Octree");function u(B,M){r.call(this),this.type=r.types.TRIMESH,this.vertices=new Float32Array(B),this.indices=new Int16Array(M),this.normals=new Float32Array(M.length),this.aabb=new l,this.edges=null,this.scale=new s(1,1,1),this.tree=new h,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}u.prototype=new r,u.prototype.constructor=u;var c=new s;u.prototype.updateTree=function(){var B=this.tree;B.reset(),B.aabb.copy(this.aabb);var M=this.scale;B.aabb.lowerBound.x*=1/M.x,B.aabb.lowerBound.y*=1/M.y,B.aabb.lowerBound.z*=1/M.z,B.aabb.upperBound.x*=1/M.x,B.aabb.upperBound.y*=1/M.y,B.aabb.upperBound.z*=1/M.z;for(var E=new l,L=new s,z=new s,q=new s,U=[L,z,q],V=0;V<this.indices.length/3;V++){var Q=V*3;this._getUnscaledVertex(this.indices[Q],L),this._getUnscaledVertex(this.indices[Q+1],z),this._getUnscaledVertex(this.indices[Q+2],q),E.setFromPoints(U),B.insert(E,V)}B.removeEmptyNodes()};var d=new l;u.prototype.getTrianglesInAABB=function(B,M){d.copy(B);var E=this.scale,L=E.x,z=E.y,q=E.z,U=d.lowerBound,V=d.upperBound;return U.x/=L,U.y/=z,U.z/=q,V.x/=L,V.y/=z,V.z/=q,this.tree.aabbQuery(d,M)},u.prototype.setScale=function(B){var M=this.scale.x===this.scale.y===this.scale.z,E=B.x===B.y===B.z;M&&E||this.updateNormals(),this.scale.copy(B),this.updateAABB(),this.updateBoundingSphereRadius()},u.prototype.updateNormals=function(){for(var B=c,M=this.normals,E=0;E<this.indices.length/3;E++){var L=E*3,z=this.indices[L],q=this.indices[L+1],U=this.indices[L+2];this.getVertex(z,p),this.getVertex(q,_),this.getVertex(U,y),u.computeNormal(_,p,y,B),M[L]=B.x,M[L+1]=B.y,M[L+2]=B.z}},u.prototype.updateEdges=function(){for(var B={},M=function(Q,F){var D=z<q?z+"_"+q:q+"_"+z;B[D]=!0},E=0;E<this.indices.length/3;E++){var L=E*3,z=this.indices[L],q=this.indices[L+1];this.indices[L+2],M(),M(),M()}var U=Object.keys(B);this.edges=new Int16Array(U.length*2);for(var E=0;E<U.length;E++){var V=U[E].split("_");this.edges[2*E]=parseInt(V[0],10),this.edges[2*E+1]=parseInt(V[1],10)}},u.prototype.getEdgeVertex=function(B,M,E){var L=this.edges[B*2+(M?1:0)];this.getVertex(L,E)};var f=new s,v=new s;u.prototype.getEdgeVector=function(B,M){var E=f,L=v;this.getEdgeVertex(B,0,E),this.getEdgeVertex(B,1,L),L.vsub(E,M)};var g=new s,m=new s;u.computeNormal=function(B,M,E,L){M.vsub(B,m),E.vsub(M,g),g.cross(m,L),L.isZero()||L.normalize()};var p=new s,_=new s,y=new s;u.prototype.getVertex=function(B,M){var E=this.scale;return this._getUnscaledVertex(B,M),M.x*=E.x,M.y*=E.y,M.z*=E.z,M},u.prototype._getUnscaledVertex=function(B,M){var E=B*3,L=this.vertices;return M.set(L[E],L[E+1],L[E+2])},u.prototype.getWorldVertex=function(B,M,E,L){return this.getVertex(B,L),o.pointToWorldFrame(M,E,L,L),L},u.prototype.getTriangleVertices=function(B,M,E,L){var z=B*3;this.getVertex(this.indices[z],M),this.getVertex(this.indices[z+1],E),this.getVertex(this.indices[z+2],L)},u.prototype.getNormal=function(B,M){var E=B*3;return M.set(this.normals[E],this.normals[E+1],this.normals[E+2])};var x=new l;u.prototype.calculateLocalInertia=function(B,M){this.computeLocalAABB(x);var E=x.upperBound.x-x.lowerBound.x,L=x.upperBound.y-x.lowerBound.y,z=x.upperBound.z-x.lowerBound.z;return M.set(1/12*B*(2*L*2*L+2*z*2*z),1/12*B*(2*E*2*E+2*z*2*z),1/12*B*(2*L*2*L+2*E*2*E))};var A=new s;u.prototype.computeLocalAABB=function(B){var M=B.lowerBound,E=B.upperBound,L=this.vertices.length;this.vertices;var z=A;this.getVertex(0,z),M.copy(z),E.copy(z);for(var q=0;q!==L;q++)this.getVertex(q,z),z.x<M.x?M.x=z.x:z.x>E.x&&(E.x=z.x),z.y<M.y?M.y=z.y:z.y>E.y&&(E.y=z.y),z.z<M.z?M.z=z.z:z.z>E.z&&(E.z=z.z)},u.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},u.prototype.updateBoundingSphereRadius=function(){for(var B=0,M=this.vertices,E=new s,L=0,z=M.length/3;L!==z;L++){this.getVertex(L,E);var q=E.norm2();q>B&&(B=q)}this.boundingSphereRadius=Math.sqrt(B)},new s;var b=new o,I=new l;u.prototype.calculateWorldAABB=function(B,M,E,L){var z=b,q=I;z.position=B,z.quaternion=M,this.aabb.toWorldFrame(z,q),E.copy(q.lowerBound),L.copy(q.upperBound)},u.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},u.createTorus=function(B,M,E,L,z){B=B||1,M=M||.5,E=E||8,L=L||6,z=z||Math.PI*2;for(var q=[],U=[],V=0;V<=E;V++)for(var Q=0;Q<=L;Q++){var F=Q/L*z,D=V/E*Math.PI*2,j=(B+M*Math.cos(D))*Math.cos(F),W=(B+M*Math.cos(D))*Math.sin(F),N=M*Math.sin(D);q.push(j,W,N)}for(var V=1;V<=E;V++)for(var Q=1;Q<=L;Q++){var G=(L+1)*V+Q-1,w=(L+1)*(V-1)+Q-1,R=(L+1)*(V-1)+Q,C=(L+1)*V+Q;U.push(G,w,C),U.push(w,R,C)}return new u(q,U)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(t,n,i){n.exports=s,t("../math/Vec3"),t("../math/Quaternion");var r=t("./Solver");function s(){r.call(this),this.iterations=10,this.tolerance=1e-7}s.prototype=new r;var o=[],l=[],h=[];s.prototype.solve=function(u,c){var d=0,f=this.iterations,v=this.tolerance*this.tolerance,g=this.equations,m=g.length,p=c.bodies,_=p.length,y=u,x,A,b,I,B,M;if(m!==0)for(var E=0;E!==_;E++)p[E].updateSolveMassProperties();var L=l,z=h,q=o;L.length=m,z.length=m,q.length=m;for(var E=0;E!==m;E++){var U=g[E];q[E]=0,z[E]=U.computeB(y),L[E]=1/U.computeC()}if(m!==0){for(var E=0;E!==_;E++){var V=p[E],Q=V.vlambda,F=V.wlambda;Q.set(0,0,0),F&&F.set(0,0,0)}for(d=0;d!==f;d++){I=0;for(var D=0;D!==m;D++){var U=g[D];x=z[D],A=L[D],M=q[D],B=U.computeGWlambda(),b=A*(x-B-U.eps*M),M+b<U.minForce?b=U.minForce-M:M+b>U.maxForce&&(b=U.maxForce-M),q[D]+=b,I+=b>0?b:-b,U.addToWlambda(b)}if(I*I<v)break}for(var E=0;E!==_;E++){var V=p[E],j=V.velocity,W=V.angularVelocity;j.vadd(V.vlambda,j),W&&W.vadd(V.wlambda,W)}}return d}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(t,n,i){n.exports=r;function r(){this.equations=[]}r.prototype.solve=function(s,o){return 0},r.prototype.addEquation=function(s){s.enabled&&this.equations.push(s)},r.prototype.removeEquation=function(s){var o=this.equations,l=o.indexOf(s);l!==-1&&o.splice(l,1)},r.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(t,n,i){n.exports=o,t("../math/Vec3"),t("../math/Quaternion");var r=t("./Solver"),s=t("../objects/Body");function o(p){for(r.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=p,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}o.prototype=new r;var l=[],h=[],u={bodies:[]},c=s.STATIC;function d(p){for(var _=p.length,y=0;y!==_;y++){var x=p[y];if(!x.visited&&!(x.body.type&c))return x}return!1}var f=[];function v(p,_,y,x){for(f.push(p),p.visited=!0,_(p,y,x);f.length;)for(var A=f.pop(),b;b=d(A.children);)b.visited=!0,_(b,y,x),f.push(b)}function g(p,_,y){_.push(p.body);for(var x=p.eqs.length,A=0;A!==x;A++){var b=p.eqs[A];y.indexOf(b)===-1&&y.push(b)}}o.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},o.prototype.solve=function(p,_){for(var y=l,x=this.nodePool,A=_.bodies,b=this.equations,I=b.length,B=A.length,M=this.subsolver;x.length<B;)x.push(this.createNode());y.length=B;for(var E=0;E<B;E++)y[E]=x[E];for(var E=0;E!==B;E++){var L=y[E];L.body=A[E],L.children.length=0,L.eqs.length=0,L.visited=!1}for(var z=0;z!==I;z++){var q=b[z],E=A.indexOf(q.bi),U=A.indexOf(q.bj),V=y[E],Q=y[U];V.children.push(Q),V.eqs.push(q),Q.children.push(V),Q.eqs.push(q)}var F,D=0,j=h;M.tolerance=this.tolerance,M.iterations=this.iterations;for(var W=u;F=d(y);){j.length=0,W.bodies.length=0,v(F,g,W.bodies,j);var N=j.length;j=j.sort(m);for(var E=0;E!==N;E++)M.addEquation(j[E]);M.solve(p,W),M.removeAllEquations(),D++}return D};function m(p,_){return _.id-p.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(t,n,i){var r=function(){};n.exports=r,r.prototype={constructor:r,addEventListener:function(s,o){this._listeners===void 0&&(this._listeners={});var l=this._listeners;return l[s]===void 0&&(l[s]=[]),l[s].indexOf(o)===-1&&l[s].push(o),this},hasEventListener:function(s,o){if(this._listeners===void 0)return!1;var l=this._listeners;return l[s]!==void 0&&l[s].indexOf(o)!==-1},removeEventListener:function(s,o){if(this._listeners===void 0)return this;var l=this._listeners;if(l[s]===void 0)return this;var h=l[s].indexOf(o);return h!==-1&&l[s].splice(h,1),this},dispatchEvent:function(s){if(this._listeners===void 0)return this;var o=this._listeners,l=o[s.type];if(l!==void 0){s.target=this;for(var h=0,u=l.length;h<u;h++)l[h].call(this,s)}return this}}},{}],50:[function(t,n,i){var r=t("../collision/AABB"),s=t("../math/Vec3");n.exports=l;function o(c){c=c||{},this.root=c.root||null,this.aabb=c.aabb?c.aabb.clone():new r,this.data=[],this.children=[]}function l(c,d){d=d||{},d.root=null,d.aabb=c,o.call(this,d),this.maxDepth=typeof d.maxDepth<"u"?d.maxDepth:8}l.prototype=new o,o.prototype.reset=function(c,d){this.children.length=this.data.length=0},o.prototype.insert=function(c,d,f){var v=this.data;if(f=f||0,!this.aabb.contains(c))return!1;var g=this.children;if(f<(this.maxDepth||this.root.maxDepth)){var m=!1;g.length||(this.subdivide(),m=!0);for(var p=0;p!==8;p++)if(g[p].insert(c,d,f+1))return!0;m&&(g.length=0)}return v.push(d),!0};var h=new s;o.prototype.subdivide=function(){var c=this.aabb,d=c.lowerBound,f=c.upperBound,v=this.children;v.push(new o({aabb:new r({lowerBound:new s(0,0,0)})}),new o({aabb:new r({lowerBound:new s(1,0,0)})}),new o({aabb:new r({lowerBound:new s(1,1,0)})}),new o({aabb:new r({lowerBound:new s(1,1,1)})}),new o({aabb:new r({lowerBound:new s(0,1,1)})}),new o({aabb:new r({lowerBound:new s(0,0,1)})}),new o({aabb:new r({lowerBound:new s(1,0,1)})}),new o({aabb:new r({lowerBound:new s(0,1,0)})})),f.vsub(d,h),h.scale(.5,h);for(var g=this.root||this,m=0;m!==8;m++){var p=v[m];p.root=g;var _=p.aabb.lowerBound;_.x*=h.x,_.y*=h.y,_.z*=h.z,_.vadd(d,_),_.vadd(h,p.aabb.upperBound)}},o.prototype.aabbQuery=function(c,d){this.data,this.children;for(var f=[this];f.length;){var v=f.pop();v.aabb.overlaps(c)&&Array.prototype.push.apply(d,v.data),Array.prototype.push.apply(f,v.children)}return d};var u=new r;o.prototype.rayQuery=function(c,d,f){return c.getAABB(u),u.toLocalFrame(d,u),this.aabbQuery(u,f),f},o.prototype.removeEmptyNodes=function(){for(var c=[this];c.length;){for(var d=c.pop(),f=d.children.length-1;f>=0;f--)d.children[f].data.length||d.children.splice(f,1);Array.prototype.push.apply(c,d.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(t,n,i){n.exports=r;function r(){this.objects=[],this.type=Object}r.prototype.release=function(){for(var s=arguments.length,o=0;o!==s;o++)this.objects.push(arguments[o])},r.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},r.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(t,n,i){n.exports=r;function r(){this.data={keys:[]}}r.prototype.get=function(s,o){if(s>o){var l=o;o=s,s=l}return this.data[s+"-"+o]},r.prototype.set=function(s,o,l){if(s>o){var h=o;o=s,s=h}var u=s+"-"+o;this.get(s,o)||this.data.keys.push(u),this.data[u]=l},r.prototype.reset=function(){for(var s=this.data,o=s.keys;o.length>0;){var l=o.pop();delete s[l]}}},{}],53:[function(t,n,i){function r(){}n.exports=r,r.defaults=function(s,o){s=s||{};for(var l in o)l in s||(s[l]=o[l]);return s}},{}],54:[function(t,n,i){n.exports=o;var r=t("../math/Vec3"),s=t("./Pool");function o(){s.call(this),this.type=r}o.prototype=new s,o.prototype.constructObject=function(){return new r}},{"../math/Vec3":30,"./Pool":51}],55:[function(t,n,i){n.exports=v;var r=t("../collision/AABB"),s=t("../shapes/Shape"),o=t("../collision/Ray"),l=t("../math/Vec3"),h=t("../math/Transform");t("../shapes/ConvexPolyhedron");var u=t("../math/Quaternion");t("../solver/Solver");var c=t("../utils/Vec3Pool"),d=t("../equations/ContactEquation"),f=t("../equations/FrictionEquation");function v(oe){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new c,this.world=oe,this.currentContactMaterial=null,this.enableFrictionReduction=!1}v.prototype.createContactEquation=function(oe,le,fe,me,Je,Be){var ye;this.contactPointPool.length?(ye=this.contactPointPool.pop(),ye.bi=oe,ye.bj=le):ye=new d(oe,le),ye.enabled=oe.collisionResponse&&le.collisionResponse&&fe.collisionResponse&&me.collisionResponse;var Ie=this.currentContactMaterial;ye.restitution=Ie.restitution,ye.setSpookParams(Ie.contactEquationStiffness,Ie.contactEquationRelaxation,this.world.dt);var re=fe.material||oe.material,be=me.material||le.material;return re&&be&&re.restitution>=0&&be.restitution>=0&&(ye.restitution=re.restitution*be.restitution),ye.si=Je||fe,ye.sj=Be||me,ye},v.prototype.createFrictionEquationsFromContact=function(oe,le){var fe=oe.bi,me=oe.bj,Je=oe.si,Be=oe.sj,ye=this.world,Ie=this.currentContactMaterial,re=Ie.friction,be=Je.material||fe.material,Ne=Be.material||me.material;if(be&&Ne&&be.friction>=0&&Ne.friction>=0&&(re=be.friction*Ne.friction),re>0){var ze=re*ye.gravity.length(),Pe=fe.invMass+me.invMass;Pe>0&&(Pe=1/Pe);var Me=this.frictionEquationPool,T=Me.length?Me.pop():new f(fe,me,ze*Pe),H=Me.length?Me.pop():new f(fe,me,ze*Pe);return T.bi=H.bi=fe,T.bj=H.bj=me,T.minForce=H.minForce=-ze*Pe,T.maxForce=H.maxForce=ze*Pe,T.ri.copy(oe.ri),T.rj.copy(oe.rj),H.ri.copy(oe.ri),H.rj.copy(oe.rj),oe.ni.tangents(T.t,H.t),T.setSpookParams(Ie.frictionEquationStiffness,Ie.frictionEquationRelaxation,ye.dt),H.setSpookParams(Ie.frictionEquationStiffness,Ie.frictionEquationRelaxation,ye.dt),T.enabled=H.enabled=oe.enabled,le.push(T,H),!0}return!1};var g=new l,m=new l,p=new l;v.prototype.createFrictionFromAverage=function(oe){var le=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(le,this.frictionResult)||oe===1)){var fe=this.frictionResult[this.frictionResult.length-2],me=this.frictionResult[this.frictionResult.length-1];g.setZero(),m.setZero(),p.setZero();var Je=le.bi;le.bj;for(var Be=0;Be!==oe;Be++)le=this.result[this.result.length-1-Be],le.bodyA!==Je?(g.vadd(le.ni,g),m.vadd(le.ri,m),p.vadd(le.rj,p)):(g.vsub(le.ni,g),m.vadd(le.rj,m),p.vadd(le.ri,p));var ye=1/oe;m.scale(ye,fe.ri),p.scale(ye,fe.rj),me.ri.copy(fe.ri),me.rj.copy(fe.rj),g.normalize(),g.tangents(fe.t,me.t)}};var _=new l,y=new l,x=new u,A=new u;v.prototype.getContacts=function(oe,le,fe,me,Je,Be,ye){this.contactPointPool=Je,this.frictionEquationPool=ye,this.result=me,this.frictionResult=Be;for(var Ie=x,re=A,be=_,Ne=y,ze=0,Pe=oe.length;ze!==Pe;ze++){var Me=oe[ze],T=le[ze],H=null;Me.material&&T.material&&(H=fe.getContactMaterial(Me.material,T.material)||null);for(var Z=0;Z<Me.shapes.length;Z++){Me.quaternion.mult(Me.shapeOrientations[Z],Ie),Me.quaternion.vmult(Me.shapeOffsets[Z],be),be.vadd(Me.position,be);for(var O=Me.shapes[Z],$=0;$<T.shapes.length;$++){T.quaternion.mult(T.shapeOrientations[$],re),T.quaternion.vmult(T.shapeOffsets[$],Ne),Ne.vadd(T.position,Ne);var ve=T.shapes[$];if(!(be.distanceTo(Ne)>O.boundingSphereRadius+ve.boundingSphereRadius)){var Fe=null;O.material&&ve.material&&(Fe=fe.getContactMaterial(O.material,ve.material)||null),this.currentContactMaterial=Fe||H||fe.defaultContactMaterial;var Re=this[O.type|ve.type];Re&&(O.type<ve.type?Re.call(this,O,ve,be,Ne,Ie,re,Me,T,O,ve):Re.call(this,ve,O,Ne,be,re,Ie,T,Me,O,ve))}}}}},v.prototype[s.types.BOX|s.types.BOX]=v.prototype.boxBox=function(oe,le,fe,me,Je,Be,ye,Ie){oe.convexPolyhedronRepresentation.material=oe.material,le.convexPolyhedronRepresentation.material=le.material,oe.convexPolyhedronRepresentation.collisionResponse=oe.collisionResponse,le.convexPolyhedronRepresentation.collisionResponse=le.collisionResponse,this.convexConvex(oe.convexPolyhedronRepresentation,le.convexPolyhedronRepresentation,fe,me,Je,Be,ye,Ie,oe,le)},v.prototype[s.types.BOX|s.types.CONVEXPOLYHEDRON]=v.prototype.boxConvex=function(oe,le,fe,me,Je,Be,ye,Ie){oe.convexPolyhedronRepresentation.material=oe.material,oe.convexPolyhedronRepresentation.collisionResponse=oe.collisionResponse,this.convexConvex(oe.convexPolyhedronRepresentation,le,fe,me,Je,Be,ye,Ie,oe,le)},v.prototype[s.types.BOX|s.types.PARTICLE]=v.prototype.boxParticle=function(oe,le,fe,me,Je,Be,ye,Ie){oe.convexPolyhedronRepresentation.material=oe.material,oe.convexPolyhedronRepresentation.collisionResponse=oe.collisionResponse,this.convexParticle(oe.convexPolyhedronRepresentation,le,fe,me,Je,Be,ye,Ie,oe,le)},v.prototype[s.types.SPHERE]=v.prototype.sphereSphere=function(oe,le,fe,me,Je,Be,ye,Ie){var re=this.createContactEquation(ye,Ie,oe,le);me.vsub(fe,re.ni),re.ni.normalize(),re.ri.copy(re.ni),re.rj.copy(re.ni),re.ri.mult(oe.radius,re.ri),re.rj.mult(-le.radius,re.rj),re.ri.vadd(fe,re.ri),re.ri.vsub(ye.position,re.ri),re.rj.vadd(me,re.rj),re.rj.vsub(Ie.position,re.rj),this.result.push(re),this.createFrictionEquationsFromContact(re,this.frictionResult)};var b=new l,I=new l,B=new l;v.prototype[s.types.PLANE|s.types.TRIMESH]=v.prototype.planeTrimesh=function(oe,le,fe,me,Je,Be,ye,Ie){var re=new l,be=b;be.set(0,0,1),Je.vmult(be,be);for(var Ne=0;Ne<le.vertices.length/3;Ne++){le.getVertex(Ne,re);var ze=new l;ze.copy(re),h.pointToWorldFrame(me,Be,ze,re);var Pe=I;re.vsub(fe,Pe);var Me=be.dot(Pe);if(Me<=0){var T=this.createContactEquation(ye,Ie,oe,le);T.ni.copy(be);var H=B;be.scale(Pe.dot(be),H),re.vsub(H,H),T.ri.copy(H),T.ri.vsub(ye.position,T.ri),T.rj.copy(re),T.rj.vsub(Ie.position,T.rj),this.result.push(T),this.createFrictionEquationsFromContact(T,this.frictionResult)}}};var M=new l,E=new l;new l;var L=new l,z=new l,q=new l,U=new l,V=new l,Q=new l,F=new l,D=new l,j=new l,W=new l,N=new l,G=new r,w=[];v.prototype[s.types.SPHERE|s.types.TRIMESH]=v.prototype.sphereTrimesh=function(oe,le,fe,me,Je,Be,ye,Ie){var re=q,be=U,Ne=V,ze=Q,Pe=F,Me=D,T=G,H=z,Z=E,O=w;h.pointToLocalFrame(me,Be,fe,Pe);var $=oe.radius;T.lowerBound.set(Pe.x-$,Pe.y-$,Pe.z-$),T.upperBound.set(Pe.x+$,Pe.y+$,Pe.z+$),le.getTrianglesInAABB(T,O);for(var ve=L,Fe=oe.radius*oe.radius,Re=0;Re<O.length;Re++)for(var De=0;De<3;De++)if(le.getVertex(le.indices[O[Re]*3+De],ve),ve.vsub(Pe,Z),Z.norm2()<=Fe){H.copy(ve),h.pointToWorldFrame(me,Be,H,ve),ve.vsub(fe,Z);var Se=this.createContactEquation(ye,Ie,oe,le);Se.ni.copy(Z),Se.ni.normalize(),Se.ri.copy(Se.ni),Se.ri.scale(oe.radius,Se.ri),Se.ri.vadd(fe,Se.ri),Se.ri.vsub(ye.position,Se.ri),Se.rj.copy(ve),Se.rj.vsub(Ie.position,Se.rj),this.result.push(Se),this.createFrictionEquationsFromContact(Se,this.frictionResult)}for(var Re=0;Re<O.length;Re++)for(var De=0;De<3;De++){le.getVertex(le.indices[O[Re]*3+De],re),le.getVertex(le.indices[O[Re]*3+(De+1)%3],be),be.vsub(re,Ne),Pe.vsub(be,Me);var Ye=Me.dot(Ne);Pe.vsub(re,Me);var Ze=Me.dot(Ne);if(Ze>0&&Ye<0){Pe.vsub(re,Me),ze.copy(Ne),ze.normalize(),Ze=Me.dot(ze),ze.scale(Ze,Me),Me.vadd(re,Me);var ht=Me.distanceTo(Pe);if(ht<oe.radius){var Se=this.createContactEquation(ye,Ie,oe,le);Me.vsub(Pe,Se.ni),Se.ni.normalize(),Se.ni.scale(oe.radius,Se.ri),h.pointToWorldFrame(me,Be,Me,Me),Me.vsub(Ie.position,Se.rj),h.vectorToWorldFrame(Be,Se.ni,Se.ni),h.vectorToWorldFrame(Be,Se.ri,Se.ri),this.result.push(Se),this.createFrictionEquationsFromContact(Se,this.frictionResult)}}}for(var At=j,vt=W,lt=N,gt=M,Re=0,Ge=O.length;Re!==Ge;Re++){le.getTriangleVertices(O[Re],At,vt,lt),le.getNormal(O[Re],gt),Pe.vsub(At,Me);var ht=Me.dot(gt);if(gt.scale(ht,Me),Pe.vsub(Me,Me),ht=Me.distanceTo(Pe),o.pointInTriangle(Me,At,vt,lt)&&ht<oe.radius){var Se=this.createContactEquation(ye,Ie,oe,le);Me.vsub(Pe,Se.ni),Se.ni.normalize(),Se.ni.scale(oe.radius,Se.ri),h.pointToWorldFrame(me,Be,Me,Me),Me.vsub(Ie.position,Se.rj),h.vectorToWorldFrame(Be,Se.ni,Se.ni),h.vectorToWorldFrame(Be,Se.ri,Se.ri),this.result.push(Se),this.createFrictionEquationsFromContact(Se,this.frictionResult)}}O.length=0};var R=new l,C=new l;v.prototype[s.types.SPHERE|s.types.PLANE]=v.prototype.spherePlane=function(oe,le,fe,me,Je,Be,ye,Ie){var re=this.createContactEquation(ye,Ie,oe,le);if(re.ni.set(0,0,1),Be.vmult(re.ni,re.ni),re.ni.negate(re.ni),re.ni.normalize(),re.ni.mult(oe.radius,re.ri),fe.vsub(me,R),re.ni.mult(re.ni.dot(R),C),R.vsub(C,re.rj),-R.dot(re.ni)<=oe.radius){var be=re.ri,Ne=re.rj;be.vadd(fe,be),be.vsub(ye.position,be),Ne.vadd(me,Ne),Ne.vsub(Ie.position,Ne),this.result.push(re),this.createFrictionEquationsFromContact(re,this.frictionResult)}};var X=new l,ne=new l,ie=new l;function K(oe,le,fe){for(var me=null,Je=oe.length,Be=0;Be!==Je;Be++){var ye=oe[Be],Ie=X;oe[(Be+1)%Je].vsub(ye,Ie);var re=ne;Ie.cross(le,re);var be=ie;fe.vsub(ye,be);var Ne=re.dot(be);if(me===null||Ne>0&&me===!0||Ne<=0&&me===!1){me===null&&(me=Ne>0);continue}else return!1}return!0}var te=new l,ce=new l,Y=new l,Ce=new l,ue=[new l,new l,new l,new l,new l,new l],se=new l,ae=new l,We=new l,Ae=new l;v.prototype[s.types.SPHERE|s.types.BOX]=v.prototype.sphereBox=function(oe,le,fe,me,Je,Be,ye,Ie){var re=this.v3pool,be=ue;fe.vsub(me,te),le.getSideNormals(be,Be);for(var Ne=oe.radius,ze=!1,Pe=ae,Me=We,T=Ae,H=null,Z=0,O=0,$=0,ve=null,Fe=0,Re=be.length;Fe!==Re&&ze===!1;Fe++){var De=ce;De.copy(be[Fe]);var Se=De.norm();De.normalize();var Ye=te.dot(De);if(Ye<Se+Ne&&Ye>0){var Ze=Y,ht=Ce;Ze.copy(be[(Fe+1)%3]),ht.copy(be[(Fe+2)%3]);var At=Ze.norm(),vt=ht.norm();Ze.normalize(),ht.normalize();var lt=te.dot(Ze),gt=te.dot(ht);if(lt<At&&lt>-At&&gt<vt&&gt>-vt){var bt=Math.abs(Ye-Se-Ne);(ve===null||bt<ve)&&(ve=bt,O=lt,$=gt,H=Se,Pe.copy(De),Me.copy(Ze),T.copy(ht),Z++)}}}if(Z){ze=!0;var ke=this.createContactEquation(ye,Ie,oe,le);Pe.mult(-Ne,ke.ri),ke.ni.copy(Pe),ke.ni.negate(ke.ni),Pe.mult(H,Pe),Me.mult(O,Me),Pe.vadd(Me,Pe),T.mult($,T),Pe.vadd(T,ke.rj),ke.ri.vadd(fe,ke.ri),ke.ri.vsub(ye.position,ke.ri),ke.rj.vadd(me,ke.rj),ke.rj.vsub(Ie.position,ke.rj),this.result.push(ke),this.createFrictionEquationsFromContact(ke,this.frictionResult)}for(var Ge=re.get(),$t=se,ct=0;ct!==2&&!ze;ct++)for(var Et=0;Et!==2&&!ze;Et++)for(var Pt=0;Pt!==2&&!ze;Pt++)if(Ge.set(0,0,0),ct?Ge.vadd(be[0],Ge):Ge.vsub(be[0],Ge),Et?Ge.vadd(be[1],Ge):Ge.vsub(be[1],Ge),Pt?Ge.vadd(be[2],Ge):Ge.vsub(be[2],Ge),me.vadd(Ge,$t),$t.vsub(fe,$t),$t.norm2()<Ne*Ne){ze=!0;var ke=this.createContactEquation(ye,Ie,oe,le);ke.ri.copy($t),ke.ri.normalize(),ke.ni.copy(ke.ri),ke.ri.mult(Ne,ke.ri),ke.rj.copy(Ge),ke.ri.vadd(fe,ke.ri),ke.ri.vsub(ye.position,ke.ri),ke.rj.vadd(me,ke.rj),ke.rj.vsub(Ie.position,ke.rj),this.result.push(ke),this.createFrictionEquationsFromContact(ke,this.frictionResult)}re.release(Ge),Ge=null;for(var Ut=re.get(),Jt=re.get(),ke=re.get(),Ct=re.get(),bt=re.get(),Lt=be.length,ct=0;ct!==Lt&&!ze;ct++)for(var Et=0;Et!==Lt&&!ze;Et++)if(ct%3!==Et%3){be[Et].cross(be[ct],Ut),Ut.normalize(),be[ct].vadd(be[Et],Jt),ke.copy(fe),ke.vsub(Jt,ke),ke.vsub(me,ke);var ln=ke.dot(Ut);Ut.mult(ln,Ct);for(var Pt=0;Pt===ct%3||Pt===Et%3;)Pt++;bt.copy(fe),bt.vsub(Ct,bt),bt.vsub(Jt,bt),bt.vsub(me,bt);var cs=Math.abs(ln),vr=bt.norm();if(cs<be[Pt].norm()&&vr<Ne){ze=!0;var Tt=this.createContactEquation(ye,Ie,oe,le);Jt.vadd(Ct,Tt.rj),Tt.rj.copy(Tt.rj),bt.negate(Tt.ni),Tt.ni.normalize(),Tt.ri.copy(Tt.rj),Tt.ri.vadd(me,Tt.ri),Tt.ri.vsub(fe,Tt.ri),Tt.ri.normalize(),Tt.ri.mult(Ne,Tt.ri),Tt.ri.vadd(fe,Tt.ri),Tt.ri.vsub(ye.position,Tt.ri),Tt.rj.vadd(me,Tt.rj),Tt.rj.vsub(Ie.position,Tt.rj),this.result.push(Tt),this.createFrictionEquationsFromContact(Tt,this.frictionResult)}}re.release(Ut,Jt,ke,Ct,bt)};var P=new l,S=new l,ee=new l,de=new l,he=new l,pe=new l,Ee=new l,_e=new l,xe=new l,Ve=new l;v.prototype[s.types.SPHERE|s.types.CONVEXPOLYHEDRON]=v.prototype.sphereConvex=function(oe,le,fe,me,Je,Be,ye,Ie){var re=this.v3pool;fe.vsub(me,P);for(var be=le.faceNormals,Ne=le.faces,ze=le.vertices,Pe=oe.radius,Me=0;Me!==ze.length;Me++){var T=ze[Me],H=he;Be.vmult(T,H),me.vadd(H,H);var Z=de;if(H.vsub(fe,Z),Z.norm2()<Pe*Pe){$=!0;var O=this.createContactEquation(ye,Ie,oe,le);O.ri.copy(Z),O.ri.normalize(),O.ni.copy(O.ri),O.ri.mult(Pe,O.ri),H.vsub(me,O.rj),O.ri.vadd(fe,O.ri),O.ri.vsub(ye.position,O.ri),O.rj.vadd(me,O.rj),O.rj.vsub(Ie.position,O.rj),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult);return}}for(var $=!1,Me=0,ve=Ne.length;Me!==ve&&$===!1;Me++){var Fe=be[Me],Re=Ne[Me],De=pe;Be.vmult(Fe,De);var Se=Ee;Be.vmult(ze[Re[0]],Se),Se.vadd(me,Se);var Ye=_e;De.mult(-Pe,Ye),fe.vadd(Ye,Ye);var Ze=xe;Ye.vsub(Se,Ze);var ht=Ze.dot(De),At=Ve;if(fe.vsub(Se,At),ht<0&&At.dot(De)>0){for(var vt=[],lt=0,gt=Re.length;lt!==gt;lt++){var Ge=re.get();Be.vmult(ze[Re[lt]],Ge),me.vadd(Ge,Ge),vt.push(Ge)}if(K(vt,De,fe)){$=!0;var O=this.createContactEquation(ye,Ie,oe,le);De.mult(-Pe,O.ri),De.negate(O.ni);var $t=re.get();De.mult(-ht,$t);var ct=re.get();De.mult(-Pe,ct),fe.vsub(me,O.rj),O.rj.vadd(ct,O.rj),O.rj.vadd($t,O.rj),O.rj.vadd(me,O.rj),O.rj.vsub(Ie.position,O.rj),O.ri.vadd(fe,O.ri),O.ri.vsub(ye.position,O.ri),re.release($t),re.release(ct),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult);for(var lt=0,Et=vt.length;lt!==Et;lt++)re.release(vt[lt]);return}else for(var lt=0;lt!==Re.length;lt++){var Pt=re.get(),Ut=re.get();Be.vmult(ze[Re[(lt+1)%Re.length]],Pt),Be.vmult(ze[Re[(lt+2)%Re.length]],Ut),me.vadd(Pt,Pt),me.vadd(Ut,Ut);var Jt=S;Ut.vsub(Pt,Jt);var ke=ee;Jt.unit(ke);var Ct=re.get(),bt=re.get();fe.vsub(Pt,bt);var Lt=bt.dot(ke);ke.mult(Lt,Ct),Ct.vadd(Pt,Ct);var ln=re.get();if(Ct.vsub(fe,ln),Lt>0&&Lt*Lt<Jt.norm2()&&ln.norm2()<Pe*Pe){var O=this.createContactEquation(ye,Ie,oe,le);Ct.vsub(me,O.rj),Ct.vsub(fe,O.ni),O.ni.normalize(),O.ni.mult(Pe,O.ri),O.rj.vadd(me,O.rj),O.rj.vsub(Ie.position,O.rj),O.ri.vadd(fe,O.ri),O.ri.vsub(ye.position,O.ri),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult);for(var lt=0,Et=vt.length;lt!==Et;lt++)re.release(vt[lt]);re.release(Pt),re.release(Ut),re.release(Ct),re.release(ln),re.release(bt);return}re.release(Pt),re.release(Ut),re.release(Ct),re.release(ln),re.release(bt)}for(var lt=0,Et=vt.length;lt!==Et;lt++)re.release(vt[lt])}}},new l,new l,v.prototype[s.types.PLANE|s.types.BOX]=v.prototype.planeBox=function(oe,le,fe,me,Je,Be,ye,Ie){le.convexPolyhedronRepresentation.material=le.material,le.convexPolyhedronRepresentation.collisionResponse=le.collisionResponse,this.planeConvex(oe,le.convexPolyhedronRepresentation,fe,me,Je,Be,ye,Ie)};var je=new l,ge=new l,at=new l,et=new l;v.prototype[s.types.PLANE|s.types.CONVEXPOLYHEDRON]=v.prototype.planeConvex=function(oe,le,fe,me,Je,Be,ye,Ie){var re=je,be=ge;be.set(0,0,1),Je.vmult(be,be);for(var Ne=0,ze=at,Pe=0;Pe!==le.vertices.length;Pe++){re.copy(le.vertices[Pe]),Be.vmult(re,re),me.vadd(re,re),re.vsub(fe,ze);var Me=be.dot(ze);if(Me<=0){var T=this.createContactEquation(ye,Ie,oe,le),H=et;be.mult(be.dot(ze),H),re.vsub(H,H),H.vsub(fe,T.ri),T.ni.copy(be),re.vsub(me,T.rj),T.ri.vadd(fe,T.ri),T.ri.vsub(ye.position,T.ri),T.rj.vadd(me,T.rj),T.rj.vsub(Ie.position,T.rj),this.result.push(T),Ne++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(T,this.frictionResult)}}this.enableFrictionReduction&&Ne&&this.createFrictionFromAverage(Ne)};var qe=new l,He=new l;v.prototype[s.types.CONVEXPOLYHEDRON]=v.prototype.convexConvex=function(oe,le,fe,me,Je,Be,ye,Ie,re,be,Ne,ze){var Pe=qe;if(!(fe.distanceTo(me)>oe.boundingSphereRadius+le.boundingSphereRadius)&&oe.findSeparatingAxis(le,fe,Je,me,Be,Pe,Ne,ze)){var Me=[],T=He;oe.clipAgainstHull(fe,Je,le,me,Be,Pe,-100,100,Me);for(var H=0,Z=0;Z!==Me.length;Z++){var O=this.createContactEquation(ye,Ie,oe,le,re,be),$=O.ri,ve=O.rj;Pe.negate(O.ni),Me[Z].normal.negate(T),T.mult(Me[Z].depth,T),Me[Z].point.vadd(T,$),ve.copy(Me[Z].point),$.vsub(fe,$),ve.vsub(me,ve),$.vadd(fe,$),$.vsub(ye.position,$),ve.vadd(me,ve),ve.vsub(Ie.position,ve),this.result.push(O),H++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(O,this.frictionResult)}this.enableFrictionReduction&&H&&this.createFrictionFromAverage(H)}};var Oe=new l,Qe=new l,nt=new l;v.prototype[s.types.PLANE|s.types.PARTICLE]=v.prototype.planeParticle=function(oe,le,fe,me,Je,Be,ye,Ie){var re=Oe;re.set(0,0,1),ye.quaternion.vmult(re,re);var be=Qe;me.vsub(ye.position,be);var Ne=re.dot(be);if(Ne<=0){var ze=this.createContactEquation(Ie,ye,le,oe);ze.ni.copy(re),ze.ni.negate(ze.ni),ze.ri.set(0,0,0);var Pe=nt;re.mult(re.dot(me),Pe),me.vsub(Pe,Pe),ze.rj.copy(Pe),this.result.push(ze),this.createFrictionEquationsFromContact(ze,this.frictionResult)}};var ft=new l;v.prototype[s.types.PARTICLE|s.types.SPHERE]=v.prototype.sphereParticle=function(oe,le,fe,me,Je,Be,ye,Ie){var re=ft;re.set(0,0,1),me.vsub(fe,re);var be=re.norm2();if(be<=oe.radius*oe.radius){var Ne=this.createContactEquation(Ie,ye,le,oe);re.normalize(),Ne.rj.copy(re),Ne.rj.mult(oe.radius,Ne.rj),Ne.ni.copy(re),Ne.ni.negate(Ne.ni),Ne.ri.set(0,0,0),this.result.push(Ne),this.createFrictionEquationsFromContact(Ne,this.frictionResult)}};var $e=new u,Te=new l;new l;var k=new l,we=new l,Le=new l;v.prototype[s.types.PARTICLE|s.types.CONVEXPOLYHEDRON]=v.prototype.convexParticle=function(oe,le,fe,me,Je,Be,ye,Ie){var re=-1,be=k,Ne=Le,ze=null,Pe=Te;if(Pe.copy(me),Pe.vsub(fe,Pe),Je.conjugate($e),$e.vmult(Pe,Pe),oe.pointIsInside(Pe)){oe.worldVerticesNeedsUpdate&&oe.computeWorldVertices(fe,Je),oe.worldFaceNormalsNeedsUpdate&&oe.computeWorldFaceNormals(Je);for(var Me=0,T=oe.faces.length;Me!==T;Me++){var H=[oe.worldVertices[oe.faces[Me][0]]],Z=oe.worldFaceNormals[Me];me.vsub(H[0],we);var O=-Z.dot(we);(ze===null||Math.abs(O)<Math.abs(ze))&&(ze=O,re=Me,be.copy(Z))}if(re!==-1){var $=this.createContactEquation(Ie,ye,le,oe);be.mult(ze,Ne),Ne.vadd(me,Ne),Ne.vsub(fe,Ne),$.rj.copy(Ne),be.negate($.ni),$.ri.set(0,0,0);var ve=$.ri,Fe=$.rj;ve.vadd(me,ve),ve.vsub(Ie.position,ve),Fe.vadd(fe,Fe),Fe.vsub(ye.position,Fe),this.result.push($),this.createFrictionEquationsFromContact($,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},v.prototype[s.types.BOX|s.types.HEIGHTFIELD]=v.prototype.boxHeightfield=function(oe,le,fe,me,Je,Be,ye,Ie){oe.convexPolyhedronRepresentation.material=oe.material,oe.convexPolyhedronRepresentation.collisionResponse=oe.collisionResponse,this.convexHeightfield(oe.convexPolyhedronRepresentation,le,fe,me,Je,Be,ye,Ie)};var Ke=new l,Xe=new l,pt=[0];v.prototype[s.types.CONVEXPOLYHEDRON|s.types.HEIGHTFIELD]=v.prototype.convexHeightfield=function(oe,le,fe,me,Je,Be,ye,Ie){var re=le.data,be=le.elementSize,Ne=oe.boundingSphereRadius,ze=Xe,Pe=pt,Me=Ke;h.pointToLocalFrame(me,Be,fe,Me);var T=Math.floor((Me.x-Ne)/be)-1,H=Math.ceil((Me.x+Ne)/be)+1,Z=Math.floor((Me.y-Ne)/be)-1,O=Math.ceil((Me.y+Ne)/be)+1;if(!(H<0||O<0||T>re.length||Z>re[0].length)){T<0&&(T=0),H<0&&(H=0),Z<0&&(Z=0),O<0&&(O=0),T>=re.length&&(T=re.length-1),H>=re.length&&(H=re.length-1),O>=re[0].length&&(O=re[0].length-1),Z>=re[0].length&&(Z=re[0].length-1);var $=[];le.getRectMinMax(T,Z,H,O,$);var ve=$[0],Fe=$[1];if(!(Me.z-Ne>Fe||Me.z+Ne<ve))for(var Re=T;Re<H;Re++)for(var De=Z;De<O;De++)le.getConvexTrianglePillar(Re,De,!1),h.pointToWorldFrame(me,Be,le.pillarOffset,ze),fe.distanceTo(ze)<le.pillarConvex.boundingSphereRadius+oe.boundingSphereRadius&&this.convexConvex(oe,le.pillarConvex,fe,ze,Je,Be,ye,Ie,null,null,Pe,null),le.getConvexTrianglePillar(Re,De,!0),h.pointToWorldFrame(me,Be,le.pillarOffset,ze),fe.distanceTo(ze)<le.pillarConvex.boundingSphereRadius+oe.boundingSphereRadius&&this.convexConvex(oe,le.pillarConvex,fe,ze,Je,Be,ye,Ie,null,null,Pe,null)}};var mt=new l,ot=new l;v.prototype[s.types.SPHERE|s.types.HEIGHTFIELD]=v.prototype.sphereHeightfield=function(oe,le,fe,me,Je,Be,ye,Ie){var re=le.data,be=oe.radius,Ne=le.elementSize,ze=ot,Pe=mt;h.pointToLocalFrame(me,Be,fe,Pe);var Me=Math.floor((Pe.x-be)/Ne)-1,T=Math.ceil((Pe.x+be)/Ne)+1,H=Math.floor((Pe.y-be)/Ne)-1,Z=Math.ceil((Pe.y+be)/Ne)+1;if(!(T<0||Z<0||Me>re.length||Z>re[0].length)){Me<0&&(Me=0),T<0&&(T=0),H<0&&(H=0),Z<0&&(Z=0),Me>=re.length&&(Me=re.length-1),T>=re.length&&(T=re.length-1),Z>=re[0].length&&(Z=re[0].length-1),H>=re[0].length&&(H=re[0].length-1);var O=[];le.getRectMinMax(Me,H,T,Z,O);var $=O[0],ve=O[1];if(!(Pe.z-be>ve||Pe.z+be<$))for(var Fe=this.result,Re=Me;Re<T;Re++)for(var De=H;De<Z;De++){var Se=Fe.length;le.getConvexTrianglePillar(Re,De,!1),h.pointToWorldFrame(me,Be,le.pillarOffset,ze),fe.distanceTo(ze)<le.pillarConvex.boundingSphereRadius+oe.boundingSphereRadius&&this.sphereConvex(oe,le.pillarConvex,fe,ze,Je,Be,ye,Ie),le.getConvexTrianglePillar(Re,De,!0),h.pointToWorldFrame(me,Be,le.pillarOffset,ze),fe.distanceTo(ze)<le.pillarConvex.boundingSphereRadius+oe.boundingSphereRadius&&this.sphereConvex(oe,le.pillarConvex,fe,ze,Je,Be,ye,Ie);var Ye=Fe.length-Se;if(Ye>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(t,n,i){n.exports=x;var r=t("../shapes/Shape"),s=t("../math/Vec3"),o=t("../math/Quaternion"),l=t("../solver/GSSolver");t("../utils/Vec3Pool"),t("../equations/ContactEquation"),t("../equations/FrictionEquation");var h=t("./Narrowphase"),u=t("../utils/EventTarget"),c=t("../collision/ArrayCollisionMatrix"),d=t("../material/Material"),f=t("../material/ContactMaterial"),v=t("../objects/Body"),g=t("../utils/TupleDictionary"),m=t("../collision/RaycastResult"),p=t("../collision/AABB"),_=t("../collision/Ray"),y=t("../collision/NaiveBroadphase");function x(){u.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new s,this.broadphase=new y,this.bodies=[],this.solver=new l,this.constraints=[],this.narrowphase=new h(this),this.collisionMatrix=new c,this.collisionMatrixPrevious=new c,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new g,this.defaultMaterial=new d("default"),this.defaultContactMaterial=new f(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}x.prototype=new u,new p;var A=new _;if(x.prototype.getContactMaterial=function(D,j){return this.contactMaterialTable.get(D.id,j.id)},x.prototype.numObjects=function(){return this.bodies.length},x.prototype.collisionMatrixTick=function(){var D=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=D,this.collisionMatrix.reset()},x.prototype.add=x.prototype.addBody=function(D){this.bodies.indexOf(D)===-1&&(D.index=this.bodies.length,this.bodies.push(D),D.world=this,D.initPosition.copy(D.position),D.initVelocity.copy(D.velocity),D.timeLastSleepy=this.time,D instanceof v&&(D.initAngularVelocity.copy(D.angularVelocity),D.initQuaternion.copy(D.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=D,this.dispatchEvent(this.addBodyEvent))},x.prototype.addConstraint=function(D){this.constraints.push(D)},x.prototype.removeConstraint=function(D){var j=this.constraints.indexOf(D);j!==-1&&this.constraints.splice(j,1)},x.prototype.rayTest=function(D,j,W){W instanceof m?this.raycastClosest(D,j,{skipBackfaces:!0},W):this.raycastAll(D,j,{skipBackfaces:!0},W)},x.prototype.raycastAll=function(D,j,W,N){return W.mode=_.ALL,W.from=D,W.to=j,W.callback=N,A.intersectWorld(this,W)},x.prototype.raycastAny=function(D,j,W,N){return W.mode=_.ANY,W.from=D,W.to=j,W.result=N,A.intersectWorld(this,W)},x.prototype.raycastClosest=function(D,j,W,N){return W.mode=_.CLOSEST,W.from=D,W.to=j,W.result=N,A.intersectWorld(this,W)},x.prototype.remove=function(D){D.world=null;var j=this.bodies.length-1,W=this.bodies,N=W.indexOf(D);if(N!==-1){W.splice(N,1);for(var G=0;G!==W.length;G++)W[G].index=G;this.collisionMatrix.setNumObjects(j),this.removeBodyEvent.body=D,this.dispatchEvent(this.removeBodyEvent)}},x.prototype.removeBody=x.prototype.remove,x.prototype.addMaterial=function(D){this.materials.push(D)},x.prototype.addContactMaterial=function(D){this.contactmaterials.push(D),this.contactMaterialTable.set(D.materials[0].id,D.materials[1].id,D)},typeof performance>"u"&&(performance={}),!performance.now){var b=Date.now();performance.timing&&performance.timing.navigationStart&&(b=performance.timing.navigationStart),performance.now=function(){return Date.now()-b}}var I=new s;x.prototype.step=function(D,j,W){if(W=W||10,j=j||0,j===0)this.internalStep(D),this.time+=D;else{var N=Math.floor((this.time+j)/D)-Math.floor(this.time/D);N=Math.min(N,W);for(var G=performance.now(),w=0;w!==N&&(this.internalStep(D),!(performance.now()-G>D*1e3));w++);this.time+=j;for(var R=this.time%D,C=R/D,X=I,ne=this.bodies,ie=0;ie!==ne.length;ie++){var K=ne[ie];K.type!==v.STATIC&&K.sleepState!==v.SLEEPING?(K.position.vsub(K.previousPosition,X),X.scale(C,X),K.position.vadd(X,K.interpolatedPosition)):(K.interpolatedPosition.copy(K.position),K.interpolatedQuaternion.copy(K.quaternion))}}};var B={type:"postStep"},M={type:"preStep"},E={type:"collide",body:null,contact:null},L=[],z=[],q=[],U=[];new s,new s,new s,new s,new s,new s,new s,new s,new s,new o;var V=new o,Q=new o,F=new s;x.prototype.internalStep=function(D){this.dt=D;var j=this.contacts,W=q,N=U,G=this.numObjects(),w=this.bodies,R=this.solver,C=this.gravity,X=this.doProfiling,ne=this.profile,ie=v.DYNAMIC,K,te=this.constraints,ce=z;C.norm();var Y=C.x,Ce=C.y,ue=C.z,se=0;for(X&&(K=performance.now()),se=0;se!==G;se++){var ae=w[se];if(ae.type&ie){var We=ae.force,Ae=ae.mass;We.x+=Ae*Y,We.y+=Ae*Ce,We.z+=Ae*ue}}for(var se=0,P=this.subsystems.length;se!==P;se++)this.subsystems[se].update();X&&(K=performance.now()),W.length=0,N.length=0,this.broadphase.collisionPairs(this,W,N),X&&(ne.broadphase=performance.now()-K);var qe=te.length;for(se=0;se!==qe;se++){var S=te[se];if(!S.collideConnected)for(var ee=W.length-1;ee>=0;ee-=1)(S.bodyA===W[ee]&&S.bodyB===N[ee]||S.bodyB===W[ee]&&S.bodyA===N[ee])&&(W.splice(ee,1),N.splice(ee,1))}this.collisionMatrixTick(),X&&(K=performance.now());var de=L,he=j.length;for(se=0;se!==he;se++)de.push(j[se]);j.length=0;var pe=this.frictionEquations.length;for(se=0;se!==pe;se++)ce.push(this.frictionEquations[se]);this.frictionEquations.length=0,this.narrowphase.getContacts(W,N,this,j,de,this.frictionEquations,ce),X&&(ne.narrowphase=performance.now()-K),X&&(K=performance.now());for(var se=0;se<this.frictionEquations.length;se++)R.addEquation(this.frictionEquations[se]);for(var Ee=j.length,_e=0;_e!==Ee;_e++){var S=j[_e],ae=S.bi,xe=S.bj;S.si,S.sj;var Ve;if(ae.material&&xe.material?Ve=this.getContactMaterial(ae.material,xe.material)||this.defaultContactMaterial:Ve=this.defaultContactMaterial,Ve.friction,ae.material&&xe.material&&(ae.material.friction>=0&&xe.material.friction>=0&&ae.material.friction*xe.material.friction,ae.material.restitution>=0&&xe.material.restitution>=0&&(S.restitution=ae.material.restitution*xe.material.restitution)),R.addEquation(S),ae.allowSleep&&ae.type===v.DYNAMIC&&ae.sleepState===v.SLEEPING&&xe.sleepState===v.AWAKE&&xe.type!==v.STATIC){var je=xe.velocity.norm2()+xe.angularVelocity.norm2(),ge=Math.pow(xe.sleepSpeedLimit,2);je>=ge*2&&(ae._wakeUpAfterNarrowphase=!0)}if(xe.allowSleep&&xe.type===v.DYNAMIC&&xe.sleepState===v.SLEEPING&&ae.sleepState===v.AWAKE&&ae.type!==v.STATIC){var at=ae.velocity.norm2()+ae.angularVelocity.norm2(),et=Math.pow(ae.sleepSpeedLimit,2);at>=et*2&&(xe._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(ae,xe,!0),this.collisionMatrixPrevious.get(ae,xe)||(E.body=xe,E.contact=S,ae.dispatchEvent(E),E.body=ae,xe.dispatchEvent(E))}for(X&&(ne.makeContactConstraints=performance.now()-K,K=performance.now()),se=0;se!==G;se++){var ae=w[se];ae._wakeUpAfterNarrowphase&&(ae.wakeUp(),ae._wakeUpAfterNarrowphase=!1)}var qe=te.length;for(se=0;se!==qe;se++){var S=te[se];S.update();for(var ee=0,He=S.equations.length;ee!==He;ee++){var Oe=S.equations[ee];R.addEquation(Oe)}}R.solve(D,this),X&&(ne.solve=performance.now()-K),R.removeAllEquations();var Qe=Math.pow;for(se=0;se!==G;se++){var ae=w[se];if(ae.type&ie){var nt=Qe(1-ae.linearDamping,D),ft=ae.velocity;ft.mult(nt,ft);var $e=ae.angularVelocity;if($e){var Te=Qe(1-ae.angularDamping,D);$e.mult(Te,$e)}}}for(this.dispatchEvent(M),se=0;se!==G;se++){var ae=w[se];ae.preStep&&ae.preStep.call(ae)}X&&(K=performance.now());var k=V,we=Q,Le=this.stepnumber,Ke=v.DYNAMIC|v.KINEMATIC,Xe=Le%(this.quatNormalizeSkip+1)===0,pt=this.quatNormalizeFast,mt=D*.5;for(r.types.PLANE,r.types.CONVEXPOLYHEDRON,se=0;se!==G;se++){var ot=w[se],oe=ot.force,le=ot.torque;if(ot.type&Ke&&ot.sleepState!==v.SLEEPING){var fe=ot.velocity,me=ot.angularVelocity,Je=ot.position,Be=ot.quaternion,ye=ot.invMass,Ie=ot.invInertiaWorld;fe.x+=oe.x*ye*D,fe.y+=oe.y*ye*D,fe.z+=oe.z*ye*D,ot.angularVelocity&&(Ie.vmult(le,F),F.mult(D,F),F.vadd(me,me)),Je.x+=fe.x*D,Je.y+=fe.y*D,Je.z+=fe.z*D,ot.angularVelocity&&(k.set(me.x,me.y,me.z,0),k.mult(Be,we),Be.x+=mt*we.x,Be.y+=mt*we.y,Be.z+=mt*we.z,Be.w+=mt*we.w,Xe&&(pt?Be.normalizeFast():Be.normalize())),ot.aabb&&(ot.aabbNeedsUpdate=!0),ot.updateInertiaWorld&&ot.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,X&&(ne.integrate=performance.now()-K),this.time+=D,this.stepnumber+=1,this.dispatchEvent(B),se=0;se!==G;se++){var ae=w[se],re=ae.postStep;re&&re.call(ae)}if(this.allowSleep)for(se=0;se!==G;se++)w[se].sleepTick(this.time)},x.prototype.clearForces=function(){for(var D=this.bodies,j=D.length,W=0;W!==j;W++){var N=D[W];N.force,N.torque,N.force.set(0,0,0),N.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})})(lc);var og=lc.exports;const Zt=ag(og),$i=new Fm;new wv;const fi=new Zt.World,lg=[];fi.gravity.set(0,-9.82,0);const cg=new Zt.Material("concrete"),hg=new Zt.Material("plastic"),ug=new Zt.ContactMaterial(cg,hg,{friction:.1,restitution:.7}),gl=new Zt.Material("default"),cc=new Zt.ContactMaterial(gl,gl,{friction:.1,restitution:.7});fi.addContactMaterial(cc);fi.defaultContactMaterial=cc;fi.addContactMaterial(ug);const dg=new as(20,20),fg=new In({color:2845322}),Ma=new jt(dg,fg);Ma.rotation.x=Math.PI*-.5;$i.add(Ma);const pg=new Zt.Plane,mr=new Zt.Body;mr.mass=0;mr.quaternion.setFromAxisAngle(new Zt.Vec3(-1,0,0),Math.PI*.5);mr.addShape(pg);fi.addBody(mr);mr.quaternion.setFromAxisAngle(new Zt.Vec3(-1,0,0),Math.PI*.5);const mg=new Ym(.1),vg=new In({color:16776960}),Sa=new jt(mg,vg);Sa.position.set(0,1,0);$i.add(Sa);const gg=new Zt.Sphere(.1),jr=new Zt.Body({mass:1,position:new Zt.Vec3(0,3,0),shape:gg});fi.addBody(jr);const vn={width:window.innerWidth,height:window.innerHeight},jn=new Xt(75,vn.width/vn.height,.1,1e3);jn.position.z=4;jn.position.y=4;jn.lookAt(Ma.position);$i.add(jn);const yn=new Jl;yn.setSize(vn.width,vn.height);yn.shadowMap.enabled=!0;document.body.appendChild(yn.domElement);yn.render($i,jn);yn.xr.enabled=!0;const hc=new pv(16777215,1);hc.intensity=3;$i.add(hc);const _g=new vv;let _l=0;const uc=()=>{const a=_g.getElapsedTime(),e=a-_l;_l=a,Sa.position.copy(jr.position),jr.applyForce(new Zt.Vec3(-.5,0,0),jr.position),yn.render($i,jn),yn.setAnimationLoop(uc);for(const t of lg)t.mesh.position.copy(t.body.position);fi.step(1/60,e,3)};function dc(){requestAnimationFrame(dc),uc()}dc();document.body.appendChild(Xi.createButton(yn));window.addEventListener("resize",()=>{vn.width=window.innerWidth,vn.height=window.innerHeight,jn.aspect=vn.width/vn.height,jn.updateProjectionMatrix(),yn.setSize(vn.width,vn.height),yn.setPixelRatio(Math.min(window.devicePixelRatio,2))});
