(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vo="160",hu=0,ra=1,du=2,cc=1,fu=2,Un=3,On=0,Qt=1,bn=2,Jn=0,Yi=1,sa=2,oa=3,aa=4,pu=5,fi=100,mu=101,vu=102,la=103,ca=104,gu=200,_u=201,xu=202,yu=203,xo=204,yo=205,Eu=206,Su=207,Mu=208,bu=209,wu=210,Tu=211,Au=212,Ru=213,Cu=214,Lu=0,Pu=1,Iu=2,vs=3,Nu=4,Du=5,Uu=6,Fu=7,uc=0,Bu=1,Ou=2,Qn=0,zu=1,Vu=2,ku=3,Hu=4,Gu=5,Wu=6,ua="attached",Xu="detached",hc=300,Zi=301,$i=302,Eo=303,So=304,ws=306,Ji=1e3,ln=1001,gs=1002,Vt=1003,Mo=1004,ps=1005,$t=1006,dc=1007,xi=1008,ei=1009,qu=1010,Yu=1011,ko=1012,fc=1013,Kn=1014,Fn=1015,Cr=1016,pc=1017,mc=1018,vi=1020,ju=1021,cn=1023,Ku=1024,Zu=1025,gi=1026,Qi=1027,$u=1028,vc=1029,Ju=1030,gc=1031,_c=1033,Ds=33776,Us=33777,Fs=33778,Bs=33779,ha=35840,da=35841,fa=35842,pa=35843,xc=36196,ma=37492,va=37496,ga=37808,_a=37809,xa=37810,ya=37811,Ea=37812,Sa=37813,Ma=37814,ba=37815,wa=37816,Ta=37817,Aa=37818,Ra=37819,Ca=37820,La=37821,Os=36492,Pa=36494,Ia=36495,Qu=36283,Na=36284,Da=36285,Ua=36286,Lr=2300,er=2301,zs=2302,Fa=2400,Ba=2401,Oa=2402,eh=2500,th=0,yc=1,bo=2,Ec=3e3,_i=3001,nh=3200,ih=3201,Sc=0,rh=1,un="",Pt="srgb",Ht="srgb-linear",Ho="display-p3",Ts="display-p3-linear",_s="linear",bt="srgb",xs="rec709",ys="p3",wi=7680,za=519,sh=512,oh=513,ah=514,Mc=515,lh=516,ch=517,uh=518,hh=519,wo=35044,Va="300 es",To=1035,Bn=2e3,Es=2001;class or{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ka=1234567;const Mr=Math.PI/180,tr=180/Math.PI;function gn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[s&255]+Wt[s>>8&255]+Wt[s>>16&255]+Wt[s>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function qt(s,e,t){return Math.max(e,Math.min(t,s))}function Go(s,e){return(s%e+e)%e}function dh(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function fh(s,e,t){return s!==e?(t-s)/(e-s):0}function br(s,e,t){return(1-t)*s+t*e}function ph(s,e,t,n){return br(s,e,1-Math.exp(-t*n))}function mh(s,e=1){return e-Math.abs(Go(s,e*2)-e)}function vh(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function gh(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function _h(s,e){return s+Math.floor(Math.random()*(e-s+1))}function xh(s,e){return s+Math.random()*(e-s)}function yh(s){return s*(.5-Math.random())}function Eh(s){s!==void 0&&(ka=s);let e=ka+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sh(s){return s*Mr}function Mh(s){return s*tr}function Ao(s){return(s&s-1)===0&&s!==0}function bh(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ss(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function wh(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),u=r((e+n)/2),h=o((e+n)/2),c=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),v=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*c,l*d,a*u);break;case"YZY":s.set(l*d,a*h,l*c,a*u);break;case"ZXZ":s.set(l*c,l*d,a*h,a*u);break;case"XZX":s.set(a*h,l*v,l*f,a*u);break;case"YXY":s.set(l*f,a*h,l*v,a*u);break;case"ZYZ":s.set(l*v,l*f,a*h,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function wn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function St(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Th={DEG2RAD:Mr,RAD2DEG:tr,generateUUID:gn,clamp:qt,euclideanModulo:Go,mapLinear:dh,inverseLerp:fh,lerp:br,damp:ph,pingpong:mh,smoothstep:vh,smootherstep:gh,randInt:_h,randFloat:xh,randFloatSpread:yh,seededRandom:Eh,degToRad:Sh,radToDeg:Mh,isPowerOfTwo:Ao,ceilPowerOfTwo:bh,floorPowerOfTwo:Ss,setQuaternionFromProperEuler:wh,normalize:St,denormalize:wn};class pt{constructor(e=0,t=0){pt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,t,n,i,r,o,a,l,u){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,u)}set(e,t,n,i,r,o,a,l,u){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],u=n[1],h=n[4],c=n[7],d=n[2],f=n[5],v=n[8],g=i[0],m=i[3],p=i[6],_=i[1],y=i[4],x=i[7],w=i[2],A=i[5],I=i[8];return r[0]=o*g+a*_+l*w,r[3]=o*m+a*y+l*A,r[6]=o*p+a*x+l*I,r[1]=u*g+h*_+c*w,r[4]=u*m+h*y+c*A,r[7]=u*p+h*x+c*I,r[2]=d*g+f*_+v*w,r[5]=d*m+f*y+v*A,r[8]=d*p+f*x+v*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8];return t*o*h-t*a*u-n*r*h+n*a*l+i*r*u-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],c=h*o-a*u,d=a*l-h*r,f=u*r-o*l,v=t*c+n*d+i*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=c*g,e[1]=(i*u-h*n)*g,e[2]=(a*n-i*o)*g,e[3]=d*g,e[4]=(h*t-i*l)*g,e[5]=(i*r-a*t)*g,e[6]=f*g,e[7]=(n*l-u*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),u=Math.sin(r);return this.set(n*l,n*u,-n*(l*o+u*a)+o+e,-i*u,i*l,-i*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Vs.makeScale(e,t)),this}rotate(e){return this.premultiply(Vs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vs=new ot;function bc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Pr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ah(){const s=Pr("canvas");return s.style.display="block",s}const Ha={};function wr(s){s in Ha||(Ha[s]=!0,console.warn(s))}const Ga=new ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wa=new ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Br={[Ht]:{transfer:_s,primaries:xs,toReference:s=>s,fromReference:s=>s},[Pt]:{transfer:bt,primaries:xs,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ts]:{transfer:_s,primaries:ys,toReference:s=>s.applyMatrix3(Wa),fromReference:s=>s.applyMatrix3(Ga)},[Ho]:{transfer:bt,primaries:ys,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Wa),fromReference:s=>s.applyMatrix3(Ga).convertLinearToSRGB()}},Rh=new Set([Ht,Ts]),yt={enabled:!0,_workingColorSpace:Ht,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Rh.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Br[e].toReference,i=Br[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Br[s].primaries},getTransfer:function(s){return s===un?_s:Br[s].transfer}};function ji(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ks(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ti;class wc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ti===void 0&&(Ti=Pr("canvas")),Ti.width=e.width,Ti.height=e.height;const n=Ti.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ti}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Pr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ji(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ji(t[n]/255)*255):t[n]=ji(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ch=0;class Tc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=gn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Hs(i[o].image)):r.push(Hs(i[o]))}else r=Hs(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Hs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?wc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lh=0;class Gt extends or{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,n=ln,i=ln,r=$t,o=xi,a=cn,l=ei,u=Gt.DEFAULT_ANISOTROPY,h=un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=gn(),this.name="",this.source=new Tc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(wr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===_i?Pt:un),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ji:e.x=e.x-Math.floor(e.x);break;case ln:e.x=e.x<0?0:1;break;case gs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ji:e.y=e.y-Math.floor(e.y);break;case ln:e.y=e.y<0?0:1;break;case gs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return wr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Pt?_i:Ec}set encoding(e){wr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===_i?Pt:un}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=hc;Gt.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,n=0,i=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,u=l[0],h=l[4],c=l[8],d=l[1],f=l[5],v=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(c-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(c+g)<.1&&Math.abs(v+m)<.1&&Math.abs(u+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(u+1)/2,x=(f+1)/2,w=(p+1)/2,A=(h+d)/4,I=(c+g)/4,B=(v+m)/4;return y>x&&y>w?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=A/n,r=I/n):x>w?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=A/i,r=B/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=I/r,i=B/r),this.set(n,i,r,t),this}let _=Math.sqrt((m-v)*(m-v)+(c-g)*(c-g)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(c-g)/_,this.z=(d-h)/_,this.w=Math.acos((u+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ph extends or{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(wr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===_i?Pt:un),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Gt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Tc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yi extends Ph{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ac extends Gt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ih extends Gt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ii{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],u=n[i+1],h=n[i+2],c=n[i+3];const d=r[o+0],f=r[o+1],v=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=h,e[t+3]=c;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=v,e[t+3]=g;return}if(c!==g||l!==d||u!==f||h!==v){let m=1-a;const p=l*d+u*f+h*v+c*g,_=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const w=Math.sqrt(y),A=Math.atan2(w,p*_);m=Math.sin(m*A)/w,a=Math.sin(a*A)/w}const x=a*_;if(l=l*m+d*x,u=u*m+f*x,h=h*m+v*x,c=c*m+g*x,m===1-a){const w=1/Math.sqrt(l*l+u*u+h*h+c*c);l*=w,u*=w,h*=w,c*=w}}e[t]=l,e[t+1]=u,e[t+2]=h,e[t+3]=c}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],u=n[i+2],h=n[i+3],c=r[o],d=r[o+1],f=r[o+2],v=r[o+3];return e[t]=a*v+h*c+l*f-u*d,e[t+1]=l*v+h*d+u*c-a*f,e[t+2]=u*v+h*f+a*d-l*c,e[t+3]=h*v-a*c-l*d-u*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(n/2),h=a(i/2),c=a(r/2),d=l(n/2),f=l(i/2),v=l(r/2);switch(o){case"XYZ":this._x=d*h*c+u*f*v,this._y=u*f*c-d*h*v,this._z=u*h*v+d*f*c,this._w=u*h*c-d*f*v;break;case"YXZ":this._x=d*h*c+u*f*v,this._y=u*f*c-d*h*v,this._z=u*h*v-d*f*c,this._w=u*h*c+d*f*v;break;case"ZXY":this._x=d*h*c-u*f*v,this._y=u*f*c+d*h*v,this._z=u*h*v+d*f*c,this._w=u*h*c-d*f*v;break;case"ZYX":this._x=d*h*c-u*f*v,this._y=u*f*c+d*h*v,this._z=u*h*v-d*f*c,this._w=u*h*c+d*f*v;break;case"YZX":this._x=d*h*c+u*f*v,this._y=u*f*c+d*h*v,this._z=u*h*v-d*f*c,this._w=u*h*c-d*f*v;break;case"XZY":this._x=d*h*c-u*f*v,this._y=u*f*c-d*h*v,this._z=u*h*v+d*f*c,this._w=u*h*c+d*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],u=t[2],h=t[6],c=t[10],d=n+a+c;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-u)*f,this._z=(o-i)*f}else if(n>a&&n>c){const f=2*Math.sqrt(1+n-a-c);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+u)/f}else if(a>c){const f=2*Math.sqrt(1+a-n-c);this._w=(r-u)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+c-n-a);this._w=(o-i)/f,this._x=(r+u)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,u=t._z,h=t._w;return this._x=n*h+o*a+i*u-r*l,this._y=i*h+o*l+r*a-n*u,this._z=r*h+o*u+n*l-i*a,this._w=o*h-n*a-i*l-r*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const u=Math.sqrt(l),h=Math.atan2(u,a),c=Math.sin((1-t)*h)/u,d=Math.sin(t*h)/u;return this._w=o*c+this._w*d,this._x=n*c+this._x*d,this._y=i*c+this._y*d,this._z=r*c+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,t=0,n=0){J.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*i-a*n),h=2*(a*t-r*i),c=2*(r*n-o*t);return this.x=t+l*u+o*c-a*h,this.y=n+l*h+a*u-r*c,this.z=i+l*c+r*h-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Gs.copy(this).projectOnVector(e),this.sub(Gs)}reflect(e){return this.sub(Gs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gs=new J,Xa=new ii;class Vn{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,fn):fn.fromBufferAttribute(r,o),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Or.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Or.copy(n.boundingBox)),Or.applyMatrix4(e.matrixWorld),this.union(Or)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dr),zr.subVectors(this.max,dr),Ai.subVectors(e.a,dr),Ri.subVectors(e.b,dr),Ci.subVectors(e.c,dr),Hn.subVectors(Ri,Ai),Gn.subVectors(Ci,Ri),oi.subVectors(Ai,Ci);let t=[0,-Hn.z,Hn.y,0,-Gn.z,Gn.y,0,-oi.z,oi.y,Hn.z,0,-Hn.x,Gn.z,0,-Gn.x,oi.z,0,-oi.x,-Hn.y,Hn.x,0,-Gn.y,Gn.x,0,-oi.y,oi.x,0];return!Ws(t,Ai,Ri,Ci,zr)||(t=[1,0,0,0,1,0,0,0,1],!Ws(t,Ai,Ri,Ci,zr))?!1:(Vr.crossVectors(Hn,Gn),t=[Vr.x,Vr.y,Vr.z],Ws(t,Ai,Ri,Ci,zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Cn=[new J,new J,new J,new J,new J,new J,new J,new J],fn=new J,Or=new Vn,Ai=new J,Ri=new J,Ci=new J,Hn=new J,Gn=new J,oi=new J,dr=new J,zr=new J,Vr=new J,ai=new J;function Ws(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ai.fromArray(s,r);const a=i.x*Math.abs(ai.x)+i.y*Math.abs(ai.y)+i.z*Math.abs(ai.z),l=e.dot(ai),u=t.dot(ai),h=n.dot(ai);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>a)return!1}return!0}const Nh=new Vn,fr=new J,Xs=new J;class An{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Nh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fr.subVectors(e,this.center);const t=fr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(fr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fr.copy(e.center).add(Xs)),this.expandByPoint(fr.copy(e.center).sub(Xs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ln=new J,qs=new J,kr=new J,Wn=new J,Ys=new J,Hr=new J,js=new J;class As{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ln.copy(this.origin).addScaledVector(this.direction,t),Ln.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){qs.copy(e).add(t).multiplyScalar(.5),kr.copy(t).sub(e).normalize(),Wn.copy(this.origin).sub(qs);const r=e.distanceTo(t)*.5,o=-this.direction.dot(kr),a=Wn.dot(this.direction),l=-Wn.dot(kr),u=Wn.lengthSq(),h=Math.abs(1-o*o);let c,d,f,v;if(h>0)if(c=o*l-a,d=o*a-l,v=r*h,c>=0)if(d>=-v)if(d<=v){const g=1/h;c*=g,d*=g,f=c*(c+o*d+2*a)+d*(o*c+d+2*l)+u}else d=r,c=Math.max(0,-(o*d+a)),f=-c*c+d*(d+2*l)+u;else d=-r,c=Math.max(0,-(o*d+a)),f=-c*c+d*(d+2*l)+u;else d<=-v?(c=Math.max(0,-(-o*r+a)),d=c>0?-r:Math.min(Math.max(-r,-l),r),f=-c*c+d*(d+2*l)+u):d<=v?(c=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+u):(c=Math.max(0,-(o*r+a)),d=c>0?r:Math.min(Math.max(-r,-l),r),f=-c*c+d*(d+2*l)+u);else d=o>0?-r:r,c=Math.max(0,-(o*d+a)),f=-c*c+d*(d+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,c),i&&i.copy(qs).addScaledVector(kr,d),f}intersectSphere(e,t){Ln.subVectors(e.center,this.origin);const n=Ln.dot(this.direction),i=Ln.dot(Ln)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const u=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,d=this.origin;return u>=0?(n=(e.min.x-d.x)*u,i=(e.max.x-d.x)*u):(n=(e.max.x-d.x)*u,i=(e.min.x-d.x)*u),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),c>=0?(a=(e.min.z-d.z)*c,l=(e.max.z-d.z)*c):(a=(e.max.z-d.z)*c,l=(e.min.z-d.z)*c),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ln)!==null}intersectTriangle(e,t,n,i,r){Ys.subVectors(t,e),Hr.subVectors(n,e),js.crossVectors(Ys,Hr);let o=this.direction.dot(js),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wn.subVectors(this.origin,e);const l=a*this.direction.dot(Hr.crossVectors(Wn,Hr));if(l<0)return null;const u=a*this.direction.dot(Ys.cross(Wn));if(u<0||l+u>o)return null;const h=-a*Wn.dot(js);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,n,i,r,o,a,l,u,h,c,d,f,v,g,m){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,u,h,c,d,f,v,g,m)}set(e,t,n,i,r,o,a,l,u,h,c,d,f,v,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=u,p[6]=h,p[10]=c,p[14]=d,p[3]=f,p[7]=v,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Li.setFromMatrixColumn(e,0).length(),r=1/Li.setFromMatrixColumn(e,1).length(),o=1/Li.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),u=Math.sin(i),h=Math.cos(r),c=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*c,v=a*h,g=a*c;t[0]=l*h,t[4]=-l*c,t[8]=u,t[1]=f+v*u,t[5]=d-g*u,t[9]=-a*l,t[2]=g-d*u,t[6]=v+f*u,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*c,v=u*h,g=u*c;t[0]=d+g*a,t[4]=v*a-f,t[8]=o*u,t[1]=o*c,t[5]=o*h,t[9]=-a,t[2]=f*a-v,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*c,v=u*h,g=u*c;t[0]=d-g*a,t[4]=-o*c,t[8]=v+f*a,t[1]=f+v*a,t[5]=o*h,t[9]=g-d*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*c,v=a*h,g=a*c;t[0]=l*h,t[4]=v*u-f,t[8]=d*u+g,t[1]=l*c,t[5]=g*u+d,t[9]=f*u-v,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*u,v=a*l,g=a*u;t[0]=l*h,t[4]=g-d*c,t[8]=v*c+f,t[1]=c,t[5]=o*h,t[9]=-a*h,t[2]=-u*h,t[6]=f*c+v,t[10]=d-g*c}else if(e.order==="XZY"){const d=o*l,f=o*u,v=a*l,g=a*u;t[0]=l*h,t[4]=-c,t[8]=u*h,t[1]=d*c+g,t[5]=o*h,t[9]=f*c-v,t[2]=v*c-f,t[6]=a*h,t[10]=g*c+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dh,e,Uh)}lookAt(e,t,n){const i=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),Xn.crossVectors(n,nn),Xn.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),Xn.crossVectors(n,nn)),Xn.normalize(),Gr.crossVectors(nn,Xn),i[0]=Xn.x,i[4]=Gr.x,i[8]=nn.x,i[1]=Xn.y,i[5]=Gr.y,i[9]=nn.y,i[2]=Xn.z,i[6]=Gr.z,i[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],u=n[12],h=n[1],c=n[5],d=n[9],f=n[13],v=n[2],g=n[6],m=n[10],p=n[14],_=n[3],y=n[7],x=n[11],w=n[15],A=i[0],I=i[4],B=i[8],E=i[12],M=i[1],P=i[5],z=i[9],q=i[13],U=i[2],V=i[6],Q=i[10],F=i[14],D=i[3],j=i[7],W=i[11],N=i[15];return r[0]=o*A+a*M+l*U+u*D,r[4]=o*I+a*P+l*V+u*j,r[8]=o*B+a*z+l*Q+u*W,r[12]=o*E+a*q+l*F+u*N,r[1]=h*A+c*M+d*U+f*D,r[5]=h*I+c*P+d*V+f*j,r[9]=h*B+c*z+d*Q+f*W,r[13]=h*E+c*q+d*F+f*N,r[2]=v*A+g*M+m*U+p*D,r[6]=v*I+g*P+m*V+p*j,r[10]=v*B+g*z+m*Q+p*W,r[14]=v*E+g*q+m*F+p*N,r[3]=_*A+y*M+x*U+w*D,r[7]=_*I+y*P+x*V+w*j,r[11]=_*B+y*z+x*Q+w*W,r[15]=_*E+y*q+x*F+w*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],u=e[13],h=e[2],c=e[6],d=e[10],f=e[14],v=e[3],g=e[7],m=e[11],p=e[15];return v*(+r*l*c-i*u*c-r*a*d+n*u*d+i*a*f-n*l*f)+g*(+t*l*f-t*u*d+r*o*d-i*o*f+i*u*h-r*l*h)+m*(+t*u*c-t*a*f-r*o*c+n*o*f+r*a*h-n*u*h)+p*(-i*a*h-t*l*c+t*a*d+i*o*c-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],c=e[9],d=e[10],f=e[11],v=e[12],g=e[13],m=e[14],p=e[15],_=c*m*u-g*d*u+g*l*f-a*m*f-c*l*p+a*d*p,y=v*d*u-h*m*u-v*l*f+o*m*f+h*l*p-o*d*p,x=h*g*u-v*c*u+v*a*f-o*g*f-h*a*p+o*c*p,w=v*c*l-h*g*l-v*a*d+o*g*d+h*a*m-o*c*m,A=t*_+n*y+i*x+r*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/A;return e[0]=_*I,e[1]=(g*d*r-c*m*r-g*i*f+n*m*f+c*i*p-n*d*p)*I,e[2]=(a*m*r-g*l*r+g*i*u-n*m*u-a*i*p+n*l*p)*I,e[3]=(c*l*r-a*d*r-c*i*u+n*d*u+a*i*f-n*l*f)*I,e[4]=y*I,e[5]=(h*m*r-v*d*r+v*i*f-t*m*f-h*i*p+t*d*p)*I,e[6]=(v*l*r-o*m*r-v*i*u+t*m*u+o*i*p-t*l*p)*I,e[7]=(o*d*r-h*l*r+h*i*u-t*d*u-o*i*f+t*l*f)*I,e[8]=x*I,e[9]=(v*c*r-h*g*r-v*n*f+t*g*f+h*n*p-t*c*p)*I,e[10]=(o*g*r-v*a*r+v*n*u-t*g*u-o*n*p+t*a*p)*I,e[11]=(h*a*r-o*c*r-h*n*u+t*c*u+o*n*f-t*a*f)*I,e[12]=w*I,e[13]=(h*g*i-v*c*i+v*n*d-t*g*d-h*n*m+t*c*m)*I,e[14]=(v*a*i-o*g*i-v*n*l+t*g*l+o*n*m-t*a*m)*I,e[15]=(o*c*i-h*a*i+h*n*l-t*c*l-o*n*d+t*a*d)*I,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,u=r*o,h=r*a;return this.set(u*o+n,u*a-i*l,u*l+i*a,0,u*a+i*l,h*a+n,h*l-i*o,0,u*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,u=r+r,h=o+o,c=a+a,d=r*u,f=r*h,v=r*c,g=o*h,m=o*c,p=a*c,_=l*u,y=l*h,x=l*c,w=n.x,A=n.y,I=n.z;return i[0]=(1-(g+p))*w,i[1]=(f+x)*w,i[2]=(v-y)*w,i[3]=0,i[4]=(f-x)*A,i[5]=(1-(d+p))*A,i[6]=(m+_)*A,i[7]=0,i[8]=(v+y)*I,i[9]=(m-_)*I,i[10]=(1-(d+g))*I,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Li.set(i[0],i[1],i[2]).length();const o=Li.set(i[4],i[5],i[6]).length(),a=Li.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],pn.copy(this);const u=1/r,h=1/o,c=1/a;return pn.elements[0]*=u,pn.elements[1]*=u,pn.elements[2]*=u,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=c,pn.elements[9]*=c,pn.elements[10]*=c,t.setFromRotationMatrix(pn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Bn){const l=this.elements,u=2*r/(t-e),h=2*r/(n-i),c=(t+e)/(t-e),d=(n+i)/(n-i);let f,v;if(a===Bn)f=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Es)f=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=c,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Bn){const l=this.elements,u=1/(t-e),h=1/(n-i),c=1/(o-r),d=(t+e)*u,f=(n+i)*h;let v,g;if(a===Bn)v=(o+r)*c,g=-2*c;else if(a===Es)v=r*c,g=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Li=new J,pn=new at,Dh=new J(0,0,0),Uh=new J(1,1,1),Xn=new J,Gr=new J,nn=new J,qa=new at,Ya=new ii;class Rs{constructor(e=0,t=0,n=0,i=Rs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],u=i[5],h=i[9],c=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-c,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-c,f),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-c,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ya.setFromEuler(this),this.setFromQuaternion(Ya,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rs.DEFAULT_ORDER="XYZ";class Rc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fh=0;const ja=new J,Pi=new ii,Pn=new at,Wr=new J,pr=new J,Bh=new J,Oh=new ii,Ka=new J(1,0,0),Za=new J(0,1,0),$a=new J(0,0,1),zh={type:"added"},Vh={type:"removed"};class Ct extends or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new J,t=new Rs,n=new ii,i=new J(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new at},normalMatrix:{value:new ot}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.premultiply(Pi),this}rotateX(e){return this.rotateOnAxis(Ka,e)}rotateY(e){return this.rotateOnAxis(Za,e)}rotateZ(e){return this.rotateOnAxis($a,e)}translateOnAxis(e,t){return ja.copy(e).applyQuaternion(this.quaternion),this.position.add(ja.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ka,e)}translateY(e){return this.translateOnAxis(Za,e)}translateZ(e){return this.translateOnAxis($a,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wr.copy(e):Wr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(pr,Wr,this.up):Pn.lookAt(Wr,pr,this.up),this.quaternion.setFromRotationMatrix(Pn),i&&(Pn.extractRotation(i.matrixWorld),Pi.setFromRotationMatrix(Pn),this.quaternion.premultiply(Pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(zh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,e,Bh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,Oh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const c=l[u];r(e.shapes,c)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),h=o(e.images),c=o(e.shapes),d=o(e.skeletons),f=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),c.length>0&&(n.shapes=c),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),v.length>0&&(n.nodes=v)}return n.object=i,n;function o(a){const l=[];for(const u in a){const h=a[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ct.DEFAULT_UP=new J(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new J,In=new J,Ks=new J,Nn=new J,Ii=new J,Ni=new J,Ja=new J,Zs=new J,$s=new J,Js=new J;let Xr=!1;class vn{constructor(e=new J,t=new J,n=new J){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),mn.subVectors(e,t),i.cross(mn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){mn.subVectors(i,t),In.subVectors(n,t),Ks.subVectors(e,t);const o=mn.dot(mn),a=mn.dot(In),l=mn.dot(Ks),u=In.dot(In),h=In.dot(Ks),c=o*u-a*a;if(c===0)return r.set(0,0,0),null;const d=1/c,f=(u*l-a*h)*d,v=(o*h-a*l)*d;return r.set(1-f-v,v,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getUV(e,t,n,i,r,o,a,l){return Xr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xr=!0),this.getInterpolation(e,t,n,i,r,o,a,l)}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Nn.x),l.addScaledVector(o,Nn.y),l.addScaledVector(a,Nn.z),l)}static isFrontFacing(e,t,n,i){return mn.subVectors(n,t),In.subVectors(e,t),mn.cross(In).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),mn.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Xr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xr=!0),vn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return vn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Ii.subVectors(i,n),Ni.subVectors(r,n),Zs.subVectors(e,n);const l=Ii.dot(Zs),u=Ni.dot(Zs);if(l<=0&&u<=0)return t.copy(n);$s.subVectors(e,i);const h=Ii.dot($s),c=Ni.dot($s);if(h>=0&&c<=h)return t.copy(i);const d=l*c-h*u;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Ii,o);Js.subVectors(e,r);const f=Ii.dot(Js),v=Ni.dot(Js);if(v>=0&&f<=v)return t.copy(r);const g=f*u-l*v;if(g<=0&&u>=0&&v<=0)return a=u/(u-v),t.copy(n).addScaledVector(Ni,a);const m=h*v-f*c;if(m<=0&&c-h>=0&&f-v>=0)return Ja.subVectors(r,i),a=(c-h)/(c-h+(f-v)),t.copy(i).addScaledVector(Ja,a);const p=1/(m+g+d);return o=g*p,a=d*p,t.copy(n).addScaledVector(Ii,o).addScaledVector(Ni,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Cc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},qr={h:0,s:0,l:0};function Qs(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}let it=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,yt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=yt.workingColorSpace){if(e=Go(e,1),t=qt(t,0,1),n=qt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Qs(o,r,e+1/3),this.g=Qs(o,r,e),this.b=Qs(o,r,e-1/3)}return yt.toWorkingColorSpace(this,i),this}setStyle(e,t=Pt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){const n=Cc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}copyLinearToSRGB(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return yt.fromWorkingColorSpace(Xt.copy(this),e),Math.round(qt(Xt.r*255,0,255))*65536+Math.round(qt(Xt.g*255,0,255))*256+Math.round(qt(Xt.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.fromWorkingColorSpace(Xt.copy(this),t);const n=Xt.r,i=Xt.g,r=Xt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,u;const h=(a+o)/2;if(a===o)l=0,u=0;else{const c=o-a;switch(u=h<=.5?c/(o+a):c/(2-o-a),o){case n:l=(i-r)/c+(i<r?6:0);break;case i:l=(r-n)/c+2;break;case r:l=(n-i)/c+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,t=yt.workingColorSpace){return yt.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Pt){yt.fromWorkingColorSpace(Xt.copy(this),e);const t=Xt.r,n=Xt.g,i=Xt.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(qn),this.setHSL(qn.h+e,qn.s+t,qn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qn),e.getHSL(qr);const n=br(qn.h,qr.h,t),i=br(qn.s,qr.s,t),r=br(qn.l,qr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Xt=new it;it.NAMES=Cc;let kh=0;class Tn extends or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=gn(),this.name="",this.type="Material",this.blending=Yi,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xo,this.blendDst=yo,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=za,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xo&&(n.blendSrc=this.blendSrc),this.blendDst!==yo&&(n.blendDst=this.blendDst),this.blendEquation!==fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==za&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Zn extends Tn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ut=new J,Yr=new pt;class Zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Yr.fromBufferAttribute(this,t),Yr.applyMatrix3(e),this.setXY(t,Yr.x,Yr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wo&&(e.usage=this.usage),e}}class Lc extends Zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Pc extends Zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class hn extends Zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Hh=0;const on=new at,eo=new Ct,Di=new J,rn=new Vn,mr=new Vn,zt=new J;class _n extends or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=gn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bc(e)?Pc:Lc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ot().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,n){return on.makeTranslation(e,t,n),this.applyMatrix4(on),this}scale(e,t,n){return on.makeScale(e,t,n),this.applyMatrix4(on),this}lookAt(e){return eo.lookAt(e),eo.updateMatrix(),this.applyMatrix4(eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new hn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new An);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new J,1/0);return}if(e){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];mr.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(rn.min,mr.min),rn.expandByPoint(zt),zt.addVectors(rn.max,mr.max),rn.expandByPoint(zt)):(rn.expandByPoint(mr.min),rn.expandByPoint(mr.max))}rn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)zt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(zt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)zt.fromBufferAttribute(a,u),l&&(Di.fromBufferAttribute(e,u),zt.add(Di)),i=Math.max(i,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],h=[];for(let M=0;M<a;M++)u[M]=new J,h[M]=new J;const c=new J,d=new J,f=new J,v=new pt,g=new pt,m=new pt,p=new J,_=new J;function y(M,P,z){c.fromArray(i,M*3),d.fromArray(i,P*3),f.fromArray(i,z*3),v.fromArray(o,M*2),g.fromArray(o,P*2),m.fromArray(o,z*2),d.sub(c),f.sub(c),g.sub(v),m.sub(v);const q=1/(g.x*m.y-m.x*g.y);isFinite(q)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-g.y).multiplyScalar(q),_.copy(f).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(q),u[M].add(p),u[P].add(p),u[z].add(p),h[M].add(_),h[P].add(_),h[z].add(_))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let M=0,P=x.length;M<P;++M){const z=x[M],q=z.start,U=z.count;for(let V=q,Q=q+U;V<Q;V+=3)y(n[V+0],n[V+1],n[V+2])}const w=new J,A=new J,I=new J,B=new J;function E(M){I.fromArray(r,M*3),B.copy(I);const P=u[M];w.copy(P),w.sub(I.multiplyScalar(I.dot(P))).normalize(),A.crossVectors(B,P);const q=A.dot(h[M])<0?-1:1;l[M*4]=w.x,l[M*4+1]=w.y,l[M*4+2]=w.z,l[M*4+3]=q}for(let M=0,P=x.length;M<P;++M){const z=x[M],q=z.start,U=z.count;for(let V=q,Q=q+U;V<Q;V+=3)E(n[V+0]),E(n[V+1]),E(n[V+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new J,r=new J,o=new J,a=new J,l=new J,u=new J,h=new J,c=new J;if(e)for(let d=0,f=e.count;d<f;d+=3){const v=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,v),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),h.subVectors(o,r),c.subVectors(i,r),h.cross(c),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),u.fromBufferAttribute(n,m),a.add(h),l.add(h),u.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),c.subVectors(i,r),h.cross(c),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){const u=a.array,h=a.itemSize,c=a.normalized,d=new u.constructor(l.length*h);let f=0,v=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*h;for(let p=0;p<h;p++)d[v++]=u[f++]}return new Zt(d,h,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _n,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],u=e(l,n);t.setAttribute(a,u)}const r=this.morphAttributes;for(const a in r){const l=[],u=r[a];for(let h=0,c=u.length;h<c;h++){const d=u[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const u=n[l];e.data.attributes[l]=u.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let c=0,d=u.length;c<d;c++){const f=u[c];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const u in i){const h=i[u];this.setAttribute(u,h.clone(t))}const r=e.morphAttributes;for(const u in r){const h=[],c=r[u];for(let d=0,f=c.length;d<f;d++)h.push(c[d].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,h=o.length;u<h;u++){const c=o[u];this.addGroup(c.start,c.count,c.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qa=new at,li=new As,jr=new An,el=new J,Ui=new J,Fi=new J,Bi=new J,to=new J,Kr=new J,Zr=new pt,$r=new pt,Jr=new pt,tl=new J,nl=new J,il=new J,Qr=new J,es=new J;class Jt extends Ct{constructor(e=new _n,t=new Zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Kr.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const h=a[l],c=r[l];h!==0&&(to.fromBufferAttribute(c,e),o?Kr.addScaledVector(to,h):Kr.addScaledVector(to.sub(t),h))}t.add(Kr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(r),li.copy(e.ray).recast(e.near),!(jr.containsPoint(li.origin)===!1&&(li.intersectSphere(jr,el)===null||li.origin.distanceToSquared(el)>(e.far-e.near)**2))&&(Qa.copy(r).invert(),li.copy(e.ray).applyMatrix4(Qa),!(n.boundingBox!==null&&li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,li)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,c=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const m=d[v],p=o[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,w=y;x<w;x+=3){const A=a.getX(x),I=a.getX(x+1),B=a.getX(x+2);i=ts(this,p,e,n,u,h,c,A,I,B),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const v=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=v,p=g;m<p;m+=3){const _=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);i=ts(this,o,e,n,u,h,c,_,y,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const m=d[v],p=o[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,w=y;x<w;x+=3){const A=x,I=x+1,B=x+2;i=ts(this,p,e,n,u,h,c,A,I,B),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const v=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=v,p=g;m<p;m+=3){const _=m,y=m+1,x=m+2;i=ts(this,o,e,n,u,h,c,_,y,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Gh(s,e,t,n,i,r,o,a){let l;if(e.side===Qt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===On,a),l===null)return null;es.copy(a),es.applyMatrix4(s.matrixWorld);const u=t.ray.origin.distanceTo(es);return u<t.near||u>t.far?null:{distance:u,point:es.clone(),object:s}}function ts(s,e,t,n,i,r,o,a,l,u){s.getVertexPosition(a,Ui),s.getVertexPosition(l,Fi),s.getVertexPosition(u,Bi);const h=Gh(s,e,t,n,Ui,Fi,Bi,Qr);if(h){i&&(Zr.fromBufferAttribute(i,a),$r.fromBufferAttribute(i,l),Jr.fromBufferAttribute(i,u),h.uv=vn.getInterpolation(Qr,Ui,Fi,Bi,Zr,$r,Jr,new pt)),r&&(Zr.fromBufferAttribute(r,a),$r.fromBufferAttribute(r,l),Jr.fromBufferAttribute(r,u),h.uv1=vn.getInterpolation(Qr,Ui,Fi,Bi,Zr,$r,Jr,new pt),h.uv2=h.uv1),o&&(tl.fromBufferAttribute(o,a),nl.fromBufferAttribute(o,l),il.fromBufferAttribute(o,u),h.normal=vn.getInterpolation(Qr,Ui,Fi,Bi,tl,nl,il,new J),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const c={a,b:l,c:u,normal:new J,materialIndex:0};vn.getNormal(Ui,Fi,Bi,c.normal),h.face=c}return h}class Nr extends _n{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],u=[],h=[],c=[];let d=0,f=0;v("z","y","x",-1,-1,n,t,e,o,r,0),v("z","y","x",1,-1,n,t,-e,o,r,1),v("x","z","y",1,1,e,n,t,i,o,2),v("x","z","y",1,-1,e,n,-t,i,o,3),v("x","y","z",1,-1,e,t,n,i,r,4),v("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new hn(u,3)),this.setAttribute("normal",new hn(h,3)),this.setAttribute("uv",new hn(c,2));function v(g,m,p,_,y,x,w,A,I,B,E){const M=x/I,P=w/B,z=x/2,q=w/2,U=A/2,V=I+1,Q=B+1;let F=0,D=0;const j=new J;for(let W=0;W<Q;W++){const N=W*P-q;for(let H=0;H<V;H++){const T=H*M-z;j[g]=T*_,j[m]=N*y,j[p]=U,u.push(j.x,j.y,j.z),j[g]=0,j[m]=0,j[p]=A>0?1:-1,h.push(j.x,j.y,j.z),c.push(H/I),c.push(1-W/B),F+=1}}for(let W=0;W<B;W++)for(let N=0;N<I;N++){const H=d+N+V*W,T=d+N+V*(W+1),R=d+(N+1)+V*(W+1),C=d+(N+1)+V*W;l.push(H,T,C),l.push(T,R,C),D+=6}a.addGroup(f,D,E),f+=D,d+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function nr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function jt(s){const e={};for(let t=0;t<s.length;t++){const n=nr(s[t]);for(const i in n)e[i]=n[i]}return e}function Wh(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ic(s){return s.getRenderTarget()===null?s.outputColorSpace:yt.workingColorSpace}const Xh={clone:nr,merge:jt};var qh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends Tn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qh,this.fragmentShader=Yh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=nr(e.uniforms),this.uniformsGroups=Wh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Nc extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=Bn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Kt extends Nc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=tr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tr*2*Math.atan(Math.tan(Mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Mr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/u,i*=o.width/l,n*=o.height/u}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Oi=-90,zi=1;class jh extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Kt(Oi,zi,e,t);i.layers=this.layers,this.add(i);const r=new Kt(Oi,zi,e,t);r.layers=this.layers,this.add(r);const o=new Kt(Oi,zi,e,t);o.layers=this.layers,this.add(o);const a=new Kt(Oi,zi,e,t);a.layers=this.layers,this.add(a);const l=new Kt(Oi,zi,e,t);l.layers=this.layers,this.add(l);const u=new Kt(Oi,zi,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const u of t)this.remove(u);if(e===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Es)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,u,h]=this.children,c=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,u),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(c,d,f),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Dc extends Gt{constructor(e,t,n,i,r,o,a,l,u,h){e=e!==void 0?e:[],t=t!==void 0?t:Zi,super(e,t,n,i,r,o,a,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kh extends yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(wr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===_i?Pt:un),this.texture=new Dc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$t}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Nr(5,5,5),r=new Ei({name:"CubemapFromEquirect",uniforms:nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:Jn});r.uniforms.tEquirect.value=t;const o=new Jt(i,r),a=t.minFilter;return t.minFilter===xi&&(t.minFilter=$t),new jh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const no=new J,Zh=new J,$h=new ot;class hi{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=no.subVectors(n,t).cross(Zh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(no),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||$h.getNormalMatrix(e),i=this.coplanarPoint(no).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ci=new An,ns=new J;class Wo{constructor(e=new hi,t=new hi,n=new hi,i=new hi,r=new hi,o=new hi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bn){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],u=i[4],h=i[5],c=i[6],d=i[7],f=i[8],v=i[9],g=i[10],m=i[11],p=i[12],_=i[13],y=i[14],x=i[15];if(n[0].setComponents(l-r,d-u,m-f,x-p).normalize(),n[1].setComponents(l+r,d+u,m+f,x+p).normalize(),n[2].setComponents(l+o,d+h,m+v,x+_).normalize(),n[3].setComponents(l-o,d-h,m-v,x-_).normalize(),n[4].setComponents(l-a,d-c,m-g,x-y).normalize(),t===Bn)n[5].setComponents(l+a,d+c,m+g,x+y).normalize();else if(t===Es)n[5].setComponents(a,c,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(e){return ci.center.set(0,0,0),ci.radius=.7071067811865476,ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ns.x=i.normal.x>0?e.max.x:e.min.x,ns.y=i.normal.y>0?e.max.y:e.min.y,ns.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ns)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Uc(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Jh(s,e){const t=e.isWebGL2,n=new WeakMap;function i(u,h){const c=u.array,d=u.usage,f=c.byteLength,v=s.createBuffer();s.bindBuffer(h,v),s.bufferData(h,c,d),u.onUploadCallback();let g;if(c instanceof Float32Array)g=s.FLOAT;else if(c instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=s.SHORT;else if(c instanceof Uint32Array)g=s.UNSIGNED_INT;else if(c instanceof Int32Array)g=s.INT;else if(c instanceof Int8Array)g=s.BYTE;else if(c instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:v,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:u.version,size:f}}function r(u,h,c){const d=h.array,f=h._updateRange,v=h.updateRanges;if(s.bindBuffer(c,u),f.count===-1&&v.length===0&&s.bufferSubData(c,0,d),v.length!==0){for(let g=0,m=v.length;g<m;g++){const p=v[g];t?s.bufferSubData(c,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):s.bufferSubData(c,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(t?s.bufferSubData(c,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(c,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=n.get(u);h&&(s.deleteBuffer(h.buffer),n.delete(u))}function l(u,h){if(u.isGLBufferAttribute){const d=n.get(u);(!d||d.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const c=n.get(u);if(c===void 0)n.set(u,i(u,h));else if(c.version<u.version){if(c.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,u,h),c.version=u.version}}return{get:o,remove:a,update:l}}class Cs extends _n{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),u=a+1,h=l+1,c=e/a,d=t/l,f=[],v=[],g=[],m=[];for(let p=0;p<h;p++){const _=p*d-o;for(let y=0;y<u;y++){const x=y*c-r;v.push(x,-_,0),g.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){const y=_+u*p,x=_+u*(p+1),w=_+1+u*(p+1),A=_+1+u*p;f.push(y,x,A),f.push(x,w,A)}this.setIndex(f),this.setAttribute("position",new hn(v,3)),this.setAttribute("normal",new hn(g,3)),this.setAttribute("uv",new hn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Qh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ed=`#ifdef USE_ALPHAHASH
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
#endif`,td=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,id=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,rd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sd=`#ifdef USE_AOMAP
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
#endif`,od=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ad=`#ifdef USE_BATCHING
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
#endif`,ld=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,cd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ud=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dd=`#ifdef USE_IRIDESCENCE
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
#endif`,fd=`#ifdef USE_BUMPMAP
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
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_d=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ed=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Sd=`#define PI 3.141592653589793
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
} // validated`,Md=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bd=`vec3 transformedNormal = objectNormal;
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
#endif`,wd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Td=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ad=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ld=`
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
}`,Pd=`#ifdef USE_ENVMAP
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
#endif`,Id=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nd=`#ifdef USE_ENVMAP
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
#endif`,Dd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ud=`#ifdef USE_ENVMAP
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
#endif`,Fd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Od=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vd=`#ifdef USE_GRADIENTMAP
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
}`,kd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Hd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xd=`uniform bool receiveShadow;
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
#endif`,qd=`#ifdef USE_ENVMAP
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
#endif`,Yd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$d=`PhysicalMaterial material;
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
#endif`,Jd=`struct PhysicalMaterial {
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
}`,Qd=`
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
#endif`,ef=`#if defined( RE_IndirectDiffuse )
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
#endif`,tf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,of=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,af=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uf=`#if defined( USE_POINTS_UV )
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
#endif`,hf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,df=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ff=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pf=`#ifdef USE_MORPHNORMALS
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
#endif`,mf=`#ifdef USE_MORPHTARGETS
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
#endif`,vf=`#ifdef USE_MORPHTARGETS
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
#endif`,gf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_f=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ef=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sf=`#ifdef USE_NORMALMAP
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
#endif`,Mf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Af=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,If=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Df=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ff=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Of=`float getShadowMask() {
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
}`,zf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vf=`#ifdef USE_SKINNING
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
#endif`,kf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hf=`#ifdef USE_SKINNING
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
#endif`,Gf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yf=`#ifdef USE_TRANSMISSION
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
#endif`,jf=`#ifdef USE_TRANSMISSION
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
#endif`,Kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ep=`uniform sampler2D t2D;
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
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,np=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sp=`#include <common>
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
}`,op=`#if DEPTH_PACKING == 3200
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
}`,ap=`#define DISTANCE
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
}`,lp=`#define DISTANCE
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
}`,cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,up=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hp=`uniform float scale;
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
}`,dp=`uniform vec3 diffuse;
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
}`,fp=`#include <common>
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
}`,pp=`uniform vec3 diffuse;
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
}`,mp=`#define LAMBERT
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
}`,vp=`#define LAMBERT
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
}`,gp=`#define MATCAP
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
}`,_p=`#define MATCAP
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
}`,xp=`#define NORMAL
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
}`,yp=`#define NORMAL
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
}`,Ep=`#define PHONG
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
}`,Sp=`#define PHONG
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
}`,Mp=`#define STANDARD
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
}`,bp=`#define STANDARD
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
}`,wp=`#define TOON
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
}`,Tp=`#define TOON
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
}`,Ap=`uniform float size;
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
}`,Rp=`uniform vec3 diffuse;
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
}`,Cp=`#include <common>
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
}`,Lp=`uniform vec3 color;
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
}`,Pp=`uniform float rotation;
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
}`,Ip=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:Qh,alphahash_pars_fragment:ed,alphamap_fragment:td,alphamap_pars_fragment:nd,alphatest_fragment:id,alphatest_pars_fragment:rd,aomap_fragment:sd,aomap_pars_fragment:od,batching_pars_vertex:ad,batching_vertex:ld,begin_vertex:cd,beginnormal_vertex:ud,bsdfs:hd,iridescence_fragment:dd,bumpmap_pars_fragment:fd,clipping_planes_fragment:pd,clipping_planes_pars_fragment:md,clipping_planes_pars_vertex:vd,clipping_planes_vertex:gd,color_fragment:_d,color_pars_fragment:xd,color_pars_vertex:yd,color_vertex:Ed,common:Sd,cube_uv_reflection_fragment:Md,defaultnormal_vertex:bd,displacementmap_pars_vertex:wd,displacementmap_vertex:Td,emissivemap_fragment:Ad,emissivemap_pars_fragment:Rd,colorspace_fragment:Cd,colorspace_pars_fragment:Ld,envmap_fragment:Pd,envmap_common_pars_fragment:Id,envmap_pars_fragment:Nd,envmap_pars_vertex:Dd,envmap_physical_pars_fragment:qd,envmap_vertex:Ud,fog_vertex:Fd,fog_pars_vertex:Bd,fog_fragment:Od,fog_pars_fragment:zd,gradientmap_pars_fragment:Vd,lightmap_fragment:kd,lightmap_pars_fragment:Hd,lights_lambert_fragment:Gd,lights_lambert_pars_fragment:Wd,lights_pars_begin:Xd,lights_toon_fragment:Yd,lights_toon_pars_fragment:jd,lights_phong_fragment:Kd,lights_phong_pars_fragment:Zd,lights_physical_fragment:$d,lights_physical_pars_fragment:Jd,lights_fragment_begin:Qd,lights_fragment_maps:ef,lights_fragment_end:tf,logdepthbuf_fragment:nf,logdepthbuf_pars_fragment:rf,logdepthbuf_pars_vertex:sf,logdepthbuf_vertex:of,map_fragment:af,map_pars_fragment:lf,map_particle_fragment:cf,map_particle_pars_fragment:uf,metalnessmap_fragment:hf,metalnessmap_pars_fragment:df,morphcolor_vertex:ff,morphnormal_vertex:pf,morphtarget_pars_vertex:mf,morphtarget_vertex:vf,normal_fragment_begin:gf,normal_fragment_maps:_f,normal_pars_fragment:xf,normal_pars_vertex:yf,normal_vertex:Ef,normalmap_pars_fragment:Sf,clearcoat_normal_fragment_begin:Mf,clearcoat_normal_fragment_maps:bf,clearcoat_pars_fragment:wf,iridescence_pars_fragment:Tf,opaque_fragment:Af,packing:Rf,premultiplied_alpha_fragment:Cf,project_vertex:Lf,dithering_fragment:Pf,dithering_pars_fragment:If,roughnessmap_fragment:Nf,roughnessmap_pars_fragment:Df,shadowmap_pars_fragment:Uf,shadowmap_pars_vertex:Ff,shadowmap_vertex:Bf,shadowmask_pars_fragment:Of,skinbase_vertex:zf,skinning_pars_vertex:Vf,skinning_vertex:kf,skinnormal_vertex:Hf,specularmap_fragment:Gf,specularmap_pars_fragment:Wf,tonemapping_fragment:Xf,tonemapping_pars_fragment:qf,transmission_fragment:Yf,transmission_pars_fragment:jf,uv_pars_fragment:Kf,uv_pars_vertex:Zf,uv_vertex:$f,worldpos_vertex:Jf,background_vert:Qf,background_frag:ep,backgroundCube_vert:tp,backgroundCube_frag:np,cube_vert:ip,cube_frag:rp,depth_vert:sp,depth_frag:op,distanceRGBA_vert:ap,distanceRGBA_frag:lp,equirect_vert:cp,equirect_frag:up,linedashed_vert:hp,linedashed_frag:dp,meshbasic_vert:fp,meshbasic_frag:pp,meshlambert_vert:mp,meshlambert_frag:vp,meshmatcap_vert:gp,meshmatcap_frag:_p,meshnormal_vert:xp,meshnormal_frag:yp,meshphong_vert:Ep,meshphong_frag:Sp,meshphysical_vert:Mp,meshphysical_frag:bp,meshtoon_vert:wp,meshtoon_frag:Tp,points_vert:Ap,points_frag:Rp,shadow_vert:Cp,shadow_frag:Lp,sprite_vert:Pp,sprite_frag:Ip},Be={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Sn={basic:{uniforms:jt([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:jt([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new it(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:jt([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:jt([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:jt([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new it(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:jt([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:jt([Be.points,Be.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:jt([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:jt([Be.common,Be.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:jt([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:jt([Be.sprite,Be.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:jt([Be.common,Be.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:jt([Be.lights,Be.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Sn.physical={uniforms:jt([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const is={r:0,b:0,g:0};function Np(s,e,t,n,i,r,o){const a=new it(0);let l=r===!0?0:1,u,h,c=null,d=0,f=null;function v(m,p){let _=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?t:e).get(y)),y===null?g(a,l):y&&y.isColor&&(g(y,1),_=!0);const x=s.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,o):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||_)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),y&&(y.isCubeTexture||y.mapping===ws)?(h===void 0&&(h=new Jt(new Nr(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:nr(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,A,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=yt.getTransfer(y.colorSpace)!==bt,(c!==y||d!==y.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,c=y,d=y.version,f=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new Jt(new Cs(2,2),new Ei({name:"BackgroundMaterial",uniforms:nr(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=yt.getTransfer(y.colorSpace)!==bt,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(c!==y||d!==y.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,c=y,d=y.version,f=s.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function g(m,p){m.getRGB(is,Ic(s)),n.buffers.color.setClear(is.r,is.g,is.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:v}}function Dp(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null);let u=l,h=!1;function c(U,V,Q,F,D){let j=!1;if(o){const W=g(F,Q,V);u!==W&&(u=W,f(u.object)),j=p(U,F,Q,D),j&&_(U,F,Q,D)}else{const W=V.wireframe===!0;(u.geometry!==F.id||u.program!==Q.id||u.wireframe!==W)&&(u.geometry=F.id,u.program=Q.id,u.wireframe=W,j=!0)}D!==null&&t.update(D,s.ELEMENT_ARRAY_BUFFER),(j||h)&&(h=!1,B(U,V,Q,F),D!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(U){return n.isWebGL2?s.bindVertexArray(U):r.bindVertexArrayOES(U)}function v(U){return n.isWebGL2?s.deleteVertexArray(U):r.deleteVertexArrayOES(U)}function g(U,V,Q){const F=Q.wireframe===!0;let D=a[U.id];D===void 0&&(D={},a[U.id]=D);let j=D[V.id];j===void 0&&(j={},D[V.id]=j);let W=j[F];return W===void 0&&(W=m(d()),j[F]=W),W}function m(U){const V=[],Q=[],F=[];for(let D=0;D<i;D++)V[D]=0,Q[D]=0,F[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Q,attributeDivisors:F,object:U,attributes:{},index:null}}function p(U,V,Q,F){const D=u.attributes,j=V.attributes;let W=0;const N=Q.getAttributes();for(const H in N)if(N[H].location>=0){const R=D[H];let C=j[H];if(C===void 0&&(H==="instanceMatrix"&&U.instanceMatrix&&(C=U.instanceMatrix),H==="instanceColor"&&U.instanceColor&&(C=U.instanceColor)),R===void 0||R.attribute!==C||C&&R.data!==C.data)return!0;W++}return u.attributesNum!==W||u.index!==F}function _(U,V,Q,F){const D={},j=V.attributes;let W=0;const N=Q.getAttributes();for(const H in N)if(N[H].location>=0){let R=j[H];R===void 0&&(H==="instanceMatrix"&&U.instanceMatrix&&(R=U.instanceMatrix),H==="instanceColor"&&U.instanceColor&&(R=U.instanceColor));const C={};C.attribute=R,R&&R.data&&(C.data=R.data),D[H]=C,W++}u.attributes=D,u.attributesNum=W,u.index=F}function y(){const U=u.newAttributes;for(let V=0,Q=U.length;V<Q;V++)U[V]=0}function x(U){w(U,0)}function w(U,V){const Q=u.newAttributes,F=u.enabledAttributes,D=u.attributeDivisors;Q[U]=1,F[U]===0&&(s.enableVertexAttribArray(U),F[U]=1),D[U]!==V&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,V),D[U]=V)}function A(){const U=u.newAttributes,V=u.enabledAttributes;for(let Q=0,F=V.length;Q<F;Q++)V[Q]!==U[Q]&&(s.disableVertexAttribArray(Q),V[Q]=0)}function I(U,V,Q,F,D,j,W){W===!0?s.vertexAttribIPointer(U,V,Q,D,j):s.vertexAttribPointer(U,V,Q,F,D,j)}function B(U,V,Q,F){if(n.isWebGL2===!1&&(U.isInstancedMesh||F.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const D=F.attributes,j=Q.getAttributes(),W=V.defaultAttributeValues;for(const N in j){const H=j[N];if(H.location>=0){let T=D[N];if(T===void 0&&(N==="instanceMatrix"&&U.instanceMatrix&&(T=U.instanceMatrix),N==="instanceColor"&&U.instanceColor&&(T=U.instanceColor)),T!==void 0){const R=T.normalized,C=T.itemSize,X=t.get(T);if(X===void 0)continue;const ne=X.buffer,ie=X.type,K=X.bytesPerElement,te=n.isWebGL2===!0&&(ie===s.INT||ie===s.UNSIGNED_INT||T.gpuType===fc);if(T.isInterleavedBufferAttribute){const ue=T.data,Y=ue.stride,Pe=T.offset;if(ue.isInstancedInterleavedBuffer){for(let de=0;de<H.locationSize;de++)w(H.location+de,ue.meshPerAttribute);U.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let de=0;de<H.locationSize;de++)x(H.location+de);s.bindBuffer(s.ARRAY_BUFFER,ne);for(let de=0;de<H.locationSize;de++)I(H.location+de,C/H.locationSize,ie,R,Y*K,(Pe+C/H.locationSize*de)*K,te)}else{if(T.isInstancedBufferAttribute){for(let ue=0;ue<H.locationSize;ue++)w(H.location+ue,T.meshPerAttribute);U.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=T.meshPerAttribute*T.count)}else for(let ue=0;ue<H.locationSize;ue++)x(H.location+ue);s.bindBuffer(s.ARRAY_BUFFER,ne);for(let ue=0;ue<H.locationSize;ue++)I(H.location+ue,C/H.locationSize,ie,R,C*K,C/H.locationSize*ue*K,te)}}else if(W!==void 0){const R=W[N];if(R!==void 0)switch(R.length){case 2:s.vertexAttrib2fv(H.location,R);break;case 3:s.vertexAttrib3fv(H.location,R);break;case 4:s.vertexAttrib4fv(H.location,R);break;default:s.vertexAttrib1fv(H.location,R)}}}}A()}function E(){z();for(const U in a){const V=a[U];for(const Q in V){const F=V[Q];for(const D in F)v(F[D].object),delete F[D];delete V[Q]}delete a[U]}}function M(U){if(a[U.id]===void 0)return;const V=a[U.id];for(const Q in V){const F=V[Q];for(const D in F)v(F[D].object),delete F[D];delete V[Q]}delete a[U.id]}function P(U){for(const V in a){const Q=a[V];if(Q[U.id]===void 0)continue;const F=Q[U.id];for(const D in F)v(F[D].object),delete F[D];delete Q[U.id]}}function z(){q(),h=!0,u!==l&&(u=l,f(u.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:c,reset:z,resetDefaultState:q,dispose:E,releaseStatesOfGeometry:M,releaseStatesOfProgram:P,initAttributes:y,enableAttribute:x,disableUnusedAttributes:A}}function Up(s,e,t,n){const i=n.isWebGL2;let r;function o(h){r=h}function a(h,c){s.drawArrays(r,h,c),t.update(c,r,1)}function l(h,c,d){if(d===0)return;let f,v;if(i)f=s,v="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[v](r,h,c,d),t.update(c,r,d)}function u(h,c,d){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<d;v++)this.render(h[v],c[v]);else{f.multiDrawArraysWEBGL(r,h,0,c,0,d);let v=0;for(let g=0;g<d;g++)v+=c[g];t.update(v,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function Fp(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,c=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,x=o||e.has("OES_texture_float"),w=y&&x,A=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:c,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:_,vertexTextures:y,floatFragmentTextures:x,floatVertexTextures:w,maxSamples:A}}function Bp(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new hi,a=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,d){const f=c.length!==0||d||n!==0||i;return i=d,n=c.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(c,d){t=h(c,d,0)},this.setState=function(c,d,f){const v=c.clippingPlanes,g=c.clipIntersection,m=c.clipShadows,p=s.get(c);if(!i||v===null||v.length===0||r&&!m)r?h(null):u();else{const _=r?0:n,y=_*4;let x=p.clippingState||null;l.value=x,x=h(v,d,y,f);for(let w=0;w!==y;++w)x[w]=t[w];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(c,d,f,v){const g=c!==null?c.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const p=f+g*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=f;y!==g;++y,x+=4)o.copy(c[y]).applyMatrix4(_,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Op(s){let e=new WeakMap;function t(o,a){return a===Eo?o.mapping=Zi:a===So&&(o.mapping=$i),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Eo||a===So)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Kh(l.height/2);return u.fromEquirectangularTexture(s,o),e.set(o,u),o.addEventListener("dispose",i),t(u.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Xo extends Nc{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Wi=4,rl=[.125,.215,.35,.446,.526,.582],pi=20,io=new Xo,sl=new it;let ro=null,so=0,oo=0;const di=(1+Math.sqrt(5))/2,Vi=1/di,ol=[new J(1,1,1),new J(-1,1,1),new J(1,1,-1),new J(-1,1,-1),new J(0,di,Vi),new J(0,di,-Vi),new J(Vi,0,di),new J(-Vi,0,di),new J(di,Vi,0),new J(-di,Vi,0)];class al{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ro=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),oo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ul(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ro,so,oo),e.scissorTest=!1,rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zi||e.mapping===$i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ro=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),oo=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:Cr,format:cn,colorSpace:Ht,depthBuffer:!1},i=ll(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ll(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zp(r)),this._blurMaterial=Vp(r,e,t)}return i}_compileMaterial(e){const t=new Jt(this._lodPlanes[0],e);this._renderer.compile(t,io)}_sceneToCubeUV(e,t,n,i){const a=new Kt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,c=h.autoClear,d=h.toneMapping;h.getClearColor(sl),h.toneMapping=Qn,h.autoClear=!1;const f=new Zn({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),v=new Jt(new Nr,f);let g=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,g=!0):(f.color.copy(sl),g=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(a.up.set(0,l[p],0),a.lookAt(u[p],0,0)):_===1?(a.up.set(0,0,l[p]),a.lookAt(0,u[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,u[p]));const y=this._cubeSize;rs(i,_*y,p>2?y:0,y,y),h.setRenderTarget(i),g&&h.render(v,a),h.render(e,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=c,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Zi||e.mapping===$i;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ul()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cl());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Jt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;rs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,io)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=ol[(i-1)%ol.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,c=new Jt(this._lodPlanes[i],u),d=u.uniforms,f=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*pi-1),g=r/v,m=isFinite(r)?1+Math.floor(h*g):pi;m>pi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${pi}`);const p=[];let _=0;for(let I=0;I<pi;++I){const B=I/g,E=Math.exp(-B*B/2);p.push(E),I===0?_+=E:I<m&&(_+=2*E)}for(let I=0;I<p.length;I++)p[I]=p[I]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=v,d.mipInt.value=y-n;const x=this._sizeLods[i],w=3*x*(i>y-Wi?i-y+Wi:0),A=4*(this._cubeSize-x);rs(t,w,A,3*x,2*x),l.setRenderTarget(t),l.render(c,io)}}function zp(s){const e=[],t=[],n=[];let i=s;const r=s-Wi+1+rl.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Wi?l=rl[o-s+Wi-1]:o===0&&(l=0),n.push(l);const u=1/(a-2),h=-u,c=1+u,d=[h,h,c,h,c,c,h,h,c,c,h,c],f=6,v=6,g=3,m=2,p=1,_=new Float32Array(g*v*f),y=new Float32Array(m*v*f),x=new Float32Array(p*v*f);for(let A=0;A<f;A++){const I=A%3*2/3-1,B=A>2?0:-1,E=[I,B,0,I+2/3,B,0,I+2/3,B+1,0,I,B,0,I+2/3,B+1,0,I,B+1,0];_.set(E,g*v*A),y.set(d,m*v*A);const M=[A,A,A,A,A,A];x.set(M,p*v*A)}const w=new _n;w.setAttribute("position",new Zt(_,g)),w.setAttribute("uv",new Zt(y,m)),w.setAttribute("faceIndex",new Zt(x,p)),e.push(w),i>Wi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ll(s,e,t){const n=new yi(s,e,t);return n.texture.mapping=ws,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rs(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Vp(s,e,t){const n=new Float32Array(pi),i=new J(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:pi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:qo(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function cl(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qo(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function ul(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function qo(){return`

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
	`}function kp(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,u=l===Eo||l===So,h=l===Zi||l===$i;if(u||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let c=e.get(a);return t===null&&(t=new al(s)),c=u?t.fromEquirectangular(a,c):t.fromCubemap(a,c),e.set(a,c),c.texture}else{if(e.has(a))return e.get(a).texture;{const c=a.image;if(u&&c&&c.height>0||h&&c&&i(c)){t===null&&(t=new al(s));const d=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let l=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&l++;return l===u}function r(a){const l=a.target;l.removeEventListener("dispose",r);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Hp(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Gp(s,e,t,n){const i={},r=new WeakMap;function o(c){const d=c.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const g=d.morphAttributes[v];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(c,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(c){const d=c.attributes;for(const v in d)e.update(d[v],s.ARRAY_BUFFER);const f=c.morphAttributes;for(const v in f){const g=f[v];for(let m=0,p=g.length;m<p;m++)e.update(g[m],s.ARRAY_BUFFER)}}function u(c){const d=[],f=c.index,v=c.attributes.position;let g=0;if(f!==null){const _=f.array;g=f.version;for(let y=0,x=_.length;y<x;y+=3){const w=_[y+0],A=_[y+1],I=_[y+2];d.push(w,A,A,I,I,w)}}else if(v!==void 0){const _=v.array;g=v.version;for(let y=0,x=_.length/3-1;y<x;y+=3){const w=y+0,A=y+1,I=y+2;d.push(w,A,A,I,I,w)}}else return;const m=new(bc(d)?Pc:Lc)(d,1);m.version=g;const p=r.get(c);p&&e.remove(p),r.set(c,m)}function h(c){const d=r.get(c);if(d){const f=c.index;f!==null&&d.version<f.version&&u(c)}else u(c);return r.get(c)}return{get:a,update:l,getWireframeAttribute:h}}function Wp(s,e,t,n){const i=n.isWebGL2;let r;function o(f){r=f}let a,l;function u(f){a=f.type,l=f.bytesPerElement}function h(f,v){s.drawElements(r,v,a,f*l),t.update(v,r,1)}function c(f,v,g){if(g===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,v,a,f*l,g),t.update(v,r,g)}function d(f,v,g){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<g;p++)this.render(f[p]/l,v[p]);else{m.multiDrawElementsWEBGL(r,v,0,a,f,0,g);let p=0;for(let _=0;_<g;_++)p+=v[_];t.update(p,r,1)}}this.setMode=o,this.setIndex=u,this.render=h,this.renderInstances=c,this.renderMultiDraw=d}function Xp(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function qp(s,e){return s[0]-e[0]}function Yp(s,e){return Math.abs(e[1])-Math.abs(s[1])}function jp(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new Mt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,h,c){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=v!==void 0?v.length:0;let m=r.get(h);if(m===void 0||m.count!==g){let V=function(){q.dispose(),r.delete(h),h.removeEventListener("dispose",V)};var f=V;m!==void 0&&m.texture.dispose();const y=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],B=h.morphAttributes.color||[];let E=0;y===!0&&(E=1),x===!0&&(E=2),w===!0&&(E=3);let M=h.attributes.position.count*E,P=1;M>e.maxTextureSize&&(P=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const z=new Float32Array(M*P*4*g),q=new Ac(z,M,P,g);q.type=Fn,q.needsUpdate=!0;const U=E*4;for(let Q=0;Q<g;Q++){const F=A[Q],D=I[Q],j=B[Q],W=M*P*4*Q;for(let N=0;N<F.count;N++){const H=N*U;y===!0&&(o.fromBufferAttribute(F,N),z[W+H+0]=o.x,z[W+H+1]=o.y,z[W+H+2]=o.z,z[W+H+3]=0),x===!0&&(o.fromBufferAttribute(D,N),z[W+H+4]=o.x,z[W+H+5]=o.y,z[W+H+6]=o.z,z[W+H+7]=0),w===!0&&(o.fromBufferAttribute(j,N),z[W+H+8]=o.x,z[W+H+9]=o.y,z[W+H+10]=o.z,z[W+H+11]=j.itemSize===4?o.w:1)}}m={count:g,texture:q,size:new pt(M,P)},r.set(h,m),h.addEventListener("dispose",V)}let p=0;for(let y=0;y<d.length;y++)p+=d[y];const _=h.morphTargetsRelative?1:1-p;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",d),c.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const v=d===void 0?0:d.length;let g=n[h.id];if(g===void 0||g.length!==v){g=[];for(let x=0;x<v;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<v;x++){const w=g[x];w[0]=x,w[1]=d[x]}g.sort(Yp);for(let x=0;x<8;x++)x<v&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(qp);const m=h.morphAttributes.position,p=h.morphAttributes.normal;let _=0;for(let x=0;x<8;x++){const w=a[x],A=w[0],I=w[1];A!==Number.MAX_SAFE_INTEGER&&I?(m&&h.getAttribute("morphTarget"+x)!==m[A]&&h.setAttribute("morphTarget"+x,m[A]),p&&h.getAttribute("morphNormal"+x)!==p[A]&&h.setAttribute("morphNormal"+x,p[A]),i[x]=I,_+=I):(m&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),p&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}const y=h.morphTargetsRelative?1:1-_;c.getUniforms().setValue(s,"morphTargetBaseInfluence",y),c.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Kp(s,e,t,n){let i=new WeakMap;function r(l){const u=n.render.frame,h=l.geometry,c=e.get(l,h);if(i.get(c)!==u&&(e.update(c),i.set(c,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==u&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==u&&(d.update(),i.set(d,u))}return c}function o(){i=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:o}}class Fc extends Gt{constructor(e,t,n,i,r,o,a,l,u,h){if(h=h!==void 0?h:gi,h!==gi&&h!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===gi&&(n=Kn),n===void 0&&h===Qi&&(n=vi),super(null,i,r,o,a,l,h,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Vt,this.minFilter=l!==void 0?l:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Bc=new Gt,Oc=new Fc(1,1);Oc.compareFunction=Mc;const zc=new Ac,Vc=new Ih,kc=new Dc,hl=[],dl=[],fl=new Float32Array(16),pl=new Float32Array(9),ml=new Float32Array(4);function ar(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=hl[i];if(r===void 0&&(r=new Float32Array(i),hl[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Ft(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Bt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ls(s,e){let t=dl[e];t===void 0&&(t=new Int32Array(e),dl[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Zp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function $p(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2fv(this.addr,e),Bt(t,e)}}function Jp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;s.uniform3fv(this.addr,e),Bt(t,e)}}function Qp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4fv(this.addr,e),Bt(t,e)}}function em(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,n))return;ml.set(n),s.uniformMatrix2fv(this.addr,!1,ml),Bt(t,n)}}function tm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,n))return;pl.set(n),s.uniformMatrix3fv(this.addr,!1,pl),Bt(t,n)}}function nm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,n))return;fl.set(n),s.uniformMatrix4fv(this.addr,!1,fl),Bt(t,n)}}function im(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function rm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2iv(this.addr,e),Bt(t,e)}}function sm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;s.uniform3iv(this.addr,e),Bt(t,e)}}function om(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4iv(this.addr,e),Bt(t,e)}}function am(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function lm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2uiv(this.addr,e),Bt(t,e)}}function cm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;s.uniform3uiv(this.addr,e),Bt(t,e)}}function um(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4uiv(this.addr,e),Bt(t,e)}}function hm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?Oc:Bc;t.setTexture2D(e||r,i)}function dm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Vc,i)}function fm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||kc,i)}function pm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||zc,i)}function mm(s){switch(s){case 5126:return Zp;case 35664:return $p;case 35665:return Jp;case 35666:return Qp;case 35674:return em;case 35675:return tm;case 35676:return nm;case 5124:case 35670:return im;case 35667:case 35671:return rm;case 35668:case 35672:return sm;case 35669:case 35673:return om;case 5125:return am;case 36294:return lm;case 36295:return cm;case 36296:return um;case 35678:case 36198:case 36298:case 36306:case 35682:return hm;case 35679:case 36299:case 36307:return dm;case 35680:case 36300:case 36308:case 36293:return fm;case 36289:case 36303:case 36311:case 36292:return pm}}function vm(s,e){s.uniform1fv(this.addr,e)}function gm(s,e){const t=ar(e,this.size,2);s.uniform2fv(this.addr,t)}function _m(s,e){const t=ar(e,this.size,3);s.uniform3fv(this.addr,t)}function xm(s,e){const t=ar(e,this.size,4);s.uniform4fv(this.addr,t)}function ym(s,e){const t=ar(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Em(s,e){const t=ar(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Sm(s,e){const t=ar(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Mm(s,e){s.uniform1iv(this.addr,e)}function bm(s,e){s.uniform2iv(this.addr,e)}function wm(s,e){s.uniform3iv(this.addr,e)}function Tm(s,e){s.uniform4iv(this.addr,e)}function Am(s,e){s.uniform1uiv(this.addr,e)}function Rm(s,e){s.uniform2uiv(this.addr,e)}function Cm(s,e){s.uniform3uiv(this.addr,e)}function Lm(s,e){s.uniform4uiv(this.addr,e)}function Pm(s,e,t){const n=this.cache,i=e.length,r=Ls(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Bc,r[o])}function Im(s,e,t){const n=this.cache,i=e.length,r=Ls(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Vc,r[o])}function Nm(s,e,t){const n=this.cache,i=e.length,r=Ls(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||kc,r[o])}function Dm(s,e,t){const n=this.cache,i=e.length,r=Ls(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||zc,r[o])}function Um(s){switch(s){case 5126:return vm;case 35664:return gm;case 35665:return _m;case 35666:return xm;case 35674:return ym;case 35675:return Em;case 35676:return Sm;case 5124:case 35670:return Mm;case 35667:case 35671:return bm;case 35668:case 35672:return wm;case 35669:case 35673:return Tm;case 5125:return Am;case 36294:return Rm;case 36295:return Cm;case 36296:return Lm;case 35678:case 36198:case 36298:case 36306:case 35682:return Pm;case 35679:case 36299:case 36307:return Im;case 35680:case 36300:case 36308:case 36293:return Nm;case 36289:case 36303:case 36311:case 36292:return Dm}}class Fm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=mm(t.type)}}class Bm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Um(t.type)}}class Om{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const ao=/(\w+)(\])?(\[|\.)?/g;function vl(s,e){s.seq.push(e),s.map[e.id]=e}function zm(s,e,t){const n=s.name,i=n.length;for(ao.lastIndex=0;;){const r=ao.exec(n),o=ao.lastIndex;let a=r[1];const l=r[2]==="]",u=r[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===i){vl(t,u===void 0?new Fm(a,s,e):new Bm(a,s,e));break}else{let c=t.map[a];c===void 0&&(c=new Om(a),vl(t,c)),t=c}}}class ms{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);zm(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function gl(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Vm=37297;let km=0;function Hm(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Gm(s){const e=yt.getPrimaries(yt.workingColorSpace),t=yt.getPrimaries(s);let n;switch(e===t?n="":e===ys&&t===xs?n="LinearDisplayP3ToLinearSRGB":e===xs&&t===ys&&(n="LinearSRGBToLinearDisplayP3"),s){case Ht:case Ts:return[n,"LinearTransferOETF"];case Pt:case Ho:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function _l(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Hm(s.getShaderSource(e),o)}else return i}function Wm(s,e){const t=Gm(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Xm(s,e){let t;switch(e){case zu:t="Linear";break;case Vu:t="Reinhard";break;case ku:t="OptimizedCineon";break;case Hu:t="ACESFilmic";break;case Wu:t="AgX";break;case Gu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function qm(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xi).join(`
`)}function Ym(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Xi).join(`
`)}function jm(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Km(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Xi(s){return s!==""}function xl(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ro(s){return s.replace(Zm,Jm)}const $m=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Jm(s,e){let t=st[e];if(t===void 0){const n=$m.get(e);if(n!==void 0)t=st[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ro(t)}const Qm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function El(s){return s.replace(Qm,ev)}function ev(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Sl(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tv(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===cc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===fu?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Un&&(e="SHADOWMAP_TYPE_VSM"),e}function nv(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Zi:case $i:e="ENVMAP_TYPE_CUBE";break;case ws:e="ENVMAP_TYPE_CUBE_UV";break}return e}function iv(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case $i:e="ENVMAP_MODE_REFRACTION";break}return e}function rv(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case uc:e="ENVMAP_BLENDING_MULTIPLY";break;case Bu:e="ENVMAP_BLENDING_MIX";break;case Ou:e="ENVMAP_BLENDING_ADD";break}return e}function sv(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ov(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=tv(t),u=nv(t),h=iv(t),c=rv(t),d=sv(t),f=t.isWebGL2?"":qm(t),v=Ym(t),g=jm(r),m=i.createProgram();let p,_,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xi).join(`
`),p.length>0&&(p+=`
`),_=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xi).join(`
`),_.length>0&&(_+=`
`)):(p=[Sl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xi).join(`
`),_=[f,Sl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+c:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?st.tonemapping_pars_fragment:"",t.toneMapping!==Qn?Xm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,Wm("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xi).join(`
`)),o=Ro(o),o=xl(o,t),o=yl(o,t),a=Ro(a),a=xl(a,t),a=yl(a,t),o=El(o),a=El(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Va?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Va?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=y+p+o,w=y+_+a,A=gl(i,i.VERTEX_SHADER,x),I=gl(i,i.FRAGMENT_SHADER,w);i.attachShader(m,A),i.attachShader(m,I),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function B(z){if(s.debug.checkShaderErrors){const q=i.getProgramInfoLog(m).trim(),U=i.getShaderInfoLog(A).trim(),V=i.getShaderInfoLog(I).trim();let Q=!0,F=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,A,I);else{const D=_l(i,A,"vertex"),j=_l(i,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+D+`
`+j)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(U===""||V==="")&&(F=!1);F&&(z.diagnostics={runnable:Q,programLog:q,vertexShader:{log:U,prefix:p},fragmentShader:{log:V,prefix:_}})}i.deleteShader(A),i.deleteShader(I),E=new ms(i,m),M=Km(i,m)}let E;this.getUniforms=function(){return E===void 0&&B(this),E};let M;this.getAttributes=function(){return M===void 0&&B(this),M};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(m,Vm)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=km++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=I,this}let av=0;class lv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new cv(e),t.set(e,n)),n}}class cv{constructor(e){this.id=av++,this.code=e,this.usedTimes=0}}function uv(s,e,t,n,i,r,o){const a=new Rc,l=new lv,u=[],h=i.isWebGL2,c=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return E===0?"uv":`uv${E}`}function m(E,M,P,z,q){const U=z.fog,V=q.geometry,Q=E.isMeshStandardMaterial?z.environment:null,F=(E.isMeshStandardMaterial?t:e).get(E.envMap||Q),D=F&&F.mapping===ws?F.image.height:null,j=v[E.type];E.precision!==null&&(f=i.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const W=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,N=W!==void 0?W.length:0;let H=0;V.morphAttributes.position!==void 0&&(H=1),V.morphAttributes.normal!==void 0&&(H=2),V.morphAttributes.color!==void 0&&(H=3);let T,R,C,X;if(j){const le=Sn[j];T=le.vertexShader,R=le.fragmentShader}else T=E.vertexShader,R=E.fragmentShader,l.update(E),C=l.getVertexShaderID(E),X=l.getFragmentShaderID(E);const ne=s.getRenderTarget(),ie=q.isInstancedMesh===!0,K=q.isBatchedMesh===!0,te=!!E.map,ue=!!E.matcap,Y=!!F,Pe=!!E.aoMap,de=!!E.lightMap,se=!!E.bumpMap,oe=!!E.normalMap,qe=!!E.displacementMap,Ae=!!E.emissiveMap,L=!!E.metalnessMap,S=!!E.roughnessMap,ee=E.anisotropy>0,fe=E.clearcoat>0,he=E.iridescence>0,me=E.sheen>0,we=E.transmission>0,ye=ee&&!!E.anisotropyMap,Ee=fe&&!!E.clearcoatMap,He=fe&&!!E.clearcoatNormalMap,Ze=fe&&!!E.clearcoatRoughnessMap,xe=he&&!!E.iridescenceMap,lt=he&&!!E.iridescenceThicknessMap,nt=me&&!!E.sheenColorMap,je=me&&!!E.sheenRoughnessMap,Ge=!!E.specularMap,Ve=!!E.specularColorMap,tt=!!E.specularIntensityMap,rt=we&&!!E.transmissionMap,mt=we&&!!E.thicknessMap,Qe=!!E.gradientMap,Te=!!E.alphaMap,G=E.alphaTest>0,Re=!!E.alphaHash,Ne=!!E.extensions,$e=!!V.attributes.uv1,Ye=!!V.attributes.uv2,vt=!!V.attributes.uv3;let gt=Qn;return E.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(gt=s.toneMapping),{isWebGL2:h,shaderID:j,shaderType:E.type,shaderName:E.name,vertexShader:T,fragmentShader:R,defines:E.defines,customVertexShaderID:C,customFragmentShaderID:X,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:K,instancing:ie,instancingColor:ie&&q.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ne===null?s.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ht,map:te,matcap:ue,envMap:Y,envMapMode:Y&&F.mapping,envMapCubeUVHeight:D,aoMap:Pe,lightMap:de,bumpMap:se,normalMap:oe,displacementMap:d&&qe,emissiveMap:Ae,normalMapObjectSpace:oe&&E.normalMapType===rh,normalMapTangentSpace:oe&&E.normalMapType===Sc,metalnessMap:L,roughnessMap:S,anisotropy:ee,anisotropyMap:ye,clearcoat:fe,clearcoatMap:Ee,clearcoatNormalMap:He,clearcoatRoughnessMap:Ze,iridescence:he,iridescenceMap:xe,iridescenceThicknessMap:lt,sheen:me,sheenColorMap:nt,sheenRoughnessMap:je,specularMap:Ge,specularColorMap:Ve,specularIntensityMap:tt,transmission:we,transmissionMap:rt,thicknessMap:mt,gradientMap:Qe,opaque:E.transparent===!1&&E.blending===Yi,alphaMap:Te,alphaTest:G,alphaHash:Re,combine:E.combine,mapUv:te&&g(E.map.channel),aoMapUv:Pe&&g(E.aoMap.channel),lightMapUv:de&&g(E.lightMap.channel),bumpMapUv:se&&g(E.bumpMap.channel),normalMapUv:oe&&g(E.normalMap.channel),displacementMapUv:qe&&g(E.displacementMap.channel),emissiveMapUv:Ae&&g(E.emissiveMap.channel),metalnessMapUv:L&&g(E.metalnessMap.channel),roughnessMapUv:S&&g(E.roughnessMap.channel),anisotropyMapUv:ye&&g(E.anisotropyMap.channel),clearcoatMapUv:Ee&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:He&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ze&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:je&&g(E.sheenRoughnessMap.channel),specularMapUv:Ge&&g(E.specularMap.channel),specularColorMapUv:Ve&&g(E.specularColorMap.channel),specularIntensityMapUv:tt&&g(E.specularIntensityMap.channel),transmissionMapUv:rt&&g(E.transmissionMap.channel),thicknessMapUv:mt&&g(E.thicknessMap.channel),alphaMapUv:Te&&g(E.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(oe||ee),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:$e,vertexUv2s:Ye,vertexUv3s:vt,pointsUvs:q.isPoints===!0&&!!V.attributes.uv&&(te||Te),fog:!!U,useFog:E.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:c,skinning:q.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:H,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:gt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:te&&E.map.isVideoTexture===!0&&yt.getTransfer(E.map.colorSpace)===bt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===bn,flipSided:E.side===Qt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:Ne&&E.extensions.derivatives===!0,extensionFragDepth:Ne&&E.extensions.fragDepth===!0,extensionDrawBuffers:Ne&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ne&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ne&&E.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function p(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)M.push(P),M.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(_(M,E),y(M,E),M.push(s.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function _(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function y(E,M){a.disableAll(),M.isWebGL2&&a.enable(0),M.supportsVertexTextures&&a.enable(1),M.instancing&&a.enable(2),M.instancingColor&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function x(E){const M=v[E.type];let P;if(M){const z=Sn[M];P=Xh.clone(z.uniforms)}else P=E.uniforms;return P}function w(E,M){let P;for(let z=0,q=u.length;z<q;z++){const U=u[z];if(U.cacheKey===M){P=U,++P.usedTimes;break}}return P===void 0&&(P=new ov(s,M,E,r),u.push(P)),P}function A(E){if(--E.usedTimes===0){const M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function I(E){l.remove(E)}function B(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:w,releaseProgram:A,releaseShaderCache:I,programs:u,dispose:B}}function hv(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function dv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ml(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function bl(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(c,d,f,v,g,m){let p=s[e];return p===void 0?(p={id:c.id,object:c,geometry:d,material:f,groupOrder:v,renderOrder:c.renderOrder,z:g,group:m},s[e]=p):(p.id=c.id,p.object=c,p.geometry=d,p.material=f,p.groupOrder=v,p.renderOrder=c.renderOrder,p.z=g,p.group=m),e++,p}function a(c,d,f,v,g,m){const p=o(c,d,f,v,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(c,d,f,v,g,m){const p=o(c,d,f,v,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function u(c,d){t.length>1&&t.sort(c||dv),n.length>1&&n.sort(d||Ml),i.length>1&&i.sort(d||Ml)}function h(){for(let c=e,d=s.length;c<d;c++){const f=s[c];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:u}}function fv(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new bl,s.set(n,[o])):i>=r.length?(o=new bl,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function pv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new it};break;case"SpotLight":t={position:new J,direction:new J,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new J,halfWidth:new J,halfHeight:new J};break}return s[e.id]=t,t}}}function mv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let vv=0;function gv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function _v(s,e){const t=new pv,n=mv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new J);const r=new J,o=new at,a=new at;function l(h,c){let d=0,f=0,v=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let g=0,m=0,p=0,_=0,y=0,x=0,w=0,A=0,I=0,B=0,E=0;h.sort(gv);const M=c===!0?Math.PI:1;for(let z=0,q=h.length;z<q;z++){const U=h[z],V=U.color,Q=U.intensity,F=U.distance,D=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=V.r*Q*M,f+=V.g*Q*M,v+=V.b*Q*M;else if(U.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(U.sh.coefficients[j],Q);E++}else if(U.isDirectionalLight){const j=t.get(U);if(j.color.copy(U.color).multiplyScalar(U.intensity*M),U.castShadow){const W=U.shadow,N=n.get(U);N.shadowBias=W.bias,N.shadowNormalBias=W.normalBias,N.shadowRadius=W.radius,N.shadowMapSize=W.mapSize,i.directionalShadow[g]=N,i.directionalShadowMap[g]=D,i.directionalShadowMatrix[g]=U.shadow.matrix,x++}i.directional[g]=j,g++}else if(U.isSpotLight){const j=t.get(U);j.position.setFromMatrixPosition(U.matrixWorld),j.color.copy(V).multiplyScalar(Q*M),j.distance=F,j.coneCos=Math.cos(U.angle),j.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),j.decay=U.decay,i.spot[p]=j;const W=U.shadow;if(U.map&&(i.spotLightMap[I]=U.map,I++,W.updateMatrices(U),U.castShadow&&B++),i.spotLightMatrix[p]=W.matrix,U.castShadow){const N=n.get(U);N.shadowBias=W.bias,N.shadowNormalBias=W.normalBias,N.shadowRadius=W.radius,N.shadowMapSize=W.mapSize,i.spotShadow[p]=N,i.spotShadowMap[p]=D,A++}p++}else if(U.isRectAreaLight){const j=t.get(U);j.color.copy(V).multiplyScalar(Q),j.halfWidth.set(U.width*.5,0,0),j.halfHeight.set(0,U.height*.5,0),i.rectArea[_]=j,_++}else if(U.isPointLight){const j=t.get(U);if(j.color.copy(U.color).multiplyScalar(U.intensity*M),j.distance=U.distance,j.decay=U.decay,U.castShadow){const W=U.shadow,N=n.get(U);N.shadowBias=W.bias,N.shadowNormalBias=W.normalBias,N.shadowRadius=W.radius,N.shadowMapSize=W.mapSize,N.shadowCameraNear=W.camera.near,N.shadowCameraFar=W.camera.far,i.pointShadow[m]=N,i.pointShadowMap[m]=D,i.pointShadowMatrix[m]=U.shadow.matrix,w++}i.point[m]=j,m++}else if(U.isHemisphereLight){const j=t.get(U);j.skyColor.copy(U.color).multiplyScalar(Q*M),j.groundColor.copy(U.groundColor).multiplyScalar(Q*M),i.hemi[y]=j,y++}}_>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Be.LTC_FLOAT_1,i.rectAreaLTC2=Be.LTC_FLOAT_2):(i.rectAreaLTC1=Be.LTC_HALF_1,i.rectAreaLTC2=Be.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Be.LTC_FLOAT_1,i.rectAreaLTC2=Be.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Be.LTC_HALF_1,i.rectAreaLTC2=Be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=v;const P=i.hash;(P.directionalLength!==g||P.pointLength!==m||P.spotLength!==p||P.rectAreaLength!==_||P.hemiLength!==y||P.numDirectionalShadows!==x||P.numPointShadows!==w||P.numSpotShadows!==A||P.numSpotMaps!==I||P.numLightProbes!==E)&&(i.directional.length=g,i.spot.length=p,i.rectArea.length=_,i.point.length=m,i.hemi.length=y,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=A+I-B,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=B,i.numLightProbes=E,P.directionalLength=g,P.pointLength=m,P.spotLength=p,P.rectAreaLength=_,P.hemiLength=y,P.numDirectionalShadows=x,P.numPointShadows=w,P.numSpotShadows=A,P.numSpotMaps=I,P.numLightProbes=E,i.version=vv++)}function u(h,c){let d=0,f=0,v=0,g=0,m=0;const p=c.matrixWorldInverse;for(let _=0,y=h.length;_<y;_++){const x=h[_];if(x.isDirectionalLight){const w=i.directional[d];w.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),d++}else if(x.isSpotLight){const w=i.spot[v];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),v++}else if(x.isRectAreaLight){const w=i.rectArea[g];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(p),a.identity(),o.copy(x.matrixWorld),o.premultiply(p),a.extractRotation(o),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const w=i.point[f];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const w=i.hemi[m];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:l,setupView:u,state:i}}function wl(s,e){const t=new _v(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(c){n.push(c)}function a(c){i.push(c)}function l(c){t.setup(n,c)}function u(c){t.setupView(n,c)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function xv(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new wl(s,e),t.set(r,[l])):o>=a.length?(l=new wl(s,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class yv extends Tn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ev extends Tn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Sv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mv=`uniform sampler2D shadow_pass;
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
}`;function bv(s,e,t){let n=new Wo;const i=new pt,r=new pt,o=new Mt,a=new yv({depthPacking:ih}),l=new Ev,u={},h=t.maxTextureSize,c={[On]:Qt,[Qt]:On,[bn]:bn},d=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:Sv,fragmentShader:Mv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const v=new _n;v.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Jt(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cc;let p=this.type;this.render=function(A,I,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=s.getRenderTarget(),M=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),z=s.state;z.setBlending(Jn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const q=p!==Un&&this.type===Un,U=p===Un&&this.type!==Un;for(let V=0,Q=A.length;V<Q;V++){const F=A[V],D=F.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const j=D.getFrameExtents();if(i.multiply(j),r.copy(D.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/j.x),i.x=r.x*j.x,D.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/j.y),i.y=r.y*j.y,D.mapSize.y=r.y)),D.map===null||q===!0||U===!0){const N=this.type!==Un?{minFilter:Vt,magFilter:Vt}:{};D.map!==null&&D.map.dispose(),D.map=new yi(i.x,i.y,N),D.map.texture.name=F.name+".shadowMap",D.camera.updateProjectionMatrix()}s.setRenderTarget(D.map),s.clear();const W=D.getViewportCount();for(let N=0;N<W;N++){const H=D.getViewport(N);o.set(r.x*H.x,r.y*H.y,r.x*H.z,r.y*H.w),z.viewport(o),D.updateMatrices(F,N),n=D.getFrustum(),x(I,B,D.camera,F,this.type)}D.isPointLightShadow!==!0&&this.type===Un&&_(D,B),D.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(E,M,P)};function _(A,I){const B=e.update(g);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new yi(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(I,null,B,d,g,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(I,null,B,f,g,null)}function y(A,I,B,E){let M=null;const P=B.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)M=P;else if(M=B.isPointLight===!0?l:a,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const z=M.uuid,q=I.uuid;let U=u[z];U===void 0&&(U={},u[z]=U);let V=U[q];V===void 0&&(V=M.clone(),U[q]=V,I.addEventListener("dispose",w)),M=V}if(M.visible=I.visible,M.wireframe=I.wireframe,E===Un?M.side=I.shadowSide!==null?I.shadowSide:I.side:M.side=I.shadowSide!==null?I.shadowSide:c[I.side],M.alphaMap=I.alphaMap,M.alphaTest=I.alphaTest,M.map=I.map,M.clipShadows=I.clipShadows,M.clippingPlanes=I.clippingPlanes,M.clipIntersection=I.clipIntersection,M.displacementMap=I.displacementMap,M.displacementScale=I.displacementScale,M.displacementBias=I.displacementBias,M.wireframeLinewidth=I.wireframeLinewidth,M.linewidth=I.linewidth,B.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=s.properties.get(M);z.light=B}return M}function x(A,I,B,E,M){if(A.visible===!1)return;if(A.layers.test(I.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===Un)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,A.matrixWorld);const q=e.update(A),U=A.material;if(Array.isArray(U)){const V=q.groups;for(let Q=0,F=V.length;Q<F;Q++){const D=V[Q],j=U[D.materialIndex];if(j&&j.visible){const W=y(A,j,E,M);A.onBeforeShadow(s,A,I,B,q,W,D),s.renderBufferDirect(B,null,q,W,A,D),A.onAfterShadow(s,A,I,B,q,W,D)}}}else if(U.visible){const V=y(A,U,E,M);A.onBeforeShadow(s,A,I,B,q,V,null),s.renderBufferDirect(B,null,q,V,A,null),A.onAfterShadow(s,A,I,B,q,V,null)}}const z=A.children;for(let q=0,U=z.length;q<U;q++)x(z[q],I,B,E,M)}function w(A){A.target.removeEventListener("dispose",w);for(const B in u){const E=u[B],M=A.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}function wv(s,e,t){const n=t.isWebGL2;function i(){let G=!1;const Re=new Mt;let Ne=null;const $e=new Mt(0,0,0,0);return{setMask:function(Ye){Ne!==Ye&&!G&&(s.colorMask(Ye,Ye,Ye,Ye),Ne=Ye)},setLocked:function(Ye){G=Ye},setClear:function(Ye,vt,gt,ct,le){le===!0&&(Ye*=ct,vt*=ct,gt*=ct),Re.set(Ye,vt,gt,ct),$e.equals(Re)===!1&&(s.clearColor(Ye,vt,gt,ct),$e.copy(Re))},reset:function(){G=!1,Ne=null,$e.set(-1,0,0,0)}}}function r(){let G=!1,Re=null,Ne=null,$e=null;return{setTest:function(Ye){Ye?K(s.DEPTH_TEST):te(s.DEPTH_TEST)},setMask:function(Ye){Re!==Ye&&!G&&(s.depthMask(Ye),Re=Ye)},setFunc:function(Ye){if(Ne!==Ye){switch(Ye){case Lu:s.depthFunc(s.NEVER);break;case Pu:s.depthFunc(s.ALWAYS);break;case Iu:s.depthFunc(s.LESS);break;case vs:s.depthFunc(s.LEQUAL);break;case Nu:s.depthFunc(s.EQUAL);break;case Du:s.depthFunc(s.GEQUAL);break;case Uu:s.depthFunc(s.GREATER);break;case Fu:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ne=Ye}},setLocked:function(Ye){G=Ye},setClear:function(Ye){$e!==Ye&&(s.clearDepth(Ye),$e=Ye)},reset:function(){G=!1,Re=null,Ne=null,$e=null}}}function o(){let G=!1,Re=null,Ne=null,$e=null,Ye=null,vt=null,gt=null,ct=null,le=null;return{setTest:function(ce){G||(ce?K(s.STENCIL_TEST):te(s.STENCIL_TEST))},setMask:function(ce){Re!==ce&&!G&&(s.stencilMask(ce),Re=ce)},setFunc:function(ce,pe,ve){(Ne!==ce||$e!==pe||Ye!==ve)&&(s.stencilFunc(ce,pe,ve),Ne=ce,$e=pe,Ye=ve)},setOp:function(ce,pe,ve){(vt!==ce||gt!==pe||ct!==ve)&&(s.stencilOp(ce,pe,ve),vt=ce,gt=pe,ct=ve)},setLocked:function(ce){G=ce},setClear:function(ce){le!==ce&&(s.clearStencil(ce),le=ce)},reset:function(){G=!1,Re=null,Ne=null,$e=null,Ye=null,vt=null,gt=null,ct=null,le=null}}}const a=new i,l=new r,u=new o,h=new WeakMap,c=new WeakMap;let d={},f={},v=new WeakMap,g=[],m=null,p=!1,_=null,y=null,x=null,w=null,A=null,I=null,B=null,E=new it(0,0,0),M=0,P=!1,z=null,q=null,U=null,V=null,Q=null;const F=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,j=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(W)[1]),D=j>=1):W.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),D=j>=2);let N=null,H={};const T=s.getParameter(s.SCISSOR_BOX),R=s.getParameter(s.VIEWPORT),C=new Mt().fromArray(T),X=new Mt().fromArray(R);function ne(G,Re,Ne,$e){const Ye=new Uint8Array(4),vt=s.createTexture();s.bindTexture(G,vt),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let gt=0;gt<Ne;gt++)n&&(G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY)?s.texImage3D(Re,0,s.RGBA,1,1,$e,0,s.RGBA,s.UNSIGNED_BYTE,Ye):s.texImage2D(Re+gt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ye);return vt}const ie={};ie[s.TEXTURE_2D]=ne(s.TEXTURE_2D,s.TEXTURE_2D,1),ie[s.TEXTURE_CUBE_MAP]=ne(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ie[s.TEXTURE_2D_ARRAY]=ne(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ie[s.TEXTURE_3D]=ne(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),K(s.DEPTH_TEST),l.setFunc(vs),Ae(!1),L(ra),K(s.CULL_FACE),oe(Jn);function K(G){d[G]!==!0&&(s.enable(G),d[G]=!0)}function te(G){d[G]!==!1&&(s.disable(G),d[G]=!1)}function ue(G,Re){return f[G]!==Re?(s.bindFramebuffer(G,Re),f[G]=Re,n&&(G===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=Re),G===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=Re)),!0):!1}function Y(G,Re){let Ne=g,$e=!1;if(G)if(Ne=v.get(Re),Ne===void 0&&(Ne=[],v.set(Re,Ne)),G.isWebGLMultipleRenderTargets){const Ye=G.texture;if(Ne.length!==Ye.length||Ne[0]!==s.COLOR_ATTACHMENT0){for(let vt=0,gt=Ye.length;vt<gt;vt++)Ne[vt]=s.COLOR_ATTACHMENT0+vt;Ne.length=Ye.length,$e=!0}}else Ne[0]!==s.COLOR_ATTACHMENT0&&(Ne[0]=s.COLOR_ATTACHMENT0,$e=!0);else Ne[0]!==s.BACK&&(Ne[0]=s.BACK,$e=!0);$e&&(t.isWebGL2?s.drawBuffers(Ne):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ne))}function Pe(G){return m!==G?(s.useProgram(G),m=G,!0):!1}const de={[fi]:s.FUNC_ADD,[mu]:s.FUNC_SUBTRACT,[vu]:s.FUNC_REVERSE_SUBTRACT};if(n)de[la]=s.MIN,de[ca]=s.MAX;else{const G=e.get("EXT_blend_minmax");G!==null&&(de[la]=G.MIN_EXT,de[ca]=G.MAX_EXT)}const se={[gu]:s.ZERO,[_u]:s.ONE,[xu]:s.SRC_COLOR,[xo]:s.SRC_ALPHA,[wu]:s.SRC_ALPHA_SATURATE,[Mu]:s.DST_COLOR,[Eu]:s.DST_ALPHA,[yu]:s.ONE_MINUS_SRC_COLOR,[yo]:s.ONE_MINUS_SRC_ALPHA,[bu]:s.ONE_MINUS_DST_COLOR,[Su]:s.ONE_MINUS_DST_ALPHA,[Tu]:s.CONSTANT_COLOR,[Au]:s.ONE_MINUS_CONSTANT_COLOR,[Ru]:s.CONSTANT_ALPHA,[Cu]:s.ONE_MINUS_CONSTANT_ALPHA};function oe(G,Re,Ne,$e,Ye,vt,gt,ct,le,ce){if(G===Jn){p===!0&&(te(s.BLEND),p=!1);return}if(p===!1&&(K(s.BLEND),p=!0),G!==pu){if(G!==_||ce!==P){if((y!==fi||A!==fi)&&(s.blendEquation(s.FUNC_ADD),y=fi,A=fi),ce)switch(G){case Yi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case sa:s.blendFunc(s.ONE,s.ONE);break;case oa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case aa:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Yi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case sa:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case oa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case aa:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}x=null,w=null,I=null,B=null,E.set(0,0,0),M=0,_=G,P=ce}return}Ye=Ye||Re,vt=vt||Ne,gt=gt||$e,(Re!==y||Ye!==A)&&(s.blendEquationSeparate(de[Re],de[Ye]),y=Re,A=Ye),(Ne!==x||$e!==w||vt!==I||gt!==B)&&(s.blendFuncSeparate(se[Ne],se[$e],se[vt],se[gt]),x=Ne,w=$e,I=vt,B=gt),(ct.equals(E)===!1||le!==M)&&(s.blendColor(ct.r,ct.g,ct.b,le),E.copy(ct),M=le),_=G,P=!1}function qe(G,Re){G.side===bn?te(s.CULL_FACE):K(s.CULL_FACE);let Ne=G.side===Qt;Re&&(Ne=!Ne),Ae(Ne),G.blending===Yi&&G.transparent===!1?oe(Jn):oe(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),l.setFunc(G.depthFunc),l.setTest(G.depthTest),l.setMask(G.depthWrite),a.setMask(G.colorWrite);const $e=G.stencilWrite;u.setTest($e),$e&&(u.setMask(G.stencilWriteMask),u.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),u.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ee(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?K(s.SAMPLE_ALPHA_TO_COVERAGE):te(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(G){z!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),z=G)}function L(G){G!==hu?(K(s.CULL_FACE),G!==q&&(G===ra?s.cullFace(s.BACK):G===du?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):te(s.CULL_FACE),q=G}function S(G){G!==U&&(D&&s.lineWidth(G),U=G)}function ee(G,Re,Ne){G?(K(s.POLYGON_OFFSET_FILL),(V!==Re||Q!==Ne)&&(s.polygonOffset(Re,Ne),V=Re,Q=Ne)):te(s.POLYGON_OFFSET_FILL)}function fe(G){G?K(s.SCISSOR_TEST):te(s.SCISSOR_TEST)}function he(G){G===void 0&&(G=s.TEXTURE0+F-1),N!==G&&(s.activeTexture(G),N=G)}function me(G,Re,Ne){Ne===void 0&&(N===null?Ne=s.TEXTURE0+F-1:Ne=N);let $e=H[Ne];$e===void 0&&($e={type:void 0,texture:void 0},H[Ne]=$e),($e.type!==G||$e.texture!==Re)&&(N!==Ne&&(s.activeTexture(Ne),N=Ne),s.bindTexture(G,Re||ie[G]),$e.type=G,$e.texture=Re)}function we(){const G=H[N];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ye(){try{s.compressedTexImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(){try{s.compressedTexImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function He(){try{s.texSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ze(){try{s.texSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function xe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function lt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function nt(){try{s.texStorage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function je(){try{s.texStorage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ge(){try{s.texImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ve(){try{s.texImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function tt(G){C.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),C.copy(G))}function rt(G){X.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),X.copy(G))}function mt(G,Re){let Ne=c.get(Re);Ne===void 0&&(Ne=new WeakMap,c.set(Re,Ne));let $e=Ne.get(G);$e===void 0&&($e=s.getUniformBlockIndex(Re,G.name),Ne.set(G,$e))}function Qe(G,Re){const $e=c.get(Re).get(G);h.get(Re)!==$e&&(s.uniformBlockBinding(Re,$e,G.__bindingPointIndex),h.set(Re,$e))}function Te(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},N=null,H={},f={},v=new WeakMap,g=[],m=null,p=!1,_=null,y=null,x=null,w=null,A=null,I=null,B=null,E=new it(0,0,0),M=0,P=!1,z=null,q=null,U=null,V=null,Q=null,C.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:K,disable:te,bindFramebuffer:ue,drawBuffers:Y,useProgram:Pe,setBlending:oe,setMaterial:qe,setFlipSided:Ae,setCullFace:L,setLineWidth:S,setPolygonOffset:ee,setScissorTest:fe,activeTexture:he,bindTexture:me,unbindTexture:we,compressedTexImage2D:ye,compressedTexImage3D:Ee,texImage2D:Ge,texImage3D:Ve,updateUBOMapping:mt,uniformBlockBinding:Qe,texStorage2D:nt,texStorage3D:je,texSubImage2D:He,texSubImage3D:Ze,compressedTexSubImage2D:xe,compressedTexSubImage3D:lt,scissor:tt,viewport:rt,reset:Te}}function Tv(s,e,t,n,i,r,o){const a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let c;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(L,S){return f?new OffscreenCanvas(L,S):Pr("canvas")}function g(L,S,ee,fe){let he=1;if((L.width>fe||L.height>fe)&&(he=fe/Math.max(L.width,L.height)),he<1||S===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const me=S?Ss:Math.floor,we=me(he*L.width),ye=me(he*L.height);c===void 0&&(c=v(we,ye));const Ee=ee?v(we,ye):c;return Ee.width=we,Ee.height=ye,Ee.getContext("2d").drawImage(L,0,0,we,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+we+"x"+ye+")."),Ee}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function m(L){return Ao(L.width)&&Ao(L.height)}function p(L){return a?!1:L.wrapS!==ln||L.wrapT!==ln||L.minFilter!==Vt&&L.minFilter!==$t}function _(L,S){return L.generateMipmaps&&S&&L.minFilter!==Vt&&L.minFilter!==$t}function y(L){s.generateMipmap(L)}function x(L,S,ee,fe,he=!1){if(a===!1)return S;if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let me=S;if(S===s.RED&&(ee===s.FLOAT&&(me=s.R32F),ee===s.HALF_FLOAT&&(me=s.R16F),ee===s.UNSIGNED_BYTE&&(me=s.R8)),S===s.RED_INTEGER&&(ee===s.UNSIGNED_BYTE&&(me=s.R8UI),ee===s.UNSIGNED_SHORT&&(me=s.R16UI),ee===s.UNSIGNED_INT&&(me=s.R32UI),ee===s.BYTE&&(me=s.R8I),ee===s.SHORT&&(me=s.R16I),ee===s.INT&&(me=s.R32I)),S===s.RG&&(ee===s.FLOAT&&(me=s.RG32F),ee===s.HALF_FLOAT&&(me=s.RG16F),ee===s.UNSIGNED_BYTE&&(me=s.RG8)),S===s.RGBA){const we=he?_s:yt.getTransfer(fe);ee===s.FLOAT&&(me=s.RGBA32F),ee===s.HALF_FLOAT&&(me=s.RGBA16F),ee===s.UNSIGNED_BYTE&&(me=we===bt?s.SRGB8_ALPHA8:s.RGBA8),ee===s.UNSIGNED_SHORT_4_4_4_4&&(me=s.RGBA4),ee===s.UNSIGNED_SHORT_5_5_5_1&&(me=s.RGB5_A1)}return(me===s.R16F||me===s.R32F||me===s.RG16F||me===s.RG32F||me===s.RGBA16F||me===s.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function w(L,S,ee){return _(L,ee)===!0||L.isFramebufferTexture&&L.minFilter!==Vt&&L.minFilter!==$t?Math.log2(Math.max(S.width,S.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?S.mipmaps.length:1}function A(L){return L===Vt||L===Mo||L===ps?s.NEAREST:s.LINEAR}function I(L){const S=L.target;S.removeEventListener("dispose",I),E(S),S.isVideoTexture&&h.delete(S)}function B(L){const S=L.target;S.removeEventListener("dispose",B),P(S)}function E(L){const S=n.get(L);if(S.__webglInit===void 0)return;const ee=L.source,fe=d.get(ee);if(fe){const he=fe[S.__cacheKey];he.usedTimes--,he.usedTimes===0&&M(L),Object.keys(fe).length===0&&d.delete(ee)}n.remove(L)}function M(L){const S=n.get(L);s.deleteTexture(S.__webglTexture);const ee=L.source,fe=d.get(ee);delete fe[S.__cacheKey],o.memory.textures--}function P(L){const S=L.texture,ee=n.get(L),fe=n.get(S);if(fe.__webglTexture!==void 0&&(s.deleteTexture(fe.__webglTexture),o.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(ee.__webglFramebuffer[he]))for(let me=0;me<ee.__webglFramebuffer[he].length;me++)s.deleteFramebuffer(ee.__webglFramebuffer[he][me]);else s.deleteFramebuffer(ee.__webglFramebuffer[he]);ee.__webglDepthbuffer&&s.deleteRenderbuffer(ee.__webglDepthbuffer[he])}else{if(Array.isArray(ee.__webglFramebuffer))for(let he=0;he<ee.__webglFramebuffer.length;he++)s.deleteFramebuffer(ee.__webglFramebuffer[he]);else s.deleteFramebuffer(ee.__webglFramebuffer);if(ee.__webglDepthbuffer&&s.deleteRenderbuffer(ee.__webglDepthbuffer),ee.__webglMultisampledFramebuffer&&s.deleteFramebuffer(ee.__webglMultisampledFramebuffer),ee.__webglColorRenderbuffer)for(let he=0;he<ee.__webglColorRenderbuffer.length;he++)ee.__webglColorRenderbuffer[he]&&s.deleteRenderbuffer(ee.__webglColorRenderbuffer[he]);ee.__webglDepthRenderbuffer&&s.deleteRenderbuffer(ee.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let he=0,me=S.length;he<me;he++){const we=n.get(S[he]);we.__webglTexture&&(s.deleteTexture(we.__webglTexture),o.memory.textures--),n.remove(S[he])}n.remove(S),n.remove(L)}let z=0;function q(){z=0}function U(){const L=z;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),z+=1,L}function V(L){const S=[];return S.push(L.wrapS),S.push(L.wrapT),S.push(L.wrapR||0),S.push(L.magFilter),S.push(L.minFilter),S.push(L.anisotropy),S.push(L.internalFormat),S.push(L.format),S.push(L.type),S.push(L.generateMipmaps),S.push(L.premultiplyAlpha),S.push(L.flipY),S.push(L.unpackAlignment),S.push(L.colorSpace),S.join()}function Q(L,S){const ee=n.get(L);if(L.isVideoTexture&&qe(L),L.isRenderTargetTexture===!1&&L.version>0&&ee.__version!==L.version){const fe=L.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{C(ee,L,S);return}}t.bindTexture(s.TEXTURE_2D,ee.__webglTexture,s.TEXTURE0+S)}function F(L,S){const ee=n.get(L);if(L.version>0&&ee.__version!==L.version){C(ee,L,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,ee.__webglTexture,s.TEXTURE0+S)}function D(L,S){const ee=n.get(L);if(L.version>0&&ee.__version!==L.version){C(ee,L,S);return}t.bindTexture(s.TEXTURE_3D,ee.__webglTexture,s.TEXTURE0+S)}function j(L,S){const ee=n.get(L);if(L.version>0&&ee.__version!==L.version){X(ee,L,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture,s.TEXTURE0+S)}const W={[Ji]:s.REPEAT,[ln]:s.CLAMP_TO_EDGE,[gs]:s.MIRRORED_REPEAT},N={[Vt]:s.NEAREST,[Mo]:s.NEAREST_MIPMAP_NEAREST,[ps]:s.NEAREST_MIPMAP_LINEAR,[$t]:s.LINEAR,[dc]:s.LINEAR_MIPMAP_NEAREST,[xi]:s.LINEAR_MIPMAP_LINEAR},H={[sh]:s.NEVER,[hh]:s.ALWAYS,[oh]:s.LESS,[Mc]:s.LEQUAL,[ah]:s.EQUAL,[uh]:s.GEQUAL,[lh]:s.GREATER,[ch]:s.NOTEQUAL};function T(L,S,ee){if(ee?(s.texParameteri(L,s.TEXTURE_WRAP_S,W[S.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,W[S.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,W[S.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,N[S.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,N[S.minFilter])):(s.texParameteri(L,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(L,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(S.wrapS!==ln||S.wrapT!==ln)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(L,s.TEXTURE_MAG_FILTER,A(S.magFilter)),s.texParameteri(L,s.TEXTURE_MIN_FILTER,A(S.minFilter)),S.minFilter!==Vt&&S.minFilter!==$t&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,H[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const fe=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Vt||S.minFilter!==ps&&S.minFilter!==xi||S.type===Fn&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===Cr&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(s.texParameterf(L,fe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function R(L,S){let ee=!1;L.__webglInit===void 0&&(L.__webglInit=!0,S.addEventListener("dispose",I));const fe=S.source;let he=d.get(fe);he===void 0&&(he={},d.set(fe,he));const me=V(S);if(me!==L.__cacheKey){he[me]===void 0&&(he[me]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,ee=!0),he[me].usedTimes++;const we=he[L.__cacheKey];we!==void 0&&(he[L.__cacheKey].usedTimes--,we.usedTimes===0&&M(S)),L.__cacheKey=me,L.__webglTexture=he[me].texture}return ee}function C(L,S,ee){let fe=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(fe=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(fe=s.TEXTURE_3D);const he=R(L,S),me=S.source;t.bindTexture(fe,L.__webglTexture,s.TEXTURE0+ee);const we=n.get(me);if(me.version!==we.__version||he===!0){t.activeTexture(s.TEXTURE0+ee);const ye=yt.getPrimaries(yt.workingColorSpace),Ee=S.colorSpace===un?null:yt.getPrimaries(S.colorSpace),He=S.colorSpace===un||ye===Ee?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const Ze=p(S)&&m(S.image)===!1;let xe=g(S.image,Ze,!1,i.maxTextureSize);xe=Ae(S,xe);const lt=m(xe)||a,nt=r.convert(S.format,S.colorSpace);let je=r.convert(S.type),Ge=x(S.internalFormat,nt,je,S.colorSpace,S.isVideoTexture);T(fe,S,lt);let Ve;const tt=S.mipmaps,rt=a&&S.isVideoTexture!==!0&&Ge!==xc,mt=we.__version===void 0||he===!0,Qe=w(S,xe,lt);if(S.isDepthTexture)Ge=s.DEPTH_COMPONENT,a?S.type===Fn?Ge=s.DEPTH_COMPONENT32F:S.type===Kn?Ge=s.DEPTH_COMPONENT24:S.type===vi?Ge=s.DEPTH24_STENCIL8:Ge=s.DEPTH_COMPONENT16:S.type===Fn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===gi&&Ge===s.DEPTH_COMPONENT&&S.type!==ko&&S.type!==Kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Kn,je=r.convert(S.type)),S.format===Qi&&Ge===s.DEPTH_COMPONENT&&(Ge=s.DEPTH_STENCIL,S.type!==vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=vi,je=r.convert(S.type))),mt&&(rt?t.texStorage2D(s.TEXTURE_2D,1,Ge,xe.width,xe.height):t.texImage2D(s.TEXTURE_2D,0,Ge,xe.width,xe.height,0,nt,je,null));else if(S.isDataTexture)if(tt.length>0&&lt){rt&&mt&&t.texStorage2D(s.TEXTURE_2D,Qe,Ge,tt[0].width,tt[0].height);for(let Te=0,G=tt.length;Te<G;Te++)Ve=tt[Te],rt?t.texSubImage2D(s.TEXTURE_2D,Te,0,0,Ve.width,Ve.height,nt,je,Ve.data):t.texImage2D(s.TEXTURE_2D,Te,Ge,Ve.width,Ve.height,0,nt,je,Ve.data);S.generateMipmaps=!1}else rt?(mt&&t.texStorage2D(s.TEXTURE_2D,Qe,Ge,xe.width,xe.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,xe.width,xe.height,nt,je,xe.data)):t.texImage2D(s.TEXTURE_2D,0,Ge,xe.width,xe.height,0,nt,je,xe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){rt&&mt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Qe,Ge,tt[0].width,tt[0].height,xe.depth);for(let Te=0,G=tt.length;Te<G;Te++)Ve=tt[Te],S.format!==cn?nt!==null?rt?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,Ve.width,Ve.height,xe.depth,nt,Ve.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Te,Ge,Ve.width,Ve.height,xe.depth,0,Ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?t.texSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,Ve.width,Ve.height,xe.depth,nt,je,Ve.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Te,Ge,Ve.width,Ve.height,xe.depth,0,nt,je,Ve.data)}else{rt&&mt&&t.texStorage2D(s.TEXTURE_2D,Qe,Ge,tt[0].width,tt[0].height);for(let Te=0,G=tt.length;Te<G;Te++)Ve=tt[Te],S.format!==cn?nt!==null?rt?t.compressedTexSubImage2D(s.TEXTURE_2D,Te,0,0,Ve.width,Ve.height,nt,Ve.data):t.compressedTexImage2D(s.TEXTURE_2D,Te,Ge,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?t.texSubImage2D(s.TEXTURE_2D,Te,0,0,Ve.width,Ve.height,nt,je,Ve.data):t.texImage2D(s.TEXTURE_2D,Te,Ge,Ve.width,Ve.height,0,nt,je,Ve.data)}else if(S.isDataArrayTexture)rt?(mt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Qe,Ge,xe.width,xe.height,xe.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,nt,je,xe.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ge,xe.width,xe.height,xe.depth,0,nt,je,xe.data);else if(S.isData3DTexture)rt?(mt&&t.texStorage3D(s.TEXTURE_3D,Qe,Ge,xe.width,xe.height,xe.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,nt,je,xe.data)):t.texImage3D(s.TEXTURE_3D,0,Ge,xe.width,xe.height,xe.depth,0,nt,je,xe.data);else if(S.isFramebufferTexture){if(mt)if(rt)t.texStorage2D(s.TEXTURE_2D,Qe,Ge,xe.width,xe.height);else{let Te=xe.width,G=xe.height;for(let Re=0;Re<Qe;Re++)t.texImage2D(s.TEXTURE_2D,Re,Ge,Te,G,0,nt,je,null),Te>>=1,G>>=1}}else if(tt.length>0&&lt){rt&&mt&&t.texStorage2D(s.TEXTURE_2D,Qe,Ge,tt[0].width,tt[0].height);for(let Te=0,G=tt.length;Te<G;Te++)Ve=tt[Te],rt?t.texSubImage2D(s.TEXTURE_2D,Te,0,0,nt,je,Ve):t.texImage2D(s.TEXTURE_2D,Te,Ge,nt,je,Ve);S.generateMipmaps=!1}else rt?(mt&&t.texStorage2D(s.TEXTURE_2D,Qe,Ge,xe.width,xe.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,nt,je,xe)):t.texImage2D(s.TEXTURE_2D,0,Ge,nt,je,xe);_(S,lt)&&y(fe),we.__version=me.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function X(L,S,ee){if(S.image.length!==6)return;const fe=R(L,S),he=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+ee);const me=n.get(he);if(he.version!==me.__version||fe===!0){t.activeTexture(s.TEXTURE0+ee);const we=yt.getPrimaries(yt.workingColorSpace),ye=S.colorSpace===un?null:yt.getPrimaries(S.colorSpace),Ee=S.colorSpace===un||we===ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const He=S.isCompressedTexture||S.image[0].isCompressedTexture,Ze=S.image[0]&&S.image[0].isDataTexture,xe=[];for(let Te=0;Te<6;Te++)!He&&!Ze?xe[Te]=g(S.image[Te],!1,!0,i.maxCubemapSize):xe[Te]=Ze?S.image[Te].image:S.image[Te],xe[Te]=Ae(S,xe[Te]);const lt=xe[0],nt=m(lt)||a,je=r.convert(S.format,S.colorSpace),Ge=r.convert(S.type),Ve=x(S.internalFormat,je,Ge,S.colorSpace),tt=a&&S.isVideoTexture!==!0,rt=me.__version===void 0||fe===!0;let mt=w(S,lt,nt);T(s.TEXTURE_CUBE_MAP,S,nt);let Qe;if(He){tt&&rt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,mt,Ve,lt.width,lt.height);for(let Te=0;Te<6;Te++){Qe=xe[Te].mipmaps;for(let G=0;G<Qe.length;G++){const Re=Qe[G];S.format!==cn?je!==null?tt?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,G,0,0,Re.width,Re.height,je,Re.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,G,Ve,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,G,0,0,Re.width,Re.height,je,Ge,Re.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,G,Ve,Re.width,Re.height,0,je,Ge,Re.data)}}}else{Qe=S.mipmaps,tt&&rt&&(Qe.length>0&&mt++,t.texStorage2D(s.TEXTURE_CUBE_MAP,mt,Ve,xe[0].width,xe[0].height));for(let Te=0;Te<6;Te++)if(Ze){tt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,xe[Te].width,xe[Te].height,je,Ge,xe[Te].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Ve,xe[Te].width,xe[Te].height,0,je,Ge,xe[Te].data);for(let G=0;G<Qe.length;G++){const Ne=Qe[G].image[Te].image;tt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,G+1,0,0,Ne.width,Ne.height,je,Ge,Ne.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,G+1,Ve,Ne.width,Ne.height,0,je,Ge,Ne.data)}}else{tt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,je,Ge,xe[Te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Ve,je,Ge,xe[Te]);for(let G=0;G<Qe.length;G++){const Re=Qe[G];tt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,G+1,0,0,je,Ge,Re.image[Te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,G+1,Ve,je,Ge,Re.image[Te])}}}_(S,nt)&&y(s.TEXTURE_CUBE_MAP),me.__version=he.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function ne(L,S,ee,fe,he,me){const we=r.convert(ee.format,ee.colorSpace),ye=r.convert(ee.type),Ee=x(ee.internalFormat,we,ye,ee.colorSpace);if(!n.get(S).__hasExternalTextures){const Ze=Math.max(1,S.width>>me),xe=Math.max(1,S.height>>me);he===s.TEXTURE_3D||he===s.TEXTURE_2D_ARRAY?t.texImage3D(he,me,Ee,Ze,xe,S.depth,0,we,ye,null):t.texImage2D(he,me,Ee,Ze,xe,0,we,ye,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),oe(S)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,he,n.get(ee).__webglTexture,0,se(S)):(he===s.TEXTURE_2D||he>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,fe,he,n.get(ee).__webglTexture,me),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ie(L,S,ee){if(s.bindRenderbuffer(s.RENDERBUFFER,L),S.depthBuffer&&!S.stencilBuffer){let fe=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(ee||oe(S)){const he=S.depthTexture;he&&he.isDepthTexture&&(he.type===Fn?fe=s.DEPTH_COMPONENT32F:he.type===Kn&&(fe=s.DEPTH_COMPONENT24));const me=se(S);oe(S)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,me,fe,S.width,S.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,me,fe,S.width,S.height)}else s.renderbufferStorage(s.RENDERBUFFER,fe,S.width,S.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,L)}else if(S.depthBuffer&&S.stencilBuffer){const fe=se(S);ee&&oe(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,s.DEPTH24_STENCIL8,S.width,S.height):oe(S)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,fe,s.DEPTH24_STENCIL8,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,L)}else{const fe=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let he=0;he<fe.length;he++){const me=fe[he],we=r.convert(me.format,me.colorSpace),ye=r.convert(me.type),Ee=x(me.internalFormat,we,ye,me.colorSpace),He=se(S);ee&&oe(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,He,Ee,S.width,S.height):oe(S)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,He,Ee,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Ee,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function K(L,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Q(S.depthTexture,0);const fe=n.get(S.depthTexture).__webglTexture,he=se(S);if(S.depthTexture.format===gi)oe(S)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,fe,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,fe,0);else if(S.depthTexture.format===Qi)oe(S)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,fe,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function te(L){const S=n.get(L),ee=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!S.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");K(S.__webglFramebuffer,L)}else if(ee){S.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[fe]),S.__webglDepthbuffer[fe]=s.createRenderbuffer(),ie(S.__webglDepthbuffer[fe],L,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),ie(S.__webglDepthbuffer,L,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function ue(L,S,ee){const fe=n.get(L);S!==void 0&&ne(fe.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ee!==void 0&&te(L)}function Y(L){const S=L.texture,ee=n.get(L),fe=n.get(S);L.addEventListener("dispose",B),L.isWebGLMultipleRenderTargets!==!0&&(fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture()),fe.__version=S.version,o.memory.textures++);const he=L.isWebGLCubeRenderTarget===!0,me=L.isWebGLMultipleRenderTargets===!0,we=m(L)||a;if(he){ee.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(a&&S.mipmaps&&S.mipmaps.length>0){ee.__webglFramebuffer[ye]=[];for(let Ee=0;Ee<S.mipmaps.length;Ee++)ee.__webglFramebuffer[ye][Ee]=s.createFramebuffer()}else ee.__webglFramebuffer[ye]=s.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){ee.__webglFramebuffer=[];for(let ye=0;ye<S.mipmaps.length;ye++)ee.__webglFramebuffer[ye]=s.createFramebuffer()}else ee.__webglFramebuffer=s.createFramebuffer();if(me)if(i.drawBuffers){const ye=L.texture;for(let Ee=0,He=ye.length;Ee<He;Ee++){const Ze=n.get(ye[Ee]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&L.samples>0&&oe(L)===!1){const ye=me?S:[S];ee.__webglMultisampledFramebuffer=s.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Ee=0;Ee<ye.length;Ee++){const He=ye[Ee];ee.__webglColorRenderbuffer[Ee]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ee.__webglColorRenderbuffer[Ee]);const Ze=r.convert(He.format,He.colorSpace),xe=r.convert(He.type),lt=x(He.internalFormat,Ze,xe,He.colorSpace,L.isXRRenderTarget===!0),nt=se(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,nt,lt,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,ee.__webglColorRenderbuffer[Ee])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(ee.__webglDepthRenderbuffer=s.createRenderbuffer(),ie(ee.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){t.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),T(s.TEXTURE_CUBE_MAP,S,we);for(let ye=0;ye<6;ye++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let Ee=0;Ee<S.mipmaps.length;Ee++)ne(ee.__webglFramebuffer[ye][Ee],L,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ee);else ne(ee.__webglFramebuffer[ye],L,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);_(S,we)&&y(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){const ye=L.texture;for(let Ee=0,He=ye.length;Ee<He;Ee++){const Ze=ye[Ee],xe=n.get(Ze);t.bindTexture(s.TEXTURE_2D,xe.__webglTexture),T(s.TEXTURE_2D,Ze,we),ne(ee.__webglFramebuffer,L,Ze,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,0),_(Ze,we)&&y(s.TEXTURE_2D)}t.unbindTexture()}else{let ye=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(a?ye=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ye,fe.__webglTexture),T(ye,S,we),a&&S.mipmaps&&S.mipmaps.length>0)for(let Ee=0;Ee<S.mipmaps.length;Ee++)ne(ee.__webglFramebuffer[Ee],L,S,s.COLOR_ATTACHMENT0,ye,Ee);else ne(ee.__webglFramebuffer,L,S,s.COLOR_ATTACHMENT0,ye,0);_(S,we)&&y(ye),t.unbindTexture()}L.depthBuffer&&te(L)}function Pe(L){const S=m(L)||a,ee=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let fe=0,he=ee.length;fe<he;fe++){const me=ee[fe];if(_(me,S)){const we=L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ye=n.get(me).__webglTexture;t.bindTexture(we,ye),y(we),t.unbindTexture()}}}function de(L){if(a&&L.samples>0&&oe(L)===!1){const S=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],ee=L.width,fe=L.height;let he=s.COLOR_BUFFER_BIT;const me=[],we=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=n.get(L),Ee=L.isWebGLMultipleRenderTargets===!0;if(Ee)for(let He=0;He<S.length;He++)t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+He,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+He,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let He=0;He<S.length;He++){me.push(s.COLOR_ATTACHMENT0+He),L.depthBuffer&&me.push(we);const Ze=ye.__ignoreDepthValues!==void 0?ye.__ignoreDepthValues:!1;if(Ze===!1&&(L.depthBuffer&&(he|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&(he|=s.STENCIL_BUFFER_BIT)),Ee&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ye.__webglColorRenderbuffer[He]),Ze===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[we]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[we])),Ee){const xe=n.get(S[He]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,xe,0)}s.blitFramebuffer(0,0,ee,fe,0,0,ee,fe,he,s.NEAREST),u&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,me)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ee)for(let He=0;He<S.length;He++){t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+He,s.RENDERBUFFER,ye.__webglColorRenderbuffer[He]);const Ze=n.get(S[He]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+He,s.TEXTURE_2D,Ze,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}}function se(L){return Math.min(i.maxSamples,L.samples)}function oe(L){const S=n.get(L);return a&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function qe(L){const S=o.render.frame;h.get(L)!==S&&(h.set(L,S),L.update())}function Ae(L,S){const ee=L.colorSpace,fe=L.format,he=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===To||ee!==Ht&&ee!==un&&(yt.getTransfer(ee)===bt?a===!1?e.has("EXT_sRGB")===!0&&fe===cn?(L.format=To,L.minFilter=$t,L.generateMipmaps=!1):S=wc.sRGBToLinear(S):(fe!==cn||he!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),S}this.allocateTextureUnit=U,this.resetTextureUnits=q,this.setTexture2D=Q,this.setTexture2DArray=F,this.setTexture3D=D,this.setTextureCube=j,this.rebindTextures=ue,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=oe}function Av(s,e,t){const n=t.isWebGL2;function i(r,o=un){let a;const l=yt.getTransfer(o);if(r===ei)return s.UNSIGNED_BYTE;if(r===pc)return s.UNSIGNED_SHORT_4_4_4_4;if(r===mc)return s.UNSIGNED_SHORT_5_5_5_1;if(r===qu)return s.BYTE;if(r===Yu)return s.SHORT;if(r===ko)return s.UNSIGNED_SHORT;if(r===fc)return s.INT;if(r===Kn)return s.UNSIGNED_INT;if(r===Fn)return s.FLOAT;if(r===Cr)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===ju)return s.ALPHA;if(r===cn)return s.RGBA;if(r===Ku)return s.LUMINANCE;if(r===Zu)return s.LUMINANCE_ALPHA;if(r===gi)return s.DEPTH_COMPONENT;if(r===Qi)return s.DEPTH_STENCIL;if(r===To)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===$u)return s.RED;if(r===vc)return s.RED_INTEGER;if(r===Ju)return s.RG;if(r===gc)return s.RG_INTEGER;if(r===_c)return s.RGBA_INTEGER;if(r===Ds||r===Us||r===Fs||r===Bs)if(l===bt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ds)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Us)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Bs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ds)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Us)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Bs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ha||r===da||r===fa||r===pa)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ha)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===da)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===fa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===pa)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===xc)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ma||r===va)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===ma)return l===bt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===va)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ga||r===_a||r===xa||r===ya||r===Ea||r===Sa||r===Ma||r===ba||r===wa||r===Ta||r===Aa||r===Ra||r===Ca||r===La)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===ga)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===_a)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===xa)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ya)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ea)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Sa)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ma)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ba)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===wa)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ta)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Aa)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ra)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ca)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===La)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Os||r===Pa||r===Ia)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Os)return l===bt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Pa)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ia)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Qu||r===Na||r===Da||r===Ua)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Os)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Na)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Da)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ua)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===vi?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Rv extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class mi extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cv={type:"move"};class lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(u,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=u.joints["index-finger-tip"],c=u.joints["thumb-tip"],d=h.position.distanceTo(c.position),f=.02,v=.005;u.inputState.pinching&&d>f+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=f-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cv)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new mi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Lv extends or{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,u=null,h=null,c=null,d=null,f=null,v=null;const g=t.getContextAttributes();let m=null,p=null;const _=[],y=[],x=new pt;let w=null;const A=new Kt;A.layers.enable(1),A.viewport=new Mt;const I=new Kt;I.layers.enable(2),I.viewport=new Mt;const B=[A,I],E=new Rv;E.layers.enable(1),E.layers.enable(2);let M=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(T){let R=_[T];return R===void 0&&(R=new lo,_[T]=R),R.getTargetRaySpace()},this.getControllerGrip=function(T){let R=_[T];return R===void 0&&(R=new lo,_[T]=R),R.getGripSpace()},this.getHand=function(T){let R=_[T];return R===void 0&&(R=new lo,_[T]=R),R.getHandSpace()};function z(T){const R=y.indexOf(T.inputSource);if(R===-1)return;const C=_[R];C!==void 0&&(C.update(T.inputSource,T.frame,u||o),C.dispatchEvent({type:T.type,data:T.inputSource}))}function q(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",U);for(let T=0;T<_.length;T++){const R=y[T];R!==null&&(y[T]=null,_[T].disconnect(R))}M=null,P=null,e.setRenderTarget(m),f=null,d=null,c=null,i=null,p=null,H.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(x.width,x.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(T){r=T,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(T){a=T,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(T){u=T},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return c},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(T){if(i=T,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",q),i.addEventListener("inputsourceschange",U),g.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(x),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const R={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,R),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new yi(f.framebufferWidth,f.framebufferHeight,{format:cn,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let R=null,C=null,X=null;g.depth&&(X=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,R=g.stencil?Qi:gi,C=g.stencil?vi:Kn);const ne={colorFormat:t.RGBA8,depthFormat:X,scaleFactor:r};c=new XRWebGLBinding(i,t),d=c.createProjectionLayer(ne),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new yi(d.textureWidth,d.textureHeight,{format:cn,type:ei,depthTexture:new Fc(d.textureWidth,d.textureHeight,C,void 0,void 0,void 0,void 0,void 0,void 0,R),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const ie=e.properties.get(p);ie.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await i.requestReferenceSpace(a),H.setContext(i),H.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function U(T){for(let R=0;R<T.removed.length;R++){const C=T.removed[R],X=y.indexOf(C);X>=0&&(y[X]=null,_[X].disconnect(C))}for(let R=0;R<T.added.length;R++){const C=T.added[R];let X=y.indexOf(C);if(X===-1){for(let ie=0;ie<_.length;ie++)if(ie>=y.length){y.push(C),X=ie;break}else if(y[ie]===null){y[ie]=C,X=ie;break}if(X===-1)break}const ne=_[X];ne&&ne.connect(C)}}const V=new J,Q=new J;function F(T,R,C){V.setFromMatrixPosition(R.matrixWorld),Q.setFromMatrixPosition(C.matrixWorld);const X=V.distanceTo(Q),ne=R.projectionMatrix.elements,ie=C.projectionMatrix.elements,K=ne[14]/(ne[10]-1),te=ne[14]/(ne[10]+1),ue=(ne[9]+1)/ne[5],Y=(ne[9]-1)/ne[5],Pe=(ne[8]-1)/ne[0],de=(ie[8]+1)/ie[0],se=K*Pe,oe=K*de,qe=X/(-Pe+de),Ae=qe*-Pe;R.matrixWorld.decompose(T.position,T.quaternion,T.scale),T.translateX(Ae),T.translateZ(qe),T.matrixWorld.compose(T.position,T.quaternion,T.scale),T.matrixWorldInverse.copy(T.matrixWorld).invert();const L=K+qe,S=te+qe,ee=se-Ae,fe=oe+(X-Ae),he=ue*te/S*L,me=Y*te/S*L;T.projectionMatrix.makePerspective(ee,fe,he,me,L,S),T.projectionMatrixInverse.copy(T.projectionMatrix).invert()}function D(T,R){R===null?T.matrixWorld.copy(T.matrix):T.matrixWorld.multiplyMatrices(R.matrixWorld,T.matrix),T.matrixWorldInverse.copy(T.matrixWorld).invert()}this.updateCamera=function(T){if(i===null)return;E.near=I.near=A.near=T.near,E.far=I.far=A.far=T.far,(M!==E.near||P!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),M=E.near,P=E.far);const R=T.parent,C=E.cameras;D(E,R);for(let X=0;X<C.length;X++)D(C[X],R);C.length===2?F(E,A,I):E.projectionMatrix.copy(A.projectionMatrix),j(T,E,R)};function j(T,R,C){C===null?T.matrix.copy(R.matrixWorld):(T.matrix.copy(C.matrixWorld),T.matrix.invert(),T.matrix.multiply(R.matrixWorld)),T.matrix.decompose(T.position,T.quaternion,T.scale),T.updateMatrixWorld(!0),T.projectionMatrix.copy(R.projectionMatrix),T.projectionMatrixInverse.copy(R.projectionMatrixInverse),T.isPerspectiveCamera&&(T.fov=tr*2*Math.atan(1/T.projectionMatrix.elements[5]),T.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(T){l=T,d!==null&&(d.fixedFoveation=T),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=T)};let W=null;function N(T,R){if(h=R.getViewerPose(u||o),v=R,h!==null){const C=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let X=!1;C.length!==E.cameras.length&&(E.cameras.length=0,X=!0);for(let ne=0;ne<C.length;ne++){const ie=C[ne];let K=null;if(f!==null)K=f.getViewport(ie);else{const ue=c.getViewSubImage(d,ie);K=ue.viewport,ne===0&&(e.setRenderTargetTextures(p,ue.colorTexture,d.ignoreDepthValues?void 0:ue.depthStencilTexture),e.setRenderTarget(p))}let te=B[ne];te===void 0&&(te=new Kt,te.layers.enable(ne),te.viewport=new Mt,B[ne]=te),te.matrix.fromArray(ie.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(ie.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(K.x,K.y,K.width,K.height),ne===0&&(E.matrix.copy(te.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),X===!0&&E.cameras.push(te)}}for(let C=0;C<_.length;C++){const X=y[C],ne=_[C];X!==null&&ne!==void 0&&ne.update(X,R,u||o)}W&&W(T,R),R.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:R}),v=null}const H=new Uc;H.setAnimationLoop(N),this.setAnimationLoop=function(T){W=T},this.dispose=function(){}}}function Pv(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ic(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,_,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),c(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,_,y):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const y=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*y,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function c(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Iv(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,y){const x=y.program;n.uniformBlockBinding(_,x)}function u(_,y){let x=i[_.id];x===void 0&&(v(_),x=h(_),i[_.id]=x,_.addEventListener("dispose",m));const w=y.program;n.updateUBOMapping(_,w);const A=e.render.frame;r[_.id]!==A&&(d(_),r[_.id]=A)}function h(_){const y=c();_.__bindingPointIndex=y;const x=s.createBuffer(),w=_.__size,A=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,w,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,x),x}function c(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const y=i[_.id],x=_.uniforms,w=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let A=0,I=x.length;A<I;A++){const B=Array.isArray(x[A])?x[A]:[x[A]];for(let E=0,M=B.length;E<M;E++){const P=B[E];if(f(P,A,E,w)===!0){const z=P.__offset,q=Array.isArray(P.value)?P.value:[P.value];let U=0;for(let V=0;V<q.length;V++){const Q=q[V],F=g(Q);typeof Q=="number"||typeof Q=="boolean"?(P.__data[0]=Q,s.bufferSubData(s.UNIFORM_BUFFER,z+U,P.__data)):Q.isMatrix3?(P.__data[0]=Q.elements[0],P.__data[1]=Q.elements[1],P.__data[2]=Q.elements[2],P.__data[3]=0,P.__data[4]=Q.elements[3],P.__data[5]=Q.elements[4],P.__data[6]=Q.elements[5],P.__data[7]=0,P.__data[8]=Q.elements[6],P.__data[9]=Q.elements[7],P.__data[10]=Q.elements[8],P.__data[11]=0):(Q.toArray(P.__data,U),U+=F.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(_,y,x,w){const A=_.value,I=y+"_"+x;if(w[I]===void 0)return typeof A=="number"||typeof A=="boolean"?w[I]=A:w[I]=A.clone(),!0;{const B=w[I];if(typeof A=="number"||typeof A=="boolean"){if(B!==A)return w[I]=A,!0}else if(B.equals(A)===!1)return B.copy(A),!0}return!1}function v(_){const y=_.uniforms;let x=0;const w=16;for(let I=0,B=y.length;I<B;I++){const E=Array.isArray(y[I])?y[I]:[y[I]];for(let M=0,P=E.length;M<P;M++){const z=E[M],q=Array.isArray(z.value)?z.value:[z.value];for(let U=0,V=q.length;U<V;U++){const Q=q[U],F=g(Q),D=x%w;D!==0&&w-D<F.boundary&&(x+=w-D),z.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=x,x+=F.storage}}}const A=x%w;return A>0&&(x+=w-A),_.__size=x,_.__cache={},this}function g(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){const y=_.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(const _ in i)s.deleteBuffer(i[_]);o=[],i={},r={}}return{bind:l,update:u,dispose:p}}class Hc{constructor(e={}){const{canvas:t=Ah(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:c=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const f=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const p=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pt,this._useLegacyLights=!1,this.toneMapping=Qn,this.toneMappingExposure=1;const y=this;let x=!1,w=0,A=0,I=null,B=-1,E=null;const M=new Mt,P=new Mt;let z=null;const q=new it(0);let U=0,V=t.width,Q=t.height,F=1,D=null,j=null;const W=new Mt(0,0,V,Q),N=new Mt(0,0,V,Q);let H=!1;const T=new Wo;let R=!1,C=!1,X=null;const ne=new at,ie=new pt,K=new J,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ue(){return I===null?F:1}let Y=n;function Pe(b,k){for(let Z=0;Z<b.length;Z++){const O=b[Z],$=t.getContext(O,k);if($!==null)return $}return null}try{const b={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vo}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",G,!1),t.addEventListener("webglcontextcreationerror",Re,!1),Y===null){const k=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&k.shift(),Y=Pe(k,b),Y===null)throw Pe(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Y instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let de,se,oe,qe,Ae,L,S,ee,fe,he,me,we,ye,Ee,He,Ze,xe,lt,nt,je,Ge,Ve,tt,rt;function mt(){de=new Hp(Y),se=new Fp(Y,de,e),de.init(se),Ve=new Av(Y,de,se),oe=new wv(Y,de,se),qe=new Xp(Y),Ae=new hv,L=new Tv(Y,de,oe,Ae,se,Ve,qe),S=new Op(y),ee=new kp(y),fe=new Jh(Y,se),tt=new Dp(Y,de,fe,se),he=new Gp(Y,fe,qe,tt),me=new Kp(Y,he,fe,qe),nt=new jp(Y,se,L),Ze=new Bp(Ae),we=new uv(y,S,ee,de,se,tt,Ze),ye=new Pv(y,Ae),Ee=new fv,He=new xv(de,se),lt=new Np(y,S,ee,oe,me,d,l),xe=new bv(y,me,se),rt=new Iv(Y,qe,se,oe),je=new Up(Y,de,qe,se),Ge=new Wp(Y,de,qe,se),qe.programs=we.programs,y.capabilities=se,y.extensions=de,y.properties=Ae,y.renderLists=Ee,y.shadowMap=xe,y.state=oe,y.info=qe}mt();const Qe=new Lv(y,Y);this.xr=Qe,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const b=de.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=de.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(b){b!==void 0&&(F=b,this.setSize(V,Q,!1))},this.getSize=function(b){return b.set(V,Q)},this.setSize=function(b,k,Z=!0){if(Qe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=b,Q=k,t.width=Math.floor(b*F),t.height=Math.floor(k*F),Z===!0&&(t.style.width=b+"px",t.style.height=k+"px"),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(V*F,Q*F).floor()},this.setDrawingBufferSize=function(b,k,Z){V=b,Q=k,F=Z,t.width=Math.floor(b*Z),t.height=Math.floor(k*Z),this.setViewport(0,0,b,k)},this.getCurrentViewport=function(b){return b.copy(M)},this.getViewport=function(b){return b.copy(W)},this.setViewport=function(b,k,Z,O){b.isVector4?W.set(b.x,b.y,b.z,b.w):W.set(b,k,Z,O),oe.viewport(M.copy(W).multiplyScalar(F).floor())},this.getScissor=function(b){return b.copy(N)},this.setScissor=function(b,k,Z,O){b.isVector4?N.set(b.x,b.y,b.z,b.w):N.set(b,k,Z,O),oe.scissor(P.copy(N).multiplyScalar(F).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(b){oe.setScissorTest(H=b)},this.setOpaqueSort=function(b){D=b},this.setTransparentSort=function(b){j=b},this.getClearColor=function(b){return b.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor.apply(lt,arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha.apply(lt,arguments)},this.clear=function(b=!0,k=!0,Z=!0){let O=0;if(b){let $=!1;if(I!==null){const _e=I.texture.format;$=_e===_c||_e===gc||_e===vc}if($){const _e=I.texture.type,Oe=_e===ei||_e===Kn||_e===ko||_e===vi||_e===pc||_e===mc,Le=lt.getClearColor(),Fe=lt.getClearAlpha(),be=Le.r,Ke=Le.g,Je=Le.b;Oe?(f[0]=be,f[1]=Ke,f[2]=Je,f[3]=Fe,Y.clearBufferuiv(Y.COLOR,0,f)):(v[0]=be,v[1]=Ke,v[2]=Je,v[3]=Fe,Y.clearBufferiv(Y.COLOR,0,v))}else O|=Y.COLOR_BUFFER_BIT}k&&(O|=Y.DEPTH_BUFFER_BIT),Z&&(O|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",G,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),Ee.dispose(),He.dispose(),Ae.dispose(),S.dispose(),ee.dispose(),me.dispose(),tt.dispose(),rt.dispose(),we.dispose(),Qe.dispose(),Qe.removeEventListener("sessionstart",le),Qe.removeEventListener("sessionend",ce),X&&(X.dispose(),X=null),pe.stop()};function Te(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const b=qe.autoReset,k=xe.enabled,Z=xe.autoUpdate,O=xe.needsUpdate,$=xe.type;mt(),qe.autoReset=b,xe.enabled=k,xe.autoUpdate=Z,xe.needsUpdate=O,xe.type=$}function Re(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ne(b){const k=b.target;k.removeEventListener("dispose",Ne),$e(k)}function $e(b){Ye(b),Ae.remove(b)}function Ye(b){const k=Ae.get(b).programs;k!==void 0&&(k.forEach(function(Z){we.releaseProgram(Z)}),b.isShaderMaterial&&we.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,Z,O,$,_e){k===null&&(k=te);const Oe=$.isMesh&&$.matrixWorld.determinant()<0,Le=ke(b,k,Z,O,$);oe.setMaterial(O,Oe);let Fe=Z.index,be=1;if(O.wireframe===!0){if(Fe=he.getWireframeAttribute(Z),Fe===void 0)return;be=2}const Ke=Z.drawRange,Je=Z.attributes.position;let dt=Ke.start*be,Rt=(Ke.start+Ke.count)*be;_e!==null&&(dt=Math.max(dt,_e.start*be),Rt=Math.min(Rt,(_e.start+_e.count)*be)),Fe!==null?(dt=Math.max(dt,0),Rt=Math.min(Rt,Fe.count)):Je!=null&&(dt=Math.max(dt,0),Rt=Math.min(Rt,Je.count));const _t=Rt-dt;if(_t<0||_t===1/0)return;tt.setup($,O,Le,Z,Fe);let ut,xt=je;if(Fe!==null&&(ut=fe.get(Fe),xt=Ge,xt.setIndex(ut)),$.isMesh)O.wireframe===!0?(oe.setLineWidth(O.wireframeLinewidth*ue()),xt.setMode(Y.LINES)):xt.setMode(Y.TRIANGLES);else if($.isLine){let We=O.linewidth;We===void 0&&(We=1),oe.setLineWidth(We*ue()),$.isLineSegments?xt.setMode(Y.LINES):$.isLineLoop?xt.setMode(Y.LINE_LOOP):xt.setMode(Y.LINE_STRIP)}else $.isPoints?xt.setMode(Y.POINTS):$.isSprite&&xt.setMode(Y.TRIANGLES);if($.isBatchedMesh)xt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)xt.renderInstances(dt,_t,$.count);else if(Z.isInstancedBufferGeometry){const We=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,en=Math.min(Z.instanceCount,We);xt.renderInstances(dt,_t,en)}else xt.render(dt,_t)};function vt(b,k,Z){b.transparent===!0&&b.side===bn&&b.forceSinglePass===!1?(b.side=Qt,b.needsUpdate=!0,re(b,k,Z),b.side=On,b.needsUpdate=!0,re(b,k,Z),b.side=bn):re(b,k,Z)}this.compile=function(b,k,Z=null){Z===null&&(Z=b),m=He.get(Z),m.init(),_.push(m),Z.traverseVisible(function($){$.isLight&&$.layers.test(k.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),b!==Z&&b.traverseVisible(function($){$.isLight&&$.layers.test(k.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),m.setupLights(y._useLegacyLights);const O=new Set;return b.traverse(function($){const _e=$.material;if(_e)if(Array.isArray(_e))for(let Oe=0;Oe<_e.length;Oe++){const Le=_e[Oe];vt(Le,Z,$),O.add(Le)}else vt(_e,Z,$),O.add(_e)}),_.pop(),m=null,O},this.compileAsync=function(b,k,Z=null){const O=this.compile(b,k,Z);return new Promise($=>{function _e(){if(O.forEach(function(Oe){Ae.get(Oe).currentProgram.isReady()&&O.delete(Oe)}),O.size===0){$(b);return}setTimeout(_e,10)}de.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let gt=null;function ct(b){gt&&gt(b)}function le(){pe.stop()}function ce(){pe.start()}const pe=new Uc;pe.setAnimationLoop(ct),typeof self<"u"&&pe.setContext(self),this.setAnimationLoop=function(b){gt=b,Qe.setAnimationLoop(b),b===null?pe.stop():pe.start()},Qe.addEventListener("sessionstart",le),Qe.addEventListener("sessionend",ce),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Qe.enabled===!0&&Qe.isPresenting===!0&&(Qe.cameraAutoUpdate===!0&&Qe.updateCamera(k),k=Qe.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,k,I),m=He.get(b,_.length),m.init(),_.push(m),ne.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),T.setFromProjectionMatrix(ne),C=this.localClippingEnabled,R=Ze.init(this.clippingPlanes,C),g=Ee.get(b,p.length),g.init(),p.push(g),ve(b,k,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(D,j),this.info.render.frame++,R===!0&&Ze.beginShadows();const Z=m.state.shadowsArray;if(xe.render(Z,b,k),R===!0&&Ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),lt.render(g,b),m.setupLights(y._useLegacyLights),k.isArrayCamera){const O=k.cameras;for(let $=0,_e=O.length;$<_e;$++){const Oe=O[$];et(g,b,Oe,Oe.viewport)}}else et(g,b,k);I!==null&&(L.updateMultisampleRenderTarget(I),L.updateRenderTargetMipmap(I)),b.isScene===!0&&b.onAfterRender(y,b,k),tt.resetDefaultState(),B=-1,E=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function ve(b,k,Z,O){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)Z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||T.intersectsSprite(b)){O&&K.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ne);const Oe=me.update(b),Le=b.material;Le.visible&&g.push(b,Oe,Le,Z,K.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||T.intersectsObject(b))){const Oe=me.update(b),Le=b.material;if(O&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),K.copy(b.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),K.copy(Oe.boundingSphere.center)),K.applyMatrix4(b.matrixWorld).applyMatrix4(ne)),Array.isArray(Le)){const Fe=Oe.groups;for(let be=0,Ke=Fe.length;be<Ke;be++){const Je=Fe[be],dt=Le[Je.materialIndex];dt&&dt.visible&&g.push(b,Oe,dt,Z,K.z,Je)}}else Le.visible&&g.push(b,Oe,Le,Z,K.z,null)}}const _e=b.children;for(let Oe=0,Le=_e.length;Oe<Le;Oe++)ve(_e[Oe],k,Z,O)}function et(b,k,Z,O){const $=b.opaque,_e=b.transmissive,Oe=b.transparent;m.setupLightsView(Z),R===!0&&Ze.setGlobalState(y.clippingPlanes,Z),_e.length>0&&ze($,_e,k,Z),O&&oe.viewport(M.copy(O)),$.length>0&&Se($,k,Z),_e.length>0&&Se(_e,k,Z),Oe.length>0&&Se(Oe,k,Z),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function ze(b,k,Z,O){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;const _e=se.isWebGL2;X===null&&(X=new yi(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")?Cr:ei,minFilter:xi,samples:_e?4:0})),y.getDrawingBufferSize(ie),_e?X.setSize(ie.x,ie.y):X.setSize(Ss(ie.x),Ss(ie.y));const Oe=y.getRenderTarget();y.setRenderTarget(X),y.getClearColor(q),U=y.getClearAlpha(),U<1&&y.setClearColor(16777215,.5),y.clear();const Le=y.toneMapping;y.toneMapping=Qn,Se(b,Z,O),L.updateMultisampleRenderTarget(X),L.updateRenderTargetMipmap(X);let Fe=!1;for(let be=0,Ke=k.length;be<Ke;be++){const Je=k[be],dt=Je.object,Rt=Je.geometry,_t=Je.material,ut=Je.group;if(_t.side===bn&&dt.layers.test(O.layers)){const xt=_t.side;_t.side=Qt,_t.needsUpdate=!0,De(dt,Z,O,Rt,_t,ut),_t.side=xt,_t.needsUpdate=!0,Fe=!0}}Fe===!0&&(L.updateMultisampleRenderTarget(X),L.updateRenderTargetMipmap(X)),y.setRenderTarget(Oe),y.setClearColor(q,U),y.toneMapping=Le}function Se(b,k,Z){const O=k.isScene===!0?k.overrideMaterial:null;for(let $=0,_e=b.length;$<_e;$++){const Oe=b[$],Le=Oe.object,Fe=Oe.geometry,be=O===null?Oe.material:O,Ke=Oe.group;Le.layers.test(Z.layers)&&De(Le,k,Z,Fe,be,Ke)}}function De(b,k,Z,O,$,_e){b.onBeforeRender(y,k,Z,O,$,_e),b.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),$.onBeforeRender(y,k,Z,O,b,_e),$.transparent===!0&&$.side===bn&&$.forceSinglePass===!1?($.side=Qt,$.needsUpdate=!0,y.renderBufferDirect(Z,k,O,$,b,_e),$.side=On,$.needsUpdate=!0,y.renderBufferDirect(Z,k,O,$,b,_e),$.side=bn):y.renderBufferDirect(Z,k,O,$,b,_e),b.onAfterRender(y,k,Z,O,$,_e)}function re(b,k,Z){k.isScene!==!0&&(k=te);const O=Ae.get(b),$=m.state.lights,_e=m.state.shadowsArray,Oe=$.state.version,Le=we.getParameters(b,$.state,_e,k,Z),Fe=we.getProgramCacheKey(Le);let be=O.programs;O.environment=b.isMeshStandardMaterial?k.environment:null,O.fog=k.fog,O.envMap=(b.isMeshStandardMaterial?ee:S).get(b.envMap||O.environment),be===void 0&&(b.addEventListener("dispose",Ne),be=new Map,O.programs=be);let Ke=be.get(Fe);if(Ke!==void 0){if(O.currentProgram===Ke&&O.lightsStateVersion===Oe)return Ue(b,Le),Ke}else Le.uniforms=we.getUniforms(b),b.onBuild(Z,Le,y),b.onBeforeCompile(Le,y),Ke=we.acquireProgram(Le,Fe),be.set(Fe,Ke),O.uniforms=Le.uniforms;const Je=O.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Je.clippingPlanes=Ze.uniform),Ue(b,Le),O.needsLights=Me(b),O.lightsStateVersion=Oe,O.needsLights&&(Je.ambientLightColor.value=$.state.ambient,Je.lightProbe.value=$.state.probe,Je.directionalLights.value=$.state.directional,Je.directionalLightShadows.value=$.state.directionalShadow,Je.spotLights.value=$.state.spot,Je.spotLightShadows.value=$.state.spotShadow,Je.rectAreaLights.value=$.state.rectArea,Je.ltc_1.value=$.state.rectAreaLTC1,Je.ltc_2.value=$.state.rectAreaLTC2,Je.pointLights.value=$.state.point,Je.pointLightShadows.value=$.state.pointShadow,Je.hemisphereLights.value=$.state.hemi,Je.directionalShadowMap.value=$.state.directionalShadowMap,Je.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Je.spotShadowMap.value=$.state.spotShadowMap,Je.spotLightMatrix.value=$.state.spotLightMatrix,Je.spotLightMap.value=$.state.spotLightMap,Je.pointShadowMap.value=$.state.pointShadowMap,Je.pointShadowMatrix.value=$.state.pointShadowMatrix),O.currentProgram=Ke,O.uniformsList=null,Ke}function Ce(b){if(b.uniformsList===null){const k=b.currentProgram.getUniforms();b.uniformsList=ms.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function Ue(b,k){const Z=Ae.get(b);Z.outputColorSpace=k.outputColorSpace,Z.batching=k.batching,Z.instancing=k.instancing,Z.instancingColor=k.instancingColor,Z.skinning=k.skinning,Z.morphTargets=k.morphTargets,Z.morphNormals=k.morphNormals,Z.morphColors=k.morphColors,Z.morphTargetsCount=k.morphTargetsCount,Z.numClippingPlanes=k.numClippingPlanes,Z.numIntersection=k.numClipIntersection,Z.vertexAlphas=k.vertexAlphas,Z.vertexTangents=k.vertexTangents,Z.toneMapping=k.toneMapping}function ke(b,k,Z,O,$){k.isScene!==!0&&(k=te),L.resetTextureUnits();const _e=k.fog,Oe=O.isMeshStandardMaterial?k.environment:null,Le=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ht,Fe=(O.isMeshStandardMaterial?ee:S).get(O.envMap||Oe),be=O.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ke=!!Z.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Je=!!Z.morphAttributes.position,dt=!!Z.morphAttributes.normal,Rt=!!Z.morphAttributes.color;let _t=Qn;O.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(_t=y.toneMapping);const ut=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,xt=ut!==void 0?ut.length:0,We=Ae.get(O),en=m.state.lights;if(R===!0&&(C===!0||b!==E)){const Dt=b===E&&O.id===B;Ze.setState(O,b,Dt)}let ht=!1;O.version===We.__version?(We.needsLights&&We.lightsStateVersion!==en.state.version||We.outputColorSpace!==Le||$.isBatchedMesh&&We.batching===!1||!$.isBatchedMesh&&We.batching===!0||$.isInstancedMesh&&We.instancing===!1||!$.isInstancedMesh&&We.instancing===!0||$.isSkinnedMesh&&We.skinning===!1||!$.isSkinnedMesh&&We.skinning===!0||$.isInstancedMesh&&We.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&We.instancingColor===!1&&$.instanceColor!==null||We.envMap!==Fe||O.fog===!0&&We.fog!==_e||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Ze.numPlanes||We.numIntersection!==Ze.numIntersection)||We.vertexAlphas!==be||We.vertexTangents!==Ke||We.morphTargets!==Je||We.morphNormals!==dt||We.morphColors!==Rt||We.toneMapping!==_t||se.isWebGL2===!0&&We.morphTargetsCount!==xt)&&(ht=!0):(ht=!0,We.__version=O.version);let Tt=We.currentProgram;ht===!0&&(Tt=re(O,k,$));let Nt=!1,Ot=!1,tn=!1;const Xe=Tt.getUniforms(),It=We.uniforms;if(oe.useProgram(Tt.program)&&(Nt=!0,Ot=!0,tn=!0),O.id!==B&&(B=O.id,Ot=!0),Nt||E!==b){Xe.setValue(Y,"projectionMatrix",b.projectionMatrix),Xe.setValue(Y,"viewMatrix",b.matrixWorldInverse);const Dt=Xe.map.cameraPosition;Dt!==void 0&&Dt.setValue(Y,K.setFromMatrixPosition(b.matrixWorld)),se.logarithmicDepthBuffer&&Xe.setValue(Y,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Xe.setValue(Y,"isOrthographic",b.isOrthographicCamera===!0),E!==b&&(E=b,Ot=!0,tn=!0)}if($.isSkinnedMesh){Xe.setOptional(Y,$,"bindMatrix"),Xe.setOptional(Y,$,"bindMatrixInverse");const Dt=$.skeleton;Dt&&(se.floatVertexTextures?(Dt.boneTexture===null&&Dt.computeBoneTexture(),Xe.setValue(Y,"boneTexture",Dt.boneTexture,L)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(Xe.setOptional(Y,$,"batchingTexture"),Xe.setValue(Y,"batchingTexture",$._matricesTexture,L));const Lt=Z.morphAttributes;if((Lt.position!==void 0||Lt.normal!==void 0||Lt.color!==void 0&&se.isWebGL2===!0)&&nt.update($,Z,Tt),(Ot||We.receiveShadow!==$.receiveShadow)&&(We.receiveShadow=$.receiveShadow,Xe.setValue(Y,"receiveShadow",$.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(It.envMap.value=Fe,It.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),Ot&&(Xe.setValue(Y,"toneMappingExposure",y.toneMappingExposure),We.needsLights&&Ie(It,tn),_e&&O.fog===!0&&ye.refreshFogUniforms(It,_e),ye.refreshMaterialUniforms(It,O,F,Q,X),ms.upload(Y,Ce(We),It,L)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(ms.upload(Y,Ce(We),It,L),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Xe.setValue(Y,"center",$.center),Xe.setValue(Y,"modelViewMatrix",$.modelViewMatrix),Xe.setValue(Y,"normalMatrix",$.normalMatrix),Xe.setValue(Y,"modelMatrix",$.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Dt=O.uniformsGroups;for(let dn=0,Ns=Dt.length;dn<Ns;dn++)if(se.isWebGL2){const Fr=Dt[dn];rt.update(Fr,Tt),rt.bind(Fr,Tt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Tt}function Ie(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function Me(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(b,k,Z){Ae.get(b.texture).__webglTexture=k,Ae.get(b.depthTexture).__webglTexture=Z;const O=Ae.get(b);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=Z===void 0,O.__autoAllocateDepthBuffer||de.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,k){const Z=Ae.get(b);Z.__webglFramebuffer=k,Z.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(b,k=0,Z=0){I=b,w=k,A=Z;let O=!0,$=null,_e=!1,Oe=!1;if(b){const Fe=Ae.get(b);Fe.__useDefaultFramebuffer!==void 0?(oe.bindFramebuffer(Y.FRAMEBUFFER,null),O=!1):Fe.__webglFramebuffer===void 0?L.setupRenderTarget(b):Fe.__hasExternalTextures&&L.rebindTextures(b,Ae.get(b.texture).__webglTexture,Ae.get(b.depthTexture).__webglTexture);const be=b.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(Oe=!0);const Ke=Ae.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ke[k])?$=Ke[k][Z]:$=Ke[k],_e=!0):se.isWebGL2&&b.samples>0&&L.useMultisampledRTT(b)===!1?$=Ae.get(b).__webglMultisampledFramebuffer:Array.isArray(Ke)?$=Ke[Z]:$=Ke,M.copy(b.viewport),P.copy(b.scissor),z=b.scissorTest}else M.copy(W).multiplyScalar(F).floor(),P.copy(N).multiplyScalar(F).floor(),z=H;if(oe.bindFramebuffer(Y.FRAMEBUFFER,$)&&se.drawBuffers&&O&&oe.drawBuffers(b,$),oe.viewport(M),oe.scissor(P),oe.setScissorTest(z),_e){const Fe=Ae.get(b.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+k,Fe.__webglTexture,Z)}else if(Oe){const Fe=Ae.get(b.texture),be=k||0;Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Fe.__webglTexture,Z||0,be)}B=-1},this.readRenderTargetPixels=function(b,k,Z,O,$,_e,Oe){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Ae.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Oe!==void 0&&(Le=Le[Oe]),Le){oe.bindFramebuffer(Y.FRAMEBUFFER,Le);try{const Fe=b.texture,be=Fe.format,Ke=Fe.type;if(be!==cn&&Ve.convert(be)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Je=Ke===Cr&&(de.has("EXT_color_buffer_half_float")||se.isWebGL2&&de.has("EXT_color_buffer_float"));if(Ke!==ei&&Ve.convert(Ke)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ke===Fn&&(se.isWebGL2||de.has("OES_texture_float")||de.has("WEBGL_color_buffer_float")))&&!Je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-O&&Z>=0&&Z<=b.height-$&&Y.readPixels(k,Z,O,$,Ve.convert(be),Ve.convert(Ke),_e)}finally{const Fe=I!==null?Ae.get(I).__webglFramebuffer:null;oe.bindFramebuffer(Y.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(b,k,Z=0){const O=Math.pow(2,-Z),$=Math.floor(k.image.width*O),_e=Math.floor(k.image.height*O);L.setTexture2D(k,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,Z,0,0,b.x,b.y,$,_e),oe.unbindTexture()},this.copyTextureToTexture=function(b,k,Z,O=0){const $=k.image.width,_e=k.image.height,Oe=Ve.convert(Z.format),Le=Ve.convert(Z.type);L.setTexture2D(Z,0),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,Z.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,Z.unpackAlignment),k.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,O,b.x,b.y,$,_e,Oe,Le,k.image.data):k.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,O,b.x,b.y,k.mipmaps[0].width,k.mipmaps[0].height,Oe,k.mipmaps[0].data):Y.texSubImage2D(Y.TEXTURE_2D,O,b.x,b.y,Oe,Le,k.image),O===0&&Z.generateMipmaps&&Y.generateMipmap(Y.TEXTURE_2D),oe.unbindTexture()},this.copyTextureToTexture3D=function(b,k,Z,O,$=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=b.max.x-b.min.x+1,Oe=b.max.y-b.min.y+1,Le=b.max.z-b.min.z+1,Fe=Ve.convert(O.format),be=Ve.convert(O.type);let Ke;if(O.isData3DTexture)L.setTexture3D(O,0),Ke=Y.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)L.setTexture2DArray(O,0),Ke=Y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,O.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,O.unpackAlignment);const Je=Y.getParameter(Y.UNPACK_ROW_LENGTH),dt=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),Rt=Y.getParameter(Y.UNPACK_SKIP_PIXELS),_t=Y.getParameter(Y.UNPACK_SKIP_ROWS),ut=Y.getParameter(Y.UNPACK_SKIP_IMAGES),xt=Z.isCompressedTexture?Z.mipmaps[$]:Z.image;Y.pixelStorei(Y.UNPACK_ROW_LENGTH,xt.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,xt.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,b.min.x),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,b.min.y),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,b.min.z),Z.isDataTexture||Z.isData3DTexture?Y.texSubImage3D(Ke,$,k.x,k.y,k.z,_e,Oe,Le,Fe,be,xt.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(Ke,$,k.x,k.y,k.z,_e,Oe,Le,Fe,xt.data)):Y.texSubImage3D(Ke,$,k.x,k.y,k.z,_e,Oe,Le,Fe,be,xt),Y.pixelStorei(Y.UNPACK_ROW_LENGTH,Je),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,dt),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,Rt),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,_t),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,ut),$===0&&O.generateMipmaps&&Y.generateMipmap(Ke),oe.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?L.setTextureCube(b,0):b.isData3DTexture?L.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?L.setTexture2DArray(b,0):L.setTexture2D(b,0),oe.unbindTexture()},this.resetState=function(){w=0,A=0,I=null,oe.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ho?"display-p3":"srgb",t.unpackColorSpace=yt.workingColorSpace===Ts?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Pt?_i:Ec}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===_i?Pt:Ht}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Nv extends Hc{}Nv.prototype.isWebGL1Renderer=!0;class Dv extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Uv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=wo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Yt=new J;class Yo{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=wn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array),r=St(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Yo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Tl=new J,Al=new Mt,Rl=new Mt,Fv=new J,Cl=new at,ss=new J,co=new An,Ll=new at,uo=new As;class Bv extends Jt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ua,this.bindMatrix=new at,this.bindMatrixInverse=new at,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Vn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ss),this.boundingBox.expandByPoint(ss)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new An),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ss),this.boundingSphere.expandByPoint(ss)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),co.copy(this.boundingSphere),co.applyMatrix4(i),e.ray.intersectsSphere(co)!==!1&&(Ll.copy(i).invert(),uo.copy(e.ray).applyMatrix4(Ll),!(this.boundingBox!==null&&uo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,uo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Mt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ua?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Xu?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Al.fromBufferAttribute(i.attributes.skinIndex,e),Rl.fromBufferAttribute(i.attributes.skinWeight,e),Tl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Rl.getComponent(r);if(o!==0){const a=Al.getComponent(r);Cl.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Fv.copy(Tl).applyMatrix4(Cl),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Gc extends Ct{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ov extends Gt{constructor(e=null,t=1,n=1,i,r,o,a,l,u=Vt,h=Vt,c,d){super(null,o,a,l,u,h,i,r,c,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pl=new at,zv=new at;class jo{constructor(e=[],t=[]){this.uuid=gn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new at)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new at;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:zv;Pl.multiplyMatrices(a,t[r]),Pl.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new jo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ov(t,e,e,cn,Fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Gc),this.bones.push(o),this.boneInverses.push(new at().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Co extends Zt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ki=new at,Il=new at,os=[],Nl=new Vn,Vv=new at,vr=new Jt,gr=new An;class kv extends Jt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Co(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Vv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ki),Nl.copy(e.boundingBox).applyMatrix4(ki),this.boundingBox.union(Nl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new An),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ki),gr.copy(e.boundingSphere).applyMatrix4(ki),this.boundingSphere.union(gr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(vr.geometry=this.geometry,vr.material=this.material,vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gr.copy(this.boundingSphere),gr.applyMatrix4(n),e.ray.intersectsSphere(gr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ki),Il.multiplyMatrices(n,ki),vr.matrixWorld=Il,vr.raycast(e,os);for(let o=0,a=os.length;o<a;o++){const l=os[o];l.instanceId=r,l.object=this,t.push(l)}os.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Co(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Wc extends Tn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Dl=new J,Ul=new J,Fl=new at,ho=new As,as=new An;class Ko extends Ct{constructor(e=new _n,t=new Wc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Dl.fromBufferAttribute(t,i-1),Ul.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Dl.distanceTo(Ul);e.setAttribute("lineDistance",new hn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),as.copy(n.boundingSphere),as.applyMatrix4(i),as.radius+=r,e.ray.intersectsSphere(as)===!1)return;Fl.copy(i).invert(),ho.copy(e.ray).applyMatrix4(Fl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new J,h=new J,c=new J,d=new J,f=this.isLineSegments?2:1,v=n.index,m=n.attributes.position;if(v!==null){const p=Math.max(0,o.start),_=Math.min(v.count,o.start+o.count);for(let y=p,x=_-1;y<x;y+=f){const w=v.getX(y),A=v.getX(y+1);if(u.fromBufferAttribute(m,w),h.fromBufferAttribute(m,A),ho.distanceSqToSegment(u,h,d,c)>l)continue;d.applyMatrix4(this.matrixWorld);const B=e.ray.origin.distanceTo(d);B<e.near||B>e.far||t.push({distance:B,point:c.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),_=Math.min(m.count,o.start+o.count);for(let y=p,x=_-1;y<x;y+=f){if(u.fromBufferAttribute(m,y),h.fromBufferAttribute(m,y+1),ho.distanceSqToSegment(u,h,d,c)>l)continue;d.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(d);A<e.near||A>e.far||t.push({distance:A,point:c.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Bl=new J,Ol=new J;class Hv extends Ko{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Bl.fromBufferAttribute(t,i),Ol.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Bl.distanceTo(Ol);e.setAttribute("lineDistance",new hn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Gv extends Ko{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Xc extends Tn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zl=new at,Lo=new As,ls=new An,cs=new J;class Wv extends Ct{constructor(e=new _n,t=new Xc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere),ls.applyMatrix4(i),ls.radius+=r,e.ray.intersectsSphere(ls)===!1)return;zl.copy(i).invert(),Lo.copy(e.ray).applyMatrix4(zl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=n.index,c=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let v=d,g=f;v<g;v++){const m=u.getX(v);cs.fromBufferAttribute(c,m),Vl(cs,m,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let v=d,g=f;v<g;v++)cs.fromBufferAttribute(c,v),Vl(cs,v,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Vl(s,e,t,n,i,r,o){const a=Lo.distanceSqToPoint(s);if(a<t){const l=new J;Lo.closestPointToPoint(s,l),l.applyMatrix4(n);const u=i.ray.origin.distanceTo(l);if(u<i.near||u>i.far)return;r.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Zo extends _n{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let u=0;const h=[],c=new J,d=new J,f=[],v=[],g=[],m=[];for(let p=0;p<=n;p++){const _=[],y=p/n;let x=0;p===0&&o===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let w=0;w<=t;w++){const A=w/t;c.x=-e*Math.cos(i+A*r)*Math.sin(o+y*a),c.y=e*Math.cos(o+y*a),c.z=e*Math.sin(i+A*r)*Math.sin(o+y*a),v.push(c.x,c.y,c.z),d.copy(c).normalize(),g.push(d.x,d.y,d.z),m.push(A+x,1-y),_.push(u++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){const y=h[p][_+1],x=h[p][_],w=h[p+1][_],A=h[p+1][_+1];(p!==0||o>0)&&f.push(y,x,A),(p!==n-1||l<Math.PI)&&f.push(x,w,A)}this.setIndex(f),this.setAttribute("position",new hn(v,3)),this.setAttribute("normal",new hn(g,3)),this.setAttribute("uv",new hn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ps extends Tn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sc,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kn extends Ps{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new it(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new it(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new it(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function us(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Xv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function qv(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function kl(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function qc(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Dr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Yv extends Dr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fa,endingEnd:Fa}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ba:r=e,a=2*t-n;break;case Oa:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ba:o=e,l=2*n-t;break;case Oa:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const u=(n-t)*.5,h=this.valueSize;this._weightPrev=u/(t-a),this._weightNext=u/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,h=this._offsetPrev,c=this._offsetNext,d=this._weightPrev,f=this._weightNext,v=(n-t)/(i-t),g=v*v,m=g*v,p=-d*m+2*d*g-d*v,_=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*v+1,y=(-1-f)*m+(1.5+f)*g+.5*v,x=f*m-f*g;for(let w=0;w!==a;++w)r[w]=p*o[h+w]+_*o[u+w]+y*o[l+w]+x*o[c+w];return r}}class jv extends Dr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,h=(n-t)/(i-t),c=1-h;for(let d=0;d!==a;++d)r[d]=o[u+d]*c+o[l+d]*h;return r}}class Kv extends Dr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Rn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=us(t,this.TimeBufferType),this.values=us(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:us(e.times,Array),values:us(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Kv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new jv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Yv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Lr:t=this.InterpolantFactoryMethodDiscrete;break;case er:t=this.InterpolantFactoryMethodLinear;break;case zs:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Lr;case this.InterpolantFactoryMethodLinear:return er;case this.InterpolantFactoryMethodSmooth:return zs}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Xv(i))for(let a=0,l=i.length;a!==l;++a){const u=i[a];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,u),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===zs,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const u=e[a],h=e[a+1];if(u!==h&&(a!==1||u!==e[0]))if(i)l=!0;else{const c=a*n,d=c-n,f=c+n;for(let v=0;v!==n;++v){const g=t[c+v];if(g!==t[d+v]||g!==t[f+v]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const c=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[c+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,u=0;u!==n;++u)t[l+u]=t[a+u];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=er;class lr extends Rn{}lr.prototype.ValueTypeName="bool";lr.prototype.ValueBufferType=Array;lr.prototype.DefaultInterpolation=Lr;lr.prototype.InterpolantFactoryMethodLinear=void 0;lr.prototype.InterpolantFactoryMethodSmooth=void 0;class Yc extends Rn{}Yc.prototype.ValueTypeName="color";class ir extends Rn{}ir.prototype.ValueTypeName="number";class Zv extends Dr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let u=e*a;for(let h=u+a;u!==h;u+=4)ii.slerpFlat(r,0,o,u-a,o,u,l);return r}}class Si extends Rn{InterpolantFactoryMethodLinear(e){return new Zv(this.times,this.values,this.getValueSize(),e)}}Si.prototype.ValueTypeName="quaternion";Si.prototype.DefaultInterpolation=er;Si.prototype.InterpolantFactoryMethodSmooth=void 0;class cr extends Rn{}cr.prototype.ValueTypeName="string";cr.prototype.ValueBufferType=Array;cr.prototype.DefaultInterpolation=Lr;cr.prototype.InterpolantFactoryMethodLinear=void 0;cr.prototype.InterpolantFactoryMethodSmooth=void 0;class rr extends Rn{}rr.prototype.ValueTypeName="vector";class $v{constructor(e,t=-1,n,i=eh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=gn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Qv(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Rn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],u=[];l.push((a+r-1)%r,a,(a+1)%r),u.push(0,1,0);const h=qv(l);l=kl(l,1,h),u=kl(u,1,h),!i&&l[0]===0&&(l.push(r),u.push(u[0])),o.push(new ir(".morphTargetInfluences["+t[a].name+"]",l,u).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const u=e[a],h=u.name.match(r);if(h&&h.length>1){const c=h[1];let d=i[c];d||(i[c]=d=[]),d.push(u)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(c,d,f,v,g){if(f.length!==0){const m=[],p=[];qc(f,m,p,v),m.length!==0&&g.push(new c(d,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const u=e.hierarchy||[];for(let c=0;c<u.length;c++){const d=u[c].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let v;for(v=0;v<d.length;v++)if(d[v].morphTargets)for(let g=0;g<d[v].morphTargets.length;g++)f[d[v].morphTargets[g]]=-1;for(const g in f){const m=[],p=[];for(let _=0;_!==d[v].morphTargets.length;++_){const y=d[v];m.push(y.time),p.push(y.morphTarget===g?1:0)}i.push(new ir(".morphTargetInfluence["+g+"]",m,p))}l=f.length*o}else{const f=".bones["+t[c].name+"]";n(rr,f+".position",d,"pos",i),n(Si,f+".quaternion",d,"rot",i),n(rr,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Jv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ir;case"vector":case"vector2":case"vector3":case"vector4":return rr;case"color":return Yc;case"quaternion":return Si;case"bool":case"boolean":return lr;case"string":return cr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Qv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Jv(s.type);if(s.times===void 0){const t=[],n=[];qc(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const $n={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class eg{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,c){return u.push(h,c),this},this.removeHandler=function(h){const c=u.indexOf(h);return c!==-1&&u.splice(c,2),this},this.getHandler=function(h){for(let c=0,d=u.length;c<d;c+=2){const f=u[c],v=u[c+1];if(f.global&&(f.lastIndex=0),f.test(h))return v}return null}}}const tg=new eg;class ur{constructor(e){this.manager=e!==void 0?e:tg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ur.DEFAULT_MATERIAL_NAME="__DEFAULT";const Dn={};class ng extends Error{constructor(e,t){super(e),this.response=t}}class jc extends ur{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=$n.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Dn[e]!==void 0){Dn[e].push({onLoad:t,onProgress:n,onError:i});return}Dn[e]=[],Dn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const h=Dn[e],c=u.body.getReader(),d=u.headers.get("Content-Length")||u.headers.get("X-File-Size"),f=d?parseInt(d):0,v=f!==0;let g=0;const m=new ReadableStream({start(p){_();function _(){c.read().then(({done:y,value:x})=>{if(y)p.close();else{g+=x.byteLength;const w=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:f});for(let A=0,I=h.length;A<I;A++){const B=h[A];B.onProgress&&B.onProgress(w)}p.enqueue(x),_()}})}}});return new Response(m)}else throw new ng(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return u.json();default:if(a===void 0)return u.text();{const c=/charset="?([^;"\s]*)"?/i.exec(a),d=c&&c[1]?c[1].toLowerCase():void 0,f=new TextDecoder(d);return u.arrayBuffer().then(v=>f.decode(v))}}}).then(u=>{$n.add(e,u);const h=Dn[e];delete Dn[e];for(let c=0,d=h.length;c<d;c++){const f=h[c];f.onLoad&&f.onLoad(u)}}).catch(u=>{const h=Dn[e];if(h===void 0)throw this.manager.itemError(e),u;delete Dn[e];for(let c=0,d=h.length;c<d;c++){const f=h[c];f.onError&&f.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ig extends ur{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=$n.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Pr("img");function l(){h(),$n.add(e,this),t&&t(this),r.manager.itemEnd(e)}function u(c){h(),i&&i(c),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class rg extends ur{constructor(e){super(e)}load(e,t,n,i){const r=new Gt,o=new ig(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Is extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const fo=new at,Hl=new J,Gl=new J;class $o{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wo,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Hl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hl),Gl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gl),t.updateMatrixWorld(),fo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class sg extends $o{constructor(){super(new Kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=tr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class og extends Is{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new sg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Wl=new at,_r=new J,po=new J;class ag extends $o{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pt(4,2),this._viewportCount=6,this._viewports=[new Mt(2,1,1,1),new Mt(0,1,1,1),new Mt(3,1,1,1),new Mt(1,1,1,1),new Mt(3,0,1,1),new Mt(1,0,1,1)],this._cubeDirections=[new J(1,0,0),new J(-1,0,0),new J(0,0,1),new J(0,0,-1),new J(0,1,0),new J(0,-1,0)],this._cubeUps=[new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,0,1),new J(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),_r.setFromMatrixPosition(e.matrixWorld),n.position.copy(_r),po.copy(n.position),po.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(po),n.updateMatrixWorld(),i.makeTranslation(-_r.x,-_r.y,-_r.z),Wl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wl)}}class lg extends Is{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ag}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class cg extends $o{constructor(){super(new Xo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ug extends Is{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new cg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class hg extends Is{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Tr{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class dg extends ur{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=$n.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(u=>{t&&t(u),r.manager.itemEnd(e)}).catch(u=>{i&&i(u)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(u){return $n.add(e,u),t&&t(u),r.manager.itemEnd(e),u}).catch(function(u){i&&i(u),$n.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});$n.add(e,l),r.manager.itemStart(e)}}class fg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Xl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Xl(){return(typeof performance>"u"?Date:performance).now()}const Jo="\\[\\]\\.:\\/",pg=new RegExp("["+Jo+"]","g"),Qo="[^"+Jo+"]",mg="[^"+Jo.replace("\\.","")+"]",vg=/((?:WC+[\/:])*)/.source.replace("WC",Qo),gg=/(WCOD+)?/.source.replace("WCOD",mg),_g=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qo),xg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qo),yg=new RegExp("^"+vg+gg+_g+xg+"$"),Eg=["material","materials","bones","map"];class Sg{constructor(e,t,n){const i=n||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Et{constructor(e,t,n){this.path=t,this.parsedPath=n||Et.parseTrackName(t),this.node=Et.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Et.Composite(e,t,n):new Et(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(pg,"")}static parseTrackName(e){const t=yg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Eg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Et.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const o=e[i];if(o===void 0){const u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Et.Composite=Sg;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vo);function ql(s,e){if(e===th)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===bo||e===yc){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===bo)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Mg extends ur{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Rg(t)}),this.register(function(t){return new Bg(t)}),this.register(function(t){return new Og(t)}),this.register(function(t){return new zg(t)}),this.register(function(t){return new Lg(t)}),this.register(function(t){return new Pg(t)}),this.register(function(t){return new Ig(t)}),this.register(function(t){return new Ng(t)}),this.register(function(t){return new Ag(t)}),this.register(function(t){return new Dg(t)}),this.register(function(t){return new Cg(t)}),this.register(function(t){return new Fg(t)}),this.register(function(t){return new Ug(t)}),this.register(function(t){return new wg(t)}),this.register(function(t){return new Vg(t)}),this.register(function(t){return new kg(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const u=Tr.extractUrlBase(e);o=Tr.resolveURL(u,this.path)}else o=Tr.extractUrlBase(e);this.manager.itemStart(e);const a=function(u){i?i(u):console.error(u),r.manager.itemError(e),r.manager.itemEnd(e)},l=new jc(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(u){try{r.parse(u,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Kc){try{o[ft.KHR_BINARY_GLTF]=new Hg(e)}catch(c){i&&i(c);return}r=JSON.parse(o[ft.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new t_(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const c=this.pluginCallbacks[h](u);c.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[c.name]=c,o[c.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const c=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(c){case ft.KHR_MATERIALS_UNLIT:o[c]=new Tg;break;case ft.KHR_DRACO_MESH_COMPRESSION:o[c]=new Gg(r,this.dracoLoader);break;case ft.KHR_TEXTURE_TRANSFORM:o[c]=new Wg;break;case ft.KHR_MESH_QUANTIZATION:o[c]=new Xg;break;default:d.indexOf(c)>=0&&a[c]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+c+'".')}}u.setExtensions(o),u.setPlugins(a),u.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function bg(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const ft={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class wg{constructor(e){this.parser=e,this.name=ft.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let u;const h=new it(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Ht);const c=l.range!==void 0?l.range:0;switch(l.type){case"directional":u=new ug(h),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new lg(h),u.distance=c;break;case"spot":u=new og(h),u.distance=c,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,u.angle=l.spot.outerConeAngle,u.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return u.position.set(0,0,0),u.decay=2,jn(u,l),l.intensity!==void 0&&(u.intensity=l.intensity),u.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(u),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Tg{constructor(){this.name=ft.KHR_MATERIALS_UNLIT}getMaterialType(){return Zn}extendParams(e,t,n){const i=[];e.color=new it(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ht),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Pt))}return Promise.all(i)}}class Ag{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Rg{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new pt(a,a)}return Promise.all(r)}}class Cg{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Lg{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new it(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Ht)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Pt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class Pg{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class Ig{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new it().setRGB(a[0],a[1],a[2],Ht),Promise.all(r)}}class Ng{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Dg{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new it().setRGB(a[0],a[1],a[2],Ht),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Pt)),Promise.all(r)}}class Ug{constructor(e){this.parser=e,this.name=ft.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class Fg{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class Bg{constructor(e){this.parser=e,this.name=ft.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class Og{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const u=n.options.manager.getHandler(a.uri);u!==null&&(l=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class zg{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const u=n.options.manager.getHandler(a.uri);u!==null&&(l=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Vg{constructor(e){this.name=ft.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,u=i.byteLength||0,h=i.count,c=i.byteStride,d=new Uint8Array(a,l,u);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,c,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*c);return o.decodeGltfBuffer(new Uint8Array(f),h,c,d,i.mode,i.filter),f})})}else return null}}class kg{constructor(e){this.name=ft.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const u of i.primitives)if(u.mode!==an.TRIANGLES&&u.mode!==an.TRIANGLE_STRIP&&u.mode!==an.TRIANGLE_FAN&&u.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const u in o)a.push(this.parser.getDependency("accessor",o[u]).then(h=>(l[u]=h,l[u])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(u=>{const h=u.pop(),c=h.isGroup?h.children:[h],d=u[0].count,f=[];for(const v of c){const g=new at,m=new J,p=new ii,_=new J(1,1,1),y=new kv(v.geometry,v.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&_.fromBufferAttribute(l.SCALE,x),y.setMatrixAt(x,g.compose(m,p,_));for(const x in l)if(x==="_COLOR_0"){const w=l[x];y.instanceColor=new Co(w.array,w.itemSize,w.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&v.geometry.setAttribute(x,l[x]);Ct.prototype.copy.call(y,v),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Kc="glTF",xr=12,Yl={JSON:1313821514,BIN:5130562};class Hg{constructor(e){this.name=ft.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,xr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Kc)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-xr,r=new DataView(e,xr);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Yl.JSON){const u=new Uint8Array(e,xr+o,a);this.content=n.decode(u)}else if(l===Yl.BIN){const u=xr+o;this.body=e.slice(u,u+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Gg{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ft.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},u={};for(const h in o){const c=Po[h]||h.toLowerCase();a[c]=o[h]}for(const h in e.attributes){const c=Po[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Ki[d.componentType];u[c]=f.name,l[c]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(c,d){i.decodeDracoFile(h,function(f){for(const v in f.attributes){const g=f.attributes[v],m=l[v];m!==void 0&&(g.normalized=m)}c(f)},a,u,Ht,d)})})}}class Wg{constructor(){this.name=ft.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Xg{constructor(){this.name=ft.KHR_MESH_QUANTIZATION}}class Zc extends Dr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,u=a*3,h=i-t,c=(n-t)/h,d=c*c,f=d*c,v=e*u,g=v-u,m=-2*f+3*d,p=f-d,_=1-m,y=p-d+c;for(let x=0;x!==a;x++){const w=o[g+x+a],A=o[g+x+l]*h,I=o[v+x+a],B=o[v+x]*h;r[x]=_*w+y*A+m*I+p*B}return r}}const qg=new ii;class Yg extends Zc{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return qg.fromArray(r).normalize().toArray(r),r}}const an={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ki={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},jl={9728:Vt,9729:$t,9984:Mo,9985:dc,9986:ps,9987:xi},Kl={33071:ln,33648:gs,10497:Ji},mo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Po={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Yn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},jg={CUBICSPLINE:void 0,LINEAR:er,STEP:Lr},vo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Kg(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ps({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:On})),s.DefaultMaterial}function ui(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function jn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Zg(s,e,t){let n=!1,i=!1,r=!1;for(let u=0,h=e.length;u<h;u++){const c=e[u];if(c.POSITION!==void 0&&(n=!0),c.NORMAL!==void 0&&(i=!0),c.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let u=0,h=e.length;u<h;u++){const c=e[u];if(n){const d=c.POSITION!==void 0?t.getDependency("accessor",c.POSITION):s.attributes.position;o.push(d)}if(i){const d=c.NORMAL!==void 0?t.getDependency("accessor",c.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=c.COLOR_0!==void 0?t.getDependency("accessor",c.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(u){const h=u[0],c=u[1],d=u[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=c),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function $g(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Jg(s){let e;const t=s.extensions&&s.extensions[ft.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+go(t.attributes):e=s.indices+":"+go(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+go(s.targets[n]);return e}function go(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Io(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Qg(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const e_=new at;class t_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new bg,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new rg(this.options.manager):this.textureLoader=new dg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new jc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ui(r,a,i),jn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[u,h]of o.children.entries())r(h,a.children[u])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ft.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Tr.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=mo[i.type],a=Ki[i.componentType],l=i.normalized===!0,u=new a(i.count*o);return Promise.resolve(new Zt(u,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=mo[i.type],u=Ki[i.componentType],h=u.BYTES_PER_ELEMENT,c=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,v=i.normalized===!0;let g,m;if(f&&f!==c){const p=Math.floor(d/f),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=t.cache.get(_);y||(g=new u(a,p*f,i.count*f/h),y=new Uv(g,f/h),t.cache.add(_,y)),m=new Yo(y,l,d%f/h,v)}else a===null?g=new u(i.count*l):g=new u(a,d,i.count*l),m=new Zt(g,l,v);if(i.sparse!==void 0){const p=mo.SCALAR,_=Ki[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,w=new _(o[1],y,i.sparse.count*p),A=new u(o[2],x,i.sparse.count*l);a!==null&&(m=new Zt(m.array.slice(),m.itemSize,m.normalized));for(let I=0,B=w.length;I<B;I++){const E=w[I];if(m.setX(E,A[I*l]),l>=2&&m.setY(E,A[I*l+1]),l>=3&&m.setZ(E,A[I*l+2]),l>=4&&m.setW(E,A[I*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const u=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=jl[d.magFilter]||$t,h.minFilter=jl[d.minFilter]||xi,h.wrapS=Kl[d.wrapS]||Ji,h.wrapT=Kl[d.wrapT]||Ji,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=u,u}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(c=>c.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",u=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(c){u=!0;const d=new Blob([c],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(c){return new Promise(function(d,f){let v=d;t.isImageBitmapLoader===!0&&(v=function(g){const m=new Gt(g);m.needsUpdate=!0,d(m)}),t.load(Tr.resolveURL(c,r.path),v,void 0,f)})}).then(function(c){return u===!0&&a.revokeObjectURL(l),c.userData.mimeType=o.mimeType||Qg(o.uri),c}).catch(function(c){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),c});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ft.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ft.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[ft.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Xc,Tn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Wc,Tn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ps}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},u=[];if(l[ft.KHR_MATERIALS_UNLIT]){const c=i[ft.KHR_MATERIALS_UNLIT];o=c.getMaterialType(),u.push(c.extendParams(a,r,t))}else{const c=r.pbrMetallicRoughness||{};if(a.color=new it(1,1,1),a.opacity=1,Array.isArray(c.baseColorFactor)){const d=c.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Ht),a.opacity=d[3]}c.baseColorTexture!==void 0&&u.push(t.assignTexture(a,"map",c.baseColorTexture,Pt)),a.metalness=c.metallicFactor!==void 0?c.metallicFactor:1,a.roughness=c.roughnessFactor!==void 0?c.roughnessFactor:1,c.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(a,"metalnessMap",c.metallicRoughnessTexture)),u.push(t.assignTexture(a,"roughnessMap",c.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=bn);const h=r.alphaMode||vo.OPAQUE;if(h===vo.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===vo.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Zn&&(u.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new pt(1,1),r.normalTexture.scale!==void 0)){const c=r.normalTexture.scale;a.normalScale.set(c,c)}if(r.occlusionTexture!==void 0&&o!==Zn&&(u.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Zn){const c=r.emissiveFactor;a.emissive=new it().setRGB(c[0],c[1],c[2],Ht)}return r.emissiveTexture!==void 0&&o!==Zn&&u.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Pt)),Promise.all(u).then(function(){const c=new o(a);return r.name&&(c.name=r.name),jn(c,r),t.associations.set(c,{materials:e}),r.extensions&&ui(i,c,r),c})}createUniqueName(e){const t=Et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[ft.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Zl(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const u=e[a],h=Jg(u),c=i[h];if(c)o.push(c.promise);else{let d;u.extensions&&u.extensions[ft.KHR_DRACO_MESH_COMPRESSION]?d=r(u):d=Zl(new _n,u,t),i[h]={primitive:u,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,u=o.length;l<u;l++){const h=o[l].material===void 0?Kg(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const u=l.slice(0,l.length-1),h=l[l.length-1],c=[];for(let f=0,v=h.length;f<v;f++){const g=h[f],m=o[f];let p;const _=u[f];if(m.mode===an.TRIANGLES||m.mode===an.TRIANGLE_STRIP||m.mode===an.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Bv(g,_):new Jt(g,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===an.TRIANGLE_STRIP?p.geometry=ql(p.geometry,yc):m.mode===an.TRIANGLE_FAN&&(p.geometry=ql(p.geometry,bo));else if(m.mode===an.LINES)p=new Hv(g,_);else if(m.mode===an.LINE_STRIP)p=new Ko(g,_);else if(m.mode===an.LINE_LOOP)p=new Gv(g,_);else if(m.mode===an.POINTS)p=new Wv(g,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&$g(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),jn(p,r),m.extensions&&ui(i,p,m),t.assignFinalMaterial(p),c.push(p)}for(let f=0,v=c.length;f<v;f++)t.associations.set(c[f],{meshes:e,primitives:f});if(c.length===1)return r.extensions&&ui(i,c[0],r),c[0];const d=new mi;r.extensions&&ui(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,v=c.length;f<v;f++)d.add(c[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Kt(Th.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Xo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),jn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let u=0,h=o.length;u<h;u++){const c=o[u];if(c){a.push(c);const d=new at;r!==null&&d.fromArray(r.array,u*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new jo(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],u=[],h=[];for(let c=0,d=i.channels.length;c<d;c++){const f=i.channels[c],v=i.samplers[f.sampler],g=f.target,m=g.node,p=i.parameters!==void 0?i.parameters[v.input]:v.input,_=i.parameters!==void 0?i.parameters[v.output]:v.output;g.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",_)),u.push(v),h.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(u),Promise.all(h)]).then(function(c){const d=c[0],f=c[1],v=c[2],g=c[3],m=c[4],p=[];for(let _=0,y=d.length;_<y;_++){const x=d[_],w=f[_],A=v[_],I=g[_],B=m[_];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const E=n._createAnimationTracks(x,w,A,I,B);if(E)for(let M=0;M<E.length;M++)p.push(E[M])}return new $v(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,u=i.weights.length;l<u;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let u=0,h=a.length;u<h;u++)o.push(n.getDependency("node",a[u]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(u){const h=u[0],c=u[1],d=u[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,e_)});for(let f=0,v=c.length;f<v;f++)h.add(c[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(u){return i._getNodeRef(i.cameraCache,r.camera,u)})),i._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){a.push(u)}),this.nodeCache[e]=Promise.all(a).then(function(u){let h;if(r.isBone===!0?h=new Gc:u.length>1?h=new mi:u.length===1?h=u[0]:h=new Ct,h!==u[0])for(let c=0,d=u.length;c<d;c++)h.add(u[c]);if(r.name&&(h.userData.name=r.name,h.name=o),jn(h,r),r.extensions&&ui(n,h,r),r.matrix!==void 0){const c=new at;c.fromArray(r.matrix),h.applyMatrix4(c)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new mi;n.name&&(r.name=i.createUniqueName(n.name)),jn(r,n),n.extensions&&ui(t,r,n);const o=n.nodes||[],a=[];for(let l=0,u=o.length;l<u;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,c=l.length;h<c;h++)r.add(l[h]);const u=h=>{const c=new Map;for(const[d,f]of i.associations)(d instanceof Tn||d instanceof Gt)&&c.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&c.set(d,f)}),c};return i.associations=u(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];Yn[r.path]===Yn.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let u;switch(Yn[r.path]){case Yn.weights:u=ir;break;case Yn.rotation:u=Si;break;case Yn.position:case Yn.scale:u=rr;break;default:switch(n.itemSize){case 1:u=ir;break;case 2:case 3:default:u=rr;break}break}const h=i.interpolation!==void 0?jg[i.interpolation]:er,c=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const v=new u(l[d]+"."+Yn[r.path],t.array,c,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Io(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Si?Yg:Zc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function n_(s,e,t){const n=e.attributes,i=new Vn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,u=a.max;if(l!==void 0&&u!==void 0){if(i.set(new J(l[0],l[1],l[2]),new J(u[0],u[1],u[2])),a.normalized){const h=Io(Ki[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new J,l=new J;for(let u=0,h=r.length;u<h;u++){const c=r[u];if(c.POSITION!==void 0){const d=t.json.accessors[c.POSITION],f=d.min,v=d.max;if(f!==void 0&&v!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(v[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(v[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(v[2]))),d.normalized){const g=Io(Ki[d.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new An;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Zl(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=Po[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return yt.workingColorSpace!==Ht&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${yt.workingColorSpace}" not supported.`),jn(s,e),n_(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Zg(s,e.targets,t):s})}class sr{static createButton(e){const t=document.createElement("button");function n(){let l=null;async function u(d){d.addEventListener("end",h),await e.xr.setSession(d),t.textContent="EXIT VR",l=d}function h(){l.removeEventListener("end",h),t.textContent="ENTER VR",l=null}t.style.display="",t.style.cursor="pointer",t.style.left="calc(50% - 50px)",t.style.width="100px",t.textContent="ENTER VR";const c={optionalFeatures:["local-floor","bounded-floor","hand-tracking","layers"]};t.onmouseenter=function(){t.style.opacity="1.0"},t.onmouseleave=function(){t.style.opacity="0.5"},t.onclick=function(){l===null?navigator.xr.requestSession("immersive-vr",c).then(u):(l.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",c).then(u))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",c).then(u)}function i(){t.style.display="",t.style.cursor="auto",t.style.left="calc(50% - 75px)",t.style.width="150px",t.onmouseenter=null,t.onmouseleave=null,t.onclick=null}function r(){i(),t.textContent="VR NOT SUPPORTED"}function o(l){i(),console.warn("Exception when trying to call xr.isSessionSupported",l),t.textContent="VR NOT ALLOWED"}function a(l){l.style.position="absolute",l.style.bottom="20px",l.style.padding="12px 6px",l.style.border="1px solid #fff",l.style.borderRadius="4px",l.style.background="rgba(0,0,0,0.1)",l.style.color="#fff",l.style.font="normal 13px sans-serif",l.style.textAlign="center",l.style.opacity="0.5",l.style.outline="none",l.style.zIndex="999"}if("xr"in navigator)return t.id="VRButton",t.style.display="none",a(t),navigator.xr.isSessionSupported("immersive-vr").then(function(l){l?n():r(),l&&sr.xrSessionIsGranted&&t.click()}).catch(o),t;{const l=document.createElement("a");return window.isSecureContext===!1?(l.href=document.location.href.replace(/^http:/,"https:"),l.innerHTML="WEBXR NEEDS HTTPS"):(l.href="https://immersiveweb.dev/",l.innerHTML="WEBXR NOT AVAILABLE"),l.style.left="calc(50% - 90px)",l.style.width="180px",l.style.textDecoration="none",a(l),l}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{sr.xrSessionIsGranted=!0})}}}sr.xrSessionIsGranted=!1;sr.registerSessionGrantedListener();function i_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}function hs(s){throw new Error('Could not dynamically require "'+s+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var $c={exports:{}};(function(s,e){(function(t){s.exports=t()})(function(){return function t(n,i,r){function o(u,h){if(!i[u]){if(!n[u]){var c=typeof hs=="function"&&hs;if(!h&&c)return c(u,!0);if(a)return a(u,!0);throw new Error("Cannot find module '"+u+"'")}var d=i[u]={exports:{}};n[u][0].call(d.exports,function(f){var v=n[u][1][f];return o(v||f)},d,d.exports,t,n,i,r)}return i[u].exports}for(var a=typeof hs=="function"&&hs,l=0;l<r.length;l++)o(r[l]);return o}({1:[function(t,n,i){n.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(t,n,i){n.exports={version:t("../package.json").version,AABB:t("./collision/AABB"),ArrayCollisionMatrix:t("./collision/ArrayCollisionMatrix"),Body:t("./objects/Body"),Box:t("./shapes/Box"),Broadphase:t("./collision/Broadphase"),Constraint:t("./constraints/Constraint"),ContactEquation:t("./equations/ContactEquation"),Narrowphase:t("./world/Narrowphase"),ConeTwistConstraint:t("./constraints/ConeTwistConstraint"),ContactMaterial:t("./material/ContactMaterial"),ConvexPolyhedron:t("./shapes/ConvexPolyhedron"),Cylinder:t("./shapes/Cylinder"),DistanceConstraint:t("./constraints/DistanceConstraint"),Equation:t("./equations/Equation"),EventTarget:t("./utils/EventTarget"),FrictionEquation:t("./equations/FrictionEquation"),GSSolver:t("./solver/GSSolver"),GridBroadphase:t("./collision/GridBroadphase"),Heightfield:t("./shapes/Heightfield"),HingeConstraint:t("./constraints/HingeConstraint"),LockConstraint:t("./constraints/LockConstraint"),Mat3:t("./math/Mat3"),Material:t("./material/Material"),NaiveBroadphase:t("./collision/NaiveBroadphase"),ObjectCollisionMatrix:t("./collision/ObjectCollisionMatrix"),Pool:t("./utils/Pool"),Particle:t("./shapes/Particle"),Plane:t("./shapes/Plane"),PointToPointConstraint:t("./constraints/PointToPointConstraint"),Quaternion:t("./math/Quaternion"),Ray:t("./collision/Ray"),RaycastVehicle:t("./objects/RaycastVehicle"),RaycastResult:t("./collision/RaycastResult"),RigidVehicle:t("./objects/RigidVehicle"),RotationalEquation:t("./equations/RotationalEquation"),RotationalMotorEquation:t("./equations/RotationalMotorEquation"),SAPBroadphase:t("./collision/SAPBroadphase"),SPHSystem:t("./objects/SPHSystem"),Shape:t("./shapes/Shape"),Solver:t("./solver/Solver"),Sphere:t("./shapes/Sphere"),SplitSolver:t("./solver/SplitSolver"),Spring:t("./objects/Spring"),Trimesh:t("./shapes/Trimesh"),Vec3:t("./math/Vec3"),Vec3Pool:t("./utils/Vec3Pool"),World:t("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(t,n,i){var r=t("../math/Vec3");t("../utils/Utils"),n.exports=o;function o(u){u=u||{},this.lowerBound=new r,u.lowerBound&&this.lowerBound.copy(u.lowerBound),this.upperBound=new r,u.upperBound&&this.upperBound.copy(u.upperBound)}var a=new r;o.prototype.setFromPoints=function(u,h,c,d){var f=this.lowerBound,v=this.upperBound,g=c;f.copy(u[0]),g&&g.vmult(f,f),v.copy(f);for(var m=1;m<u.length;m++){var p=u[m];g&&(g.vmult(p,a),p=a),p.x>v.x&&(v.x=p.x),p.x<f.x&&(f.x=p.x),p.y>v.y&&(v.y=p.y),p.y<f.y&&(f.y=p.y),p.z>v.z&&(v.z=p.z),p.z<f.z&&(f.z=p.z)}return h&&(h.vadd(f,f),h.vadd(v,v)),d&&(f.x-=d,f.y-=d,f.z-=d,v.x+=d,v.y+=d,v.z+=d),this},o.prototype.copy=function(u){return this.lowerBound.copy(u.lowerBound),this.upperBound.copy(u.upperBound),this},o.prototype.clone=function(){return new o().copy(this)},o.prototype.extend=function(u){var h=u.lowerBound.x;this.lowerBound.x>h&&(this.lowerBound.x=h);var c=u.upperBound.x;this.upperBound.x<c&&(this.upperBound.x=c);var h=u.lowerBound.y;this.lowerBound.y>h&&(this.lowerBound.y=h);var c=u.upperBound.y;this.upperBound.y<c&&(this.upperBound.y=c);var h=u.lowerBound.z;this.lowerBound.z>h&&(this.lowerBound.z=h);var c=u.upperBound.z;this.upperBound.z<c&&(this.upperBound.z=c)},o.prototype.overlaps=function(u){var h=this.lowerBound,c=this.upperBound,d=u.lowerBound,f=u.upperBound;return(d.x<=c.x&&c.x<=f.x||h.x<=f.x&&f.x<=c.x)&&(d.y<=c.y&&c.y<=f.y||h.y<=f.y&&f.y<=c.y)&&(d.z<=c.z&&c.z<=f.z||h.z<=f.z&&f.z<=c.z)},o.prototype.contains=function(u){var h=this.lowerBound,c=this.upperBound,d=u.lowerBound,f=u.upperBound;return h.x<=d.x&&c.x>=f.x&&h.y<=d.y&&c.y>=f.y&&h.z<=d.z&&c.z>=f.z},o.prototype.getCorners=function(u,h,c,d,f,v,g,m){var p=this.lowerBound,_=this.upperBound;u.copy(p),h.set(_.x,p.y,p.z),c.set(_.x,_.y,p.z),d.set(p.x,_.y,_.z),f.set(_.x,p.y,p.z),v.set(p.x,_.y,p.z),g.set(p.x,p.y,_.z),m.copy(_)};var l=[new r,new r,new r,new r,new r,new r,new r,new r];o.prototype.toLocalFrame=function(u,h){var c=l,d=c[0],f=c[1],v=c[2],g=c[3],m=c[4],p=c[5],_=c[6],y=c[7];this.getCorners(d,f,v,g,m,p,_,y);for(var x=0;x!==8;x++){var w=c[x];u.pointToLocal(w,w)}return h.setFromPoints(c)},o.prototype.toWorldFrame=function(u,h){var c=l,d=c[0],f=c[1],v=c[2],g=c[3],m=c[4],p=c[5],_=c[6],y=c[7];this.getCorners(d,f,v,g,m,p,_,y);for(var x=0;x!==8;x++){var w=c[x];u.pointToWorld(w,w)}return h.setFromPoints(c)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(t,n,i){n.exports=r;function r(){this.matrix=[]}r.prototype.get=function(o,a){if(o=o.index,a=a.index,a>o){var l=a;a=o,o=l}return this.matrix[(o*(o+1)>>1)+a-1]},r.prototype.set=function(o,a,l){if(o=o.index,a=a.index,a>o){var u=a;a=o,o=u}this.matrix[(o*(o+1)>>1)+a-1]=l?1:0},r.prototype.reset=function(){for(var o=0,a=this.matrix.length;o!==a;o++)this.matrix[o]=0},r.prototype.setNumObjects=function(o){this.matrix.length=o*(o-1)>>1}},{}],5:[function(t,n,i){var r=t("../objects/Body"),o=t("../math/Vec3"),a=t("../math/Quaternion");t("../shapes/Shape"),t("../shapes/Plane"),n.exports=l;function l(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}l.prototype.collisionPairs=function(g,m,p){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var u=r.STATIC|r.KINEMATIC;l.prototype.needBroadphaseCollision=function(g,m){return!(!(g.collisionFilterGroup&m.collisionFilterMask)||!(m.collisionFilterGroup&g.collisionFilterMask)||(g.type&u||g.sleepState===r.SLEEPING)&&(m.type&u||m.sleepState===r.SLEEPING))},l.prototype.intersectionTest=function(g,m,p,_){this.useBoundingBoxes?this.doBoundingBoxBroadphase(g,m,p,_):this.doBoundingSphereBroadphase(g,m,p,_)};var h=new o;new o,new a,new o,l.prototype.doBoundingSphereBroadphase=function(g,m,p,_){var y=h;m.position.vsub(g.position,y);var x=Math.pow(g.boundingRadius+m.boundingRadius,2),w=y.norm2();w<x&&(p.push(g),_.push(m))},l.prototype.doBoundingBoxBroadphase=function(g,m,p,_){g.aabbNeedsUpdate&&g.computeAABB(),m.aabbNeedsUpdate&&m.computeAABB(),g.aabb.overlaps(m.aabb)&&(p.push(g),_.push(m))};var c={keys:[]},d=[],f=[];l.prototype.makePairsUnique=function(g,m){for(var p=c,_=d,y=f,x=g.length,w=0;w!==x;w++)_[w]=g[w],y[w]=m[w];g.length=0,m.length=0;for(var w=0;w!==x;w++){var A=_[w].id,I=y[w].id,B=A<I?A+","+I:I+","+A;p[B]=w,p.keys.push(B)}for(var w=0;w!==p.keys.length;w++){var B=p.keys.pop(),E=p[B];g.push(_[E]),m.push(y[E]),delete p[B]}},l.prototype.setWorld=function(g){};var v=new o;l.boundingSphereCheck=function(g,m){var p=v;return g.position.vsub(m.position,p),Math.pow(g.shape.boundingSphereRadius+m.shape.boundingSphereRadius,2)>p.norm2()},l.prototype.aabbQuery=function(g,m,p){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(t,n,i){n.exports=l;var r=t("./Broadphase"),o=t("../math/Vec3"),a=t("../shapes/Shape");function l(h,c,d,f,v){r.apply(this),this.nx=d||10,this.ny=f||10,this.nz=v||10,this.aabbMin=h||new o(100,100,100),this.aabbMax=c||new o(-100,-100,-100);var g=this.nx*this.ny*this.nz;if(g<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=g,this.binLengths.length=g;for(var m=0;m<g;m++)this.bins[m]=[],this.binLengths[m]=0}l.prototype=new r,l.prototype.constructor=l;var u=new o;new o,l.prototype.collisionPairs=function(h,c,d){var f=h.numObjects(),v=h.bodies,ne=this.aabbMax,X=this.aabbMin,g=this.nx,m=this.ny,p=this.nz,_=m*p,y=p,x=1,w=ne.x,A=ne.y,I=ne.z,B=X.x,E=X.y,M=X.z,P=g/(w-B),z=m/(A-E),q=p/(I-M),U=(w-B)/g,V=(A-E)/m,Q=(I-M)/p,F=Math.sqrt(U*U+V*V+Q*Q)*.5,D=a.types,j=D.SPHERE,W=D.PLANE;D.BOX,D.COMPOUND,D.CONVEXPOLYHEDRON;for(var N=this.bins,H=this.binLengths,T=this.bins.length,R=0;R!==T;R++)H[R]=0;var C=Math.ceil,X=Math.min,ne=Math.max;function ie(xe,lt,nt,je,Ge,Ve,tt){var rt=(xe-B)*P|0,mt=(lt-E)*z|0,Qe=(nt-M)*q|0,Te=C((je-B)*P),G=C((Ge-E)*z),Re=C((Ve-M)*q);rt<0?rt=0:rt>=g&&(rt=g-1),mt<0?mt=0:mt>=m&&(mt=m-1),Qe<0?Qe=0:Qe>=p&&(Qe=p-1),Te<0?Te=0:Te>=g&&(Te=g-1),G<0?G=0:G>=m&&(G=m-1),Re<0?Re=0:Re>=p&&(Re=p-1),rt*=_,mt*=y,Qe*=x,Te*=_,G*=y,Re*=x;for(var Ne=rt;Ne<=Te;Ne+=_)for(var $e=mt;$e<=G;$e+=y)for(var Ye=Qe;Ye<=Re;Ye+=x){var vt=Ne+$e+Ye;N[vt][H[vt]++]=tt}}for(var R=0;R!==f;R++){var K=v[R],te=K.shape;switch(te.type){case j:var ue=K.position.x,Y=K.position.y,Pe=K.position.z,de=te.radius;ie(ue-de,Y-de,Pe-de,ue+de,Y+de,Pe+de,K);break;case W:te.worldNormalNeedsUpdate&&te.computeWorldNormal(K.quaternion);var se=te.worldNormal,oe=B+U*.5-K.position.x,qe=E+V*.5-K.position.y,Ae=M+Q*.5-K.position.z,L=u;L.set(oe,qe,Ae);for(var S=0,ee=0;S!==g;S++,ee+=_,L.y=qe,L.x+=U)for(var fe=0,he=0;fe!==m;fe++,he+=y,L.z=Ae,L.y+=V)for(var me=0,we=0;me!==p;me++,we+=x,L.z+=Q)if(L.dot(se)<F){var ye=ee+he+we;N[ye][H[ye]++]=K}break;default:K.aabbNeedsUpdate&&K.computeAABB(),ie(K.aabb.lowerBound.x,K.aabb.lowerBound.y,K.aabb.lowerBound.z,K.aabb.upperBound.x,K.aabb.upperBound.y,K.aabb.upperBound.z,K);break}}for(var R=0;R!==T;R++){var Ee=H[R];if(Ee>1)for(var He=N[R],S=0;S!==Ee;S++)for(var K=He[S],fe=0;fe!==S;fe++){var Ze=He[fe];this.needBroadphaseCollision(K,Ze)&&this.intersectionTest(K,Ze,c,d)}}this.makePairsUnique(c,d)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(t,n,i){n.exports=a;var r=t("./Broadphase"),o=t("./AABB");function a(){r.apply(this)}a.prototype=new r,a.prototype.constructor=a,a.prototype.collisionPairs=function(l,u,h){var c=l.bodies,d=c.length,f,v,g,m;for(f=0;f!==d;f++)for(v=0;v!==f;v++)g=c[f],m=c[v],this.needBroadphaseCollision(g,m)&&this.intersectionTest(g,m,u,h)},new o,a.prototype.aabbQuery=function(l,u,h){h=h||[];for(var c=0;c<l.bodies.length;c++){var d=l.bodies[c];d.aabbNeedsUpdate&&d.computeAABB(),d.aabb.overlaps(u)&&h.push(d)}return h}},{"./AABB":3,"./Broadphase":5}],8:[function(t,n,i){n.exports=r;function r(){this.matrix={}}r.prototype.get=function(o,a){if(o=o.id,a=a.id,a>o){var l=a;a=o,o=l}return o+"-"+a in this.matrix},r.prototype.set=function(o,a,l){if(o=o.id,a=a.id,a>o){var u=a;a=o,o=u}l?this.matrix[o+"-"+a]=!0:delete this.matrix[o+"-"+a]},r.prototype.reset=function(){this.matrix={}},r.prototype.setNumObjects=function(o){}},{}],9:[function(t,n,i){n.exports=c;var r=t("../math/Vec3"),o=t("../math/Quaternion"),a=t("../math/Transform");t("../shapes/ConvexPolyhedron"),t("../shapes/Box");var l=t("../collision/RaycastResult"),u=t("../shapes/Shape"),h=t("../collision/AABB");function c(T,R){this.from=T?T.clone():new r,this.to=R?R.clone():new r,this._direction=new r,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=c.ANY,this.result=new l,this.hasHit=!1,this.callback=function(C){}}c.prototype.constructor=c,c.CLOSEST=1,c.ANY=2,c.ALL=4;var d=new h,f=[];c.prototype.intersectWorld=function(T,R){return this.mode=R.mode||c.ANY,this.result=R.result||new l,this.skipBackfaces=!!R.skipBackfaces,this.collisionFilterMask=typeof R.collisionFilterMask<"u"?R.collisionFilterMask:-1,this.collisionFilterGroup=typeof R.collisionFilterGroup<"u"?R.collisionFilterGroup:-1,R.from&&this.from.copy(R.from),R.to&&this.to.copy(R.to),this.callback=R.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(d),f.length=0,T.broadphase.aabbQuery(T,d,f),this.intersectBodies(f),this.hasHit};var v=new r,g=new r;c.pointInTriangle=m;function m(T,R,C,X){X.vsub(R,W),C.vsub(R,v),T.vsub(R,g);var ne=W.dot(W),ie=W.dot(v),K=W.dot(g),te=v.dot(v),ue=v.dot(g),Y,Pe;return(Y=te*K-ie*ue)>=0&&(Pe=ne*ue-ie*K)>=0&&Y+Pe<ne*te-ie*ie}var p=new r,_=new o;c.prototype.intersectBody=function(T,R){R&&(this.result=R,this._updateDirection());var C=this.checkCollisionResponse;if(!(C&&!T.collisionResponse)&&!(!(this.collisionFilterGroup&T.collisionFilterMask)||!(T.collisionFilterGroup&this.collisionFilterMask)))for(var X=p,ne=_,ie=0,K=T.shapes.length;ie<K;ie++){var te=T.shapes[ie];if(!(C&&!te.collisionResponse)&&(T.quaternion.mult(T.shapeOrientations[ie],ne),T.quaternion.vmult(T.shapeOffsets[ie],X),X.vadd(T.position,X),this.intersectShape(te,ne,X,T),this.result._shouldStop))break}},c.prototype.intersectBodies=function(T,R){R&&(this.result=R,this._updateDirection());for(var C=0,X=T.length;!this.result._shouldStop&&C<X;C++)this.intersectBody(T[C])},c.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},c.prototype.intersectShape=function(T,R,C,X){var ne=this.from,ie=H(ne,this._direction,C);if(!(ie>T.boundingSphereRadius)){var K=this[T.type];K&&K.call(this,T,R,C,X)}},new r,new r;var y=new r,x=new r,w=new r,A=new r;new r,new l,c.prototype.intersectBox=function(T,R,C,X){return this.intersectConvex(T.convexPolyhedronRepresentation,R,C,X)},c.prototype[u.types.BOX]=c.prototype.intersectBox,c.prototype.intersectPlane=function(T,R,C,X){var ne=this.from,ie=this.to,K=this._direction,te=new r(0,0,1);R.vmult(te,te);var ue=new r;ne.vsub(C,ue);var Y=ue.dot(te);ie.vsub(C,ue);var Pe=ue.dot(te);if(!(Y*Pe>0)&&!(ne.distanceTo(ie)<Y)){var de=te.dot(K);if(!(Math.abs(de)<this.precision)){var se=new r,oe=new r,qe=new r;ne.vsub(C,se);var Ae=-te.dot(se)/de;K.scale(Ae,oe),ne.vadd(oe,qe),this.reportIntersection(te,qe,T,X,-1)}}},c.prototype[u.types.PLANE]=c.prototype.intersectPlane,c.prototype.getAABB=function(T){var R=this.to,C=this.from;T.lowerBound.x=Math.min(R.x,C.x),T.lowerBound.y=Math.min(R.y,C.y),T.lowerBound.z=Math.min(R.z,C.z),T.upperBound.x=Math.max(R.x,C.x),T.upperBound.y=Math.max(R.y,C.y),T.upperBound.z=Math.max(R.z,C.z)};var I={faceList:[0]};c.prototype.intersectHeightfield=function(T,R,C,X){T.data,T.elementSize;var ne=new r,ie=new c(this.from,this.to);a.pointToLocalFrame(C,R,ie.from,ie.from),a.pointToLocalFrame(C,R,ie.to,ie.to);var K=[],te=null,ue=null,Y=null,Pe=null,de=T.getIndexOfPosition(ie.from.x,ie.from.y,K,!1);if(de&&(te=K[0],ue=K[1],Y=K[0],Pe=K[1]),de=T.getIndexOfPosition(ie.to.x,ie.to.y,K,!1),de&&((te===null||K[0]<te)&&(te=K[0]),(Y===null||K[0]>Y)&&(Y=K[0]),(ue===null||K[1]<ue)&&(ue=K[1]),(Pe===null||K[1]>Pe)&&(Pe=K[1])),te!==null){var se=[];T.getRectMinMax(te,ue,Y,Pe,se),se[0],se[1];for(var oe=te;oe<=Y;oe++)for(var qe=ue;qe<=Pe;qe++){if(this.result._shouldStop||(T.getConvexTrianglePillar(oe,qe,!1),a.pointToWorldFrame(C,R,T.pillarOffset,ne),this.intersectConvex(T.pillarConvex,R,ne,X,I),this.result._shouldStop))return;T.getConvexTrianglePillar(oe,qe,!0),a.pointToWorldFrame(C,R,T.pillarOffset,ne),this.intersectConvex(T.pillarConvex,R,ne,X,I)}}},c.prototype[u.types.HEIGHTFIELD]=c.prototype.intersectHeightfield;var B=new r,E=new r;c.prototype.intersectSphere=function(T,R,C,X){var ne=this.from,ie=this.to,K=T.radius,te=Math.pow(ie.x-ne.x,2)+Math.pow(ie.y-ne.y,2)+Math.pow(ie.z-ne.z,2),ue=2*((ie.x-ne.x)*(ne.x-C.x)+(ie.y-ne.y)*(ne.y-C.y)+(ie.z-ne.z)*(ne.z-C.z)),Y=Math.pow(ne.x-C.x,2)+Math.pow(ne.y-C.y,2)+Math.pow(ne.z-C.z,2)-Math.pow(K,2),Pe=Math.pow(ue,2)-4*te*Y,de=B,se=E;if(!(Pe<0))if(Pe===0)ne.lerp(ie,Pe,de),de.vsub(C,se),se.normalize(),this.reportIntersection(se,de,T,X,-1);else{var oe=(-ue-Math.sqrt(Pe))/(2*te),qe=(-ue+Math.sqrt(Pe))/(2*te);if(oe>=0&&oe<=1&&(ne.lerp(ie,oe,de),de.vsub(C,se),se.normalize(),this.reportIntersection(se,de,T,X,-1)),this.result._shouldStop)return;qe>=0&&qe<=1&&(ne.lerp(ie,qe,de),de.vsub(C,se),se.normalize(),this.reportIntersection(se,de,T,X,-1))}},c.prototype[u.types.SPHERE]=c.prototype.intersectSphere;var M=new r;new r,new r;var P=new r;c.prototype.intersectConvex=function(R,C,X,ne,ie){for(var K=M,te=P,ue=ie&&ie.faceList||null,Y=R.faces,Pe=R.vertices,de=R.faceNormals,se=this._direction,oe=this.from,qe=this.to,Ae=oe.distanceTo(qe),L=ue?ue.length:Y.length,S=this.result,ee=0;!S._shouldStop&&ee<L;ee++){var fe=ue?ue[ee]:ee,he=Y[fe],me=de[fe],we=C,ye=X;te.copy(Pe[he[0]]),we.vmult(te,te),te.vadd(ye,te),te.vsub(oe,te),we.vmult(me,K);var Ee=se.dot(K);if(!(Math.abs(Ee)<this.precision)){var He=K.dot(te)/Ee;if(!(He<0)){se.mult(He,y),y.vadd(oe,y),x.copy(Pe[he[0]]),we.vmult(x,x),ye.vadd(x,x);for(var Ze=1;!S._shouldStop&&Ze<he.length-1;Ze++){w.copy(Pe[he[Ze]]),A.copy(Pe[he[Ze+1]]),we.vmult(w,w),we.vmult(A,A),ye.vadd(w,w),ye.vadd(A,A);var xe=y.distanceTo(oe);!(m(y,x,w,A)||m(y,w,x,A))||xe>Ae||this.reportIntersection(K,y,R,ne,fe)}}}}},c.prototype[u.types.CONVEXPOLYHEDRON]=c.prototype.intersectConvex;var z=new r,q=new r,U=new r,V=new r,Q=new r,F=new r;new h;var D=[],j=new a;c.prototype.intersectTrimesh=function(R,C,X,ne,ie){var K=z,te=D,ue=j,Y=P,Pe=q,de=U,se=V,oe=F,qe=Q;ie&&ie.faceList;var Ae=R.indices;R.vertices,R.faceNormals;var L=this.from,S=this.to,ee=this._direction;ue.position.copy(X),ue.quaternion.copy(C),a.vectorToLocalFrame(X,C,ee,Pe),a.pointToLocalFrame(X,C,L,de),a.pointToLocalFrame(X,C,S,se);var fe=de.distanceSquared(se);R.tree.rayQuery(this,ue,te);for(var he=0,me=te.length;!this.result._shouldStop&&he!==me;he++){var we=te[he];R.getNormal(we,K),R.getVertex(Ae[we*3],x),x.vsub(de,Y);var ye=Pe.dot(K),Ee=K.dot(Y)/ye;if(!(Ee<0)){Pe.scale(Ee,y),y.vadd(de,y),R.getVertex(Ae[we*3+1],w),R.getVertex(Ae[we*3+2],A);var He=y.distanceSquared(de);!(m(y,w,x,A)||m(y,x,w,A))||He>fe||(a.vectorToWorldFrame(C,K,qe),a.pointToWorldFrame(X,C,y,oe),this.reportIntersection(qe,oe,R,ne,we))}}te.length=0},c.prototype[u.types.TRIMESH]=c.prototype.intersectTrimesh,c.prototype.reportIntersection=function(T,R,C,X,ne){var ie=this.from,K=this.to,te=ie.distanceTo(R),ue=this.result;if(!(this.skipBackfaces&&T.dot(this._direction)>0))switch(ue.hitFaceIndex=typeof ne<"u"?ne:-1,this.mode){case c.ALL:this.hasHit=!0,ue.set(ie,K,T,R,C,X,te),ue.hasHit=!0,this.callback(ue);break;case c.CLOSEST:(te<ue.distance||!ue.hasHit)&&(this.hasHit=!0,ue.hasHit=!0,ue.set(ie,K,T,R,C,X,te));break;case c.ANY:this.hasHit=!0,ue.hasHit=!0,ue.set(ie,K,T,R,C,X,te),ue._shouldStop=!0;break}};var W=new r,N=new r;function H(T,R,C){C.vsub(T,W);var X=W.dot(R);R.mult(X,N),N.vadd(T,N);var ne=C.distanceTo(N);return ne}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(t,n,i){var r=t("../math/Vec3");n.exports=o;function o(){this.rayFromWorld=new r,this.rayToWorld=new r,this.hitNormalWorld=new r,this.hitPointWorld=new r,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}o.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},o.prototype.abort=function(){this._shouldStop=!0},o.prototype.set=function(a,l,u,h,c,d,f){this.rayFromWorld.copy(a),this.rayToWorld.copy(l),this.hitNormalWorld.copy(u),this.hitPointWorld.copy(h),this.shape=c,this.body=d,this.distance=f}},{"../math/Vec3":30}],11:[function(t,n,i){t("../shapes/Shape");var r=t("../collision/Broadphase");n.exports=o;function o(a){r.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var l=this.axisList;this._addBodyHandler=function(u){l.push(u.body)},this._removeBodyHandler=function(u){var h=l.indexOf(u.body);h!==-1&&l.splice(h,1)},a&&this.setWorld(a)}o.prototype=new r,o.prototype.setWorld=function(a){this.axisList.length=0;for(var l=0;l<a.bodies.length;l++)this.axisList.push(a.bodies[l]);a.removeEventListener("addBody",this._addBodyHandler),a.removeEventListener("removeBody",this._removeBodyHandler),a.addEventListener("addBody",this._addBodyHandler),a.addEventListener("removeBody",this._removeBodyHandler),this.world=a,this.dirty=!0},o.insertionSortX=function(a){for(var l=1,u=a.length;l<u;l++){for(var h=a[l],c=l-1;c>=0&&!(a[c].aabb.lowerBound.x<=h.aabb.lowerBound.x);c--)a[c+1]=a[c];a[c+1]=h}return a},o.insertionSortY=function(a){for(var l=1,u=a.length;l<u;l++){for(var h=a[l],c=l-1;c>=0&&!(a[c].aabb.lowerBound.y<=h.aabb.lowerBound.y);c--)a[c+1]=a[c];a[c+1]=h}return a},o.insertionSortZ=function(a){for(var l=1,u=a.length;l<u;l++){for(var h=a[l],c=l-1;c>=0&&!(a[c].aabb.lowerBound.z<=h.aabb.lowerBound.z);c--)a[c+1]=a[c];a[c+1]=h}return a},o.prototype.collisionPairs=function(a,l,u){var h=this.axisList,c=h.length,d=this.axisIndex,f,v;for(this.dirty&&(this.sortList(),this.dirty=!1),f=0;f!==c;f++){var g=h[f];for(v=f+1;v<c;v++){var m=h[v];if(this.needBroadphaseCollision(g,m)){if(!o.checkBounds(g,m,d))break;this.intersectionTest(g,m,l,u)}}}},o.prototype.sortList=function(){for(var a=this.axisList,l=this.axisIndex,u=a.length,h=0;h!==u;h++){var c=a[h];c.aabbNeedsUpdate&&c.computeAABB()}l===0?o.insertionSortX(a):l===1?o.insertionSortY(a):l===2&&o.insertionSortZ(a)},o.checkBounds=function(a,l,u){var h,c;u===0?(h=a.position.x,c=l.position.x):u===1?(h=a.position.y,c=l.position.y):u===2&&(h=a.position.z,c=l.position.z);var d=a.boundingRadius,f=l.boundingRadius,v=h+d,g=c-f;return g<v},o.prototype.autoDetectAxis=function(){for(var a=0,l=0,u=0,h=0,c=0,d=0,f=this.axisList,v=f.length,g=1/v,m=0;m!==v;m++){var p=f[m],_=p.position.x;a+=_,l+=_*_;var y=p.position.y;u+=y,h+=y*y;var x=p.position.z;c+=x,d+=x*x}var w=l-a*a*g,A=h-u*u*g,I=d-c*c*g;w>A?w>I?this.axisIndex=0:this.axisIndex=2:A>I?this.axisIndex=1:this.axisIndex=2},o.prototype.aabbQuery=function(a,l,u){u=u||[],this.dirty&&(this.sortList(),this.dirty=!1);var h=this.axisIndex,c="x";h===1&&(c="y"),h===2&&(c="z");var d=this.axisList;l.lowerBound[c],l.upperBound[c];for(var f=0;f<d.length;f++){var v=d[f];v.aabbNeedsUpdate&&v.computeAABB(),v.aabb.overlaps(l)&&u.push(v)}return u}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(t,n,i){n.exports=u,t("./Constraint");var r=t("./PointToPointConstraint"),o=t("../equations/ConeEquation"),a=t("../equations/RotationalEquation");t("../equations/ContactEquation");var l=t("../math/Vec3");function u(h,c,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6,v=d.pivotA?d.pivotA.clone():new l,g=d.pivotB?d.pivotB.clone():new l;this.axisA=d.axisA?d.axisA.clone():new l,this.axisB=d.axisB?d.axisB.clone():new l,r.call(this,h,v,c,g,f),this.collideConnected=!!d.collideConnected,this.angle=typeof d.angle<"u"?d.angle:0;var m=this.coneEquation=new o(h,c,d),p=this.twistEquation=new a(h,c,d);this.twistAngle=typeof d.twistAngle<"u"?d.twistAngle:0,m.maxForce=0,m.minForce=-f,p.maxForce=0,p.minForce=-f,this.equations.push(m,p)}u.prototype=new r,u.constructor=u,new l,new l,u.prototype.update=function(){var h=this.bodyA,c=this.bodyB,d=this.coneEquation,f=this.twistEquation;r.prototype.update.call(this),h.vectorToWorldFrame(this.axisA,d.axisA),c.vectorToWorldFrame(this.axisB,d.axisB),this.axisA.tangents(f.axisA,f.axisA),h.vectorToWorldFrame(f.axisA,f.axisA),this.axisB.tangents(f.axisB,f.axisB),c.vectorToWorldFrame(f.axisB,f.axisB),d.angle=this.angle,f.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(t,n,i){n.exports=o;var r=t("../utils/Utils");function o(a,l,u){u=r.defaults(u,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=a,this.bodyB=l,this.id=o.idCounter++,this.collideConnected=u.collideConnected,u.wakeUpBodies&&(a&&a.wakeUp(),l&&l.wakeUp())}o.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},o.prototype.enable=function(){for(var a=this.equations,l=0;l<a.length;l++)a[l].enabled=!0},o.prototype.disable=function(){for(var a=this.equations,l=0;l<a.length;l++)a[l].enabled=!1},o.idCounter=0},{"../utils/Utils":53}],14:[function(t,n,i){n.exports=a;var r=t("./Constraint"),o=t("../equations/ContactEquation");function a(l,u,h,c){r.call(this,l,u),typeof h>"u"&&(h=l.position.distanceTo(u.position)),typeof c>"u"&&(c=1e6),this.distance=h;var d=this.distanceEquation=new o(l,u);this.equations.push(d),d.minForce=-c,d.maxForce=c}a.prototype=new r,a.prototype.update=function(){var l=this.bodyA,u=this.bodyB,h=this.distanceEquation,c=this.distance*.5,d=h.ni;u.position.vsub(l.position,d),d.normalize(),d.mult(c,h.ri),d.mult(-c,h.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(t,n,i){n.exports=u,t("./Constraint");var r=t("./PointToPointConstraint"),o=t("../equations/RotationalEquation"),a=t("../equations/RotationalMotorEquation");t("../equations/ContactEquation");var l=t("../math/Vec3");function u(d,f,v){v=v||{};var g=typeof v.maxForce<"u"?v.maxForce:1e6,m=v.pivotA?v.pivotA.clone():new l,p=v.pivotB?v.pivotB.clone():new l;r.call(this,d,m,f,p,g);var _=this.axisA=v.axisA?v.axisA.clone():new l(1,0,0);_.normalize();var y=this.axisB=v.axisB?v.axisB.clone():new l(1,0,0);y.normalize();var x=this.rotationalEquation1=new o(d,f,v),w=this.rotationalEquation2=new o(d,f,v),A=this.motorEquation=new a(d,f,g);A.enabled=!1,this.equations.push(x,w,A)}u.prototype=new r,u.constructor=u,u.prototype.enableMotor=function(){this.motorEquation.enabled=!0},u.prototype.disableMotor=function(){this.motorEquation.enabled=!1},u.prototype.setMotorSpeed=function(d){this.motorEquation.targetVelocity=d},u.prototype.setMotorMaxForce=function(d){this.motorEquation.maxForce=d,this.motorEquation.minForce=-d};var h=new l,c=new l;u.prototype.update=function(){var d=this.bodyA,f=this.bodyB,v=this.motorEquation,g=this.rotationalEquation1,m=this.rotationalEquation2,p=h,_=c,y=this.axisA,x=this.axisB;r.prototype.update.call(this),d.quaternion.vmult(y,p),f.quaternion.vmult(x,_),p.tangents(g.axisA,m.axisA),g.axisB.copy(_),m.axisB.copy(_),this.motorEquation.enabled&&(d.quaternion.vmult(this.axisA,v.axisA),f.quaternion.vmult(this.axisB,v.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(t,n,i){n.exports=l,t("./Constraint");var r=t("./PointToPointConstraint"),o=t("../equations/RotationalEquation");t("../equations/RotationalMotorEquation"),t("../equations/ContactEquation");var a=t("../math/Vec3");function l(u,h,c){c=c||{};var d=typeof c.maxForce<"u"?c.maxForce:1e6,f=new a,v=new a,g=new a;u.position.vadd(h.position,g),g.scale(.5,g),h.pointToLocalFrame(g,v),u.pointToLocalFrame(g,f),r.call(this,u,f,h,v,d);var m=this.rotationalEquation1=new o(u,h,c),p=this.rotationalEquation2=new o(u,h,c),_=this.rotationalEquation3=new o(u,h,c);this.equations.push(m,p,_)}l.prototype=new r,l.constructor=l,new a,new a,l.prototype.update=function(){var u=this.bodyA,h=this.bodyB;this.motorEquation;var c=this.rotationalEquation1,d=this.rotationalEquation2,f=this.rotationalEquation3;r.prototype.update.call(this),u.vectorToWorldFrame(a.UNIT_X,c.axisA),h.vectorToWorldFrame(a.UNIT_Y,c.axisB),u.vectorToWorldFrame(a.UNIT_Y,d.axisA),h.vectorToWorldFrame(a.UNIT_Z,d.axisB),u.vectorToWorldFrame(a.UNIT_Z,f.axisA),h.vectorToWorldFrame(a.UNIT_X,f.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(t,n,i){n.exports=l;var r=t("./Constraint"),o=t("../equations/ContactEquation"),a=t("../math/Vec3");function l(u,h,c,d,f){r.call(this,u,c),f=typeof f<"u"?f:1e6,this.pivotA=h?h.clone():new a,this.pivotB=d?d.clone():new a;var v=this.equationX=new o(u,c),g=this.equationY=new o(u,c),m=this.equationZ=new o(u,c);this.equations.push(v,g,m),v.minForce=g.minForce=m.minForce=-f,v.maxForce=g.maxForce=m.maxForce=f,v.ni.set(1,0,0),g.ni.set(0,1,0),m.ni.set(0,0,1)}l.prototype=new r,l.prototype.update=function(){var u=this.bodyA,h=this.bodyB,c=this.equationX,d=this.equationY,f=this.equationZ;u.quaternion.vmult(this.pivotA,c.ri),h.quaternion.vmult(this.pivotB,c.rj),d.ri.copy(c.ri),d.rj.copy(c.rj),f.ri.copy(c.ri),f.rj.copy(c.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(t,n,i){n.exports=a;var r=t("../math/Vec3");t("../math/Mat3");var o=t("./Equation");function a(h,c,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6;o.call(this,h,c,-f,f),this.axisA=d.axisA?d.axisA.clone():new r(1,0,0),this.axisB=d.axisB?d.axisB.clone():new r(0,1,0),this.angle=typeof d.angle<"u"?d.angle:0}a.prototype=new o,a.prototype.constructor=a;var l=new r,u=new r;a.prototype.computeB=function(h){var c=this.a,d=this.b,f=this.axisA,v=this.axisB,g=l,m=u,p=this.jacobianElementA,_=this.jacobianElementB;f.cross(v,g),v.cross(f,m),p.rotational.copy(m),_.rotational.copy(g);var y=Math.cos(this.angle)-f.dot(v),x=this.computeGW(),w=this.computeGiMf(),A=-y*c-x*d-h*w;return A}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(t,n,i){n.exports=a;var r=t("./Equation"),o=t("../math/Vec3");t("../math/Mat3");function a(m,p,_){_=typeof _<"u"?_:1e6,r.call(this,m,p,0,_),this.restitution=0,this.ri=new o,this.rj=new o,this.ni=new o}a.prototype=new r,a.prototype.constructor=a;var l=new o,u=new o,h=new o;a.prototype.computeB=function(m){var p=this.a,_=this.b,y=this.bi,x=this.bj,w=this.ri,A=this.rj,I=l,B=u,E=y.velocity,M=y.angularVelocity;y.force,y.torque;var P=x.velocity,z=x.angularVelocity;x.force,x.torque;var q=h,U=this.jacobianElementA,V=this.jacobianElementB,Q=this.ni;w.cross(Q,I),A.cross(Q,B),Q.negate(U.spatial),I.negate(U.rotational),V.spatial.copy(Q),V.rotational.copy(B),q.copy(x.position),q.vadd(A,q),q.vsub(y.position,q),q.vsub(w,q);var F=Q.dot(q),D=this.restitution+1,j=D*P.dot(Q)-D*E.dot(Q)+z.dot(B)-M.dot(I),W=this.computeGiMf(),N=-F*p-j*_-m*W;return N};var c=new o,d=new o,f=new o,v=new o,g=new o;a.prototype.getImpactVelocityAlongNormal=function(){var m=c,p=d,_=f,y=v,x=g;return this.bi.position.vadd(this.ri,_),this.bj.position.vadd(this.rj,y),this.bi.getVelocityAtWorldPoint(_,m),this.bj.getVelocityAtWorldPoint(y,p),m.vsub(p,x),this.ni.dot(x)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(t,n,i){n.exports=a;var r=t("../math/JacobianElement"),o=t("../math/Vec3");function a(g,m,p,_){this.id=a.id++,this.minForce=typeof p>"u"?-1e6:p,this.maxForce=typeof _>"u"?1e6:_,this.bi=g,this.bj=m,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new r,this.jacobianElementB=new r,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}a.prototype.constructor=a,a.id=0,a.prototype.setSpookParams=function(g,m,p){var _=m,y=g,x=p;this.a=4/(x*(1+4*_)),this.b=4*_/(1+4*_),this.eps=4/(x*x*y*(1+4*_))},a.prototype.computeB=function(g,m,p){var _=this.computeGW(),y=this.computeGq(),x=this.computeGiMf();return-y*g-_*m-x*p},a.prototype.computeGq=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,y=p.position,x=_.position;return g.spatial.dot(y)+m.spatial.dot(x)};var l=new o;a.prototype.computeGW=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,y=p.velocity,x=_.velocity,w=p.angularVelocity||l,A=_.angularVelocity||l;return g.multiplyVectors(y,w)+m.multiplyVectors(x,A)},a.prototype.computeGWlambda=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,y=p.vlambda,x=_.vlambda,w=p.wlambda||l,A=_.wlambda||l;return g.multiplyVectors(y,w)+m.multiplyVectors(x,A)};var u=new o,h=new o,c=new o,d=new o;a.prototype.computeGiMf=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,y=p.force,x=p.torque,w=_.force,A=_.torque,I=p.invMassSolve,B=_.invMassSolve;return p.invInertiaWorldSolve?p.invInertiaWorldSolve.vmult(x,c):c.set(0,0,0),_.invInertiaWorldSolve?_.invInertiaWorldSolve.vmult(A,d):d.set(0,0,0),y.mult(I,u),w.mult(B,h),g.multiplyVectors(u,c)+m.multiplyVectors(h,d)};var f=new o;a.prototype.computeGiMGt=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,y=p.invMassSolve,x=_.invMassSolve,w=p.invInertiaWorldSolve,A=_.invInertiaWorldSolve,I=y+x;return w&&(w.vmult(g.rotational,f),I+=f.dot(g.rotational)),A&&(A.vmult(m.rotational,f),I+=f.dot(m.rotational)),I};var v=new o;new o,new o,new o,new o,new o,a.prototype.addToWlambda=function(g){var m=this.jacobianElementA,p=this.jacobianElementB,_=this.bi,y=this.bj,x=v;m.spatial.mult(_.invMassSolve*g,x),_.vlambda.vadd(x,_.vlambda),p.spatial.mult(y.invMassSolve*g,x),y.vlambda.vadd(x,y.vlambda),_.invInertiaWorldSolve&&(_.invInertiaWorldSolve.vmult(m.rotational,x),x.mult(g,x),_.wlambda.vadd(x,_.wlambda)),y.invInertiaWorldSolve&&(y.invInertiaWorldSolve.vmult(p.rotational,x),x.mult(g,x),y.wlambda.vadd(x,y.wlambda))},a.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(t,n,i){n.exports=a;var r=t("./Equation"),o=t("../math/Vec3");t("../math/Mat3");function a(h,c,d){r.call(this,h,c,-d,d),this.ri=new o,this.rj=new o,this.t=new o}a.prototype=new r,a.prototype.constructor=a;var l=new o,u=new o;a.prototype.computeB=function(h){this.a;var c=this.b;this.bi,this.bj;var d=this.ri,f=this.rj,v=l,g=u,m=this.t;d.cross(m,v),f.cross(m,g);var p=this.jacobianElementA,_=this.jacobianElementB;m.negate(p.spatial),v.negate(p.rotational),_.spatial.copy(m),_.rotational.copy(g);var y=this.computeGW(),x=this.computeGiMf(),w=-y*c-h*x;return w}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(t,n,i){n.exports=a;var r=t("../math/Vec3");t("../math/Mat3");var o=t("./Equation");function a(h,c,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6;o.call(this,h,c,-f,f),this.axisA=d.axisA?d.axisA.clone():new r(1,0,0),this.axisB=d.axisB?d.axisB.clone():new r(0,1,0),this.maxAngle=Math.PI/2}a.prototype=new o,a.prototype.constructor=a;var l=new r,u=new r;a.prototype.computeB=function(h){var c=this.a,d=this.b,f=this.axisA,v=this.axisB,g=l,m=u,p=this.jacobianElementA,_=this.jacobianElementB;f.cross(v,g),v.cross(f,m),p.rotational.copy(m),_.rotational.copy(g);var y=Math.cos(this.maxAngle)-f.dot(v),x=this.computeGW(),w=this.computeGiMf(),A=-y*c-x*d-h*w;return A}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(t,n,i){n.exports=a;var r=t("../math/Vec3");t("../math/Mat3");var o=t("./Equation");function a(l,u,h){h=typeof h<"u"?h:1e6,o.call(this,l,u,-h,h),this.axisA=new r,this.axisB=new r,this.targetVelocity=0}a.prototype=new o,a.prototype.constructor=a,a.prototype.computeB=function(l){this.a;var u=this.b;this.bi,this.bj;var h=this.axisA,c=this.axisB,d=this.jacobianElementA,f=this.jacobianElementB;d.rotational.copy(h),c.negate(f.rotational);var v=this.computeGW()-this.targetVelocity,g=this.computeGiMf(),m=-v*u-l*g;return m}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(t,n,i){var r=t("../utils/Utils");n.exports=o;function o(a,l,u){u=r.defaults(u,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=o.idCounter++,this.materials=[a,l],this.friction=u.friction,this.restitution=u.restitution,this.contactEquationStiffness=u.contactEquationStiffness,this.contactEquationRelaxation=u.contactEquationRelaxation,this.frictionEquationStiffness=u.frictionEquationStiffness,this.frictionEquationRelaxation=u.frictionEquationRelaxation}o.idCounter=0},{"../utils/Utils":53}],25:[function(t,n,i){n.exports=r;function r(o){var a="";o=o||{},typeof o=="string"?(a=o,o={}):typeof o=="object"&&(a=""),this.name=a,this.id=r.idCounter++,this.friction=typeof o.friction<"u"?o.friction:-1,this.restitution=typeof o.restitution<"u"?o.restitution:-1}r.idCounter=0},{}],26:[function(t,n,i){n.exports=o;var r=t("./Vec3");function o(){this.spatial=new r,this.rotational=new r}o.prototype.multiplyElement=function(a){return a.spatial.dot(this.spatial)+a.rotational.dot(this.rotational)},o.prototype.multiplyVectors=function(a,l){return a.dot(this.spatial)+l.dot(this.rotational)}},{"./Vec3":30}],27:[function(t,n,i){n.exports=o;var r=t("./Vec3");function o(a){a?this.elements=a:this.elements=[0,0,0,0,0,0,0,0,0]}o.prototype.identity=function(){var a=this.elements;a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=1,a[5]=0,a[6]=0,a[7]=0,a[8]=1},o.prototype.setZero=function(){var a=this.elements;a[0]=0,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=0,a[6]=0,a[7]=0,a[8]=0},o.prototype.setTrace=function(a){var l=this.elements;l[0]=a.x,l[4]=a.y,l[8]=a.z},o.prototype.getTrace=function(l){var l=l||new r,u=this.elements;l.x=u[0],l.y=u[4],l.z=u[8]},o.prototype.vmult=function(a,l){l=l||new r;var u=this.elements,h=a.x,c=a.y,d=a.z;return l.x=u[0]*h+u[1]*c+u[2]*d,l.y=u[3]*h+u[4]*c+u[5]*d,l.z=u[6]*h+u[7]*c+u[8]*d,l},o.prototype.smult=function(a){for(var l=0;l<this.elements.length;l++)this.elements[l]*=a},o.prototype.mmult=function(a,l){for(var u=l||new o,h=0;h<3;h++)for(var c=0;c<3;c++){for(var d=0,f=0;f<3;f++)d+=a.elements[h+f*3]*this.elements[f+c*3];u.elements[h+c*3]=d}return u},o.prototype.scale=function(a,l){l=l||new o;for(var u=this.elements,h=l.elements,c=0;c!==3;c++)h[3*c+0]=a.x*u[3*c+0],h[3*c+1]=a.y*u[3*c+1],h[3*c+2]=a.z*u[3*c+2];return l},o.prototype.solve=function(a,l){l=l||new r;for(var u=3,h=4,c=[],d=0;d<u*h;d++)c.push(0);var d,f;for(d=0;d<3;d++)for(f=0;f<3;f++)c[d+h*f]=this.elements[d+3*f];c[3+4*0]=a.x,c[3+4*1]=a.y,c[3+4*2]=a.z;var v=3,g=v,m,p=4,_;do{if(d=g-v,c[d+h*d]===0){for(f=d+1;f<g;f++)if(c[d+h*f]!==0){m=p;do _=p-m,c[_+h*d]+=c[_+h*f];while(--m);break}}if(c[d+h*d]!==0)for(f=d+1;f<g;f++){var y=c[d+h*f]/c[d+h*d];m=p;do _=p-m,c[_+h*f]=_<=d?0:c[_+h*f]-c[_+h*d]*y;while(--m)}}while(--v);if(l.z=c[2*h+3]/c[2*h+2],l.y=(c[1*h+3]-c[1*h+2]*l.z)/c[1*h+1],l.x=(c[0*h+3]-c[0*h+2]*l.z-c[0*h+1]*l.y)/c[0*h+0],isNaN(l.x)||isNaN(l.y)||isNaN(l.z)||l.x===1/0||l.y===1/0||l.z===1/0)throw"Could not solve equation! Got x=["+l.toString()+"], b=["+a.toString()+"], A=["+this.toString()+"]";return l},o.prototype.e=function(a,l,u){if(u===void 0)return this.elements[l+3*a];this.elements[l+3*a]=u},o.prototype.copy=function(a){for(var l=0;l<a.elements.length;l++)this.elements[l]=a.elements[l];return this},o.prototype.toString=function(){for(var a="",l=",",u=0;u<9;u++)a+=this.elements[u]+l;return a},o.prototype.reverse=function(a){a=a||new o;for(var l=3,u=6,h=[],c=0;c<l*u;c++)h.push(0);var c,d;for(c=0;c<3;c++)for(d=0;d<3;d++)h[c+u*d]=this.elements[c+3*d];h[3+6*0]=1,h[3+6*1]=0,h[3+6*2]=0,h[4+6*0]=0,h[4+6*1]=1,h[4+6*2]=0,h[5+6*0]=0,h[5+6*1]=0,h[5+6*2]=1;var f=3,v=f,g,m=u,p;do{if(c=v-f,h[c+u*c]===0){for(d=c+1;d<v;d++)if(h[c+u*d]!==0){g=m;do p=m-g,h[p+u*c]+=h[p+u*d];while(--g);break}}if(h[c+u*c]!==0)for(d=c+1;d<v;d++){var _=h[c+u*d]/h[c+u*c];g=m;do p=m-g,h[p+u*d]=p<=c?0:h[p+u*d]-h[p+u*c]*_;while(--g)}}while(--f);c=2;do{d=c-1;do{var _=h[c+u*d]/h[c+u*c];g=u;do p=u-g,h[p+u*d]=h[p+u*d]-h[p+u*c]*_;while(--g)}while(d--)}while(--c);c=2;do{var _=1/h[c+u*c];g=u;do p=u-g,h[p+u*c]=h[p+u*c]*_;while(--g)}while(c--);c=2;do{d=2;do{if(p=h[l+d+u*c],isNaN(p)||p===1/0)throw"Could not reverse! A=["+this.toString()+"]";a.e(c,d,p)}while(d--)}while(c--);return a},o.prototype.setRotationFromQuaternion=function(a){var l=a.x,u=a.y,h=a.z,c=a.w,d=l+l,f=u+u,v=h+h,g=l*d,m=l*f,p=l*v,_=u*f,y=u*v,x=h*v,w=c*d,A=c*f,I=c*v,B=this.elements;return B[3*0+0]=1-(_+x),B[3*0+1]=m-I,B[3*0+2]=p+A,B[3*1+0]=m+I,B[3*1+1]=1-(g+x),B[3*1+2]=y-w,B[3*2+0]=p-A,B[3*2+1]=y+w,B[3*2+2]=1-(g+_),this},o.prototype.transpose=function(a){a=a||new o;for(var l=a.elements,u=this.elements,h=0;h!==3;h++)for(var c=0;c!==3;c++)l[3*h+c]=u[3*c+h];return a}},{"./Vec3":30}],28:[function(t,n,i){n.exports=o;var r=t("./Vec3");function o(d,f,v,g){this.x=d!==void 0?d:0,this.y=f!==void 0?f:0,this.z=v!==void 0?v:0,this.w=g!==void 0?g:1}o.prototype.set=function(d,f,v,g){this.x=d,this.y=f,this.z=v,this.w=g},o.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},o.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},o.prototype.setFromAxisAngle=function(d,f){var v=Math.sin(f*.5);this.x=d.x*v,this.y=d.y*v,this.z=d.z*v,this.w=Math.cos(f*.5)},o.prototype.toAxisAngle=function(d){d=d||new r,this.normalize();var f=2*Math.acos(this.w),v=Math.sqrt(1-this.w*this.w);return v<.001?(d.x=this.x,d.y=this.y,d.z=this.z):(d.x=this.x/v,d.y=this.y/v,d.z=this.z/v),[d,f]};var a=new r,l=new r;o.prototype.setFromVectors=function(d,f){if(d.isAntiparallelTo(f)){var v=a,g=l;d.tangents(v,g),this.setFromAxisAngle(v,Math.PI)}else{var m=d.cross(f);this.x=m.x,this.y=m.y,this.z=m.z,this.w=Math.sqrt(Math.pow(d.norm(),2)*Math.pow(f.norm(),2))+d.dot(f),this.normalize()}};var u=new r,h=new r,c=new r;o.prototype.mult=function(d,f){f=f||new o;var v=this.w,g=u,m=h,p=c;return g.set(this.x,this.y,this.z),m.set(d.x,d.y,d.z),f.w=v*d.w-g.dot(m),g.cross(m,p),f.x=v*m.x+d.w*g.x+p.x,f.y=v*m.y+d.w*g.y+p.y,f.z=v*m.z+d.w*g.z+p.z,f},o.prototype.inverse=function(d){var f=this.x,v=this.y,g=this.z,m=this.w;d=d||new o,this.conjugate(d);var p=1/(f*f+v*v+g*g+m*m);return d.x*=p,d.y*=p,d.z*=p,d.w*=p,d},o.prototype.conjugate=function(d){return d=d||new o,d.x=-this.x,d.y=-this.y,d.z=-this.z,d.w=this.w,d},o.prototype.normalize=function(){var d=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(d=1/d,this.x*=d,this.y*=d,this.z*=d,this.w*=d)},o.prototype.normalizeFast=function(){var d=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=d,this.y*=d,this.z*=d,this.w*=d)},o.prototype.vmult=function(d,f){f=f||new r;var v=d.x,g=d.y,m=d.z,p=this.x,_=this.y,y=this.z,x=this.w,w=x*v+_*m-y*g,A=x*g+y*v-p*m,I=x*m+p*g-_*v,B=-p*v-_*g-y*m;return f.x=w*x+B*-p+A*-y-I*-_,f.y=A*x+B*-_+I*-p-w*-y,f.z=I*x+B*-y+w*-_-A*-p,f},o.prototype.copy=function(d){return this.x=d.x,this.y=d.y,this.z=d.z,this.w=d.w,this},o.prototype.toEuler=function(d,f){f=f||"YZX";var v,g,m,p=this.x,_=this.y,y=this.z,x=this.w;switch(f){case"YZX":var w=p*_+y*x;if(w>.499&&(v=2*Math.atan2(p,x),g=Math.PI/2,m=0),w<-.499&&(v=-2*Math.atan2(p,x),g=-Math.PI/2,m=0),isNaN(v)){var A=p*p,I=_*_,B=y*y;v=Math.atan2(2*_*x-2*p*y,1-2*I-2*B),g=Math.asin(2*w),m=Math.atan2(2*p*x-2*_*y,1-2*A-2*B)}break;default:throw new Error("Euler order "+f+" not supported yet.")}d.y=v,d.z=g,d.x=m},o.prototype.setFromEuler=function(d,f,v,g){g=g||"XYZ";var m=Math.cos(d/2),p=Math.cos(f/2),_=Math.cos(v/2),y=Math.sin(d/2),x=Math.sin(f/2),w=Math.sin(v/2);return g==="XYZ"?(this.x=y*p*_+m*x*w,this.y=m*x*_-y*p*w,this.z=m*p*w+y*x*_,this.w=m*p*_-y*x*w):g==="YXZ"?(this.x=y*p*_+m*x*w,this.y=m*x*_-y*p*w,this.z=m*p*w-y*x*_,this.w=m*p*_+y*x*w):g==="ZXY"?(this.x=y*p*_-m*x*w,this.y=m*x*_+y*p*w,this.z=m*p*w+y*x*_,this.w=m*p*_-y*x*w):g==="ZYX"?(this.x=y*p*_-m*x*w,this.y=m*x*_+y*p*w,this.z=m*p*w-y*x*_,this.w=m*p*_+y*x*w):g==="YZX"?(this.x=y*p*_+m*x*w,this.y=m*x*_+y*p*w,this.z=m*p*w-y*x*_,this.w=m*p*_-y*x*w):g==="XZY"&&(this.x=y*p*_-m*x*w,this.y=m*x*_-y*p*w,this.z=m*p*w+y*x*_,this.w=m*p*_+y*x*w),this},o.prototype.clone=function(){return new o(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(t,n,i){var r=t("./Vec3"),o=t("./Quaternion");n.exports=a;function a(u){u=u||{},this.position=new r,u.position&&this.position.copy(u.position),this.quaternion=new o,u.quaternion&&this.quaternion.copy(u.quaternion)}var l=new o;a.pointToLocalFrame=function(u,h,c,f){var f=f||new r;return c.vsub(u,f),h.conjugate(l),l.vmult(f,f),f},a.prototype.pointToLocal=function(u,h){return a.pointToLocalFrame(this.position,this.quaternion,u,h)},a.pointToWorldFrame=function(u,h,c,f){var f=f||new r;return h.vmult(c,f),f.vadd(u,f),f},a.prototype.pointToWorld=function(u,h){return a.pointToWorldFrame(this.position,this.quaternion,u,h)},a.prototype.vectorToWorldFrame=function(u,c){var c=c||new r;return this.quaternion.vmult(u,c),c},a.vectorToWorldFrame=function(u,h,c){return u.vmult(h,c),c},a.vectorToLocalFrame=function(u,h,c,f){var f=f||new r;return h.w*=-1,h.vmult(c,f),h.w*=-1,f}},{"./Quaternion":28,"./Vec3":30}],30:[function(t,n,i){n.exports=o;var r=t("./Mat3");function o(h,c,d){this.x=h||0,this.y=c||0,this.z=d||0}o.ZERO=new o(0,0,0),o.UNIT_X=new o(1,0,0),o.UNIT_Y=new o(0,1,0),o.UNIT_Z=new o(0,0,1),o.prototype.cross=function(h,c){var d=h.x,f=h.y,v=h.z,g=this.x,m=this.y,p=this.z;return c=c||new o,c.x=m*v-p*f,c.y=p*d-g*v,c.z=g*f-m*d,c},o.prototype.set=function(h,c,d){return this.x=h,this.y=c,this.z=d,this},o.prototype.setZero=function(){this.x=this.y=this.z=0},o.prototype.vadd=function(h,c){if(c)c.x=h.x+this.x,c.y=h.y+this.y,c.z=h.z+this.z;else return new o(this.x+h.x,this.y+h.y,this.z+h.z)},o.prototype.vsub=function(h,c){if(c)c.x=this.x-h.x,c.y=this.y-h.y,c.z=this.z-h.z;else return new o(this.x-h.x,this.y-h.y,this.z-h.z)},o.prototype.crossmat=function(){return new r([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},o.prototype.normalize=function(){var h=this.x,c=this.y,d=this.z,f=Math.sqrt(h*h+c*c+d*d);if(f>0){var v=1/f;this.x*=v,this.y*=v,this.z*=v}else this.x=0,this.y=0,this.z=0;return f},o.prototype.unit=function(h){h=h||new o;var c=this.x,d=this.y,f=this.z,v=Math.sqrt(c*c+d*d+f*f);return v>0?(v=1/v,h.x=c*v,h.y=d*v,h.z=f*v):(h.x=1,h.y=0,h.z=0),h},o.prototype.norm=function(){var h=this.x,c=this.y,d=this.z;return Math.sqrt(h*h+c*c+d*d)},o.prototype.length=o.prototype.norm,o.prototype.norm2=function(){return this.dot(this)},o.prototype.lengthSquared=o.prototype.norm2,o.prototype.distanceTo=function(h){var c=this.x,d=this.y,f=this.z,v=h.x,g=h.y,m=h.z;return Math.sqrt((v-c)*(v-c)+(g-d)*(g-d)+(m-f)*(m-f))},o.prototype.distanceSquared=function(h){var c=this.x,d=this.y,f=this.z,v=h.x,g=h.y,m=h.z;return(v-c)*(v-c)+(g-d)*(g-d)+(m-f)*(m-f)},o.prototype.mult=function(h,c){c=c||new o;var d=this.x,f=this.y,v=this.z;return c.x=h*d,c.y=h*f,c.z=h*v,c},o.prototype.scale=o.prototype.mult,o.prototype.dot=function(h){return this.x*h.x+this.y*h.y+this.z*h.z},o.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},o.prototype.negate=function(h){return h=h||new o,h.x=-this.x,h.y=-this.y,h.z=-this.z,h};var a=new o,l=new o;o.prototype.tangents=function(h,c){var d=this.norm();if(d>0){var f=a,v=1/d;f.set(this.x*v,this.y*v,this.z*v);var g=l;Math.abs(f.x)<.9?(g.set(1,0,0),f.cross(g,h)):(g.set(0,1,0),f.cross(g,h)),f.cross(h,c)}else h.set(1,0,0),c.set(0,1,0)},o.prototype.toString=function(){return this.x+","+this.y+","+this.z},o.prototype.toArray=function(){return[this.x,this.y,this.z]},o.prototype.copy=function(h){return this.x=h.x,this.y=h.y,this.z=h.z,this},o.prototype.lerp=function(h,c,d){var f=this.x,v=this.y,g=this.z;d.x=f+(h.x-f)*c,d.y=v+(h.y-v)*c,d.z=g+(h.z-g)*c},o.prototype.almostEquals=function(h,c){return c===void 0&&(c=1e-6),!(Math.abs(this.x-h.x)>c||Math.abs(this.y-h.y)>c||Math.abs(this.z-h.z)>c)},o.prototype.almostZero=function(h){return h===void 0&&(h=1e-6),!(Math.abs(this.x)>h||Math.abs(this.y)>h||Math.abs(this.z)>h)};var u=new o;o.prototype.isAntiparallelTo=function(h,c){return this.negate(u),u.almostEquals(h,c)},o.prototype.clone=function(){return new o(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(t,n,i){n.exports=c;var r=t("../utils/EventTarget");t("../shapes/Shape");var o=t("../math/Vec3"),a=t("../math/Mat3"),l=t("../math/Quaternion");t("../material/Material");var u=t("../collision/AABB"),h=t("../shapes/Box");function c(P){P=P||{},r.apply(this),this.id=c.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new o,this.collisionFilterGroup=typeof P.collisionFilterGroup=="number"?P.collisionFilterGroup:1,this.collisionFilterMask=typeof P.collisionFilterMask=="number"?P.collisionFilterMask:1,this.collisionResponse=!0,this.position=new o,P.position&&this.position.copy(P.position),this.previousPosition=new o,this.initPosition=new o,this.velocity=new o,P.velocity&&this.velocity.copy(P.velocity),this.initVelocity=new o,this.force=new o;var z=typeof P.mass=="number"?P.mass:0;this.mass=z,this.invMass=z>0?1/z:0,this.material=P.material||null,this.linearDamping=typeof P.linearDamping=="number"?P.linearDamping:.01,this.type=z<=0?c.STATIC:c.DYNAMIC,typeof P.type==typeof c.STATIC&&(this.type=P.type),this.allowSleep=typeof P.allowSleep<"u"?P.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof P.sleepSpeedLimit<"u"?P.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof P.sleepTimeLimit<"u"?P.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new o,this.quaternion=new l,P.quaternion&&this.quaternion.copy(P.quaternion),this.initQuaternion=new l,this.angularVelocity=new o,P.angularVelocity&&this.angularVelocity.copy(P.angularVelocity),this.initAngularVelocity=new o,this.interpolatedPosition=new o,this.interpolatedQuaternion=new l,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new o,this.invInertia=new o,this.invInertiaWorld=new a,this.invMassSolve=0,this.invInertiaSolve=new o,this.invInertiaWorldSolve=new a,this.fixedRotation=typeof P.fixedRotation<"u"?P.fixedRotation:!1,this.angularDamping=typeof P.angularDamping<"u"?P.angularDamping:.01,this.aabb=new u,this.aabbNeedsUpdate=!0,this.wlambda=new o,P.shape&&this.addShape(P.shape),this.updateMassProperties()}c.prototype=new r,c.prototype.constructor=c,c.DYNAMIC=1,c.STATIC=2,c.KINEMATIC=4,c.AWAKE=0,c.SLEEPY=1,c.SLEEPING=2,c.idCounter=0,c.prototype.wakeUp=function(){var P=this.sleepState;this.sleepState=0,P===c.SLEEPING&&this.dispatchEvent({type:"wakeup"})},c.prototype.sleep=function(){this.sleepState=c.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},c.sleepyEvent={type:"sleepy"},c.sleepEvent={type:"sleep"},c.prototype.sleepTick=function(P){if(this.allowSleep){var z=this.sleepState,q=this.velocity.norm2()+this.angularVelocity.norm2(),U=Math.pow(this.sleepSpeedLimit,2);z===c.AWAKE&&q<U?(this.sleepState=c.SLEEPY,this.timeLastSleepy=P,this.dispatchEvent(c.sleepyEvent)):z===c.SLEEPY&&q>U?this.wakeUp():z===c.SLEEPY&&P-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(c.sleepEvent))}},c.prototype.updateSolveMassProperties=function(){this.sleepState===c.SLEEPING||this.type===c.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},c.prototype.pointToLocalFrame=function(P,q){var q=q||new o;return P.vsub(this.position,q),this.quaternion.conjugate().vmult(q,q),q},c.prototype.vectorToLocalFrame=function(P,q){var q=q||new o;return this.quaternion.conjugate().vmult(P,q),q},c.prototype.pointToWorldFrame=function(P,q){var q=q||new o;return this.quaternion.vmult(P,q),q.vadd(this.position,q),q},c.prototype.vectorToWorldFrame=function(P,q){var q=q||new o;return this.quaternion.vmult(P,q),q};var d=new o,f=new l;c.prototype.addShape=function(P,z,q){var U=new o,V=new l;return z&&U.copy(z),q&&V.copy(q),this.shapes.push(P),this.shapeOffsets.push(U),this.shapeOrientations.push(V),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},c.prototype.updateBoundingRadius=function(){for(var P=this.shapes,z=this.shapeOffsets,q=P.length,U=0,V=0;V!==q;V++){var Q=P[V];Q.updateBoundingSphereRadius();var F=z[V].norm(),D=Q.boundingSphereRadius;F+D>U&&(U=F+D)}this.boundingRadius=U};var v=new u;c.prototype.computeAABB=function(){for(var P=this.shapes,z=this.shapeOffsets,q=this.shapeOrientations,U=P.length,V=d,Q=f,F=this.quaternion,D=this.aabb,j=v,W=0;W!==U;W++){var N=P[W];q[W].mult(F,Q),Q.vmult(z[W],V),V.vadd(this.position,V),N.calculateWorldAABB(V,Q,j.lowerBound,j.upperBound),W===0?D.copy(j):D.extend(j)}this.aabbNeedsUpdate=!1};var g=new a,m=new a;new a,c.prototype.updateInertiaWorld=function(P){var z=this.invInertia;if(!(z.x===z.y&&z.y===z.z&&!P)){var q=g,U=m;q.setRotationFromQuaternion(this.quaternion),q.transpose(U),q.scale(z,q),q.mmult(U,this.invInertiaWorld)}};var p=new o,_=new o;c.prototype.applyForce=function(P,z){if(this.type===c.DYNAMIC){var q=p;z.vsub(this.position,q);var U=_;q.cross(P,U),this.force.vadd(P,this.force),this.torque.vadd(U,this.torque)}};var y=new o,x=new o;c.prototype.applyLocalForce=function(P,z){if(this.type===c.DYNAMIC){var q=y,U=x;this.vectorToWorldFrame(P,q),this.pointToWorldFrame(z,U),this.applyForce(q,U)}};var w=new o,A=new o,I=new o;c.prototype.applyImpulse=function(P,z){if(this.type===c.DYNAMIC){var q=w;z.vsub(this.position,q);var U=A;U.copy(P),U.mult(this.invMass,U),this.velocity.vadd(U,this.velocity);var V=I;q.cross(P,V),this.invInertiaWorld.vmult(V,V),this.angularVelocity.vadd(V,this.angularVelocity)}};var B=new o,E=new o;c.prototype.applyLocalImpulse=function(P,z){if(this.type===c.DYNAMIC){var q=B,U=E;this.vectorToWorldFrame(P,q),this.pointToWorldFrame(z,U),this.applyImpulse(q,U)}};var M=new o;c.prototype.updateMassProperties=function(){var P=M;this.invMass=this.mass>0?1/this.mass:0;var z=this.inertia,q=this.fixedRotation;this.computeAABB(),P.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),h.calculateInertia(P,this.mass,z),this.invInertia.set(z.x>0&&!q?1/z.x:0,z.y>0&&!q?1/z.y:0,z.z>0&&!q?1/z.z:0),this.updateInertiaWorld(!0)},c.prototype.getVelocityAtWorldPoint=function(P,z){var q=new o;return P.vsub(this.position,q),this.angularVelocity.cross(q,z),this.velocity.vadd(z,z),z}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(t,n,i){t("./Body");var r=t("../math/Vec3"),o=t("../math/Quaternion");t("../collision/RaycastResult");var a=t("../collision/Ray"),l=t("../objects/WheelInfo");n.exports=u;function u(F){this.chassisBody=F.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof F.indexRightAxis<"u"?F.indexRightAxis:1,this.indexForwardAxis=typeof F.indexForwardAxis<"u"?F.indexForwardAxis:0,this.indexUpAxis=typeof F.indexUpAxis<"u"?F.indexUpAxis:2}new r,new r,new r;var h=new r,c=new r,d=new r;new a,u.prototype.addWheel=function(F){F=F||{};var D=new l(F),j=this.wheelInfos.length;return this.wheelInfos.push(D),j},u.prototype.setSteeringValue=function(F,D){var j=this.wheelInfos[D];j.steering=F},new r,u.prototype.applyEngineForce=function(F,D){this.wheelInfos[D].engineForce=F},u.prototype.setBrake=function(F,D){this.wheelInfos[D].brake=F},u.prototype.addToWorld=function(F){this.constraints,F.add(this.chassisBody);var D=this;this.preStepCallback=function(){D.updateVehicle(F.dt)},F.addEventListener("preStep",this.preStepCallback),this.world=F},u.prototype.getVehicleAxisWorld=function(F,D){D.set(F===0?1:0,F===1?1:0,F===2?1:0),this.chassisBody.vectorToWorldFrame(D,D)},u.prototype.updateVehicle=function(F){for(var D=this.wheelInfos,j=D.length,W=this.chassisBody,N=0;N<j;N++)this.updateWheelTransform(N);this.currentVehicleSpeedKmHour=3.6*W.velocity.norm();var H=new r;this.getVehicleAxisWorld(this.indexForwardAxis,H),H.dot(W.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var N=0;N<j;N++)this.castRay(D[N]);this.updateSuspension(F);for(var T=new r,R=new r,N=0;N<j;N++){var C=D[N],X=C.suspensionForce;X>C.maxSuspensionForce&&(X=C.maxSuspensionForce),C.raycastResult.hitNormalWorld.scale(X*F,T),C.raycastResult.hitPointWorld.vsub(W.position,R),W.applyImpulse(T,C.raycastResult.hitPointWorld)}this.updateFriction(F);var ne=new r,ie=new r,K=new r;for(N=0;N<j;N++){var C=D[N];W.getVelocityAtWorldPoint(C.chassisConnectionPointWorld,K);var te=1;switch(this.indexUpAxis){case 1:te=-1;break}if(C.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,ie);var ue=ie.dot(C.raycastResult.hitNormalWorld);C.raycastResult.hitNormalWorld.scale(ue,ne),ie.vsub(ne,ie);var Y=ie.dot(K);C.deltaRotation=te*Y*F/C.radius}(C.sliding||!C.isInContact)&&C.engineForce!==0&&C.useCustomSlidingRotationalSpeed&&(C.deltaRotation=(C.engineForce>0?1:-1)*C.customSlidingRotationalSpeed*F),Math.abs(C.brake)>Math.abs(C.engineForce)&&(C.deltaRotation=0),C.rotation+=C.deltaRotation,C.deltaRotation*=.99}},u.prototype.updateSuspension=function(F){for(var D=this.chassisBody,j=D.mass,W=this.wheelInfos,N=W.length,H=0;H<N;H++){var T=W[H];if(T.isInContact){var R,C=T.suspensionRestLength,X=T.suspensionLength,ne=C-X;R=T.suspensionStiffness*ne*T.clippedInvContactDotSuspension;var ie=T.suspensionRelativeVelocity,K;ie<0?K=T.dampingCompression:K=T.dampingRelaxation,R-=K*ie,T.suspensionForce=R*j,T.suspensionForce<0&&(T.suspensionForce=0)}else T.suspensionForce=0}},u.prototype.removeFromWorld=function(F){this.constraints,F.remove(this.chassisBody),F.removeEventListener("preStep",this.preStepCallback),this.world=null};var f=new r,v=new r;u.prototype.castRay=function(F){var D=f,j=v;this.updateWheelTransformWorld(F);var W=this.chassisBody,N=-1,H=F.suspensionRestLength+F.radius;F.directionWorld.scale(H,D);var T=F.chassisConnectionPointWorld;T.vadd(D,j);var R=F.raycastResult;R.reset();var C=W.collisionResponse;W.collisionResponse=!1,this.world.rayTest(T,j,R),W.collisionResponse=C;var X=R.body;if(F.raycastResult.groundObject=0,X){N=R.distance,F.raycastResult.hitNormalWorld=R.hitNormalWorld,F.isInContact=!0;var ne=R.distance;F.suspensionLength=ne-F.radius;var ie=F.suspensionRestLength-F.maxSuspensionTravel,K=F.suspensionRestLength+F.maxSuspensionTravel;F.suspensionLength<ie&&(F.suspensionLength=ie),F.suspensionLength>K&&(F.suspensionLength=K,F.raycastResult.reset());var te=F.raycastResult.hitNormalWorld.dot(F.directionWorld),ue=new r;W.getVelocityAtWorldPoint(F.raycastResult.hitPointWorld,ue);var Y=F.raycastResult.hitNormalWorld.dot(ue);if(te>=-.1)F.suspensionRelativeVelocity=0,F.clippedInvContactDotSuspension=1/.1;else{var Pe=-1/te;F.suspensionRelativeVelocity=Y*Pe,F.clippedInvContactDotSuspension=Pe}}else F.suspensionLength=F.suspensionRestLength+0*F.maxSuspensionTravel,F.suspensionRelativeVelocity=0,F.directionWorld.scale(-1,F.raycastResult.hitNormalWorld),F.clippedInvContactDotSuspension=1;return N},u.prototype.updateWheelTransformWorld=function(F){F.isInContact=!1;var D=this.chassisBody;D.pointToWorldFrame(F.chassisConnectionPointLocal,F.chassisConnectionPointWorld),D.vectorToWorldFrame(F.directionLocal,F.directionWorld),D.vectorToWorldFrame(F.axleLocal,F.axleWorld)},u.prototype.updateWheelTransform=function(F){var D=h,j=c,W=d,N=this.wheelInfos[F];this.updateWheelTransformWorld(N),N.directionLocal.scale(-1,D),j.copy(N.axleLocal),D.cross(j,W),W.normalize(),j.normalize();var H=N.steering,T=new o;T.setFromAxisAngle(D,H);var R=new o;R.setFromAxisAngle(j,N.rotation);var C=N.worldTransform.quaternion;this.chassisBody.quaternion.mult(T,C),C.mult(R,C),C.normalize();var X=N.worldTransform.position;X.copy(N.directionWorld),X.scale(N.suspensionLength,X),X.vadd(N.chassisConnectionPointWorld,X)};var g=[new r(1,0,0),new r(0,1,0),new r(0,0,1)];u.prototype.getWheelTransformWorld=function(F){return this.wheelInfos[F].worldTransform};var m=new r,p=[],_=[],y=1;u.prototype.updateFriction=function(F){for(var D=m,j=this.wheelInfos,W=j.length,N=this.chassisBody,H=_,T=p,R=0;R<W;R++){var C=j[R],X=C.raycastResult.body;C.sideImpulse=0,C.forwardImpulse=0,H[R]||(H[R]=new r),T[R]||(T[R]=new r)}for(var R=0;R<W;R++){var C=j[R],X=C.raycastResult.body;if(X){var ne=T[R],ie=this.getWheelTransformWorld(R);ie.vectorToWorldFrame(g[this.indexRightAxis],ne);var K=C.raycastResult.hitNormalWorld,te=ne.dot(K);K.scale(te,D),ne.vsub(D,ne),ne.normalize(),K.cross(ne,H[R]),H[R].normalize(),C.sideImpulse=Q(N,C.raycastResult.hitPointWorld,X,C.raycastResult.hitPointWorld,ne),C.sideImpulse*=y}}var ue=1,Y=.5;this.sliding=!1;for(var R=0;R<W;R++){var C=j[R],X=C.raycastResult.body,Pe=0;if(C.slipInfo=1,X){var de=0,se=C.brake?C.brake:de;Pe=I(N,X,C.raycastResult.hitPointWorld,H[R],se),Pe+=C.engineForce*F;var oe=se/Pe;C.slipInfo*=oe}if(C.forwardImpulse=0,C.skidInfo=1,X){C.skidInfo=1;var qe=C.suspensionForce*F*C.frictionSlip,Ae=qe,L=qe*Ae;C.forwardImpulse=Pe;var S=C.forwardImpulse*Y,ee=C.sideImpulse*ue,fe=S*S+ee*ee;if(C.sliding=!1,fe>L){this.sliding=!0,C.sliding=!0;var oe=qe/Math.sqrt(fe);C.skidInfo*=oe}}}if(this.sliding)for(var R=0;R<W;R++){var C=j[R];C.sideImpulse!==0&&C.skidInfo<1&&(C.forwardImpulse*=C.skidInfo,C.sideImpulse*=C.skidInfo)}for(var R=0;R<W;R++){var C=j[R],he=new r;if(he.copy(C.raycastResult.hitPointWorld),C.forwardImpulse!==0){var me=new r;H[R].scale(C.forwardImpulse,me),N.applyImpulse(me,he)}if(C.sideImpulse!==0){var X=C.raycastResult.body,we=new r;we.copy(C.raycastResult.hitPointWorld);var ye=new r;T[R].scale(C.sideImpulse,ye),N.pointToLocalFrame(he,he),he["xyz"[this.indexUpAxis]]*=C.rollInfluence,N.pointToWorldFrame(he,he),N.applyImpulse(ye,he),ye.scale(-1,ye),X.applyImpulse(ye,we)}}};var x=new r,w=new r,A=new r;function I(F,D,j,W,N){var H=0,T=j,R=x,C=w,X=A;F.getVelocityAtWorldPoint(T,R),D.getVelocityAtWorldPoint(T,C),R.vsub(C,X);var ne=W.dot(X),ie=z(F,j,W),K=z(D,j,W),te=1,ue=te/(ie+K);return H=-ne*ue,N<H&&(H=N),H<-N&&(H=-N),H}var B=new r,E=new r,M=new r,P=new r;function z(F,D,j){var W=B,N=E,H=M,T=P;return D.vsub(F.position,W),W.cross(j,N),F.invInertiaWorld.vmult(N,T),T.cross(W,H),F.invMass+j.dot(H)}var q=new r,U=new r,V=new r;function Q(F,D,j,W,N,te){var T=N.norm2();if(T>1.1)return 0;var R=q,C=U,X=V;F.getVelocityAtWorldPoint(D,R),j.getVelocityAtWorldPoint(W,C),R.vsub(C,X);var ne=N.dot(X),ie=.2,K=1/(F.invMass+j.invMass),te=-ie*ne*K;return te}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(t,n,i){var r=t("./Body"),o=t("../shapes/Sphere"),a=t("../shapes/Box"),l=t("../math/Vec3"),u=t("../constraints/HingeConstraint");n.exports=h;function h(f){if(this.wheelBodies=[],this.coordinateSystem=typeof f.coordinateSystem>"u"?new l(1,2,3):f.coordinateSystem.clone(),this.chassisBody=f.chassisBody,!this.chassisBody){var v=new a(new l(5,2,.5));this.chassisBody=new r(1,v)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}h.prototype.addWheel=function(f){f=f||{};var v=f.body;v||(v=new r(1,new o(1.2))),this.wheelBodies.push(v),this.wheelForces.push(0),new l;var g=typeof f.position<"u"?f.position.clone():new l,m=new l;this.chassisBody.pointToWorldFrame(g,m),v.position.set(m.x,m.y,m.z);var p=typeof f.axis<"u"?f.axis.clone():new l(0,1,0);this.wheelAxes.push(p);var _=new u(this.chassisBody,v,{pivotA:g,axisA:p,pivotB:l.ZERO,axisB:p,collideConnected:!1});return this.constraints.push(_),this.wheelBodies.length-1},h.prototype.setSteeringValue=function(f,v){var g=this.wheelAxes[v],m=Math.cos(f),p=Math.sin(f),_=g.x,y=g.y;this.constraints[v].axisA.set(m*_-p*y,p*_+m*y,0)},h.prototype.setMotorSpeed=function(f,v){var g=this.constraints[v];g.enableMotor(),g.motorTargetVelocity=f},h.prototype.disableMotor=function(f){var v=this.constraints[f];v.disableMotor()};var c=new l;h.prototype.setWheelForce=function(f,v){this.wheelForces[v]=f},h.prototype.applyWheelForce=function(f,v){var g=this.wheelAxes[v],m=this.wheelBodies[v],p=m.torque;g.scale(f,c),m.vectorToWorldFrame(c,c),p.vadd(c,p)},h.prototype.addToWorld=function(f){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)f.add(g[m]);for(var m=0;m<v.length;m++)f.addConstraint(v[m]);f.addEventListener("preStep",this._update.bind(this))},h.prototype._update=function(){for(var f=this.wheelForces,v=0;v<f.length;v++)this.applyWheelForce(f[v],v)},h.prototype.removeFromWorld=function(f){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)f.remove(g[m]);for(var m=0;m<v.length;m++)f.removeConstraint(v[m])};var d=new l;h.prototype.getWheelSpeed=function(f){var v=this.wheelAxes[f],g=this.wheelBodies[f],m=g.angularVelocity;return this.chassisBody.vectorToWorldFrame(v,d),m.dot(d)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(t,n,i){n.exports=o,t("../shapes/Shape");var r=t("../math/Vec3");t("../math/Quaternion"),t("../shapes/Particle"),t("../objects/Body"),t("../material/Material");function o(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}o.prototype.add=function(v){this.particles.push(v),this.neighbors.length<this.particles.length&&this.neighbors.push([])},o.prototype.remove=function(v){var g=this.particles.indexOf(v);g!==-1&&(this.particles.splice(g,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var a=new r;o.prototype.getNeighbors=function(v,g){for(var m=this.particles.length,p=v.id,_=this.smoothingRadius*this.smoothingRadius,y=a,x=0;x!==m;x++){var w=this.particles[x];w.position.vsub(v.position,y),p!==w.id&&y.norm2()<_&&g.push(w)}};var l=new r,u=new r,h=new r,c=new r,d=new r,f=new r;o.prototype.update=function(){for(var v=this.particles.length,g=l,m=this.speedOfSound,p=this.eps,_=0;_!==v;_++){var y=this.particles[_],x=this.neighbors[_];x.length=0,this.getNeighbors(y,x),x.push(this.particles[_]);for(var w=x.length,A=0,I=0;I!==w;I++){y.position.vsub(x[I].position,g);var B=g.norm(),E=this.w(B);A+=x[I].mass*E}this.densities[_]=A,this.pressures[_]=m*m*(this.densities[_]-this.density)}for(var M=u,P=h,z=c,q=d,U=f,_=0;_!==v;_++){var V=this.particles[_];M.set(0,0,0),P.set(0,0,0);for(var Q,F,x=this.neighbors[_],w=x.length,I=0;I!==w;I++){var D=x[I];V.position.vsub(D.position,q);var j=q.norm();Q=-D.mass*(this.pressures[_]/(this.densities[_]*this.densities[_]+p)+this.pressures[I]/(this.densities[I]*this.densities[I]+p)),this.gradw(q,z),z.mult(Q,z),M.vadd(z,M),D.velocity.vsub(V.velocity,U),U.mult(1/(1e-4+this.densities[_]*this.densities[I])*this.viscosity*D.mass,U),F=this.nablaw(j),U.mult(F,U),P.vadd(U,P)}P.mult(V.mass,P),M.mult(V.mass,M),V.force.vadd(P,V.force),V.force.vadd(M,V.force)}},o.prototype.w=function(v){var g=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(g,9))*Math.pow(g*g-v*v,3)},o.prototype.gradw=function(v,g){var m=v.norm(),p=this.smoothingRadius;v.mult(945/(32*Math.PI*Math.pow(p,9))*Math.pow(p*p-m*m,2),g)},o.prototype.nablaw=function(v){var g=this.smoothingRadius,m=945/(32*Math.PI*Math.pow(g,9))*(g*g-v*v)*(7*v*v-3*g*g);return m}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(t,n,i){var r=t("../math/Vec3");n.exports=o;function o(_,y,x){x=x||{},this.restLength=typeof x.restLength=="number"?x.restLength:1,this.stiffness=x.stiffness||100,this.damping=x.damping||1,this.bodyA=_,this.bodyB=y,this.localAnchorA=new r,this.localAnchorB=new r,x.localAnchorA&&this.localAnchorA.copy(x.localAnchorA),x.localAnchorB&&this.localAnchorB.copy(x.localAnchorB),x.worldAnchorA&&this.setWorldAnchorA(x.worldAnchorA),x.worldAnchorB&&this.setWorldAnchorB(x.worldAnchorB)}o.prototype.setWorldAnchorA=function(_){this.bodyA.pointToLocalFrame(_,this.localAnchorA)},o.prototype.setWorldAnchorB=function(_){this.bodyB.pointToLocalFrame(_,this.localAnchorB)},o.prototype.getWorldAnchorA=function(_){this.bodyA.pointToWorldFrame(this.localAnchorA,_)},o.prototype.getWorldAnchorB=function(_){this.bodyB.pointToWorldFrame(this.localAnchorB,_)};var a=new r,l=new r,u=new r,h=new r,c=new r,d=new r,f=new r,v=new r,g=new r,m=new r,p=new r;o.prototype.applyForce=function(){var _=this.stiffness,y=this.damping,x=this.restLength,w=this.bodyA,A=this.bodyB,I=a,B=l,E=u,M=h,P=p,z=c,q=d,U=f,V=v,Q=g,F=m;this.getWorldAnchorA(z),this.getWorldAnchorB(q),z.vsub(w.position,U),q.vsub(A.position,V),q.vsub(z,I);var D=I.norm();B.copy(I),B.normalize(),A.velocity.vsub(w.velocity,E),A.angularVelocity.cross(V,P),E.vadd(P,E),w.angularVelocity.cross(U,P),E.vsub(P,E),B.mult(-_*(D-x)-y*E.dot(B),M),w.force.vsub(M,w.force),A.force.vadd(M,A.force),U.cross(M,Q),V.cross(M,F),w.torque.vsub(Q,w.torque),A.torque.vadd(F,A.torque)}},{"../math/Vec3":30}],36:[function(t,n,i){var r=t("../math/Vec3"),o=t("../math/Transform"),a=t("../collision/RaycastResult"),l=t("../utils/Utils");n.exports=u;function u(d){d=l.defaults(d,{chassisConnectionPointLocal:new r,chassisConnectionPointWorld:new r,directionLocal:new r,directionWorld:new r,axleLocal:new r,axleWorld:new r,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=d.maxSuspensionTravel,this.customSlidingRotationalSpeed=d.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=d.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=d.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=d.chassisConnectionPointWorld.clone(),this.directionLocal=d.directionLocal.clone(),this.directionWorld=d.directionWorld.clone(),this.axleLocal=d.axleLocal.clone(),this.axleWorld=d.axleWorld.clone(),this.suspensionRestLength=d.suspensionRestLength,this.suspensionMaxLength=d.suspensionMaxLength,this.radius=d.radius,this.suspensionStiffness=d.suspensionStiffness,this.dampingCompression=d.dampingCompression,this.dampingRelaxation=d.dampingRelaxation,this.frictionSlip=d.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=d.rollInfluence,this.maxSuspensionForce=d.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=d.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new a,this.worldTransform=new o,this.isInContact=!1}var c=new r,h=new r,c=new r;u.prototype.updateWheel=function(d){var f=this.raycastResult;if(this.isInContact){var v=f.hitNormalWorld.dot(f.directionWorld);f.hitPointWorld.vsub(d.position,h),d.getVelocityAtWorldPoint(h,c);var g=f.hitNormalWorld.dot(c);if(v>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var m=-1/v;this.suspensionRelativeVelocity=g*m,this.clippedInvContactDotSuspension=m}}else f.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,f.directionWorld.scale(-1,f.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(t,n,i){n.exports=l;var r=t("./Shape"),o=t("../math/Vec3"),a=t("./ConvexPolyhedron");function l(c){r.call(this),this.type=r.types.BOX,this.halfExtents=c,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}l.prototype=new r,l.prototype.constructor=l,l.prototype.updateConvexPolyhedronRepresentation=function(){var c=this.halfExtents.x,d=this.halfExtents.y,f=this.halfExtents.z,v=o,g=[new v(-c,-d,-f),new v(c,-d,-f),new v(c,d,-f),new v(-c,d,-f),new v(-c,-d,f),new v(c,-d,f),new v(c,d,f),new v(-c,d,f)],m=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new v(0,0,1),new v(0,1,0),new v(1,0,0);var p=new a(g,m);this.convexPolyhedronRepresentation=p,p.material=this.material},l.prototype.calculateLocalInertia=function(c,d){return d=d||new o,l.calculateInertia(this.halfExtents,c,d),d},l.calculateInertia=function(c,d,f){var v=c;f.x=1/12*d*(2*v.y*2*v.y+2*v.z*2*v.z),f.y=1/12*d*(2*v.x*2*v.x+2*v.z*2*v.z),f.z=1/12*d*(2*v.y*2*v.y+2*v.x*2*v.x)},l.prototype.getSideNormals=function(c,d){var f=c,v=this.halfExtents;if(f[0].set(v.x,0,0),f[1].set(0,v.y,0),f[2].set(0,0,v.z),f[3].set(-v.x,0,0),f[4].set(0,-v.y,0),f[5].set(0,0,-v.z),d!==void 0)for(var g=0;g!==f.length;g++)d.vmult(f[g],f[g]);return f},l.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},l.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var u=new o;new o,l.prototype.forEachWorldCorner=function(c,d,f){for(var v=this.halfExtents,g=[[v.x,v.y,v.z],[-v.x,v.y,v.z],[-v.x,-v.y,v.z],[-v.x,-v.y,-v.z],[v.x,-v.y,-v.z],[v.x,v.y,-v.z],[-v.x,v.y,-v.z],[v.x,-v.y,v.z]],m=0;m<g.length;m++)u.set(g[m][0],g[m][1],g[m][2]),d.vmult(u,u),c.vadd(u,u),f(u.x,u.y,u.z)};var h=[new o,new o,new o,new o,new o,new o,new o,new o];l.prototype.calculateWorldAABB=function(c,d,f,v){var g=this.halfExtents;h[0].set(g.x,g.y,g.z),h[1].set(-g.x,g.y,g.z),h[2].set(-g.x,-g.y,g.z),h[3].set(-g.x,-g.y,-g.z),h[4].set(g.x,-g.y,-g.z),h[5].set(g.x,g.y,-g.z),h[6].set(-g.x,g.y,-g.z),h[7].set(g.x,-g.y,g.z);var m=h[0];d.vmult(m,m),c.vadd(m,m),v.copy(m),f.copy(m);for(var p=1;p<8;p++){var m=h[p];d.vmult(m,m),c.vadd(m,m);var _=m.x,y=m.y,x=m.z;_>v.x&&(v.x=_),y>v.y&&(v.y=y),x>v.z&&(v.z=x),_<f.x&&(f.x=_),y<f.y&&(f.y=y),x<f.z&&(f.z=x)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(t,n,i){n.exports=l;var r=t("./Shape"),o=t("../math/Vec3");t("../math/Quaternion");var a=t("../math/Transform");function l(N,H,T){r.call(this),this.type=r.types.CONVEXPOLYHEDRON,this.vertices=N||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=H||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=T?T.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}l.prototype=new r,l.prototype.constructor=l;var u=new o;l.prototype.computeEdges=function(){var N=this.faces,H=this.vertices;H.length;var T=this.uniqueEdges;T.length=0;for(var R=u,C=0;C!==N.length;C++)for(var X=N[C],ne=X.length,ie=0;ie!==ne;ie++){var K=(ie+1)%ne;H[X[ie]].vsub(H[X[K]],R),R.normalize();for(var te=!1,ue=0;ue!==T.length;ue++)if(T[ue].almostEquals(R)||T[ue].almostEquals(R)){te=!0;break}te||T.push(R.clone())}},l.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var N=0;N<this.faces.length;N++){for(var H=0;H<this.faces[N].length;H++)if(!this.vertices[this.faces[N][H]])throw new Error("Vertex "+this.faces[N][H]+" not found!");var T=this.faceNormals[N]||new o;this.getFaceNormal(N,T),T.negate(T),this.faceNormals[N]=T;var R=this.vertices[this.faces[N][0]];if(T.dot(R)<0){console.error(".faceNormals["+N+"] = Vec3("+T.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var H=0;H<this.faces[N].length;H++)console.warn(".vertices["+this.faces[N][H]+"] = Vec3("+this.vertices[this.faces[N][H]].toString()+")")}}};var h=new o,c=new o;l.computeNormal=function(N,H,T,R){H.vsub(N,c),T.vsub(H,h),h.cross(c,R),R.isZero()||R.normalize()},l.prototype.getFaceNormal=function(N,H){var T=this.faces[N],R=this.vertices[T[0]],C=this.vertices[T[1]],X=this.vertices[T[2]];return l.computeNormal(R,C,X,H)};var d=new o;l.prototype.clipAgainstHull=function(N,H,T,R,C,X,ne,ie,K){for(var te=d,ue=-1,Y=-Number.MAX_VALUE,Pe=0;Pe<T.faces.length;Pe++){te.copy(T.faceNormals[Pe]),C.vmult(te,te);var de=te.dot(X);de>Y&&(Y=de,ue=Pe)}for(var se=[],oe=T.faces[ue],qe=oe.length,Ae=0;Ae<qe;Ae++){var L=T.vertices[oe[Ae]],S=new o;S.copy(L),C.vmult(S,S),R.vadd(S,S),se.push(S)}ue>=0&&this.clipFaceAgainstHull(X,N,H,se,ne,ie,K)};var f=new o,v=new o,g=new o,m=new o,p=new o,_=new o;l.prototype.findSeparatingAxis=function(N,H,T,R,C,X,ne,ie){var K=f,te=v,ue=g,Y=m,Pe=p,de=_,se=Number.MAX_VALUE,oe=this;if(oe.uniqueAxes)for(var Ae=0;Ae!==oe.uniqueAxes.length;Ae++){T.vmult(oe.uniqueAxes[Ae],K);var S=oe.testSepAxis(K,N,H,T,R,C);if(S===!1)return!1;S<se&&(se=S,X.copy(K))}else for(var qe=ne?ne.length:oe.faces.length,Ae=0;Ae<qe;Ae++){var L=ne?ne[Ae]:Ae;K.copy(oe.faceNormals[L]),T.vmult(K,K);var S=oe.testSepAxis(K,N,H,T,R,C);if(S===!1)return!1;S<se&&(se=S,X.copy(K))}if(N.uniqueAxes)for(var Ae=0;Ae!==N.uniqueAxes.length;Ae++){C.vmult(N.uniqueAxes[Ae],te);var S=oe.testSepAxis(te,N,H,T,R,C);if(S===!1)return!1;S<se&&(se=S,X.copy(te))}else for(var ee=ie?ie.length:N.faces.length,Ae=0;Ae<ee;Ae++){var L=ie?ie[Ae]:Ae;te.copy(N.faceNormals[L]),C.vmult(te,te);var S=oe.testSepAxis(te,N,H,T,R,C);if(S===!1)return!1;S<se&&(se=S,X.copy(te))}for(var fe=0;fe!==oe.uniqueEdges.length;fe++){T.vmult(oe.uniqueEdges[fe],Y);for(var he=0;he!==N.uniqueEdges.length;he++)if(C.vmult(N.uniqueEdges[he],Pe),Y.cross(Pe,de),!de.almostZero()){de.normalize();var me=oe.testSepAxis(de,N,H,T,R,C);if(me===!1)return!1;me<se&&(se=me,X.copy(de))}}return R.vsub(H,ue),ue.dot(X)>0&&X.negate(X),!0};var y=[],x=[];l.prototype.testSepAxis=function(N,H,T,R,C,X){var ne=this;l.project(ne,N,T,R,y),l.project(H,N,C,X,x);var ie=y[0],K=y[1],te=x[0],ue=x[1],Y=ie-ue,Pe=te-K,de=Y<Pe?Y:Pe;return de};var w=new o,A=new o;l.prototype.calculateLocalInertia=function(N,H){this.computeLocalAABB(w,A);var T=A.x-w.x,R=A.y-w.y,C=A.z-w.z;H.x=1/12*N*(2*R*2*R+2*C*2*C),H.y=1/12*N*(2*T*2*T+2*C*2*C),H.z=1/12*N*(2*R*2*R+2*T*2*T)},l.prototype.getPlaneConstantOfFace=function(N){var H=this.faces[N],T=this.faceNormals[N],R=this.vertices[H[0]],C=-T.dot(R);return C};var I=new o,B=new o,E=new o,M=new o,P=new o,z=new o,q=new o,U=new o;l.prototype.clipFaceAgainstHull=function(N,H,T,R,C,X,ne){for(var ie=I,K=B,te=E,ue=M,Y=P,Pe=z,de=q,se=U,oe=this,qe=[],Ae=R,L=qe,S=-1,ee=Number.MAX_VALUE,fe=0;fe<oe.faces.length;fe++){ie.copy(oe.faceNormals[fe]),T.vmult(ie,ie);var he=ie.dot(N);he<ee&&(ee=he,S=fe)}if(!(S<0)){var me=oe.faces[S];me.connectedFaces=[];for(var we=0;we<oe.faces.length;we++)for(var ye=0;ye<oe.faces[we].length;ye++)me.indexOf(oe.faces[we][ye])!==-1&&we!==S&&me.connectedFaces.indexOf(we)===-1&&me.connectedFaces.push(we);Ae.length;for(var Ee=me.length,He=0;He<Ee;He++){var Ze=oe.vertices[me[He]],xe=oe.vertices[me[(He+1)%Ee]];Ze.vsub(xe,K),te.copy(K),T.vmult(te,te),H.vadd(te,te),ue.copy(this.faceNormals[S]),T.vmult(ue,ue),H.vadd(ue,ue),te.cross(ue,Y),Y.negate(Y),Pe.copy(Ze),T.vmult(Pe,Pe),H.vadd(Pe,Pe),-Pe.dot(Y);var je;{var lt=me.connectedFaces[He];de.copy(this.faceNormals[lt]);var nt=this.getPlaneConstantOfFace(lt);se.copy(de),T.vmult(se,se);var je=nt-se.dot(H)}for(this.clipFaceAgainstPlane(Ae,L,se,je);Ae.length;)Ae.shift();for(;L.length;)Ae.push(L.shift())}de.copy(this.faceNormals[S]);var nt=this.getPlaneConstantOfFace(S);se.copy(de),T.vmult(se,se);for(var je=nt-se.dot(H),we=0;we<Ae.length;we++){var Ge=se.dot(Ae[we])+je;if(Ge<=C&&(console.log("clamped: depth="+Ge+" to minDist="+(C+"")),Ge=C),Ge<=X){var Ve=Ae[we];if(Ge<=0){var tt={point:Ve,normal:se,depth:Ge};ne.push(tt)}}}}},l.prototype.clipFaceAgainstPlane=function(N,H,T,R){var C,X,ne=N.length;if(ne<2)return H;var ie=N[N.length-1],K=N[0];C=T.dot(ie)+R;for(var te=0;te<ne;te++){if(K=N[te],X=T.dot(K)+R,C<0)if(X<0){var ue=new o;ue.copy(K),H.push(ue)}else{var ue=new o;ie.lerp(K,C/(C-X),ue),H.push(ue)}else if(X<0){var ue=new o;ie.lerp(K,C/(C-X),ue),H.push(ue),H.push(K)}ie=K,C=X}return H},l.prototype.computeWorldVertices=function(N,H){for(var T=this.vertices.length;this.worldVertices.length<T;)this.worldVertices.push(new o);for(var R=this.vertices,C=this.worldVertices,X=0;X!==T;X++)H.vmult(R[X],C[X]),N.vadd(C[X],C[X]);this.worldVerticesNeedsUpdate=!1},new o,l.prototype.computeLocalAABB=function(N,H){var T=this.vertices.length,R=this.vertices;N.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),H.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var C=0;C<T;C++){var X=R[C];X.x<N.x?N.x=X.x:X.x>H.x&&(H.x=X.x),X.y<N.y?N.y=X.y:X.y>H.y&&(H.y=X.y),X.z<N.z?N.z=X.z:X.z>H.z&&(H.z=X.z)}},l.prototype.computeWorldFaceNormals=function(N){for(var H=this.faceNormals.length;this.worldFaceNormals.length<H;)this.worldFaceNormals.push(new o);for(var T=this.faceNormals,R=this.worldFaceNormals,C=0;C!==H;C++)N.vmult(T[C],R[C]);this.worldFaceNormalsNeedsUpdate=!1},l.prototype.updateBoundingSphereRadius=function(){for(var N=0,H=this.vertices,T=0,R=H.length;T!==R;T++){var C=H[T].norm2();C>N&&(N=C)}this.boundingSphereRadius=Math.sqrt(N)};var V=new o;l.prototype.calculateWorldAABB=function(N,H,T,R){for(var C=this.vertices.length,X=this.vertices,ne,ie,K,te,ue,Y,Pe=0;Pe<C;Pe++){V.copy(X[Pe]),H.vmult(V,V),N.vadd(V,V);var de=V;de.x<ne||ne===void 0?ne=de.x:(de.x>te||te===void 0)&&(te=de.x),de.y<ie||ie===void 0?ie=de.y:(de.y>ue||ue===void 0)&&(ue=de.y),de.z<K||K===void 0?K=de.z:(de.z>Y||Y===void 0)&&(Y=de.z)}T.set(ne,ie,K),R.set(te,ue,Y)},l.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},l.prototype.getAveragePointLocal=function(N){N=N||new o;for(var H=this.vertices.length,T=this.vertices,R=0;R<H;R++)N.vadd(T[R],N);return N.mult(1/H,N),N},l.prototype.transformAllPoints=function(N,H){var T=this.vertices.length,R=this.vertices;if(H){for(var C=0;C<T;C++){var X=R[C];H.vmult(X,X)}for(var C=0;C<this.faceNormals.length;C++){var X=this.faceNormals[C];H.vmult(X,X)}}if(N)for(var C=0;C<T;C++){var X=R[C];X.vadd(N,X)}};var Q=new o,F=new o,D=new o;l.prototype.pointIsInside=function(N){var H=this.vertices.length,T=this.vertices,R=this.faces,C=this.faceNormals,X=null,ne=this.faces.length,ie=Q;this.getAveragePointLocal(ie);for(var K=0;K<ne;K++){this.faces[K].length;var H=C[K],te=T[R[K][0]],ue=F;N.vsub(te,ue);var Y=H.dot(ue),Pe=D;ie.vsub(te,Pe);var de=H.dot(Pe);if(Y<0&&de>0||Y>0&&de<0)return!1}return X?1:-1},new o;var j=new o,W=new o;l.project=function(N,H,T,R,C){var X=N.vertices.length,ne=j,ie=0,K=0,te=W,ue=N.vertices;te.setZero(),a.vectorToLocalFrame(T,R,H,ne),a.pointToLocalFrame(T,R,te,te);var Y=te.dot(ne);K=ie=ue[0].dot(ne);for(var Pe=1;Pe<X;Pe++){var de=ue[Pe].dot(ne);de>ie&&(ie=de),de<K&&(K=de)}if(K-=Y,ie-=Y,K>ie){var se=K;K=ie,ie=se}C[0]=ie,C[1]=K}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(t,n,i){n.exports=l;var r=t("./Shape"),o=t("../math/Vec3");t("../math/Quaternion");var a=t("./ConvexPolyhedron");function l(u,h,c,d){var f=d,v=[],g=[],m=[],p=[],_=[],y=Math.cos,x=Math.sin;v.push(new o(h*y(0),h*x(0),-c*.5)),p.push(0),v.push(new o(u*y(0),u*x(0),c*.5)),_.push(1);for(var w=0;w<f;w++){var A=2*Math.PI/f*(w+1),I=2*Math.PI/f*(w+.5);w<f-1?(v.push(new o(h*y(A),h*x(A),-c*.5)),p.push(2*w+2),v.push(new o(u*y(A),u*x(A),c*.5)),_.push(2*w+3),m.push([2*w+2,2*w+3,2*w+1,2*w])):m.push([0,1,2*w+1,2*w]),(f%2===1||w<f/2)&&g.push(new o(y(I),x(I),0))}m.push(_),g.push(new o(0,0,1));for(var B=[],w=0;w<p.length;w++)B.push(p[p.length-w-1]);m.push(B),this.type=r.types.CONVEXPOLYHEDRON,a.call(this,v,m,g)}l.prototype=new a},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(t,n,i){var r=t("./Shape"),o=t("./ConvexPolyhedron"),a=t("../math/Vec3"),l=t("../utils/Utils");n.exports=u;function u(h,c){c=l.defaults(c,{maxValue:null,minValue:null,elementSize:1}),this.data=h,this.maxValue=c.maxValue,this.minValue=c.minValue,this.elementSize=c.elementSize,c.minValue===null&&this.updateMinValue(),c.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,r.call(this),this.pillarConvex=new o,this.pillarOffset=new a,this.type=r.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}u.prototype=new r,u.prototype.update=function(){this._cachedPillars={}},u.prototype.updateMinValue=function(){for(var h=this.data,c=h[0][0],d=0;d!==h.length;d++)for(var f=0;f!==h[d].length;f++){var v=h[d][f];v<c&&(c=v)}this.minValue=c},u.prototype.updateMaxValue=function(){for(var h=this.data,c=h[0][0],d=0;d!==h.length;d++)for(var f=0;f!==h[d].length;f++){var v=h[d][f];v>c&&(c=v)}this.maxValue=c},u.prototype.setHeightValueAtIndex=function(h,c,d){var f=this.data;f[h][c]=d,this.clearCachedConvexTrianglePillar(h,c,!1),h>0&&(this.clearCachedConvexTrianglePillar(h-1,c,!0),this.clearCachedConvexTrianglePillar(h-1,c,!1)),c>0&&(this.clearCachedConvexTrianglePillar(h,c-1,!0),this.clearCachedConvexTrianglePillar(h,c-1,!1)),c>0&&h>0&&this.clearCachedConvexTrianglePillar(h-1,c-1,!0)},u.prototype.getRectMinMax=function(h,c,d,f,v){v=v||[];for(var g=this.data,m=this.minValue,p=h;p<=d;p++)for(var _=c;_<=f;_++){var y=g[p][_];y>m&&(m=y)}v[0]=this.minValue,v[1]=m},u.prototype.getIndexOfPosition=function(h,c,d,f){var v=this.elementSize,g=this.data,m=Math.floor(h/v),p=Math.floor(c/v);return d[0]=m,d[1]=p,f&&(m<0&&(m=0),p<0&&(p=0),m>=g.length-1&&(m=g.length-1),p>=g[0].length-1&&(p=g[0].length-1)),!(m<0||p<0||m>=g.length-1||p>=g[0].length-1)},u.prototype.getHeightAt=function(h,c,d){var f=[];this.getIndexOfPosition(h,c,f,d);var v=[];return this.getRectMinMax(f[0],f[1]+1,f[0],f[1]+1,v),(v[0]+v[1])/2},u.prototype.getCacheConvexTrianglePillarKey=function(h,c,d){return h+"_"+c+"_"+(d?1:0)},u.prototype.getCachedConvexTrianglePillar=function(h,c,d){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,c,d)]},u.prototype.setCachedConvexTrianglePillar=function(h,c,d,f,v){this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,c,d)]={convex:f,offset:v}},u.prototype.clearCachedConvexTrianglePillar=function(h,c,d){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,c,d)]},u.prototype.getConvexTrianglePillar=function(h,c,d){var f=this.pillarConvex,v=this.pillarOffset;if(this.cacheEnabled){var g=this.getCachedConvexTrianglePillar(h,c,d);if(g){this.pillarConvex=g.convex,this.pillarOffset=g.offset;return}f=new o,v=new a,this.pillarConvex=f,this.pillarOffset=v}var g=this.data,m=this.elementSize,p=f.faces;f.vertices.length=6;for(var _=0;_<6;_++)f.vertices[_]||(f.vertices[_]=new a);p.length=5;for(var _=0;_<5;_++)p[_]||(p[_]=[]);var y=f.vertices,x=(Math.min(g[h][c],g[h+1][c],g[h][c+1],g[h+1][c+1])-this.minValue)/2+this.minValue;d?(v.set((h+.75)*m,(c+.75)*m,x),y[0].set(.25*m,.25*m,g[h+1][c+1]-x),y[1].set(-.75*m,.25*m,g[h][c+1]-x),y[2].set(.25*m,-.75*m,g[h+1][c]-x),y[3].set(.25*m,.25*m,-x-1),y[4].set(-.75*m,.25*m,-x-1),y[5].set(.25*m,-.75*m,-x-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=2,p[2][1]=5,p[2][2]=3,p[2][3]=0,p[3][0]=3,p[3][1]=4,p[3][2]=1,p[3][3]=0,p[4][0]=1,p[4][1]=4,p[4][2]=5,p[4][3]=2):(v.set((h+.25)*m,(c+.25)*m,x),y[0].set(-.25*m,-.25*m,g[h][c]-x),y[1].set(.75*m,-.25*m,g[h+1][c]-x),y[2].set(-.25*m,.75*m,g[h][c+1]-x),y[3].set(-.25*m,-.25*m,-x-1),y[4].set(.75*m,-.25*m,-x-1),y[5].set(-.25*m,.75*m,-x-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=0,p[2][1]=2,p[2][2]=5,p[2][3]=3,p[3][0]=1,p[3][1]=0,p[3][2]=3,p[3][3]=4,p[4][0]=4,p[4][1]=5,p[4][2]=2,p[4][3]=1),f.computeNormals(),f.computeEdges(),f.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(h,c,d,f,v)},u.prototype.calculateLocalInertia=function(h,c){return c=c||new a,c.set(0,0,0),c},u.prototype.volume=function(){return Number.MAX_VALUE},u.prototype.calculateWorldAABB=function(h,c,d,f){d.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),f.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},u.prototype.updateBoundingSphereRadius=function(){var h=this.data,c=this.elementSize;this.boundingSphereRadius=new a(h.length*c,h[0].length*c,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(t,n,i){n.exports=a;var r=t("./Shape"),o=t("../math/Vec3");function a(){r.call(this),this.type=r.types.PARTICLE}a.prototype=new r,a.prototype.constructor=a,a.prototype.calculateLocalInertia=function(l,u){return u=u||new o,u.set(0,0,0),u},a.prototype.volume=function(){return 0},a.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},a.prototype.calculateWorldAABB=function(l,u,h,c){h.copy(l),c.copy(l)}},{"../math/Vec3":30,"./Shape":43}],42:[function(t,n,i){n.exports=a;var r=t("./Shape"),o=t("../math/Vec3");function a(){r.call(this),this.type=r.types.PLANE,this.worldNormal=new o,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}a.prototype=new r,a.prototype.constructor=a,a.prototype.computeWorldNormal=function(u){var h=this.worldNormal;h.set(0,0,1),u.vmult(h,h),this.worldNormalNeedsUpdate=!1},a.prototype.calculateLocalInertia=function(u,h){return h=h||new o,h},a.prototype.volume=function(){return Number.MAX_VALUE};var l=new o;a.prototype.calculateWorldAABB=function(u,h,c,d){l.set(0,0,1),h.vmult(l,l);var f=Number.MAX_VALUE;c.set(-f,-f,-f),d.set(f,f,f),l.x===1&&(d.x=u.x),l.y===1&&(d.y=u.y),l.z===1&&(d.z=u.z),l.x===-1&&(c.x=u.x),l.y===-1&&(c.y=u.y),l.z===-1&&(c.z=u.z)},a.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(t,n,i){n.exports=r;var r=t("./Shape");t("../math/Vec3"),t("../math/Quaternion"),t("../material/Material");function r(){this.id=r.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}r.prototype.constructor=r,r.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},r.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},r.prototype.calculateLocalInertia=function(o,a){throw"calculateLocalInertia() not implemented for shape type "+this.type},r.idCounter=0,r.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(t,n,i){n.exports=a;var r=t("./Shape"),o=t("../math/Vec3");function a(l){if(r.call(this),this.radius=l!==void 0?Number(l):1,this.type=r.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}a.prototype=new r,a.prototype.constructor=a,a.prototype.calculateLocalInertia=function(l,u){u=u||new o;var h=2*l*this.radius*this.radius/5;return u.x=h,u.y=h,u.z=h,u},a.prototype.volume=function(){return 4*Math.PI*this.radius/3},a.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},a.prototype.calculateWorldAABB=function(l,u,h,c){for(var d=this.radius,f=["x","y","z"],v=0;v<f.length;v++){var g=f[v];h[g]=l[g]-d,c[g]=l[g]+d}}},{"../math/Vec3":30,"./Shape":43}],45:[function(t,n,i){n.exports=h;var r=t("./Shape"),o=t("../math/Vec3");t("../math/Quaternion");var a=t("../math/Transform"),l=t("../collision/AABB"),u=t("../utils/Octree");function h(B,E){r.call(this),this.type=r.types.TRIMESH,this.vertices=new Float32Array(B),this.indices=new Int16Array(E),this.normals=new Float32Array(E.length),this.aabb=new l,this.edges=null,this.scale=new o(1,1,1),this.tree=new u,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}h.prototype=new r,h.prototype.constructor=h;var c=new o;h.prototype.updateTree=function(){var B=this.tree;B.reset(),B.aabb.copy(this.aabb);var E=this.scale;B.aabb.lowerBound.x*=1/E.x,B.aabb.lowerBound.y*=1/E.y,B.aabb.lowerBound.z*=1/E.z,B.aabb.upperBound.x*=1/E.x,B.aabb.upperBound.y*=1/E.y,B.aabb.upperBound.z*=1/E.z;for(var M=new l,P=new o,z=new o,q=new o,U=[P,z,q],V=0;V<this.indices.length/3;V++){var Q=V*3;this._getUnscaledVertex(this.indices[Q],P),this._getUnscaledVertex(this.indices[Q+1],z),this._getUnscaledVertex(this.indices[Q+2],q),M.setFromPoints(U),B.insert(M,V)}B.removeEmptyNodes()};var d=new l;h.prototype.getTrianglesInAABB=function(B,E){d.copy(B);var M=this.scale,P=M.x,z=M.y,q=M.z,U=d.lowerBound,V=d.upperBound;return U.x/=P,U.y/=z,U.z/=q,V.x/=P,V.y/=z,V.z/=q,this.tree.aabbQuery(d,E)},h.prototype.setScale=function(B){var E=this.scale.x===this.scale.y===this.scale.z,M=B.x===B.y===B.z;E&&M||this.updateNormals(),this.scale.copy(B),this.updateAABB(),this.updateBoundingSphereRadius()},h.prototype.updateNormals=function(){for(var B=c,E=this.normals,M=0;M<this.indices.length/3;M++){var P=M*3,z=this.indices[P],q=this.indices[P+1],U=this.indices[P+2];this.getVertex(z,p),this.getVertex(q,_),this.getVertex(U,y),h.computeNormal(_,p,y,B),E[P]=B.x,E[P+1]=B.y,E[P+2]=B.z}},h.prototype.updateEdges=function(){for(var B={},E=function(Q,F){var D=z<q?z+"_"+q:q+"_"+z;B[D]=!0},M=0;M<this.indices.length/3;M++){var P=M*3,z=this.indices[P],q=this.indices[P+1];this.indices[P+2],E(),E(),E()}var U=Object.keys(B);this.edges=new Int16Array(U.length*2);for(var M=0;M<U.length;M++){var V=U[M].split("_");this.edges[2*M]=parseInt(V[0],10),this.edges[2*M+1]=parseInt(V[1],10)}},h.prototype.getEdgeVertex=function(B,E,M){var P=this.edges[B*2+(E?1:0)];this.getVertex(P,M)};var f=new o,v=new o;h.prototype.getEdgeVector=function(B,E){var M=f,P=v;this.getEdgeVertex(B,0,M),this.getEdgeVertex(B,1,P),P.vsub(M,E)};var g=new o,m=new o;h.computeNormal=function(B,E,M,P){E.vsub(B,m),M.vsub(E,g),g.cross(m,P),P.isZero()||P.normalize()};var p=new o,_=new o,y=new o;h.prototype.getVertex=function(B,E){var M=this.scale;return this._getUnscaledVertex(B,E),E.x*=M.x,E.y*=M.y,E.z*=M.z,E},h.prototype._getUnscaledVertex=function(B,E){var M=B*3,P=this.vertices;return E.set(P[M],P[M+1],P[M+2])},h.prototype.getWorldVertex=function(B,E,M,P){return this.getVertex(B,P),a.pointToWorldFrame(E,M,P,P),P},h.prototype.getTriangleVertices=function(B,E,M,P){var z=B*3;this.getVertex(this.indices[z],E),this.getVertex(this.indices[z+1],M),this.getVertex(this.indices[z+2],P)},h.prototype.getNormal=function(B,E){var M=B*3;return E.set(this.normals[M],this.normals[M+1],this.normals[M+2])};var x=new l;h.prototype.calculateLocalInertia=function(B,E){this.computeLocalAABB(x);var M=x.upperBound.x-x.lowerBound.x,P=x.upperBound.y-x.lowerBound.y,z=x.upperBound.z-x.lowerBound.z;return E.set(1/12*B*(2*P*2*P+2*z*2*z),1/12*B*(2*M*2*M+2*z*2*z),1/12*B*(2*P*2*P+2*M*2*M))};var w=new o;h.prototype.computeLocalAABB=function(B){var E=B.lowerBound,M=B.upperBound,P=this.vertices.length;this.vertices;var z=w;this.getVertex(0,z),E.copy(z),M.copy(z);for(var q=0;q!==P;q++)this.getVertex(q,z),z.x<E.x?E.x=z.x:z.x>M.x&&(M.x=z.x),z.y<E.y?E.y=z.y:z.y>M.y&&(M.y=z.y),z.z<E.z?E.z=z.z:z.z>M.z&&(M.z=z.z)},h.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},h.prototype.updateBoundingSphereRadius=function(){for(var B=0,E=this.vertices,M=new o,P=0,z=E.length/3;P!==z;P++){this.getVertex(P,M);var q=M.norm2();q>B&&(B=q)}this.boundingSphereRadius=Math.sqrt(B)},new o;var A=new a,I=new l;h.prototype.calculateWorldAABB=function(B,E,M,P){var z=A,q=I;z.position=B,z.quaternion=E,this.aabb.toWorldFrame(z,q),M.copy(q.lowerBound),P.copy(q.upperBound)},h.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},h.createTorus=function(B,E,M,P,z){B=B||1,E=E||.5,M=M||8,P=P||6,z=z||Math.PI*2;for(var q=[],U=[],V=0;V<=M;V++)for(var Q=0;Q<=P;Q++){var F=Q/P*z,D=V/M*Math.PI*2,j=(B+E*Math.cos(D))*Math.cos(F),W=(B+E*Math.cos(D))*Math.sin(F),N=E*Math.sin(D);q.push(j,W,N)}for(var V=1;V<=M;V++)for(var Q=1;Q<=P;Q++){var H=(P+1)*V+Q-1,T=(P+1)*(V-1)+Q-1,R=(P+1)*(V-1)+Q,C=(P+1)*V+Q;U.push(H,T,C),U.push(T,R,C)}return new h(q,U)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(t,n,i){n.exports=o,t("../math/Vec3"),t("../math/Quaternion");var r=t("./Solver");function o(){r.call(this),this.iterations=10,this.tolerance=1e-7}o.prototype=new r;var a=[],l=[],u=[];o.prototype.solve=function(h,c){var d=0,f=this.iterations,v=this.tolerance*this.tolerance,g=this.equations,m=g.length,p=c.bodies,_=p.length,y=h,x,w,A,I,B,E;if(m!==0)for(var M=0;M!==_;M++)p[M].updateSolveMassProperties();var P=l,z=u,q=a;P.length=m,z.length=m,q.length=m;for(var M=0;M!==m;M++){var U=g[M];q[M]=0,z[M]=U.computeB(y),P[M]=1/U.computeC()}if(m!==0){for(var M=0;M!==_;M++){var V=p[M],Q=V.vlambda,F=V.wlambda;Q.set(0,0,0),F&&F.set(0,0,0)}for(d=0;d!==f;d++){I=0;for(var D=0;D!==m;D++){var U=g[D];x=z[D],w=P[D],E=q[D],B=U.computeGWlambda(),A=w*(x-B-U.eps*E),E+A<U.minForce?A=U.minForce-E:E+A>U.maxForce&&(A=U.maxForce-E),q[D]+=A,I+=A>0?A:-A,U.addToWlambda(A)}if(I*I<v)break}for(var M=0;M!==_;M++){var V=p[M],j=V.velocity,W=V.angularVelocity;j.vadd(V.vlambda,j),W&&W.vadd(V.wlambda,W)}}return d}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(t,n,i){n.exports=r;function r(){this.equations=[]}r.prototype.solve=function(o,a){return 0},r.prototype.addEquation=function(o){o.enabled&&this.equations.push(o)},r.prototype.removeEquation=function(o){var a=this.equations,l=a.indexOf(o);l!==-1&&a.splice(l,1)},r.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(t,n,i){n.exports=a,t("../math/Vec3"),t("../math/Quaternion");var r=t("./Solver"),o=t("../objects/Body");function a(p){for(r.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=p,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}a.prototype=new r;var l=[],u=[],h={bodies:[]},c=o.STATIC;function d(p){for(var _=p.length,y=0;y!==_;y++){var x=p[y];if(!x.visited&&!(x.body.type&c))return x}return!1}var f=[];function v(p,_,y,x){for(f.push(p),p.visited=!0,_(p,y,x);f.length;)for(var w=f.pop(),A;A=d(w.children);)A.visited=!0,_(A,y,x),f.push(A)}function g(p,_,y){_.push(p.body);for(var x=p.eqs.length,w=0;w!==x;w++){var A=p.eqs[w];y.indexOf(A)===-1&&y.push(A)}}a.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},a.prototype.solve=function(p,_){for(var y=l,x=this.nodePool,w=_.bodies,A=this.equations,I=A.length,B=w.length,E=this.subsolver;x.length<B;)x.push(this.createNode());y.length=B;for(var M=0;M<B;M++)y[M]=x[M];for(var M=0;M!==B;M++){var P=y[M];P.body=w[M],P.children.length=0,P.eqs.length=0,P.visited=!1}for(var z=0;z!==I;z++){var q=A[z],M=w.indexOf(q.bi),U=w.indexOf(q.bj),V=y[M],Q=y[U];V.children.push(Q),V.eqs.push(q),Q.children.push(V),Q.eqs.push(q)}var F,D=0,j=u;E.tolerance=this.tolerance,E.iterations=this.iterations;for(var W=h;F=d(y);){j.length=0,W.bodies.length=0,v(F,g,W.bodies,j);var N=j.length;j=j.sort(m);for(var M=0;M!==N;M++)E.addEquation(j[M]);E.solve(p,W),E.removeAllEquations(),D++}return D};function m(p,_){return _.id-p.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(t,n,i){var r=function(){};n.exports=r,r.prototype={constructor:r,addEventListener:function(o,a){this._listeners===void 0&&(this._listeners={});var l=this._listeners;return l[o]===void 0&&(l[o]=[]),l[o].indexOf(a)===-1&&l[o].push(a),this},hasEventListener:function(o,a){if(this._listeners===void 0)return!1;var l=this._listeners;return l[o]!==void 0&&l[o].indexOf(a)!==-1},removeEventListener:function(o,a){if(this._listeners===void 0)return this;var l=this._listeners;if(l[o]===void 0)return this;var u=l[o].indexOf(a);return u!==-1&&l[o].splice(u,1),this},dispatchEvent:function(o){if(this._listeners===void 0)return this;var a=this._listeners,l=a[o.type];if(l!==void 0){o.target=this;for(var u=0,h=l.length;u<h;u++)l[u].call(this,o)}return this}}},{}],50:[function(t,n,i){var r=t("../collision/AABB"),o=t("../math/Vec3");n.exports=l;function a(c){c=c||{},this.root=c.root||null,this.aabb=c.aabb?c.aabb.clone():new r,this.data=[],this.children=[]}function l(c,d){d=d||{},d.root=null,d.aabb=c,a.call(this,d),this.maxDepth=typeof d.maxDepth<"u"?d.maxDepth:8}l.prototype=new a,a.prototype.reset=function(c,d){this.children.length=this.data.length=0},a.prototype.insert=function(c,d,f){var v=this.data;if(f=f||0,!this.aabb.contains(c))return!1;var g=this.children;if(f<(this.maxDepth||this.root.maxDepth)){var m=!1;g.length||(this.subdivide(),m=!0);for(var p=0;p!==8;p++)if(g[p].insert(c,d,f+1))return!0;m&&(g.length=0)}return v.push(d),!0};var u=new o;a.prototype.subdivide=function(){var c=this.aabb,d=c.lowerBound,f=c.upperBound,v=this.children;v.push(new a({aabb:new r({lowerBound:new o(0,0,0)})}),new a({aabb:new r({lowerBound:new o(1,0,0)})}),new a({aabb:new r({lowerBound:new o(1,1,0)})}),new a({aabb:new r({lowerBound:new o(1,1,1)})}),new a({aabb:new r({lowerBound:new o(0,1,1)})}),new a({aabb:new r({lowerBound:new o(0,0,1)})}),new a({aabb:new r({lowerBound:new o(1,0,1)})}),new a({aabb:new r({lowerBound:new o(0,1,0)})})),f.vsub(d,u),u.scale(.5,u);for(var g=this.root||this,m=0;m!==8;m++){var p=v[m];p.root=g;var _=p.aabb.lowerBound;_.x*=u.x,_.y*=u.y,_.z*=u.z,_.vadd(d,_),_.vadd(u,p.aabb.upperBound)}},a.prototype.aabbQuery=function(c,d){this.data,this.children;for(var f=[this];f.length;){var v=f.pop();v.aabb.overlaps(c)&&Array.prototype.push.apply(d,v.data),Array.prototype.push.apply(f,v.children)}return d};var h=new r;a.prototype.rayQuery=function(c,d,f){return c.getAABB(h),h.toLocalFrame(d,h),this.aabbQuery(h,f),f},a.prototype.removeEmptyNodes=function(){for(var c=[this];c.length;){for(var d=c.pop(),f=d.children.length-1;f>=0;f--)d.children[f].data.length||d.children.splice(f,1);Array.prototype.push.apply(c,d.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(t,n,i){n.exports=r;function r(){this.objects=[],this.type=Object}r.prototype.release=function(){for(var o=arguments.length,a=0;a!==o;a++)this.objects.push(arguments[a])},r.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},r.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(t,n,i){n.exports=r;function r(){this.data={keys:[]}}r.prototype.get=function(o,a){if(o>a){var l=a;a=o,o=l}return this.data[o+"-"+a]},r.prototype.set=function(o,a,l){if(o>a){var u=a;a=o,o=u}var h=o+"-"+a;this.get(o,a)||this.data.keys.push(h),this.data[h]=l},r.prototype.reset=function(){for(var o=this.data,a=o.keys;a.length>0;){var l=a.pop();delete o[l]}}},{}],53:[function(t,n,i){function r(){}n.exports=r,r.defaults=function(o,a){o=o||{};for(var l in a)l in o||(o[l]=a[l]);return o}},{}],54:[function(t,n,i){n.exports=a;var r=t("../math/Vec3"),o=t("./Pool");function a(){o.call(this),this.type=r}a.prototype=new o,a.prototype.constructObject=function(){return new r}},{"../math/Vec3":30,"./Pool":51}],55:[function(t,n,i){n.exports=v;var r=t("../collision/AABB"),o=t("../shapes/Shape"),a=t("../collision/Ray"),l=t("../math/Vec3"),u=t("../math/Transform");t("../shapes/ConvexPolyhedron");var h=t("../math/Quaternion");t("../solver/Solver");var c=t("../utils/Vec3Pool"),d=t("../equations/ContactEquation"),f=t("../equations/FrictionEquation");function v(le){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new c,this.world=le,this.currentContactMaterial=null,this.enableFrictionReduction=!1}v.prototype.createContactEquation=function(le,ce,pe,ve,et,ze){var Se;this.contactPointPool.length?(Se=this.contactPointPool.pop(),Se.bi=le,Se.bj=ce):Se=new d(le,ce),Se.enabled=le.collisionResponse&&ce.collisionResponse&&pe.collisionResponse&&ve.collisionResponse;var De=this.currentContactMaterial;Se.restitution=De.restitution,Se.setSpookParams(De.contactEquationStiffness,De.contactEquationRelaxation,this.world.dt);var re=pe.material||le.material,Ce=ve.material||ce.material;return re&&Ce&&re.restitution>=0&&Ce.restitution>=0&&(Se.restitution=re.restitution*Ce.restitution),Se.si=et||pe,Se.sj=ze||ve,Se},v.prototype.createFrictionEquationsFromContact=function(le,ce){var pe=le.bi,ve=le.bj,et=le.si,ze=le.sj,Se=this.world,De=this.currentContactMaterial,re=De.friction,Ce=et.material||pe.material,Ue=ze.material||ve.material;if(Ce&&Ue&&Ce.friction>=0&&Ue.friction>=0&&(re=Ce.friction*Ue.friction),re>0){var ke=re*Se.gravity.length(),Ie=pe.invMass+ve.invMass;Ie>0&&(Ie=1/Ie);var Me=this.frictionEquationPool,b=Me.length?Me.pop():new f(pe,ve,ke*Ie),k=Me.length?Me.pop():new f(pe,ve,ke*Ie);return b.bi=k.bi=pe,b.bj=k.bj=ve,b.minForce=k.minForce=-ke*Ie,b.maxForce=k.maxForce=ke*Ie,b.ri.copy(le.ri),b.rj.copy(le.rj),k.ri.copy(le.ri),k.rj.copy(le.rj),le.ni.tangents(b.t,k.t),b.setSpookParams(De.frictionEquationStiffness,De.frictionEquationRelaxation,Se.dt),k.setSpookParams(De.frictionEquationStiffness,De.frictionEquationRelaxation,Se.dt),b.enabled=k.enabled=le.enabled,ce.push(b,k),!0}return!1};var g=new l,m=new l,p=new l;v.prototype.createFrictionFromAverage=function(le){var ce=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(ce,this.frictionResult)||le===1)){var pe=this.frictionResult[this.frictionResult.length-2],ve=this.frictionResult[this.frictionResult.length-1];g.setZero(),m.setZero(),p.setZero();var et=ce.bi;ce.bj;for(var ze=0;ze!==le;ze++)ce=this.result[this.result.length-1-ze],ce.bodyA!==et?(g.vadd(ce.ni,g),m.vadd(ce.ri,m),p.vadd(ce.rj,p)):(g.vsub(ce.ni,g),m.vadd(ce.rj,m),p.vadd(ce.ri,p));var Se=1/le;m.scale(Se,pe.ri),p.scale(Se,pe.rj),ve.ri.copy(pe.ri),ve.rj.copy(pe.rj),g.normalize(),g.tangents(pe.t,ve.t)}};var _=new l,y=new l,x=new h,w=new h;v.prototype.getContacts=function(le,ce,pe,ve,et,ze,Se){this.contactPointPool=et,this.frictionEquationPool=Se,this.result=ve,this.frictionResult=ze;for(var De=x,re=w,Ce=_,Ue=y,ke=0,Ie=le.length;ke!==Ie;ke++){var Me=le[ke],b=ce[ke],k=null;Me.material&&b.material&&(k=pe.getContactMaterial(Me.material,b.material)||null);for(var Z=0;Z<Me.shapes.length;Z++){Me.quaternion.mult(Me.shapeOrientations[Z],De),Me.quaternion.vmult(Me.shapeOffsets[Z],Ce),Ce.vadd(Me.position,Ce);for(var O=Me.shapes[Z],$=0;$<b.shapes.length;$++){b.quaternion.mult(b.shapeOrientations[$],re),b.quaternion.vmult(b.shapeOffsets[$],Ue),Ue.vadd(b.position,Ue);var _e=b.shapes[$];if(!(Ce.distanceTo(Ue)>O.boundingSphereRadius+_e.boundingSphereRadius)){var Oe=null;O.material&&_e.material&&(Oe=pe.getContactMaterial(O.material,_e.material)||null),this.currentContactMaterial=Oe||k||pe.defaultContactMaterial;var Le=this[O.type|_e.type];Le&&(O.type<_e.type?Le.call(this,O,_e,Ce,Ue,De,re,Me,b,O,_e):Le.call(this,_e,O,Ue,Ce,re,De,b,Me,O,_e))}}}}},v.prototype[o.types.BOX|o.types.BOX]=v.prototype.boxBox=function(le,ce,pe,ve,et,ze,Se,De){le.convexPolyhedronRepresentation.material=le.material,ce.convexPolyhedronRepresentation.material=ce.material,le.convexPolyhedronRepresentation.collisionResponse=le.collisionResponse,ce.convexPolyhedronRepresentation.collisionResponse=ce.collisionResponse,this.convexConvex(le.convexPolyhedronRepresentation,ce.convexPolyhedronRepresentation,pe,ve,et,ze,Se,De,le,ce)},v.prototype[o.types.BOX|o.types.CONVEXPOLYHEDRON]=v.prototype.boxConvex=function(le,ce,pe,ve,et,ze,Se,De){le.convexPolyhedronRepresentation.material=le.material,le.convexPolyhedronRepresentation.collisionResponse=le.collisionResponse,this.convexConvex(le.convexPolyhedronRepresentation,ce,pe,ve,et,ze,Se,De,le,ce)},v.prototype[o.types.BOX|o.types.PARTICLE]=v.prototype.boxParticle=function(le,ce,pe,ve,et,ze,Se,De){le.convexPolyhedronRepresentation.material=le.material,le.convexPolyhedronRepresentation.collisionResponse=le.collisionResponse,this.convexParticle(le.convexPolyhedronRepresentation,ce,pe,ve,et,ze,Se,De,le,ce)},v.prototype[o.types.SPHERE]=v.prototype.sphereSphere=function(le,ce,pe,ve,et,ze,Se,De){var re=this.createContactEquation(Se,De,le,ce);ve.vsub(pe,re.ni),re.ni.normalize(),re.ri.copy(re.ni),re.rj.copy(re.ni),re.ri.mult(le.radius,re.ri),re.rj.mult(-ce.radius,re.rj),re.ri.vadd(pe,re.ri),re.ri.vsub(Se.position,re.ri),re.rj.vadd(ve,re.rj),re.rj.vsub(De.position,re.rj),this.result.push(re),this.createFrictionEquationsFromContact(re,this.frictionResult)};var A=new l,I=new l,B=new l;v.prototype[o.types.PLANE|o.types.TRIMESH]=v.prototype.planeTrimesh=function(le,ce,pe,ve,et,ze,Se,De){var re=new l,Ce=A;Ce.set(0,0,1),et.vmult(Ce,Ce);for(var Ue=0;Ue<ce.vertices.length/3;Ue++){ce.getVertex(Ue,re);var ke=new l;ke.copy(re),u.pointToWorldFrame(ve,ze,ke,re);var Ie=I;re.vsub(pe,Ie);var Me=Ce.dot(Ie);if(Me<=0){var b=this.createContactEquation(Se,De,le,ce);b.ni.copy(Ce);var k=B;Ce.scale(Ie.dot(Ce),k),re.vsub(k,k),b.ri.copy(k),b.ri.vsub(Se.position,b.ri),b.rj.copy(re),b.rj.vsub(De.position,b.rj),this.result.push(b),this.createFrictionEquationsFromContact(b,this.frictionResult)}}};var E=new l,M=new l;new l;var P=new l,z=new l,q=new l,U=new l,V=new l,Q=new l,F=new l,D=new l,j=new l,W=new l,N=new l,H=new r,T=[];v.prototype[o.types.SPHERE|o.types.TRIMESH]=v.prototype.sphereTrimesh=function(le,ce,pe,ve,et,ze,Se,De){var re=q,Ce=U,Ue=V,ke=Q,Ie=F,Me=D,b=H,k=z,Z=M,O=T;u.pointToLocalFrame(ve,ze,pe,Ie);var $=le.radius;b.lowerBound.set(Ie.x-$,Ie.y-$,Ie.z-$),b.upperBound.set(Ie.x+$,Ie.y+$,Ie.z+$),ce.getTrianglesInAABB(b,O);for(var _e=P,Oe=le.radius*le.radius,Le=0;Le<O.length;Le++)for(var Fe=0;Fe<3;Fe++)if(ce.getVertex(ce.indices[O[Le]*3+Fe],_e),_e.vsub(Ie,Z),Z.norm2()<=Oe){k.copy(_e),u.pointToWorldFrame(ve,ze,k,_e),_e.vsub(pe,Z);var be=this.createContactEquation(Se,De,le,ce);be.ni.copy(Z),be.ni.normalize(),be.ri.copy(be.ni),be.ri.scale(le.radius,be.ri),be.ri.vadd(pe,be.ri),be.ri.vsub(Se.position,be.ri),be.rj.copy(_e),be.rj.vsub(De.position,be.rj),this.result.push(be),this.createFrictionEquationsFromContact(be,this.frictionResult)}for(var Le=0;Le<O.length;Le++)for(var Fe=0;Fe<3;Fe++){ce.getVertex(ce.indices[O[Le]*3+Fe],re),ce.getVertex(ce.indices[O[Le]*3+(Fe+1)%3],Ce),Ce.vsub(re,Ue),Ie.vsub(Ce,Me);var Ke=Me.dot(Ue);Ie.vsub(re,Me);var Je=Me.dot(Ue);if(Je>0&&Ke<0){Ie.vsub(re,Me),ke.copy(Ue),ke.normalize(),Je=Me.dot(ke),ke.scale(Je,Me),Me.vadd(re,Me);var dt=Me.distanceTo(Ie);if(dt<le.radius){var be=this.createContactEquation(Se,De,le,ce);Me.vsub(Ie,be.ni),be.ni.normalize(),be.ni.scale(le.radius,be.ri),u.pointToWorldFrame(ve,ze,Me,Me),Me.vsub(De.position,be.rj),u.vectorToWorldFrame(ze,be.ni,be.ni),u.vectorToWorldFrame(ze,be.ri,be.ri),this.result.push(be),this.createFrictionEquationsFromContact(be,this.frictionResult)}}}for(var Rt=j,_t=W,ut=N,xt=E,Le=0,We=O.length;Le!==We;Le++){ce.getTriangleVertices(O[Le],Rt,_t,ut),ce.getNormal(O[Le],xt),Ie.vsub(Rt,Me);var dt=Me.dot(xt);if(xt.scale(dt,Me),Ie.vsub(Me,Me),dt=Me.distanceTo(Ie),a.pointInTriangle(Me,Rt,_t,ut)&&dt<le.radius){var be=this.createContactEquation(Se,De,le,ce);Me.vsub(Ie,be.ni),be.ni.normalize(),be.ni.scale(le.radius,be.ri),u.pointToWorldFrame(ve,ze,Me,Me),Me.vsub(De.position,be.rj),u.vectorToWorldFrame(ze,be.ni,be.ni),u.vectorToWorldFrame(ze,be.ri,be.ri),this.result.push(be),this.createFrictionEquationsFromContact(be,this.frictionResult)}}O.length=0};var R=new l,C=new l;v.prototype[o.types.SPHERE|o.types.PLANE]=v.prototype.spherePlane=function(le,ce,pe,ve,et,ze,Se,De){var re=this.createContactEquation(Se,De,le,ce);if(re.ni.set(0,0,1),ze.vmult(re.ni,re.ni),re.ni.negate(re.ni),re.ni.normalize(),re.ni.mult(le.radius,re.ri),pe.vsub(ve,R),re.ni.mult(re.ni.dot(R),C),R.vsub(C,re.rj),-R.dot(re.ni)<=le.radius){var Ce=re.ri,Ue=re.rj;Ce.vadd(pe,Ce),Ce.vsub(Se.position,Ce),Ue.vadd(ve,Ue),Ue.vsub(De.position,Ue),this.result.push(re),this.createFrictionEquationsFromContact(re,this.frictionResult)}};var X=new l,ne=new l,ie=new l;function K(le,ce,pe){for(var ve=null,et=le.length,ze=0;ze!==et;ze++){var Se=le[ze],De=X;le[(ze+1)%et].vsub(Se,De);var re=ne;De.cross(ce,re);var Ce=ie;pe.vsub(Se,Ce);var Ue=re.dot(Ce);if(ve===null||Ue>0&&ve===!0||Ue<=0&&ve===!1){ve===null&&(ve=Ue>0);continue}else return!1}return!0}var te=new l,ue=new l,Y=new l,Pe=new l,de=[new l,new l,new l,new l,new l,new l],se=new l,oe=new l,qe=new l,Ae=new l;v.prototype[o.types.SPHERE|o.types.BOX]=v.prototype.sphereBox=function(le,ce,pe,ve,et,ze,Se,De){var re=this.v3pool,Ce=de;pe.vsub(ve,te),ce.getSideNormals(Ce,ze);for(var Ue=le.radius,ke=!1,Ie=oe,Me=qe,b=Ae,k=null,Z=0,O=0,$=0,_e=null,Oe=0,Le=Ce.length;Oe!==Le&&ke===!1;Oe++){var Fe=ue;Fe.copy(Ce[Oe]);var be=Fe.norm();Fe.normalize();var Ke=te.dot(Fe);if(Ke<be+Ue&&Ke>0){var Je=Y,dt=Pe;Je.copy(Ce[(Oe+1)%3]),dt.copy(Ce[(Oe+2)%3]);var Rt=Je.norm(),_t=dt.norm();Je.normalize(),dt.normalize();var ut=te.dot(Je),xt=te.dot(dt);if(ut<Rt&&ut>-Rt&&xt<_t&&xt>-_t){var Lt=Math.abs(Ke-be-Ue);(_e===null||Lt<_e)&&(_e=Lt,O=ut,$=xt,k=be,Ie.copy(Fe),Me.copy(Je),b.copy(dt),Z++)}}}if(Z){ke=!0;var Xe=this.createContactEquation(Se,De,le,ce);Ie.mult(-Ue,Xe.ri),Xe.ni.copy(Ie),Xe.ni.negate(Xe.ni),Ie.mult(k,Ie),Me.mult(O,Me),Ie.vadd(Me,Ie),b.mult($,b),Ie.vadd(b,Xe.rj),Xe.ri.vadd(pe,Xe.ri),Xe.ri.vsub(Se.position,Xe.ri),Xe.rj.vadd(ve,Xe.rj),Xe.rj.vsub(De.position,Xe.rj),this.result.push(Xe),this.createFrictionEquationsFromContact(Xe,this.frictionResult)}for(var We=re.get(),en=se,ht=0;ht!==2&&!ke;ht++)for(var Tt=0;Tt!==2&&!ke;Tt++)for(var Nt=0;Nt!==2&&!ke;Nt++)if(We.set(0,0,0),ht?We.vadd(Ce[0],We):We.vsub(Ce[0],We),Tt?We.vadd(Ce[1],We):We.vsub(Ce[1],We),Nt?We.vadd(Ce[2],We):We.vsub(Ce[2],We),ve.vadd(We,en),en.vsub(pe,en),en.norm2()<Ue*Ue){ke=!0;var Xe=this.createContactEquation(Se,De,le,ce);Xe.ri.copy(en),Xe.ri.normalize(),Xe.ni.copy(Xe.ri),Xe.ri.mult(Ue,Xe.ri),Xe.rj.copy(We),Xe.ri.vadd(pe,Xe.ri),Xe.ri.vsub(Se.position,Xe.ri),Xe.rj.vadd(ve,Xe.rj),Xe.rj.vsub(De.position,Xe.rj),this.result.push(Xe),this.createFrictionEquationsFromContact(Xe,this.frictionResult)}re.release(We),We=null;for(var Ot=re.get(),tn=re.get(),Xe=re.get(),It=re.get(),Lt=re.get(),Dt=Ce.length,ht=0;ht!==Dt&&!ke;ht++)for(var Tt=0;Tt!==Dt&&!ke;Tt++)if(ht%3!==Tt%3){Ce[Tt].cross(Ce[ht],Ot),Ot.normalize(),Ce[ht].vadd(Ce[Tt],tn),Xe.copy(pe),Xe.vsub(tn,Xe),Xe.vsub(ve,Xe);var dn=Xe.dot(Ot);Ot.mult(dn,It);for(var Nt=0;Nt===ht%3||Nt===Tt%3;)Nt++;Lt.copy(pe),Lt.vsub(It,Lt),Lt.vsub(tn,Lt),Lt.vsub(ve,Lt);var Ns=Math.abs(dn),Fr=Lt.norm();if(Ns<Ce[Nt].norm()&&Fr<Ue){ke=!0;var At=this.createContactEquation(Se,De,le,ce);tn.vadd(It,At.rj),At.rj.copy(At.rj),Lt.negate(At.ni),At.ni.normalize(),At.ri.copy(At.rj),At.ri.vadd(ve,At.ri),At.ri.vsub(pe,At.ri),At.ri.normalize(),At.ri.mult(Ue,At.ri),At.ri.vadd(pe,At.ri),At.ri.vsub(Se.position,At.ri),At.rj.vadd(ve,At.rj),At.rj.vsub(De.position,At.rj),this.result.push(At),this.createFrictionEquationsFromContact(At,this.frictionResult)}}re.release(Ot,tn,Xe,It,Lt)};var L=new l,S=new l,ee=new l,fe=new l,he=new l,me=new l,we=new l,ye=new l,Ee=new l,He=new l;v.prototype[o.types.SPHERE|o.types.CONVEXPOLYHEDRON]=v.prototype.sphereConvex=function(le,ce,pe,ve,et,ze,Se,De){var re=this.v3pool;pe.vsub(ve,L);for(var Ce=ce.faceNormals,Ue=ce.faces,ke=ce.vertices,Ie=le.radius,Me=0;Me!==ke.length;Me++){var b=ke[Me],k=he;ze.vmult(b,k),ve.vadd(k,k);var Z=fe;if(k.vsub(pe,Z),Z.norm2()<Ie*Ie){$=!0;var O=this.createContactEquation(Se,De,le,ce);O.ri.copy(Z),O.ri.normalize(),O.ni.copy(O.ri),O.ri.mult(Ie,O.ri),k.vsub(ve,O.rj),O.ri.vadd(pe,O.ri),O.ri.vsub(Se.position,O.ri),O.rj.vadd(ve,O.rj),O.rj.vsub(De.position,O.rj),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult);return}}for(var $=!1,Me=0,_e=Ue.length;Me!==_e&&$===!1;Me++){var Oe=Ce[Me],Le=Ue[Me],Fe=me;ze.vmult(Oe,Fe);var be=we;ze.vmult(ke[Le[0]],be),be.vadd(ve,be);var Ke=ye;Fe.mult(-Ie,Ke),pe.vadd(Ke,Ke);var Je=Ee;Ke.vsub(be,Je);var dt=Je.dot(Fe),Rt=He;if(pe.vsub(be,Rt),dt<0&&Rt.dot(Fe)>0){for(var _t=[],ut=0,xt=Le.length;ut!==xt;ut++){var We=re.get();ze.vmult(ke[Le[ut]],We),ve.vadd(We,We),_t.push(We)}if(K(_t,Fe,pe)){$=!0;var O=this.createContactEquation(Se,De,le,ce);Fe.mult(-Ie,O.ri),Fe.negate(O.ni);var en=re.get();Fe.mult(-dt,en);var ht=re.get();Fe.mult(-Ie,ht),pe.vsub(ve,O.rj),O.rj.vadd(ht,O.rj),O.rj.vadd(en,O.rj),O.rj.vadd(ve,O.rj),O.rj.vsub(De.position,O.rj),O.ri.vadd(pe,O.ri),O.ri.vsub(Se.position,O.ri),re.release(en),re.release(ht),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult);for(var ut=0,Tt=_t.length;ut!==Tt;ut++)re.release(_t[ut]);return}else for(var ut=0;ut!==Le.length;ut++){var Nt=re.get(),Ot=re.get();ze.vmult(ke[Le[(ut+1)%Le.length]],Nt),ze.vmult(ke[Le[(ut+2)%Le.length]],Ot),ve.vadd(Nt,Nt),ve.vadd(Ot,Ot);var tn=S;Ot.vsub(Nt,tn);var Xe=ee;tn.unit(Xe);var It=re.get(),Lt=re.get();pe.vsub(Nt,Lt);var Dt=Lt.dot(Xe);Xe.mult(Dt,It),It.vadd(Nt,It);var dn=re.get();if(It.vsub(pe,dn),Dt>0&&Dt*Dt<tn.norm2()&&dn.norm2()<Ie*Ie){var O=this.createContactEquation(Se,De,le,ce);It.vsub(ve,O.rj),It.vsub(pe,O.ni),O.ni.normalize(),O.ni.mult(Ie,O.ri),O.rj.vadd(ve,O.rj),O.rj.vsub(De.position,O.rj),O.ri.vadd(pe,O.ri),O.ri.vsub(Se.position,O.ri),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult);for(var ut=0,Tt=_t.length;ut!==Tt;ut++)re.release(_t[ut]);re.release(Nt),re.release(Ot),re.release(It),re.release(dn),re.release(Lt);return}re.release(Nt),re.release(Ot),re.release(It),re.release(dn),re.release(Lt)}for(var ut=0,Tt=_t.length;ut!==Tt;ut++)re.release(_t[ut])}}},new l,new l,v.prototype[o.types.PLANE|o.types.BOX]=v.prototype.planeBox=function(le,ce,pe,ve,et,ze,Se,De){ce.convexPolyhedronRepresentation.material=ce.material,ce.convexPolyhedronRepresentation.collisionResponse=ce.collisionResponse,this.planeConvex(le,ce.convexPolyhedronRepresentation,pe,ve,et,ze,Se,De)};var Ze=new l,xe=new l,lt=new l,nt=new l;v.prototype[o.types.PLANE|o.types.CONVEXPOLYHEDRON]=v.prototype.planeConvex=function(le,ce,pe,ve,et,ze,Se,De){var re=Ze,Ce=xe;Ce.set(0,0,1),et.vmult(Ce,Ce);for(var Ue=0,ke=lt,Ie=0;Ie!==ce.vertices.length;Ie++){re.copy(ce.vertices[Ie]),ze.vmult(re,re),ve.vadd(re,re),re.vsub(pe,ke);var Me=Ce.dot(ke);if(Me<=0){var b=this.createContactEquation(Se,De,le,ce),k=nt;Ce.mult(Ce.dot(ke),k),re.vsub(k,k),k.vsub(pe,b.ri),b.ni.copy(Ce),re.vsub(ve,b.rj),b.ri.vadd(pe,b.ri),b.ri.vsub(Se.position,b.ri),b.rj.vadd(ve,b.rj),b.rj.vsub(De.position,b.rj),this.result.push(b),Ue++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(b,this.frictionResult)}}this.enableFrictionReduction&&Ue&&this.createFrictionFromAverage(Ue)};var je=new l,Ge=new l;v.prototype[o.types.CONVEXPOLYHEDRON]=v.prototype.convexConvex=function(le,ce,pe,ve,et,ze,Se,De,re,Ce,Ue,ke){var Ie=je;if(!(pe.distanceTo(ve)>le.boundingSphereRadius+ce.boundingSphereRadius)&&le.findSeparatingAxis(ce,pe,et,ve,ze,Ie,Ue,ke)){var Me=[],b=Ge;le.clipAgainstHull(pe,et,ce,ve,ze,Ie,-100,100,Me);for(var k=0,Z=0;Z!==Me.length;Z++){var O=this.createContactEquation(Se,De,le,ce,re,Ce),$=O.ri,_e=O.rj;Ie.negate(O.ni),Me[Z].normal.negate(b),b.mult(Me[Z].depth,b),Me[Z].point.vadd(b,$),_e.copy(Me[Z].point),$.vsub(pe,$),_e.vsub(ve,_e),$.vadd(pe,$),$.vsub(Se.position,$),_e.vadd(ve,_e),_e.vsub(De.position,_e),this.result.push(O),k++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(O,this.frictionResult)}this.enableFrictionReduction&&k&&this.createFrictionFromAverage(k)}};var Ve=new l,tt=new l,rt=new l;v.prototype[o.types.PLANE|o.types.PARTICLE]=v.prototype.planeParticle=function(le,ce,pe,ve,et,ze,Se,De){var re=Ve;re.set(0,0,1),Se.quaternion.vmult(re,re);var Ce=tt;ve.vsub(Se.position,Ce);var Ue=re.dot(Ce);if(Ue<=0){var ke=this.createContactEquation(De,Se,ce,le);ke.ni.copy(re),ke.ni.negate(ke.ni),ke.ri.set(0,0,0);var Ie=rt;re.mult(re.dot(ve),Ie),ve.vsub(Ie,Ie),ke.rj.copy(Ie),this.result.push(ke),this.createFrictionEquationsFromContact(ke,this.frictionResult)}};var mt=new l;v.prototype[o.types.PARTICLE|o.types.SPHERE]=v.prototype.sphereParticle=function(le,ce,pe,ve,et,ze,Se,De){var re=mt;re.set(0,0,1),ve.vsub(pe,re);var Ce=re.norm2();if(Ce<=le.radius*le.radius){var Ue=this.createContactEquation(De,Se,ce,le);re.normalize(),Ue.rj.copy(re),Ue.rj.mult(le.radius,Ue.rj),Ue.ni.copy(re),Ue.ni.negate(Ue.ni),Ue.ri.set(0,0,0),this.result.push(Ue),this.createFrictionEquationsFromContact(Ue,this.frictionResult)}};var Qe=new h,Te=new l;new l;var G=new l,Re=new l,Ne=new l;v.prototype[o.types.PARTICLE|o.types.CONVEXPOLYHEDRON]=v.prototype.convexParticle=function(le,ce,pe,ve,et,ze,Se,De){var re=-1,Ce=G,Ue=Ne,ke=null,Ie=Te;if(Ie.copy(ve),Ie.vsub(pe,Ie),et.conjugate(Qe),Qe.vmult(Ie,Ie),le.pointIsInside(Ie)){le.worldVerticesNeedsUpdate&&le.computeWorldVertices(pe,et),le.worldFaceNormalsNeedsUpdate&&le.computeWorldFaceNormals(et);for(var Me=0,b=le.faces.length;Me!==b;Me++){var k=[le.worldVertices[le.faces[Me][0]]],Z=le.worldFaceNormals[Me];ve.vsub(k[0],Re);var O=-Z.dot(Re);(ke===null||Math.abs(O)<Math.abs(ke))&&(ke=O,re=Me,Ce.copy(Z))}if(re!==-1){var $=this.createContactEquation(De,Se,ce,le);Ce.mult(ke,Ue),Ue.vadd(ve,Ue),Ue.vsub(pe,Ue),$.rj.copy(Ue),Ce.negate($.ni),$.ri.set(0,0,0);var _e=$.ri,Oe=$.rj;_e.vadd(ve,_e),_e.vsub(De.position,_e),Oe.vadd(pe,Oe),Oe.vsub(Se.position,Oe),this.result.push($),this.createFrictionEquationsFromContact($,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},v.prototype[o.types.BOX|o.types.HEIGHTFIELD]=v.prototype.boxHeightfield=function(le,ce,pe,ve,et,ze,Se,De){le.convexPolyhedronRepresentation.material=le.material,le.convexPolyhedronRepresentation.collisionResponse=le.collisionResponse,this.convexHeightfield(le.convexPolyhedronRepresentation,ce,pe,ve,et,ze,Se,De)};var $e=new l,Ye=new l,vt=[0];v.prototype[o.types.CONVEXPOLYHEDRON|o.types.HEIGHTFIELD]=v.prototype.convexHeightfield=function(le,ce,pe,ve,et,ze,Se,De){var re=ce.data,Ce=ce.elementSize,Ue=le.boundingSphereRadius,ke=Ye,Ie=vt,Me=$e;u.pointToLocalFrame(ve,ze,pe,Me);var b=Math.floor((Me.x-Ue)/Ce)-1,k=Math.ceil((Me.x+Ue)/Ce)+1,Z=Math.floor((Me.y-Ue)/Ce)-1,O=Math.ceil((Me.y+Ue)/Ce)+1;if(!(k<0||O<0||b>re.length||Z>re[0].length)){b<0&&(b=0),k<0&&(k=0),Z<0&&(Z=0),O<0&&(O=0),b>=re.length&&(b=re.length-1),k>=re.length&&(k=re.length-1),O>=re[0].length&&(O=re[0].length-1),Z>=re[0].length&&(Z=re[0].length-1);var $=[];ce.getRectMinMax(b,Z,k,O,$);var _e=$[0],Oe=$[1];if(!(Me.z-Ue>Oe||Me.z+Ue<_e))for(var Le=b;Le<k;Le++)for(var Fe=Z;Fe<O;Fe++)ce.getConvexTrianglePillar(Le,Fe,!1),u.pointToWorldFrame(ve,ze,ce.pillarOffset,ke),pe.distanceTo(ke)<ce.pillarConvex.boundingSphereRadius+le.boundingSphereRadius&&this.convexConvex(le,ce.pillarConvex,pe,ke,et,ze,Se,De,null,null,Ie,null),ce.getConvexTrianglePillar(Le,Fe,!0),u.pointToWorldFrame(ve,ze,ce.pillarOffset,ke),pe.distanceTo(ke)<ce.pillarConvex.boundingSphereRadius+le.boundingSphereRadius&&this.convexConvex(le,ce.pillarConvex,pe,ke,et,ze,Se,De,null,null,Ie,null)}};var gt=new l,ct=new l;v.prototype[o.types.SPHERE|o.types.HEIGHTFIELD]=v.prototype.sphereHeightfield=function(le,ce,pe,ve,et,ze,Se,De){var re=ce.data,Ce=le.radius,Ue=ce.elementSize,ke=ct,Ie=gt;u.pointToLocalFrame(ve,ze,pe,Ie);var Me=Math.floor((Ie.x-Ce)/Ue)-1,b=Math.ceil((Ie.x+Ce)/Ue)+1,k=Math.floor((Ie.y-Ce)/Ue)-1,Z=Math.ceil((Ie.y+Ce)/Ue)+1;if(!(b<0||Z<0||Me>re.length||Z>re[0].length)){Me<0&&(Me=0),b<0&&(b=0),k<0&&(k=0),Z<0&&(Z=0),Me>=re.length&&(Me=re.length-1),b>=re.length&&(b=re.length-1),Z>=re[0].length&&(Z=re[0].length-1),k>=re[0].length&&(k=re[0].length-1);var O=[];ce.getRectMinMax(Me,k,b,Z,O);var $=O[0],_e=O[1];if(!(Ie.z-Ce>_e||Ie.z+Ce<$))for(var Oe=this.result,Le=Me;Le<b;Le++)for(var Fe=k;Fe<Z;Fe++){var be=Oe.length;ce.getConvexTrianglePillar(Le,Fe,!1),u.pointToWorldFrame(ve,ze,ce.pillarOffset,ke),pe.distanceTo(ke)<ce.pillarConvex.boundingSphereRadius+le.boundingSphereRadius&&this.sphereConvex(le,ce.pillarConvex,pe,ke,et,ze,Se,De),ce.getConvexTrianglePillar(Le,Fe,!0),u.pointToWorldFrame(ve,ze,ce.pillarOffset,ke),pe.distanceTo(ke)<ce.pillarConvex.boundingSphereRadius+le.boundingSphereRadius&&this.sphereConvex(le,ce.pillarConvex,pe,ke,et,ze,Se,De);var Ke=Oe.length-be;if(Ke>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(t,n,i){n.exports=x;var r=t("../shapes/Shape"),o=t("../math/Vec3"),a=t("../math/Quaternion"),l=t("../solver/GSSolver");t("../utils/Vec3Pool"),t("../equations/ContactEquation"),t("../equations/FrictionEquation");var u=t("./Narrowphase"),h=t("../utils/EventTarget"),c=t("../collision/ArrayCollisionMatrix"),d=t("../material/Material"),f=t("../material/ContactMaterial"),v=t("../objects/Body"),g=t("../utils/TupleDictionary"),m=t("../collision/RaycastResult"),p=t("../collision/AABB"),_=t("../collision/Ray"),y=t("../collision/NaiveBroadphase");function x(){h.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new o,this.broadphase=new y,this.bodies=[],this.solver=new l,this.constraints=[],this.narrowphase=new u(this),this.collisionMatrix=new c,this.collisionMatrixPrevious=new c,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new g,this.defaultMaterial=new d("default"),this.defaultContactMaterial=new f(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}x.prototype=new h,new p;var w=new _;if(x.prototype.getContactMaterial=function(D,j){return this.contactMaterialTable.get(D.id,j.id)},x.prototype.numObjects=function(){return this.bodies.length},x.prototype.collisionMatrixTick=function(){var D=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=D,this.collisionMatrix.reset()},x.prototype.add=x.prototype.addBody=function(D){this.bodies.indexOf(D)===-1&&(D.index=this.bodies.length,this.bodies.push(D),D.world=this,D.initPosition.copy(D.position),D.initVelocity.copy(D.velocity),D.timeLastSleepy=this.time,D instanceof v&&(D.initAngularVelocity.copy(D.angularVelocity),D.initQuaternion.copy(D.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=D,this.dispatchEvent(this.addBodyEvent))},x.prototype.addConstraint=function(D){this.constraints.push(D)},x.prototype.removeConstraint=function(D){var j=this.constraints.indexOf(D);j!==-1&&this.constraints.splice(j,1)},x.prototype.rayTest=function(D,j,W){W instanceof m?this.raycastClosest(D,j,{skipBackfaces:!0},W):this.raycastAll(D,j,{skipBackfaces:!0},W)},x.prototype.raycastAll=function(D,j,W,N){return W.mode=_.ALL,W.from=D,W.to=j,W.callback=N,w.intersectWorld(this,W)},x.prototype.raycastAny=function(D,j,W,N){return W.mode=_.ANY,W.from=D,W.to=j,W.result=N,w.intersectWorld(this,W)},x.prototype.raycastClosest=function(D,j,W,N){return W.mode=_.CLOSEST,W.from=D,W.to=j,W.result=N,w.intersectWorld(this,W)},x.prototype.remove=function(D){D.world=null;var j=this.bodies.length-1,W=this.bodies,N=W.indexOf(D);if(N!==-1){W.splice(N,1);for(var H=0;H!==W.length;H++)W[H].index=H;this.collisionMatrix.setNumObjects(j),this.removeBodyEvent.body=D,this.dispatchEvent(this.removeBodyEvent)}},x.prototype.removeBody=x.prototype.remove,x.prototype.addMaterial=function(D){this.materials.push(D)},x.prototype.addContactMaterial=function(D){this.contactmaterials.push(D),this.contactMaterialTable.set(D.materials[0].id,D.materials[1].id,D)},typeof performance>"u"&&(performance={}),!performance.now){var A=Date.now();performance.timing&&performance.timing.navigationStart&&(A=performance.timing.navigationStart),performance.now=function(){return Date.now()-A}}var I=new o;x.prototype.step=function(D,j,W){if(W=W||10,j=j||0,j===0)this.internalStep(D),this.time+=D;else{var N=Math.floor((this.time+j)/D)-Math.floor(this.time/D);N=Math.min(N,W);for(var H=performance.now(),T=0;T!==N&&(this.internalStep(D),!(performance.now()-H>D*1e3));T++);this.time+=j;for(var R=this.time%D,C=R/D,X=I,ne=this.bodies,ie=0;ie!==ne.length;ie++){var K=ne[ie];K.type!==v.STATIC&&K.sleepState!==v.SLEEPING?(K.position.vsub(K.previousPosition,X),X.scale(C,X),K.position.vadd(X,K.interpolatedPosition)):(K.interpolatedPosition.copy(K.position),K.interpolatedQuaternion.copy(K.quaternion))}}};var B={type:"postStep"},E={type:"preStep"},M={type:"collide",body:null,contact:null},P=[],z=[],q=[],U=[];new o,new o,new o,new o,new o,new o,new o,new o,new o,new a;var V=new a,Q=new a,F=new o;x.prototype.internalStep=function(D){this.dt=D;var j=this.contacts,W=q,N=U,H=this.numObjects(),T=this.bodies,R=this.solver,C=this.gravity,X=this.doProfiling,ne=this.profile,ie=v.DYNAMIC,K,te=this.constraints,ue=z;C.norm();var Y=C.x,Pe=C.y,de=C.z,se=0;for(X&&(K=performance.now()),se=0;se!==H;se++){var oe=T[se];if(oe.type&ie){var qe=oe.force,Ae=oe.mass;qe.x+=Ae*Y,qe.y+=Ae*Pe,qe.z+=Ae*de}}for(var se=0,L=this.subsystems.length;se!==L;se++)this.subsystems[se].update();X&&(K=performance.now()),W.length=0,N.length=0,this.broadphase.collisionPairs(this,W,N),X&&(ne.broadphase=performance.now()-K);var je=te.length;for(se=0;se!==je;se++){var S=te[se];if(!S.collideConnected)for(var ee=W.length-1;ee>=0;ee-=1)(S.bodyA===W[ee]&&S.bodyB===N[ee]||S.bodyB===W[ee]&&S.bodyA===N[ee])&&(W.splice(ee,1),N.splice(ee,1))}this.collisionMatrixTick(),X&&(K=performance.now());var fe=P,he=j.length;for(se=0;se!==he;se++)fe.push(j[se]);j.length=0;var me=this.frictionEquations.length;for(se=0;se!==me;se++)ue.push(this.frictionEquations[se]);this.frictionEquations.length=0,this.narrowphase.getContacts(W,N,this,j,fe,this.frictionEquations,ue),X&&(ne.narrowphase=performance.now()-K),X&&(K=performance.now());for(var se=0;se<this.frictionEquations.length;se++)R.addEquation(this.frictionEquations[se]);for(var we=j.length,ye=0;ye!==we;ye++){var S=j[ye],oe=S.bi,Ee=S.bj;S.si,S.sj;var He;if(oe.material&&Ee.material?He=this.getContactMaterial(oe.material,Ee.material)||this.defaultContactMaterial:He=this.defaultContactMaterial,He.friction,oe.material&&Ee.material&&(oe.material.friction>=0&&Ee.material.friction>=0&&oe.material.friction*Ee.material.friction,oe.material.restitution>=0&&Ee.material.restitution>=0&&(S.restitution=oe.material.restitution*Ee.material.restitution)),R.addEquation(S),oe.allowSleep&&oe.type===v.DYNAMIC&&oe.sleepState===v.SLEEPING&&Ee.sleepState===v.AWAKE&&Ee.type!==v.STATIC){var Ze=Ee.velocity.norm2()+Ee.angularVelocity.norm2(),xe=Math.pow(Ee.sleepSpeedLimit,2);Ze>=xe*2&&(oe._wakeUpAfterNarrowphase=!0)}if(Ee.allowSleep&&Ee.type===v.DYNAMIC&&Ee.sleepState===v.SLEEPING&&oe.sleepState===v.AWAKE&&oe.type!==v.STATIC){var lt=oe.velocity.norm2()+oe.angularVelocity.norm2(),nt=Math.pow(oe.sleepSpeedLimit,2);lt>=nt*2&&(Ee._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(oe,Ee,!0),this.collisionMatrixPrevious.get(oe,Ee)||(M.body=Ee,M.contact=S,oe.dispatchEvent(M),M.body=oe,Ee.dispatchEvent(M))}for(X&&(ne.makeContactConstraints=performance.now()-K,K=performance.now()),se=0;se!==H;se++){var oe=T[se];oe._wakeUpAfterNarrowphase&&(oe.wakeUp(),oe._wakeUpAfterNarrowphase=!1)}var je=te.length;for(se=0;se!==je;se++){var S=te[se];S.update();for(var ee=0,Ge=S.equations.length;ee!==Ge;ee++){var Ve=S.equations[ee];R.addEquation(Ve)}}R.solve(D,this),X&&(ne.solve=performance.now()-K),R.removeAllEquations();var tt=Math.pow;for(se=0;se!==H;se++){var oe=T[se];if(oe.type&ie){var rt=tt(1-oe.linearDamping,D),mt=oe.velocity;mt.mult(rt,mt);var Qe=oe.angularVelocity;if(Qe){var Te=tt(1-oe.angularDamping,D);Qe.mult(Te,Qe)}}}for(this.dispatchEvent(E),se=0;se!==H;se++){var oe=T[se];oe.preStep&&oe.preStep.call(oe)}X&&(K=performance.now());var G=V,Re=Q,Ne=this.stepnumber,$e=v.DYNAMIC|v.KINEMATIC,Ye=Ne%(this.quatNormalizeSkip+1)===0,vt=this.quatNormalizeFast,gt=D*.5;for(r.types.PLANE,r.types.CONVEXPOLYHEDRON,se=0;se!==H;se++){var ct=T[se],le=ct.force,ce=ct.torque;if(ct.type&$e&&ct.sleepState!==v.SLEEPING){var pe=ct.velocity,ve=ct.angularVelocity,et=ct.position,ze=ct.quaternion,Se=ct.invMass,De=ct.invInertiaWorld;pe.x+=le.x*Se*D,pe.y+=le.y*Se*D,pe.z+=le.z*Se*D,ct.angularVelocity&&(De.vmult(ce,F),F.mult(D,F),F.vadd(ve,ve)),et.x+=pe.x*D,et.y+=pe.y*D,et.z+=pe.z*D,ct.angularVelocity&&(G.set(ve.x,ve.y,ve.z,0),G.mult(ze,Re),ze.x+=gt*Re.x,ze.y+=gt*Re.y,ze.z+=gt*Re.z,ze.w+=gt*Re.w,Ye&&(vt?ze.normalizeFast():ze.normalize())),ct.aabb&&(ct.aabbNeedsUpdate=!0),ct.updateInertiaWorld&&ct.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,X&&(ne.integrate=performance.now()-K),this.time+=D,this.stepnumber+=1,this.dispatchEvent(B),se=0;se!==H;se++){var oe=T[se],re=oe.postStep;re&&re.call(oe)}if(this.allowSleep)for(se=0;se!==H;se++)T[se].sleepTick(this.time)},x.prototype.clearForces=function(){for(var D=this.bodies,j=D.length,W=0;W!==j;W++){var N=D[W];N.force,N.torque,N.force.set(0,0,0),N.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})})($c);var r_=$c.exports;const sn=i_(r_);function s_(s){if(s&&!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=s,document.head.appendChild(e),s}}function qi(s,e){var t=s.__state.conversionName.toString(),n=Math.round(s.r),i=Math.round(s.g),r=Math.round(s.b),o=s.a,a=Math.round(s.h),l=s.s.toFixed(1),u=s.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var h=s.hex.toString(16);h.length<6;)h="0"+h;return"#"+h}else{if(t==="CSS_RGB")return"rgb("+n+","+i+","+r+")";if(t==="CSS_RGBA")return"rgba("+n+","+i+","+r+","+o+")";if(t==="HEX")return"0x"+s.hex.toString(16);if(t==="RGB_ARRAY")return"["+n+","+i+","+r+"]";if(t==="RGBA_ARRAY")return"["+n+","+i+","+r+","+o+"]";if(t==="RGB_OBJ")return"{r:"+n+",g:"+i+",b:"+r+"}";if(t==="RGBA_OBJ")return"{r:"+n+",g:"+i+",b:"+r+",a:"+o+"}";if(t==="HSV_OBJ")return"{h:"+a+",s:"+l+",v:"+u+"}";if(t==="HSVA_OBJ")return"{h:"+a+",s:"+l+",v:"+u+",a:"+o+"}"}return"unknown format"}var $l=Array.prototype.forEach,yr=Array.prototype.slice,ge={BREAK:{},extend:function(e){return this.each(yr.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach((function(i){this.isUndefined(t[i])||(e[i]=t[i])}).bind(this))},this),e},defaults:function(e){return this.each(yr.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach((function(i){this.isUndefined(e[i])&&(e[i]=t[i])}).bind(this))},this),e},compose:function(){var e=yr.call(arguments);return function(){for(var t=yr.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},each:function(e,t,n){if(e){if($l&&e.forEach&&e.forEach===$l)e.forEach(t,n);else if(e.length===e.length+0){var i=void 0,r=void 0;for(i=0,r=e.length;i<r;i++)if(i in e&&t.call(n,e[i],i)===this.BREAK)return}else for(var o in e)if(t.call(n,e[o],o)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,n){var i=void 0;return function(){var r=this,o=arguments;function a(){i=null,n||e.apply(r,o)}var l=n||!i;clearTimeout(i),i=setTimeout(a,t),l&&e.apply(r,o)}},toArray:function(e){return e.toArray?e.toArray():yr.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(s){function e(t){return s.apply(this,arguments)}return e.toString=function(){return s.toString()},e}(function(s){return isNaN(s)}),isArray:Array.isArray||function(s){return s.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},o_=[{litmus:ge.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:qi},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:qi},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:qi},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:qi}}},{litmus:ge.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:ge.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:ge.isObject,conversions:{RGBA_OBJ:{read:function(e){return ge.isNumber(e.r)&&ge.isNumber(e.g)&&ge.isNumber(e.b)&&ge.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return ge.isNumber(e.r)&&ge.isNumber(e.g)&&ge.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return ge.isNumber(e.h)&&ge.isNumber(e.s)&&ge.isNumber(e.v)&&ge.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return ge.isNumber(e.h)&&ge.isNumber(e.s)&&ge.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],Er=void 0,ds=void 0,No=function(){ds=!1;var e=arguments.length>1?ge.toArray(arguments):arguments[0];return ge.each(o_,function(t){if(t.litmus(e))return ge.each(t.conversions,function(n,i){if(Er=n.read(e),ds===!1&&Er!==!1)return ds=Er,Er.conversionName=i,Er.conversion=n,ge.BREAK}),ge.BREAK}),ds},Jl=void 0,Ms={hsv_to_rgb:function(e,t,n){var i=Math.floor(e/60)%6,r=e/60-Math.floor(e/60),o=n*(1-t),a=n*(1-r*t),l=n*(1-(1-r)*t),u=[[n,l,o],[a,n,o],[o,n,l],[o,a,n],[l,o,n],[n,o,a]][i];return{r:u[0]*255,g:u[1]*255,b:u[2]*255}},rgb_to_hsv:function(e,t,n){var i=Math.min(e,t,n),r=Math.max(e,t,n),o=r-i,a=void 0,l=void 0;if(r!==0)l=o/r;else return{h:NaN,s:0,v:0};return e===r?a=(t-n)/o:t===r?a=2+(n-e)/o:a=4+(e-t)/o,a/=6,a<0&&(a+=1),{h:a*360,s:l,v:r/255}},rgb_to_hex:function(e,t,n){var i=this.hex_with_component(0,2,e);return i=this.hex_with_component(i,1,t),i=this.hex_with_component(i,0,n),i},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,n){return n<<(Jl=t*8)|e&~(255<<Jl)}},a_=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},xn=function(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")},yn=function(){function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}}(),ti=function s(e,t,n){e===null&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,t);if(i===void 0){var r=Object.getPrototypeOf(e);return r===null?void 0:s(r,t,n)}else{if("value"in i)return i.value;var o=i.get;return o===void 0?void 0:o.call(n)}},ri=function(s,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);s.prototype=Object.create(e&&e.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(s,e):s.__proto__=e)},si=function(s,e){if(!s)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:s},kt=function(){function s(){if(xn(this,s),this.__state=No.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return yn(s,[{key:"toString",value:function(){return qi(this)}},{key:"toHexString",value:function(){return qi(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),s}();function ea(s,e,t){Object.defineProperty(s,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(kt.recalculateRGB(this,e,t),this.__state[e])},set:function(i){this.__state.space!=="RGB"&&(kt.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=i}})}function ta(s,e){Object.defineProperty(s,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(kt.recalculateHSV(this),this.__state[e])},set:function(n){this.__state.space!=="HSV"&&(kt.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=n}})}kt.recalculateRGB=function(s,e,t){if(s.__state.space==="HEX")s.__state[e]=Ms.component_from_hex(s.__state.hex,t);else if(s.__state.space==="HSV")ge.extend(s.__state,Ms.hsv_to_rgb(s.__state.h,s.__state.s,s.__state.v));else throw new Error("Corrupted color state")};kt.recalculateHSV=function(s){var e=Ms.rgb_to_hsv(s.r,s.g,s.b);ge.extend(s.__state,{s:e.s,v:e.v}),ge.isNaN(e.h)?ge.isUndefined(s.__state.h)&&(s.__state.h=0):s.__state.h=e.h};kt.COMPONENTS=["r","g","b","h","s","v","hex","a"];ea(kt.prototype,"r",2);ea(kt.prototype,"g",1);ea(kt.prototype,"b",0);ta(kt.prototype,"h");ta(kt.prototype,"s");ta(kt.prototype,"v");Object.defineProperty(kt.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(kt.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=Ms.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var Mi=function(){function s(e,t){xn(this,s),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return yn(s,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),s}(),l_={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},Jc={};ge.each(l_,function(s,e){ge.each(s,function(t){Jc[t]=e})});var c_=/(\d+(\.\d+)?)px/;function En(s){if(s==="0"||ge.isUndefined(s))return 0;var e=s.match(c_);return ge.isNull(e)?0:parseFloat(e[1])}var ae={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,n){var i=n,r=t;ge.isUndefined(r)&&(r=!0),ge.isUndefined(i)&&(i=!0),e.style.position="absolute",r&&(e.style.left=0,e.style.right=0),i&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,n,i){var r=n||{},o=Jc[t];if(!o)throw new Error("Event type "+t+" not supported.");var a=document.createEvent(o);switch(o){case"MouseEvents":{var l=r.x||r.clientX||0,u=r.y||r.clientY||0;a.initMouseEvent(t,r.bubbles||!1,r.cancelable||!0,window,r.clickCount||1,0,0,l,u,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var h=a.initKeyboardEvent||a.initKeyEvent;ge.defaults(r,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),h(t,r.bubbles||!1,r.cancelable,window,r.ctrlKey,r.altKey,r.shiftKey,r.metaKey,r.keyCode,r.charCode);break}default:{a.initEvent(t,r.bubbles||!1,r.cancelable||!0);break}}ge.defaults(a,i),e.dispatchEvent(a)},bind:function(e,t,n,i){var r=i||!1;return e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on"+t,n),ae},unbind:function(e,t,n,i){var r=i||!1;return e.removeEventListener?e.removeEventListener(t,n,r):e.detachEvent&&e.detachEvent("on"+t,n),ae},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return ae},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),i=n.indexOf(t);i!==-1&&(n.splice(i,1),e.className=n.join(" "))}else e.className=void 0;return ae},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return En(t["border-left-width"])+En(t["border-right-width"])+En(t["padding-left"])+En(t["padding-right"])+En(t.width)},getHeight:function(e){var t=getComputedStyle(e);return En(t["border-top-width"])+En(t["border-bottom-width"])+En(t["padding-top"])+En(t["padding-bottom"])+En(t.height)},getOffset:function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},Qc=function(s){ri(e,s);function e(t,n){xn(this,e);var i=si(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),r=i;i.__prev=i.getValue(),i.__checkbox=document.createElement("input"),i.__checkbox.setAttribute("type","checkbox");function o(){r.setValue(!r.__prev)}return ae.bind(i.__checkbox,"change",o,!1),i.domElement.appendChild(i.__checkbox),i.updateDisplay(),i}return yn(e,[{key:"setValue",value:function(n){var i=ti(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),i}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),ti(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Mi),u_=function(s){ri(e,s);function e(t,n,i){xn(this,e);var r=si(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=i,a=r;if(r.__select=document.createElement("select"),ge.isArray(o)){var l={};ge.each(o,function(u){l[u]=u}),o=l}return ge.each(o,function(u,h){var c=document.createElement("option");c.innerHTML=h,c.setAttribute("value",u),a.__select.appendChild(c)}),r.updateDisplay(),ae.bind(r.__select,"change",function(){var u=this.options[this.selectedIndex].value;a.setValue(u)}),r.domElement.appendChild(r.__select),r}return yn(e,[{key:"setValue",value:function(n){var i=ti(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),i}},{key:"updateDisplay",value:function(){return ae.isActive(this.__select)?this:(this.__select.value=this.getValue(),ti(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(Mi),h_=function(s){ri(e,s);function e(t,n){xn(this,e);var i=si(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),r=i;function o(){r.setValue(r.__input.value)}function a(){r.__onFinishChange&&r.__onFinishChange.call(r,r.getValue())}return i.__input=document.createElement("input"),i.__input.setAttribute("type","text"),ae.bind(i.__input,"keyup",o),ae.bind(i.__input,"change",o),ae.bind(i.__input,"blur",a),ae.bind(i.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),i.updateDisplay(),i.domElement.appendChild(i.__input),i}return yn(e,[{key:"updateDisplay",value:function(){return ae.isActive(this.__input)||(this.__input.value=this.getValue()),ti(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Mi);function Ql(s){var e=s.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var eu=function(s){ri(e,s);function e(t,n,i){xn(this,e);var r=si(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=i||{};return r.__min=o.min,r.__max=o.max,r.__step=o.step,ge.isUndefined(r.__step)?r.initialValue===0?r.__impliedStep=1:r.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(r.initialValue))/Math.LN10))/10:r.__impliedStep=r.__step,r.__precision=Ql(r.__impliedStep),r}return yn(e,[{key:"setValue",value:function(n){var i=n;return this.__min!==void 0&&i<this.__min?i=this.__min:this.__max!==void 0&&i>this.__max&&(i=this.__max),this.__step!==void 0&&i%this.__step!==0&&(i=Math.round(i/this.__step)*this.__step),ti(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i)}},{key:"min",value:function(n){return this.__min=n,this}},{key:"max",value:function(n){return this.__max=n,this}},{key:"step",value:function(n){return this.__step=n,this.__impliedStep=n,this.__precision=Ql(n),this}}]),e}(Mi);function d_(s,e){var t=Math.pow(10,e);return Math.round(s*t)/t}var bs=function(s){ri(e,s);function e(t,n,i){xn(this,e);var r=si(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,i));r.__truncationSuspended=!1;var o=r,a=void 0;function l(){var v=parseFloat(o.__input.value);ge.isNaN(v)||o.setValue(v)}function u(){o.__onFinishChange&&o.__onFinishChange.call(o,o.getValue())}function h(){u()}function c(v){var g=a-v.clientY;o.setValue(o.getValue()+g*o.__impliedStep),a=v.clientY}function d(){ae.unbind(window,"mousemove",c),ae.unbind(window,"mouseup",d),u()}function f(v){ae.bind(window,"mousemove",c),ae.bind(window,"mouseup",d),a=v.clientY}return r.__input=document.createElement("input"),r.__input.setAttribute("type","text"),ae.bind(r.__input,"change",l),ae.bind(r.__input,"blur",h),ae.bind(r.__input,"mousedown",f),ae.bind(r.__input,"keydown",function(v){v.keyCode===13&&(o.__truncationSuspended=!0,this.blur(),o.__truncationSuspended=!1,u())}),r.updateDisplay(),r.domElement.appendChild(r.__input),r}return yn(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():d_(this.getValue(),this.__precision),ti(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(eu);function ec(s,e,t,n,i){return n+(i-n)*((s-e)/(t-e))}var Do=function(s){ri(e,s);function e(t,n,i,r,o){xn(this,e);var a=si(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,{min:i,max:r,step:o})),l=a;a.__background=document.createElement("div"),a.__foreground=document.createElement("div"),ae.bind(a.__background,"mousedown",u),ae.bind(a.__background,"touchstart",d),ae.addClass(a.__background,"slider"),ae.addClass(a.__foreground,"slider-fg");function u(g){document.activeElement.blur(),ae.bind(window,"mousemove",h),ae.bind(window,"mouseup",c),h(g)}function h(g){g.preventDefault();var m=l.__background.getBoundingClientRect();return l.setValue(ec(g.clientX,m.left,m.right,l.__min,l.__max)),!1}function c(){ae.unbind(window,"mousemove",h),ae.unbind(window,"mouseup",c),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function d(g){g.touches.length===1&&(ae.bind(window,"touchmove",f),ae.bind(window,"touchend",v),f(g))}function f(g){var m=g.touches[0].clientX,p=l.__background.getBoundingClientRect();l.setValue(ec(m,p.left,p.right,l.__min,l.__max))}function v(){ae.unbind(window,"touchmove",f),ae.unbind(window,"touchend",v),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return a.updateDisplay(),a.__background.appendChild(a.__foreground),a.domElement.appendChild(a.__background),a}return yn(e,[{key:"updateDisplay",value:function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",ti(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(eu),tu=function(s){ri(e,s);function e(t,n,i){xn(this,e);var r=si(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=r;return r.__button=document.createElement("div"),r.__button.innerHTML=i===void 0?"Fire":i,ae.bind(r.__button,"click",function(a){return a.preventDefault(),o.fire(),!1}),ae.addClass(r.__button,"button"),r.domElement.appendChild(r.__button),r}return yn(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(Mi),Uo=function(s){ri(e,s);function e(t,n){xn(this,e);var i=si(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));i.__color=new kt(i.getValue()),i.__temp=new kt(0);var r=i;i.domElement=document.createElement("div"),ae.makeSelectable(i.domElement,!1),i.__selector=document.createElement("div"),i.__selector.className="selector",i.__saturation_field=document.createElement("div"),i.__saturation_field.className="saturation-field",i.__field_knob=document.createElement("div"),i.__field_knob.className="field-knob",i.__field_knob_border="2px solid ",i.__hue_knob=document.createElement("div"),i.__hue_knob.className="hue-knob",i.__hue_field=document.createElement("div"),i.__hue_field.className="hue-field",i.__input=document.createElement("input"),i.__input.type="text",i.__input_textShadow="0 1px 1px ",ae.bind(i.__input,"keydown",function(g){g.keyCode===13&&c.call(this)}),ae.bind(i.__input,"blur",c),ae.bind(i.__selector,"mousedown",function(){ae.addClass(this,"drag").bind(window,"mouseup",function(){ae.removeClass(r.__selector,"drag")})}),ae.bind(i.__selector,"touchstart",function(){ae.addClass(this,"drag").bind(window,"touchend",function(){ae.removeClass(r.__selector,"drag")})});var o=document.createElement("div");ge.extend(i.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),ge.extend(i.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:i.__field_knob_border+(i.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),ge.extend(i.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),ge.extend(i.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),ge.extend(o.style,{width:"100%",height:"100%",background:"none"}),tc(o,"top","rgba(0,0,0,0)","#000"),ge.extend(i.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),p_(i.__hue_field),ge.extend(i.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:i.__input_textShadow+"rgba(0,0,0,0.7)"}),ae.bind(i.__saturation_field,"mousedown",a),ae.bind(i.__saturation_field,"touchstart",a),ae.bind(i.__field_knob,"mousedown",a),ae.bind(i.__field_knob,"touchstart",a),ae.bind(i.__hue_field,"mousedown",l),ae.bind(i.__hue_field,"touchstart",l);function a(g){f(g),ae.bind(window,"mousemove",f),ae.bind(window,"touchmove",f),ae.bind(window,"mouseup",u),ae.bind(window,"touchend",u)}function l(g){v(g),ae.bind(window,"mousemove",v),ae.bind(window,"touchmove",v),ae.bind(window,"mouseup",h),ae.bind(window,"touchend",h)}function u(){ae.unbind(window,"mousemove",f),ae.unbind(window,"touchmove",f),ae.unbind(window,"mouseup",u),ae.unbind(window,"touchend",u),d()}function h(){ae.unbind(window,"mousemove",v),ae.unbind(window,"touchmove",v),ae.unbind(window,"mouseup",h),ae.unbind(window,"touchend",h),d()}function c(){var g=No(this.value);g!==!1?(r.__color.__state=g,r.setValue(r.__color.toOriginal())):this.value=r.__color.toString()}function d(){r.__onFinishChange&&r.__onFinishChange.call(r,r.__color.toOriginal())}i.__saturation_field.appendChild(o),i.__selector.appendChild(i.__field_knob),i.__selector.appendChild(i.__saturation_field),i.__selector.appendChild(i.__hue_field),i.__hue_field.appendChild(i.__hue_knob),i.domElement.appendChild(i.__input),i.domElement.appendChild(i.__selector),i.updateDisplay();function f(g){g.type.indexOf("touch")===-1&&g.preventDefault();var m=r.__saturation_field.getBoundingClientRect(),p=g.touches&&g.touches[0]||g,_=p.clientX,y=p.clientY,x=(_-m.left)/(m.right-m.left),w=1-(y-m.top)/(m.bottom-m.top);return w>1?w=1:w<0&&(w=0),x>1?x=1:x<0&&(x=0),r.__color.v=w,r.__color.s=x,r.setValue(r.__color.toOriginal()),!1}function v(g){g.type.indexOf("touch")===-1&&g.preventDefault();var m=r.__hue_field.getBoundingClientRect(),p=g.touches&&g.touches[0]||g,_=p.clientY,y=1-(_-m.top)/(m.bottom-m.top);return y>1?y=1:y<0&&(y=0),r.__color.h=y*360,r.setValue(r.__color.toOriginal()),!1}return i}return yn(e,[{key:"updateDisplay",value:function(){var n=No(this.getValue());if(n!==!1){var i=!1;ge.each(kt.COMPONENTS,function(a){if(!ge.isUndefined(n[a])&&!ge.isUndefined(this.__color.__state[a])&&n[a]!==this.__color.__state[a])return i=!0,{}},this),i&&ge.extend(this.__color.__state,n)}ge.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var r=this.__color.v<.5||this.__color.s>.5?255:0,o=255-r;ge.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+r+","+r+","+r+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,tc(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),ge.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+r+","+r+","+r+")",textShadow:this.__input_textShadow+"rgba("+o+","+o+","+o+",.7)"})}}]),e}(Mi),f_=["-moz-","-o-","-webkit-","-ms-",""];function tc(s,e,t,n){s.style.background="",ge.each(f_,function(i){s.style.cssText+="background: "+i+"linear-gradient("+e+", "+t+" 0%, "+n+" 100%); "})}function p_(s){s.style.background="",s.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",s.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var m_={load:function(e,t){var n=t||document,i=n.createElement("link");i.type="text/css",i.rel="stylesheet",i.href=e,n.getElementsByTagName("head")[0].appendChild(i)},inject:function(e,t){var n=t||document,i=document.createElement("style");i.type="text/css",i.innerHTML=e;var r=n.getElementsByTagName("head")[0];try{r.appendChild(i)}catch{}}},v_=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,g_=function(e,t){var n=e[t];return ge.isArray(arguments[2])||ge.isObject(arguments[2])?new u_(e,t,arguments[2]):ge.isNumber(n)?ge.isNumber(arguments[2])&&ge.isNumber(arguments[3])?ge.isNumber(arguments[4])?new Do(e,t,arguments[2],arguments[3],arguments[4]):new Do(e,t,arguments[2],arguments[3]):ge.isNumber(arguments[4])?new bs(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new bs(e,t,{min:arguments[2],max:arguments[3]}):ge.isString(n)?new h_(e,t):ge.isFunction(n)?new tu(e,t,""):ge.isBoolean(n)?new Qc(e,t):null};function __(s){setTimeout(s,1e3/60)}var x_=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||__,y_=function(){function s(){xn(this,s),this.backgroundElement=document.createElement("div"),ge.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),ae.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),ge.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;ae.bind(this.backgroundElement,"click",function(){e.hide()})}return yn(s,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),ge.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,n=function i(){t.domElement.style.display="none",t.backgroundElement.style.display="none",ae.unbind(t.domElement,"webkitTransitionEnd",i),ae.unbind(t.domElement,"transitionend",i),ae.unbind(t.domElement,"oTransitionEnd",i)};ae.bind(this.domElement,"webkitTransitionEnd",n),ae.bind(this.domElement,"transitionend",n),ae.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-ae.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-ae.getHeight(this.domElement)/2+"px"}}]),s}(),E_=s_(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);m_.inject(E_);var nc="dg",ic=72,rc=20,Ir="Default",Sr=function(){try{return!!window.localStorage}catch{return!1}}(),Ar=void 0,sc=!0,Hi=void 0,_o=!1,nu=[],wt=function s(e){var t=this,n=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),ae.addClass(this.domElement,nc),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=ge.defaults(n,{closeOnTop:!1,autoPlace:!0,width:s.DEFAULT_WIDTH}),n=ge.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),ge.isUndefined(n.load)?n.load={preset:Ir}:n.preset&&(n.load.preset=n.preset),ge.isUndefined(n.parent)&&n.hideable&&nu.push(this),n.resizable=ge.isUndefined(n.parent)&&n.resizable,n.autoPlace&&ge.isUndefined(n.scrollable)&&(n.scrollable=!0);var i=Sr&&localStorage.getItem(Gi(this,"isLocal"))==="true",r=void 0,o=void 0;if(Object.defineProperties(this,{parent:{get:function(){return n.parent}},scrollable:{get:function(){return n.scrollable}},autoPlace:{get:function(){return n.autoPlace}},closeOnTop:{get:function(){return n.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:n.load.preset},set:function(d){t.parent?t.getRoot().preset=d:n.load.preset=d,w_(this),t.revert()}},width:{get:function(){return n.width},set:function(d){n.width=d,Oo(t,d)}},name:{get:function(){return n.name},set:function(d){n.name=d,o&&(o.innerHTML=n.name)}},closed:{get:function(){return n.closed},set:function(d){n.closed=d,n.closed?ae.addClass(t.__ul,s.CLASS_CLOSED):ae.removeClass(t.__ul,s.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=d?s.TEXT_OPEN:s.TEXT_CLOSED)}},load:{get:function(){return n.load}},useLocalStorage:{get:function(){return i},set:function(d){Sr&&(i=d,d?ae.bind(window,"unload",r):ae.unbind(window,"unload",r),localStorage.setItem(Gi(t,"isLocal"),d))}}}),ge.isUndefined(n.parent)){if(this.closed=n.closed||!1,ae.addClass(this.domElement,s.CLASS_MAIN),ae.makeSelectable(this.domElement,!1),Sr&&i){t.useLocalStorage=!0;var a=localStorage.getItem(Gi(this,"gui"));a&&(n.load=JSON.parse(a))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=s.TEXT_CLOSED,ae.addClass(this.__closeButton,s.CLASS_CLOSE_BUTTON),n.closeOnTop?(ae.addClass(this.__closeButton,s.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(ae.addClass(this.__closeButton,s.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),ae.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{n.closed===void 0&&(n.closed=!0);var l=document.createTextNode(n.name);ae.addClass(l,"controller-name"),o=na(t,l);var u=function(d){return d.preventDefault(),t.closed=!t.closed,!1};ae.addClass(this.__ul,s.CLASS_CLOSED),ae.addClass(o,"title"),ae.bind(o,"click",u),n.closed||(this.closed=!1)}n.autoPlace&&(ge.isUndefined(n.parent)&&(sc&&(Hi=document.createElement("div"),ae.addClass(Hi,nc),ae.addClass(Hi,s.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(Hi),sc=!1),Hi.appendChild(this.domElement),ae.addClass(this.domElement,s.CLASS_AUTO_PLACE)),this.parent||Oo(t,n.width)),this.__resizeHandler=function(){t.onResizeDebounced()},ae.bind(window,"resize",this.__resizeHandler),ae.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),ae.bind(this.__ul,"transitionend",this.__resizeHandler),ae.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&b_(this),r=function(){Sr&&localStorage.getItem(Gi(t,"isLocal"))==="true"&&localStorage.setItem(Gi(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=r;function h(){var c=t.getRoot();c.width+=1,ge.defer(function(){c.width-=1})}n.parent||h()};wt.toggleHide=function(){_o=!_o,ge.each(nu,function(s){s.domElement.style.display=_o?"none":""})};wt.CLASS_AUTO_PLACE="a";wt.CLASS_AUTO_PLACE_CONTAINER="ac";wt.CLASS_MAIN="main";wt.CLASS_CONTROLLER_ROW="cr";wt.CLASS_TOO_TALL="taller-than-window";wt.CLASS_CLOSED="closed";wt.CLASS_CLOSE_BUTTON="close-button";wt.CLASS_CLOSE_TOP="close-top";wt.CLASS_CLOSE_BOTTOM="close-bottom";wt.CLASS_DRAG="drag";wt.DEFAULT_WIDTH=245;wt.TEXT_CLOSED="Close Controls";wt.TEXT_OPEN="Open Controls";wt._keydownHandler=function(s){document.activeElement.type!=="text"&&(s.which===ic||s.keyCode===ic)&&wt.toggleHide()};ae.bind(window,"keydown",wt._keydownHandler,!1);ge.extend(wt.prototype,{add:function(e,t){return Rr(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return Rr(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;ge.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&Hi.removeChild(this.domElement);var e=this;ge.each(this.__folders,function(t){e.removeFolder(t)}),ae.unbind(window,"keydown",wt._keydownHandler,!1),oc(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new wt(t);this.__folders[e]=n;var i=na(this,n.domElement);return ae.addClass(i,"folder"),n},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],oc(e);var t=this;ge.each(e.__folders,function(n){e.removeFolder(n)}),ge.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=ae.getOffset(e.__ul).top,n=0;ge.each(e.__ul.childNodes,function(i){e.autoPlace&&i===e.__save_row||(n+=ae.getHeight(i))}),window.innerHeight-t-rc<n?(ae.addClass(e.domElement,wt.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-rc+"px"):(ae.removeClass(e.domElement,wt.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&ge.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:ge.debounce(function(){this.onResize()},50),remember:function(){if(ge.isUndefined(Ar)&&(Ar=new y_,Ar.domElement.innerHTML=v_),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;ge.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&M_(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&Oo(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=fs(this)),e.folders={},ge.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=fs(this),Fo(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[Ir]=fs(this,!0)),this.load.remembered[e]=fs(this),this.preset=e,Bo(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){ge.each(this.__controllers,function(t){this.getRoot().load.remembered?iu(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),ge.each(this.__folders,function(t){t.revert(t)}),e||Fo(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&ru(this.__listening)},updateDisplay:function(){ge.each(this.__controllers,function(e){e.updateDisplay()}),ge.each(this.__folders,function(e){e.updateDisplay()})}});function na(s,e,t){var n=document.createElement("li");return e&&n.appendChild(e),t?s.__ul.insertBefore(n,t):s.__ul.appendChild(n),s.onResize(),n}function oc(s){ae.unbind(window,"resize",s.__resizeHandler),s.saveToLocalStorageIfPossible&&ae.unbind(window,"unload",s.saveToLocalStorageIfPossible)}function Fo(s,e){var t=s.__preset_select[s.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function S_(s,e,t){if(t.__li=e,t.__gui=s,ge.extend(t,{options:function(o){if(arguments.length>1){var a=t.__li.nextElementSibling;return t.remove(),Rr(s,t.object,t.property,{before:a,factoryArgs:[ge.toArray(arguments)]})}if(ge.isArray(o)||ge.isObject(o)){var l=t.__li.nextElementSibling;return t.remove(),Rr(s,t.object,t.property,{before:l,factoryArgs:[o]})}},name:function(o){return t.__li.firstElementChild.firstElementChild.innerHTML=o,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof Do){var n=new bs(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});ge.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(r){var o=t[r],a=n[r];t[r]=n[r]=function(){var l=Array.prototype.slice.call(arguments);return a.apply(n,l),o.apply(t,l)}}),ae.addClass(e,"has-slider"),t.domElement.insertBefore(n.domElement,t.domElement.firstElementChild)}else if(t instanceof bs){var i=function(o){if(ge.isNumber(t.__min)&&ge.isNumber(t.__max)){var a=t.__li.firstElementChild.firstElementChild.innerHTML,l=t.__gui.__listening.indexOf(t)>-1;t.remove();var u=Rr(s,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return u.name(a),l&&u.listen(),u}return o};t.min=ge.compose(i,t.min),t.max=ge.compose(i,t.max)}else t instanceof Qc?(ae.bind(e,"click",function(){ae.fakeEvent(t.__checkbox,"click")}),ae.bind(t.__checkbox,"click",function(r){r.stopPropagation()})):t instanceof tu?(ae.bind(e,"click",function(){ae.fakeEvent(t.__button,"click")}),ae.bind(e,"mouseover",function(){ae.addClass(t.__button,"hover")}),ae.bind(e,"mouseout",function(){ae.removeClass(t.__button,"hover")})):t instanceof Uo&&(ae.addClass(e,"color"),t.updateDisplay=ge.compose(function(r){return e.style.borderLeftColor=t.__color.toString(),r},t.updateDisplay),t.updateDisplay());t.setValue=ge.compose(function(r){return s.getRoot().__preset_select&&t.isModified()&&Fo(s.getRoot(),!0),r},t.setValue)}function iu(s,e){var t=s.getRoot(),n=t.__rememberedObjects.indexOf(e.object);if(n!==-1){var i=t.__rememberedObjectIndecesToControllers[n];if(i===void 0&&(i={},t.__rememberedObjectIndecesToControllers[n]=i),i[e.property]=e,t.load&&t.load.remembered){var r=t.load.remembered,o=void 0;if(r[s.preset])o=r[s.preset];else if(r[Ir])o=r[Ir];else return;if(o[n]&&o[n][e.property]!==void 0){var a=o[n][e.property];e.initialValue=a,e.setValue(a)}}}}function Rr(s,e,t,n){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var i=void 0;if(n.color)i=new Uo(e,t);else{var r=[e,t].concat(n.factoryArgs);i=g_.apply(s,r)}n.before instanceof Mi&&(n.before=n.before.__li),iu(s,i),ae.addClass(i.domElement,"c");var o=document.createElement("span");ae.addClass(o,"property-name"),o.innerHTML=i.property;var a=document.createElement("div");a.appendChild(o),a.appendChild(i.domElement);var l=na(s,a,n.before);return ae.addClass(l,wt.CLASS_CONTROLLER_ROW),i instanceof Uo?ae.addClass(l,"color"):ae.addClass(l,a_(i.getValue())),S_(s,l,i),s.__controllers.push(i),i}function Gi(s,e){return document.location.href+"."+e}function Bo(s,e,t){var n=document.createElement("option");n.innerHTML=e,n.value=e,s.__preset_select.appendChild(n),t&&(s.__preset_select.selectedIndex=s.__preset_select.length-1)}function ac(s,e){e.style.display=s.useLocalStorage?"block":"none"}function M_(s){var e=s.__save_row=document.createElement("li");ae.addClass(s.domElement,"has-save"),s.__ul.insertBefore(e,s.__ul.firstChild),ae.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",ae.addClass(t,"button gears");var n=document.createElement("span");n.innerHTML="Save",ae.addClass(n,"button"),ae.addClass(n,"save");var i=document.createElement("span");i.innerHTML="New",ae.addClass(i,"button"),ae.addClass(i,"save-as");var r=document.createElement("span");r.innerHTML="Revert",ae.addClass(r,"button"),ae.addClass(r,"revert");var o=s.__preset_select=document.createElement("select");if(s.load&&s.load.remembered?ge.each(s.load.remembered,function(c,d){Bo(s,d,d===s.preset)}):Bo(s,Ir,!1),ae.bind(o,"change",function(){for(var c=0;c<s.__preset_select.length;c++)s.__preset_select[c].innerHTML=s.__preset_select[c].value;s.preset=this.value}),e.appendChild(o),e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(r),Sr){var a=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),u=document.getElementById("dg-save-locally");u.style.display="block",localStorage.getItem(Gi(s,"isLocal"))==="true"&&l.setAttribute("checked","checked"),ac(s,a),ae.bind(l,"change",function(){s.useLocalStorage=!s.useLocalStorage,ac(s,a)})}var h=document.getElementById("dg-new-constructor");ae.bind(h,"keydown",function(c){c.metaKey&&(c.which===67||c.keyCode===67)&&Ar.hide()}),ae.bind(t,"click",function(){h.innerHTML=JSON.stringify(s.getSaveObject(),void 0,2),Ar.show(),h.focus(),h.select()}),ae.bind(n,"click",function(){s.save()}),ae.bind(i,"click",function(){var c=prompt("Enter a new preset name.");c&&s.saveAs(c)}),ae.bind(r,"click",function(){s.revert()})}function b_(s){var e=void 0;s.__resize_handle=document.createElement("div"),ge.extend(s.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(r){return r.preventDefault(),s.width+=e-r.clientX,s.onResize(),e=r.clientX,!1}function n(){ae.removeClass(s.__closeButton,wt.CLASS_DRAG),ae.unbind(window,"mousemove",t),ae.unbind(window,"mouseup",n)}function i(r){return r.preventDefault(),e=r.clientX,ae.addClass(s.__closeButton,wt.CLASS_DRAG),ae.bind(window,"mousemove",t),ae.bind(window,"mouseup",n),!1}ae.bind(s.__resize_handle,"mousedown",i),ae.bind(s.__closeButton,"mousedown",i),s.domElement.insertBefore(s.__resize_handle,s.domElement.firstElementChild)}function Oo(s,e){s.domElement.style.width=e+"px",s.__save_row&&s.autoPlace&&(s.__save_row.style.width=e+"px"),s.__closeButton&&(s.__closeButton.style.width=e+"px")}function fs(s,e){var t={};return ge.each(s.__rememberedObjects,function(n,i){var r={},o=s.__rememberedObjectIndecesToControllers[i];ge.each(o,function(a,l){r[l]=e?a.initialValue:a.getValue()}),t[i]=r}),t}function w_(s){for(var e=0;e<s.__preset_select.length;e++)s.__preset_select[e].value===s.preset&&(s.__preset_select.selectedIndex=e)}function ru(s){s.length!==0&&x_.call(window,function(){ru(s)}),ge.each(s,function(e){e.updateDisplay()})}const hr=new Dv;new Mg;const bi=new sn.World,su=[];bi.gravity.set(0,-9.82,0);const T_=new sn.Material("concrete"),A_=new sn.Material("plastic"),R_=new sn.ContactMaterial(T_,A_,{friction:.1,restitution:.7}),zo=new sn.Material("default"),ou=new sn.ContactMaterial(zo,zo,{friction:.1,restitution:.7});bi.addContactMaterial(ou);bi.defaultContactMaterial=ou;bi.addContactMaterial(R_);const C_=new Cs(20,20),L_=new Zn({color:2845322}),ia=new Jt(C_,L_);ia.rotation.x=Math.PI*-.5;hr.add(ia);const P_=new sn.Plane,Ur=new sn.Body;Ur.mass=0;Ur.quaternion.setFromAxisAngle(new sn.Vec3(-1,0,0),Math.PI*.5);Ur.addShape(P_);bi.addBody(Ur);Ur.quaternion.setFromAxisAngle(new sn.Vec3(-1,0,0),Math.PI*.5);const au=(s,e)=>{const t=new Jt(new Zo(s,20,20),new Ps({metalness:.3,roughness:.4,envMapIntensity:.5}));t.castShadow=!0,t.position.copy(e),hr.add(t);const n=new sn.Sphere(s),i=new sn.Body({mass:1,position:new sn.Vec3(0,3,0),shape:n,material:zo});i.position.copy(e),bi.addBody(i),su.push({mesh:t,body:i})};au(.5,{x:0,y:3,z:0});const I_=new dat.GUI,lu={};lu.createSphere=()=>{au(.5,{x:0,y:3,z:0})};I_.add(lu,"createSphere");const Mn={width:window.innerWidth,height:window.innerHeight},ni=new Kt(75,Mn.width/Mn.height,.1,1e3);ni.position.z=4;ni.position.y=4;ni.lookAt(ia.position);hr.add(ni);const zn=new Hc;zn.setSize(Mn.width,Mn.height);zn.shadowMap.enabled=!0;document.body.appendChild(zn.domElement);zn.render(hr,ni);zn.xr.enabled=!0;const cu=new hg(16777215,1);cu.intensity=3;hr.add(cu);const N_=new fg;let lc=0;const D_=()=>{const s=N_.getElapsedTime(),e=s-lc;lc=s;for(const t of su)t.mesh.position.copy(t.body.position);bi.step(1/60,e,3)};function uu(){requestAnimationFrame(uu),D_(),zn.render(hr,ni)}uu();document.body.appendChild(sr.createButton(zn));window.addEventListener("resize",()=>{Mn.width=window.innerWidth,Mn.height=window.innerHeight,ni.aspect=Mn.width/Mn.height,ni.updateProjectionMatrix(),zn.setSize(Mn.width,Mn.height),zn.setPixelRatio(Math.min(window.devicePixelRatio,2))});
