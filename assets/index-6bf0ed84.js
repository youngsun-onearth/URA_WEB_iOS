(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const B of document.querySelectorAll('link[rel="modulepreload"]'))C(B);new MutationObserver(B=>{for(const Q of B)if(Q.type==="childList")for(const o of Q.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&C(o)}).observe(document,{childList:!0,subtree:!0});function I(B){const Q={};return B.integrity&&(Q.integrity=B.integrity),B.referrerPolicy&&(Q.referrerPolicy=B.referrerPolicy),B.crossOrigin==="use-credentials"?Q.credentials="include":B.crossOrigin==="anonymous"?Q.credentials="omit":Q.credentials="same-origin",Q}function C(B){if(B.ep)return;B.ep=!0;const Q=I(B);fetch(B.href,Q)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ot="153",CG=0,tD=1,BG=2,fa=1,QG=2,ZC=3,wB=0,Sg=1,vC=2,eB=0,GQ=1,sD=2,DD=3,eD=4,EG=5,aQ=100,iG=101,oG=102,aD=103,nD=104,tG=200,sG=201,DG=202,eG=203,ua=204,Ha=205,aG=206,nG=207,hG=208,wG=209,GG=210,rG=0,cG=1,FG=2,st=3,RG=4,NG=5,yG=6,MG=7,pa=0,UG=1,SG=2,zC=0,KG=1,lG=2,kG=3,dG=4,JG=5,qa=300,cQ=301,FQ=302,Dt=303,et=304,Oi=306,at=1e3,sC=1001,nt=1002,Fg=1003,hD=1004,yo=1005,vg=1006,YG=1007,oE=1008,aB=1009,LG=1010,fG=1011,Zt=1012,ma=1013,sB=1014,DB=1015,tE=1016,xa=1017,ba=1018,mB=1020,uG=1021,DC=1023,HG=1024,pG=1025,xB=1026,RQ=1027,qG=1028,Ta=1029,mG=1030,Va=1031,Wa=1033,Mo=33776,Uo=33777,So=33778,Ko=33779,wD=35840,GD=35841,rD=35842,cD=35843,xG=36196,FD=37492,RD=37496,ND=37808,yD=37809,MD=37810,UD=37811,SD=37812,KD=37813,lD=37814,kD=37815,dD=37816,JD=37817,YD=37818,LD=37819,fD=37820,uD=37821,lo=36492,bG=36283,HD=36284,pD=36285,qD=36286,Oa=3e3,nB=3001,TG=3200,VG=3201,Za=0,WG=1,bB="",QI="srgb",KC="srgb-linear",va="display-p3",ko=7680,OG=519,ZG=512,vG=513,XG=514,PG=515,jG=516,zG=517,_G=518,$G=519,mD=35044,xD="300 es",ht=1035,PC=2e3,ki=2001;class YQ{addEventListener(A,I){this._listeners===void 0&&(this._listeners={});const C=this._listeners;C[A]===void 0&&(C[A]=[]),C[A].indexOf(I)===-1&&C[A].push(I)}hasEventListener(A,I){if(this._listeners===void 0)return!1;const C=this._listeners;return C[A]!==void 0&&C[A].indexOf(I)!==-1}removeEventListener(A,I){if(this._listeners===void 0)return;const B=this._listeners[A];if(B!==void 0){const Q=B.indexOf(I);Q!==-1&&B.splice(Q,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const C=this._listeners[A.type];if(C!==void 0){A.target=this;const B=C.slice(0);for(let Q=0,o=B.length;Q<o;Q++)B[Q].call(this,A);A.target=null}}}const wg=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jo=Math.PI/180,wt=180/Math.PI;function wE(){const g=Math.random()*4294967295|0,A=Math.random()*4294967295|0,I=Math.random()*4294967295|0,C=Math.random()*4294967295|0;return(wg[g&255]+wg[g>>8&255]+wg[g>>16&255]+wg[g>>24&255]+"-"+wg[A&255]+wg[A>>8&255]+"-"+wg[A>>16&15|64]+wg[A>>24&255]+"-"+wg[I&63|128]+wg[I>>8&255]+"-"+wg[I>>16&255]+wg[I>>24&255]+wg[C&255]+wg[C>>8&255]+wg[C>>16&255]+wg[C>>24&255]).toLowerCase()}function Ug(g,A,I){return Math.max(A,Math.min(I,g))}function Ar(g,A){return(g%A+A)%A}function Yo(g,A,I){return(1-I)*g+I*A}function bD(g){return(g&g-1)===0&&g!==0}function Gt(g){return Math.pow(2,Math.floor(Math.log(g)/Math.LN2))}function ZE(g,A){switch(A.constructor){case Float32Array:return g;case Uint32Array:return g/4294967295;case Uint16Array:return g/65535;case Uint8Array:return g/255;case Int32Array:return Math.max(g/2147483647,-1);case Int16Array:return Math.max(g/32767,-1);case Int8Array:return Math.max(g/127,-1);default:throw new Error("Invalid component type.")}}function Yg(g,A){switch(A.constructor){case Float32Array:return g;case Uint32Array:return Math.round(g*4294967295);case Uint16Array:return Math.round(g*65535);case Uint8Array:return Math.round(g*255);case Int32Array:return Math.round(g*2147483647);case Int16Array:return Math.round(g*32767);case Int8Array:return Math.round(g*127);default:throw new Error("Invalid component type.")}}class MI{constructor(A=0,I=0){MI.prototype.isVector2=!0,this.x=A,this.y=I}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,I){return this.x=A,this.y=I,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const I=this.x,C=this.y,B=A.elements;return this.x=B[0]*I+B[3]*C+B[6],this.y=B[1]*I+B[4]*C+B[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this}clampLength(A,I){const C=this.length();return this.divideScalar(C||1).multiplyScalar(Math.max(A,Math.min(I,C)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const C=this.dot(A)/I;return Math.acos(Ug(C,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,C=this.y-A.y;return I*I+C*C}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this}lerpVectors(A,I,C){return this.x=A.x+(I.x-A.x)*C,this.y=A.y+(I.y-A.y)*C,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this}rotateAround(A,I){const C=Math.cos(I),B=Math.sin(I),Q=this.x-A.x,o=this.y-A.y;return this.x=Q*C-o*B+A.x,this.y=Q*B+o*C+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tI{constructor(A,I,C,B,Q,o,t,D,e){tI.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],A!==void 0&&this.set(A,I,C,B,Q,o,t,D,e)}set(A,I,C,B,Q,o,t,D,e){const w=this.elements;return w[0]=A,w[1]=B,w[2]=t,w[3]=I,w[4]=Q,w[5]=D,w[6]=C,w[7]=o,w[8]=e,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const I=this.elements,C=A.elements;return I[0]=C[0],I[1]=C[1],I[2]=C[2],I[3]=C[3],I[4]=C[4],I[5]=C[5],I[6]=C[6],I[7]=C[7],I[8]=C[8],this}extractBasis(A,I,C){return A.setFromMatrix3Column(this,0),I.setFromMatrix3Column(this,1),C.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const I=A.elements;return this.set(I[0],I[4],I[8],I[1],I[5],I[9],I[2],I[6],I[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const C=A.elements,B=I.elements,Q=this.elements,o=C[0],t=C[3],D=C[6],e=C[1],w=C[4],G=C[7],c=C[2],R=C[5],M=C[8],y=B[0],r=B[3],h=B[6],J=B[1],K=B[4],L=B[7],H=B[2],q=B[5],x=B[8];return Q[0]=o*y+t*J+D*H,Q[3]=o*r+t*K+D*q,Q[6]=o*h+t*L+D*x,Q[1]=e*y+w*J+G*H,Q[4]=e*r+w*K+G*q,Q[7]=e*h+w*L+G*x,Q[2]=c*y+R*J+M*H,Q[5]=c*r+R*K+M*q,Q[8]=c*h+R*L+M*x,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[3]*=A,I[6]*=A,I[1]*=A,I[4]*=A,I[7]*=A,I[2]*=A,I[5]*=A,I[8]*=A,this}determinant(){const A=this.elements,I=A[0],C=A[1],B=A[2],Q=A[3],o=A[4],t=A[5],D=A[6],e=A[7],w=A[8];return I*o*w-I*t*e-C*Q*w+C*t*D+B*Q*e-B*o*D}invert(){const A=this.elements,I=A[0],C=A[1],B=A[2],Q=A[3],o=A[4],t=A[5],D=A[6],e=A[7],w=A[8],G=w*o-t*e,c=t*D-w*Q,R=e*Q-o*D,M=I*G+C*c+B*R;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/M;return A[0]=G*y,A[1]=(B*e-w*C)*y,A[2]=(t*C-B*o)*y,A[3]=c*y,A[4]=(w*I-B*D)*y,A[5]=(B*Q-t*I)*y,A[6]=R*y,A[7]=(C*D-e*I)*y,A[8]=(o*I-C*Q)*y,this}transpose(){let A;const I=this.elements;return A=I[1],I[1]=I[3],I[3]=A,A=I[2],I[2]=I[6],I[6]=A,A=I[5],I[5]=I[7],I[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const I=this.elements;return A[0]=I[0],A[1]=I[3],A[2]=I[6],A[3]=I[1],A[4]=I[4],A[5]=I[7],A[6]=I[2],A[7]=I[5],A[8]=I[8],this}setUvTransform(A,I,C,B,Q,o,t){const D=Math.cos(Q),e=Math.sin(Q);return this.set(C*D,C*e,-C*(D*o+e*t)+o+A,-B*e,B*D,-B*(-e*o+D*t)+t+I,0,0,1),this}scale(A,I){return this.premultiply(Lo.makeScale(A,I)),this}rotate(A){return this.premultiply(Lo.makeRotation(-A)),this}translate(A,I){return this.premultiply(Lo.makeTranslation(A,I)),this}makeTranslation(A,I){return A.isVector2?this.set(1,0,A.x,0,1,A.y,0,0,1):this.set(1,0,A,0,1,I,0,0,1),this}makeRotation(A){const I=Math.cos(A),C=Math.sin(A);return this.set(I,-C,0,C,I,0,0,0,1),this}makeScale(A,I){return this.set(A,0,0,0,I,0,0,0,1),this}equals(A){const I=this.elements,C=A.elements;for(let B=0;B<9;B++)if(I[B]!==C[B])return!1;return!0}fromArray(A,I=0){for(let C=0;C<9;C++)this.elements[C]=A[C+I];return this}toArray(A=[],I=0){const C=this.elements;return A[I]=C[0],A[I+1]=C[1],A[I+2]=C[2],A[I+3]=C[3],A[I+4]=C[4],A[I+5]=C[5],A[I+6]=C[6],A[I+7]=C[7],A[I+8]=C[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const Lo=new tI;function Xa(g){for(let A=g.length-1;A>=0;--A)if(g[A]>=65535)return!0;return!1}function di(g){return document.createElementNS("http://www.w3.org/1999/xhtml",g)}const TD={};function CE(g){g in TD||(TD[g]=!0,console.warn(g))}function rQ(g){return g<.04045?g*.0773993808:Math.pow(g*.9478672986+.0521327014,2.4)}function fo(g){return g<.0031308?g*12.92:1.055*Math.pow(g,.41666)-.055}const Ir=new tI().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),gr=new tI().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Cr(g){return g.convertSRGBToLinear().applyMatrix3(gr)}function Br(g){return g.applyMatrix3(Ir).convertLinearToSRGB()}const Qr={[KC]:g=>g,[QI]:g=>g.convertSRGBToLinear(),[va]:Cr},Er={[KC]:g=>g,[QI]:g=>g.convertLinearToSRGB(),[va]:Br},QC={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(g){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!g},get workingColorSpace(){return KC},set workingColorSpace(g){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(g,A,I){if(this.enabled===!1||A===I||!A||!I)return g;const C=Qr[A],B=Er[I];if(C===void 0||B===void 0)throw new Error(`Unsupported color space conversion, "${A}" to "${I}".`);return B(C(g))},fromWorkingColorSpace:function(g,A){return this.convert(g,this.workingColorSpace,A)},toWorkingColorSpace:function(g,A){return this.convert(g,A,this.workingColorSpace)}};let jB;class Pa{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let I;if(A instanceof HTMLCanvasElement)I=A;else{jB===void 0&&(jB=di("canvas")),jB.width=A.width,jB.height=A.height;const C=jB.getContext("2d");A instanceof ImageData?C.putImageData(A,0,0):C.drawImage(A,0,0,A.width,A.height),I=jB}return I.width>2048||I.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),I.toDataURL("image/jpeg",.6)):I.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const I=di("canvas");I.width=A.width,I.height=A.height;const C=I.getContext("2d");C.drawImage(A,0,0,A.width,A.height);const B=C.getImageData(0,0,A.width,A.height),Q=B.data;for(let o=0;o<Q.length;o++)Q[o]=rQ(Q[o]/255)*255;return C.putImageData(B,0,0),I}else if(A.data){const I=A.data.slice(0);for(let C=0;C<I.length;C++)I instanceof Uint8Array||I instanceof Uint8ClampedArray?I[C]=Math.floor(rQ(I[C]/255)*255):I[C]=rQ(I[C]);return{data:I,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}let ir=0;class ja{constructor(A=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ir++}),this.uuid=wE(),this.data=A,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const C={uuid:this.uuid,url:""},B=this.data;if(B!==null){let Q;if(Array.isArray(B)){Q=[];for(let o=0,t=B.length;o<t;o++)B[o].isDataTexture?Q.push(uo(B[o].image)):Q.push(uo(B[o]))}else Q=uo(B);C.url=Q}return I||(A.images[this.uuid]=C),C}}function uo(g){return typeof HTMLImageElement<"u"&&g instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&g instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&g instanceof ImageBitmap?Pa.getDataURL(g):g.data?{data:Array.from(g.data),width:g.width,height:g.height,type:g.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let or=0;class mg extends YQ{constructor(A=mg.DEFAULT_IMAGE,I=mg.DEFAULT_MAPPING,C=sC,B=sC,Q=vg,o=oE,t=DC,D=aB,e=mg.DEFAULT_ANISOTROPY,w=bB){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:or++}),this.uuid=wE(),this.name="",this.source=new ja(A),this.mipmaps=[],this.mapping=I,this.channel=0,this.wrapS=C,this.wrapT=B,this.magFilter=Q,this.minFilter=o,this.anisotropy=e,this.format=t,this.internalFormat=null,this.type=D,this.offset=new MI(0,0),this.repeat=new MI(1,1),this.center=new MI(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tI,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof w=="string"?this.colorSpace=w:(CE("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=w===nB?QI:bB),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(A=null){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.channel=A.channel,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.colorSpace=A.colorSpace,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const C={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(C.userData=this.userData),I||(A.textures[this.uuid]=C),C}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==qa)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case at:A.x=A.x-Math.floor(A.x);break;case sC:A.x=A.x<0?0:1;break;case nt:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case at:A.y=A.y-Math.floor(A.y);break;case sC:A.y=A.y<0?0:1;break;case nt:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return CE("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===QI?nB:Oa}set encoding(A){CE("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=A===nB?QI:bB}}mg.DEFAULT_IMAGE=null;mg.DEFAULT_MAPPING=qa;mg.DEFAULT_ANISOTROPY=1;class ng{constructor(A=0,I=0,C=0,B=1){ng.prototype.isVector4=!0,this.x=A,this.y=I,this.z=C,this.w=B}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,I,C,B){return this.x=A,this.y=I,this.z=C,this.w=B,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;case 3:this.w=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this.w=A.w+I.w,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this.w+=A.w*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this.w=A.w-I.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const I=this.x,C=this.y,B=this.z,Q=this.w,o=A.elements;return this.x=o[0]*I+o[4]*C+o[8]*B+o[12]*Q,this.y=o[1]*I+o[5]*C+o[9]*B+o[13]*Q,this.z=o[2]*I+o[6]*C+o[10]*B+o[14]*Q,this.w=o[3]*I+o[7]*C+o[11]*B+o[15]*Q,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const I=Math.sqrt(1-A.w*A.w);return I<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/I,this.y=A.y/I,this.z=A.z/I),this}setAxisAngleFromRotationMatrix(A){let I,C,B,Q;const D=A.elements,e=D[0],w=D[4],G=D[8],c=D[1],R=D[5],M=D[9],y=D[2],r=D[6],h=D[10];if(Math.abs(w-c)<.01&&Math.abs(G-y)<.01&&Math.abs(M-r)<.01){if(Math.abs(w+c)<.1&&Math.abs(G+y)<.1&&Math.abs(M+r)<.1&&Math.abs(e+R+h-3)<.1)return this.set(1,0,0,0),this;I=Math.PI;const K=(e+1)/2,L=(R+1)/2,H=(h+1)/2,q=(w+c)/4,x=(G+y)/4,W=(M+r)/4;return K>L&&K>H?K<.01?(C=0,B=.707106781,Q=.707106781):(C=Math.sqrt(K),B=q/C,Q=x/C):L>H?L<.01?(C=.707106781,B=0,Q=.707106781):(B=Math.sqrt(L),C=q/B,Q=W/B):H<.01?(C=.707106781,B=.707106781,Q=0):(Q=Math.sqrt(H),C=x/Q,B=W/Q),this.set(C,B,Q,I),this}let J=Math.sqrt((r-M)*(r-M)+(G-y)*(G-y)+(c-w)*(c-w));return Math.abs(J)<.001&&(J=1),this.x=(r-M)/J,this.y=(G-y)/J,this.z=(c-w)/J,this.w=Math.acos((e+R+h-1)/2),this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this.w=Math.max(A.w,Math.min(I.w,this.w)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this.w=Math.max(A,Math.min(I,this.w)),this}clampLength(A,I){const C=this.length();return this.divideScalar(C||1).multiplyScalar(Math.max(A,Math.min(I,C)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this.w+=(A.w-this.w)*I,this}lerpVectors(A,I,C){return this.x=A.x+(I.x-A.x)*C,this.y=A.y+(I.y-A.y)*C,this.z=A.z+(I.z-A.z)*C,this.w=A.w+(I.w-A.w)*C,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this.w=A[I+3],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A[I+3]=this.w,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this.w=A.getW(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class OB extends YQ{constructor(A=1,I=1,C={}){super(),this.isWebGLRenderTarget=!0,this.width=A,this.height=I,this.depth=1,this.scissor=new ng(0,0,A,I),this.scissorTest=!1,this.viewport=new ng(0,0,A,I);const B={width:A,height:I,depth:1};C.encoding!==void 0&&(CE("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),C.colorSpace=C.encoding===nB?QI:bB),this.texture=new mg(B,C.mapping,C.wrapS,C.wrapT,C.magFilter,C.minFilter,C.format,C.type,C.anisotropy,C.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=C.generateMipmaps!==void 0?C.generateMipmaps:!1,this.texture.internalFormat=C.internalFormat!==void 0?C.internalFormat:null,this.texture.minFilter=C.minFilter!==void 0?C.minFilter:vg,this.depthBuffer=C.depthBuffer!==void 0?C.depthBuffer:!0,this.stencilBuffer=C.stencilBuffer!==void 0?C.stencilBuffer:!1,this.depthTexture=C.depthTexture!==void 0?C.depthTexture:null,this.samples=C.samples!==void 0?C.samples:0}setSize(A,I,C=1){(this.width!==A||this.height!==I||this.depth!==C)&&(this.width=A,this.height=I,this.depth=C,this.texture.image.width=A,this.texture.image.height=I,this.texture.image.depth=C,this.dispose()),this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.texture=A.texture.clone(),this.texture.isRenderTargetTexture=!0;const I=Object.assign({},A.texture.image);return this.texture.source=new ja(I),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class za extends mg{constructor(A=null,I=1,C=1,B=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:I,height:C,depth:B},this.magFilter=Fg,this.minFilter=Fg,this.wrapR=sC,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tr extends mg{constructor(A=null,I=1,C=1,B=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:I,height:C,depth:B},this.magFilter=Fg,this.minFilter=Fg,this.wrapR=sC,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class LQ{constructor(A=0,I=0,C=0,B=1){this.isQuaternion=!0,this._x=A,this._y=I,this._z=C,this._w=B}static slerpFlat(A,I,C,B,Q,o,t){let D=C[B+0],e=C[B+1],w=C[B+2],G=C[B+3];const c=Q[o+0],R=Q[o+1],M=Q[o+2],y=Q[o+3];if(t===0){A[I+0]=D,A[I+1]=e,A[I+2]=w,A[I+3]=G;return}if(t===1){A[I+0]=c,A[I+1]=R,A[I+2]=M,A[I+3]=y;return}if(G!==y||D!==c||e!==R||w!==M){let r=1-t;const h=D*c+e*R+w*M+G*y,J=h>=0?1:-1,K=1-h*h;if(K>Number.EPSILON){const H=Math.sqrt(K),q=Math.atan2(H,h*J);r=Math.sin(r*q)/H,t=Math.sin(t*q)/H}const L=t*J;if(D=D*r+c*L,e=e*r+R*L,w=w*r+M*L,G=G*r+y*L,r===1-t){const H=1/Math.sqrt(D*D+e*e+w*w+G*G);D*=H,e*=H,w*=H,G*=H}}A[I]=D,A[I+1]=e,A[I+2]=w,A[I+3]=G}static multiplyQuaternionsFlat(A,I,C,B,Q,o){const t=C[B],D=C[B+1],e=C[B+2],w=C[B+3],G=Q[o],c=Q[o+1],R=Q[o+2],M=Q[o+3];return A[I]=t*M+w*G+D*R-e*c,A[I+1]=D*M+w*c+e*G-t*R,A[I+2]=e*M+w*R+t*c-D*G,A[I+3]=w*M-t*G-D*c-e*R,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,I,C,B){return this._x=A,this._y=I,this._z=C,this._w=B,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,I){const C=A._x,B=A._y,Q=A._z,o=A._order,t=Math.cos,D=Math.sin,e=t(C/2),w=t(B/2),G=t(Q/2),c=D(C/2),R=D(B/2),M=D(Q/2);switch(o){case"XYZ":this._x=c*w*G+e*R*M,this._y=e*R*G-c*w*M,this._z=e*w*M+c*R*G,this._w=e*w*G-c*R*M;break;case"YXZ":this._x=c*w*G+e*R*M,this._y=e*R*G-c*w*M,this._z=e*w*M-c*R*G,this._w=e*w*G+c*R*M;break;case"ZXY":this._x=c*w*G-e*R*M,this._y=e*R*G+c*w*M,this._z=e*w*M+c*R*G,this._w=e*w*G-c*R*M;break;case"ZYX":this._x=c*w*G-e*R*M,this._y=e*R*G+c*w*M,this._z=e*w*M-c*R*G,this._w=e*w*G+c*R*M;break;case"YZX":this._x=c*w*G+e*R*M,this._y=e*R*G+c*w*M,this._z=e*w*M-c*R*G,this._w=e*w*G-c*R*M;break;case"XZY":this._x=c*w*G-e*R*M,this._y=e*R*G-c*w*M,this._z=e*w*M+c*R*G,this._w=e*w*G+c*R*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return I!==!1&&this._onChangeCallback(),this}setFromAxisAngle(A,I){const C=I/2,B=Math.sin(C);return this._x=A.x*B,this._y=A.y*B,this._z=A.z*B,this._w=Math.cos(C),this._onChangeCallback(),this}setFromRotationMatrix(A){const I=A.elements,C=I[0],B=I[4],Q=I[8],o=I[1],t=I[5],D=I[9],e=I[2],w=I[6],G=I[10],c=C+t+G;if(c>0){const R=.5/Math.sqrt(c+1);this._w=.25/R,this._x=(w-D)*R,this._y=(Q-e)*R,this._z=(o-B)*R}else if(C>t&&C>G){const R=2*Math.sqrt(1+C-t-G);this._w=(w-D)/R,this._x=.25*R,this._y=(B+o)/R,this._z=(Q+e)/R}else if(t>G){const R=2*Math.sqrt(1+t-C-G);this._w=(Q-e)/R,this._x=(B+o)/R,this._y=.25*R,this._z=(D+w)/R}else{const R=2*Math.sqrt(1+G-C-t);this._w=(o-B)/R,this._x=(Q+e)/R,this._y=(D+w)/R,this._z=.25*R}return this._onChangeCallback(),this}setFromUnitVectors(A,I){let C=A.dot(I)+1;return C<Number.EPSILON?(C=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=C):(this._x=0,this._y=-A.z,this._z=A.y,this._w=C)):(this._x=A.y*I.z-A.z*I.y,this._y=A.z*I.x-A.x*I.z,this._z=A.x*I.y-A.y*I.x,this._w=C),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(Ug(this.dot(A),-1,1)))}rotateTowards(A,I){const C=this.angleTo(A);if(C===0)return this;const B=Math.min(1,I/C);return this.slerp(A,B),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,I){const C=A._x,B=A._y,Q=A._z,o=A._w,t=I._x,D=I._y,e=I._z,w=I._w;return this._x=C*w+o*t+B*e-Q*D,this._y=B*w+o*D+Q*t-C*e,this._z=Q*w+o*e+C*D-B*t,this._w=o*w-C*t-B*D-Q*e,this._onChangeCallback(),this}slerp(A,I){if(I===0)return this;if(I===1)return this.copy(A);const C=this._x,B=this._y,Q=this._z,o=this._w;let t=o*A._w+C*A._x+B*A._y+Q*A._z;if(t<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,t=-t):this.copy(A),t>=1)return this._w=o,this._x=C,this._y=B,this._z=Q,this;const D=1-t*t;if(D<=Number.EPSILON){const R=1-I;return this._w=R*o+I*this._w,this._x=R*C+I*this._x,this._y=R*B+I*this._y,this._z=R*Q+I*this._z,this.normalize(),this._onChangeCallback(),this}const e=Math.sqrt(D),w=Math.atan2(e,t),G=Math.sin((1-I)*w)/e,c=Math.sin(I*w)/e;return this._w=o*G+this._w*c,this._x=C*G+this._x*c,this._y=B*G+this._y*c,this._z=Q*G+this._z*c,this._onChangeCallback(),this}slerpQuaternions(A,I,C){return this.copy(A).slerp(I,C)}random(){const A=Math.random(),I=Math.sqrt(1-A),C=Math.sqrt(A),B=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random();return this.set(I*Math.cos(B),C*Math.sin(Q),C*Math.cos(Q),I*Math.sin(B))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,I=0){return this._x=A[I],this._y=A[I+1],this._z=A[I+2],this._w=A[I+3],this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._w,A}fromBufferAttribute(A,I){return this._x=A.getX(I),this._y=A.getY(I),this._z=A.getZ(I),this._w=A.getW(I),this}toJSON(){return this.toArray()}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(A=0,I=0,C=0){P.prototype.isVector3=!0,this.x=A,this.y=I,this.z=C}set(A,I,C){return C===void 0&&(C=this.z),this.x=A,this.y=I,this.z=C,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,I){return this.x=A.x*I.x,this.y=A.y*I.y,this.z=A.z*I.z,this}applyEuler(A){return this.applyQuaternion(VD.setFromEuler(A))}applyAxisAngle(A,I){return this.applyQuaternion(VD.setFromAxisAngle(A,I))}applyMatrix3(A){const I=this.x,C=this.y,B=this.z,Q=A.elements;return this.x=Q[0]*I+Q[3]*C+Q[6]*B,this.y=Q[1]*I+Q[4]*C+Q[7]*B,this.z=Q[2]*I+Q[5]*C+Q[8]*B,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const I=this.x,C=this.y,B=this.z,Q=A.elements,o=1/(Q[3]*I+Q[7]*C+Q[11]*B+Q[15]);return this.x=(Q[0]*I+Q[4]*C+Q[8]*B+Q[12])*o,this.y=(Q[1]*I+Q[5]*C+Q[9]*B+Q[13])*o,this.z=(Q[2]*I+Q[6]*C+Q[10]*B+Q[14])*o,this}applyQuaternion(A){const I=this.x,C=this.y,B=this.z,Q=A.x,o=A.y,t=A.z,D=A.w,e=D*I+o*B-t*C,w=D*C+t*I-Q*B,G=D*B+Q*C-o*I,c=-Q*I-o*C-t*B;return this.x=e*D+c*-Q+w*-t-G*-o,this.y=w*D+c*-o+G*-Q-e*-t,this.z=G*D+c*-t+e*-o-w*-Q,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const I=this.x,C=this.y,B=this.z,Q=A.elements;return this.x=Q[0]*I+Q[4]*C+Q[8]*B,this.y=Q[1]*I+Q[5]*C+Q[9]*B,this.z=Q[2]*I+Q[6]*C+Q[10]*B,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this}clampLength(A,I){const C=this.length();return this.divideScalar(C||1).multiplyScalar(Math.max(A,Math.min(I,C)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this}lerpVectors(A,I,C){return this.x=A.x+(I.x-A.x)*C,this.y=A.y+(I.y-A.y)*C,this.z=A.z+(I.z-A.z)*C,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,I){const C=A.x,B=A.y,Q=A.z,o=I.x,t=I.y,D=I.z;return this.x=B*D-Q*t,this.y=Q*o-C*D,this.z=C*t-B*o,this}projectOnVector(A){const I=A.lengthSq();if(I===0)return this.set(0,0,0);const C=A.dot(this)/I;return this.copy(A).multiplyScalar(C)}projectOnPlane(A){return Ho.copy(this).projectOnVector(A),this.sub(Ho)}reflect(A){return this.sub(Ho.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const C=this.dot(A)/I;return Math.acos(Ug(C,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,C=this.y-A.y,B=this.z-A.z;return I*I+C*C+B*B}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,I,C){const B=Math.sin(I)*A;return this.x=B*Math.sin(C),this.y=Math.cos(I)*A,this.z=B*Math.cos(C),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,I,C){return this.x=A*Math.sin(I),this.y=C,this.z=A*Math.cos(I),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this}setFromMatrixScale(A){const I=this.setFromMatrixColumn(A,0).length(),C=this.setFromMatrixColumn(A,1).length(),B=this.setFromMatrixColumn(A,2).length();return this.x=I,this.y=C,this.z=B,this}setFromMatrixColumn(A,I){return this.fromArray(A.elements,I*4)}setFromMatrix3Column(A,I){return this.fromArray(A.elements,I*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}setFromColor(A){return this.x=A.r,this.y=A.g,this.z=A.b,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=(Math.random()-.5)*2,I=Math.random()*Math.PI*2,C=Math.sqrt(1-A**2);return this.x=C*Math.cos(I),this.y=C*Math.sin(I),this.z=A,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ho=new P,VD=new LQ;class GE{constructor(A=new P(1/0,1/0,1/0),I=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=I}set(A,I){return this.min.copy(A),this.max.copy(I),this}setFromArray(A){this.makeEmpty();for(let I=0,C=A.length;I<C;I+=3)this.expandByPoint(xC.fromArray(A,I));return this}setFromBufferAttribute(A){this.makeEmpty();for(let I=0,C=A.count;I<C;I++)this.expandByPoint(xC.fromBufferAttribute(A,I));return this}setFromPoints(A){this.makeEmpty();for(let I=0,C=A.length;I<C;I++)this.expandByPoint(A[I]);return this}setFromCenterAndSize(A,I){const C=xC.copy(I).multiplyScalar(.5);return this.min.copy(A).sub(C),this.max.copy(A).add(C),this}setFromObject(A,I=!1){return this.makeEmpty(),this.expandByObject(A,I)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,I=!1){if(A.updateWorldMatrix(!1,!1),A.boundingBox!==void 0)A.boundingBox===null&&A.computeBoundingBox(),zB.copy(A.boundingBox),zB.applyMatrix4(A.matrixWorld),this.union(zB);else{const B=A.geometry;if(B!==void 0)if(I&&B.attributes!==void 0&&B.attributes.position!==void 0){const Q=B.attributes.position;for(let o=0,t=Q.count;o<t;o++)xC.fromBufferAttribute(Q,o).applyMatrix4(A.matrixWorld),this.expandByPoint(xC)}else B.boundingBox===null&&B.computeBoundingBox(),zB.copy(B.boundingBox),zB.applyMatrix4(A.matrixWorld),this.union(zB)}const C=A.children;for(let B=0,Q=C.length;B<Q;B++)this.expandByObject(C[B],I);return this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y||A.z<this.min.z||A.z>this.max.z)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,I){return I.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y||A.max.z<this.min.z||A.min.z>this.max.z)}intersectsSphere(A){return this.clampPoint(A.center,xC),xC.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let I,C;return A.normal.x>0?(I=A.normal.x*this.min.x,C=A.normal.x*this.max.x):(I=A.normal.x*this.max.x,C=A.normal.x*this.min.x),A.normal.y>0?(I+=A.normal.y*this.min.y,C+=A.normal.y*this.max.y):(I+=A.normal.y*this.max.y,C+=A.normal.y*this.min.y),A.normal.z>0?(I+=A.normal.z*this.min.z,C+=A.normal.z*this.max.z):(I+=A.normal.z*this.max.z,C+=A.normal.z*this.min.z),I<=-A.constant&&C>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(PQ),vE.subVectors(this.max,PQ),_B.subVectors(A.a,PQ),$B.subVectors(A.b,PQ),AQ.subVectors(A.c,PQ),QB.subVectors($B,_B),EB.subVectors(AQ,$B),kB.subVectors(_B,AQ);let I=[0,-QB.z,QB.y,0,-EB.z,EB.y,0,-kB.z,kB.y,QB.z,0,-QB.x,EB.z,0,-EB.x,kB.z,0,-kB.x,-QB.y,QB.x,0,-EB.y,EB.x,0,-kB.y,kB.x,0];return!po(I,_B,$B,AQ,vE)||(I=[1,0,0,0,1,0,0,0,1],!po(I,_B,$B,AQ,vE))?!1:(XE.crossVectors(QB,EB),I=[XE.x,XE.y,XE.z],po(I,_B,$B,AQ,vE))}clampPoint(A,I){return I.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,xC).distanceTo(A)}getBoundingSphere(A){return this.isEmpty()?A.makeEmpty():(this.getCenter(A.center),A.radius=this.getSize(xC).length()*.5),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(mC[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),mC[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),mC[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),mC[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),mC[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),mC[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),mC[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),mC[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(mC),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const mC=[new P,new P,new P,new P,new P,new P,new P,new P],xC=new P,zB=new GE,_B=new P,$B=new P,AQ=new P,QB=new P,EB=new P,kB=new P,PQ=new P,vE=new P,XE=new P,dB=new P;function po(g,A,I,C,B){for(let Q=0,o=g.length-3;Q<=o;Q+=3){dB.fromArray(g,Q);const t=B.x*Math.abs(dB.x)+B.y*Math.abs(dB.y)+B.z*Math.abs(dB.z),D=A.dot(dB),e=I.dot(dB),w=C.dot(dB);if(Math.max(-Math.max(D,e,w),Math.min(D,e,w))>t)return!1}return!0}const sr=new GE,jQ=new P,qo=new P;class vt{constructor(A=new P,I=-1){this.center=A,this.radius=I}set(A,I){return this.center.copy(A),this.radius=I,this}setFromPoints(A,I){const C=this.center;I!==void 0?C.copy(I):sr.setFromPoints(A).getCenter(C);let B=0;for(let Q=0,o=A.length;Q<o;Q++)B=Math.max(B,C.distanceToSquared(A[Q]));return this.radius=Math.sqrt(B),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const I=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=I*I}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,I){const C=this.center.distanceToSquared(A);return I.copy(A),C>this.radius*this.radius&&(I.sub(this.center).normalize(),I.multiplyScalar(this.radius).add(this.center)),I}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;jQ.subVectors(A,this.center);const I=jQ.lengthSq();if(I>this.radius*this.radius){const C=Math.sqrt(I),B=(C-this.radius)*.5;this.center.addScaledVector(jQ,B/C),this.radius+=B}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(qo.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(jQ.copy(A.center).add(qo)),this.expandByPoint(jQ.copy(A.center).sub(qo))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bC=new P,mo=new P,PE=new P,iB=new P,xo=new P,jE=new P,bo=new P;class Dr{constructor(A=new P,I=new P(0,0,-1)){this.origin=A,this.direction=I}set(A,I){return this.origin.copy(A),this.direction.copy(I),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,I){return I.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,bC)),this}closestPointToPoint(A,I){I.subVectors(A,this.origin);const C=I.dot(this.direction);return C<0?I.copy(this.origin):I.copy(this.origin).addScaledVector(this.direction,C)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const I=bC.subVectors(A,this.origin).dot(this.direction);return I<0?this.origin.distanceToSquared(A):(bC.copy(this.origin).addScaledVector(this.direction,I),bC.distanceToSquared(A))}distanceSqToSegment(A,I,C,B){mo.copy(A).add(I).multiplyScalar(.5),PE.copy(I).sub(A).normalize(),iB.copy(this.origin).sub(mo);const Q=A.distanceTo(I)*.5,o=-this.direction.dot(PE),t=iB.dot(this.direction),D=-iB.dot(PE),e=iB.lengthSq(),w=Math.abs(1-o*o);let G,c,R,M;if(w>0)if(G=o*D-t,c=o*t-D,M=Q*w,G>=0)if(c>=-M)if(c<=M){const y=1/w;G*=y,c*=y,R=G*(G+o*c+2*t)+c*(o*G+c+2*D)+e}else c=Q,G=Math.max(0,-(o*c+t)),R=-G*G+c*(c+2*D)+e;else c=-Q,G=Math.max(0,-(o*c+t)),R=-G*G+c*(c+2*D)+e;else c<=-M?(G=Math.max(0,-(-o*Q+t)),c=G>0?-Q:Math.min(Math.max(-Q,-D),Q),R=-G*G+c*(c+2*D)+e):c<=M?(G=0,c=Math.min(Math.max(-Q,-D),Q),R=c*(c+2*D)+e):(G=Math.max(0,-(o*Q+t)),c=G>0?Q:Math.min(Math.max(-Q,-D),Q),R=-G*G+c*(c+2*D)+e);else c=o>0?-Q:Q,G=Math.max(0,-(o*c+t)),R=-G*G+c*(c+2*D)+e;return C&&C.copy(this.origin).addScaledVector(this.direction,G),B&&B.copy(mo).addScaledVector(PE,c),R}intersectSphere(A,I){bC.subVectors(A.center,this.origin);const C=bC.dot(this.direction),B=bC.dot(bC)-C*C,Q=A.radius*A.radius;if(B>Q)return null;const o=Math.sqrt(Q-B),t=C-o,D=C+o;return D<0?null:t<0?this.at(D,I):this.at(t,I)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const I=A.normal.dot(this.direction);if(I===0)return A.distanceToPoint(this.origin)===0?0:null;const C=-(this.origin.dot(A.normal)+A.constant)/I;return C>=0?C:null}intersectPlane(A,I){const C=this.distanceToPlane(A);return C===null?null:this.at(C,I)}intersectsPlane(A){const I=A.distanceToPoint(this.origin);return I===0||A.normal.dot(this.direction)*I<0}intersectBox(A,I){let C,B,Q,o,t,D;const e=1/this.direction.x,w=1/this.direction.y,G=1/this.direction.z,c=this.origin;return e>=0?(C=(A.min.x-c.x)*e,B=(A.max.x-c.x)*e):(C=(A.max.x-c.x)*e,B=(A.min.x-c.x)*e),w>=0?(Q=(A.min.y-c.y)*w,o=(A.max.y-c.y)*w):(Q=(A.max.y-c.y)*w,o=(A.min.y-c.y)*w),C>o||Q>B||((Q>C||isNaN(C))&&(C=Q),(o<B||isNaN(B))&&(B=o),G>=0?(t=(A.min.z-c.z)*G,D=(A.max.z-c.z)*G):(t=(A.max.z-c.z)*G,D=(A.min.z-c.z)*G),C>D||t>B)||((t>C||C!==C)&&(C=t),(D<B||B!==B)&&(B=D),B<0)?null:this.at(C>=0?C:B,I)}intersectsBox(A){return this.intersectBox(A,bC)!==null}intersectTriangle(A,I,C,B,Q){xo.subVectors(I,A),jE.subVectors(C,A),bo.crossVectors(xo,jE);let o=this.direction.dot(bo),t;if(o>0){if(B)return null;t=1}else if(o<0)t=-1,o=-o;else return null;iB.subVectors(this.origin,A);const D=t*this.direction.dot(jE.crossVectors(iB,jE));if(D<0)return null;const e=t*this.direction.dot(xo.cross(iB));if(e<0||D+e>o)return null;const w=-t*iB.dot(bo);return w<0?null:this.at(w/o,Q)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ig{constructor(A,I,C,B,Q,o,t,D,e,w,G,c,R,M,y,r){Ig.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],A!==void 0&&this.set(A,I,C,B,Q,o,t,D,e,w,G,c,R,M,y,r)}set(A,I,C,B,Q,o,t,D,e,w,G,c,R,M,y,r){const h=this.elements;return h[0]=A,h[4]=I,h[8]=C,h[12]=B,h[1]=Q,h[5]=o,h[9]=t,h[13]=D,h[2]=e,h[6]=w,h[10]=G,h[14]=c,h[3]=R,h[7]=M,h[11]=y,h[15]=r,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ig().fromArray(this.elements)}copy(A){const I=this.elements,C=A.elements;return I[0]=C[0],I[1]=C[1],I[2]=C[2],I[3]=C[3],I[4]=C[4],I[5]=C[5],I[6]=C[6],I[7]=C[7],I[8]=C[8],I[9]=C[9],I[10]=C[10],I[11]=C[11],I[12]=C[12],I[13]=C[13],I[14]=C[14],I[15]=C[15],this}copyPosition(A){const I=this.elements,C=A.elements;return I[12]=C[12],I[13]=C[13],I[14]=C[14],this}setFromMatrix3(A){const I=A.elements;return this.set(I[0],I[3],I[6],0,I[1],I[4],I[7],0,I[2],I[5],I[8],0,0,0,0,1),this}extractBasis(A,I,C){return A.setFromMatrixColumn(this,0),I.setFromMatrixColumn(this,1),C.setFromMatrixColumn(this,2),this}makeBasis(A,I,C){return this.set(A.x,I.x,C.x,0,A.y,I.y,C.y,0,A.z,I.z,C.z,0,0,0,0,1),this}extractRotation(A){const I=this.elements,C=A.elements,B=1/IQ.setFromMatrixColumn(A,0).length(),Q=1/IQ.setFromMatrixColumn(A,1).length(),o=1/IQ.setFromMatrixColumn(A,2).length();return I[0]=C[0]*B,I[1]=C[1]*B,I[2]=C[2]*B,I[3]=0,I[4]=C[4]*Q,I[5]=C[5]*Q,I[6]=C[6]*Q,I[7]=0,I[8]=C[8]*o,I[9]=C[9]*o,I[10]=C[10]*o,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromEuler(A){const I=this.elements,C=A.x,B=A.y,Q=A.z,o=Math.cos(C),t=Math.sin(C),D=Math.cos(B),e=Math.sin(B),w=Math.cos(Q),G=Math.sin(Q);if(A.order==="XYZ"){const c=o*w,R=o*G,M=t*w,y=t*G;I[0]=D*w,I[4]=-D*G,I[8]=e,I[1]=R+M*e,I[5]=c-y*e,I[9]=-t*D,I[2]=y-c*e,I[6]=M+R*e,I[10]=o*D}else if(A.order==="YXZ"){const c=D*w,R=D*G,M=e*w,y=e*G;I[0]=c+y*t,I[4]=M*t-R,I[8]=o*e,I[1]=o*G,I[5]=o*w,I[9]=-t,I[2]=R*t-M,I[6]=y+c*t,I[10]=o*D}else if(A.order==="ZXY"){const c=D*w,R=D*G,M=e*w,y=e*G;I[0]=c-y*t,I[4]=-o*G,I[8]=M+R*t,I[1]=R+M*t,I[5]=o*w,I[9]=y-c*t,I[2]=-o*e,I[6]=t,I[10]=o*D}else if(A.order==="ZYX"){const c=o*w,R=o*G,M=t*w,y=t*G;I[0]=D*w,I[4]=M*e-R,I[8]=c*e+y,I[1]=D*G,I[5]=y*e+c,I[9]=R*e-M,I[2]=-e,I[6]=t*D,I[10]=o*D}else if(A.order==="YZX"){const c=o*D,R=o*e,M=t*D,y=t*e;I[0]=D*w,I[4]=y-c*G,I[8]=M*G+R,I[1]=G,I[5]=o*w,I[9]=-t*w,I[2]=-e*w,I[6]=R*G+M,I[10]=c-y*G}else if(A.order==="XZY"){const c=o*D,R=o*e,M=t*D,y=t*e;I[0]=D*w,I[4]=-G,I[8]=e*w,I[1]=c*G+y,I[5]=o*w,I[9]=R*G-M,I[2]=M*G-R,I[6]=t*w,I[10]=y*G+c}return I[3]=0,I[7]=0,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromQuaternion(A){return this.compose(er,A,ar)}lookAt(A,I,C){const B=this.elements;return Lg.subVectors(A,I),Lg.lengthSq()===0&&(Lg.z=1),Lg.normalize(),oB.crossVectors(C,Lg),oB.lengthSq()===0&&(Math.abs(C.z)===1?Lg.x+=1e-4:Lg.z+=1e-4,Lg.normalize(),oB.crossVectors(C,Lg)),oB.normalize(),zE.crossVectors(Lg,oB),B[0]=oB.x,B[4]=zE.x,B[8]=Lg.x,B[1]=oB.y,B[5]=zE.y,B[9]=Lg.y,B[2]=oB.z,B[6]=zE.z,B[10]=Lg.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const C=A.elements,B=I.elements,Q=this.elements,o=C[0],t=C[4],D=C[8],e=C[12],w=C[1],G=C[5],c=C[9],R=C[13],M=C[2],y=C[6],r=C[10],h=C[14],J=C[3],K=C[7],L=C[11],H=C[15],q=B[0],x=B[4],W=B[8],l=B[12],u=B[1],EA=B[5],aA=B[9],X=B[13],_=B[2],$=B[6],tA=B[10],BA=B[14],iA=B[3],nA=B[7],oA=B[11],uA=B[15];return Q[0]=o*q+t*u+D*_+e*iA,Q[4]=o*x+t*EA+D*$+e*nA,Q[8]=o*W+t*aA+D*tA+e*oA,Q[12]=o*l+t*X+D*BA+e*uA,Q[1]=w*q+G*u+c*_+R*iA,Q[5]=w*x+G*EA+c*$+R*nA,Q[9]=w*W+G*aA+c*tA+R*oA,Q[13]=w*l+G*X+c*BA+R*uA,Q[2]=M*q+y*u+r*_+h*iA,Q[6]=M*x+y*EA+r*$+h*nA,Q[10]=M*W+y*aA+r*tA+h*oA,Q[14]=M*l+y*X+r*BA+h*uA,Q[3]=J*q+K*u+L*_+H*iA,Q[7]=J*x+K*EA+L*$+H*nA,Q[11]=J*W+K*aA+L*tA+H*oA,Q[15]=J*l+K*X+L*BA+H*uA,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[4]*=A,I[8]*=A,I[12]*=A,I[1]*=A,I[5]*=A,I[9]*=A,I[13]*=A,I[2]*=A,I[6]*=A,I[10]*=A,I[14]*=A,I[3]*=A,I[7]*=A,I[11]*=A,I[15]*=A,this}determinant(){const A=this.elements,I=A[0],C=A[4],B=A[8],Q=A[12],o=A[1],t=A[5],D=A[9],e=A[13],w=A[2],G=A[6],c=A[10],R=A[14],M=A[3],y=A[7],r=A[11],h=A[15];return M*(+Q*D*G-B*e*G-Q*t*c+C*e*c+B*t*R-C*D*R)+y*(+I*D*R-I*e*c+Q*o*c-B*o*R+B*e*w-Q*D*w)+r*(+I*e*G-I*t*R-Q*o*G+C*o*R+Q*t*w-C*e*w)+h*(-B*t*w-I*D*G+I*t*c+B*o*G-C*o*c+C*D*w)}transpose(){const A=this.elements;let I;return I=A[1],A[1]=A[4],A[4]=I,I=A[2],A[2]=A[8],A[8]=I,I=A[6],A[6]=A[9],A[9]=I,I=A[3],A[3]=A[12],A[12]=I,I=A[7],A[7]=A[13],A[13]=I,I=A[11],A[11]=A[14],A[14]=I,this}setPosition(A,I,C){const B=this.elements;return A.isVector3?(B[12]=A.x,B[13]=A.y,B[14]=A.z):(B[12]=A,B[13]=I,B[14]=C),this}invert(){const A=this.elements,I=A[0],C=A[1],B=A[2],Q=A[3],o=A[4],t=A[5],D=A[6],e=A[7],w=A[8],G=A[9],c=A[10],R=A[11],M=A[12],y=A[13],r=A[14],h=A[15],J=G*r*e-y*c*e+y*D*R-t*r*R-G*D*h+t*c*h,K=M*c*e-w*r*e-M*D*R+o*r*R+w*D*h-o*c*h,L=w*y*e-M*G*e+M*t*R-o*y*R-w*t*h+o*G*h,H=M*G*D-w*y*D-M*t*c+o*y*c+w*t*r-o*G*r,q=I*J+C*K+B*L+Q*H;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const x=1/q;return A[0]=J*x,A[1]=(y*c*Q-G*r*Q-y*B*R+C*r*R+G*B*h-C*c*h)*x,A[2]=(t*r*Q-y*D*Q+y*B*e-C*r*e-t*B*h+C*D*h)*x,A[3]=(G*D*Q-t*c*Q-G*B*e+C*c*e+t*B*R-C*D*R)*x,A[4]=K*x,A[5]=(w*r*Q-M*c*Q+M*B*R-I*r*R-w*B*h+I*c*h)*x,A[6]=(M*D*Q-o*r*Q-M*B*e+I*r*e+o*B*h-I*D*h)*x,A[7]=(o*c*Q-w*D*Q+w*B*e-I*c*e-o*B*R+I*D*R)*x,A[8]=L*x,A[9]=(M*G*Q-w*y*Q-M*C*R+I*y*R+w*C*h-I*G*h)*x,A[10]=(o*y*Q-M*t*Q+M*C*e-I*y*e-o*C*h+I*t*h)*x,A[11]=(w*t*Q-o*G*Q-w*C*e+I*G*e+o*C*R-I*t*R)*x,A[12]=H*x,A[13]=(w*y*B-M*G*B+M*C*c-I*y*c-w*C*r+I*G*r)*x,A[14]=(M*t*B-o*y*B-M*C*D+I*y*D+o*C*r-I*t*r)*x,A[15]=(o*G*B-w*t*B+w*C*D-I*G*D-o*C*c+I*t*c)*x,this}scale(A){const I=this.elements,C=A.x,B=A.y,Q=A.z;return I[0]*=C,I[4]*=B,I[8]*=Q,I[1]*=C,I[5]*=B,I[9]*=Q,I[2]*=C,I[6]*=B,I[10]*=Q,I[3]*=C,I[7]*=B,I[11]*=Q,this}getMaxScaleOnAxis(){const A=this.elements,I=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],C=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],B=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(I,C,B))}makeTranslation(A,I,C){return A.isVector3?this.set(1,0,0,A.x,0,1,0,A.y,0,0,1,A.z,0,0,0,1):this.set(1,0,0,A,0,1,0,I,0,0,1,C,0,0,0,1),this}makeRotationX(A){const I=Math.cos(A),C=Math.sin(A);return this.set(1,0,0,0,0,I,-C,0,0,C,I,0,0,0,0,1),this}makeRotationY(A){const I=Math.cos(A),C=Math.sin(A);return this.set(I,0,C,0,0,1,0,0,-C,0,I,0,0,0,0,1),this}makeRotationZ(A){const I=Math.cos(A),C=Math.sin(A);return this.set(I,-C,0,0,C,I,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,I){const C=Math.cos(I),B=Math.sin(I),Q=1-C,o=A.x,t=A.y,D=A.z,e=Q*o,w=Q*t;return this.set(e*o+C,e*t-B*D,e*D+B*t,0,e*t+B*D,w*t+C,w*D-B*o,0,e*D-B*t,w*D+B*o,Q*D*D+C,0,0,0,0,1),this}makeScale(A,I,C){return this.set(A,0,0,0,0,I,0,0,0,0,C,0,0,0,0,1),this}makeShear(A,I,C,B,Q,o){return this.set(1,C,Q,0,A,1,o,0,I,B,1,0,0,0,0,1),this}compose(A,I,C){const B=this.elements,Q=I._x,o=I._y,t=I._z,D=I._w,e=Q+Q,w=o+o,G=t+t,c=Q*e,R=Q*w,M=Q*G,y=o*w,r=o*G,h=t*G,J=D*e,K=D*w,L=D*G,H=C.x,q=C.y,x=C.z;return B[0]=(1-(y+h))*H,B[1]=(R+L)*H,B[2]=(M-K)*H,B[3]=0,B[4]=(R-L)*q,B[5]=(1-(c+h))*q,B[6]=(r+J)*q,B[7]=0,B[8]=(M+K)*x,B[9]=(r-J)*x,B[10]=(1-(c+y))*x,B[11]=0,B[12]=A.x,B[13]=A.y,B[14]=A.z,B[15]=1,this}decompose(A,I,C){const B=this.elements;let Q=IQ.set(B[0],B[1],B[2]).length();const o=IQ.set(B[4],B[5],B[6]).length(),t=IQ.set(B[8],B[9],B[10]).length();this.determinant()<0&&(Q=-Q),A.x=B[12],A.y=B[13],A.z=B[14],EC.copy(this);const e=1/Q,w=1/o,G=1/t;return EC.elements[0]*=e,EC.elements[1]*=e,EC.elements[2]*=e,EC.elements[4]*=w,EC.elements[5]*=w,EC.elements[6]*=w,EC.elements[8]*=G,EC.elements[9]*=G,EC.elements[10]*=G,I.setFromRotationMatrix(EC),C.x=Q,C.y=o,C.z=t,this}makePerspective(A,I,C,B,Q,o,t=PC){const D=this.elements,e=2*Q/(I-A),w=2*Q/(C-B),G=(I+A)/(I-A),c=(C+B)/(C-B);let R,M;if(t===PC)R=-(o+Q)/(o-Q),M=-2*o*Q/(o-Q);else if(t===ki)R=-o/(o-Q),M=-o*Q/(o-Q);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+t);return D[0]=e,D[4]=0,D[8]=G,D[12]=0,D[1]=0,D[5]=w,D[9]=c,D[13]=0,D[2]=0,D[6]=0,D[10]=R,D[14]=M,D[3]=0,D[7]=0,D[11]=-1,D[15]=0,this}makeOrthographic(A,I,C,B,Q,o,t=PC){const D=this.elements,e=1/(I-A),w=1/(C-B),G=1/(o-Q),c=(I+A)*e,R=(C+B)*w;let M,y;if(t===PC)M=(o+Q)*G,y=-2*G;else if(t===ki)M=Q*G,y=-1*G;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+t);return D[0]=2*e,D[4]=0,D[8]=0,D[12]=-c,D[1]=0,D[5]=2*w,D[9]=0,D[13]=-R,D[2]=0,D[6]=0,D[10]=y,D[14]=-M,D[3]=0,D[7]=0,D[11]=0,D[15]=1,this}equals(A){const I=this.elements,C=A.elements;for(let B=0;B<16;B++)if(I[B]!==C[B])return!1;return!0}fromArray(A,I=0){for(let C=0;C<16;C++)this.elements[C]=A[C+I];return this}toArray(A=[],I=0){const C=this.elements;return A[I]=C[0],A[I+1]=C[1],A[I+2]=C[2],A[I+3]=C[3],A[I+4]=C[4],A[I+5]=C[5],A[I+6]=C[6],A[I+7]=C[7],A[I+8]=C[8],A[I+9]=C[9],A[I+10]=C[10],A[I+11]=C[11],A[I+12]=C[12],A[I+13]=C[13],A[I+14]=C[14],A[I+15]=C[15],A}}const IQ=new P,EC=new Ig,er=new P(0,0,0),ar=new P(1,1,1),oB=new P,zE=new P,Lg=new P,WD=new Ig,OD=new LQ;class Zi{constructor(A=0,I=0,C=0,B=Zi.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=I,this._z=C,this._order=B}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,I,C,B=this._order){return this._x=A,this._y=I,this._z=C,this._order=B,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,I=this._order,C=!0){const B=A.elements,Q=B[0],o=B[4],t=B[8],D=B[1],e=B[5],w=B[9],G=B[2],c=B[6],R=B[10];switch(I){case"XYZ":this._y=Math.asin(Ug(t,-1,1)),Math.abs(t)<.9999999?(this._x=Math.atan2(-w,R),this._z=Math.atan2(-o,Q)):(this._x=Math.atan2(c,e),this._z=0);break;case"YXZ":this._x=Math.asin(-Ug(w,-1,1)),Math.abs(w)<.9999999?(this._y=Math.atan2(t,R),this._z=Math.atan2(D,e)):(this._y=Math.atan2(-G,Q),this._z=0);break;case"ZXY":this._x=Math.asin(Ug(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-G,R),this._z=Math.atan2(-o,e)):(this._y=0,this._z=Math.atan2(D,Q));break;case"ZYX":this._y=Math.asin(-Ug(G,-1,1)),Math.abs(G)<.9999999?(this._x=Math.atan2(c,R),this._z=Math.atan2(D,Q)):(this._x=0,this._z=Math.atan2(-o,e));break;case"YZX":this._z=Math.asin(Ug(D,-1,1)),Math.abs(D)<.9999999?(this._x=Math.atan2(-w,e),this._y=Math.atan2(-G,Q)):(this._x=0,this._y=Math.atan2(t,R));break;case"XZY":this._z=Math.asin(-Ug(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(c,e),this._y=Math.atan2(t,Q)):(this._x=Math.atan2(-w,R),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+I)}return this._order=I,C===!0&&this._onChangeCallback(),this}setFromQuaternion(A,I,C){return WD.makeRotationFromQuaternion(A),this.setFromRotationMatrix(WD,I,C)}setFromVector3(A,I=this._order){return this.set(A.x,A.y,A.z,I)}reorder(A){return OD.setFromEuler(this),this.setFromQuaternion(OD,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zi.DEFAULT_ORDER="XYZ";class _a{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let nr=0;const ZD=new P,gQ=new LQ,TC=new Ig,_E=new P,zQ=new P,hr=new P,wr=new LQ,vD=new P(1,0,0),XD=new P(0,1,0),PD=new P(0,0,1),Gr={type:"added"},jD={type:"removed"};class xg extends YQ{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nr++}),this.uuid=wE(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xg.DEFAULT_UP.clone();const A=new P,I=new Zi,C=new LQ,B=new P(1,1,1);function Q(){C.setFromEuler(I,!1)}function o(){I.setFromQuaternion(C,void 0,!1)}I._onChange(Q),C._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:I},quaternion:{configurable:!0,enumerable:!0,value:C},scale:{configurable:!0,enumerable:!0,value:B},modelViewMatrix:{value:new Ig},normalMatrix:{value:new tI}}),this.matrix=new Ig,this.matrixWorld=new Ig,this.matrixAutoUpdate=xg.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=xg.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new _a,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,I){this.quaternion.setFromAxisAngle(A,I)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,I){return gQ.setFromAxisAngle(A,I),this.quaternion.multiply(gQ),this}rotateOnWorldAxis(A,I){return gQ.setFromAxisAngle(A,I),this.quaternion.premultiply(gQ),this}rotateX(A){return this.rotateOnAxis(vD,A)}rotateY(A){return this.rotateOnAxis(XD,A)}rotateZ(A){return this.rotateOnAxis(PD,A)}translateOnAxis(A,I){return ZD.copy(A).applyQuaternion(this.quaternion),this.position.add(ZD.multiplyScalar(I)),this}translateX(A){return this.translateOnAxis(vD,A)}translateY(A){return this.translateOnAxis(XD,A)}translateZ(A){return this.translateOnAxis(PD,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(TC.copy(this.matrixWorld).invert())}lookAt(A,I,C){A.isVector3?_E.copy(A):_E.set(A,I,C);const B=this.parent;this.updateWorldMatrix(!0,!1),zQ.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?TC.lookAt(zQ,_E,this.up):TC.lookAt(_E,zQ,this.up),this.quaternion.setFromRotationMatrix(TC),B&&(TC.extractRotation(B.matrixWorld),gQ.setFromRotationMatrix(TC),this.quaternion.premultiply(gQ.invert()))}add(A){if(arguments.length>1){for(let I=0;I<arguments.length;I++)this.add(arguments[I]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.parent!==null&&A.parent.remove(A),A.parent=this,this.children.push(A),A.dispatchEvent(Gr)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let C=0;C<arguments.length;C++)this.remove(arguments[C]);return this}const I=this.children.indexOf(A);return I!==-1&&(A.parent=null,this.children.splice(I,1),A.dispatchEvent(jD)),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){for(let A=0;A<this.children.length;A++){const I=this.children[A];I.parent=null,I.dispatchEvent(jD)}return this.children.length=0,this}attach(A){return this.updateWorldMatrix(!0,!1),TC.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),TC.multiply(A.parent.matrixWorld)),A.applyMatrix4(TC),this.add(A),A.updateWorldMatrix(!1,!0),this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,I){if(this[A]===I)return this;for(let C=0,B=this.children.length;C<B;C++){const o=this.children[C].getObjectByProperty(A,I);if(o!==void 0)return o}}getObjectsByProperty(A,I){let C=[];this[A]===I&&C.push(this);for(let B=0,Q=this.children.length;B<Q;B++){const o=this.children[B].getObjectsByProperty(A,I);o.length>0&&(C=C.concat(o))}return C}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zQ,A,hr),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zQ,wr,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(I[8],I[9],I[10]).normalize()}raycast(){}traverse(A){A(this);const I=this.children;for(let C=0,B=I.length;C<B;C++)I[C].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const I=this.children;for(let C=0,B=I.length;C<B;C++)I[C].traverseVisible(A)}traverseAncestors(A){const I=this.parent;I!==null&&(A(I),I.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,A=!0);const I=this.children;for(let C=0,B=I.length;C<B;C++){const Q=I[C];(Q.matrixWorldAutoUpdate===!0||A===!0)&&Q.updateMatrixWorld(A)}}updateWorldMatrix(A,I){const C=this.parent;if(A===!0&&C!==null&&C.matrixWorldAutoUpdate===!0&&C.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),I===!0){const B=this.children;for(let Q=0,o=B.length;Q<o;Q++){const t=B[Q];t.matrixWorldAutoUpdate===!0&&t.updateWorldMatrix(!1,!0)}}}toJSON(A){const I=A===void 0||typeof A=="string",C={};I&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},C.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const B={};B.uuid=this.uuid,B.type=this.type,this.name!==""&&(B.name=this.name),this.castShadow===!0&&(B.castShadow=!0),this.receiveShadow===!0&&(B.receiveShadow=!0),this.visible===!1&&(B.visible=!1),this.frustumCulled===!1&&(B.frustumCulled=!1),this.renderOrder!==0&&(B.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(B.userData=this.userData),B.layers=this.layers.mask,B.matrix=this.matrix.toArray(),B.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(B.matrixAutoUpdate=!1),this.isInstancedMesh&&(B.type="InstancedMesh",B.count=this.count,B.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(B.instanceColor=this.instanceColor.toJSON()));function Q(t,D){return t[D.uuid]===void 0&&(t[D.uuid]=D.toJSON(A)),D.uuid}if(this.isScene)this.background&&(this.background.isColor?B.background=this.background.toJSON():this.background.isTexture&&(B.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(B.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){B.geometry=Q(A.geometries,this.geometry);const t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){const D=t.shapes;if(Array.isArray(D))for(let e=0,w=D.length;e<w;e++){const G=D[e];Q(A.shapes,G)}else Q(A.shapes,D)}}if(this.isSkinnedMesh&&(B.bindMode=this.bindMode,B.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(Q(A.skeletons,this.skeleton),B.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const t=[];for(let D=0,e=this.material.length;D<e;D++)t.push(Q(A.materials,this.material[D]));B.material=t}else B.material=Q(A.materials,this.material);if(this.children.length>0){B.children=[];for(let t=0;t<this.children.length;t++)B.children.push(this.children[t].toJSON(A).object)}if(this.animations.length>0){B.animations=[];for(let t=0;t<this.animations.length;t++){const D=this.animations[t];B.animations.push(Q(A.animations,D))}}if(I){const t=o(A.geometries),D=o(A.materials),e=o(A.textures),w=o(A.images),G=o(A.shapes),c=o(A.skeletons),R=o(A.animations),M=o(A.nodes);t.length>0&&(C.geometries=t),D.length>0&&(C.materials=D),e.length>0&&(C.textures=e),w.length>0&&(C.images=w),G.length>0&&(C.shapes=G),c.length>0&&(C.skeletons=c),R.length>0&&(C.animations=R),M.length>0&&(C.nodes=M)}return C.object=B,C;function o(t){const D=[];for(const e in t){const w=t[e];delete w.metadata,D.push(w)}return D}}clone(A){return new this.constructor().copy(this,A)}copy(A,I=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.animations=A.animations,this.userData=JSON.parse(JSON.stringify(A.userData)),I===!0)for(let C=0;C<A.children.length;C++){const B=A.children[C];this.add(B.clone())}return this}}xg.DEFAULT_UP=new P(0,1,0);xg.DEFAULT_MATRIX_AUTO_UPDATE=!0;xg.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const iC=new P,VC=new P,To=new P,WC=new P,CQ=new P,BQ=new P,zD=new P,Vo=new P,Wo=new P,Oo=new P;let $E=!1;class tC{constructor(A=new P,I=new P,C=new P){this.a=A,this.b=I,this.c=C}static getNormal(A,I,C,B){B.subVectors(C,I),iC.subVectors(A,I),B.cross(iC);const Q=B.lengthSq();return Q>0?B.multiplyScalar(1/Math.sqrt(Q)):B.set(0,0,0)}static getBarycoord(A,I,C,B,Q){iC.subVectors(B,I),VC.subVectors(C,I),To.subVectors(A,I);const o=iC.dot(iC),t=iC.dot(VC),D=iC.dot(To),e=VC.dot(VC),w=VC.dot(To),G=o*e-t*t;if(G===0)return Q.set(-2,-1,-1);const c=1/G,R=(e*D-t*w)*c,M=(o*w-t*D)*c;return Q.set(1-R-M,M,R)}static containsPoint(A,I,C,B){return this.getBarycoord(A,I,C,B,WC),WC.x>=0&&WC.y>=0&&WC.x+WC.y<=1}static getUV(A,I,C,B,Q,o,t,D){return $E===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$E=!0),this.getInterpolation(A,I,C,B,Q,o,t,D)}static getInterpolation(A,I,C,B,Q,o,t,D){return this.getBarycoord(A,I,C,B,WC),D.setScalar(0),D.addScaledVector(Q,WC.x),D.addScaledVector(o,WC.y),D.addScaledVector(t,WC.z),D}static isFrontFacing(A,I,C,B){return iC.subVectors(C,I),VC.subVectors(A,I),iC.cross(VC).dot(B)<0}set(A,I,C){return this.a.copy(A),this.b.copy(I),this.c.copy(C),this}setFromPointsAndIndices(A,I,C,B){return this.a.copy(A[I]),this.b.copy(A[C]),this.c.copy(A[B]),this}setFromAttributeAndIndices(A,I,C,B){return this.a.fromBufferAttribute(A,I),this.b.fromBufferAttribute(A,C),this.c.fromBufferAttribute(A,B),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return iC.subVectors(this.c,this.b),VC.subVectors(this.a,this.b),iC.cross(VC).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return tC.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,I){return tC.getBarycoord(A,this.a,this.b,this.c,I)}getUV(A,I,C,B,Q){return $E===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$E=!0),tC.getInterpolation(A,this.a,this.b,this.c,I,C,B,Q)}getInterpolation(A,I,C,B,Q){return tC.getInterpolation(A,this.a,this.b,this.c,I,C,B,Q)}containsPoint(A){return tC.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return tC.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,I){const C=this.a,B=this.b,Q=this.c;let o,t;CQ.subVectors(B,C),BQ.subVectors(Q,C),Vo.subVectors(A,C);const D=CQ.dot(Vo),e=BQ.dot(Vo);if(D<=0&&e<=0)return I.copy(C);Wo.subVectors(A,B);const w=CQ.dot(Wo),G=BQ.dot(Wo);if(w>=0&&G<=w)return I.copy(B);const c=D*G-w*e;if(c<=0&&D>=0&&w<=0)return o=D/(D-w),I.copy(C).addScaledVector(CQ,o);Oo.subVectors(A,Q);const R=CQ.dot(Oo),M=BQ.dot(Oo);if(M>=0&&R<=M)return I.copy(Q);const y=R*e-D*M;if(y<=0&&e>=0&&M<=0)return t=e/(e-M),I.copy(C).addScaledVector(BQ,t);const r=w*M-R*G;if(r<=0&&G-w>=0&&R-M>=0)return zD.subVectors(Q,B),t=(G-w)/(G-w+(R-M)),I.copy(B).addScaledVector(zD,t);const h=1/(r+y+c);return o=y*h,t=c*h,I.copy(C).addScaledVector(CQ,o).addScaledVector(BQ,t)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}let rr=0;class rE extends YQ{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rr++}),this.uuid=wE(),this.name="",this.type="Material",this.blending=GQ,this.side=wB,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ua,this.blendDst=Ha,this.blendEquation=aQ,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=st,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=OG,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ko,this.stencilZFail=ko,this.stencilZPass=ko,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const I in A){const C=A[I];if(C===void 0){console.warn(`THREE.Material: parameter '${I}' has value of undefined.`);continue}const B=this[I];if(B===void 0){console.warn(`THREE.Material: '${I}' is not a property of THREE.${this.type}.`);continue}B&&B.isColor?B.set(C):B&&B.isVector3&&C&&C.isVector3?B.copy(C):this[I]=C}}toJSON(A){const I=A===void 0||typeof A=="string";I&&(A={textures:{},images:{}});const C={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};C.uuid=this.uuid,C.type=this.type,this.name!==""&&(C.name=this.name),this.color&&this.color.isColor&&(C.color=this.color.getHex()),this.roughness!==void 0&&(C.roughness=this.roughness),this.metalness!==void 0&&(C.metalness=this.metalness),this.sheen!==void 0&&(C.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(C.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(C.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(C.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(C.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(C.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(C.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(C.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(C.shininess=this.shininess),this.clearcoat!==void 0&&(C.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(C.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(C.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(C.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(C.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,C.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(C.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(C.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(C.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(C.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(C.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.anisotropy!==void 0&&(C.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(C.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(C.anisotropyMap=this.anisotropyMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(C.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(C.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(C.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(C.lightMap=this.lightMap.toJSON(A).uuid,C.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(C.aoMap=this.aoMap.toJSON(A).uuid,C.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(C.bumpMap=this.bumpMap.toJSON(A).uuid,C.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(C.normalMap=this.normalMap.toJSON(A).uuid,C.normalMapType=this.normalMapType,C.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(C.displacementMap=this.displacementMap.toJSON(A).uuid,C.displacementScale=this.displacementScale,C.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(C.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(C.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(C.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(C.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(C.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(C.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(C.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(C.combine=this.combine)),this.envMapIntensity!==void 0&&(C.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(C.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(C.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(C.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(C.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(C.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(C.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(C.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(C.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(C.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(C.size=this.size),this.shadowSide!==null&&(C.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(C.sizeAttenuation=this.sizeAttenuation),this.blending!==GQ&&(C.blending=this.blending),this.side!==wB&&(C.side=this.side),this.vertexColors&&(C.vertexColors=!0),this.opacity<1&&(C.opacity=this.opacity),this.transparent===!0&&(C.transparent=this.transparent),C.depthFunc=this.depthFunc,C.depthTest=this.depthTest,C.depthWrite=this.depthWrite,C.colorWrite=this.colorWrite,C.stencilWrite=this.stencilWrite,C.stencilWriteMask=this.stencilWriteMask,C.stencilFunc=this.stencilFunc,C.stencilRef=this.stencilRef,C.stencilFuncMask=this.stencilFuncMask,C.stencilFail=this.stencilFail,C.stencilZFail=this.stencilZFail,C.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(C.rotation=this.rotation),this.polygonOffset===!0&&(C.polygonOffset=!0),this.polygonOffsetFactor!==0&&(C.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(C.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(C.linewidth=this.linewidth),this.dashSize!==void 0&&(C.dashSize=this.dashSize),this.gapSize!==void 0&&(C.gapSize=this.gapSize),this.scale!==void 0&&(C.scale=this.scale),this.dithering===!0&&(C.dithering=!0),this.alphaTest>0&&(C.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(C.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(C.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(C.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(C.wireframe=this.wireframe),this.wireframeLinewidth>1&&(C.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(C.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(C.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(C.flatShading=this.flatShading),this.visible===!1&&(C.visible=!1),this.toneMapped===!1&&(C.toneMapped=!1),this.fog===!1&&(C.fog=!1),Object.keys(this.userData).length>0&&(C.userData=this.userData);function B(Q){const o=[];for(const t in Q){const D=Q[t];delete D.metadata,o.push(D)}return o}if(I){const Q=B(A.textures),o=B(A.images);Q.length>0&&(C.textures=Q),o.length>0&&(C.images=o)}return C}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const I=A.clippingPlanes;let C=null;if(I!==null){const B=I.length;C=new Array(B);for(let Q=0;Q!==B;++Q)C[Q]=I[Q].clone()}return this.clippingPlanes=C,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}}const $a={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oC={h:0,s:0,l:0},Ai={h:0,s:0,l:0};function Zo(g,A,I){return I<0&&(I+=1),I>1&&(I-=1),I<1/6?g+(A-g)*6*I:I<1/2?A:I<2/3?g+(A-g)*6*(2/3-I):g}class lI{constructor(A,I,C){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(A,I,C)}set(A,I,C){if(I===void 0&&C===void 0){const B=A;B&&B.isColor?this.copy(B):typeof B=="number"?this.setHex(B):typeof B=="string"&&this.setStyle(B)}else this.setRGB(A,I,C);return this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,I=QI){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,QC.toWorkingColorSpace(this,I),this}setRGB(A,I,C,B=QC.workingColorSpace){return this.r=A,this.g=I,this.b=C,QC.toWorkingColorSpace(this,B),this}setHSL(A,I,C,B=QC.workingColorSpace){if(A=Ar(A,1),I=Ug(I,0,1),C=Ug(C,0,1),I===0)this.r=this.g=this.b=C;else{const Q=C<=.5?C*(1+I):C+I-C*I,o=2*C-Q;this.r=Zo(o,Q,A+1/3),this.g=Zo(o,Q,A),this.b=Zo(o,Q,A-1/3)}return QC.toWorkingColorSpace(this,B),this}setStyle(A,I=QI){function C(Q){Q!==void 0&&parseFloat(Q)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let B;if(B=/^(\w+)\(([^\)]*)\)/.exec(A)){let Q;const o=B[1],t=B[2];switch(o){case"rgb":case"rgba":if(Q=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(t))return C(Q[4]),this.setRGB(Math.min(255,parseInt(Q[1],10))/255,Math.min(255,parseInt(Q[2],10))/255,Math.min(255,parseInt(Q[3],10))/255,I);if(Q=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(t))return C(Q[4]),this.setRGB(Math.min(100,parseInt(Q[1],10))/100,Math.min(100,parseInt(Q[2],10))/100,Math.min(100,parseInt(Q[3],10))/100,I);break;case"hsl":case"hsla":if(Q=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(t))return C(Q[4]),this.setHSL(parseFloat(Q[1])/360,parseFloat(Q[2])/100,parseFloat(Q[3])/100,I);break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(B=/^\#([A-Fa-f\d]+)$/.exec(A)){const Q=B[1],o=Q.length;if(o===3)return this.setRGB(parseInt(Q.charAt(0),16)/15,parseInt(Q.charAt(1),16)/15,parseInt(Q.charAt(2),16)/15,I);if(o===6)return this.setHex(parseInt(Q,16),I);console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,I);return this}setColorName(A,I=QI){const C=$a[A.toLowerCase()];return C!==void 0?this.setHex(C,I):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=rQ(A.r),this.g=rQ(A.g),this.b=rQ(A.b),this}copyLinearToSRGB(A){return this.r=fo(A.r),this.g=fo(A.g),this.b=fo(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=QI){return QC.fromWorkingColorSpace(Gg.copy(this),A),Math.round(Ug(Gg.r*255,0,255))*65536+Math.round(Ug(Gg.g*255,0,255))*256+Math.round(Ug(Gg.b*255,0,255))}getHexString(A=QI){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,I=QC.workingColorSpace){QC.fromWorkingColorSpace(Gg.copy(this),I);const C=Gg.r,B=Gg.g,Q=Gg.b,o=Math.max(C,B,Q),t=Math.min(C,B,Q);let D,e;const w=(t+o)/2;if(t===o)D=0,e=0;else{const G=o-t;switch(e=w<=.5?G/(o+t):G/(2-o-t),o){case C:D=(B-Q)/G+(B<Q?6:0);break;case B:D=(Q-C)/G+2;break;case Q:D=(C-B)/G+4;break}D/=6}return A.h=D,A.s=e,A.l=w,A}getRGB(A,I=QC.workingColorSpace){return QC.fromWorkingColorSpace(Gg.copy(this),I),A.r=Gg.r,A.g=Gg.g,A.b=Gg.b,A}getStyle(A=QI){QC.fromWorkingColorSpace(Gg.copy(this),A);const I=Gg.r,C=Gg.g,B=Gg.b;return A!==QI?`color(${A} ${I.toFixed(3)} ${C.toFixed(3)} ${B.toFixed(3)})`:`rgb(${Math.round(I*255)},${Math.round(C*255)},${Math.round(B*255)})`}offsetHSL(A,I,C){return this.getHSL(oC),oC.h+=A,oC.s+=I,oC.l+=C,this.setHSL(oC.h,oC.s,oC.l),this}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,I){return this.r=A.r+I.r,this.g=A.g+I.g,this.b=A.b+I.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,I){return this.r+=(A.r-this.r)*I,this.g+=(A.g-this.g)*I,this.b+=(A.b-this.b)*I,this}lerpColors(A,I,C){return this.r=A.r+(I.r-A.r)*C,this.g=A.g+(I.g-A.g)*C,this.b=A.b+(I.b-A.b)*C,this}lerpHSL(A,I){this.getHSL(oC),A.getHSL(Ai);const C=Yo(oC.h,Ai.h,I),B=Yo(oC.s,Ai.s,I),Q=Yo(oC.l,Ai.l,I);return this.setHSL(C,B,Q),this}setFromVector3(A){return this.r=A.x,this.g=A.y,this.b=A.z,this}applyMatrix3(A){const I=this.r,C=this.g,B=this.b,Q=A.elements;return this.r=Q[0]*I+Q[3]*C+Q[6]*B,this.g=Q[1]*I+Q[4]*C+Q[7]*B,this.b=Q[2]*I+Q[5]*C+Q[8]*B,this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,I=0){return this.r=A[I],this.g=A[I+1],this.b=A[I+2],this}toArray(A=[],I=0){return A[I]=this.r,A[I+1]=this.g,A[I+2]=this.b,A}fromBufferAttribute(A,I){return this.r=A.getX(I),this.g=A.getY(I),this.b=A.getZ(I),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gg=new lI;lI.NAMES=$a;class Xt extends rE{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lI(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=pa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const PI=new P,Ii=new MI;class eC{constructor(A,I,C=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=I,this.count=A!==void 0?A.length/I:0,this.normalized=C,this.usage=mD,this.updateRange={offset:0,count:-1},this.gpuType=DB,this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this.gpuType=A.gpuType,this}copyAt(A,I,C){A*=this.itemSize,C*=I.itemSize;for(let B=0,Q=this.itemSize;B<Q;B++)this.array[A+B]=I.array[C+B];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let I=0,C=this.count;I<C;I++)Ii.fromBufferAttribute(this,I),Ii.applyMatrix3(A),this.setXY(I,Ii.x,Ii.y);else if(this.itemSize===3)for(let I=0,C=this.count;I<C;I++)PI.fromBufferAttribute(this,I),PI.applyMatrix3(A),this.setXYZ(I,PI.x,PI.y,PI.z);return this}applyMatrix4(A){for(let I=0,C=this.count;I<C;I++)PI.fromBufferAttribute(this,I),PI.applyMatrix4(A),this.setXYZ(I,PI.x,PI.y,PI.z);return this}applyNormalMatrix(A){for(let I=0,C=this.count;I<C;I++)PI.fromBufferAttribute(this,I),PI.applyNormalMatrix(A),this.setXYZ(I,PI.x,PI.y,PI.z);return this}transformDirection(A){for(let I=0,C=this.count;I<C;I++)PI.fromBufferAttribute(this,I),PI.transformDirection(A),this.setXYZ(I,PI.x,PI.y,PI.z);return this}set(A,I=0){return this.array.set(A,I),this}getX(A){let I=this.array[A*this.itemSize];return this.normalized&&(I=ZE(I,this.array)),I}setX(A,I){return this.normalized&&(I=Yg(I,this.array)),this.array[A*this.itemSize]=I,this}getY(A){let I=this.array[A*this.itemSize+1];return this.normalized&&(I=ZE(I,this.array)),I}setY(A,I){return this.normalized&&(I=Yg(I,this.array)),this.array[A*this.itemSize+1]=I,this}getZ(A){let I=this.array[A*this.itemSize+2];return this.normalized&&(I=ZE(I,this.array)),I}setZ(A,I){return this.normalized&&(I=Yg(I,this.array)),this.array[A*this.itemSize+2]=I,this}getW(A){let I=this.array[A*this.itemSize+3];return this.normalized&&(I=ZE(I,this.array)),I}setW(A,I){return this.normalized&&(I=Yg(I,this.array)),this.array[A*this.itemSize+3]=I,this}setXY(A,I,C){return A*=this.itemSize,this.normalized&&(I=Yg(I,this.array),C=Yg(C,this.array)),this.array[A+0]=I,this.array[A+1]=C,this}setXYZ(A,I,C,B){return A*=this.itemSize,this.normalized&&(I=Yg(I,this.array),C=Yg(C,this.array),B=Yg(B,this.array)),this.array[A+0]=I,this.array[A+1]=C,this.array[A+2]=B,this}setXYZW(A,I,C,B,Q){return A*=this.itemSize,this.normalized&&(I=Yg(I,this.array),C=Yg(C,this.array),B=Yg(B,this.array),Q=Yg(Q,this.array)),this.array[A+0]=I,this.array[A+1]=C,this.array[A+2]=B,this.array[A+3]=Q,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==mD&&(A.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(A.updateRange=this.updateRange),A}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class An extends eC{constructor(A,I,C){super(new Uint16Array(A),I,C)}}class In extends eC{constructor(A,I,C){super(new Uint32Array(A),I,C)}}class SC extends eC{constructor(A,I,C){super(new Float32Array(A),I,C)}}let cr=0;const Vg=new Ig,vo=new xg,QQ=new P,fg=new GE,_Q=new GE,ig=new P;class IB extends YQ{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cr++}),this.uuid=wE(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(Xa(A)?In:An)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,I){return this.attributes[A]=I,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,I,C=0){this.groups.push({start:A,count:I,materialIndex:C})}clearGroups(){this.groups=[]}setDrawRange(A,I){this.drawRange.start=A,this.drawRange.count=I}applyMatrix4(A){const I=this.attributes.position;I!==void 0&&(I.applyMatrix4(A),I.needsUpdate=!0);const C=this.attributes.normal;if(C!==void 0){const Q=new tI().getNormalMatrix(A);C.applyNormalMatrix(Q),C.needsUpdate=!0}const B=this.attributes.tangent;return B!==void 0&&(B.transformDirection(A),B.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return Vg.makeRotationFromQuaternion(A),this.applyMatrix4(Vg),this}rotateX(A){return Vg.makeRotationX(A),this.applyMatrix4(Vg),this}rotateY(A){return Vg.makeRotationY(A),this.applyMatrix4(Vg),this}rotateZ(A){return Vg.makeRotationZ(A),this.applyMatrix4(Vg),this}translate(A,I,C){return Vg.makeTranslation(A,I,C),this.applyMatrix4(Vg),this}scale(A,I,C){return Vg.makeScale(A,I,C),this.applyMatrix4(Vg),this}lookAt(A){return vo.lookAt(A),vo.updateMatrix(),this.applyMatrix4(vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(QQ).negate(),this.translate(QQ.x,QQ.y,QQ.z),this}setFromPoints(A){const I=[];for(let C=0,B=A.length;C<B;C++){const Q=A[C];I.push(Q.x,Q.y,Q.z||0)}return this.setAttribute("position",new SC(I,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new GE);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),I)for(let C=0,B=I.length;C<B;C++){const Q=I[C];fg.setFromBufferAttribute(Q),this.morphTargetsRelative?(ig.addVectors(this.boundingBox.min,fg.min),this.boundingBox.expandByPoint(ig),ig.addVectors(this.boundingBox.max,fg.max),this.boundingBox.expandByPoint(ig)):(this.boundingBox.expandByPoint(fg.min),this.boundingBox.expandByPoint(fg.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vt);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(A){const C=this.boundingSphere.center;if(fg.setFromBufferAttribute(A),I)for(let Q=0,o=I.length;Q<o;Q++){const t=I[Q];_Q.setFromBufferAttribute(t),this.morphTargetsRelative?(ig.addVectors(fg.min,_Q.min),fg.expandByPoint(ig),ig.addVectors(fg.max,_Q.max),fg.expandByPoint(ig)):(fg.expandByPoint(_Q.min),fg.expandByPoint(_Q.max))}fg.getCenter(C);let B=0;for(let Q=0,o=A.count;Q<o;Q++)ig.fromBufferAttribute(A,Q),B=Math.max(B,C.distanceToSquared(ig));if(I)for(let Q=0,o=I.length;Q<o;Q++){const t=I[Q],D=this.morphTargetsRelative;for(let e=0,w=t.count;e<w;e++)ig.fromBufferAttribute(t,e),D&&(QQ.fromBufferAttribute(A,e),ig.add(QQ)),B=Math.max(B,C.distanceToSquared(ig))}this.boundingSphere.radius=Math.sqrt(B),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,I=this.attributes;if(A===null||I.position===void 0||I.normal===void 0||I.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const C=A.array,B=I.position.array,Q=I.normal.array,o=I.uv.array,t=B.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new eC(new Float32Array(4*t),4));const D=this.getAttribute("tangent").array,e=[],w=[];for(let u=0;u<t;u++)e[u]=new P,w[u]=new P;const G=new P,c=new P,R=new P,M=new MI,y=new MI,r=new MI,h=new P,J=new P;function K(u,EA,aA){G.fromArray(B,u*3),c.fromArray(B,EA*3),R.fromArray(B,aA*3),M.fromArray(o,u*2),y.fromArray(o,EA*2),r.fromArray(o,aA*2),c.sub(G),R.sub(G),y.sub(M),r.sub(M);const X=1/(y.x*r.y-r.x*y.y);isFinite(X)&&(h.copy(c).multiplyScalar(r.y).addScaledVector(R,-y.y).multiplyScalar(X),J.copy(R).multiplyScalar(y.x).addScaledVector(c,-r.x).multiplyScalar(X),e[u].add(h),e[EA].add(h),e[aA].add(h),w[u].add(J),w[EA].add(J),w[aA].add(J))}let L=this.groups;L.length===0&&(L=[{start:0,count:C.length}]);for(let u=0,EA=L.length;u<EA;++u){const aA=L[u],X=aA.start,_=aA.count;for(let $=X,tA=X+_;$<tA;$+=3)K(C[$+0],C[$+1],C[$+2])}const H=new P,q=new P,x=new P,W=new P;function l(u){x.fromArray(Q,u*3),W.copy(x);const EA=e[u];H.copy(EA),H.sub(x.multiplyScalar(x.dot(EA))).normalize(),q.crossVectors(W,EA);const X=q.dot(w[u])<0?-1:1;D[u*4]=H.x,D[u*4+1]=H.y,D[u*4+2]=H.z,D[u*4+3]=X}for(let u=0,EA=L.length;u<EA;++u){const aA=L[u],X=aA.start,_=aA.count;for(let $=X,tA=X+_;$<tA;$+=3)l(C[$+0]),l(C[$+1]),l(C[$+2])}}computeVertexNormals(){const A=this.index,I=this.getAttribute("position");if(I!==void 0){let C=this.getAttribute("normal");if(C===void 0)C=new eC(new Float32Array(I.count*3),3),this.setAttribute("normal",C);else for(let c=0,R=C.count;c<R;c++)C.setXYZ(c,0,0,0);const B=new P,Q=new P,o=new P,t=new P,D=new P,e=new P,w=new P,G=new P;if(A)for(let c=0,R=A.count;c<R;c+=3){const M=A.getX(c+0),y=A.getX(c+1),r=A.getX(c+2);B.fromBufferAttribute(I,M),Q.fromBufferAttribute(I,y),o.fromBufferAttribute(I,r),w.subVectors(o,Q),G.subVectors(B,Q),w.cross(G),t.fromBufferAttribute(C,M),D.fromBufferAttribute(C,y),e.fromBufferAttribute(C,r),t.add(w),D.add(w),e.add(w),C.setXYZ(M,t.x,t.y,t.z),C.setXYZ(y,D.x,D.y,D.z),C.setXYZ(r,e.x,e.y,e.z)}else for(let c=0,R=I.count;c<R;c+=3)B.fromBufferAttribute(I,c+0),Q.fromBufferAttribute(I,c+1),o.fromBufferAttribute(I,c+2),w.subVectors(o,Q),G.subVectors(B,Q),w.cross(G),C.setXYZ(c+0,w.x,w.y,w.z),C.setXYZ(c+1,w.x,w.y,w.z),C.setXYZ(c+2,w.x,w.y,w.z);this.normalizeNormals(),C.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const A=this.attributes.normal;for(let I=0,C=A.count;I<C;I++)ig.fromBufferAttribute(A,I),ig.normalize(),A.setXYZ(I,ig.x,ig.y,ig.z)}toNonIndexed(){function A(t,D){const e=t.array,w=t.itemSize,G=t.normalized,c=new e.constructor(D.length*w);let R=0,M=0;for(let y=0,r=D.length;y<r;y++){t.isInterleavedBufferAttribute?R=D[y]*t.data.stride+t.offset:R=D[y]*w;for(let h=0;h<w;h++)c[M++]=e[R++]}return new eC(c,w,G)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const I=new IB,C=this.index.array,B=this.attributes;for(const t in B){const D=B[t],e=A(D,C);I.setAttribute(t,e)}const Q=this.morphAttributes;for(const t in Q){const D=[],e=Q[t];for(let w=0,G=e.length;w<G;w++){const c=e[w],R=A(c,C);D.push(R)}I.morphAttributes[t]=D}I.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let t=0,D=o.length;t<D;t++){const e=o[t];I.addGroup(e.start,e.count,e.materialIndex)}return I}toJSON(){const A={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const D=this.parameters;for(const e in D)D[e]!==void 0&&(A[e]=D[e]);return A}A.data={attributes:{}};const I=this.index;I!==null&&(A.data.index={type:I.array.constructor.name,array:Array.prototype.slice.call(I.array)});const C=this.attributes;for(const D in C){const e=C[D];A.data.attributes[D]=e.toJSON(A.data)}const B={};let Q=!1;for(const D in this.morphAttributes){const e=this.morphAttributes[D],w=[];for(let G=0,c=e.length;G<c;G++){const R=e[G];w.push(R.toJSON(A.data))}w.length>0&&(B[D]=w,Q=!0)}Q&&(A.data.morphAttributes=B,A.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(A.data.groups=JSON.parse(JSON.stringify(o)));const t=this.boundingSphere;return t!==null&&(A.data.boundingSphere={center:t.center.toArray(),radius:t.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const I={};this.name=A.name;const C=A.index;C!==null&&this.setIndex(C.clone(I));const B=A.attributes;for(const e in B){const w=B[e];this.setAttribute(e,w.clone(I))}const Q=A.morphAttributes;for(const e in Q){const w=[],G=Q[e];for(let c=0,R=G.length;c<R;c++)w.push(G[c].clone(I));this.morphAttributes[e]=w}this.morphTargetsRelative=A.morphTargetsRelative;const o=A.groups;for(let e=0,w=o.length;e<w;e++){const G=o[e];this.addGroup(G.start,G.count,G.materialIndex)}const t=A.boundingBox;t!==null&&(this.boundingBox=t.clone());const D=A.boundingSphere;return D!==null&&(this.boundingSphere=D.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _D=new Ig,JB=new Dr,gi=new vt,$D=new P,EQ=new P,iQ=new P,oQ=new P,Xo=new P,Ci=new P,Bi=new MI,Qi=new MI,Ei=new MI,Ae=new P,Ie=new P,ge=new P,ii=new P,oi=new P;class UC extends xg{constructor(A=new IB,I=new Xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=A.material,this.geometry=A.geometry,this}updateMorphTargets(){const I=this.geometry.morphAttributes,C=Object.keys(I);if(C.length>0){const B=I[C[0]];if(B!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Q=0,o=B.length;Q<o;Q++){const t=B[Q].name||String(Q);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=Q}}}}getVertexPosition(A,I){const C=this.geometry,B=C.attributes.position,Q=C.morphAttributes.position,o=C.morphTargetsRelative;I.fromBufferAttribute(B,A);const t=this.morphTargetInfluences;if(Q&&t){Ci.set(0,0,0);for(let D=0,e=Q.length;D<e;D++){const w=t[D],G=Q[D];w!==0&&(Xo.fromBufferAttribute(G,A),o?Ci.addScaledVector(Xo,w):Ci.addScaledVector(Xo.sub(I),w))}I.add(Ci)}return I}raycast(A,I){const C=this.geometry,B=this.material,Q=this.matrixWorld;B!==void 0&&(C.boundingSphere===null&&C.computeBoundingSphere(),gi.copy(C.boundingSphere),gi.applyMatrix4(Q),JB.copy(A.ray).recast(A.near),!(gi.containsPoint(JB.origin)===!1&&(JB.intersectSphere(gi,$D)===null||JB.origin.distanceToSquared($D)>(A.far-A.near)**2))&&(_D.copy(Q).invert(),JB.copy(A.ray).applyMatrix4(_D),!(C.boundingBox!==null&&JB.intersectsBox(C.boundingBox)===!1)&&this._computeIntersections(A,I,JB)))}_computeIntersections(A,I,C){let B;const Q=this.geometry,o=this.material,t=Q.index,D=Q.attributes.position,e=Q.attributes.uv,w=Q.attributes.uv1,G=Q.attributes.normal,c=Q.groups,R=Q.drawRange;if(t!==null)if(Array.isArray(o))for(let M=0,y=c.length;M<y;M++){const r=c[M],h=o[r.materialIndex],J=Math.max(r.start,R.start),K=Math.min(t.count,Math.min(r.start+r.count,R.start+R.count));for(let L=J,H=K;L<H;L+=3){const q=t.getX(L),x=t.getX(L+1),W=t.getX(L+2);B=ti(this,h,A,C,e,w,G,q,x,W),B&&(B.faceIndex=Math.floor(L/3),B.face.materialIndex=r.materialIndex,I.push(B))}}else{const M=Math.max(0,R.start),y=Math.min(t.count,R.start+R.count);for(let r=M,h=y;r<h;r+=3){const J=t.getX(r),K=t.getX(r+1),L=t.getX(r+2);B=ti(this,o,A,C,e,w,G,J,K,L),B&&(B.faceIndex=Math.floor(r/3),I.push(B))}}else if(D!==void 0)if(Array.isArray(o))for(let M=0,y=c.length;M<y;M++){const r=c[M],h=o[r.materialIndex],J=Math.max(r.start,R.start),K=Math.min(D.count,Math.min(r.start+r.count,R.start+R.count));for(let L=J,H=K;L<H;L+=3){const q=L,x=L+1,W=L+2;B=ti(this,h,A,C,e,w,G,q,x,W),B&&(B.faceIndex=Math.floor(L/3),B.face.materialIndex=r.materialIndex,I.push(B))}}else{const M=Math.max(0,R.start),y=Math.min(D.count,R.start+R.count);for(let r=M,h=y;r<h;r+=3){const J=r,K=r+1,L=r+2;B=ti(this,o,A,C,e,w,G,J,K,L),B&&(B.faceIndex=Math.floor(r/3),I.push(B))}}}}function Fr(g,A,I,C,B,Q,o,t){let D;if(A.side===Sg?D=C.intersectTriangle(o,Q,B,!0,t):D=C.intersectTriangle(B,Q,o,A.side===wB,t),D===null)return null;oi.copy(t),oi.applyMatrix4(g.matrixWorld);const e=I.ray.origin.distanceTo(oi);return e<I.near||e>I.far?null:{distance:e,point:oi.clone(),object:g}}function ti(g,A,I,C,B,Q,o,t,D,e){g.getVertexPosition(t,EQ),g.getVertexPosition(D,iQ),g.getVertexPosition(e,oQ);const w=Fr(g,A,I,C,EQ,iQ,oQ,ii);if(w){B&&(Bi.fromBufferAttribute(B,t),Qi.fromBufferAttribute(B,D),Ei.fromBufferAttribute(B,e),w.uv=tC.getInterpolation(ii,EQ,iQ,oQ,Bi,Qi,Ei,new MI)),Q&&(Bi.fromBufferAttribute(Q,t),Qi.fromBufferAttribute(Q,D),Ei.fromBufferAttribute(Q,e),w.uv1=tC.getInterpolation(ii,EQ,iQ,oQ,Bi,Qi,Ei,new MI),w.uv2=w.uv1),o&&(Ae.fromBufferAttribute(o,t),Ie.fromBufferAttribute(o,D),ge.fromBufferAttribute(o,e),w.normal=tC.getInterpolation(ii,EQ,iQ,oQ,Ae,Ie,ge,new P),w.normal.dot(C.direction)>0&&w.normal.multiplyScalar(-1));const G={a:t,b:D,c:e,normal:new P,materialIndex:0};tC.getNormal(EQ,iQ,oQ,G.normal),w.face=G}return w}class cE extends IB{constructor(A=1,I=1,C=1,B=1,Q=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:I,depth:C,widthSegments:B,heightSegments:Q,depthSegments:o};const t=this;B=Math.floor(B),Q=Math.floor(Q),o=Math.floor(o);const D=[],e=[],w=[],G=[];let c=0,R=0;M("z","y","x",-1,-1,C,I,A,o,Q,0),M("z","y","x",1,-1,C,I,-A,o,Q,1),M("x","z","y",1,1,A,C,I,B,o,2),M("x","z","y",1,-1,A,C,-I,B,o,3),M("x","y","z",1,-1,A,I,C,B,Q,4),M("x","y","z",-1,-1,A,I,-C,B,Q,5),this.setIndex(D),this.setAttribute("position",new SC(e,3)),this.setAttribute("normal",new SC(w,3)),this.setAttribute("uv",new SC(G,2));function M(y,r,h,J,K,L,H,q,x,W,l){const u=L/x,EA=H/W,aA=L/2,X=H/2,_=q/2,$=x+1,tA=W+1;let BA=0,iA=0;const nA=new P;for(let oA=0;oA<tA;oA++){const uA=oA*EA-X;for(let O=0;O<$;O++){const sA=O*u-aA;nA[y]=sA*J,nA[r]=uA*K,nA[h]=_,e.push(nA.x,nA.y,nA.z),nA[y]=0,nA[r]=0,nA[h]=q>0?1:-1,w.push(nA.x,nA.y,nA.z),G.push(O/x),G.push(1-oA/W),BA+=1}}for(let oA=0;oA<W;oA++)for(let uA=0;uA<x;uA++){const O=c+uA+$*oA,sA=c+uA+$*(oA+1),DA=c+(uA+1)+$*(oA+1),SA=c+(uA+1)+$*oA;D.push(O,sA,SA),D.push(sA,DA,SA),iA+=6}t.addGroup(R,iA,l),R+=iA,c+=BA}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new cE(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function NQ(g){const A={};for(const I in g){A[I]={};for(const C in g[I]){const B=g[I][C];B&&(B.isColor||B.isMatrix3||B.isMatrix4||B.isVector2||B.isVector3||B.isVector4||B.isTexture||B.isQuaternion)?B.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),A[I][C]=null):A[I][C]=B.clone():Array.isArray(B)?A[I][C]=B.slice():A[I][C]=B}}return A}function cg(g){const A={};for(let I=0;I<g.length;I++){const C=NQ(g[I]);for(const B in C)A[B]=C[B]}return A}function Rr(g){const A=[];for(let I=0;I<g.length;I++)A.push(g[I].clone());return A}function gn(g){return g.getRenderTarget()===null?g.outputColorSpace:KC}const Nr={clone:NQ,merge:cg};var yr=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mr=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ZB extends rE{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yr,this.fragmentShader=Mr,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=NQ(A.uniforms),this.uniformsGroups=Rr(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const I=super.toJSON(A);I.glslVersion=this.glslVersion,I.uniforms={};for(const B in this.uniforms){const o=this.uniforms[B].value;o&&o.isTexture?I.uniforms[B]={type:"t",value:o.toJSON(A).uuid}:o&&o.isColor?I.uniforms[B]={type:"c",value:o.getHex()}:o&&o.isVector2?I.uniforms[B]={type:"v2",value:o.toArray()}:o&&o.isVector3?I.uniforms[B]={type:"v3",value:o.toArray()}:o&&o.isVector4?I.uniforms[B]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?I.uniforms[B]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?I.uniforms[B]={type:"m4",value:o.toArray()}:I.uniforms[B]={value:o}}Object.keys(this.defines).length>0&&(I.defines=this.defines),I.vertexShader=this.vertexShader,I.fragmentShader=this.fragmentShader,I.lights=this.lights,I.clipping=this.clipping;const C={};for(const B in this.extensions)this.extensions[B]===!0&&(C[B]=!0);return Object.keys(C).length>0&&(I.extensions=C),I}}class Cn extends xg{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ig,this.projectionMatrix=new Ig,this.projectionMatrixInverse=new Ig,this.coordinateSystem=PC}copy(A,I){return super.copy(A,I),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this.coordinateSystem=A.coordinateSystem,this}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(-I[8],-I[9],-I[10]).normalize()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,I){super.updateWorldMatrix(A,I),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Xg extends Cn{constructor(A=50,I=1,C=.1,B=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=C,this.far=B,this.focus=10,this.aspect=I,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const I=.5*this.getFilmHeight()/A;this.fov=wt*2*Math.atan(I),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(Jo*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return wt*2*Math.atan(Math.tan(Jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(A,I,C,B,Q,o){this.aspect=A/I,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=C,this.view.offsetY=B,this.view.width=Q,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let I=A*Math.tan(Jo*.5*this.fov)/this.zoom,C=2*I,B=this.aspect*C,Q=-.5*B;const o=this.view;if(this.view!==null&&this.view.enabled){const D=o.fullWidth,e=o.fullHeight;Q+=o.offsetX*B/D,I-=o.offsetY*C/e,B*=o.width/D,C*=o.height/e}const t=this.filmOffset;t!==0&&(Q+=A*t/this.getFilmWidth()),this.projectionMatrix.makePerspective(Q,Q+B,I,I-C,A,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.fov=this.fov,I.object.zoom=this.zoom,I.object.near=this.near,I.object.far=this.far,I.object.focus=this.focus,I.object.aspect=this.aspect,this.view!==null&&(I.object.view=Object.assign({},this.view)),I.object.filmGauge=this.filmGauge,I.object.filmOffset=this.filmOffset,I}}const tQ=-90,sQ=1;class Ur extends xg{constructor(A,I,C){super(),this.type="CubeCamera",this.renderTarget=C,this.coordinateSystem=null;const B=new Xg(tQ,sQ,A,I);B.layers=this.layers,this.add(B);const Q=new Xg(tQ,sQ,A,I);Q.layers=this.layers,this.add(Q);const o=new Xg(tQ,sQ,A,I);o.layers=this.layers,this.add(o);const t=new Xg(tQ,sQ,A,I);t.layers=this.layers,this.add(t);const D=new Xg(tQ,sQ,A,I);D.layers=this.layers,this.add(D);const e=new Xg(tQ,sQ,A,I);e.layers=this.layers,this.add(e)}updateCoordinateSystem(){const A=this.coordinateSystem,I=this.children.concat(),[C,B,Q,o,t,D]=I;for(const e of I)this.remove(e);if(A===PC)C.up.set(0,1,0),C.lookAt(1,0,0),B.up.set(0,1,0),B.lookAt(-1,0,0),Q.up.set(0,0,-1),Q.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),t.up.set(0,1,0),t.lookAt(0,0,1),D.up.set(0,1,0),D.lookAt(0,0,-1);else if(A===ki)C.up.set(0,-1,0),C.lookAt(-1,0,0),B.up.set(0,-1,0),B.lookAt(1,0,0),Q.up.set(0,0,1),Q.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),t.up.set(0,-1,0),t.lookAt(0,0,1),D.up.set(0,-1,0),D.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+A);for(const e of I)this.add(e),e.updateMatrixWorld()}update(A,I){this.parent===null&&this.updateMatrixWorld();const C=this.renderTarget;this.coordinateSystem!==A.coordinateSystem&&(this.coordinateSystem=A.coordinateSystem,this.updateCoordinateSystem());const[B,Q,o,t,D,e]=this.children,w=A.getRenderTarget(),G=A.toneMapping,c=A.xr.enabled;A.toneMapping=zC,A.xr.enabled=!1;const R=C.texture.generateMipmaps;C.texture.generateMipmaps=!1,A.setRenderTarget(C,0),A.render(I,B),A.setRenderTarget(C,1),A.render(I,Q),A.setRenderTarget(C,2),A.render(I,o),A.setRenderTarget(C,3),A.render(I,t),A.setRenderTarget(C,4),A.render(I,D),C.texture.generateMipmaps=R,A.setRenderTarget(C,5),A.render(I,e),A.setRenderTarget(w),A.toneMapping=G,A.xr.enabled=c,C.texture.needsPMREMUpdate=!0}}class Bn extends mg{constructor(A,I,C,B,Q,o,t,D,e,w){A=A!==void 0?A:[],I=I!==void 0?I:cQ,super(A,I,C,B,Q,o,t,D,e,w),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class Sr extends OB{constructor(A=1,I={}){super(A,A,I),this.isWebGLCubeRenderTarget=!0;const C={width:A,height:A,depth:1},B=[C,C,C,C,C,C];I.encoding!==void 0&&(CE("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),I.colorSpace=I.encoding===nB?QI:bB),this.texture=new Bn(B,I.mapping,I.wrapS,I.wrapT,I.magFilter,I.minFilter,I.format,I.type,I.anisotropy,I.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=I.generateMipmaps!==void 0?I.generateMipmaps:!1,this.texture.minFilter=I.minFilter!==void 0?I.minFilter:vg}fromEquirectangularTexture(A,I){this.texture.type=I.type,this.texture.colorSpace=I.colorSpace,this.texture.generateMipmaps=I.generateMipmaps,this.texture.minFilter=I.minFilter,this.texture.magFilter=I.magFilter;const C={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},B=new cE(5,5,5),Q=new ZB({name:"CubemapFromEquirect",uniforms:NQ(C.uniforms),vertexShader:C.vertexShader,fragmentShader:C.fragmentShader,side:Sg,blending:eB});Q.uniforms.tEquirect.value=I;const o=new UC(B,Q),t=I.minFilter;return I.minFilter===oE&&(I.minFilter=vg),new Ur(1,10,this).update(A,o),I.minFilter=t,o.geometry.dispose(),o.material.dispose(),this}clear(A,I,C,B){const Q=A.getRenderTarget();for(let o=0;o<6;o++)A.setRenderTarget(this,o),A.clear(I,C,B);A.setRenderTarget(Q)}}const Po=new P,Kr=new P,lr=new tI;class uB{constructor(A=new P(1,0,0),I=0){this.isPlane=!0,this.normal=A,this.constant=I}set(A,I){return this.normal.copy(A),this.constant=I,this}setComponents(A,I,C,B){return this.normal.set(A,I,C),this.constant=B,this}setFromNormalAndCoplanarPoint(A,I){return this.normal.copy(A),this.constant=-I.dot(this.normal),this}setFromCoplanarPoints(A,I,C){const B=Po.subVectors(C,I).cross(Kr.subVectors(A,I)).normalize();return this.setFromNormalAndCoplanarPoint(B,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,I){return I.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,I){const C=A.delta(Po),B=this.normal.dot(C);if(B===0)return this.distanceToPoint(A.start)===0?I.copy(A.start):null;const Q=-(A.start.dot(this.normal)+this.constant)/B;return Q<0||Q>1?null:I.copy(A.start).addScaledVector(C,Q)}intersectsLine(A){const I=this.distanceToPoint(A.start),C=this.distanceToPoint(A.end);return I<0&&C>0||C<0&&I>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,I){const C=I||lr.getNormalMatrix(A),B=this.coplanarPoint(Po).applyMatrix4(A),Q=this.normal.applyMatrix3(C).normalize();return this.constant=-B.dot(Q),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const YB=new vt,si=new P;class Qn{constructor(A=new uB,I=new uB,C=new uB,B=new uB,Q=new uB,o=new uB){this.planes=[A,I,C,B,Q,o]}set(A,I,C,B,Q,o){const t=this.planes;return t[0].copy(A),t[1].copy(I),t[2].copy(C),t[3].copy(B),t[4].copy(Q),t[5].copy(o),this}copy(A){const I=this.planes;for(let C=0;C<6;C++)I[C].copy(A.planes[C]);return this}setFromProjectionMatrix(A,I=PC){const C=this.planes,B=A.elements,Q=B[0],o=B[1],t=B[2],D=B[3],e=B[4],w=B[5],G=B[6],c=B[7],R=B[8],M=B[9],y=B[10],r=B[11],h=B[12],J=B[13],K=B[14],L=B[15];if(C[0].setComponents(D-Q,c-e,r-R,L-h).normalize(),C[1].setComponents(D+Q,c+e,r+R,L+h).normalize(),C[2].setComponents(D+o,c+w,r+M,L+J).normalize(),C[3].setComponents(D-o,c-w,r-M,L-J).normalize(),C[4].setComponents(D-t,c-G,r-y,L-K).normalize(),I===PC)C[5].setComponents(D+t,c+G,r+y,L+K).normalize();else if(I===ki)C[5].setComponents(t,G,y,K).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+I);return this}intersectsObject(A){if(A.boundingSphere!==void 0)A.boundingSphere===null&&A.computeBoundingSphere(),YB.copy(A.boundingSphere).applyMatrix4(A.matrixWorld);else{const I=A.geometry;I.boundingSphere===null&&I.computeBoundingSphere(),YB.copy(I.boundingSphere).applyMatrix4(A.matrixWorld)}return this.intersectsSphere(YB)}intersectsSprite(A){return YB.center.set(0,0,0),YB.radius=.7071067811865476,YB.applyMatrix4(A.matrixWorld),this.intersectsSphere(YB)}intersectsSphere(A){const I=this.planes,C=A.center,B=-A.radius;for(let Q=0;Q<6;Q++)if(I[Q].distanceToPoint(C)<B)return!1;return!0}intersectsBox(A){const I=this.planes;for(let C=0;C<6;C++){const B=I[C];if(si.x=B.normal.x>0?A.max.x:A.min.x,si.y=B.normal.y>0?A.max.y:A.min.y,si.z=B.normal.z>0?A.max.z:A.min.z,B.distanceToPoint(si)<0)return!1}return!0}containsPoint(A){const I=this.planes;for(let C=0;C<6;C++)if(I[C].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function En(){let g=null,A=!1,I=null,C=null;function B(Q,o){I(Q,o),C=g.requestAnimationFrame(B)}return{start:function(){A!==!0&&I!==null&&(C=g.requestAnimationFrame(B),A=!0)},stop:function(){g.cancelAnimationFrame(C),A=!1},setAnimationLoop:function(Q){I=Q},setContext:function(Q){g=Q}}}function kr(g,A){const I=A.isWebGL2,C=new WeakMap;function B(e,w){const G=e.array,c=e.usage,R=g.createBuffer();g.bindBuffer(w,R),g.bufferData(w,G,c),e.onUploadCallback();let M;if(G instanceof Float32Array)M=g.FLOAT;else if(G instanceof Uint16Array)if(e.isFloat16BufferAttribute)if(I)M=g.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=g.UNSIGNED_SHORT;else if(G instanceof Int16Array)M=g.SHORT;else if(G instanceof Uint32Array)M=g.UNSIGNED_INT;else if(G instanceof Int32Array)M=g.INT;else if(G instanceof Int8Array)M=g.BYTE;else if(G instanceof Uint8Array)M=g.UNSIGNED_BYTE;else if(G instanceof Uint8ClampedArray)M=g.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+G);return{buffer:R,type:M,bytesPerElement:G.BYTES_PER_ELEMENT,version:e.version}}function Q(e,w,G){const c=w.array,R=w.updateRange;g.bindBuffer(G,e),R.count===-1?g.bufferSubData(G,0,c):(I?g.bufferSubData(G,R.offset*c.BYTES_PER_ELEMENT,c,R.offset,R.count):g.bufferSubData(G,R.offset*c.BYTES_PER_ELEMENT,c.subarray(R.offset,R.offset+R.count)),R.count=-1),w.onUploadCallback()}function o(e){return e.isInterleavedBufferAttribute&&(e=e.data),C.get(e)}function t(e){e.isInterleavedBufferAttribute&&(e=e.data);const w=C.get(e);w&&(g.deleteBuffer(w.buffer),C.delete(e))}function D(e,w){if(e.isGLBufferAttribute){const c=C.get(e);(!c||c.version<e.version)&&C.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}e.isInterleavedBufferAttribute&&(e=e.data);const G=C.get(e);G===void 0?C.set(e,B(e,w)):G.version<e.version&&(Q(G.buffer,e,w),G.version=e.version)}return{get:o,remove:t,update:D}}class Pt extends IB{constructor(A=1,I=1,C=1,B=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:I,widthSegments:C,heightSegments:B};const Q=A/2,o=I/2,t=Math.floor(C),D=Math.floor(B),e=t+1,w=D+1,G=A/t,c=I/D,R=[],M=[],y=[],r=[];for(let h=0;h<w;h++){const J=h*c-o;for(let K=0;K<e;K++){const L=K*G-Q;M.push(L,-J,0),y.push(0,0,1),r.push(K/t),r.push(1-h/D)}}for(let h=0;h<D;h++)for(let J=0;J<t;J++){const K=J+e*h,L=J+e*(h+1),H=J+1+e*(h+1),q=J+1+e*h;R.push(K,L,q),R.push(L,H,q)}this.setIndex(R),this.setAttribute("position",new SC(M,3)),this.setAttribute("normal",new SC(y,3)),this.setAttribute("uv",new SC(r,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new Pt(A.width,A.height,A.widthSegments,A.heightSegments)}}var dr=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jr=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yr=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Lr=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fr=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ur=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hr="vec3 transformed = vec3( position );",pr=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qr=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mr=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,xr=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,br=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tr=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vr=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wr=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Or=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zr=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vr=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Xr=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Pr=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
} // validated`,jr=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,zr=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_r=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$r=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ac=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ic=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cc=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bc=`#ifdef USE_ENVMAP
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
#endif`,Qc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ec=`#ifdef USE_ENVMAP
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
#endif`,ic=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oc=`#ifdef USE_ENVMAP
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
#endif`,tc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ec=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ac=`#ifdef USE_GRADIENTMAP
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
}`,nc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,hc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,cc=`#ifdef USE_ENVMAP
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
#endif`,Fc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Uc=`struct PhysicalMaterial {
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Sc=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,kc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Yc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Lc=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,fc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hc=`#if defined( USE_POINTS_UV )
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
#endif`,pc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mc=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xc=`#ifdef USE_MORPHNORMALS
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
#endif`,bc=`#ifdef USE_MORPHTARGETS
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
#endif`,Tc=`#ifdef USE_MORPHTARGETS
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
#endif`,Vc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
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
vec3 geometryNormal = normal;`,Wc=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Oc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xc=`#ifdef USE_NORMALMAP
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
#endif`,Pc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,jc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_c=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$c=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,AF=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,IF=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gF=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,CF=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,BF=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QF=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,EF=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iF=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oF=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tF=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sF=`float getShadowMask() {
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
}`,DF=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eF=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,aF=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nF=`#ifdef USE_SKINNING
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
#endif`,hF=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wF=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GF=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rF=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cF=`#ifdef USE_TRANSMISSION
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
#endif`,FF=`#ifdef USE_TRANSMISSION
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
#endif`,RF=`#ifdef USE_UV
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
#endif`,NF=`#ifdef USE_UV
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
#endif`,yF=`#ifdef USE_UV
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
#endif`,MF=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const UF=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,SF=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,KF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lF=`#ifdef ENVMAP_TYPE_CUBE
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
	#include <encodings_fragment>
}`,kF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dF=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,JF=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
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
}`,YF=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,LF=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
}`,fF=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,uF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HF=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,pF=`uniform float scale;
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
}`,qF=`uniform vec3 diffuse;
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mF=`#include <common>
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
}`,xF=`uniform vec3 diffuse;
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bF=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,TF=`#define LAMBERT
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VF=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
}`,WF=`#define MATCAP
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OF=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
}`,ZF=`#define NORMAL
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
}`,vF=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,XF=`#define PHONG
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PF=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
}`,jF=`#define STANDARD
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zF=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
}`,_F=`#define TOON
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
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$F=`uniform float size;
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
}`,AR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IR=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
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
}`,gR=`uniform vec3 color;
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,CR=`uniform float rotation;
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
}`,BR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,iI={alphamap_fragment:dr,alphamap_pars_fragment:Jr,alphatest_fragment:Yr,alphatest_pars_fragment:Lr,aomap_fragment:fr,aomap_pars_fragment:ur,begin_vertex:Hr,beginnormal_vertex:pr,bsdfs:qr,iridescence_fragment:mr,bumpmap_pars_fragment:xr,clipping_planes_fragment:br,clipping_planes_pars_fragment:Tr,clipping_planes_pars_vertex:Vr,clipping_planes_vertex:Wr,color_fragment:Or,color_pars_fragment:Zr,color_pars_vertex:vr,color_vertex:Xr,common:Pr,cube_uv_reflection_fragment:jr,defaultnormal_vertex:zr,displacementmap_pars_vertex:_r,displacementmap_vertex:$r,emissivemap_fragment:Ac,emissivemap_pars_fragment:Ic,encodings_fragment:gc,encodings_pars_fragment:Cc,envmap_fragment:Bc,envmap_common_pars_fragment:Qc,envmap_pars_fragment:Ec,envmap_pars_vertex:ic,envmap_physical_pars_fragment:cc,envmap_vertex:oc,fog_vertex:tc,fog_pars_vertex:sc,fog_fragment:Dc,fog_pars_fragment:ec,gradientmap_pars_fragment:ac,lightmap_fragment:nc,lightmap_pars_fragment:hc,lights_lambert_fragment:wc,lights_lambert_pars_fragment:Gc,lights_pars_begin:rc,lights_toon_fragment:Fc,lights_toon_pars_fragment:Rc,lights_phong_fragment:Nc,lights_phong_pars_fragment:yc,lights_physical_fragment:Mc,lights_physical_pars_fragment:Uc,lights_fragment_begin:Sc,lights_fragment_maps:Kc,lights_fragment_end:lc,logdepthbuf_fragment:kc,logdepthbuf_pars_fragment:dc,logdepthbuf_pars_vertex:Jc,logdepthbuf_vertex:Yc,map_fragment:Lc,map_pars_fragment:fc,map_particle_fragment:uc,map_particle_pars_fragment:Hc,metalnessmap_fragment:pc,metalnessmap_pars_fragment:qc,morphcolor_vertex:mc,morphnormal_vertex:xc,morphtarget_pars_vertex:bc,morphtarget_vertex:Tc,normal_fragment_begin:Vc,normal_fragment_maps:Wc,normal_pars_fragment:Oc,normal_pars_vertex:Zc,normal_vertex:vc,normalmap_pars_fragment:Xc,clearcoat_normal_fragment_begin:Pc,clearcoat_normal_fragment_maps:jc,clearcoat_pars_fragment:zc,iridescence_pars_fragment:_c,output_fragment:$c,packing:AF,premultiplied_alpha_fragment:IF,project_vertex:gF,dithering_fragment:CF,dithering_pars_fragment:BF,roughnessmap_fragment:QF,roughnessmap_pars_fragment:EF,shadowmap_pars_fragment:iF,shadowmap_pars_vertex:oF,shadowmap_vertex:tF,shadowmask_pars_fragment:sF,skinbase_vertex:DF,skinning_pars_vertex:eF,skinning_vertex:aF,skinnormal_vertex:nF,specularmap_fragment:hF,specularmap_pars_fragment:wF,tonemapping_fragment:GF,tonemapping_pars_fragment:rF,transmission_fragment:cF,transmission_pars_fragment:FF,uv_pars_fragment:RF,uv_pars_vertex:NF,uv_vertex:yF,worldpos_vertex:MF,background_vert:UF,background_frag:SF,backgroundCube_vert:KF,backgroundCube_frag:lF,cube_vert:kF,cube_frag:dF,depth_vert:JF,depth_frag:YF,distanceRGBA_vert:LF,distanceRGBA_frag:fF,equirect_vert:uF,equirect_frag:HF,linedashed_vert:pF,linedashed_frag:qF,meshbasic_vert:mF,meshbasic_frag:xF,meshlambert_vert:bF,meshlambert_frag:TF,meshmatcap_vert:VF,meshmatcap_frag:WF,meshnormal_vert:OF,meshnormal_frag:ZF,meshphong_vert:vF,meshphong_frag:XF,meshphysical_vert:PF,meshphysical_frag:jF,meshtoon_vert:zF,meshtoon_frag:_F,points_vert:$F,points_frag:AR,shadow_vert:IR,shadow_frag:gR,sprite_vert:CR,sprite_frag:BR},NA={common:{diffuse:{value:new lI(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tI},alphaMap:{value:null},alphaMapTransform:{value:new tI},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tI}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tI}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tI}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tI},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tI},normalScale:{value:new MI(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tI},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tI}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tI}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tI}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lI(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lI(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tI},alphaTest:{value:0},uvTransform:{value:new tI}},sprite:{diffuse:{value:new lI(16777215)},opacity:{value:1},center:{value:new MI(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tI},alphaMap:{value:null},alphaMapTransform:{value:new tI},alphaTest:{value:0}}},NC={basic:{uniforms:cg([NA.common,NA.specularmap,NA.envmap,NA.aomap,NA.lightmap,NA.fog]),vertexShader:iI.meshbasic_vert,fragmentShader:iI.meshbasic_frag},lambert:{uniforms:cg([NA.common,NA.specularmap,NA.envmap,NA.aomap,NA.lightmap,NA.emissivemap,NA.bumpmap,NA.normalmap,NA.displacementmap,NA.fog,NA.lights,{emissive:{value:new lI(0)}}]),vertexShader:iI.meshlambert_vert,fragmentShader:iI.meshlambert_frag},phong:{uniforms:cg([NA.common,NA.specularmap,NA.envmap,NA.aomap,NA.lightmap,NA.emissivemap,NA.bumpmap,NA.normalmap,NA.displacementmap,NA.fog,NA.lights,{emissive:{value:new lI(0)},specular:{value:new lI(1118481)},shininess:{value:30}}]),vertexShader:iI.meshphong_vert,fragmentShader:iI.meshphong_frag},standard:{uniforms:cg([NA.common,NA.envmap,NA.aomap,NA.lightmap,NA.emissivemap,NA.bumpmap,NA.normalmap,NA.displacementmap,NA.roughnessmap,NA.metalnessmap,NA.fog,NA.lights,{emissive:{value:new lI(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:iI.meshphysical_vert,fragmentShader:iI.meshphysical_frag},toon:{uniforms:cg([NA.common,NA.aomap,NA.lightmap,NA.emissivemap,NA.bumpmap,NA.normalmap,NA.displacementmap,NA.gradientmap,NA.fog,NA.lights,{emissive:{value:new lI(0)}}]),vertexShader:iI.meshtoon_vert,fragmentShader:iI.meshtoon_frag},matcap:{uniforms:cg([NA.common,NA.bumpmap,NA.normalmap,NA.displacementmap,NA.fog,{matcap:{value:null}}]),vertexShader:iI.meshmatcap_vert,fragmentShader:iI.meshmatcap_frag},points:{uniforms:cg([NA.points,NA.fog]),vertexShader:iI.points_vert,fragmentShader:iI.points_frag},dashed:{uniforms:cg([NA.common,NA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:iI.linedashed_vert,fragmentShader:iI.linedashed_frag},depth:{uniforms:cg([NA.common,NA.displacementmap]),vertexShader:iI.depth_vert,fragmentShader:iI.depth_frag},normal:{uniforms:cg([NA.common,NA.bumpmap,NA.normalmap,NA.displacementmap,{opacity:{value:1}}]),vertexShader:iI.meshnormal_vert,fragmentShader:iI.meshnormal_frag},sprite:{uniforms:cg([NA.sprite,NA.fog]),vertexShader:iI.sprite_vert,fragmentShader:iI.sprite_frag},background:{uniforms:{uvTransform:{value:new tI},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:iI.background_vert,fragmentShader:iI.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:iI.backgroundCube_vert,fragmentShader:iI.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:iI.cube_vert,fragmentShader:iI.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:iI.equirect_vert,fragmentShader:iI.equirect_frag},distanceRGBA:{uniforms:cg([NA.common,NA.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:iI.distanceRGBA_vert,fragmentShader:iI.distanceRGBA_frag},shadow:{uniforms:cg([NA.lights,NA.fog,{color:{value:new lI(0)},opacity:{value:1}}]),vertexShader:iI.shadow_vert,fragmentShader:iI.shadow_frag}};NC.physical={uniforms:cg([NC.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tI},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tI},clearcoatNormalScale:{value:new MI(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tI},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tI},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tI},sheen:{value:0},sheenColor:{value:new lI(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tI},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tI},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tI},transmissionSamplerSize:{value:new MI},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tI},attenuationDistance:{value:0},attenuationColor:{value:new lI(0)},specularColor:{value:new lI(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tI},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tI},anisotropyVector:{value:new MI},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tI}}]),vertexShader:iI.meshphysical_vert,fragmentShader:iI.meshphysical_frag};const Di={r:0,b:0,g:0};function QR(g,A,I,C,B,Q,o){const t=new lI(0);let D=Q===!0?0:1,e,w,G=null,c=0,R=null;function M(r,h){let J=!1,K=h.isScene===!0?h.background:null;switch(K&&K.isTexture&&(K=(h.backgroundBlurriness>0?I:A).get(K)),K===null?y(t,D):K&&K.isColor&&(y(K,1),J=!0),g.xr.getEnvironmentBlendMode()){case"opaque":J=!0;break;case"additive":C.buffers.color.setClear(0,0,0,1,o),J=!0;break;case"alpha-blend":C.buffers.color.setClear(0,0,0,0,o),J=!0;break}(g.autoClear||J)&&g.clear(g.autoClearColor,g.autoClearDepth,g.autoClearStencil),K&&(K.isCubeTexture||K.mapping===Oi)?(w===void 0&&(w=new UC(new cE(1,1,1),new ZB({name:"BackgroundCubeMaterial",uniforms:NQ(NC.backgroundCube.uniforms),vertexShader:NC.backgroundCube.vertexShader,fragmentShader:NC.backgroundCube.fragmentShader,side:Sg,depthTest:!1,depthWrite:!1,fog:!1})),w.geometry.deleteAttribute("normal"),w.geometry.deleteAttribute("uv"),w.onBeforeRender=function(q,x,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(w.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),B.update(w)),w.material.uniforms.envMap.value=K,w.material.uniforms.flipEnvMap.value=K.isCubeTexture&&K.isRenderTargetTexture===!1?-1:1,w.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,w.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,w.material.toneMapped=K.colorSpace!==QI,(G!==K||c!==K.version||R!==g.toneMapping)&&(w.material.needsUpdate=!0,G=K,c=K.version,R=g.toneMapping),w.layers.enableAll(),r.unshift(w,w.geometry,w.material,0,0,null)):K&&K.isTexture&&(e===void 0&&(e=new UC(new Pt(2,2),new ZB({name:"BackgroundMaterial",uniforms:NQ(NC.background.uniforms),vertexShader:NC.background.vertexShader,fragmentShader:NC.background.fragmentShader,side:wB,depthTest:!1,depthWrite:!1,fog:!1})),e.geometry.deleteAttribute("normal"),Object.defineProperty(e.material,"map",{get:function(){return this.uniforms.t2D.value}}),B.update(e)),e.material.uniforms.t2D.value=K,e.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,e.material.toneMapped=K.colorSpace!==QI,K.matrixAutoUpdate===!0&&K.updateMatrix(),e.material.uniforms.uvTransform.value.copy(K.matrix),(G!==K||c!==K.version||R!==g.toneMapping)&&(e.material.needsUpdate=!0,G=K,c=K.version,R=g.toneMapping),e.layers.enableAll(),r.unshift(e,e.geometry,e.material,0,0,null))}function y(r,h){r.getRGB(Di,gn(g)),C.buffers.color.setClear(Di.r,Di.g,Di.b,h,o)}return{getClearColor:function(){return t},setClearColor:function(r,h=1){t.set(r),D=h,y(t,D)},getClearAlpha:function(){return D},setClearAlpha:function(r){D=r,y(t,D)},render:M}}function ER(g,A,I,C){const B=g.getParameter(g.MAX_VERTEX_ATTRIBS),Q=C.isWebGL2?null:A.get("OES_vertex_array_object"),o=C.isWebGL2||Q!==null,t={},D=r(null);let e=D,w=!1;function G(_,$,tA,BA,iA){let nA=!1;if(o){const oA=y(BA,tA,$);e!==oA&&(e=oA,R(e.object)),nA=h(_,BA,tA,iA),nA&&J(_,BA,tA,iA)}else{const oA=$.wireframe===!0;(e.geometry!==BA.id||e.program!==tA.id||e.wireframe!==oA)&&(e.geometry=BA.id,e.program=tA.id,e.wireframe=oA,nA=!0)}iA!==null&&I.update(iA,g.ELEMENT_ARRAY_BUFFER),(nA||w)&&(w=!1,W(_,$,tA,BA),iA!==null&&g.bindBuffer(g.ELEMENT_ARRAY_BUFFER,I.get(iA).buffer))}function c(){return C.isWebGL2?g.createVertexArray():Q.createVertexArrayOES()}function R(_){return C.isWebGL2?g.bindVertexArray(_):Q.bindVertexArrayOES(_)}function M(_){return C.isWebGL2?g.deleteVertexArray(_):Q.deleteVertexArrayOES(_)}function y(_,$,tA){const BA=tA.wireframe===!0;let iA=t[_.id];iA===void 0&&(iA={},t[_.id]=iA);let nA=iA[$.id];nA===void 0&&(nA={},iA[$.id]=nA);let oA=nA[BA];return oA===void 0&&(oA=r(c()),nA[BA]=oA),oA}function r(_){const $=[],tA=[],BA=[];for(let iA=0;iA<B;iA++)$[iA]=0,tA[iA]=0,BA[iA]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:tA,attributeDivisors:BA,object:_,attributes:{},index:null}}function h(_,$,tA,BA){const iA=e.attributes,nA=$.attributes;let oA=0;const uA=tA.getAttributes();for(const O in uA)if(uA[O].location>=0){const DA=iA[O];let SA=nA[O];if(SA===void 0&&(O==="instanceMatrix"&&_.instanceMatrix&&(SA=_.instanceMatrix),O==="instanceColor"&&_.instanceColor&&(SA=_.instanceColor)),DA===void 0||DA.attribute!==SA||SA&&DA.data!==SA.data)return!0;oA++}return e.attributesNum!==oA||e.index!==BA}function J(_,$,tA,BA){const iA={},nA=$.attributes;let oA=0;const uA=tA.getAttributes();for(const O in uA)if(uA[O].location>=0){let DA=nA[O];DA===void 0&&(O==="instanceMatrix"&&_.instanceMatrix&&(DA=_.instanceMatrix),O==="instanceColor"&&_.instanceColor&&(DA=_.instanceColor));const SA={};SA.attribute=DA,DA&&DA.data&&(SA.data=DA.data),iA[O]=SA,oA++}e.attributes=iA,e.attributesNum=oA,e.index=BA}function K(){const _=e.newAttributes;for(let $=0,tA=_.length;$<tA;$++)_[$]=0}function L(_){H(_,0)}function H(_,$){const tA=e.newAttributes,BA=e.enabledAttributes,iA=e.attributeDivisors;tA[_]=1,BA[_]===0&&(g.enableVertexAttribArray(_),BA[_]=1),iA[_]!==$&&((C.isWebGL2?g:A.get("ANGLE_instanced_arrays"))[C.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](_,$),iA[_]=$)}function q(){const _=e.newAttributes,$=e.enabledAttributes;for(let tA=0,BA=$.length;tA<BA;tA++)$[tA]!==_[tA]&&(g.disableVertexAttribArray(tA),$[tA]=0)}function x(_,$,tA,BA,iA,nA,oA){oA===!0?g.vertexAttribIPointer(_,$,tA,iA,nA):g.vertexAttribPointer(_,$,tA,BA,iA,nA)}function W(_,$,tA,BA){if(C.isWebGL2===!1&&(_.isInstancedMesh||BA.isInstancedBufferGeometry)&&A.get("ANGLE_instanced_arrays")===null)return;K();const iA=BA.attributes,nA=tA.getAttributes(),oA=$.defaultAttributeValues;for(const uA in nA){const O=nA[uA];if(O.location>=0){let sA=iA[uA];if(sA===void 0&&(uA==="instanceMatrix"&&_.instanceMatrix&&(sA=_.instanceMatrix),uA==="instanceColor"&&_.instanceColor&&(sA=_.instanceColor)),sA!==void 0){const DA=sA.normalized,SA=sA.itemSize,kA=I.get(sA);if(kA===void 0)continue;const xA=kA.buffer,$A=kA.type,JA=kA.bytesPerElement,nI=C.isWebGL2===!0&&($A===g.INT||$A===g.UNSIGNED_INT||sA.gpuType===ma);if(sA.isInterleavedBufferAttribute){const AI=sA.data,V=AI.stride,GA=sA.offset;if(AI.isInstancedInterleavedBuffer){for(let LA=0;LA<O.locationSize;LA++)H(O.location+LA,AI.meshPerAttribute);_.isInstancedMesh!==!0&&BA._maxInstanceCount===void 0&&(BA._maxInstanceCount=AI.meshPerAttribute*AI.count)}else for(let LA=0;LA<O.locationSize;LA++)L(O.location+LA);g.bindBuffer(g.ARRAY_BUFFER,xA);for(let LA=0;LA<O.locationSize;LA++)x(O.location+LA,SA/O.locationSize,$A,DA,V*JA,(GA+SA/O.locationSize*LA)*JA,nI)}else{if(sA.isInstancedBufferAttribute){for(let AI=0;AI<O.locationSize;AI++)H(O.location+AI,sA.meshPerAttribute);_.isInstancedMesh!==!0&&BA._maxInstanceCount===void 0&&(BA._maxInstanceCount=sA.meshPerAttribute*sA.count)}else for(let AI=0;AI<O.locationSize;AI++)L(O.location+AI);g.bindBuffer(g.ARRAY_BUFFER,xA);for(let AI=0;AI<O.locationSize;AI++)x(O.location+AI,SA/O.locationSize,$A,DA,SA*JA,SA/O.locationSize*AI*JA,nI)}}else if(oA!==void 0){const DA=oA[uA];if(DA!==void 0)switch(DA.length){case 2:g.vertexAttrib2fv(O.location,DA);break;case 3:g.vertexAttrib3fv(O.location,DA);break;case 4:g.vertexAttrib4fv(O.location,DA);break;default:g.vertexAttrib1fv(O.location,DA)}}}}q()}function l(){aA();for(const _ in t){const $=t[_];for(const tA in $){const BA=$[tA];for(const iA in BA)M(BA[iA].object),delete BA[iA];delete $[tA]}delete t[_]}}function u(_){if(t[_.id]===void 0)return;const $=t[_.id];for(const tA in $){const BA=$[tA];for(const iA in BA)M(BA[iA].object),delete BA[iA];delete $[tA]}delete t[_.id]}function EA(_){for(const $ in t){const tA=t[$];if(tA[_.id]===void 0)continue;const BA=tA[_.id];for(const iA in BA)M(BA[iA].object),delete BA[iA];delete tA[_.id]}}function aA(){X(),w=!0,e!==D&&(e=D,R(e.object))}function X(){D.geometry=null,D.program=null,D.wireframe=!1}return{setup:G,reset:aA,resetDefaultState:X,dispose:l,releaseStatesOfGeometry:u,releaseStatesOfProgram:EA,initAttributes:K,enableAttribute:L,disableUnusedAttributes:q}}function iR(g,A,I,C){const B=C.isWebGL2;let Q;function o(e){Q=e}function t(e,w){g.drawArrays(Q,e,w),I.update(w,Q,1)}function D(e,w,G){if(G===0)return;let c,R;if(B)c=g,R="drawArraysInstanced";else if(c=A.get("ANGLE_instanced_arrays"),R="drawArraysInstancedANGLE",c===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}c[R](Q,e,w,G),I.update(w,Q,G)}this.setMode=o,this.render=t,this.renderInstances=D}function oR(g,A,I){let C;function B(){if(C!==void 0)return C;if(A.has("EXT_texture_filter_anisotropic")===!0){const x=A.get("EXT_texture_filter_anisotropic");C=g.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else C=0;return C}function Q(x){if(x==="highp"){if(g.getShaderPrecisionFormat(g.VERTEX_SHADER,g.HIGH_FLOAT).precision>0&&g.getShaderPrecisionFormat(g.FRAGMENT_SHADER,g.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&g.getShaderPrecisionFormat(g.VERTEX_SHADER,g.MEDIUM_FLOAT).precision>0&&g.getShaderPrecisionFormat(g.FRAGMENT_SHADER,g.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&g.constructor.name==="WebGL2RenderingContext";let t=I.precision!==void 0?I.precision:"highp";const D=Q(t);D!==t&&(console.warn("THREE.WebGLRenderer:",t,"not supported, using",D,"instead."),t=D);const e=o||A.has("WEBGL_draw_buffers"),w=I.logarithmicDepthBuffer===!0,G=g.getParameter(g.MAX_TEXTURE_IMAGE_UNITS),c=g.getParameter(g.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=g.getParameter(g.MAX_TEXTURE_SIZE),M=g.getParameter(g.MAX_CUBE_MAP_TEXTURE_SIZE),y=g.getParameter(g.MAX_VERTEX_ATTRIBS),r=g.getParameter(g.MAX_VERTEX_UNIFORM_VECTORS),h=g.getParameter(g.MAX_VARYING_VECTORS),J=g.getParameter(g.MAX_FRAGMENT_UNIFORM_VECTORS),K=c>0,L=o||A.has("OES_texture_float"),H=K&&L,q=o?g.getParameter(g.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:e,getMaxAnisotropy:B,getMaxPrecision:Q,precision:t,logarithmicDepthBuffer:w,maxTextures:G,maxVertexTextures:c,maxTextureSize:R,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:r,maxVaryings:h,maxFragmentUniforms:J,vertexTextures:K,floatFragmentTextures:L,floatVertexTextures:H,maxSamples:q}}function tR(g){const A=this;let I=null,C=0,B=!1,Q=!1;const o=new uB,t=new tI,D={value:null,needsUpdate:!1};this.uniform=D,this.numPlanes=0,this.numIntersection=0,this.init=function(G,c){const R=G.length!==0||c||C!==0||B;return B=c,C=G.length,R},this.beginShadows=function(){Q=!0,w(null)},this.endShadows=function(){Q=!1},this.setGlobalState=function(G,c){I=w(G,c,0)},this.setState=function(G,c,R){const M=G.clippingPlanes,y=G.clipIntersection,r=G.clipShadows,h=g.get(G);if(!B||M===null||M.length===0||Q&&!r)Q?w(null):e();else{const J=Q?0:C,K=J*4;let L=h.clippingState||null;D.value=L,L=w(M,c,K,R);for(let H=0;H!==K;++H)L[H]=I[H];h.clippingState=L,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=J}};function e(){D.value!==I&&(D.value=I,D.needsUpdate=C>0),A.numPlanes=C,A.numIntersection=0}function w(G,c,R,M){const y=G!==null?G.length:0;let r=null;if(y!==0){if(r=D.value,M!==!0||r===null){const h=R+y*4,J=c.matrixWorldInverse;t.getNormalMatrix(J),(r===null||r.length<h)&&(r=new Float32Array(h));for(let K=0,L=R;K!==y;++K,L+=4)o.copy(G[K]).applyMatrix4(J,t),o.normal.toArray(r,L),r[L+3]=o.constant}D.value=r,D.needsUpdate=!0}return A.numPlanes=y,A.numIntersection=0,r}}function sR(g){let A=new WeakMap;function I(o,t){return t===Dt?o.mapping=cQ:t===et&&(o.mapping=FQ),o}function C(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const t=o.mapping;if(t===Dt||t===et)if(A.has(o)){const D=A.get(o).texture;return I(D,o.mapping)}else{const D=o.image;if(D&&D.height>0){const e=new Sr(D.height/2);return e.fromEquirectangularTexture(g,o),A.set(o,e),o.addEventListener("dispose",B),I(e.texture,o.mapping)}else return null}}return o}function B(o){const t=o.target;t.removeEventListener("dispose",B);const D=A.get(t);D!==void 0&&(A.delete(t),D.dispose())}function Q(){A=new WeakMap}return{get:C,dispose:Q}}class DR extends Cn{constructor(A=-1,I=1,C=1,B=-1,Q=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=I,this.top=C,this.bottom=B,this.near=Q,this.far=o,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,I,C,B,Q,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=C,this.view.offsetY=B,this.view.width=Q,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),I=(this.top-this.bottom)/(2*this.zoom),C=(this.right+this.left)/2,B=(this.top+this.bottom)/2;let Q=C-A,o=C+A,t=B+I,D=B-I;if(this.view!==null&&this.view.enabled){const e=(this.right-this.left)/this.view.fullWidth/this.zoom,w=(this.top-this.bottom)/this.view.fullHeight/this.zoom;Q+=e*this.view.offsetX,o=Q+e*this.view.width,t-=w*this.view.offsetY,D=t-w*this.view.height}this.projectionMatrix.makeOrthographic(Q,o,t,D,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.zoom=this.zoom,I.object.left=this.left,I.object.right=this.right,I.object.top=this.top,I.object.bottom=this.bottom,I.object.near=this.near,I.object.far=this.far,this.view!==null&&(I.object.view=Object.assign({},this.view)),I}}const nQ=4,Ce=[.125,.215,.35,.446,.526,.582],pB=20,jo=new DR,Be=new lI;let zo=null;const HB=(1+Math.sqrt(5))/2,DQ=1/HB,Qe=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,HB,DQ),new P(0,HB,-DQ),new P(DQ,0,HB),new P(-DQ,0,HB),new P(HB,DQ,0),new P(-HB,DQ,0)];class Ee{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,I=0,C=.1,B=100){zo=this._renderer.getRenderTarget(),this._setSize(256);const Q=this._allocateTargets();return Q.depthBuffer=!0,this._sceneToCubeUV(A,C,B,Q),I>0&&this._blur(Q,0,0,I),this._applyPMREM(Q),this._cleanup(Q),Q}fromEquirectangular(A,I=null){return this._fromTexture(A,I)}fromCubemap(A,I=null){return this._fromTexture(A,I)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=te(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oe(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(zo),A.scissorTest=!1,ei(A,0,0,A.width,A.height)}_fromTexture(A,I){A.mapping===cQ||A.mapping===FQ?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),zo=this._renderer.getRenderTarget();const C=I||this._allocateTargets();return this._textureToCubeUV(A,C),this._applyPMREM(C),this._cleanup(C),C}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),I=4*this._cubeSize,C={magFilter:vg,minFilter:vg,generateMipmaps:!1,type:tE,format:DC,colorSpace:KC,depthBuffer:!1},B=ie(A,I,C);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==I){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ie(A,I,C);const{_lodMax:Q}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eR(Q)),this._blurMaterial=aR(Q,A,I)}return B}_compileMaterial(A){const I=new UC(this._lodPlanes[0],A);this._renderer.compile(I,jo)}_sceneToCubeUV(A,I,C,B){const t=new Xg(90,1,I,C),D=[1,-1,1,1,1,1],e=[1,1,1,-1,-1,-1],w=this._renderer,G=w.autoClear,c=w.toneMapping;w.getClearColor(Be),w.toneMapping=zC,w.autoClear=!1;const R=new Xt({name:"PMREM.Background",side:Sg,depthWrite:!1,depthTest:!1}),M=new UC(new cE,R);let y=!1;const r=A.background;r?r.isColor&&(R.color.copy(r),A.background=null,y=!0):(R.color.copy(Be),y=!0);for(let h=0;h<6;h++){const J=h%3;J===0?(t.up.set(0,D[h],0),t.lookAt(e[h],0,0)):J===1?(t.up.set(0,0,D[h]),t.lookAt(0,e[h],0)):(t.up.set(0,D[h],0),t.lookAt(0,0,e[h]));const K=this._cubeSize;ei(B,J*K,h>2?K:0,K,K),w.setRenderTarget(B),y&&w.render(M,t),w.render(A,t)}M.geometry.dispose(),M.material.dispose(),w.toneMapping=c,w.autoClear=G,A.background=r}_textureToCubeUV(A,I){const C=this._renderer,B=A.mapping===cQ||A.mapping===FQ;B?(this._cubemapMaterial===null&&(this._cubemapMaterial=te()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oe());const Q=B?this._cubemapMaterial:this._equirectMaterial,o=new UC(this._lodPlanes[0],Q),t=Q.uniforms;t.envMap.value=A;const D=this._cubeSize;ei(I,0,0,3*D,2*D),C.setRenderTarget(I),C.render(o,jo)}_applyPMREM(A){const I=this._renderer,C=I.autoClear;I.autoClear=!1;for(let B=1;B<this._lodPlanes.length;B++){const Q=Math.sqrt(this._sigmas[B]*this._sigmas[B]-this._sigmas[B-1]*this._sigmas[B-1]),o=Qe[(B-1)%Qe.length];this._blur(A,B-1,B,Q,o)}I.autoClear=C}_blur(A,I,C,B,Q){const o=this._pingPongRenderTarget;this._halfBlur(A,o,I,C,B,"latitudinal",Q),this._halfBlur(o,A,C,C,B,"longitudinal",Q)}_halfBlur(A,I,C,B,Q,o,t){const D=this._renderer,e=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const w=3,G=new UC(this._lodPlanes[B],e),c=e.uniforms,R=this._sizeLods[C]-1,M=isFinite(Q)?Math.PI/(2*R):2*Math.PI/(2*pB-1),y=Q/M,r=isFinite(Q)?1+Math.floor(w*y):pB;r>pB&&console.warn(`sigmaRadians, ${Q}, is too large and will clip, as it requested ${r} samples when the maximum is set to ${pB}`);const h=[];let J=0;for(let x=0;x<pB;++x){const W=x/y,l=Math.exp(-W*W/2);h.push(l),x===0?J+=l:x<r&&(J+=2*l)}for(let x=0;x<h.length;x++)h[x]=h[x]/J;c.envMap.value=A.texture,c.samples.value=r,c.weights.value=h,c.latitudinal.value=o==="latitudinal",t&&(c.poleAxis.value=t);const{_lodMax:K}=this;c.dTheta.value=M,c.mipInt.value=K-C;const L=this._sizeLods[B],H=3*L*(B>K-nQ?B-K+nQ:0),q=4*(this._cubeSize-L);ei(I,H,q,3*L,2*L),D.setRenderTarget(I),D.render(G,jo)}}function eR(g){const A=[],I=[],C=[];let B=g;const Q=g-nQ+1+Ce.length;for(let o=0;o<Q;o++){const t=Math.pow(2,B);I.push(t);let D=1/t;o>g-nQ?D=Ce[o-g+nQ-1]:o===0&&(D=0),C.push(D);const e=1/(t-2),w=-e,G=1+e,c=[w,w,G,w,G,G,w,w,G,G,w,G],R=6,M=6,y=3,r=2,h=1,J=new Float32Array(y*M*R),K=new Float32Array(r*M*R),L=new Float32Array(h*M*R);for(let q=0;q<R;q++){const x=q%3*2/3-1,W=q>2?0:-1,l=[x,W,0,x+2/3,W,0,x+2/3,W+1,0,x,W,0,x+2/3,W+1,0,x,W+1,0];J.set(l,y*M*q),K.set(c,r*M*q);const u=[q,q,q,q,q,q];L.set(u,h*M*q)}const H=new IB;H.setAttribute("position",new eC(J,y)),H.setAttribute("uv",new eC(K,r)),H.setAttribute("faceIndex",new eC(L,h)),A.push(H),B>nQ&&B--}return{lodPlanes:A,sizeLods:I,sigmas:C}}function ie(g,A,I){const C=new OB(g,A,I);return C.texture.mapping=Oi,C.texture.name="PMREM.cubeUv",C.scissorTest=!0,C}function ei(g,A,I,C,B){g.viewport.set(A,I,C,B),g.scissor.set(A,I,C,B)}function aR(g,A,I){const C=new Float32Array(pB),B=new P(0,1,0);return new ZB({name:"SphericalGaussianBlur",defines:{n:pB,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/I,CUBEUV_MAX_MIP:`${g}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:C},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:B}},vertexShader:jt(),fragmentShader:`

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
		`,blending:eB,depthTest:!1,depthWrite:!1})}function oe(){return new ZB({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jt(),fragmentShader:`

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
		`,blending:eB,depthTest:!1,depthWrite:!1})}function te(){return new ZB({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jt(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:eB,depthTest:!1,depthWrite:!1})}function jt(){return`

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
	`}function nR(g){let A=new WeakMap,I=null;function C(t){if(t&&t.isTexture){const D=t.mapping,e=D===Dt||D===et,w=D===cQ||D===FQ;if(e||w)if(t.isRenderTargetTexture&&t.needsPMREMUpdate===!0){t.needsPMREMUpdate=!1;let G=A.get(t);return I===null&&(I=new Ee(g)),G=e?I.fromEquirectangular(t,G):I.fromCubemap(t,G),A.set(t,G),G.texture}else{if(A.has(t))return A.get(t).texture;{const G=t.image;if(e&&G&&G.height>0||w&&G&&B(G)){I===null&&(I=new Ee(g));const c=e?I.fromEquirectangular(t):I.fromCubemap(t);return A.set(t,c),t.addEventListener("dispose",Q),c.texture}else return null}}}return t}function B(t){let D=0;const e=6;for(let w=0;w<e;w++)t[w]!==void 0&&D++;return D===e}function Q(t){const D=t.target;D.removeEventListener("dispose",Q);const e=A.get(D);e!==void 0&&(A.delete(D),e.dispose())}function o(){A=new WeakMap,I!==null&&(I.dispose(),I=null)}return{get:C,dispose:o}}function hR(g){const A={};function I(C){if(A[C]!==void 0)return A[C];let B;switch(C){case"WEBGL_depth_texture":B=g.getExtension("WEBGL_depth_texture")||g.getExtension("MOZ_WEBGL_depth_texture")||g.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":B=g.getExtension("EXT_texture_filter_anisotropic")||g.getExtension("MOZ_EXT_texture_filter_anisotropic")||g.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":B=g.getExtension("WEBGL_compressed_texture_s3tc")||g.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||g.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":B=g.getExtension("WEBGL_compressed_texture_pvrtc")||g.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:B=g.getExtension(C)}return A[C]=B,B}return{has:function(C){return I(C)!==null},init:function(C){C.isWebGL2?I("EXT_color_buffer_float"):(I("WEBGL_depth_texture"),I("OES_texture_float"),I("OES_texture_half_float"),I("OES_texture_half_float_linear"),I("OES_standard_derivatives"),I("OES_element_index_uint"),I("OES_vertex_array_object"),I("ANGLE_instanced_arrays")),I("OES_texture_float_linear"),I("EXT_color_buffer_half_float"),I("WEBGL_multisampled_render_to_texture")},get:function(C){const B=I(C);return B===null&&console.warn("THREE.WebGLRenderer: "+C+" extension not supported."),B}}}function wR(g,A,I,C){const B={},Q=new WeakMap;function o(G){const c=G.target;c.index!==null&&A.remove(c.index);for(const M in c.attributes)A.remove(c.attributes[M]);for(const M in c.morphAttributes){const y=c.morphAttributes[M];for(let r=0,h=y.length;r<h;r++)A.remove(y[r])}c.removeEventListener("dispose",o),delete B[c.id];const R=Q.get(c);R&&(A.remove(R),Q.delete(c)),C.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,I.memory.geometries--}function t(G,c){return B[c.id]===!0||(c.addEventListener("dispose",o),B[c.id]=!0,I.memory.geometries++),c}function D(G){const c=G.attributes;for(const M in c)A.update(c[M],g.ARRAY_BUFFER);const R=G.morphAttributes;for(const M in R){const y=R[M];for(let r=0,h=y.length;r<h;r++)A.update(y[r],g.ARRAY_BUFFER)}}function e(G){const c=[],R=G.index,M=G.attributes.position;let y=0;if(R!==null){const J=R.array;y=R.version;for(let K=0,L=J.length;K<L;K+=3){const H=J[K+0],q=J[K+1],x=J[K+2];c.push(H,q,q,x,x,H)}}else{const J=M.array;y=M.version;for(let K=0,L=J.length/3-1;K<L;K+=3){const H=K+0,q=K+1,x=K+2;c.push(H,q,q,x,x,H)}}const r=new(Xa(c)?In:An)(c,1);r.version=y;const h=Q.get(G);h&&A.remove(h),Q.set(G,r)}function w(G){const c=Q.get(G);if(c){const R=G.index;R!==null&&c.version<R.version&&e(G)}else e(G);return Q.get(G)}return{get:t,update:D,getWireframeAttribute:w}}function GR(g,A,I,C){const B=C.isWebGL2;let Q;function o(c){Q=c}let t,D;function e(c){t=c.type,D=c.bytesPerElement}function w(c,R){g.drawElements(Q,R,t,c*D),I.update(R,Q,1)}function G(c,R,M){if(M===0)return;let y,r;if(B)y=g,r="drawElementsInstanced";else if(y=A.get("ANGLE_instanced_arrays"),r="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[r](Q,R,t,c*D,M),I.update(R,Q,M)}this.setMode=o,this.setIndex=e,this.render=w,this.renderInstances=G}function rR(g){const A={geometries:0,textures:0},I={frame:0,calls:0,triangles:0,points:0,lines:0};function C(Q,o,t){switch(I.calls++,o){case g.TRIANGLES:I.triangles+=t*(Q/3);break;case g.LINES:I.lines+=t*(Q/2);break;case g.LINE_STRIP:I.lines+=t*(Q-1);break;case g.LINE_LOOP:I.lines+=t*Q;break;case g.POINTS:I.points+=t*Q;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function B(){I.calls=0,I.triangles=0,I.points=0,I.lines=0}return{memory:A,render:I,programs:null,autoReset:!0,reset:B,update:C}}function cR(g,A){return g[0]-A[0]}function FR(g,A){return Math.abs(A[1])-Math.abs(g[1])}function RR(g,A,I){const C={},B=new Float32Array(8),Q=new WeakMap,o=new ng,t=[];for(let e=0;e<8;e++)t[e]=[e,0];function D(e,w,G){const c=e.morphTargetInfluences;if(A.isWebGL2===!0){const M=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,y=M!==void 0?M.length:0;let r=Q.get(w);if(r===void 0||r.count!==y){let $=function(){X.dispose(),Q.delete(w),w.removeEventListener("dispose",$)};var R=$;r!==void 0&&r.texture.dispose();const K=w.morphAttributes.position!==void 0,L=w.morphAttributes.normal!==void 0,H=w.morphAttributes.color!==void 0,q=w.morphAttributes.position||[],x=w.morphAttributes.normal||[],W=w.morphAttributes.color||[];let l=0;K===!0&&(l=1),L===!0&&(l=2),H===!0&&(l=3);let u=w.attributes.position.count*l,EA=1;u>A.maxTextureSize&&(EA=Math.ceil(u/A.maxTextureSize),u=A.maxTextureSize);const aA=new Float32Array(u*EA*4*y),X=new za(aA,u,EA,y);X.type=DB,X.needsUpdate=!0;const _=l*4;for(let tA=0;tA<y;tA++){const BA=q[tA],iA=x[tA],nA=W[tA],oA=u*EA*4*tA;for(let uA=0;uA<BA.count;uA++){const O=uA*_;K===!0&&(o.fromBufferAttribute(BA,uA),aA[oA+O+0]=o.x,aA[oA+O+1]=o.y,aA[oA+O+2]=o.z,aA[oA+O+3]=0),L===!0&&(o.fromBufferAttribute(iA,uA),aA[oA+O+4]=o.x,aA[oA+O+5]=o.y,aA[oA+O+6]=o.z,aA[oA+O+7]=0),H===!0&&(o.fromBufferAttribute(nA,uA),aA[oA+O+8]=o.x,aA[oA+O+9]=o.y,aA[oA+O+10]=o.z,aA[oA+O+11]=nA.itemSize===4?o.w:1)}}r={count:y,texture:X,size:new MI(u,EA)},Q.set(w,r),w.addEventListener("dispose",$)}let h=0;for(let K=0;K<c.length;K++)h+=c[K];const J=w.morphTargetsRelative?1:1-h;G.getUniforms().setValue(g,"morphTargetBaseInfluence",J),G.getUniforms().setValue(g,"morphTargetInfluences",c),G.getUniforms().setValue(g,"morphTargetsTexture",r.texture,I),G.getUniforms().setValue(g,"morphTargetsTextureSize",r.size)}else{const M=c===void 0?0:c.length;let y=C[w.id];if(y===void 0||y.length!==M){y=[];for(let L=0;L<M;L++)y[L]=[L,0];C[w.id]=y}for(let L=0;L<M;L++){const H=y[L];H[0]=L,H[1]=c[L]}y.sort(FR);for(let L=0;L<8;L++)L<M&&y[L][1]?(t[L][0]=y[L][0],t[L][1]=y[L][1]):(t[L][0]=Number.MAX_SAFE_INTEGER,t[L][1]=0);t.sort(cR);const r=w.morphAttributes.position,h=w.morphAttributes.normal;let J=0;for(let L=0;L<8;L++){const H=t[L],q=H[0],x=H[1];q!==Number.MAX_SAFE_INTEGER&&x?(r&&w.getAttribute("morphTarget"+L)!==r[q]&&w.setAttribute("morphTarget"+L,r[q]),h&&w.getAttribute("morphNormal"+L)!==h[q]&&w.setAttribute("morphNormal"+L,h[q]),B[L]=x,J+=x):(r&&w.hasAttribute("morphTarget"+L)===!0&&w.deleteAttribute("morphTarget"+L),h&&w.hasAttribute("morphNormal"+L)===!0&&w.deleteAttribute("morphNormal"+L),B[L]=0)}const K=w.morphTargetsRelative?1:1-J;G.getUniforms().setValue(g,"morphTargetBaseInfluence",K),G.getUniforms().setValue(g,"morphTargetInfluences",B)}}return{update:D}}function NR(g,A,I,C){let B=new WeakMap;function Q(D){const e=C.render.frame,w=D.geometry,G=A.get(D,w);return B.get(G)!==e&&(A.update(G),B.set(G,e)),D.isInstancedMesh&&(D.hasEventListener("dispose",t)===!1&&D.addEventListener("dispose",t),I.update(D.instanceMatrix,g.ARRAY_BUFFER),D.instanceColor!==null&&I.update(D.instanceColor,g.ARRAY_BUFFER)),G}function o(){B=new WeakMap}function t(D){const e=D.target;e.removeEventListener("dispose",t),I.remove(e.instanceMatrix),e.instanceColor!==null&&I.remove(e.instanceColor)}return{update:Q,dispose:o}}const on=new mg,tn=new za,sn=new tr,Dn=new Bn,se=[],De=[],ee=new Float32Array(16),ae=new Float32Array(9),ne=new Float32Array(4);function fQ(g,A,I){const C=g[0];if(C<=0||C>0)return g;const B=A*I;let Q=se[B];if(Q===void 0&&(Q=new Float32Array(B),se[B]=Q),A!==0){C.toArray(Q,0);for(let o=1,t=0;o!==A;++o)t+=I,g[o].toArray(Q,t)}return Q}function gg(g,A){if(g.length!==A.length)return!1;for(let I=0,C=g.length;I<C;I++)if(g[I]!==A[I])return!1;return!0}function Cg(g,A){for(let I=0,C=A.length;I<C;I++)g[I]=A[I]}function vi(g,A){let I=De[A];I===void 0&&(I=new Int32Array(A),De[A]=I);for(let C=0;C!==A;++C)I[C]=g.allocateTextureUnit();return I}function yR(g,A){const I=this.cache;I[0]!==A&&(g.uniform1f(this.addr,A),I[0]=A)}function MR(g,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(g.uniform2f(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(gg(I,A))return;g.uniform2fv(this.addr,A),Cg(I,A)}}function UR(g,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(g.uniform3f(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else if(A.r!==void 0)(I[0]!==A.r||I[1]!==A.g||I[2]!==A.b)&&(g.uniform3f(this.addr,A.r,A.g,A.b),I[0]=A.r,I[1]=A.g,I[2]=A.b);else{if(gg(I,A))return;g.uniform3fv(this.addr,A),Cg(I,A)}}function SR(g,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(g.uniform4f(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(gg(I,A))return;g.uniform4fv(this.addr,A),Cg(I,A)}}function KR(g,A){const I=this.cache,C=A.elements;if(C===void 0){if(gg(I,A))return;g.uniformMatrix2fv(this.addr,!1,A),Cg(I,A)}else{if(gg(I,C))return;ne.set(C),g.uniformMatrix2fv(this.addr,!1,ne),Cg(I,C)}}function lR(g,A){const I=this.cache,C=A.elements;if(C===void 0){if(gg(I,A))return;g.uniformMatrix3fv(this.addr,!1,A),Cg(I,A)}else{if(gg(I,C))return;ae.set(C),g.uniformMatrix3fv(this.addr,!1,ae),Cg(I,C)}}function kR(g,A){const I=this.cache,C=A.elements;if(C===void 0){if(gg(I,A))return;g.uniformMatrix4fv(this.addr,!1,A),Cg(I,A)}else{if(gg(I,C))return;ee.set(C),g.uniformMatrix4fv(this.addr,!1,ee),Cg(I,C)}}function dR(g,A){const I=this.cache;I[0]!==A&&(g.uniform1i(this.addr,A),I[0]=A)}function JR(g,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(g.uniform2i(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(gg(I,A))return;g.uniform2iv(this.addr,A),Cg(I,A)}}function YR(g,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(g.uniform3i(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(gg(I,A))return;g.uniform3iv(this.addr,A),Cg(I,A)}}function LR(g,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(g.uniform4i(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(gg(I,A))return;g.uniform4iv(this.addr,A),Cg(I,A)}}function fR(g,A){const I=this.cache;I[0]!==A&&(g.uniform1ui(this.addr,A),I[0]=A)}function uR(g,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(g.uniform2ui(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(gg(I,A))return;g.uniform2uiv(this.addr,A),Cg(I,A)}}function HR(g,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(g.uniform3ui(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(gg(I,A))return;g.uniform3uiv(this.addr,A),Cg(I,A)}}function pR(g,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(g.uniform4ui(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(gg(I,A))return;g.uniform4uiv(this.addr,A),Cg(I,A)}}function qR(g,A,I){const C=this.cache,B=I.allocateTextureUnit();C[0]!==B&&(g.uniform1i(this.addr,B),C[0]=B),I.setTexture2D(A||on,B)}function mR(g,A,I){const C=this.cache,B=I.allocateTextureUnit();C[0]!==B&&(g.uniform1i(this.addr,B),C[0]=B),I.setTexture3D(A||sn,B)}function xR(g,A,I){const C=this.cache,B=I.allocateTextureUnit();C[0]!==B&&(g.uniform1i(this.addr,B),C[0]=B),I.setTextureCube(A||Dn,B)}function bR(g,A,I){const C=this.cache,B=I.allocateTextureUnit();C[0]!==B&&(g.uniform1i(this.addr,B),C[0]=B),I.setTexture2DArray(A||tn,B)}function TR(g){switch(g){case 5126:return yR;case 35664:return MR;case 35665:return UR;case 35666:return SR;case 35674:return KR;case 35675:return lR;case 35676:return kR;case 5124:case 35670:return dR;case 35667:case 35671:return JR;case 35668:case 35672:return YR;case 35669:case 35673:return LR;case 5125:return fR;case 36294:return uR;case 36295:return HR;case 36296:return pR;case 35678:case 36198:case 36298:case 36306:case 35682:return qR;case 35679:case 36299:case 36307:return mR;case 35680:case 36300:case 36308:case 36293:return xR;case 36289:case 36303:case 36311:case 36292:return bR}}function VR(g,A){g.uniform1fv(this.addr,A)}function WR(g,A){const I=fQ(A,this.size,2);g.uniform2fv(this.addr,I)}function OR(g,A){const I=fQ(A,this.size,3);g.uniform3fv(this.addr,I)}function ZR(g,A){const I=fQ(A,this.size,4);g.uniform4fv(this.addr,I)}function vR(g,A){const I=fQ(A,this.size,4);g.uniformMatrix2fv(this.addr,!1,I)}function XR(g,A){const I=fQ(A,this.size,9);g.uniformMatrix3fv(this.addr,!1,I)}function PR(g,A){const I=fQ(A,this.size,16);g.uniformMatrix4fv(this.addr,!1,I)}function jR(g,A){g.uniform1iv(this.addr,A)}function zR(g,A){g.uniform2iv(this.addr,A)}function _R(g,A){g.uniform3iv(this.addr,A)}function $R(g,A){g.uniform4iv(this.addr,A)}function AN(g,A){g.uniform1uiv(this.addr,A)}function IN(g,A){g.uniform2uiv(this.addr,A)}function gN(g,A){g.uniform3uiv(this.addr,A)}function CN(g,A){g.uniform4uiv(this.addr,A)}function BN(g,A,I){const C=this.cache,B=A.length,Q=vi(I,B);gg(C,Q)||(g.uniform1iv(this.addr,Q),Cg(C,Q));for(let o=0;o!==B;++o)I.setTexture2D(A[o]||on,Q[o])}function QN(g,A,I){const C=this.cache,B=A.length,Q=vi(I,B);gg(C,Q)||(g.uniform1iv(this.addr,Q),Cg(C,Q));for(let o=0;o!==B;++o)I.setTexture3D(A[o]||sn,Q[o])}function EN(g,A,I){const C=this.cache,B=A.length,Q=vi(I,B);gg(C,Q)||(g.uniform1iv(this.addr,Q),Cg(C,Q));for(let o=0;o!==B;++o)I.setTextureCube(A[o]||Dn,Q[o])}function iN(g,A,I){const C=this.cache,B=A.length,Q=vi(I,B);gg(C,Q)||(g.uniform1iv(this.addr,Q),Cg(C,Q));for(let o=0;o!==B;++o)I.setTexture2DArray(A[o]||tn,Q[o])}function oN(g){switch(g){case 5126:return VR;case 35664:return WR;case 35665:return OR;case 35666:return ZR;case 35674:return vR;case 35675:return XR;case 35676:return PR;case 5124:case 35670:return jR;case 35667:case 35671:return zR;case 35668:case 35672:return _R;case 35669:case 35673:return $R;case 5125:return AN;case 36294:return IN;case 36295:return gN;case 36296:return CN;case 35678:case 36198:case 36298:case 36306:case 35682:return BN;case 35679:case 36299:case 36307:return QN;case 35680:case 36300:case 36308:case 36293:return EN;case 36289:case 36303:case 36311:case 36292:return iN}}class tN{constructor(A,I,C){this.id=A,this.addr=C,this.cache=[],this.setValue=TR(I.type)}}class sN{constructor(A,I,C){this.id=A,this.addr=C,this.cache=[],this.size=I.size,this.setValue=oN(I.type)}}class DN{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,I,C){const B=this.seq;for(let Q=0,o=B.length;Q!==o;++Q){const t=B[Q];t.setValue(A,I[t.id],C)}}}const _o=/(\w+)(\])?(\[|\.)?/g;function he(g,A){g.seq.push(A),g.map[A.id]=A}function eN(g,A,I){const C=g.name,B=C.length;for(_o.lastIndex=0;;){const Q=_o.exec(C),o=_o.lastIndex;let t=Q[1];const D=Q[2]==="]",e=Q[3];if(D&&(t=t|0),e===void 0||e==="["&&o+2===B){he(I,e===void 0?new tN(t,g,A):new sN(t,g,A));break}else{let G=I.map[t];G===void 0&&(G=new DN(t),he(I,G)),I=G}}}class ci{constructor(A,I){this.seq=[],this.map={};const C=A.getProgramParameter(I,A.ACTIVE_UNIFORMS);for(let B=0;B<C;++B){const Q=A.getActiveUniform(I,B),o=A.getUniformLocation(I,Q.name);eN(Q,o,this)}}setValue(A,I,C,B){const Q=this.map[I];Q!==void 0&&Q.setValue(A,C,B)}setOptional(A,I,C){const B=I[C];B!==void 0&&this.setValue(A,C,B)}static upload(A,I,C,B){for(let Q=0,o=I.length;Q!==o;++Q){const t=I[Q],D=C[t.id];D.needsUpdate!==!1&&t.setValue(A,D.value,B)}}static seqWithValue(A,I){const C=[];for(let B=0,Q=A.length;B!==Q;++B){const o=A[B];o.id in I&&C.push(o)}return C}}function we(g,A,I){const C=g.createShader(A);return g.shaderSource(C,I),g.compileShader(C),C}let aN=0;function nN(g,A){const I=g.split(`
`),C=[],B=Math.max(A-6,0),Q=Math.min(A+6,I.length);for(let o=B;o<Q;o++){const t=o+1;C.push(`${t===A?">":" "} ${t}: ${I[o]}`)}return C.join(`
`)}function hN(g){switch(g){case KC:return["Linear","( value )"];case QI:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",g),["Linear","( value )"]}}function Ge(g,A,I){const C=g.getShaderParameter(A,g.COMPILE_STATUS),B=g.getShaderInfoLog(A).trim();if(C&&B==="")return"";const Q=/ERROR: 0:(\d+)/.exec(B);if(Q){const o=parseInt(Q[1]);return I.toUpperCase()+`

`+B+`

`+nN(g.getShaderSource(A),o)}else return B}function wN(g,A){const I=hN(A);return"vec4 "+g+"( vec4 value ) { return LinearTo"+I[0]+I[1]+"; }"}function GN(g,A){let I;switch(A){case KG:I="Linear";break;case lG:I="Reinhard";break;case kG:I="OptimizedCineon";break;case dG:I="ACESFilmic";break;case JG:I="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),I="Linear"}return"vec3 "+g+"( vec3 color ) { return "+I+"ToneMapping( color ); }"}function rN(g){return[g.extensionDerivatives||g.envMapCubeUVHeight||g.bumpMap||g.normalMapTangentSpace||g.clearcoatNormalMap||g.flatShading||g.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(g.extensionFragDepth||g.logarithmicDepthBuffer)&&g.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",g.extensionDrawBuffers&&g.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(g.extensionShaderTextureLOD||g.envMap||g.transmission)&&g.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter($Q).join(`
`)}function cN(g){const A=[];for(const I in g){const C=g[I];C!==!1&&A.push("#define "+I+" "+C)}return A.join(`
`)}function FN(g,A){const I={},C=g.getProgramParameter(A,g.ACTIVE_ATTRIBUTES);for(let B=0;B<C;B++){const Q=g.getActiveAttrib(A,B),o=Q.name;let t=1;Q.type===g.FLOAT_MAT2&&(t=2),Q.type===g.FLOAT_MAT3&&(t=3),Q.type===g.FLOAT_MAT4&&(t=4),I[o]={type:Q.type,location:g.getAttribLocation(A,o),locationSize:t}}return I}function $Q(g){return g!==""}function re(g,A){const I=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return g.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,I).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function ce(g,A){return g.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const RN=/^[ \t]*#include +<([\w\d./]+)>/gm;function rt(g){return g.replace(RN,NN)}function NN(g,A){const I=iI[A];if(I===void 0)throw new Error("Can not resolve #include <"+A+">");return rt(I)}const yN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fe(g){return g.replace(yN,MN)}function MN(g,A,I,C){let B="";for(let Q=parseInt(A);Q<parseInt(I);Q++)B+=C.replace(/\[\s*i\s*\]/g,"[ "+Q+" ]").replace(/UNROLLED_LOOP_INDEX/g,Q);return B}function Re(g){let A="precision "+g.precision+` float;
precision `+g.precision+" int;";return g.precision==="highp"?A+=`
#define HIGH_PRECISION`:g.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:g.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function UN(g){let A="SHADOWMAP_TYPE_BASIC";return g.shadowMapType===fa?A="SHADOWMAP_TYPE_PCF":g.shadowMapType===QG?A="SHADOWMAP_TYPE_PCF_SOFT":g.shadowMapType===ZC&&(A="SHADOWMAP_TYPE_VSM"),A}function SN(g){let A="ENVMAP_TYPE_CUBE";if(g.envMap)switch(g.envMapMode){case cQ:case FQ:A="ENVMAP_TYPE_CUBE";break;case Oi:A="ENVMAP_TYPE_CUBE_UV";break}return A}function KN(g){let A="ENVMAP_MODE_REFLECTION";if(g.envMap)switch(g.envMapMode){case FQ:A="ENVMAP_MODE_REFRACTION";break}return A}function lN(g){let A="ENVMAP_BLENDING_NONE";if(g.envMap)switch(g.combine){case pa:A="ENVMAP_BLENDING_MULTIPLY";break;case UG:A="ENVMAP_BLENDING_MIX";break;case SG:A="ENVMAP_BLENDING_ADD";break}return A}function kN(g){const A=g.envMapCubeUVHeight;if(A===null)return null;const I=Math.log2(A)-2,C=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,I),7*16)),texelHeight:C,maxMip:I}}function dN(g,A,I,C){const B=g.getContext(),Q=I.defines;let o=I.vertexShader,t=I.fragmentShader;const D=UN(I),e=SN(I),w=KN(I),G=lN(I),c=kN(I),R=I.isWebGL2?"":rN(I),M=cN(Q),y=B.createProgram();let r,h,J=I.glslVersion?"#version "+I.glslVersion+`
`:"";I.isRawShaderMaterial?(r=["#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,M].filter($Q).join(`
`),r.length>0&&(r+=`
`),h=[R,"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,M].filter($Q).join(`
`),h.length>0&&(h+=`
`)):(r=[Re(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,M,I.instancing?"#define USE_INSTANCING":"",I.instancingColor?"#define USE_INSTANCING_COLOR":"",I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+w:"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.displacementMap?"#define USE_DISPLACEMENTMAP":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.mapUv?"#define MAP_UV "+I.mapUv:"",I.alphaMapUv?"#define ALPHAMAP_UV "+I.alphaMapUv:"",I.lightMapUv?"#define LIGHTMAP_UV "+I.lightMapUv:"",I.aoMapUv?"#define AOMAP_UV "+I.aoMapUv:"",I.emissiveMapUv?"#define EMISSIVEMAP_UV "+I.emissiveMapUv:"",I.bumpMapUv?"#define BUMPMAP_UV "+I.bumpMapUv:"",I.normalMapUv?"#define NORMALMAP_UV "+I.normalMapUv:"",I.displacementMapUv?"#define DISPLACEMENTMAP_UV "+I.displacementMapUv:"",I.metalnessMapUv?"#define METALNESSMAP_UV "+I.metalnessMapUv:"",I.roughnessMapUv?"#define ROUGHNESSMAP_UV "+I.roughnessMapUv:"",I.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+I.anisotropyMapUv:"",I.clearcoatMapUv?"#define CLEARCOATMAP_UV "+I.clearcoatMapUv:"",I.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+I.clearcoatNormalMapUv:"",I.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+I.clearcoatRoughnessMapUv:"",I.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+I.iridescenceMapUv:"",I.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+I.iridescenceThicknessMapUv:"",I.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+I.sheenColorMapUv:"",I.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+I.sheenRoughnessMapUv:"",I.specularMapUv?"#define SPECULARMAP_UV "+I.specularMapUv:"",I.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+I.specularColorMapUv:"",I.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+I.specularIntensityMapUv:"",I.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+I.transmissionMapUv:"",I.thicknessMapUv?"#define THICKNESSMAP_UV "+I.thicknessMapUv:"",I.vertexTangents?"#define USE_TANGENT":"",I.vertexColors?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.flatShading?"#define FLAT_SHADED":"",I.skinning?"#define USE_SKINNING":"",I.morphTargets?"#define USE_MORPHTARGETS":"",I.morphNormals&&I.flatShading===!1?"#define USE_MORPHNORMALS":"",I.morphColors&&I.isWebGL2?"#define USE_MORPHCOLORS":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+I.morphTextureStride:"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_COUNT "+I.morphTargetsCount:"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+D:"",I.sizeAttenuation?"#define USE_SIZEATTENUATION":"",I.useLegacyLights?"#define LEGACY_LIGHTS":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($Q).join(`
`),h=[R,Re(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,M,I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.matcap?"#define USE_MATCAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+e:"",I.envMap?"#define "+w:"",I.envMap?"#define "+G:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoat?"#define USE_CLEARCOAT":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescence?"#define USE_IRIDESCENCE":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaTest?"#define USE_ALPHATEST":"",I.sheen?"#define USE_SHEEN":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.vertexTangents?"#define USE_TANGENT":"",I.vertexColors||I.instancingColor?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.gradientMap?"#define USE_GRADIENTMAP":"",I.flatShading?"#define FLAT_SHADED":"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+D:"",I.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",I.useLegacyLights?"#define LEGACY_LIGHTS":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",I.toneMapping!==zC?"#define TONE_MAPPING":"",I.toneMapping!==zC?iI.tonemapping_pars_fragment:"",I.toneMapping!==zC?GN("toneMapping",I.toneMapping):"",I.dithering?"#define DITHERING":"",I.opaque?"#define OPAQUE":"",iI.encodings_pars_fragment,wN("linearToOutputTexel",I.outputColorSpace),I.useDepthPacking?"#define DEPTH_PACKING "+I.depthPacking:"",`
`].filter($Q).join(`
`)),o=rt(o),o=re(o,I),o=ce(o,I),t=rt(t),t=re(t,I),t=ce(t,I),o=Fe(o),t=Fe(t),I.isWebGL2&&I.isRawShaderMaterial!==!0&&(J=`#version 300 es
`,r=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+r,h=["#define varying in",I.glslVersion===xD?"":"layout(location = 0) out highp vec4 pc_fragColor;",I.glslVersion===xD?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const K=J+r+o,L=J+h+t,H=we(B,B.VERTEX_SHADER,K),q=we(B,B.FRAGMENT_SHADER,L);if(B.attachShader(y,H),B.attachShader(y,q),I.index0AttributeName!==void 0?B.bindAttribLocation(y,0,I.index0AttributeName):I.morphTargets===!0&&B.bindAttribLocation(y,0,"position"),B.linkProgram(y),g.debug.checkShaderErrors){const l=B.getProgramInfoLog(y).trim(),u=B.getShaderInfoLog(H).trim(),EA=B.getShaderInfoLog(q).trim();let aA=!0,X=!0;if(B.getProgramParameter(y,B.LINK_STATUS)===!1)if(aA=!1,typeof g.debug.onShaderError=="function")g.debug.onShaderError(B,y,H,q);else{const _=Ge(B,H,"vertex"),$=Ge(B,q,"fragment");console.error("THREE.WebGLProgram: Shader Error "+B.getError()+" - VALIDATE_STATUS "+B.getProgramParameter(y,B.VALIDATE_STATUS)+`

Program Info Log: `+l+`
`+_+`
`+$)}else l!==""?console.warn("THREE.WebGLProgram: Program Info Log:",l):(u===""||EA==="")&&(X=!1);X&&(this.diagnostics={runnable:aA,programLog:l,vertexShader:{log:u,prefix:r},fragmentShader:{log:EA,prefix:h}})}B.deleteShader(H),B.deleteShader(q);let x;this.getUniforms=function(){return x===void 0&&(x=new ci(B,y)),x};let W;return this.getAttributes=function(){return W===void 0&&(W=FN(B,y)),W},this.destroy=function(){C.releaseStatesOfProgram(this),B.deleteProgram(y),this.program=void 0},this.type=I.shaderType,this.name=I.shaderName,this.id=aN++,this.cacheKey=A,this.usedTimes=1,this.program=y,this.vertexShader=H,this.fragmentShader=q,this}let JN=0;class YN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const I=A.vertexShader,C=A.fragmentShader,B=this._getShaderStage(I),Q=this._getShaderStage(C),o=this._getShaderCacheForMaterial(A);return o.has(B)===!1&&(o.add(B),B.usedTimes++),o.has(Q)===!1&&(o.add(Q),Q.usedTimes++),this}remove(A){const I=this.materialCache.get(A);for(const C of I)C.usedTimes--,C.usedTimes===0&&this.shaderCache.delete(C.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const I=this.materialCache;let C=I.get(A);return C===void 0&&(C=new Set,I.set(A,C)),C}_getShaderStage(A){const I=this.shaderCache;let C=I.get(A);return C===void 0&&(C=new LN(A),I.set(A,C)),C}}class LN{constructor(A){this.id=JN++,this.code=A,this.usedTimes=0}}function fN(g,A,I,C,B,Q,o){const t=new _a,D=new YN,e=[],w=B.isWebGL2,G=B.logarithmicDepthBuffer,c=B.vertexTextures;let R=B.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(l){return l===0?"uv":`uv${l}`}function r(l,u,EA,aA,X){const _=aA.fog,$=X.geometry,tA=l.isMeshStandardMaterial?aA.environment:null,BA=(l.isMeshStandardMaterial?I:A).get(l.envMap||tA),iA=BA&&BA.mapping===Oi?BA.image.height:null,nA=M[l.type];l.precision!==null&&(R=B.getMaxPrecision(l.precision),R!==l.precision&&console.warn("THREE.WebGLProgram.getParameters:",l.precision,"not supported, using",R,"instead."));const oA=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,uA=oA!==void 0?oA.length:0;let O=0;$.morphAttributes.position!==void 0&&(O=1),$.morphAttributes.normal!==void 0&&(O=2),$.morphAttributes.color!==void 0&&(O=3);let sA,DA,SA,kA;if(nA){const UI=NC[nA];sA=UI.vertexShader,DA=UI.fragmentShader}else sA=l.vertexShader,DA=l.fragmentShader,D.update(l),SA=D.getVertexShaderID(l),kA=D.getFragmentShaderID(l);const xA=g.getRenderTarget(),$A=X.isInstancedMesh===!0,JA=!!l.map,nI=!!l.matcap,AI=!!BA,V=!!l.aoMap,GA=!!l.lightMap,LA=!!l.bumpMap,BI=!!l.normalMap,vA=!!l.displacementMap,yI=!!l.emissiveMap,II=!!l.metalnessMap,_A=!!l.roughnessMap,FI=l.anisotropy>0,_I=l.clearcoat>0,$I=l.iridescence>0,f=l.sheen>0,S=l.transmission>0,AA=FI&&!!l.anisotropyMap,hA=_I&&!!l.clearcoatMap,wA=_I&&!!l.clearcoatNormalMap,MA=_I&&!!l.clearcoatRoughnessMap,YA=$I&&!!l.iridescenceMap,FA=$I&&!!l.iridescenceThicknessMap,CA=f&&!!l.sheenColorMap,HA=f&&!!l.sheenRoughnessMap,UA=!!l.specularMap,mA=!!l.specularColorMap,dA=!!l.specularIntensityMap,lA=S&&!!l.transmissionMap,EI=S&&!!l.thicknessMap,NI=!!l.gradientMap,p=!!l.alphaMap,yA=l.alphaTest>0,j=!!l.extensions,cA=!!$.attributes.uv1,eA=!!$.attributes.uv2,gI=!!$.attributes.uv3;return{isWebGL2:w,shaderID:nA,shaderType:l.type,shaderName:l.name,vertexShader:sA,fragmentShader:DA,defines:l.defines,customVertexShaderID:SA,customFragmentShaderID:kA,isRawShaderMaterial:l.isRawShaderMaterial===!0,glslVersion:l.glslVersion,precision:R,instancing:$A,instancingColor:$A&&X.instanceColor!==null,supportsVertexTextures:c,outputColorSpace:xA===null?g.outputColorSpace:xA.isXRRenderTarget===!0?xA.texture.colorSpace:KC,map:JA,matcap:nI,envMap:AI,envMapMode:AI&&BA.mapping,envMapCubeUVHeight:iA,aoMap:V,lightMap:GA,bumpMap:LA,normalMap:BI,displacementMap:c&&vA,emissiveMap:yI,normalMapObjectSpace:BI&&l.normalMapType===WG,normalMapTangentSpace:BI&&l.normalMapType===Za,metalnessMap:II,roughnessMap:_A,anisotropy:FI,anisotropyMap:AA,clearcoat:_I,clearcoatMap:hA,clearcoatNormalMap:wA,clearcoatRoughnessMap:MA,iridescence:$I,iridescenceMap:YA,iridescenceThicknessMap:FA,sheen:f,sheenColorMap:CA,sheenRoughnessMap:HA,specularMap:UA,specularColorMap:mA,specularIntensityMap:dA,transmission:S,transmissionMap:lA,thicknessMap:EI,gradientMap:NI,opaque:l.transparent===!1&&l.blending===GQ,alphaMap:p,alphaTest:yA,combine:l.combine,mapUv:JA&&y(l.map.channel),aoMapUv:V&&y(l.aoMap.channel),lightMapUv:GA&&y(l.lightMap.channel),bumpMapUv:LA&&y(l.bumpMap.channel),normalMapUv:BI&&y(l.normalMap.channel),displacementMapUv:vA&&y(l.displacementMap.channel),emissiveMapUv:yI&&y(l.emissiveMap.channel),metalnessMapUv:II&&y(l.metalnessMap.channel),roughnessMapUv:_A&&y(l.roughnessMap.channel),anisotropyMapUv:AA&&y(l.anisotropyMap.channel),clearcoatMapUv:hA&&y(l.clearcoatMap.channel),clearcoatNormalMapUv:wA&&y(l.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:MA&&y(l.clearcoatRoughnessMap.channel),iridescenceMapUv:YA&&y(l.iridescenceMap.channel),iridescenceThicknessMapUv:FA&&y(l.iridescenceThicknessMap.channel),sheenColorMapUv:CA&&y(l.sheenColorMap.channel),sheenRoughnessMapUv:HA&&y(l.sheenRoughnessMap.channel),specularMapUv:UA&&y(l.specularMap.channel),specularColorMapUv:mA&&y(l.specularColorMap.channel),specularIntensityMapUv:dA&&y(l.specularIntensityMap.channel),transmissionMapUv:lA&&y(l.transmissionMap.channel),thicknessMapUv:EI&&y(l.thicknessMap.channel),alphaMapUv:p&&y(l.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(BI||FI),vertexColors:l.vertexColors,vertexAlphas:l.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,vertexUv1s:cA,vertexUv2s:eA,vertexUv3s:gI,pointsUvs:X.isPoints===!0&&!!$.attributes.uv&&(JA||p),fog:!!_,useFog:l.fog===!0,fogExp2:_&&_.isFogExp2,flatShading:l.flatShading===!0,sizeAttenuation:l.sizeAttenuation===!0,logarithmicDepthBuffer:G,skinning:X.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:uA,morphTextureStride:O,numDirLights:u.directional.length,numPointLights:u.point.length,numSpotLights:u.spot.length,numSpotLightMaps:u.spotLightMap.length,numRectAreaLights:u.rectArea.length,numHemiLights:u.hemi.length,numDirLightShadows:u.directionalShadowMap.length,numPointLightShadows:u.pointShadowMap.length,numSpotLightShadows:u.spotShadowMap.length,numSpotLightShadowsWithMaps:u.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:l.dithering,shadowMapEnabled:g.shadowMap.enabled&&EA.length>0,shadowMapType:g.shadowMap.type,toneMapping:l.toneMapped?g.toneMapping:zC,useLegacyLights:g.useLegacyLights,premultipliedAlpha:l.premultipliedAlpha,doubleSided:l.side===vC,flipSided:l.side===Sg,useDepthPacking:l.depthPacking>=0,depthPacking:l.depthPacking||0,index0AttributeName:l.index0AttributeName,extensionDerivatives:j&&l.extensions.derivatives===!0,extensionFragDepth:j&&l.extensions.fragDepth===!0,extensionDrawBuffers:j&&l.extensions.drawBuffers===!0,extensionShaderTextureLOD:j&&l.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:w||C.has("EXT_frag_depth"),rendererExtensionDrawBuffers:w||C.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:w||C.has("EXT_shader_texture_lod"),customProgramCacheKey:l.customProgramCacheKey()}}function h(l){const u=[];if(l.shaderID?u.push(l.shaderID):(u.push(l.customVertexShaderID),u.push(l.customFragmentShaderID)),l.defines!==void 0)for(const EA in l.defines)u.push(EA),u.push(l.defines[EA]);return l.isRawShaderMaterial===!1&&(J(u,l),K(u,l),u.push(g.outputColorSpace)),u.push(l.customProgramCacheKey),u.join()}function J(l,u){l.push(u.precision),l.push(u.outputColorSpace),l.push(u.envMapMode),l.push(u.envMapCubeUVHeight),l.push(u.mapUv),l.push(u.alphaMapUv),l.push(u.lightMapUv),l.push(u.aoMapUv),l.push(u.bumpMapUv),l.push(u.normalMapUv),l.push(u.displacementMapUv),l.push(u.emissiveMapUv),l.push(u.metalnessMapUv),l.push(u.roughnessMapUv),l.push(u.anisotropyMapUv),l.push(u.clearcoatMapUv),l.push(u.clearcoatNormalMapUv),l.push(u.clearcoatRoughnessMapUv),l.push(u.iridescenceMapUv),l.push(u.iridescenceThicknessMapUv),l.push(u.sheenColorMapUv),l.push(u.sheenRoughnessMapUv),l.push(u.specularMapUv),l.push(u.specularColorMapUv),l.push(u.specularIntensityMapUv),l.push(u.transmissionMapUv),l.push(u.thicknessMapUv),l.push(u.combine),l.push(u.fogExp2),l.push(u.sizeAttenuation),l.push(u.morphTargetsCount),l.push(u.morphAttributeCount),l.push(u.numDirLights),l.push(u.numPointLights),l.push(u.numSpotLights),l.push(u.numSpotLightMaps),l.push(u.numHemiLights),l.push(u.numRectAreaLights),l.push(u.numDirLightShadows),l.push(u.numPointLightShadows),l.push(u.numSpotLightShadows),l.push(u.numSpotLightShadowsWithMaps),l.push(u.shadowMapType),l.push(u.toneMapping),l.push(u.numClippingPlanes),l.push(u.numClipIntersection),l.push(u.depthPacking)}function K(l,u){t.disableAll(),u.isWebGL2&&t.enable(0),u.supportsVertexTextures&&t.enable(1),u.instancing&&t.enable(2),u.instancingColor&&t.enable(3),u.matcap&&t.enable(4),u.envMap&&t.enable(5),u.normalMapObjectSpace&&t.enable(6),u.normalMapTangentSpace&&t.enable(7),u.clearcoat&&t.enable(8),u.iridescence&&t.enable(9),u.alphaTest&&t.enable(10),u.vertexColors&&t.enable(11),u.vertexAlphas&&t.enable(12),u.vertexUv1s&&t.enable(13),u.vertexUv2s&&t.enable(14),u.vertexUv3s&&t.enable(15),u.vertexTangents&&t.enable(16),u.anisotropy&&t.enable(17),l.push(t.mask),t.disableAll(),u.fog&&t.enable(0),u.useFog&&t.enable(1),u.flatShading&&t.enable(2),u.logarithmicDepthBuffer&&t.enable(3),u.skinning&&t.enable(4),u.morphTargets&&t.enable(5),u.morphNormals&&t.enable(6),u.morphColors&&t.enable(7),u.premultipliedAlpha&&t.enable(8),u.shadowMapEnabled&&t.enable(9),u.useLegacyLights&&t.enable(10),u.doubleSided&&t.enable(11),u.flipSided&&t.enable(12),u.useDepthPacking&&t.enable(13),u.dithering&&t.enable(14),u.transmission&&t.enable(15),u.sheen&&t.enable(16),u.opaque&&t.enable(17),u.pointsUvs&&t.enable(18),l.push(t.mask)}function L(l){const u=M[l.type];let EA;if(u){const aA=NC[u];EA=Nr.clone(aA.uniforms)}else EA=l.uniforms;return EA}function H(l,u){let EA;for(let aA=0,X=e.length;aA<X;aA++){const _=e[aA];if(_.cacheKey===u){EA=_,++EA.usedTimes;break}}return EA===void 0&&(EA=new dN(g,u,l,Q),e.push(EA)),EA}function q(l){if(--l.usedTimes===0){const u=e.indexOf(l);e[u]=e[e.length-1],e.pop(),l.destroy()}}function x(l){D.remove(l)}function W(){D.dispose()}return{getParameters:r,getProgramCacheKey:h,getUniforms:L,acquireProgram:H,releaseProgram:q,releaseShaderCache:x,programs:e,dispose:W}}function uN(){let g=new WeakMap;function A(Q){let o=g.get(Q);return o===void 0&&(o={},g.set(Q,o)),o}function I(Q){g.delete(Q)}function C(Q,o,t){g.get(Q)[o]=t}function B(){g=new WeakMap}return{get:A,remove:I,update:C,dispose:B}}function HN(g,A){return g.groupOrder!==A.groupOrder?g.groupOrder-A.groupOrder:g.renderOrder!==A.renderOrder?g.renderOrder-A.renderOrder:g.material.id!==A.material.id?g.material.id-A.material.id:g.z!==A.z?g.z-A.z:g.id-A.id}function Ne(g,A){return g.groupOrder!==A.groupOrder?g.groupOrder-A.groupOrder:g.renderOrder!==A.renderOrder?g.renderOrder-A.renderOrder:g.z!==A.z?A.z-g.z:g.id-A.id}function ye(){const g=[];let A=0;const I=[],C=[],B=[];function Q(){A=0,I.length=0,C.length=0,B.length=0}function o(G,c,R,M,y,r){let h=g[A];return h===void 0?(h={id:G.id,object:G,geometry:c,material:R,groupOrder:M,renderOrder:G.renderOrder,z:y,group:r},g[A]=h):(h.id=G.id,h.object=G,h.geometry=c,h.material=R,h.groupOrder=M,h.renderOrder=G.renderOrder,h.z=y,h.group=r),A++,h}function t(G,c,R,M,y,r){const h=o(G,c,R,M,y,r);R.transmission>0?C.push(h):R.transparent===!0?B.push(h):I.push(h)}function D(G,c,R,M,y,r){const h=o(G,c,R,M,y,r);R.transmission>0?C.unshift(h):R.transparent===!0?B.unshift(h):I.unshift(h)}function e(G,c){I.length>1&&I.sort(G||HN),C.length>1&&C.sort(c||Ne),B.length>1&&B.sort(c||Ne)}function w(){for(let G=A,c=g.length;G<c;G++){const R=g[G];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:I,transmissive:C,transparent:B,init:Q,push:t,unshift:D,finish:w,sort:e}}function pN(){let g=new WeakMap;function A(C,B){const Q=g.get(C);let o;return Q===void 0?(o=new ye,g.set(C,[o])):B>=Q.length?(o=new ye,Q.push(o)):o=Q[B],o}function I(){g=new WeakMap}return{get:A,dispose:I}}function qN(){const g={};return{get:function(A){if(g[A.id]!==void 0)return g[A.id];let I;switch(A.type){case"DirectionalLight":I={direction:new P,color:new lI};break;case"SpotLight":I={position:new P,direction:new P,color:new lI,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":I={position:new P,color:new lI,distance:0,decay:0};break;case"HemisphereLight":I={direction:new P,skyColor:new lI,groundColor:new lI};break;case"RectAreaLight":I={color:new lI,position:new P,halfWidth:new P,halfHeight:new P};break}return g[A.id]=I,I}}}function mN(){const g={};return{get:function(A){if(g[A.id]!==void 0)return g[A.id];let I;switch(A.type){case"DirectionalLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new MI};break;case"SpotLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new MI};break;case"PointLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new MI,shadowCameraNear:1,shadowCameraFar:1e3};break}return g[A.id]=I,I}}}let xN=0;function bN(g,A){return(A.castShadow?2:0)-(g.castShadow?2:0)+(A.map?1:0)-(g.map?1:0)}function TN(g,A){const I=new qN,C=mN(),B={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let w=0;w<9;w++)B.probe.push(new P);const Q=new P,o=new Ig,t=new Ig;function D(w,G){let c=0,R=0,M=0;for(let EA=0;EA<9;EA++)B.probe[EA].set(0,0,0);let y=0,r=0,h=0,J=0,K=0,L=0,H=0,q=0,x=0,W=0;w.sort(bN);const l=G===!0?Math.PI:1;for(let EA=0,aA=w.length;EA<aA;EA++){const X=w[EA],_=X.color,$=X.intensity,tA=X.distance,BA=X.shadow&&X.shadow.map?X.shadow.map.texture:null;if(X.isAmbientLight)c+=_.r*$*l,R+=_.g*$*l,M+=_.b*$*l;else if(X.isLightProbe)for(let iA=0;iA<9;iA++)B.probe[iA].addScaledVector(X.sh.coefficients[iA],$);else if(X.isDirectionalLight){const iA=I.get(X);if(iA.color.copy(X.color).multiplyScalar(X.intensity*l),X.castShadow){const nA=X.shadow,oA=C.get(X);oA.shadowBias=nA.bias,oA.shadowNormalBias=nA.normalBias,oA.shadowRadius=nA.radius,oA.shadowMapSize=nA.mapSize,B.directionalShadow[y]=oA,B.directionalShadowMap[y]=BA,B.directionalShadowMatrix[y]=X.shadow.matrix,L++}B.directional[y]=iA,y++}else if(X.isSpotLight){const iA=I.get(X);iA.position.setFromMatrixPosition(X.matrixWorld),iA.color.copy(_).multiplyScalar($*l),iA.distance=tA,iA.coneCos=Math.cos(X.angle),iA.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),iA.decay=X.decay,B.spot[h]=iA;const nA=X.shadow;if(X.map&&(B.spotLightMap[x]=X.map,x++,nA.updateMatrices(X),X.castShadow&&W++),B.spotLightMatrix[h]=nA.matrix,X.castShadow){const oA=C.get(X);oA.shadowBias=nA.bias,oA.shadowNormalBias=nA.normalBias,oA.shadowRadius=nA.radius,oA.shadowMapSize=nA.mapSize,B.spotShadow[h]=oA,B.spotShadowMap[h]=BA,q++}h++}else if(X.isRectAreaLight){const iA=I.get(X);iA.color.copy(_).multiplyScalar($),iA.halfWidth.set(X.width*.5,0,0),iA.halfHeight.set(0,X.height*.5,0),B.rectArea[J]=iA,J++}else if(X.isPointLight){const iA=I.get(X);if(iA.color.copy(X.color).multiplyScalar(X.intensity*l),iA.distance=X.distance,iA.decay=X.decay,X.castShadow){const nA=X.shadow,oA=C.get(X);oA.shadowBias=nA.bias,oA.shadowNormalBias=nA.normalBias,oA.shadowRadius=nA.radius,oA.shadowMapSize=nA.mapSize,oA.shadowCameraNear=nA.camera.near,oA.shadowCameraFar=nA.camera.far,B.pointShadow[r]=oA,B.pointShadowMap[r]=BA,B.pointShadowMatrix[r]=X.shadow.matrix,H++}B.point[r]=iA,r++}else if(X.isHemisphereLight){const iA=I.get(X);iA.skyColor.copy(X.color).multiplyScalar($*l),iA.groundColor.copy(X.groundColor).multiplyScalar($*l),B.hemi[K]=iA,K++}}J>0&&(A.isWebGL2||g.has("OES_texture_float_linear")===!0?(B.rectAreaLTC1=NA.LTC_FLOAT_1,B.rectAreaLTC2=NA.LTC_FLOAT_2):g.has("OES_texture_half_float_linear")===!0?(B.rectAreaLTC1=NA.LTC_HALF_1,B.rectAreaLTC2=NA.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),B.ambient[0]=c,B.ambient[1]=R,B.ambient[2]=M;const u=B.hash;(u.directionalLength!==y||u.pointLength!==r||u.spotLength!==h||u.rectAreaLength!==J||u.hemiLength!==K||u.numDirectionalShadows!==L||u.numPointShadows!==H||u.numSpotShadows!==q||u.numSpotMaps!==x)&&(B.directional.length=y,B.spot.length=h,B.rectArea.length=J,B.point.length=r,B.hemi.length=K,B.directionalShadow.length=L,B.directionalShadowMap.length=L,B.pointShadow.length=H,B.pointShadowMap.length=H,B.spotShadow.length=q,B.spotShadowMap.length=q,B.directionalShadowMatrix.length=L,B.pointShadowMatrix.length=H,B.spotLightMatrix.length=q+x-W,B.spotLightMap.length=x,B.numSpotLightShadowsWithMaps=W,u.directionalLength=y,u.pointLength=r,u.spotLength=h,u.rectAreaLength=J,u.hemiLength=K,u.numDirectionalShadows=L,u.numPointShadows=H,u.numSpotShadows=q,u.numSpotMaps=x,B.version=xN++)}function e(w,G){let c=0,R=0,M=0,y=0,r=0;const h=G.matrixWorldInverse;for(let J=0,K=w.length;J<K;J++){const L=w[J];if(L.isDirectionalLight){const H=B.directional[c];H.direction.setFromMatrixPosition(L.matrixWorld),Q.setFromMatrixPosition(L.target.matrixWorld),H.direction.sub(Q),H.direction.transformDirection(h),c++}else if(L.isSpotLight){const H=B.spot[M];H.position.setFromMatrixPosition(L.matrixWorld),H.position.applyMatrix4(h),H.direction.setFromMatrixPosition(L.matrixWorld),Q.setFromMatrixPosition(L.target.matrixWorld),H.direction.sub(Q),H.direction.transformDirection(h),M++}else if(L.isRectAreaLight){const H=B.rectArea[y];H.position.setFromMatrixPosition(L.matrixWorld),H.position.applyMatrix4(h),t.identity(),o.copy(L.matrixWorld),o.premultiply(h),t.extractRotation(o),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),H.halfWidth.applyMatrix4(t),H.halfHeight.applyMatrix4(t),y++}else if(L.isPointLight){const H=B.point[R];H.position.setFromMatrixPosition(L.matrixWorld),H.position.applyMatrix4(h),R++}else if(L.isHemisphereLight){const H=B.hemi[r];H.direction.setFromMatrixPosition(L.matrixWorld),H.direction.transformDirection(h),r++}}}return{setup:D,setupView:e,state:B}}function Me(g,A){const I=new TN(g,A),C=[],B=[];function Q(){C.length=0,B.length=0}function o(G){C.push(G)}function t(G){B.push(G)}function D(G){I.setup(C,G)}function e(G){I.setupView(C,G)}return{init:Q,state:{lightsArray:C,shadowsArray:B,lights:I},setupLights:D,setupLightsView:e,pushLight:o,pushShadow:t}}function VN(g,A){let I=new WeakMap;function C(Q,o=0){const t=I.get(Q);let D;return t===void 0?(D=new Me(g,A),I.set(Q,[D])):o>=t.length?(D=new Me(g,A),t.push(D)):D=t[o],D}function B(){I=new WeakMap}return{get:C,dispose:B}}class WN extends rE{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=TG,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class ON extends rE{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}const ZN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vN=`uniform sampler2D shadow_pass;
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
}`;function XN(g,A,I){let C=new Qn;const B=new MI,Q=new MI,o=new ng,t=new WN({depthPacking:VG}),D=new ON,e={},w=I.maxTextureSize,G={[wB]:Sg,[Sg]:wB,[vC]:vC},c=new ZB({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new MI},radius:{value:4}},vertexShader:ZN,fragmentShader:vN}),R=c.clone();R.defines.HORIZONTAL_PASS=1;const M=new IB;M.setAttribute("position",new eC(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new UC(M,c),r=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fa;let h=this.type;this.render=function(H,q,x){if(r.enabled===!1||r.autoUpdate===!1&&r.needsUpdate===!1||H.length===0)return;const W=g.getRenderTarget(),l=g.getActiveCubeFace(),u=g.getActiveMipmapLevel(),EA=g.state;EA.setBlending(eB),EA.buffers.color.setClear(1,1,1,1),EA.buffers.depth.setTest(!0),EA.setScissorTest(!1);const aA=h!==ZC&&this.type===ZC,X=h===ZC&&this.type!==ZC;for(let _=0,$=H.length;_<$;_++){const tA=H[_],BA=tA.shadow;if(BA===void 0){console.warn("THREE.WebGLShadowMap:",tA,"has no shadow.");continue}if(BA.autoUpdate===!1&&BA.needsUpdate===!1)continue;B.copy(BA.mapSize);const iA=BA.getFrameExtents();if(B.multiply(iA),Q.copy(BA.mapSize),(B.x>w||B.y>w)&&(B.x>w&&(Q.x=Math.floor(w/iA.x),B.x=Q.x*iA.x,BA.mapSize.x=Q.x),B.y>w&&(Q.y=Math.floor(w/iA.y),B.y=Q.y*iA.y,BA.mapSize.y=Q.y)),BA.map===null||aA===!0||X===!0){const oA=this.type!==ZC?{minFilter:Fg,magFilter:Fg}:{};BA.map!==null&&BA.map.dispose(),BA.map=new OB(B.x,B.y,oA),BA.map.texture.name=tA.name+".shadowMap",BA.camera.updateProjectionMatrix()}g.setRenderTarget(BA.map),g.clear();const nA=BA.getViewportCount();for(let oA=0;oA<nA;oA++){const uA=BA.getViewport(oA);o.set(Q.x*uA.x,Q.y*uA.y,Q.x*uA.z,Q.y*uA.w),EA.viewport(o),BA.updateMatrices(tA,oA),C=BA.getFrustum(),L(q,x,BA.camera,tA,this.type)}BA.isPointLightShadow!==!0&&this.type===ZC&&J(BA,x),BA.needsUpdate=!1}h=this.type,r.needsUpdate=!1,g.setRenderTarget(W,l,u)};function J(H,q){const x=A.update(y);c.defines.VSM_SAMPLES!==H.blurSamples&&(c.defines.VSM_SAMPLES=H.blurSamples,R.defines.VSM_SAMPLES=H.blurSamples,c.needsUpdate=!0,R.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new OB(B.x,B.y)),c.uniforms.shadow_pass.value=H.map.texture,c.uniforms.resolution.value=H.mapSize,c.uniforms.radius.value=H.radius,g.setRenderTarget(H.mapPass),g.clear(),g.renderBufferDirect(q,null,x,c,y,null),R.uniforms.shadow_pass.value=H.mapPass.texture,R.uniforms.resolution.value=H.mapSize,R.uniforms.radius.value=H.radius,g.setRenderTarget(H.map),g.clear(),g.renderBufferDirect(q,null,x,R,y,null)}function K(H,q,x,W){let l=null;const u=x.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(u!==void 0)l=u;else if(l=x.isPointLight===!0?D:t,g.localClippingEnabled&&q.clipShadows===!0&&Array.isArray(q.clippingPlanes)&&q.clippingPlanes.length!==0||q.displacementMap&&q.displacementScale!==0||q.alphaMap&&q.alphaTest>0||q.map&&q.alphaTest>0){const EA=l.uuid,aA=q.uuid;let X=e[EA];X===void 0&&(X={},e[EA]=X);let _=X[aA];_===void 0&&(_=l.clone(),X[aA]=_),l=_}if(l.visible=q.visible,l.wireframe=q.wireframe,W===ZC?l.side=q.shadowSide!==null?q.shadowSide:q.side:l.side=q.shadowSide!==null?q.shadowSide:G[q.side],l.alphaMap=q.alphaMap,l.alphaTest=q.alphaTest,l.map=q.map,l.clipShadows=q.clipShadows,l.clippingPlanes=q.clippingPlanes,l.clipIntersection=q.clipIntersection,l.displacementMap=q.displacementMap,l.displacementScale=q.displacementScale,l.displacementBias=q.displacementBias,l.wireframeLinewidth=q.wireframeLinewidth,l.linewidth=q.linewidth,x.isPointLight===!0&&l.isMeshDistanceMaterial===!0){const EA=g.properties.get(l);EA.light=x}return l}function L(H,q,x,W,l){if(H.visible===!1)return;if(H.layers.test(q.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&l===ZC)&&(!H.frustumCulled||C.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,H.matrixWorld);const aA=A.update(H),X=H.material;if(Array.isArray(X)){const _=aA.groups;for(let $=0,tA=_.length;$<tA;$++){const BA=_[$],iA=X[BA.materialIndex];if(iA&&iA.visible){const nA=K(H,iA,W,l);g.renderBufferDirect(x,null,aA,nA,H,BA)}}}else if(X.visible){const _=K(H,X,W,l);g.renderBufferDirect(x,null,aA,_,H,null)}}const EA=H.children;for(let aA=0,X=EA.length;aA<X;aA++)L(EA[aA],q,x,W,l)}}function PN(g,A,I){const C=I.isWebGL2;function B(){let p=!1;const yA=new ng;let j=null;const cA=new ng(0,0,0,0);return{setMask:function(eA){j!==eA&&!p&&(g.colorMask(eA,eA,eA,eA),j=eA)},setLocked:function(eA){p=eA},setClear:function(eA,gI,kI,UI,fC){fC===!0&&(eA*=UI,gI*=UI,kI*=UI),yA.set(eA,gI,kI,UI),cA.equals(yA)===!1&&(g.clearColor(eA,gI,kI,UI),cA.copy(yA))},reset:function(){p=!1,j=null,cA.set(-1,0,0,0)}}}function Q(){let p=!1,yA=null,j=null,cA=null;return{setTest:function(eA){eA?xA(g.DEPTH_TEST):$A(g.DEPTH_TEST)},setMask:function(eA){yA!==eA&&!p&&(g.depthMask(eA),yA=eA)},setFunc:function(eA){if(j!==eA){switch(eA){case rG:g.depthFunc(g.NEVER);break;case cG:g.depthFunc(g.ALWAYS);break;case FG:g.depthFunc(g.LESS);break;case st:g.depthFunc(g.LEQUAL);break;case RG:g.depthFunc(g.EQUAL);break;case NG:g.depthFunc(g.GEQUAL);break;case yG:g.depthFunc(g.GREATER);break;case MG:g.depthFunc(g.NOTEQUAL);break;default:g.depthFunc(g.LEQUAL)}j=eA}},setLocked:function(eA){p=eA},setClear:function(eA){cA!==eA&&(g.clearDepth(eA),cA=eA)},reset:function(){p=!1,yA=null,j=null,cA=null}}}function o(){let p=!1,yA=null,j=null,cA=null,eA=null,gI=null,kI=null,UI=null,fC=null;return{setTest:function(m){p||(m?xA(g.STENCIL_TEST):$A(g.STENCIL_TEST))},setMask:function(m){yA!==m&&!p&&(g.stencilMask(m),yA=m)},setFunc:function(m,rg,wI){(j!==m||cA!==rg||eA!==wI)&&(g.stencilFunc(m,rg,wI),j=m,cA=rg,eA=wI)},setOp:function(m,rg,wI){(gI!==m||kI!==rg||UI!==wI)&&(g.stencilOp(m,rg,wI),gI=m,kI=rg,UI=wI)},setLocked:function(m){p=m},setClear:function(m){fC!==m&&(g.clearStencil(m),fC=m)},reset:function(){p=!1,yA=null,j=null,cA=null,eA=null,gI=null,kI=null,UI=null,fC=null}}}const t=new B,D=new Q,e=new o,w=new WeakMap,G=new WeakMap;let c={},R={},M=new WeakMap,y=[],r=null,h=!1,J=null,K=null,L=null,H=null,q=null,x=null,W=null,l=!1,u=null,EA=null,aA=null,X=null,_=null;const $=g.getParameter(g.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let tA=!1,BA=0;const iA=g.getParameter(g.VERSION);iA.indexOf("WebGL")!==-1?(BA=parseFloat(/^WebGL (\d)/.exec(iA)[1]),tA=BA>=1):iA.indexOf("OpenGL ES")!==-1&&(BA=parseFloat(/^OpenGL ES (\d)/.exec(iA)[1]),tA=BA>=2);let nA=null,oA={};const uA=g.getParameter(g.SCISSOR_BOX),O=g.getParameter(g.VIEWPORT),sA=new ng().fromArray(uA),DA=new ng().fromArray(O);function SA(p,yA,j,cA){const eA=new Uint8Array(4),gI=g.createTexture();g.bindTexture(p,gI),g.texParameteri(p,g.TEXTURE_MIN_FILTER,g.NEAREST),g.texParameteri(p,g.TEXTURE_MAG_FILTER,g.NEAREST);for(let kI=0;kI<j;kI++)C&&(p===g.TEXTURE_3D||p===g.TEXTURE_2D_ARRAY)?g.texImage3D(yA,0,g.RGBA,1,1,cA,0,g.RGBA,g.UNSIGNED_BYTE,eA):g.texImage2D(yA+kI,0,g.RGBA,1,1,0,g.RGBA,g.UNSIGNED_BYTE,eA);return gI}const kA={};kA[g.TEXTURE_2D]=SA(g.TEXTURE_2D,g.TEXTURE_2D,1),kA[g.TEXTURE_CUBE_MAP]=SA(g.TEXTURE_CUBE_MAP,g.TEXTURE_CUBE_MAP_POSITIVE_X,6),C&&(kA[g.TEXTURE_2D_ARRAY]=SA(g.TEXTURE_2D_ARRAY,g.TEXTURE_2D_ARRAY,1,1),kA[g.TEXTURE_3D]=SA(g.TEXTURE_3D,g.TEXTURE_3D,1,1)),t.setClear(0,0,0,1),D.setClear(1),e.setClear(0),xA(g.DEPTH_TEST),D.setFunc(st),vA(!1),yI(tD),xA(g.CULL_FACE),LA(eB);function xA(p){c[p]!==!0&&(g.enable(p),c[p]=!0)}function $A(p){c[p]!==!1&&(g.disable(p),c[p]=!1)}function JA(p,yA){return R[p]!==yA?(g.bindFramebuffer(p,yA),R[p]=yA,C&&(p===g.DRAW_FRAMEBUFFER&&(R[g.FRAMEBUFFER]=yA),p===g.FRAMEBUFFER&&(R[g.DRAW_FRAMEBUFFER]=yA)),!0):!1}function nI(p,yA){let j=y,cA=!1;if(p)if(j=M.get(yA),j===void 0&&(j=[],M.set(yA,j)),p.isWebGLMultipleRenderTargets){const eA=p.texture;if(j.length!==eA.length||j[0]!==g.COLOR_ATTACHMENT0){for(let gI=0,kI=eA.length;gI<kI;gI++)j[gI]=g.COLOR_ATTACHMENT0+gI;j.length=eA.length,cA=!0}}else j[0]!==g.COLOR_ATTACHMENT0&&(j[0]=g.COLOR_ATTACHMENT0,cA=!0);else j[0]!==g.BACK&&(j[0]=g.BACK,cA=!0);cA&&(I.isWebGL2?g.drawBuffers(j):A.get("WEBGL_draw_buffers").drawBuffersWEBGL(j))}function AI(p){return r!==p?(g.useProgram(p),r=p,!0):!1}const V={[aQ]:g.FUNC_ADD,[iG]:g.FUNC_SUBTRACT,[oG]:g.FUNC_REVERSE_SUBTRACT};if(C)V[aD]=g.MIN,V[nD]=g.MAX;else{const p=A.get("EXT_blend_minmax");p!==null&&(V[aD]=p.MIN_EXT,V[nD]=p.MAX_EXT)}const GA={[tG]:g.ZERO,[sG]:g.ONE,[DG]:g.SRC_COLOR,[ua]:g.SRC_ALPHA,[GG]:g.SRC_ALPHA_SATURATE,[hG]:g.DST_COLOR,[aG]:g.DST_ALPHA,[eG]:g.ONE_MINUS_SRC_COLOR,[Ha]:g.ONE_MINUS_SRC_ALPHA,[wG]:g.ONE_MINUS_DST_COLOR,[nG]:g.ONE_MINUS_DST_ALPHA};function LA(p,yA,j,cA,eA,gI,kI,UI){if(p===eB){h===!0&&($A(g.BLEND),h=!1);return}if(h===!1&&(xA(g.BLEND),h=!0),p!==EG){if(p!==J||UI!==l){if((K!==aQ||q!==aQ)&&(g.blendEquation(g.FUNC_ADD),K=aQ,q=aQ),UI)switch(p){case GQ:g.blendFuncSeparate(g.ONE,g.ONE_MINUS_SRC_ALPHA,g.ONE,g.ONE_MINUS_SRC_ALPHA);break;case sD:g.blendFunc(g.ONE,g.ONE);break;case DD:g.blendFuncSeparate(g.ZERO,g.ONE_MINUS_SRC_COLOR,g.ZERO,g.ONE);break;case eD:g.blendFuncSeparate(g.ZERO,g.SRC_COLOR,g.ZERO,g.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",p);break}else switch(p){case GQ:g.blendFuncSeparate(g.SRC_ALPHA,g.ONE_MINUS_SRC_ALPHA,g.ONE,g.ONE_MINUS_SRC_ALPHA);break;case sD:g.blendFunc(g.SRC_ALPHA,g.ONE);break;case DD:g.blendFuncSeparate(g.ZERO,g.ONE_MINUS_SRC_COLOR,g.ZERO,g.ONE);break;case eD:g.blendFunc(g.ZERO,g.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",p);break}L=null,H=null,x=null,W=null,J=p,l=UI}return}eA=eA||yA,gI=gI||j,kI=kI||cA,(yA!==K||eA!==q)&&(g.blendEquationSeparate(V[yA],V[eA]),K=yA,q=eA),(j!==L||cA!==H||gI!==x||kI!==W)&&(g.blendFuncSeparate(GA[j],GA[cA],GA[gI],GA[kI]),L=j,H=cA,x=gI,W=kI),J=p,l=!1}function BI(p,yA){p.side===vC?$A(g.CULL_FACE):xA(g.CULL_FACE);let j=p.side===Sg;yA&&(j=!j),vA(j),p.blending===GQ&&p.transparent===!1?LA(eB):LA(p.blending,p.blendEquation,p.blendSrc,p.blendDst,p.blendEquationAlpha,p.blendSrcAlpha,p.blendDstAlpha,p.premultipliedAlpha),D.setFunc(p.depthFunc),D.setTest(p.depthTest),D.setMask(p.depthWrite),t.setMask(p.colorWrite);const cA=p.stencilWrite;e.setTest(cA),cA&&(e.setMask(p.stencilWriteMask),e.setFunc(p.stencilFunc,p.stencilRef,p.stencilFuncMask),e.setOp(p.stencilFail,p.stencilZFail,p.stencilZPass)),_A(p.polygonOffset,p.polygonOffsetFactor,p.polygonOffsetUnits),p.alphaToCoverage===!0?xA(g.SAMPLE_ALPHA_TO_COVERAGE):$A(g.SAMPLE_ALPHA_TO_COVERAGE)}function vA(p){u!==p&&(p?g.frontFace(g.CW):g.frontFace(g.CCW),u=p)}function yI(p){p!==CG?(xA(g.CULL_FACE),p!==EA&&(p===tD?g.cullFace(g.BACK):p===BG?g.cullFace(g.FRONT):g.cullFace(g.FRONT_AND_BACK))):$A(g.CULL_FACE),EA=p}function II(p){p!==aA&&(tA&&g.lineWidth(p),aA=p)}function _A(p,yA,j){p?(xA(g.POLYGON_OFFSET_FILL),(X!==yA||_!==j)&&(g.polygonOffset(yA,j),X=yA,_=j)):$A(g.POLYGON_OFFSET_FILL)}function FI(p){p?xA(g.SCISSOR_TEST):$A(g.SCISSOR_TEST)}function _I(p){p===void 0&&(p=g.TEXTURE0+$-1),nA!==p&&(g.activeTexture(p),nA=p)}function $I(p,yA,j){j===void 0&&(nA===null?j=g.TEXTURE0+$-1:j=nA);let cA=oA[j];cA===void 0&&(cA={type:void 0,texture:void 0},oA[j]=cA),(cA.type!==p||cA.texture!==yA)&&(nA!==j&&(g.activeTexture(j),nA=j),g.bindTexture(p,yA||kA[p]),cA.type=p,cA.texture=yA)}function f(){const p=oA[nA];p!==void 0&&p.type!==void 0&&(g.bindTexture(p.type,null),p.type=void 0,p.texture=void 0)}function S(){try{g.compressedTexImage2D.apply(g,arguments)}catch(p){console.error("THREE.WebGLState:",p)}}function AA(){try{g.compressedTexImage3D.apply(g,arguments)}catch(p){console.error("THREE.WebGLState:",p)}}function hA(){try{g.texSubImage2D.apply(g,arguments)}catch(p){console.error("THREE.WebGLState:",p)}}function wA(){try{g.texSubImage3D.apply(g,arguments)}catch(p){console.error("THREE.WebGLState:",p)}}function MA(){try{g.compressedTexSubImage2D.apply(g,arguments)}catch(p){console.error("THREE.WebGLState:",p)}}function YA(){try{g.compressedTexSubImage3D.apply(g,arguments)}catch(p){console.error("THREE.WebGLState:",p)}}function FA(){try{g.texStorage2D.apply(g,arguments)}catch(p){console.error("THREE.WebGLState:",p)}}function CA(){try{g.texStorage3D.apply(g,arguments)}catch(p){console.error("THREE.WebGLState:",p)}}function HA(){try{g.texImage2D.apply(g,arguments)}catch(p){console.error("THREE.WebGLState:",p)}}function UA(){try{g.texImage3D.apply(g,arguments)}catch(p){console.error("THREE.WebGLState:",p)}}function mA(p){sA.equals(p)===!1&&(g.scissor(p.x,p.y,p.z,p.w),sA.copy(p))}function dA(p){DA.equals(p)===!1&&(g.viewport(p.x,p.y,p.z,p.w),DA.copy(p))}function lA(p,yA){let j=G.get(yA);j===void 0&&(j=new WeakMap,G.set(yA,j));let cA=j.get(p);cA===void 0&&(cA=g.getUniformBlockIndex(yA,p.name),j.set(p,cA))}function EI(p,yA){const cA=G.get(yA).get(p);w.get(yA)!==cA&&(g.uniformBlockBinding(yA,cA,p.__bindingPointIndex),w.set(yA,cA))}function NI(){g.disable(g.BLEND),g.disable(g.CULL_FACE),g.disable(g.DEPTH_TEST),g.disable(g.POLYGON_OFFSET_FILL),g.disable(g.SCISSOR_TEST),g.disable(g.STENCIL_TEST),g.disable(g.SAMPLE_ALPHA_TO_COVERAGE),g.blendEquation(g.FUNC_ADD),g.blendFunc(g.ONE,g.ZERO),g.blendFuncSeparate(g.ONE,g.ZERO,g.ONE,g.ZERO),g.colorMask(!0,!0,!0,!0),g.clearColor(0,0,0,0),g.depthMask(!0),g.depthFunc(g.LESS),g.clearDepth(1),g.stencilMask(4294967295),g.stencilFunc(g.ALWAYS,0,4294967295),g.stencilOp(g.KEEP,g.KEEP,g.KEEP),g.clearStencil(0),g.cullFace(g.BACK),g.frontFace(g.CCW),g.polygonOffset(0,0),g.activeTexture(g.TEXTURE0),g.bindFramebuffer(g.FRAMEBUFFER,null),C===!0&&(g.bindFramebuffer(g.DRAW_FRAMEBUFFER,null),g.bindFramebuffer(g.READ_FRAMEBUFFER,null)),g.useProgram(null),g.lineWidth(1),g.scissor(0,0,g.canvas.width,g.canvas.height),g.viewport(0,0,g.canvas.width,g.canvas.height),c={},nA=null,oA={},R={},M=new WeakMap,y=[],r=null,h=!1,J=null,K=null,L=null,H=null,q=null,x=null,W=null,l=!1,u=null,EA=null,aA=null,X=null,_=null,sA.set(0,0,g.canvas.width,g.canvas.height),DA.set(0,0,g.canvas.width,g.canvas.height),t.reset(),D.reset(),e.reset()}return{buffers:{color:t,depth:D,stencil:e},enable:xA,disable:$A,bindFramebuffer:JA,drawBuffers:nI,useProgram:AI,setBlending:LA,setMaterial:BI,setFlipSided:vA,setCullFace:yI,setLineWidth:II,setPolygonOffset:_A,setScissorTest:FI,activeTexture:_I,bindTexture:$I,unbindTexture:f,compressedTexImage2D:S,compressedTexImage3D:AA,texImage2D:HA,texImage3D:UA,updateUBOMapping:lA,uniformBlockBinding:EI,texStorage2D:FA,texStorage3D:CA,texSubImage2D:hA,texSubImage3D:wA,compressedTexSubImage2D:MA,compressedTexSubImage3D:YA,scissor:mA,viewport:dA,reset:NI}}function jN(g,A,I,C,B,Q,o){const t=B.isWebGL2,D=B.maxTextures,e=B.maxCubemapSize,w=B.maxTextureSize,G=B.maxSamples,c=A.has("WEBGL_multisampled_render_to_texture")?A.get("WEBGL_multisampled_render_to_texture"):null,R=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),M=new WeakMap;let y;const r=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function J(f,S){return h?new OffscreenCanvas(f,S):di("canvas")}function K(f,S,AA,hA){let wA=1;if((f.width>hA||f.height>hA)&&(wA=hA/Math.max(f.width,f.height)),wA<1||S===!0)if(typeof HTMLImageElement<"u"&&f instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&f instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&f instanceof ImageBitmap){const MA=S?Gt:Math.floor,YA=MA(wA*f.width),FA=MA(wA*f.height);y===void 0&&(y=J(YA,FA));const CA=AA?J(YA,FA):y;return CA.width=YA,CA.height=FA,CA.getContext("2d").drawImage(f,0,0,YA,FA),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+f.width+"x"+f.height+") to ("+YA+"x"+FA+")."),CA}else return"data"in f&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+f.width+"x"+f.height+")."),f;return f}function L(f){return bD(f.width)&&bD(f.height)}function H(f){return t?!1:f.wrapS!==sC||f.wrapT!==sC||f.minFilter!==Fg&&f.minFilter!==vg}function q(f,S){return f.generateMipmaps&&S&&f.minFilter!==Fg&&f.minFilter!==vg}function x(f){g.generateMipmap(f)}function W(f,S,AA,hA,wA=!1){if(t===!1)return S;if(f!==null){if(g[f]!==void 0)return g[f];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+f+"'")}let MA=S;return S===g.RED&&(AA===g.FLOAT&&(MA=g.R32F),AA===g.HALF_FLOAT&&(MA=g.R16F),AA===g.UNSIGNED_BYTE&&(MA=g.R8)),S===g.RG&&(AA===g.FLOAT&&(MA=g.RG32F),AA===g.HALF_FLOAT&&(MA=g.RG16F),AA===g.UNSIGNED_BYTE&&(MA=g.RG8)),S===g.RGBA&&(AA===g.FLOAT&&(MA=g.RGBA32F),AA===g.HALF_FLOAT&&(MA=g.RGBA16F),AA===g.UNSIGNED_BYTE&&(MA=hA===QI&&wA===!1?g.SRGB8_ALPHA8:g.RGBA8),AA===g.UNSIGNED_SHORT_4_4_4_4&&(MA=g.RGBA4),AA===g.UNSIGNED_SHORT_5_5_5_1&&(MA=g.RGB5_A1)),(MA===g.R16F||MA===g.R32F||MA===g.RG16F||MA===g.RG32F||MA===g.RGBA16F||MA===g.RGBA32F)&&A.get("EXT_color_buffer_float"),MA}function l(f,S,AA){return q(f,AA)===!0||f.isFramebufferTexture&&f.minFilter!==Fg&&f.minFilter!==vg?Math.log2(Math.max(S.width,S.height))+1:f.mipmaps!==void 0&&f.mipmaps.length>0?f.mipmaps.length:f.isCompressedTexture&&Array.isArray(f.image)?S.mipmaps.length:1}function u(f){return f===Fg||f===hD||f===yo?g.NEAREST:g.LINEAR}function EA(f){const S=f.target;S.removeEventListener("dispose",EA),X(S),S.isVideoTexture&&M.delete(S)}function aA(f){const S=f.target;S.removeEventListener("dispose",aA),$(S)}function X(f){const S=C.get(f);if(S.__webglInit===void 0)return;const AA=f.source,hA=r.get(AA);if(hA){const wA=hA[S.__cacheKey];wA.usedTimes--,wA.usedTimes===0&&_(f),Object.keys(hA).length===0&&r.delete(AA)}C.remove(f)}function _(f){const S=C.get(f);g.deleteTexture(S.__webglTexture);const AA=f.source,hA=r.get(AA);delete hA[S.__cacheKey],o.memory.textures--}function $(f){const S=f.texture,AA=C.get(f),hA=C.get(S);if(hA.__webglTexture!==void 0&&(g.deleteTexture(hA.__webglTexture),o.memory.textures--),f.depthTexture&&f.depthTexture.dispose(),f.isWebGLCubeRenderTarget)for(let wA=0;wA<6;wA++)g.deleteFramebuffer(AA.__webglFramebuffer[wA]),AA.__webglDepthbuffer&&g.deleteRenderbuffer(AA.__webglDepthbuffer[wA]);else{if(g.deleteFramebuffer(AA.__webglFramebuffer),AA.__webglDepthbuffer&&g.deleteRenderbuffer(AA.__webglDepthbuffer),AA.__webglMultisampledFramebuffer&&g.deleteFramebuffer(AA.__webglMultisampledFramebuffer),AA.__webglColorRenderbuffer)for(let wA=0;wA<AA.__webglColorRenderbuffer.length;wA++)AA.__webglColorRenderbuffer[wA]&&g.deleteRenderbuffer(AA.__webglColorRenderbuffer[wA]);AA.__webglDepthRenderbuffer&&g.deleteRenderbuffer(AA.__webglDepthRenderbuffer)}if(f.isWebGLMultipleRenderTargets)for(let wA=0,MA=S.length;wA<MA;wA++){const YA=C.get(S[wA]);YA.__webglTexture&&(g.deleteTexture(YA.__webglTexture),o.memory.textures--),C.remove(S[wA])}C.remove(S),C.remove(f)}let tA=0;function BA(){tA=0}function iA(){const f=tA;return f>=D&&console.warn("THREE.WebGLTextures: Trying to use "+f+" texture units while this GPU supports only "+D),tA+=1,f}function nA(f){const S=[];return S.push(f.wrapS),S.push(f.wrapT),S.push(f.wrapR||0),S.push(f.magFilter),S.push(f.minFilter),S.push(f.anisotropy),S.push(f.internalFormat),S.push(f.format),S.push(f.type),S.push(f.generateMipmaps),S.push(f.premultiplyAlpha),S.push(f.flipY),S.push(f.unpackAlignment),S.push(f.colorSpace),S.join()}function oA(f,S){const AA=C.get(f);if(f.isVideoTexture&&_I(f),f.isRenderTargetTexture===!1&&f.version>0&&AA.__version!==f.version){const hA=f.image;if(hA===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(hA.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{JA(AA,f,S);return}}I.bindTexture(g.TEXTURE_2D,AA.__webglTexture,g.TEXTURE0+S)}function uA(f,S){const AA=C.get(f);if(f.version>0&&AA.__version!==f.version){JA(AA,f,S);return}I.bindTexture(g.TEXTURE_2D_ARRAY,AA.__webglTexture,g.TEXTURE0+S)}function O(f,S){const AA=C.get(f);if(f.version>0&&AA.__version!==f.version){JA(AA,f,S);return}I.bindTexture(g.TEXTURE_3D,AA.__webglTexture,g.TEXTURE0+S)}function sA(f,S){const AA=C.get(f);if(f.version>0&&AA.__version!==f.version){nI(AA,f,S);return}I.bindTexture(g.TEXTURE_CUBE_MAP,AA.__webglTexture,g.TEXTURE0+S)}const DA={[at]:g.REPEAT,[sC]:g.CLAMP_TO_EDGE,[nt]:g.MIRRORED_REPEAT},SA={[Fg]:g.NEAREST,[hD]:g.NEAREST_MIPMAP_NEAREST,[yo]:g.NEAREST_MIPMAP_LINEAR,[vg]:g.LINEAR,[YG]:g.LINEAR_MIPMAP_NEAREST,[oE]:g.LINEAR_MIPMAP_LINEAR},kA={[ZG]:g.NEVER,[$G]:g.ALWAYS,[vG]:g.LESS,[PG]:g.LEQUAL,[XG]:g.EQUAL,[_G]:g.GEQUAL,[jG]:g.GREATER,[zG]:g.NOTEQUAL};function xA(f,S,AA){if(AA?(g.texParameteri(f,g.TEXTURE_WRAP_S,DA[S.wrapS]),g.texParameteri(f,g.TEXTURE_WRAP_T,DA[S.wrapT]),(f===g.TEXTURE_3D||f===g.TEXTURE_2D_ARRAY)&&g.texParameteri(f,g.TEXTURE_WRAP_R,DA[S.wrapR]),g.texParameteri(f,g.TEXTURE_MAG_FILTER,SA[S.magFilter]),g.texParameteri(f,g.TEXTURE_MIN_FILTER,SA[S.minFilter])):(g.texParameteri(f,g.TEXTURE_WRAP_S,g.CLAMP_TO_EDGE),g.texParameteri(f,g.TEXTURE_WRAP_T,g.CLAMP_TO_EDGE),(f===g.TEXTURE_3D||f===g.TEXTURE_2D_ARRAY)&&g.texParameteri(f,g.TEXTURE_WRAP_R,g.CLAMP_TO_EDGE),(S.wrapS!==sC||S.wrapT!==sC)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),g.texParameteri(f,g.TEXTURE_MAG_FILTER,u(S.magFilter)),g.texParameteri(f,g.TEXTURE_MIN_FILTER,u(S.minFilter)),S.minFilter!==Fg&&S.minFilter!==vg&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(g.texParameteri(f,g.TEXTURE_COMPARE_MODE,g.COMPARE_REF_TO_TEXTURE),g.texParameteri(f,g.TEXTURE_COMPARE_FUNC,kA[S.compareFunction])),A.has("EXT_texture_filter_anisotropic")===!0){const hA=A.get("EXT_texture_filter_anisotropic");if(S.magFilter===Fg||S.minFilter!==yo&&S.minFilter!==oE||S.type===DB&&A.has("OES_texture_float_linear")===!1||t===!1&&S.type===tE&&A.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||C.get(S).__currentAnisotropy)&&(g.texParameterf(f,hA.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,B.getMaxAnisotropy())),C.get(S).__currentAnisotropy=S.anisotropy)}}function $A(f,S){let AA=!1;f.__webglInit===void 0&&(f.__webglInit=!0,S.addEventListener("dispose",EA));const hA=S.source;let wA=r.get(hA);wA===void 0&&(wA={},r.set(hA,wA));const MA=nA(S);if(MA!==f.__cacheKey){wA[MA]===void 0&&(wA[MA]={texture:g.createTexture(),usedTimes:0},o.memory.textures++,AA=!0),wA[MA].usedTimes++;const YA=wA[f.__cacheKey];YA!==void 0&&(wA[f.__cacheKey].usedTimes--,YA.usedTimes===0&&_(S)),f.__cacheKey=MA,f.__webglTexture=wA[MA].texture}return AA}function JA(f,S,AA){let hA=g.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(hA=g.TEXTURE_2D_ARRAY),S.isData3DTexture&&(hA=g.TEXTURE_3D);const wA=$A(f,S),MA=S.source;I.bindTexture(hA,f.__webglTexture,g.TEXTURE0+AA);const YA=C.get(MA);if(MA.version!==YA.__version||wA===!0){I.activeTexture(g.TEXTURE0+AA),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,S.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,S.unpackAlignment),g.pixelStorei(g.UNPACK_COLORSPACE_CONVERSION_WEBGL,g.NONE);const FA=H(S)&&L(S.image)===!1;let CA=K(S.image,FA,!1,w);CA=$I(S,CA);const HA=L(CA)||t,UA=Q.convert(S.format,S.colorSpace);let mA=Q.convert(S.type),dA=W(S.internalFormat,UA,mA,S.colorSpace);xA(hA,S,HA);let lA;const EI=S.mipmaps,NI=t&&S.isVideoTexture!==!0,p=YA.__version===void 0||wA===!0,yA=l(S,CA,HA);if(S.isDepthTexture)dA=g.DEPTH_COMPONENT,t?S.type===DB?dA=g.DEPTH_COMPONENT32F:S.type===sB?dA=g.DEPTH_COMPONENT24:S.type===mB?dA=g.DEPTH24_STENCIL8:dA=g.DEPTH_COMPONENT16:S.type===DB&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===xB&&dA===g.DEPTH_COMPONENT&&S.type!==Zt&&S.type!==sB&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=sB,mA=Q.convert(S.type)),S.format===RQ&&dA===g.DEPTH_COMPONENT&&(dA=g.DEPTH_STENCIL,S.type!==mB&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=mB,mA=Q.convert(S.type))),p&&(NI?I.texStorage2D(g.TEXTURE_2D,1,dA,CA.width,CA.height):I.texImage2D(g.TEXTURE_2D,0,dA,CA.width,CA.height,0,UA,mA,null));else if(S.isDataTexture)if(EI.length>0&&HA){NI&&p&&I.texStorage2D(g.TEXTURE_2D,yA,dA,EI[0].width,EI[0].height);for(let j=0,cA=EI.length;j<cA;j++)lA=EI[j],NI?I.texSubImage2D(g.TEXTURE_2D,j,0,0,lA.width,lA.height,UA,mA,lA.data):I.texImage2D(g.TEXTURE_2D,j,dA,lA.width,lA.height,0,UA,mA,lA.data);S.generateMipmaps=!1}else NI?(p&&I.texStorage2D(g.TEXTURE_2D,yA,dA,CA.width,CA.height),I.texSubImage2D(g.TEXTURE_2D,0,0,0,CA.width,CA.height,UA,mA,CA.data)):I.texImage2D(g.TEXTURE_2D,0,dA,CA.width,CA.height,0,UA,mA,CA.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){NI&&p&&I.texStorage3D(g.TEXTURE_2D_ARRAY,yA,dA,EI[0].width,EI[0].height,CA.depth);for(let j=0,cA=EI.length;j<cA;j++)lA=EI[j],S.format!==DC?UA!==null?NI?I.compressedTexSubImage3D(g.TEXTURE_2D_ARRAY,j,0,0,0,lA.width,lA.height,CA.depth,UA,lA.data,0,0):I.compressedTexImage3D(g.TEXTURE_2D_ARRAY,j,dA,lA.width,lA.height,CA.depth,0,lA.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):NI?I.texSubImage3D(g.TEXTURE_2D_ARRAY,j,0,0,0,lA.width,lA.height,CA.depth,UA,mA,lA.data):I.texImage3D(g.TEXTURE_2D_ARRAY,j,dA,lA.width,lA.height,CA.depth,0,UA,mA,lA.data)}else{NI&&p&&I.texStorage2D(g.TEXTURE_2D,yA,dA,EI[0].width,EI[0].height);for(let j=0,cA=EI.length;j<cA;j++)lA=EI[j],S.format!==DC?UA!==null?NI?I.compressedTexSubImage2D(g.TEXTURE_2D,j,0,0,lA.width,lA.height,UA,lA.data):I.compressedTexImage2D(g.TEXTURE_2D,j,dA,lA.width,lA.height,0,lA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):NI?I.texSubImage2D(g.TEXTURE_2D,j,0,0,lA.width,lA.height,UA,mA,lA.data):I.texImage2D(g.TEXTURE_2D,j,dA,lA.width,lA.height,0,UA,mA,lA.data)}else if(S.isDataArrayTexture)NI?(p&&I.texStorage3D(g.TEXTURE_2D_ARRAY,yA,dA,CA.width,CA.height,CA.depth),I.texSubImage3D(g.TEXTURE_2D_ARRAY,0,0,0,0,CA.width,CA.height,CA.depth,UA,mA,CA.data)):I.texImage3D(g.TEXTURE_2D_ARRAY,0,dA,CA.width,CA.height,CA.depth,0,UA,mA,CA.data);else if(S.isData3DTexture)NI?(p&&I.texStorage3D(g.TEXTURE_3D,yA,dA,CA.width,CA.height,CA.depth),I.texSubImage3D(g.TEXTURE_3D,0,0,0,0,CA.width,CA.height,CA.depth,UA,mA,CA.data)):I.texImage3D(g.TEXTURE_3D,0,dA,CA.width,CA.height,CA.depth,0,UA,mA,CA.data);else if(S.isFramebufferTexture){if(p)if(NI)I.texStorage2D(g.TEXTURE_2D,yA,dA,CA.width,CA.height);else{let j=CA.width,cA=CA.height;for(let eA=0;eA<yA;eA++)I.texImage2D(g.TEXTURE_2D,eA,dA,j,cA,0,UA,mA,null),j>>=1,cA>>=1}}else if(EI.length>0&&HA){NI&&p&&I.texStorage2D(g.TEXTURE_2D,yA,dA,EI[0].width,EI[0].height);for(let j=0,cA=EI.length;j<cA;j++)lA=EI[j],NI?I.texSubImage2D(g.TEXTURE_2D,j,0,0,UA,mA,lA):I.texImage2D(g.TEXTURE_2D,j,dA,UA,mA,lA);S.generateMipmaps=!1}else NI?(p&&I.texStorage2D(g.TEXTURE_2D,yA,dA,CA.width,CA.height),I.texSubImage2D(g.TEXTURE_2D,0,0,0,UA,mA,CA)):I.texImage2D(g.TEXTURE_2D,0,dA,UA,mA,CA);q(S,HA)&&x(hA),YA.__version=MA.version,S.onUpdate&&S.onUpdate(S)}f.__version=S.version}function nI(f,S,AA){if(S.image.length!==6)return;const hA=$A(f,S),wA=S.source;I.bindTexture(g.TEXTURE_CUBE_MAP,f.__webglTexture,g.TEXTURE0+AA);const MA=C.get(wA);if(wA.version!==MA.__version||hA===!0){I.activeTexture(g.TEXTURE0+AA),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,S.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,S.unpackAlignment),g.pixelStorei(g.UNPACK_COLORSPACE_CONVERSION_WEBGL,g.NONE);const YA=S.isCompressedTexture||S.image[0].isCompressedTexture,FA=S.image[0]&&S.image[0].isDataTexture,CA=[];for(let j=0;j<6;j++)!YA&&!FA?CA[j]=K(S.image[j],!1,!0,e):CA[j]=FA?S.image[j].image:S.image[j],CA[j]=$I(S,CA[j]);const HA=CA[0],UA=L(HA)||t,mA=Q.convert(S.format,S.colorSpace),dA=Q.convert(S.type),lA=W(S.internalFormat,mA,dA,S.colorSpace),EI=t&&S.isVideoTexture!==!0,NI=MA.__version===void 0||hA===!0;let p=l(S,HA,UA);xA(g.TEXTURE_CUBE_MAP,S,UA);let yA;if(YA){EI&&NI&&I.texStorage2D(g.TEXTURE_CUBE_MAP,p,lA,HA.width,HA.height);for(let j=0;j<6;j++){yA=CA[j].mipmaps;for(let cA=0;cA<yA.length;cA++){const eA=yA[cA];S.format!==DC?mA!==null?EI?I.compressedTexSubImage2D(g.TEXTURE_CUBE_MAP_POSITIVE_X+j,cA,0,0,eA.width,eA.height,mA,eA.data):I.compressedTexImage2D(g.TEXTURE_CUBE_MAP_POSITIVE_X+j,cA,lA,eA.width,eA.height,0,eA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):EI?I.texSubImage2D(g.TEXTURE_CUBE_MAP_POSITIVE_X+j,cA,0,0,eA.width,eA.height,mA,dA,eA.data):I.texImage2D(g.TEXTURE_CUBE_MAP_POSITIVE_X+j,cA,lA,eA.width,eA.height,0,mA,dA,eA.data)}}}else{yA=S.mipmaps,EI&&NI&&(yA.length>0&&p++,I.texStorage2D(g.TEXTURE_CUBE_MAP,p,lA,CA[0].width,CA[0].height));for(let j=0;j<6;j++)if(FA){EI?I.texSubImage2D(g.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,CA[j].width,CA[j].height,mA,dA,CA[j].data):I.texImage2D(g.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,lA,CA[j].width,CA[j].height,0,mA,dA,CA[j].data);for(let cA=0;cA<yA.length;cA++){const gI=yA[cA].image[j].image;EI?I.texSubImage2D(g.TEXTURE_CUBE_MAP_POSITIVE_X+j,cA+1,0,0,gI.width,gI.height,mA,dA,gI.data):I.texImage2D(g.TEXTURE_CUBE_MAP_POSITIVE_X+j,cA+1,lA,gI.width,gI.height,0,mA,dA,gI.data)}}else{EI?I.texSubImage2D(g.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,mA,dA,CA[j]):I.texImage2D(g.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,lA,mA,dA,CA[j]);for(let cA=0;cA<yA.length;cA++){const eA=yA[cA];EI?I.texSubImage2D(g.TEXTURE_CUBE_MAP_POSITIVE_X+j,cA+1,0,0,mA,dA,eA.image[j]):I.texImage2D(g.TEXTURE_CUBE_MAP_POSITIVE_X+j,cA+1,lA,mA,dA,eA.image[j])}}}q(S,UA)&&x(g.TEXTURE_CUBE_MAP),MA.__version=wA.version,S.onUpdate&&S.onUpdate(S)}f.__version=S.version}function AI(f,S,AA,hA,wA){const MA=Q.convert(AA.format,AA.colorSpace),YA=Q.convert(AA.type),FA=W(AA.internalFormat,MA,YA,AA.colorSpace);C.get(S).__hasExternalTextures||(wA===g.TEXTURE_3D||wA===g.TEXTURE_2D_ARRAY?I.texImage3D(wA,0,FA,S.width,S.height,S.depth,0,MA,YA,null):I.texImage2D(wA,0,FA,S.width,S.height,0,MA,YA,null)),I.bindFramebuffer(g.FRAMEBUFFER,f),FI(S)?c.framebufferTexture2DMultisampleEXT(g.FRAMEBUFFER,hA,wA,C.get(AA).__webglTexture,0,_A(S)):(wA===g.TEXTURE_2D||wA>=g.TEXTURE_CUBE_MAP_POSITIVE_X&&wA<=g.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&g.framebufferTexture2D(g.FRAMEBUFFER,hA,wA,C.get(AA).__webglTexture,0),I.bindFramebuffer(g.FRAMEBUFFER,null)}function V(f,S,AA){if(g.bindRenderbuffer(g.RENDERBUFFER,f),S.depthBuffer&&!S.stencilBuffer){let hA=g.DEPTH_COMPONENT16;if(AA||FI(S)){const wA=S.depthTexture;wA&&wA.isDepthTexture&&(wA.type===DB?hA=g.DEPTH_COMPONENT32F:wA.type===sB&&(hA=g.DEPTH_COMPONENT24));const MA=_A(S);FI(S)?c.renderbufferStorageMultisampleEXT(g.RENDERBUFFER,MA,hA,S.width,S.height):g.renderbufferStorageMultisample(g.RENDERBUFFER,MA,hA,S.width,S.height)}else g.renderbufferStorage(g.RENDERBUFFER,hA,S.width,S.height);g.framebufferRenderbuffer(g.FRAMEBUFFER,g.DEPTH_ATTACHMENT,g.RENDERBUFFER,f)}else if(S.depthBuffer&&S.stencilBuffer){const hA=_A(S);AA&&FI(S)===!1?g.renderbufferStorageMultisample(g.RENDERBUFFER,hA,g.DEPTH24_STENCIL8,S.width,S.height):FI(S)?c.renderbufferStorageMultisampleEXT(g.RENDERBUFFER,hA,g.DEPTH24_STENCIL8,S.width,S.height):g.renderbufferStorage(g.RENDERBUFFER,g.DEPTH_STENCIL,S.width,S.height),g.framebufferRenderbuffer(g.FRAMEBUFFER,g.DEPTH_STENCIL_ATTACHMENT,g.RENDERBUFFER,f)}else{const hA=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let wA=0;wA<hA.length;wA++){const MA=hA[wA],YA=Q.convert(MA.format,MA.colorSpace),FA=Q.convert(MA.type),CA=W(MA.internalFormat,YA,FA,MA.colorSpace),HA=_A(S);AA&&FI(S)===!1?g.renderbufferStorageMultisample(g.RENDERBUFFER,HA,CA,S.width,S.height):FI(S)?c.renderbufferStorageMultisampleEXT(g.RENDERBUFFER,HA,CA,S.width,S.height):g.renderbufferStorage(g.RENDERBUFFER,CA,S.width,S.height)}}g.bindRenderbuffer(g.RENDERBUFFER,null)}function GA(f,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(I.bindFramebuffer(g.FRAMEBUFFER,f),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!C.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),oA(S.depthTexture,0);const hA=C.get(S.depthTexture).__webglTexture,wA=_A(S);if(S.depthTexture.format===xB)FI(S)?c.framebufferTexture2DMultisampleEXT(g.FRAMEBUFFER,g.DEPTH_ATTACHMENT,g.TEXTURE_2D,hA,0,wA):g.framebufferTexture2D(g.FRAMEBUFFER,g.DEPTH_ATTACHMENT,g.TEXTURE_2D,hA,0);else if(S.depthTexture.format===RQ)FI(S)?c.framebufferTexture2DMultisampleEXT(g.FRAMEBUFFER,g.DEPTH_STENCIL_ATTACHMENT,g.TEXTURE_2D,hA,0,wA):g.framebufferTexture2D(g.FRAMEBUFFER,g.DEPTH_STENCIL_ATTACHMENT,g.TEXTURE_2D,hA,0);else throw new Error("Unknown depthTexture format")}function LA(f){const S=C.get(f),AA=f.isWebGLCubeRenderTarget===!0;if(f.depthTexture&&!S.__autoAllocateDepthBuffer){if(AA)throw new Error("target.depthTexture not supported in Cube render targets");GA(S.__webglFramebuffer,f)}else if(AA){S.__webglDepthbuffer=[];for(let hA=0;hA<6;hA++)I.bindFramebuffer(g.FRAMEBUFFER,S.__webglFramebuffer[hA]),S.__webglDepthbuffer[hA]=g.createRenderbuffer(),V(S.__webglDepthbuffer[hA],f,!1)}else I.bindFramebuffer(g.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=g.createRenderbuffer(),V(S.__webglDepthbuffer,f,!1);I.bindFramebuffer(g.FRAMEBUFFER,null)}function BI(f,S,AA){const hA=C.get(f);S!==void 0&&AI(hA.__webglFramebuffer,f,f.texture,g.COLOR_ATTACHMENT0,g.TEXTURE_2D),AA!==void 0&&LA(f)}function vA(f){const S=f.texture,AA=C.get(f),hA=C.get(S);f.addEventListener("dispose",aA),f.isWebGLMultipleRenderTargets!==!0&&(hA.__webglTexture===void 0&&(hA.__webglTexture=g.createTexture()),hA.__version=S.version,o.memory.textures++);const wA=f.isWebGLCubeRenderTarget===!0,MA=f.isWebGLMultipleRenderTargets===!0,YA=L(f)||t;if(wA){AA.__webglFramebuffer=[];for(let FA=0;FA<6;FA++)AA.__webglFramebuffer[FA]=g.createFramebuffer()}else{if(AA.__webglFramebuffer=g.createFramebuffer(),MA)if(B.drawBuffers){const FA=f.texture;for(let CA=0,HA=FA.length;CA<HA;CA++){const UA=C.get(FA[CA]);UA.__webglTexture===void 0&&(UA.__webglTexture=g.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(t&&f.samples>0&&FI(f)===!1){const FA=MA?S:[S];AA.__webglMultisampledFramebuffer=g.createFramebuffer(),AA.__webglColorRenderbuffer=[],I.bindFramebuffer(g.FRAMEBUFFER,AA.__webglMultisampledFramebuffer);for(let CA=0;CA<FA.length;CA++){const HA=FA[CA];AA.__webglColorRenderbuffer[CA]=g.createRenderbuffer(),g.bindRenderbuffer(g.RENDERBUFFER,AA.__webglColorRenderbuffer[CA]);const UA=Q.convert(HA.format,HA.colorSpace),mA=Q.convert(HA.type),dA=W(HA.internalFormat,UA,mA,HA.colorSpace,f.isXRRenderTarget===!0),lA=_A(f);g.renderbufferStorageMultisample(g.RENDERBUFFER,lA,dA,f.width,f.height),g.framebufferRenderbuffer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0+CA,g.RENDERBUFFER,AA.__webglColorRenderbuffer[CA])}g.bindRenderbuffer(g.RENDERBUFFER,null),f.depthBuffer&&(AA.__webglDepthRenderbuffer=g.createRenderbuffer(),V(AA.__webglDepthRenderbuffer,f,!0)),I.bindFramebuffer(g.FRAMEBUFFER,null)}}if(wA){I.bindTexture(g.TEXTURE_CUBE_MAP,hA.__webglTexture),xA(g.TEXTURE_CUBE_MAP,S,YA);for(let FA=0;FA<6;FA++)AI(AA.__webglFramebuffer[FA],f,S,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+FA);q(S,YA)&&x(g.TEXTURE_CUBE_MAP),I.unbindTexture()}else if(MA){const FA=f.texture;for(let CA=0,HA=FA.length;CA<HA;CA++){const UA=FA[CA],mA=C.get(UA);I.bindTexture(g.TEXTURE_2D,mA.__webglTexture),xA(g.TEXTURE_2D,UA,YA),AI(AA.__webglFramebuffer,f,UA,g.COLOR_ATTACHMENT0+CA,g.TEXTURE_2D),q(UA,YA)&&x(g.TEXTURE_2D)}I.unbindTexture()}else{let FA=g.TEXTURE_2D;(f.isWebGL3DRenderTarget||f.isWebGLArrayRenderTarget)&&(t?FA=f.isWebGL3DRenderTarget?g.TEXTURE_3D:g.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),I.bindTexture(FA,hA.__webglTexture),xA(FA,S,YA),AI(AA.__webglFramebuffer,f,S,g.COLOR_ATTACHMENT0,FA),q(S,YA)&&x(FA),I.unbindTexture()}f.depthBuffer&&LA(f)}function yI(f){const S=L(f)||t,AA=f.isWebGLMultipleRenderTargets===!0?f.texture:[f.texture];for(let hA=0,wA=AA.length;hA<wA;hA++){const MA=AA[hA];if(q(MA,S)){const YA=f.isWebGLCubeRenderTarget?g.TEXTURE_CUBE_MAP:g.TEXTURE_2D,FA=C.get(MA).__webglTexture;I.bindTexture(YA,FA),x(YA),I.unbindTexture()}}}function II(f){if(t&&f.samples>0&&FI(f)===!1){const S=f.isWebGLMultipleRenderTargets?f.texture:[f.texture],AA=f.width,hA=f.height;let wA=g.COLOR_BUFFER_BIT;const MA=[],YA=f.stencilBuffer?g.DEPTH_STENCIL_ATTACHMENT:g.DEPTH_ATTACHMENT,FA=C.get(f),CA=f.isWebGLMultipleRenderTargets===!0;if(CA)for(let HA=0;HA<S.length;HA++)I.bindFramebuffer(g.FRAMEBUFFER,FA.__webglMultisampledFramebuffer),g.framebufferRenderbuffer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0+HA,g.RENDERBUFFER,null),I.bindFramebuffer(g.FRAMEBUFFER,FA.__webglFramebuffer),g.framebufferTexture2D(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0+HA,g.TEXTURE_2D,null,0);I.bindFramebuffer(g.READ_FRAMEBUFFER,FA.__webglMultisampledFramebuffer),I.bindFramebuffer(g.DRAW_FRAMEBUFFER,FA.__webglFramebuffer);for(let HA=0;HA<S.length;HA++){MA.push(g.COLOR_ATTACHMENT0+HA),f.depthBuffer&&MA.push(YA);const UA=FA.__ignoreDepthValues!==void 0?FA.__ignoreDepthValues:!1;if(UA===!1&&(f.depthBuffer&&(wA|=g.DEPTH_BUFFER_BIT),f.stencilBuffer&&(wA|=g.STENCIL_BUFFER_BIT)),CA&&g.framebufferRenderbuffer(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.RENDERBUFFER,FA.__webglColorRenderbuffer[HA]),UA===!0&&(g.invalidateFramebuffer(g.READ_FRAMEBUFFER,[YA]),g.invalidateFramebuffer(g.DRAW_FRAMEBUFFER,[YA])),CA){const mA=C.get(S[HA]).__webglTexture;g.framebufferTexture2D(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,mA,0)}g.blitFramebuffer(0,0,AA,hA,0,0,AA,hA,wA,g.NEAREST),R&&g.invalidateFramebuffer(g.READ_FRAMEBUFFER,MA)}if(I.bindFramebuffer(g.READ_FRAMEBUFFER,null),I.bindFramebuffer(g.DRAW_FRAMEBUFFER,null),CA)for(let HA=0;HA<S.length;HA++){I.bindFramebuffer(g.FRAMEBUFFER,FA.__webglMultisampledFramebuffer),g.framebufferRenderbuffer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0+HA,g.RENDERBUFFER,FA.__webglColorRenderbuffer[HA]);const UA=C.get(S[HA]).__webglTexture;I.bindFramebuffer(g.FRAMEBUFFER,FA.__webglFramebuffer),g.framebufferTexture2D(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0+HA,g.TEXTURE_2D,UA,0)}I.bindFramebuffer(g.DRAW_FRAMEBUFFER,FA.__webglMultisampledFramebuffer)}}function _A(f){return Math.min(G,f.samples)}function FI(f){const S=C.get(f);return t&&f.samples>0&&A.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function _I(f){const S=o.render.frame;M.get(f)!==S&&(M.set(f,S),f.update())}function $I(f,S){const AA=f.colorSpace,hA=f.format,wA=f.type;return f.isCompressedTexture===!0||f.format===ht||AA!==KC&&AA!==bB&&(AA===QI?t===!1?A.has("EXT_sRGB")===!0&&hA===DC?(f.format=ht,f.minFilter=vg,f.generateMipmaps=!1):S=Pa.sRGBToLinear(S):(hA!==DC||wA!==aB)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",AA)),S}this.allocateTextureUnit=iA,this.resetTextureUnits=BA,this.setTexture2D=oA,this.setTexture2DArray=uA,this.setTexture3D=O,this.setTextureCube=sA,this.rebindTextures=BI,this.setupRenderTarget=vA,this.updateRenderTargetMipmap=yI,this.updateMultisampleRenderTarget=II,this.setupDepthRenderbuffer=LA,this.setupFrameBufferTexture=AI,this.useMultisampledRTT=FI}function zN(g,A,I){const C=I.isWebGL2;function B(Q,o=bB){let t;if(Q===aB)return g.UNSIGNED_BYTE;if(Q===xa)return g.UNSIGNED_SHORT_4_4_4_4;if(Q===ba)return g.UNSIGNED_SHORT_5_5_5_1;if(Q===LG)return g.BYTE;if(Q===fG)return g.SHORT;if(Q===Zt)return g.UNSIGNED_SHORT;if(Q===ma)return g.INT;if(Q===sB)return g.UNSIGNED_INT;if(Q===DB)return g.FLOAT;if(Q===tE)return C?g.HALF_FLOAT:(t=A.get("OES_texture_half_float"),t!==null?t.HALF_FLOAT_OES:null);if(Q===uG)return g.ALPHA;if(Q===DC)return g.RGBA;if(Q===HG)return g.LUMINANCE;if(Q===pG)return g.LUMINANCE_ALPHA;if(Q===xB)return g.DEPTH_COMPONENT;if(Q===RQ)return g.DEPTH_STENCIL;if(Q===ht)return t=A.get("EXT_sRGB"),t!==null?t.SRGB_ALPHA_EXT:null;if(Q===qG)return g.RED;if(Q===Ta)return g.RED_INTEGER;if(Q===mG)return g.RG;if(Q===Va)return g.RG_INTEGER;if(Q===Wa)return g.RGBA_INTEGER;if(Q===Mo||Q===Uo||Q===So||Q===Ko)if(o===QI)if(t=A.get("WEBGL_compressed_texture_s3tc_srgb"),t!==null){if(Q===Mo)return t.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Q===Uo)return t.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Q===So)return t.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Q===Ko)return t.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(t=A.get("WEBGL_compressed_texture_s3tc"),t!==null){if(Q===Mo)return t.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Q===Uo)return t.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Q===So)return t.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Q===Ko)return t.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Q===wD||Q===GD||Q===rD||Q===cD)if(t=A.get("WEBGL_compressed_texture_pvrtc"),t!==null){if(Q===wD)return t.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Q===GD)return t.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Q===rD)return t.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Q===cD)return t.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Q===xG)return t=A.get("WEBGL_compressed_texture_etc1"),t!==null?t.COMPRESSED_RGB_ETC1_WEBGL:null;if(Q===FD||Q===RD)if(t=A.get("WEBGL_compressed_texture_etc"),t!==null){if(Q===FD)return o===QI?t.COMPRESSED_SRGB8_ETC2:t.COMPRESSED_RGB8_ETC2;if(Q===RD)return o===QI?t.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:t.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(Q===ND||Q===yD||Q===MD||Q===UD||Q===SD||Q===KD||Q===lD||Q===kD||Q===dD||Q===JD||Q===YD||Q===LD||Q===fD||Q===uD)if(t=A.get("WEBGL_compressed_texture_astc"),t!==null){if(Q===ND)return o===QI?t.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:t.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Q===yD)return o===QI?t.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:t.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Q===MD)return o===QI?t.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:t.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Q===UD)return o===QI?t.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:t.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Q===SD)return o===QI?t.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:t.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Q===KD)return o===QI?t.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:t.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Q===lD)return o===QI?t.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:t.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Q===kD)return o===QI?t.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:t.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Q===dD)return o===QI?t.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:t.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Q===JD)return o===QI?t.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:t.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Q===YD)return o===QI?t.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:t.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Q===LD)return o===QI?t.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:t.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Q===fD)return o===QI?t.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:t.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Q===uD)return o===QI?t.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:t.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Q===lo)if(t=A.get("EXT_texture_compression_bptc"),t!==null){if(Q===lo)return o===QI?t.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:t.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(Q===bG||Q===HD||Q===pD||Q===qD)if(t=A.get("EXT_texture_compression_rgtc"),t!==null){if(Q===lo)return t.COMPRESSED_RED_RGTC1_EXT;if(Q===HD)return t.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Q===pD)return t.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Q===qD)return t.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return Q===mB?C?g.UNSIGNED_INT_24_8:(t=A.get("WEBGL_depth_texture"),t!==null?t.UNSIGNED_INT_24_8_WEBGL:null):g[Q]!==void 0?g[Q]:null}return{convert:B}}class _N extends Xg{constructor(A=[]){super(),this.isArrayCamera=!0,this.cameras=A}}class hQ extends xg{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $N={type:"move"};class $o{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hQ,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hQ,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hQ,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(A){return this._targetRay!==null&&this._targetRay.dispatchEvent(A),this._grip!==null&&this._grip.dispatchEvent(A),this._hand!==null&&this._hand.dispatchEvent(A),this}connect(A){if(A&&A.hand){const I=this._hand;if(I)for(const C of A.hand.values())this._getHandJoint(I,C)}return this.dispatchEvent({type:"connected",data:A}),this}disconnect(A){return this.dispatchEvent({type:"disconnected",data:A}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(A,I,C){let B=null,Q=null,o=null;const t=this._targetRay,D=this._grip,e=this._hand;if(A&&I.session.visibilityState!=="visible-blurred"){if(e&&A.hand){o=!0;for(const y of A.hand.values()){const r=I.getJointPose(y,C),h=this._getHandJoint(e,y);r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=r.radius),h.visible=r!==null}const w=e.joints["index-finger-tip"],G=e.joints["thumb-tip"],c=w.position.distanceTo(G.position),R=.02,M=.005;e.inputState.pinching&&c>R+M?(e.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:A.handedness,target:this})):!e.inputState.pinching&&c<=R-M&&(e.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:A.handedness,target:this}))}else D!==null&&A.gripSpace&&(Q=I.getPose(A.gripSpace,C),Q!==null&&(D.matrix.fromArray(Q.transform.matrix),D.matrix.decompose(D.position,D.rotation,D.scale),D.matrixWorldNeedsUpdate=!0,Q.linearVelocity?(D.hasLinearVelocity=!0,D.linearVelocity.copy(Q.linearVelocity)):D.hasLinearVelocity=!1,Q.angularVelocity?(D.hasAngularVelocity=!0,D.angularVelocity.copy(Q.angularVelocity)):D.hasAngularVelocity=!1));t!==null&&(B=I.getPose(A.targetRaySpace,C),B===null&&Q!==null&&(B=Q),B!==null&&(t.matrix.fromArray(B.transform.matrix),t.matrix.decompose(t.position,t.rotation,t.scale),t.matrixWorldNeedsUpdate=!0,B.linearVelocity?(t.hasLinearVelocity=!0,t.linearVelocity.copy(B.linearVelocity)):t.hasLinearVelocity=!1,B.angularVelocity?(t.hasAngularVelocity=!0,t.angularVelocity.copy(B.angularVelocity)):t.hasAngularVelocity=!1,this.dispatchEvent($N)))}return t!==null&&(t.visible=B!==null),D!==null&&(D.visible=Q!==null),e!==null&&(e.visible=o!==null),this}_getHandJoint(A,I){if(A.joints[I.jointName]===void 0){const C=new hQ;C.matrixAutoUpdate=!1,C.visible=!1,A.joints[I.jointName]=C,A.add(C)}return A.joints[I.jointName]}}class Ay extends mg{constructor(A,I,C,B,Q,o,t,D,e,w){if(w=w!==void 0?w:xB,w!==xB&&w!==RQ)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");C===void 0&&w===xB&&(C=sB),C===void 0&&w===RQ&&(C=mB),super(null,B,Q,o,t,D,w,C,e),this.isDepthTexture=!0,this.image={width:A,height:I},this.magFilter=t!==void 0?t:Fg,this.minFilter=D!==void 0?D:Fg,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(A){return super.copy(A),this.compareFunction=A.compareFunction,this}toJSON(A){const I=super.toJSON(A);return this.compareFunction!==null&&(I.compareFunction=this.compareFunction),I}}class Iy extends YQ{constructor(A,I){super();const C=this;let B=null,Q=1,o=null,t="local-floor",D=1,e=null,w=null,G=null,c=null,R=null,M=null;const y=I.getContextAttributes();let r=null,h=null;const J=[],K=[];let L=null;const H=new Xg;H.layers.enable(1),H.viewport=new ng;const q=new Xg;q.layers.enable(2),q.viewport=new ng;const x=[H,q],W=new _N;W.layers.enable(1),W.layers.enable(2);let l=null,u=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(O){L=O},this.getController=function(O){let sA=J[O];return sA===void 0&&(sA=new $o,J[O]=sA),sA.getTargetRaySpace()},this.getControllerGrip=function(O){let sA=J[O];return sA===void 0&&(sA=new $o,J[O]=sA),sA.getGripSpace()},this.getHand=function(O){let sA=J[O];return sA===void 0&&(sA=new $o,J[O]=sA),sA.getHandSpace()};function EA(O){const sA=K.indexOf(O.inputSource);if(sA===-1)return;const DA=J[sA];DA!==void 0&&(DA.update(O.inputSource,O.frame,e||o),DA.dispatchEvent({type:O.type,data:O.inputSource}))}function aA(){B.removeEventListener("select",EA),B.removeEventListener("selectstart",EA),B.removeEventListener("selectend",EA),B.removeEventListener("squeeze",EA),B.removeEventListener("squeezestart",EA),B.removeEventListener("squeezeend",EA),B.removeEventListener("end",aA),B.removeEventListener("inputsourceschange",X);for(let O=0;O<J.length;O++){const sA=K[O];sA!==null&&(K[O]=null,J[O].disconnect(sA))}l=null,u=null,A.setRenderTarget(r),R=null,c=null,G=null,B=null,h=null,uA.stop(),C.isPresenting=!1,C.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){Q=O,C.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){t=O,C.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return e||o},this.setReferenceSpace=function(O){e=O},this.getBaseLayer=function(){return c!==null?c:R},this.getBinding=function(){return G},this.getFrame=function(){return M},this.getSession=function(){return B},this.setSession=async function(O){if(B=O,B!==null){if(r=A.getRenderTarget(),B.addEventListener("select",EA),B.addEventListener("selectstart",EA),B.addEventListener("selectend",EA),B.addEventListener("squeeze",EA),B.addEventListener("squeezestart",EA),B.addEventListener("squeezeend",EA),B.addEventListener("end",aA),B.addEventListener("inputsourceschange",X),y.xrCompatible!==!0&&await I.makeXRCompatible(),B.renderState.layers===void 0||A.capabilities.isWebGL2===!1){const sA={antialias:B.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:Q};R=new XRWebGLLayer(B,I,sA),B.updateRenderState({baseLayer:R}),h=new OB(R.framebufferWidth,R.framebufferHeight,{format:DC,type:aB,colorSpace:A.outputColorSpace,stencilBuffer:y.stencil})}else{let sA=null,DA=null,SA=null;y.depth&&(SA=y.stencil?I.DEPTH24_STENCIL8:I.DEPTH_COMPONENT24,sA=y.stencil?RQ:xB,DA=y.stencil?mB:sB);const kA={colorFormat:I.RGBA8,depthFormat:SA,scaleFactor:Q};G=new XRWebGLBinding(B,I),c=G.createProjectionLayer(kA),B.updateRenderState({layers:[c]}),h=new OB(c.textureWidth,c.textureHeight,{format:DC,type:aB,depthTexture:new Ay(c.textureWidth,c.textureHeight,DA,void 0,void 0,void 0,void 0,void 0,void 0,sA),stencilBuffer:y.stencil,colorSpace:A.outputColorSpace,samples:y.antialias?4:0});const xA=A.properties.get(h);xA.__ignoreDepthValues=c.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(D),e=null,o=await B.requestReferenceSpace(t),uA.setContext(B),uA.start(),C.isPresenting=!0,C.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(B!==null)return B.environmentBlendMode};function X(O){for(let sA=0;sA<O.removed.length;sA++){const DA=O.removed[sA],SA=K.indexOf(DA);SA>=0&&(K[SA]=null,J[SA].disconnect(DA))}for(let sA=0;sA<O.added.length;sA++){const DA=O.added[sA];let SA=K.indexOf(DA);if(SA===-1){for(let xA=0;xA<J.length;xA++)if(xA>=K.length){K.push(DA),SA=xA;break}else if(K[xA]===null){K[xA]=DA,SA=xA;break}if(SA===-1)break}const kA=J[SA];kA&&kA.connect(DA)}}const _=new P,$=new P;function tA(O,sA,DA){_.setFromMatrixPosition(sA.matrixWorld),$.setFromMatrixPosition(DA.matrixWorld);const SA=_.distanceTo($),kA=sA.projectionMatrix.elements,xA=DA.projectionMatrix.elements,$A=kA[14]/(kA[10]-1),JA=kA[14]/(kA[10]+1),nI=(kA[9]+1)/kA[5],AI=(kA[9]-1)/kA[5],V=(kA[8]-1)/kA[0],GA=(xA[8]+1)/xA[0],LA=$A*V,BI=$A*GA,vA=SA/(-V+GA),yI=vA*-V;sA.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(yI),O.translateZ(vA),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const II=$A+vA,_A=JA+vA,FI=LA-yI,_I=BI+(SA-yI),$I=nI*JA/_A*II,f=AI*JA/_A*II;O.projectionMatrix.makePerspective(FI,_I,$I,f,II,_A),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function BA(O,sA){sA===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(sA.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCameraXR=function(O){if(B===null)return O;L&&(O=L),W.near=q.near=H.near=O.near,W.far=q.far=H.far=O.far,(l!==W.near||u!==W.far)&&(B.updateRenderState({depthNear:W.near,depthFar:W.far}),l=W.near,u=W.far);const sA=O.parent,DA=W.cameras;BA(W,sA);for(let SA=0;SA<DA.length;SA++)BA(DA[SA],sA);return DA.length===2?tA(W,H,q):W.projectionMatrix.copy(H.projectionMatrix),L&&iA(W,sA),W};function iA(O,sA){const DA=L;sA===null?DA.matrix.copy(O.matrixWorld):(DA.matrix.copy(sA.matrixWorld),DA.matrix.invert(),DA.matrix.multiply(O.matrixWorld)),DA.matrix.decompose(DA.position,DA.quaternion,DA.scale),DA.updateMatrixWorld(!0);const SA=DA.children;for(let kA=0,xA=SA.length;kA<xA;kA++)SA[kA].updateMatrixWorld(!0);DA.projectionMatrix.copy(O.projectionMatrix),DA.projectionMatrixInverse.copy(O.projectionMatrixInverse),DA.isPerspectiveCamera&&(DA.fov=wt*2*Math.atan(1/DA.projectionMatrix.elements[5]),DA.zoom=1)}this.getFoveation=function(){if(!(c===null&&R===null))return D},this.setFoveation=function(O){D=O,c!==null&&(c.fixedFoveation=O),R!==null&&R.fixedFoveation!==void 0&&(R.fixedFoveation=O)};let nA=null;function oA(O,sA){if(w=sA.getViewerPose(e||o),M=sA,w!==null){const DA=w.views;R!==null&&(A.setRenderTargetFramebuffer(h,R.framebuffer),A.setRenderTarget(h));let SA=!1;DA.length!==W.cameras.length&&(W.cameras.length=0,SA=!0);for(let kA=0;kA<DA.length;kA++){const xA=DA[kA];let $A=null;if(R!==null)$A=R.getViewport(xA);else{const nI=G.getViewSubImage(c,xA);$A=nI.viewport,kA===0&&(A.setRenderTargetTextures(h,nI.colorTexture,c.ignoreDepthValues?void 0:nI.depthStencilTexture),A.setRenderTarget(h))}let JA=x[kA];JA===void 0&&(JA=new Xg,JA.layers.enable(kA),JA.viewport=new ng,x[kA]=JA),JA.matrix.fromArray(xA.transform.matrix),JA.matrix.decompose(JA.position,JA.quaternion,JA.scale),JA.projectionMatrix.fromArray(xA.projectionMatrix),JA.projectionMatrixInverse.copy(JA.projectionMatrix).invert(),JA.viewport.set($A.x,$A.y,$A.width,$A.height),kA===0&&(W.matrix.copy(JA.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),SA===!0&&W.cameras.push(JA)}}for(let DA=0;DA<J.length;DA++){const SA=K[DA],kA=J[DA];SA!==null&&kA!==void 0&&kA.update(SA,sA,e||o)}nA&&nA(O,sA),sA.detectedPlanes&&C.dispatchEvent({type:"planesdetected",data:sA}),M=null}const uA=new En;uA.setAnimationLoop(oA),this.setAnimationLoop=function(O){nA=O},this.dispose=function(){}}}function gy(g,A){function I(r,h){r.matrixAutoUpdate===!0&&r.updateMatrix(),h.value.copy(r.matrix)}function C(r,h){h.color.getRGB(r.fogColor.value,gn(g)),h.isFog?(r.fogNear.value=h.near,r.fogFar.value=h.far):h.isFogExp2&&(r.fogDensity.value=h.density)}function B(r,h,J,K,L){h.isMeshBasicMaterial||h.isMeshLambertMaterial?Q(r,h):h.isMeshToonMaterial?(Q(r,h),G(r,h)):h.isMeshPhongMaterial?(Q(r,h),w(r,h)):h.isMeshStandardMaterial?(Q(r,h),c(r,h),h.isMeshPhysicalMaterial&&R(r,h,L)):h.isMeshMatcapMaterial?(Q(r,h),M(r,h)):h.isMeshDepthMaterial?Q(r,h):h.isMeshDistanceMaterial?(Q(r,h),y(r,h)):h.isMeshNormalMaterial?Q(r,h):h.isLineBasicMaterial?(o(r,h),h.isLineDashedMaterial&&t(r,h)):h.isPointsMaterial?D(r,h,J,K):h.isSpriteMaterial?e(r,h):h.isShadowMaterial?(r.color.value.copy(h.color),r.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function Q(r,h){r.opacity.value=h.opacity,h.color&&r.diffuse.value.copy(h.color),h.emissive&&r.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(r.map.value=h.map,I(h.map,r.mapTransform)),h.alphaMap&&(r.alphaMap.value=h.alphaMap,I(h.alphaMap,r.alphaMapTransform)),h.bumpMap&&(r.bumpMap.value=h.bumpMap,I(h.bumpMap,r.bumpMapTransform),r.bumpScale.value=h.bumpScale,h.side===Sg&&(r.bumpScale.value*=-1)),h.normalMap&&(r.normalMap.value=h.normalMap,I(h.normalMap,r.normalMapTransform),r.normalScale.value.copy(h.normalScale),h.side===Sg&&r.normalScale.value.negate()),h.displacementMap&&(r.displacementMap.value=h.displacementMap,I(h.displacementMap,r.displacementMapTransform),r.displacementScale.value=h.displacementScale,r.displacementBias.value=h.displacementBias),h.emissiveMap&&(r.emissiveMap.value=h.emissiveMap,I(h.emissiveMap,r.emissiveMapTransform)),h.specularMap&&(r.specularMap.value=h.specularMap,I(h.specularMap,r.specularMapTransform)),h.alphaTest>0&&(r.alphaTest.value=h.alphaTest);const J=A.get(h).envMap;if(J&&(r.envMap.value=J,r.flipEnvMap.value=J.isCubeTexture&&J.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=h.reflectivity,r.ior.value=h.ior,r.refractionRatio.value=h.refractionRatio),h.lightMap){r.lightMap.value=h.lightMap;const K=g.useLegacyLights===!0?Math.PI:1;r.lightMapIntensity.value=h.lightMapIntensity*K,I(h.lightMap,r.lightMapTransform)}h.aoMap&&(r.aoMap.value=h.aoMap,r.aoMapIntensity.value=h.aoMapIntensity,I(h.aoMap,r.aoMapTransform))}function o(r,h){r.diffuse.value.copy(h.color),r.opacity.value=h.opacity,h.map&&(r.map.value=h.map,I(h.map,r.mapTransform))}function t(r,h){r.dashSize.value=h.dashSize,r.totalSize.value=h.dashSize+h.gapSize,r.scale.value=h.scale}function D(r,h,J,K){r.diffuse.value.copy(h.color),r.opacity.value=h.opacity,r.size.value=h.size*J,r.scale.value=K*.5,h.map&&(r.map.value=h.map,I(h.map,r.uvTransform)),h.alphaMap&&(r.alphaMap.value=h.alphaMap,I(h.alphaMap,r.alphaMapTransform)),h.alphaTest>0&&(r.alphaTest.value=h.alphaTest)}function e(r,h){r.diffuse.value.copy(h.color),r.opacity.value=h.opacity,r.rotation.value=h.rotation,h.map&&(r.map.value=h.map,I(h.map,r.mapTransform)),h.alphaMap&&(r.alphaMap.value=h.alphaMap,I(h.alphaMap,r.alphaMapTransform)),h.alphaTest>0&&(r.alphaTest.value=h.alphaTest)}function w(r,h){r.specular.value.copy(h.specular),r.shininess.value=Math.max(h.shininess,1e-4)}function G(r,h){h.gradientMap&&(r.gradientMap.value=h.gradientMap)}function c(r,h){r.metalness.value=h.metalness,h.metalnessMap&&(r.metalnessMap.value=h.metalnessMap,I(h.metalnessMap,r.metalnessMapTransform)),r.roughness.value=h.roughness,h.roughnessMap&&(r.roughnessMap.value=h.roughnessMap,I(h.roughnessMap,r.roughnessMapTransform)),A.get(h).envMap&&(r.envMapIntensity.value=h.envMapIntensity)}function R(r,h,J){r.ior.value=h.ior,h.sheen>0&&(r.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),r.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(r.sheenColorMap.value=h.sheenColorMap,I(h.sheenColorMap,r.sheenColorMapTransform)),h.sheenRoughnessMap&&(r.sheenRoughnessMap.value=h.sheenRoughnessMap,I(h.sheenRoughnessMap,r.sheenRoughnessMapTransform))),h.clearcoat>0&&(r.clearcoat.value=h.clearcoat,r.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(r.clearcoatMap.value=h.clearcoatMap,I(h.clearcoatMap,r.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(r.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,I(h.clearcoatRoughnessMap,r.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(r.clearcoatNormalMap.value=h.clearcoatNormalMap,I(h.clearcoatNormalMap,r.clearcoatNormalMapTransform),r.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Sg&&r.clearcoatNormalScale.value.negate())),h.iridescence>0&&(r.iridescence.value=h.iridescence,r.iridescenceIOR.value=h.iridescenceIOR,r.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(r.iridescenceMap.value=h.iridescenceMap,I(h.iridescenceMap,r.iridescenceMapTransform)),h.iridescenceThicknessMap&&(r.iridescenceThicknessMap.value=h.iridescenceThicknessMap,I(h.iridescenceThicknessMap,r.iridescenceThicknessMapTransform))),h.transmission>0&&(r.transmission.value=h.transmission,r.transmissionSamplerMap.value=J.texture,r.transmissionSamplerSize.value.set(J.width,J.height),h.transmissionMap&&(r.transmissionMap.value=h.transmissionMap,I(h.transmissionMap,r.transmissionMapTransform)),r.thickness.value=h.thickness,h.thicknessMap&&(r.thicknessMap.value=h.thicknessMap,I(h.thicknessMap,r.thicknessMapTransform)),r.attenuationDistance.value=h.attenuationDistance,r.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(r.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(r.anisotropyMap.value=h.anisotropyMap,I(h.anisotropyMap,r.anisotropyMapTransform))),r.specularIntensity.value=h.specularIntensity,r.specularColor.value.copy(h.specularColor),h.specularColorMap&&(r.specularColorMap.value=h.specularColorMap,I(h.specularColorMap,r.specularColorMapTransform)),h.specularIntensityMap&&(r.specularIntensityMap.value=h.specularIntensityMap,I(h.specularIntensityMap,r.specularIntensityMapTransform))}function M(r,h){h.matcap&&(r.matcap.value=h.matcap)}function y(r,h){const J=A.get(h).light;r.referencePosition.value.setFromMatrixPosition(J.matrixWorld),r.nearDistance.value=J.shadow.camera.near,r.farDistance.value=J.shadow.camera.far}return{refreshFogUniforms:C,refreshMaterialUniforms:B}}function Cy(g,A,I,C){let B={},Q={},o=[];const t=I.isWebGL2?g.getParameter(g.MAX_UNIFORM_BUFFER_BINDINGS):0;function D(J,K){const L=K.program;C.uniformBlockBinding(J,L)}function e(J,K){let L=B[J.id];L===void 0&&(M(J),L=w(J),B[J.id]=L,J.addEventListener("dispose",r));const H=K.program;C.updateUBOMapping(J,H);const q=A.render.frame;Q[J.id]!==q&&(c(J),Q[J.id]=q)}function w(J){const K=G();J.__bindingPointIndex=K;const L=g.createBuffer(),H=J.__size,q=J.usage;return g.bindBuffer(g.UNIFORM_BUFFER,L),g.bufferData(g.UNIFORM_BUFFER,H,q),g.bindBuffer(g.UNIFORM_BUFFER,null),g.bindBufferBase(g.UNIFORM_BUFFER,K,L),L}function G(){for(let J=0;J<t;J++)if(o.indexOf(J)===-1)return o.push(J),J;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(J){const K=B[J.id],L=J.uniforms,H=J.__cache;g.bindBuffer(g.UNIFORM_BUFFER,K);for(let q=0,x=L.length;q<x;q++){const W=L[q];if(R(W,q,H)===!0){const l=W.__offset,u=Array.isArray(W.value)?W.value:[W.value];let EA=0;for(let aA=0;aA<u.length;aA++){const X=u[aA],_=y(X);typeof X=="number"?(W.__data[0]=X,g.bufferSubData(g.UNIFORM_BUFFER,l+EA,W.__data)):X.isMatrix3?(W.__data[0]=X.elements[0],W.__data[1]=X.elements[1],W.__data[2]=X.elements[2],W.__data[3]=X.elements[0],W.__data[4]=X.elements[3],W.__data[5]=X.elements[4],W.__data[6]=X.elements[5],W.__data[7]=X.elements[0],W.__data[8]=X.elements[6],W.__data[9]=X.elements[7],W.__data[10]=X.elements[8],W.__data[11]=X.elements[0]):(X.toArray(W.__data,EA),EA+=_.storage/Float32Array.BYTES_PER_ELEMENT)}g.bufferSubData(g.UNIFORM_BUFFER,l,W.__data)}}g.bindBuffer(g.UNIFORM_BUFFER,null)}function R(J,K,L){const H=J.value;if(L[K]===void 0){if(typeof H=="number")L[K]=H;else{const q=Array.isArray(H)?H:[H],x=[];for(let W=0;W<q.length;W++)x.push(q[W].clone());L[K]=x}return!0}else if(typeof H=="number"){if(L[K]!==H)return L[K]=H,!0}else{const q=Array.isArray(L[K])?L[K]:[L[K]],x=Array.isArray(H)?H:[H];for(let W=0;W<q.length;W++){const l=q[W];if(l.equals(x[W])===!1)return l.copy(x[W]),!0}}return!1}function M(J){const K=J.uniforms;let L=0;const H=16;let q=0;for(let x=0,W=K.length;x<W;x++){const l=K[x],u={boundary:0,storage:0},EA=Array.isArray(l.value)?l.value:[l.value];for(let aA=0,X=EA.length;aA<X;aA++){const _=EA[aA],$=y(_);u.boundary+=$.boundary,u.storage+=$.storage}if(l.__data=new Float32Array(u.storage/Float32Array.BYTES_PER_ELEMENT),l.__offset=L,x>0){q=L%H;const aA=H-q;q!==0&&aA-u.boundary<0&&(L+=H-q,l.__offset=L)}L+=u.storage}return q=L%H,q>0&&(L+=H-q),J.__size=L,J.__cache={},this}function y(J){const K={boundary:0,storage:0};return typeof J=="number"?(K.boundary=4,K.storage=4):J.isVector2?(K.boundary=8,K.storage=8):J.isVector3||J.isColor?(K.boundary=16,K.storage=12):J.isVector4?(K.boundary=16,K.storage=16):J.isMatrix3?(K.boundary=48,K.storage=48):J.isMatrix4?(K.boundary=64,K.storage=64):J.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",J),K}function r(J){const K=J.target;K.removeEventListener("dispose",r);const L=o.indexOf(K.__bindingPointIndex);o.splice(L,1),g.deleteBuffer(B[K.id]),delete B[K.id],delete Q[K.id]}function h(){for(const J in B)g.deleteBuffer(B[J]);o=[],B={},Q={}}return{bind:D,update:e,dispose:h}}function By(){const g=di("canvas");return g.style.display="block",g}class en{constructor(A={}){const{canvas:I=By(),context:C=null,depth:B=!0,stencil:Q=!0,alpha:o=!1,antialias:t=!1,premultipliedAlpha:D=!0,preserveDrawingBuffer:e=!1,powerPreference:w="default",failIfMajorPerformanceCaveat:G=!1}=A;this.isWebGLRenderer=!0;let c;C!==null?c=C.getContextAttributes().alpha:c=o;const R=new Uint32Array(4),M=new Int32Array(4);let y=null,r=null;const h=[],J=[];this.domElement=I,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=QI,this.useLegacyLights=!0,this.toneMapping=zC,this.toneMappingExposure=1;const K=this;let L=!1,H=0,q=0,x=null,W=-1,l=null;const u=new ng,EA=new ng;let aA=null;const X=new lI(0);let _=0,$=I.width,tA=I.height,BA=1,iA=null,nA=null;const oA=new ng(0,0,$,tA),uA=new ng(0,0,$,tA);let O=!1;const sA=new Qn;let DA=!1,SA=!1,kA=null;const xA=new Ig,$A=new MI,JA=new P,nI={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function AI(){return x===null?BA:1}let V=C;function GA(U,a){for(let Z=0;Z<U.length;Z++){const T=U[Z],gA=I.getContext(T,a);if(gA!==null)return gA}return null}try{const U={alpha:!0,depth:B,stencil:Q,antialias:t,premultipliedAlpha:D,preserveDrawingBuffer:e,powerPreference:w,failIfMajorPerformanceCaveat:G};if("setAttribute"in I&&I.setAttribute("data-engine",`three.js r${Ot}`),I.addEventListener("webglcontextlost",yA,!1),I.addEventListener("webglcontextrestored",j,!1),I.addEventListener("webglcontextcreationerror",cA,!1),V===null){const a=["webgl2","webgl","experimental-webgl"];if(K.isWebGL1Renderer===!0&&a.shift(),V=GA(a,U),V===null)throw GA(a)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let LA,BI,vA,yI,II,_A,FI,_I,$I,f,S,AA,hA,wA,MA,YA,FA,CA,HA,UA,mA,dA,lA,EI;function NI(){LA=new hR(V),BI=new oR(V,LA,A),LA.init(BI),dA=new zN(V,LA,BI),vA=new PN(V,LA,BI),yI=new rR(V),II=new uN,_A=new jN(V,LA,vA,II,BI,dA,yI),FI=new sR(K),_I=new nR(K),$I=new kr(V,BI),lA=new ER(V,LA,$I,BI),f=new wR(V,$I,yI,lA),S=new NR(V,f,$I,yI),HA=new RR(V,BI,_A),YA=new tR(II),AA=new fN(K,FI,_I,LA,BI,lA,YA),hA=new gy(K,II),wA=new pN,MA=new VN(LA,BI),CA=new QR(K,FI,_I,vA,S,c,D),FA=new XN(K,S,BI),EI=new Cy(V,yI,BI,vA),UA=new iR(V,LA,yI,BI),mA=new GR(V,LA,yI,BI),yI.programs=AA.programs,K.capabilities=BI,K.extensions=LA,K.properties=II,K.renderLists=wA,K.shadowMap=FA,K.state=vA,K.info=yI}NI();const p=new Iy(K,V);this.xr=p,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const U=LA.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=LA.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return BA},this.setPixelRatio=function(U){U!==void 0&&(BA=U,this.setSize($,tA,!1))},this.getSize=function(U){return U.set($,tA)},this.setSize=function(U,a,Z=!0){if(p.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=U,tA=a,I.width=Math.floor(U*BA),I.height=Math.floor(a*BA),Z===!0&&(I.style.width=U+"px",I.style.height=a+"px"),this.setViewport(0,0,U,a)},this.getDrawingBufferSize=function(U){return U.set($*BA,tA*BA).floor()},this.setDrawingBufferSize=function(U,a,Z){$=U,tA=a,BA=Z,I.width=Math.floor(U*Z),I.height=Math.floor(a*Z),this.setViewport(0,0,U,a)},this.getCurrentViewport=function(U){return U.copy(u)},this.getViewport=function(U){return U.copy(oA)},this.setViewport=function(U,a,Z,T){U.isVector4?oA.set(U.x,U.y,U.z,U.w):oA.set(U,a,Z,T),vA.viewport(u.copy(oA).multiplyScalar(BA).floor())},this.getScissor=function(U){return U.copy(uA)},this.setScissor=function(U,a,Z,T){U.isVector4?uA.set(U.x,U.y,U.z,U.w):uA.set(U,a,Z,T),vA.scissor(EA.copy(uA).multiplyScalar(BA).floor())},this.getScissorTest=function(){return O},this.setScissorTest=function(U){vA.setScissorTest(O=U)},this.setOpaqueSort=function(U){iA=U},this.setTransparentSort=function(U){nA=U},this.getClearColor=function(U){return U.copy(CA.getClearColor())},this.setClearColor=function(){CA.setClearColor.apply(CA,arguments)},this.getClearAlpha=function(){return CA.getClearAlpha()},this.setClearAlpha=function(){CA.setClearAlpha.apply(CA,arguments)},this.clear=function(U=!0,a=!0,Z=!0){let T=0;if(U){let gA=!1;if(x!==null){const KA=x.texture.format;gA=KA===Wa||KA===Va||KA===Ta}if(gA){const KA=x.texture.type,pA=KA===aB||KA===sB||KA===Zt||KA===mB||KA===xa||KA===ba,bA=CA.getClearColor(),TA=CA.getClearAlpha(),zA=bA.r,OA=bA.g,PA=bA.b,SI=II.get(x).__webglFramebuffer;pA?(R[0]=zA,R[1]=OA,R[2]=PA,R[3]=TA,V.clearBufferuiv(V.COLOR,SI,R)):(M[0]=zA,M[1]=OA,M[2]=PA,M[3]=TA,V.clearBufferiv(V.COLOR,SI,M))}else T|=V.COLOR_BUFFER_BIT}a&&(T|=V.DEPTH_BUFFER_BIT),Z&&(T|=V.STENCIL_BUFFER_BIT),V.clear(T)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){I.removeEventListener("webglcontextlost",yA,!1),I.removeEventListener("webglcontextrestored",j,!1),I.removeEventListener("webglcontextcreationerror",cA,!1),wA.dispose(),MA.dispose(),II.dispose(),FI.dispose(),_I.dispose(),S.dispose(),lA.dispose(),EI.dispose(),AA.dispose(),p.dispose(),p.removeEventListener("sessionstart",m),p.removeEventListener("sessionend",rg),kA&&(kA.dispose(),kA=null),wI.stop()};function yA(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const U=yI.autoReset,a=FA.enabled,Z=FA.autoUpdate,T=FA.needsUpdate,gA=FA.type;NI(),yI.autoReset=U,FA.enabled=a,FA.autoUpdate=Z,FA.needsUpdate=T,FA.type=gA}function cA(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function eA(U){const a=U.target;a.removeEventListener("dispose",eA),gI(a)}function gI(U){kI(U),II.remove(U)}function kI(U){const a=II.get(U).programs;a!==void 0&&(a.forEach(function(Z){AA.releaseProgram(Z)}),U.isShaderMaterial&&AA.releaseShaderCache(U))}this.renderBufferDirect=function(U,a,Z,T,gA,KA){a===null&&(a=nI);const pA=gA.isMesh&&gA.matrixWorld.determinant()<0,bA=CC(U,a,Z,T,gA);vA.setMaterial(T,pA);let TA=Z.index,zA=1;T.wireframe===!0&&(TA=f.getWireframeAttribute(Z),zA=2);const OA=Z.drawRange,PA=Z.attributes.position;let SI=OA.start*zA,VI=(OA.start+OA.count)*zA;KA!==null&&(SI=Math.max(SI,KA.start*zA),VI=Math.min(VI,(KA.start+KA.count)*zA)),TA!==null?(SI=Math.max(SI,0),VI=Math.min(VI,TA.count)):PA!=null&&(SI=Math.max(SI,0),VI=Math.min(VI,PA.count));const hg=VI-SI;if(hg<0||hg===1/0)return;lA.setup(gA,T,bA,Z,TA);let dg,HI=UA;if(TA!==null&&(dg=$I.get(TA),HI=mA,HI.setIndex(dg)),gA.isMesh)T.wireframe===!0?(vA.setLineWidth(T.wireframeLinewidth*AI()),HI.setMode(V.LINES)):HI.setMode(V.TRIANGLES);else if(gA.isLine){let sI=T.linewidth;sI===void 0&&(sI=1),vA.setLineWidth(sI*AI()),gA.isLineSegments?HI.setMode(V.LINES):gA.isLineLoop?HI.setMode(V.LINE_LOOP):HI.setMode(V.LINE_STRIP)}else gA.isPoints?HI.setMode(V.POINTS):gA.isSprite&&HI.setMode(V.TRIANGLES);if(gA.isInstancedMesh)HI.renderInstances(SI,hg,gA.count);else if(Z.isInstancedBufferGeometry){const sI=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,CB=Math.min(Z.instanceCount,sI);HI.renderInstances(SI,hg,CB)}else HI.render(SI,hg)},this.compile=function(U,a){function Z(T,gA,KA){T.transparent===!0&&T.side===vC&&T.forceSinglePass===!1?(T.side=Sg,T.needsUpdate=!0,eI(T,gA,KA),T.side=wB,T.needsUpdate=!0,eI(T,gA,KA),T.side=vC):eI(T,gA,KA)}r=MA.get(U),r.init(),J.push(r),U.traverseVisible(function(T){T.isLight&&T.layers.test(a.layers)&&(r.pushLight(T),T.castShadow&&r.pushShadow(T))}),r.setupLights(K.useLegacyLights),U.traverse(function(T){const gA=T.material;if(gA)if(Array.isArray(gA))for(let KA=0;KA<gA.length;KA++){const pA=gA[KA];Z(pA,U,T)}else Z(gA,U,T)}),J.pop(),r=null};let UI=null;function fC(U){UI&&UI(U)}function m(){wI.stop()}function rg(){wI.start()}const wI=new En;wI.setAnimationLoop(fC),typeof self<"u"&&wI.setContext(self),this.setAnimationLoop=function(U){UI=U,p.setAnimationLoop(U),U===null?wI.stop():wI.start()},p.addEventListener("sessionstart",m),p.addEventListener("sessionend",rg),this.render=function(U,a){if(a!==void 0&&a.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),a.parent===null&&a.matrixWorldAutoUpdate===!0&&a.updateMatrixWorld(),p.enabled===!0&&p.isPresenting===!0&&(a=p.updateCameraXR(a)),U.isScene===!0&&U.onBeforeRender(K,U,a,x),r=MA.get(U,J.length),r.init(),J.push(r),xA.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),sA.setFromProjectionMatrix(xA),SA=this.localClippingEnabled,DA=YA.init(this.clippingPlanes,SA),y=wA.get(U,h.length),y.init(),h.push(y),KE(U,a,0,K.sortObjects),y.finish(),K.sortObjects===!0&&y.sort(iA,nA),DA===!0&&YA.beginShadows();const Z=r.state.shadowsArray;if(FA.render(Z,U,a),DA===!0&&YA.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,CA.render(y,U),r.setupLights(K.useLegacyLights),a.isArrayCamera){const T=a.cameras;for(let gA=0,KA=T.length;gA<KA;gA++){const pA=T[gA];lE(y,U,pA,pA.viewport)}}else lE(y,U,a);x!==null&&(_A.updateMultisampleRenderTarget(x),_A.updateRenderTargetMipmap(x)),U.isScene===!0&&U.onAfterRender(K,U,a),lA.resetDefaultState(),W=-1,l=null,J.pop(),J.length>0?r=J[J.length-1]:r=null,h.pop(),h.length>0?y=h[h.length-1]:y=null};function KE(U,a,Z,T){if(U.visible===!1)return;if(U.layers.test(a.layers)){if(U.isGroup)Z=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(a);else if(U.isLight)r.pushLight(U),U.castShadow&&r.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||sA.intersectsSprite(U)){T&&JA.setFromMatrixPosition(U.matrixWorld).applyMatrix4(xA);const pA=S.update(U),bA=U.material;bA.visible&&y.push(U,pA,bA,Z,JA.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||sA.intersectsObject(U))){U.isSkinnedMesh&&U.skeleton.frame!==yI.render.frame&&(U.skeleton.update(),U.skeleton.frame=yI.render.frame);const pA=S.update(U),bA=U.material;if(T&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),JA.copy(U.boundingSphere.center)):(pA.boundingSphere===null&&pA.computeBoundingSphere(),JA.copy(pA.boundingSphere.center)),JA.applyMatrix4(U.matrixWorld).applyMatrix4(xA)),Array.isArray(bA)){const TA=pA.groups;for(let zA=0,OA=TA.length;zA<OA;zA++){const PA=TA[zA],SI=bA[PA.materialIndex];SI&&SI.visible&&y.push(U,pA,SI,Z,JA.z,PA)}}else bA.visible&&y.push(U,pA,bA,Z,JA.z,null)}}const KA=U.children;for(let pA=0,bA=KA.length;pA<bA;pA++)KE(KA[pA],a,Z,T)}function lE(U,a,Z,T){const gA=U.opaque,KA=U.transmissive,pA=U.transparent;r.setupLightsView(Z),DA===!0&&YA.setGlobalState(K.clippingPlanes,Z),KA.length>0&&eo(gA,KA,a,Z),T&&vA.viewport(u.copy(T)),gA.length>0&&XB(gA,a,Z),KA.length>0&&XB(KA,a,Z),pA.length>0&&XB(pA,a,Z),vA.buffers.depth.setTest(!0),vA.buffers.depth.setMask(!0),vA.buffers.color.setMask(!0),vA.setPolygonOffset(!1)}function eo(U,a,Z,T){const gA=BI.isWebGL2;kA===null&&(kA=new OB(1,1,{generateMipmaps:!0,type:LA.has("EXT_color_buffer_half_float")?tE:aB,minFilter:oE,samples:gA&&t===!0?4:0})),K.getDrawingBufferSize($A),gA?kA.setSize($A.x,$A.y):kA.setSize(Gt($A.x),Gt($A.y));const KA=K.getRenderTarget();K.setRenderTarget(kA),K.getClearColor(X),_=K.getClearAlpha(),_<1&&K.setClearColor(16777215,.5),K.clear();const pA=K.toneMapping;K.toneMapping=zC,XB(U,Z,T),_A.updateMultisampleRenderTarget(kA),_A.updateRenderTargetMipmap(kA);let bA=!1;for(let TA=0,zA=a.length;TA<zA;TA++){const OA=a[TA],PA=OA.object,SI=OA.geometry,VI=OA.material,hg=OA.group;if(VI.side===vC&&PA.layers.test(T.layers)){const dg=VI.side;VI.side=Sg,VI.needsUpdate=!0,bQ(PA,Z,T,SI,VI,hg),VI.side=dg,VI.needsUpdate=!0,bA=!0}}bA===!0&&(_A.updateMultisampleRenderTarget(kA),_A.updateRenderTargetMipmap(kA)),K.setRenderTarget(KA),K.setClearColor(X,_),K.toneMapping=pA}function XB(U,a,Z){const T=a.isScene===!0?a.overrideMaterial:null;for(let gA=0,KA=U.length;gA<KA;gA++){const pA=U[gA],bA=pA.object,TA=pA.geometry,zA=T===null?pA.material:T,OA=pA.group;bA.layers.test(Z.layers)&&bQ(bA,a,Z,TA,zA,OA)}}function bQ(U,a,Z,T,gA,KA){U.onBeforeRender(K,a,Z,T,gA,KA),U.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),gA.onBeforeRender(K,a,Z,T,U,KA),gA.transparent===!0&&gA.side===vC&&gA.forceSinglePass===!1?(gA.side=Sg,gA.needsUpdate=!0,K.renderBufferDirect(Z,a,T,gA,U,KA),gA.side=wB,gA.needsUpdate=!0,K.renderBufferDirect(Z,a,T,gA,U,KA),gA.side=vC):K.renderBufferDirect(Z,a,T,gA,U,KA),U.onAfterRender(K,a,Z,T,gA,KA)}function eI(U,a,Z){a.isScene!==!0&&(a=nI);const T=II.get(U),gA=r.state.lights,KA=r.state.shadowsArray,pA=gA.state.version,bA=AA.getParameters(U,gA.state,KA,a,Z),TA=AA.getProgramCacheKey(bA);let zA=T.programs;T.environment=U.isMeshStandardMaterial?a.environment:null,T.fog=a.fog,T.envMap=(U.isMeshStandardMaterial?_I:FI).get(U.envMap||T.environment),zA===void 0&&(U.addEventListener("dispose",eA),zA=new Map,T.programs=zA);let OA=zA.get(TA);if(OA!==void 0){if(T.currentProgram===OA&&T.lightsStateVersion===pA)return kE(U,bA),OA}else bA.uniforms=AA.getUniforms(U),U.onBuild(Z,bA,K),U.onBeforeCompile(bA,K),OA=AA.acquireProgram(bA,TA),zA.set(TA,OA),T.uniforms=bA.uniforms;const PA=T.uniforms;(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(PA.clippingPlanes=YA.uniform),kE(U,bA),T.needsLights=ao(U),T.lightsStateVersion=pA,T.needsLights&&(PA.ambientLightColor.value=gA.state.ambient,PA.lightProbe.value=gA.state.probe,PA.directionalLights.value=gA.state.directional,PA.directionalLightShadows.value=gA.state.directionalShadow,PA.spotLights.value=gA.state.spot,PA.spotLightShadows.value=gA.state.spotShadow,PA.rectAreaLights.value=gA.state.rectArea,PA.ltc_1.value=gA.state.rectAreaLTC1,PA.ltc_2.value=gA.state.rectAreaLTC2,PA.pointLights.value=gA.state.point,PA.pointLightShadows.value=gA.state.pointShadow,PA.hemisphereLights.value=gA.state.hemi,PA.directionalShadowMap.value=gA.state.directionalShadowMap,PA.directionalShadowMatrix.value=gA.state.directionalShadowMatrix,PA.spotShadowMap.value=gA.state.spotShadowMap,PA.spotLightMatrix.value=gA.state.spotLightMatrix,PA.spotLightMap.value=gA.state.spotLightMap,PA.pointShadowMap.value=gA.state.pointShadowMap,PA.pointShadowMatrix.value=gA.state.pointShadowMatrix);const SI=OA.getUniforms(),VI=ci.seqWithValue(SI.seq,PA);return T.currentProgram=OA,T.uniformsList=VI,OA}function kE(U,a){const Z=II.get(U);Z.outputColorSpace=a.outputColorSpace,Z.instancing=a.instancing,Z.skinning=a.skinning,Z.morphTargets=a.morphTargets,Z.morphNormals=a.morphNormals,Z.morphColors=a.morphColors,Z.morphTargetsCount=a.morphTargetsCount,Z.numClippingPlanes=a.numClippingPlanes,Z.numIntersection=a.numClipIntersection,Z.vertexAlphas=a.vertexAlphas,Z.vertexTangents=a.vertexTangents,Z.toneMapping=a.toneMapping}function CC(U,a,Z,T,gA){a.isScene!==!0&&(a=nI),_A.resetTextureUnits();const KA=a.fog,pA=T.isMeshStandardMaterial?a.environment:null,bA=x===null?K.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:KC,TA=(T.isMeshStandardMaterial?_I:FI).get(T.envMap||pA),zA=T.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,OA=!!Z.attributes.tangent&&(!!T.normalMap||T.anisotropy>0),PA=!!Z.morphAttributes.position,SI=!!Z.morphAttributes.normal,VI=!!Z.morphAttributes.color,hg=T.toneMapped?K.toneMapping:zC,dg=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,HI=dg!==void 0?dg.length:0,sI=II.get(T),CB=r.state.lights;if(DA===!0&&(SA===!0||U!==l)){const XI=U===l&&T.id===W;YA.setState(T,U,XI)}let GI=!1;T.version===sI.__version?(sI.needsLights&&sI.lightsStateVersion!==CB.state.version||sI.outputColorSpace!==bA||gA.isInstancedMesh&&sI.instancing===!1||!gA.isInstancedMesh&&sI.instancing===!0||gA.isSkinnedMesh&&sI.skinning===!1||!gA.isSkinnedMesh&&sI.skinning===!0||sI.envMap!==TA||T.fog===!0&&sI.fog!==KA||sI.numClippingPlanes!==void 0&&(sI.numClippingPlanes!==YA.numPlanes||sI.numIntersection!==YA.numIntersection)||sI.vertexAlphas!==zA||sI.vertexTangents!==OA||sI.morphTargets!==PA||sI.morphNormals!==SI||sI.morphColors!==VI||sI.toneMapping!==hg||BI.isWebGL2===!0&&sI.morphTargetsCount!==HI)&&(GI=!0):(GI=!0,sI.__version=T.version);let HC=sI.currentProgram;GI===!0&&(HC=eI(T,a,gA));let yB=!1,MB=!1,UB=!1;const sg=HC.getUniforms(),rC=sI.uniforms;if(vA.useProgram(HC.program)&&(yB=!0,MB=!0,UB=!0),T.id!==W&&(W=T.id,MB=!0),yB||l!==U){if(sg.setValue(V,"projectionMatrix",U.projectionMatrix),BI.logarithmicDepthBuffer&&sg.setValue(V,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),l!==U&&(l=U,MB=!0,UB=!0),T.isShaderMaterial||T.isMeshPhongMaterial||T.isMeshToonMaterial||T.isMeshStandardMaterial||T.envMap){const XI=sg.map.cameraPosition;XI!==void 0&&XI.setValue(V,JA.setFromMatrixPosition(U.matrixWorld))}(T.isMeshPhongMaterial||T.isMeshToonMaterial||T.isMeshLambertMaterial||T.isMeshBasicMaterial||T.isMeshStandardMaterial||T.isShaderMaterial)&&sg.setValue(V,"isOrthographic",U.isOrthographicCamera===!0),(T.isMeshPhongMaterial||T.isMeshToonMaterial||T.isMeshLambertMaterial||T.isMeshBasicMaterial||T.isMeshStandardMaterial||T.isShaderMaterial||T.isShadowMaterial||gA.isSkinnedMesh)&&sg.setValue(V,"viewMatrix",U.matrixWorldInverse)}if(gA.isSkinnedMesh){sg.setOptional(V,gA,"bindMatrix"),sg.setOptional(V,gA,"bindMatrixInverse");const XI=gA.skeleton;XI&&(BI.floatVertexTextures?(XI.boneTexture===null&&XI.computeBoneTexture(),sg.setValue(V,"boneTexture",XI.boneTexture,_A),sg.setValue(V,"boneTextureSize",XI.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const pI=Z.morphAttributes;if((pI.position!==void 0||pI.normal!==void 0||pI.color!==void 0&&BI.isWebGL2===!0)&&HA.update(gA,Z,HC),(MB||sI.receiveShadow!==gA.receiveShadow)&&(sI.receiveShadow=gA.receiveShadow,sg.setValue(V,"receiveShadow",gA.receiveShadow)),T.isMeshGouraudMaterial&&T.envMap!==null&&(rC.envMap.value=TA,rC.flipEnvMap.value=TA.isCubeTexture&&TA.isRenderTargetTexture===!1?-1:1),MB&&(sg.setValue(V,"toneMappingExposure",K.toneMappingExposure),sI.needsLights&&uC(rC,UB),KA&&T.fog===!0&&hA.refreshFogUniforms(rC,KA),hA.refreshMaterialUniforms(rC,T,BA,tA,kA),ci.upload(V,sI.uniformsList,rC,_A)),T.isShaderMaterial&&T.uniformsNeedUpdate===!0&&(ci.upload(V,sI.uniformsList,rC,_A),T.uniformsNeedUpdate=!1),T.isSpriteMaterial&&sg.setValue(V,"center",gA.center),sg.setValue(V,"modelViewMatrix",gA.modelViewMatrix),sg.setValue(V,"normalMatrix",gA.normalMatrix),sg.setValue(V,"modelMatrix",gA.matrixWorld),T.isShaderMaterial||T.isRawShaderMaterial){const XI=T.uniformsGroups;for(let CI=0,BC=XI.length;CI<BC;CI++)if(BI.isWebGL2){const dE=XI[CI];EI.update(dE,HC),EI.bind(dE,HC)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return HC}function uC(U,a){U.ambientLightColor.needsUpdate=a,U.lightProbe.needsUpdate=a,U.directionalLights.needsUpdate=a,U.directionalLightShadows.needsUpdate=a,U.pointLights.needsUpdate=a,U.pointLightShadows.needsUpdate=a,U.spotLights.needsUpdate=a,U.spotLightShadows.needsUpdate=a,U.rectAreaLights.needsUpdate=a,U.hemisphereLights.needsUpdate=a}function ao(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(U,a,Z){II.get(U.texture).__webglTexture=a,II.get(U.depthTexture).__webglTexture=Z;const T=II.get(U);T.__hasExternalTextures=!0,T.__hasExternalTextures&&(T.__autoAllocateDepthBuffer=Z===void 0,T.__autoAllocateDepthBuffer||LA.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),T.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(U,a){const Z=II.get(U);Z.__webglFramebuffer=a,Z.__useDefaultFramebuffer=a===void 0},this.setRenderTarget=function(U,a=0,Z=0){x=U,H=a,q=Z;let T=!0,gA=null,KA=!1,pA=!1;if(U){const TA=II.get(U);TA.__useDefaultFramebuffer!==void 0?(vA.bindFramebuffer(V.FRAMEBUFFER,null),T=!1):TA.__webglFramebuffer===void 0?_A.setupRenderTarget(U):TA.__hasExternalTextures&&_A.rebindTextures(U,II.get(U.texture).__webglTexture,II.get(U.depthTexture).__webglTexture);const zA=U.texture;(zA.isData3DTexture||zA.isDataArrayTexture||zA.isCompressedArrayTexture)&&(pA=!0);const OA=II.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(gA=OA[a],KA=!0):BI.isWebGL2&&U.samples>0&&_A.useMultisampledRTT(U)===!1?gA=II.get(U).__webglMultisampledFramebuffer:gA=OA,u.copy(U.viewport),EA.copy(U.scissor),aA=U.scissorTest}else u.copy(oA).multiplyScalar(BA).floor(),EA.copy(uA).multiplyScalar(BA).floor(),aA=O;if(vA.bindFramebuffer(V.FRAMEBUFFER,gA)&&BI.drawBuffers&&T&&vA.drawBuffers(U,gA),vA.viewport(u),vA.scissor(EA),vA.setScissorTest(aA),KA){const TA=II.get(U.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+a,TA.__webglTexture,Z)}else if(pA){const TA=II.get(U.texture),zA=a||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,TA.__webglTexture,Z||0,zA)}W=-1},this.readRenderTargetPixels=function(U,a,Z,T,gA,KA,pA){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bA=II.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&pA!==void 0&&(bA=bA[pA]),bA){vA.bindFramebuffer(V.FRAMEBUFFER,bA);try{const TA=U.texture,zA=TA.format,OA=TA.type;if(zA!==DC&&dA.convert(zA)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const PA=OA===tE&&(LA.has("EXT_color_buffer_half_float")||BI.isWebGL2&&LA.has("EXT_color_buffer_float"));if(OA!==aB&&dA.convert(OA)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(OA===DB&&(BI.isWebGL2||LA.has("OES_texture_float")||LA.has("WEBGL_color_buffer_float")))&&!PA){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}a>=0&&a<=U.width-T&&Z>=0&&Z<=U.height-gA&&V.readPixels(a,Z,T,gA,dA.convert(zA),dA.convert(OA),KA)}finally{const TA=x!==null?II.get(x).__webglFramebuffer:null;vA.bindFramebuffer(V.FRAMEBUFFER,TA)}}},this.copyFramebufferToTexture=function(U,a,Z=0){const T=Math.pow(2,-Z),gA=Math.floor(a.image.width*T),KA=Math.floor(a.image.height*T);_A.setTexture2D(a,0),V.copyTexSubImage2D(V.TEXTURE_2D,Z,0,0,U.x,U.y,gA,KA),vA.unbindTexture()},this.copyTextureToTexture=function(U,a,Z,T=0){const gA=a.image.width,KA=a.image.height,pA=dA.convert(Z.format),bA=dA.convert(Z.type);_A.setTexture2D(Z,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Z.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Z.unpackAlignment),a.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,T,U.x,U.y,gA,KA,pA,bA,a.image.data):a.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,T,U.x,U.y,a.mipmaps[0].width,a.mipmaps[0].height,pA,a.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,T,U.x,U.y,pA,bA,a.image),T===0&&Z.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),vA.unbindTexture()},this.copyTextureToTexture3D=function(U,a,Z,T,gA=0){if(K.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const KA=U.max.x-U.min.x+1,pA=U.max.y-U.min.y+1,bA=U.max.z-U.min.z+1,TA=dA.convert(T.format),zA=dA.convert(T.type);let OA;if(T.isData3DTexture)_A.setTexture3D(T,0),OA=V.TEXTURE_3D;else if(T.isDataArrayTexture)_A.setTexture2DArray(T,0),OA=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,T.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,T.unpackAlignment);const PA=V.getParameter(V.UNPACK_ROW_LENGTH),SI=V.getParameter(V.UNPACK_IMAGE_HEIGHT),VI=V.getParameter(V.UNPACK_SKIP_PIXELS),hg=V.getParameter(V.UNPACK_SKIP_ROWS),dg=V.getParameter(V.UNPACK_SKIP_IMAGES),HI=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,HI.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,HI.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,U.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,U.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,U.min.z),Z.isDataTexture||Z.isData3DTexture?V.texSubImage3D(OA,gA,a.x,a.y,a.z,KA,pA,bA,TA,zA,HI.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(OA,gA,a.x,a.y,a.z,KA,pA,bA,TA,HI.data)):V.texSubImage3D(OA,gA,a.x,a.y,a.z,KA,pA,bA,TA,zA,HI),V.pixelStorei(V.UNPACK_ROW_LENGTH,PA),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,SI),V.pixelStorei(V.UNPACK_SKIP_PIXELS,VI),V.pixelStorei(V.UNPACK_SKIP_ROWS,hg),V.pixelStorei(V.UNPACK_SKIP_IMAGES,dg),gA===0&&T.generateMipmaps&&V.generateMipmap(OA),vA.unbindTexture()},this.initTexture=function(U){U.isCubeTexture?_A.setTextureCube(U,0):U.isData3DTexture?_A.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?_A.setTexture2DArray(U,0):_A.setTexture2D(U,0),vA.unbindTexture()},this.resetState=function(){H=0,q=0,x=null,vA.reset(),lA.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return PC}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(A){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!A}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===QI?nB:Oa}set outputEncoding(A){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=A===nB?QI:KC}}class Qy extends en{}Qy.prototype.isWebGL1Renderer=!0;class Ue extends xg{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(A,I){return super.copy(A,I),A.background!==null&&(this.background=A.background.clone()),A.environment!==null&&(this.environment=A.environment.clone()),A.fog!==null&&(this.fog=A.fog.clone()),this.backgroundBlurriness=A.backgroundBlurriness,this.backgroundIntensity=A.backgroundIntensity,A.overrideMaterial!==null&&(this.overrideMaterial=A.overrideMaterial.clone()),this.matrixAutoUpdate=A.matrixAutoUpdate,this}toJSON(A){const I=super.toJSON(A);return this.fog!==null&&(I.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(I.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(I.object.backgroundIntensity=this.backgroundIntensity),I}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(A){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=A}}class zt extends IB{constructor(A=1,I=32,C=16,B=0,Q=Math.PI*2,o=0,t=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:A,widthSegments:I,heightSegments:C,phiStart:B,phiLength:Q,thetaStart:o,thetaLength:t},I=Math.max(3,Math.floor(I)),C=Math.max(2,Math.floor(C));const D=Math.min(o+t,Math.PI);let e=0;const w=[],G=new P,c=new P,R=[],M=[],y=[],r=[];for(let h=0;h<=C;h++){const J=[],K=h/C;let L=0;h===0&&o===0?L=.5/I:h===C&&D===Math.PI&&(L=-.5/I);for(let H=0;H<=I;H++){const q=H/I;G.x=-A*Math.cos(B+q*Q)*Math.sin(o+K*t),G.y=A*Math.cos(o+K*t),G.z=A*Math.sin(B+q*Q)*Math.sin(o+K*t),M.push(G.x,G.y,G.z),c.copy(G).normalize(),y.push(c.x,c.y,c.z),r.push(q+L,1-K),J.push(e++)}w.push(J)}for(let h=0;h<C;h++)for(let J=0;J<I;J++){const K=w[h][J+1],L=w[h][J],H=w[h+1][J],q=w[h+1][J+1];(h!==0||o>0)&&R.push(K,L,q),(h!==C-1||D<Math.PI)&&R.push(L,H,q)}this.setIndex(R),this.setAttribute("position",new SC(M,3)),this.setAttribute("normal",new SC(y,3)),this.setAttribute("uv",new SC(r,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new zt(A.radius,A.widthSegments,A.heightSegments,A.phiStart,A.phiLength,A.thetaStart,A.thetaLength)}}class Ey extends rE{constructor(A){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new lI(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lI(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Za,this.normalScale=new MI(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.defines={STANDARD:""},this.color.copy(A.color),this.roughness=A.roughness,this.metalness=A.metalness,this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.emissive.copy(A.emissive),this.emissiveMap=A.emissiveMap,this.emissiveIntensity=A.emissiveIntensity,this.bumpMap=A.bumpMap,this.bumpScale=A.bumpScale,this.normalMap=A.normalMap,this.normalMapType=A.normalMapType,this.normalScale.copy(A.normalScale),this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.roughnessMap=A.roughnessMap,this.metalnessMap=A.metalnessMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.envMapIntensity=A.envMapIntensity,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.flatShading=A.flatShading,this.fog=A.fog,this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ot}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ot);const Se=new P,iy=new LQ,Ke=new P,cC=new Ig,oy=new Ig;class ty{constructor(A={}){const I=this;let C,B,Q,o;const t={camera:{fov:0,style:""},objects:new WeakMap},D=A.element!==void 0?A.element:document.createElement("div");D.style.overflow="hidden",this.domElement=D;const e=document.createElement("div");e.style.transformOrigin="0 0",e.style.pointerEvents="none",D.appendChild(e);const w=document.createElement("div");w.style.transformStyle="preserve-3d",e.appendChild(w),this.getSize=function(){return{width:C,height:B}},this.render=function(y,r){const h=r.projectionMatrix.elements[5]*o;t.camera.fov!==h&&(e.style.perspective=r.isPerspectiveCamera?h+"px":"",t.camera.fov=h),r.view&&r.view.enabled?(e.style.transform=`translate( ${-r.view.offsetX*(C/r.view.width)}px, ${-r.view.offsetY*(B/r.view.height)}px )`,e.style.transform+=`scale( ${r.view.fullWidth/r.view.width}, ${r.view.fullHeight/r.view.height} )`):e.style.transform="",y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),r.parent===null&&r.matrixWorldAutoUpdate===!0&&r.updateMatrixWorld();let J,K;r.isOrthographicCamera&&(J=-(r.right+r.left)/2,K=(r.top+r.bottom)/2);const L=r.view&&r.view.enabled?r.view.height/r.view.fullHeight:1,q=(r.isOrthographicCamera?`scale( ${L} )scale(`+h+")translate("+G(J)+"px,"+G(K)+"px)"+c(r.matrixWorldInverse):`scale( ${L} )translateZ(`+h+"px)"+c(r.matrixWorldInverse))+"translate("+Q+"px,"+o+"px)";t.camera.style!==q&&(w.style.transform=q,t.camera.style=q),M(y,y,r)},this.setSize=function(y,r){C=y,B=r,Q=C/2,o=B/2,D.style.width=y+"px",D.style.height=r+"px",e.style.width=y+"px",e.style.height=r+"px",w.style.width=y+"px",w.style.height=r+"px"};function G(y){return Math.abs(y)<1e-10?0:y}function c(y){const r=y.elements;return"matrix3d("+G(r[0])+","+G(-r[1])+","+G(r[2])+","+G(r[3])+","+G(r[4])+","+G(-r[5])+","+G(r[6])+","+G(r[7])+","+G(r[8])+","+G(-r[9])+","+G(r[10])+","+G(r[11])+","+G(r[12])+","+G(-r[13])+","+G(r[14])+","+G(r[15])+")"}function R(y){const r=y.elements;return"translate(-50%,-50%)"+("matrix3d("+G(r[0])+","+G(r[1])+","+G(r[2])+","+G(r[3])+","+G(-r[4])+","+G(-r[5])+","+G(-r[6])+","+G(-r[7])+","+G(r[8])+","+G(r[9])+","+G(r[10])+","+G(r[11])+","+G(r[12])+","+G(r[13])+","+G(r[14])+","+G(r[15])+")")}function M(y,r,h,J){if(y.isCSS3DObject){const K=y.visible===!0&&y.layers.test(h.layers)===!0;if(y.element.style.display=K===!0?"":"none",K===!0){y.onBeforeRender(I,r,h);let L;y.isCSS3DSprite?(cC.copy(h.matrixWorldInverse),cC.transpose(),y.rotation2D!==0&&cC.multiply(oy.makeRotationZ(y.rotation2D)),y.matrixWorld.decompose(Se,iy,Ke),cC.setPosition(Se),cC.scale(Ke),cC.elements[3]=0,cC.elements[7]=0,cC.elements[11]=0,cC.elements[15]=1,L=R(cC)):L=R(y.matrixWorld);const H=y.element,q=t.objects.get(y);if(q===void 0||q.style!==L){H.style.transform=L;const x={style:L};t.objects.set(y,x)}H.parentNode!==w&&w.appendChild(H),y.onAfterRender(I,r,h)}}for(let K=0,L=y.children.length;K<L;K++)M(y.children[K],r,h)}}}const le=(g,A)=>{const I=2*Math.PI*A*g;return I/(I+1)},ke=(g,A,I)=>g*A+(1-g)*I;class At{constructor({minCutOff:A,beta:I}){this.minCutOff=A,this.beta=I,this.dCutOff=.001,this.xPrev=null,this.dxPrev=null,this.tPrev=null,this.initialized=!1}reset(){this.initialized=!1}filter(A,I){if(!this.initialized)return this.initialized=!0,this.xPrev=I,this.dxPrev=I.map(()=>0),this.tPrev=A,I;const{xPrev:C,tPrev:B,dxPrev:Q}=this,o=A-B,t=le(o,this.dCutOff),D=[],e=[],w=[];for(let G=0;G<I.length;G++){D[G]=(I[G]-C[G])/o,e[G]=ke(t,D[G],Q[G]);const c=this.minCutOff+this.beta*Math.abs(e[G]),R=le(o,c);w[G]=ke(R,I[G],C[G])}return this.xPrev=w,this.dxPrev=e,this.tPrev=A,w}}const sy=`<div class="mindar-ui-overlay mindar-ui-loading">
  <div class="loader"/>
</div>
`,Dy=`<div class="mindar-ui-overlay mindar-ui-compatibility">
  <div class="content">
    <h1>Failed to launch :(</h1>
    <p>
      Looks like your device/browser is not compatible.
    </p>

    <br/>
    <br/>
    <p>
      Please try the following recommended browsers:
    </p>
    <p>
      For Android device - Chrome
    </p>
    <p>
      For iOS device - Safari
    </p>
  </div>
</div>
`,ey=`<div class="mindar-ui-overlay mindar-ui-scanning">
  <div class="scanning">
    <div class="inner">
      <div class="scanline"/>
    </div>
  </div>
</div>
`,ay=".mindar-ui-overlay{display:flex;align-items:center;justify-content:center;position:absolute;left:0;right:0;top:0;bottom:0;background:transparent;z-index:2}.mindar-ui-overlay.hidden{display:none}.mindar-ui-loading .loader{border:16px solid #222;border-top:16px solid white;opacity:.8;border-radius:50%;width:120px;height:120px;animation:spin 2s linear infinite}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.mindar-ui-compatibility .content{background:black;color:#fff;opacity:.8;text-align:center;margin:20px;padding:20px;min-height:50vh}@media (min-aspect-ratio: 1/1){.mindar-ui-scanning .scanning{width:50vh;height:50vh}}@media (max-aspect-ratio: 1/1){.mindar-ui-scanning .scanning{width:80vw;height:80vw}}.mindar-ui-scanning .scanning .inner{position:relative;width:100%;height:100%;opacity:.8;background:linear-gradient(to right,white 10px,transparent 10px) 0 0,linear-gradient(to right,white 10px,transparent 10px) 0 100%,linear-gradient(to left,white 10px,transparent 10px) 100% 0,linear-gradient(to left,white 10px,transparent 10px) 100% 100%,linear-gradient(to bottom,white 10px,transparent 10px) 0 0,linear-gradient(to bottom,white 10px,transparent 10px) 100% 0,linear-gradient(to top,white 10px,transparent 10px) 0 100%,linear-gradient(to top,white 10px,transparent 10px) 100% 100%;background-repeat:no-repeat;background-size:40px 40px}.mindar-ui-scanning .scanning .inner .scanline{position:absolute;width:100%;height:10px;background:white;animation:move 2s linear infinite}@keyframes move{0%,to{top:0%}50%{top:calc(100% - 10px)}}";class ny{constructor({uiLoading:A,uiScanning:I,uiError:C}){const B=document.createElement("style");B.innerText=ay,document.head.appendChild(B),A==="yes"?this.loadingModal=this._loadHTML(sy):A!=="no"&&(this.loadingModal=document.querySelector(A)),C==="yes"?this.compatibilityModal=this._loadHTML(Dy):C!=="no"&&(this.compatibilityModal=document.querySelector(C)),I==="yes"?this.scanningMask=this._loadHTML(ey):I!=="no"&&(this.scanningMask=document.querySelector(I)),this.hideLoading(),this.hideCompatibility(),this.hideScanning()}showLoading(){this.loadingModal&&this.loadingModal.classList.remove("hidden")}hideLoading(){this.loadingModal&&this.loadingModal.classList.add("hidden")}showCompatibility(){this.compatibilityModal&&this.compatibilityModal.classList.remove("hidden")}hideCompatibility(){this.compatibilityModal&&this.compatibilityModal.classList.add("hidden")}showScanning(){this.scanningMask&&this.scanningMask.classList.remove("hidden")}hideScanning(){this.scanningMask&&this.scanningMask.classList.add("hidden")}_loadHTML(A){const I=document.createElement("template");I.innerHTML=A.trim();const C=I.content.firstChild;return document.getElementsByTagName("body")[0].appendChild(C),C}}var _t=typeof self<"u"?self:{};function an(g,A){A:{for(var I=["CLOSURE_FLAGS"],C=_t,B=0;B<I.length;B++)if((C=C[I[B]])==null){I=null;break A}I=C}return(g=I&&I[g])!=null?g:A}function LB(){throw Error("Invalid UTF8")}function de(g,A){return A=String.fromCharCode.apply(null,A),g==null?A:g+A}let ai,It;const hy=typeof TextDecoder<"u";let Je;const wy=typeof TextEncoder<"u";function nn(g){if(wy)g=(Je||(Je=new TextEncoder)).encode(g);else{let I=0;const C=new Uint8Array(3*g.length);for(let B=0;B<g.length;B++){var A=g.charCodeAt(B);if(128>A)C[I++]=A;else{if(2048>A)C[I++]=A>>6|192;else{if(55296<=A&&57343>=A){if(56319>=A&&B<g.length){const Q=g.charCodeAt(++B);if(56320<=Q&&57343>=Q){A=1024*(A-55296)+Q-56320+65536,C[I++]=A>>18|240,C[I++]=A>>12&63|128,C[I++]=A>>6&63|128,C[I++]=63&A|128;continue}B--}A=65533}C[I++]=A>>12|224,C[I++]=A>>6&63|128}C[I++]=63&A|128}}g=I===C.length?C:C.subarray(0,I)}return g}var sE,hn=an(610401301,!1),$t=an(572417392,!0);const Ye=_t.navigator;function ct(g){return!!hn&&!!sE&&sE.brands.some(({brand:A})=>A&&A.indexOf(g)!=-1)}function Pg(g){var A;return(A=_t.navigator)&&(A=A.userAgent)||(A=""),A.indexOf(g)!=-1}function tB(){return!!hn&&!!sE&&0<sE.brands.length}function gt(){return tB()?ct("Chromium"):(Pg("Chrome")||Pg("CriOS"))&&!(!tB()&&Pg("Edge"))||Pg("Silk")}sE=Ye&&Ye.userAgentData||null;var Gy=!tB()&&(Pg("Trident")||Pg("MSIE"));!Pg("Android")||gt(),gt(),Pg("Safari")&&(gt()||!tB()&&Pg("Coast")||!tB()&&Pg("Opera")||!tB()&&Pg("Edge")||(tB()?ct("Microsoft Edge"):Pg("Edg/"))||tB()&&ct("Opera"));var wn={},AE=null;function ry(g){var A=g.length,I=3*A/4;I%3?I=Math.floor(I):"=.".indexOf(g[A-1])!=-1&&(I="=.".indexOf(g[A-2])!=-1?I-2:I-1);var C=new Uint8Array(I),B=0;return function(Q,o){function t(R){for(;D<Q.length;){var M=Q.charAt(D++),y=AE[M];if(y!=null)return y;if(!/^[\s\xa0]*$/.test(M))throw Error("Unknown base64 encoding at char: "+M)}return R}Gn();for(var D=0;;){var e=t(-1),w=t(0),G=t(64),c=t(64);if(c===64&&e===-1)break;o(e<<2|w>>4),G!=64&&(o(w<<4&240|G>>2),c!=64&&o(G<<6&192|c))}}(g,function(Q){C[B++]=Q}),B!==I?C.subarray(0,B):C}function Gn(){if(!AE){AE={};for(var g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),A=["+/=","+/","-_=","-_.","-_"],I=0;5>I;I++){var C=g.concat(A[I].split(""));wn[I]=C;for(var B=0;B<C.length;B++){var Q=C[B];AE[Q]===void 0&&(AE[Q]=B)}}}}var rn=typeof Uint8Array<"u",cn=!Gy&&typeof btoa=="function";function Le(g){if(!cn){var A;A===void 0&&(A=0),Gn(),A=wn[A];var I=Array(Math.floor(g.length/3)),C=A[64]||"";let D=0,e=0;for(;D<g.length-2;D+=3){var B=g[D],Q=g[D+1],o=g[D+2],t=A[B>>2];B=A[(3&B)<<4|Q>>4],Q=A[(15&Q)<<2|o>>6],o=A[63&o],I[e++]=t+B+Q+o}switch(t=0,o=C,g.length-D){case 2:o=A[(15&(t=g[D+1]))<<2]||C;case 1:g=g[D],I[e]=A[g>>2]+A[(3&g)<<4|t>>4]+o+C}return I.join("")}for(A="",I=0,C=g.length-10240;I<C;)A+=String.fromCharCode.apply(null,g.subarray(I,I+=10240));return A+=String.fromCharCode.apply(null,I?g.subarray(I):g),btoa(A)}const fe=/[-_.]/g,cy={"-":"+",_:"/",".":"="};function Fy(g){return cy[g]||""}function Fn(g){if(!cn)return ry(g);fe.test(g)&&(g=g.replace(fe,Fy)),g=atob(g);const A=new Uint8Array(g.length);for(let I=0;I<g.length;I++)A[I]=g.charCodeAt(I);return A}function Xi(g){return rn&&g!=null&&g instanceof Uint8Array}let ue;function Pi(){return ue||(ue=new Uint8Array(0))}var yQ={};let He;function Rn(g){if(g!==yQ)throw Error("illegal external caller")}function MQ(){return He||(He=new hB(null,yQ))}function As(g){Rn(yQ);var A=g.Z;return(A=A==null||Xi(A)?A:typeof A=="string"?Fn(A):null)==null?A:g.Z=A}var hB=class{constructor(g,A){if(Rn(A),this.Z=g,g!=null&&g.length===0)throw Error("ByteString should be constructed with non-empty values")}wa(){const g=As(this);return g?new Uint8Array(g):Pi()}};function Nn(g,A){return Error(`Invalid wire type: ${g} (at position ${A})`)}function Is(){return Error("Failed to read varint, encoding is invalid.")}function yn(g,A){return Error(`Tried to read past the end of the data ${A} > ${g}`)}function Mn(g){return g.length==0?MQ():new hB(g,yQ)}function gs(g){if(typeof g=="string")return{buffer:Fn(g),L:!1};if(Array.isArray(g))return{buffer:new Uint8Array(g),L:!1};if(g.constructor===Uint8Array)return{buffer:g,L:!1};if(g.constructor===ArrayBuffer)return{buffer:new Uint8Array(g),L:!1};if(g.constructor===hB)return{buffer:As(g)||Pi(),L:!0};if(g instanceof Uint8Array)return{buffer:new Uint8Array(g.buffer,g.byteOffset,g.byteLength),L:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function Cs(){return typeof BigInt=="function"}var Ft=!$t;let pe=!$t;const Ry=typeof Uint8Array.prototype.slice=="function";let Ji,JI=0,jI=0;function TB(g){const A=0>g;let I=(g=Math.abs(g))>>>0;if(g=Math.floor((g-I)/4294967296),A){const[C,B]=Es(I,g);g=B,I=C}JI=I>>>0,jI=g>>>0}function Bs(g){const A=Ji||(Ji=new DataView(new ArrayBuffer(8)));A.setFloat32(0,+g,!0),jI=0,JI=A.getUint32(0,!0)}function Rt(g,A){return 4294967296*A+(g>>>0)}function Qs(g,A){const I=2147483648&A;return I&&(A=~A>>>0,(g=1+~g>>>0)==0&&(A=A+1>>>0)),g=Rt(g,A),I?-g:g}function Yi(g,A){if(g>>>=0,2097151>=(A>>>=0))var I=""+(4294967296*A+g);else Cs()?I=""+(BigInt(A)<<BigInt(32)|BigInt(g)):(g=(16777215&g)+6777216*(I=16777215&(g>>>24|A<<8))+6710656*(A=A>>16&65535),I+=8147497*A,A*=2,1e7<=g&&(I+=Math.floor(g/1e7),g%=1e7),1e7<=I&&(A+=Math.floor(I/1e7),I%=1e7),I=A+qe(I)+qe(g));return I}function qe(g){return g=String(g),"0000000".slice(g.length)+g}function Un(){var g=JI,A=jI;if(2147483648&A)if(Cs())g=""+(BigInt(0|A)<<BigInt(32)|BigInt(g>>>0));else{const[I,C]=Es(g,A);g="-"+Yi(I,C)}else g=Yi(g,A);return g}function ji(g){if(16>g.length)TB(Number(g));else if(Cs())g=BigInt(g),JI=Number(g&BigInt(4294967295))>>>0,jI=Number(g>>BigInt(32)&BigInt(4294967295));else{const A=+(g[0]==="-");jI=JI=0;const I=g.length;for(let C=A,B=(I-A)%6+A;B<=I;C=B,B+=6){const Q=Number(g.slice(C,B));jI*=1e6,JI=1e6*JI+Q,4294967296<=JI&&(jI+=Math.trunc(JI/4294967296),jI>>>=0,JI>>>=0)}if(A){const[C,B]=Es(JI,jI);JI=C,jI=B}}}function Es(g,A){return A=~A,g?g=1+~g:A+=1,[g,A]}function is(g,A){let I,C=0,B=0,Q=0;const o=g.h;let t=g.g;do I=o[t++],C|=(127&I)<<Q,Q+=7;while(32>Q&&128&I);for(32<Q&&(B|=(127&I)>>4),Q=3;32>Q&&128&I;Q+=7)I=o[t++],B|=(127&I)<<Q;if(VB(g,t),128>I)return A(C>>>0,B>>>0);throw Is()}function os(g){let A=0,I=g.g;const C=I+10,B=g.h;for(;I<C;){const Q=B[I++];if(A|=Q,(128&Q)==0)return VB(g,I),!!(127&A)}throw Is()}function GB(g){const A=g.h;let I=g.g,C=A[I++],B=127&C;if(128&C&&(C=A[I++],B|=(127&C)<<7,128&C&&(C=A[I++],B|=(127&C)<<14,128&C&&(C=A[I++],B|=(127&C)<<21,128&C&&(C=A[I++],B|=C<<28,128&C&&128&A[I++]&&128&A[I++]&&128&A[I++]&&128&A[I++]&&128&A[I++])))))throw Is();return VB(g,I),B}function rB(g){return GB(g)>>>0}function Nt(g){var A=g.h;const I=g.g,C=A[I],B=A[I+1],Q=A[I+2];return A=A[I+3],VB(g,g.g+4),(C<<0|B<<8|Q<<16|A<<24)>>>0}function yt(g){var A=Nt(g);g=2*(A>>31)+1;const I=A>>>23&255;return A&=8388607,I==255?A?NaN:1/0*g:I==0?g*Math.pow(2,-149)*A:g*Math.pow(2,I-150)*(A+Math.pow(2,23))}function Ny(g){return GB(g)}function Ct(g,A,{aa:I=!1}={}){g.aa=I,A&&(A=gs(A),g.h=A.buffer,g.m=A.L,g.j=0,g.l=g.h.length,g.g=g.j)}function VB(g,A){if(g.g=A,A>g.l)throw yn(g.l,A)}function Sn(g,A){if(0>A)throw Error(`Tried to read a negative byte length: ${A}`);const I=g.g,C=I+A;if(C>g.l)throw yn(A,g.l-I);return g.g=C,I}function Kn(g,A){if(A==0)return MQ();var I=Sn(g,A);return g.aa&&g.m?I=g.h.subarray(I,I+A):(g=g.h,I=I===(A=I+A)?Pi():Ry?g.slice(I,A):new Uint8Array(g.subarray(I,A))),Mn(I)}var me=[];function ln(g){var A=g.g;if(A.g==A.l)return!1;g.l=g.g.g;var I=rB(g.g);if(A=I>>>3,!(0<=(I&=7)&&5>=I))throw Nn(I,g.l);if(1>A)throw Error(`Invalid field number: ${A} (at position ${g.l})`);return g.m=A,g.h=I,!0}function Fi(g){switch(g.h){case 0:g.h!=0?Fi(g):os(g.g);break;case 1:VB(g=g.g,g.g+8);break;case 2:if(g.h!=2)Fi(g);else{var A=rB(g.g);VB(g=g.g,g.g+A)}break;case 5:VB(g=g.g,g.g+4);break;case 3:for(A=g.m;;){if(!ln(g))throw Error("Unmatched start-group tag: stream EOF");if(g.h==4){if(g.m!=A)throw Error("Unmatched end-group tag");break}Fi(g)}break;default:throw Nn(g.h,g.l)}}function FE(g,A,I){const C=g.g.l,B=rB(g.g),Q=g.g.g+B;let o=Q-C;if(0>=o&&(g.g.l=Q,I(A,g,void 0,void 0,void 0),o=Q-g.g.g),o)throw Error(`Message parsing ended unexpectedly. Expected to read ${B} bytes, instead read ${B-o} bytes, either the data ended unexpectedly or the message misreported its own length`);return g.g.g=Q,g.g.l=C,A}function ts(g){var A=rB(g.g),I=Sn(g=g.g,A);if(g=g.h,hy){var C,B=g;(C=It)||(C=It=new TextDecoder("utf-8",{fatal:!0})),A=I+A,B=I===0&&A===B.length?B:B.subarray(I,A);try{var Q=C.decode(B)}catch(t){if(ai===void 0){try{C.decode(new Uint8Array([128]))}catch{}try{C.decode(new Uint8Array([97])),ai=!0}catch{ai=!1}}throw!ai&&(It=void 0),t}}else{A=(Q=I)+A,I=[];let t,D=null;for(;Q<A;){var o=g[Q++];128>o?I.push(o):224>o?Q>=A?LB():(t=g[Q++],194>o||(192&t)!=128?(Q--,LB()):I.push((31&o)<<6|63&t)):240>o?Q>=A-1?LB():(t=g[Q++],(192&t)!=128||o===224&&160>t||o===237&&160<=t||(192&(C=g[Q++]))!=128?(Q--,LB()):I.push((15&o)<<12|(63&t)<<6|63&C)):244>=o?Q>=A-2?LB():(t=g[Q++],(192&t)!=128||t-144+(o<<28)>>30||(192&(C=g[Q++]))!=128||(192&(B=g[Q++]))!=128?(Q--,LB()):(o=(7&o)<<18|(63&t)<<12|(63&C)<<6|63&B,o-=65536,I.push(55296+(o>>10&1023),56320+(1023&o)))):LB(),8192<=I.length&&(D=de(D,I),I.length=0)}Q=de(D,I)}return Q}function kn(g){const A=rB(g.g);return Kn(g.g,A)}function zi(g,A,I){var C=rB(g.g);for(C=g.g.g+C;g.g.g<C;)I.push(A(g.g))}var ni=[];function xe(g){return g?/^\d+$/.test(g)?(ji(g),new be(JI,jI)):null:Te||(Te=new be(0,0))}var be=class{constructor(g,A){this.h=g>>>0,this.g=A>>>0}};let Te;function Ve(g){return g?/^-?\d+$/.test(g)?(ji(g),new We(JI,jI)):null:Oe||(Oe=new We(0,0))}var We=class{constructor(g,A){this.h=g>>>0,this.g=A>>>0}};let Oe;function Li(g,A,I){for(;0<I||127<A;)g.g.push(127&A|128),A=(A>>>7|I<<25)>>>0,I>>>=7;g.g.push(A)}function RE(g,A){for(;127<A;)g.g.push(127&A|128),A>>>=7;g.g.push(A)}function _i(g,A){if(0<=A)RE(g,A);else{for(let I=0;9>I;I++)g.g.push(127&A|128),A>>=7;g.g.push(1)}}function DE(g,A){g.g.push(A>>>0&255),g.g.push(A>>>8&255),g.g.push(A>>>16&255),g.g.push(A>>>24&255)}function UQ(g,A){A.length!==0&&(g.l.push(A),g.h+=A.length)}function AC(g,A,I){RE(g.g,8*A+I)}function ss(g,A){return AC(g,A,2),A=g.g.end(),UQ(g,A),A.push(g.h),A}function Ds(g,A){var I=A.pop();for(I=g.h+g.g.length()-I;127<I;)A.push(127&I|128),I>>>=7,g.h++;A.push(I),g.h++}function $i(g,A,I){AC(g,A,2),RE(g.g,I.length),UQ(g,g.g.end()),UQ(g,I)}function Mt(g,A,I,C){I!=null&&(A=ss(g,A),C(I,g),Ds(g,A))}class uQ{constructor(A,I,C,B){this.g=A,this.h=I,this.l=C,this.qa=B}}function Ng(g){return Array.prototype.slice.call(g)}function dn(g){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():g}var lC=dn(),Ze=dn("0di"),Ao=lC?(g,A)=>{g[lC]|=A}:(g,A)=>{g.D!==void 0?g.D|=A:Object.defineProperties(g,{D:{value:A,configurable:!0,writable:!0,enumerable:!1}})};function ve(g){const A=TI(g);(1&A)!=1&&(Object.isFrozen(g)&&(g=Ng(g)),OI(g,1|A))}var fi=lC?(g,A)=>{g[lC]&=~A}:(g,A)=>{g.D!==void 0&&(g.D&=~A)};function eg(g,A,I){return I?g|A:g&~A}var TI=lC?g=>0|g[lC]:g=>0|g.D,cI=lC?g=>g[lC]:g=>g.D,OI=lC?(g,A)=>{g[lC]=A}:(g,A)=>{g.D!==void 0?g.D=A:Object.defineProperties(g,{D:{value:A,configurable:!0,writable:!0,enumerable:!1}})};function Xe(){var g=[];return Ao(g,1),g}function HQ(g){return Ao(g,34),g}function yy(g,A){OI(A,-14591&(0|g))}function Ut(g,A){OI(A,-14557&(34|g))}function ui(g){return(g=g>>14&1023)===0?536870912:g}var NE={},Jn={};function Pe(g){return!(!g||typeof g!="object"||g.Na!==Jn)}function BE(g){return g!==null&&typeof g=="object"&&!Array.isArray(g)&&g.constructor===Object}let Yn=!$t;function Ln(g,A,I){if(g!=null){if(typeof g=="string")g=g?new hB(g,yQ):MQ();else if(g.constructor!==hB)if(Xi(g))g=I?Mn(g):g.length?new hB(new Uint8Array(g),yQ):MQ();else{if(!A)throw Error();g=void 0}}return g}function St(g,A,I){if(!Array.isArray(g)||g.length)return!1;const C=TI(g);return!!(1&C)||!(!A||!(Array.isArray(A)?A.includes(I):A.has(I)))&&(OI(g,1|C),!0)}var qB;const je=[];function YC(g){if(2&g)throw Error()}OI(je,55),qB=Object.freeze(je);class Hi{constructor(A,I,C){this.l=0,this.g=A,this.h=I,this.m=C}next(){if(this.l<this.g.length){const A=this.g[this.l++];return{done:!1,value:this.h?this.h.call(this.m,A):A}}return{done:!0,value:void 0}}[Symbol.iterator](){return new Hi(this.g,this.h,this.m)}}var My={};let jC,SQ;function fn(g,A){(A=jC?A[jC]:void 0)&&(g[jC]=Ng(A))}function un(g){return(g=Error(g)).__closure__error__context__984382||(g.__closure__error__context__984382={}),g.__closure__error__context__984382.severity="warning",g}function RB(g){return g==null||typeof g=="number"?g:g==="NaN"||g==="Infinity"||g==="-Infinity"?Number(g):void 0}function Hn(g){return g==null||typeof g=="boolean"?g:typeof g=="number"?!!g:void 0}Object.freeze(new class{}),Object.freeze(new class{});const Uy=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Io(g){const A=typeof g;return A==="number"?Number.isFinite(g):A==="string"&&Uy.test(g)}function pQ(g){if(g==null)return g;if(typeof g=="string"){if(!g)return;g=+g}return typeof g=="number"&&Number.isFinite(g)?0|g:void 0}function Sy(g){if(g==null)return g;if(typeof g=="string"){if(!g)return;g=+g}return typeof g=="number"&&Number.isFinite(g)?g>>>0:void 0}function ze(g){return g[0]!=="-"&&(20>g.length||g.length===20&&184467>Number(g.substring(0,6)))}function pn(g){return g[0]==="-"?20>g.length||g.length===20&&-922337<Number(g.substring(0,7)):19>g.length||g.length===19&&922337>Number(g.substring(0,6))}function es(g){return g=Math.trunc(g),Number.isSafeInteger(g)||(TB(g),g=Qs(JI,jI)),g}function as(g){var A=Math.trunc(Number(g));return Number.isSafeInteger(A)?String(A):((A=g.indexOf("."))!==-1&&(g=g.substring(0,A)),pn(g)||(ji(g),g=Un()),g)}function pi(g){return g==null?g:Io(g)?typeof g=="number"?es(g):as(g):void 0}function yE(g){if(typeof g!="string")throw Error();return g}function ME(g){if(g!=null&&typeof g!="string")throw Error();return g}function eE(g){return g==null||typeof g=="string"?g:void 0}function ns(g,A,I,C){if(g!=null&&typeof g=="object"&&g.W===NE)return g;if(!Array.isArray(g))return I?2&C?(g=A[Ze])?A=g:(HQ((g=new A).s),A=A[Ze]=g):A=new A:A=void 0,A;let B=I=TI(g);return B===0&&(B|=32&C),B|=2&C,B!==I&&OI(g,B),new A(g)}function Ky(g,A,I){if(A){var C=!!C;if(!Io(A=g))throw un("int64");typeof A=="string"?C=as(A):C?(C=Math.trunc(A),Number.isSafeInteger(C)?C=String(C):pn(A=String(C))?C=A:(TB(C),C=Un())):C=es(A)}else C=pi(g);return typeof(I=(g=C)==null?I?0:void 0:g)=="string"&&(C=+I,Number.isSafeInteger(C))?C:I}let qi,mi,_e;function xi(g){switch(typeof g){case"boolean":return mi||(mi=[0,void 0,!0]);case"number":return 0<g?void 0:g===0?_e||(_e=[0,void 0]):[-g,void 0];case"string":return[0,g];case"object":return g}}function WB(g,A){return qn(g,A[0],A[1])}function qn(g,A,I){if(g==null&&(g=qi),qi=void 0,g==null){var C=96;I?(g=[I],C|=512):g=[],A&&(C=-16760833&C|(1023&A)<<14)}else{if(!Array.isArray(g))throw Error();if(64&(C=TI(g)))return SQ&&delete g[SQ],g;if(C|=64,I&&(C|=512,I!==g[0]))throw Error();A:{const B=(I=g).length;if(B){const Q=B-1;if(BE(I[Q])){if(1024<=(A=Q-(+!!(512&(C|=256))-1)))throw Error();C=-16760833&C|(1023&A)<<14;break A}}if(A){if(1024<(A=Math.max(A,B-(+!!(512&C)-1))))throw Error();C=-16760833&C|(1023&A)<<14}}}return OI(g,C),g}let ly=function(){try{return new class extends Map{constructor(){super()}},!1}catch{return!0}}();class Bt{constructor(){this.g=new Map}get(A){return this.g.get(A)}set(A,I){return this.g.set(A,I),this.size=this.g.size,this}delete(A){return A=this.g.delete(A),this.size=this.g.size,A}clear(){this.g.clear(),this.size=this.g.size}has(A){return this.g.has(A)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(A,I){return this.g.forEach(A,I)}[Symbol.iterator](){return this.entries()}}const ky=ly?(Object.setPrototypeOf(Bt.prototype,Map.prototype),Object.defineProperties(Bt.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Bt):class extends Map{constructor(){super()}};function hi(g){return g}function Qt(g){if(2&g.O)throw Error("Cannot mutate an immutable Map")}var zg=class extends ky{constructor(g,A,I=hi,C=hi){super();let B=TI(g);B|=64,OI(g,B),this.O=B,this.V=A,this.R=I||hi,this.Y=this.V?dy:C||hi;for(let Q=0;Q<g.length;Q++){const o=g[Q],t=I(o[0],!1,!0);let D=o[1];A?D===void 0&&(D=null):D=C(o[1],!1,!0,void 0,void 0,B),super.set(t,D)}}pa(g=$e){return this.X(g)}X(g=$e){const A=[],I=super.entries();for(var C;!(C=I.next()).done;)(C=C.value)[0]=g(C[0]),C[1]=g(C[1]),A.push(C);return A}clear(){Qt(this),super.clear()}delete(g){return Qt(this),super.delete(this.R(g,!0,!1))}entries(){var g=this.ma();return new Hi(g,Jy,this)}keys(){return this.Ma()}values(){var g=this.ma();return new Hi(g,zg.prototype.get,this)}forEach(g,A){super.forEach((I,C)=>{g.call(A,this.get(C),C,this)})}set(g,A){return Qt(this),(g=this.R(g,!0,!1))==null?this:A==null?(super.delete(g),this):super.set(g,this.Y(A,!0,!0,this.V,!1,this.O))}Ta(g){const A=this.R(g[0],!1,!0);g=g[1],g=this.V?g===void 0?null:g:this.Y(g,!1,!0,void 0,!1,this.O),super.set(A,g)}has(g){return super.has(this.R(g,!1,!1))}get(g){g=this.R(g,!1,!1);const A=super.get(g);if(A!==void 0){var I=this.V;return I?((I=this.Y(A,!1,!0,I,this.xa,this.O))!==A&&super.set(g,I),I):A}}ma(){return Array.from(super.keys())}Ma(){return super.keys()}[Symbol.iterator](){return this.entries()}};function dy(g,A,I,C,B,Q){return g=ns(g,C,I,Q),B&&(g=go(g)),g}function $e(g){return g}function Jy(g){return[g,this.get(g)]}function hs(g,A,I,C,B,Q){if(g!=null){if(Array.isArray(g))g=B&&g.length==0&&1&TI(g)?void 0:Q&&2&TI(g)?g:ws(g,A,I,C!==void 0,B,Q);else if(BE(g)){const o={};for(let t in g)o[t]=hs(g[t],A,I,C,B,Q);g=o}else g=A(g,C);return g}}function ws(g,A,I,C,B,Q){const o=C||I?TI(g):0;C=C?!!(32&o):void 0;const t=Ng(g);for(let D=0;D<t.length;D++)t[D]=hs(t[D],A,I,C,B,Q);return I&&(fn(t,g),I(o,t)),t}function Yy(g){return hs(g,mn,void 0,void 0,!1,!1)}function mn(g){return g.W===NE?g.toJSON():g instanceof zg?g.pa(Yy):function(A){switch(typeof A){case"number":return isFinite(A)?A:String(A);case"boolean":return A?1:0;case"object":if(A){if(Array.isArray(A))return Yn||!St(A,void 0,9999)?A:void 0;if(Xi(A))return Le(A);if(A instanceof hB){const I=A.Z;return I==null?"":typeof I=="string"?I:A.Z=Le(I)}if(A instanceof zg)return A=A.pa(),Ft||A.length!==0?A:void 0}}return A}(g)}function Kt(g,A,I=Ut){if(g!=null){if(rn&&g instanceof Uint8Array)return A?g:new Uint8Array(g);if(Array.isArray(g)){var C=TI(g);return 2&C?g:(A&&(A=C===0||!!(32&C)&&!(64&C||!(16&C))),A?(OI(g,-12293&(34|C)),g):ws(g,Kt,4&C?Ut:I,!0,!1,!0))}return g.W===NE?(I=g.s,g=2&(C=cI(I))?g:Gs(g,I,C,!0)):g instanceof zg&&(I=HQ(g.X(Kt)),g=new zg(I,g.V,g.R,g.Y)),g}}function Gs(g,A,I,C){return g=g.constructor,qi=A=xn(A,I,C),A=new g(A),qi=void 0,A}function xn(g,A,I){const C=I||2&A?Ut:yy,B=!!(32&A);return g=function(Q,o,t){const D=Ng(Q);var e=D.length;const w=256&o?D[e-1]:void 0;for(e+=w?-1:0,o=512&o?1:0;o<e;o++)D[o]=t(D[o]);if(w){o=D[o]={};for(const G in w)o[G]=t(w[G])}return fn(D,Q),D}(g,A,Q=>Kt(Q,B,C)),Ao(g,32|(I?2:0)),g}function go(g){const A=g.s,I=cI(A);return 2&I?Gs(g,A,I,!1):g}function KQ(g,A){return LC(g=g.s,cI(g),A)}function LC(g,A,I,C){if(I===-1)return null;if(I>=ui(A)){if(256&A)return g[g.length-1][I]}else{var B=g.length;if(C&&256&A&&(C=g[B-1][I])!=null)return C;if((A=I+(+!!(512&A)-1))<B)return g[A]}}function YI(g,A,I,C){const B=g.s;let Q=cI(B);return YC(Q),LI(B,Q,A,I,C),g}function LI(g,A,I,C,B){var Q=ui(A);if(I>=Q||B){if(B=A,256&A)Q=g[g.length-1];else{if(C==null)return B;Q=g[Q+(+!!(512&A)-1)]={},B|=256}return Q[I]=C,B!==A&&OI(g,B),B}return g[I+(+!!(512&A)-1)]=C,256&A&&I in(g=g[g.length-1])&&delete g[I],A}function qQ(g,A,I,C,B){var Q=2&A;let o=LC(g,A,I,B);Array.isArray(o)||(o=qB);const t=!(2&C);C=!(1&C);const D=!!(32&A);let e=TI(o);return e!==0||!D||Q||t?1&e||(e|=1,OI(o,e)):(e|=33,OI(o,e)),Q?(g=!1,2&e||(HQ(o),g=!!(4&e)),(C||g)&&Object.freeze(o)):(Q=!!(2&e)||!!(2048&e),C&&Q?(o=Ng(o),C=1,D&&!t&&(C|=32),OI(o,C),LI(g,A,I,o,B)):t&&32&e&&!Q&&fi(o,32)),o}function Ri(g,A){g=g.s;let I=cI(g);const C=LC(g,I,A),B=RB(C);return B!=null&&B!==C&&LI(g,I,A,B),B}function bn(g){g=g.s;let A=cI(g);const I=LC(g,A,1),C=Ln(I,!0,!!(34&A));return C!=null&&C!==I&&LI(g,A,1,C),C}function wQ(g,A,I){g=g.s;let C=cI(g);const B=2&C?1:2;let Q=Tn(g,C,A);var o=TI(Q);if(!(4&o)){(4&o||Object.isFrozen(Q))&&(Q=Ng(Q),o=vB(o,C,!1),C=LI(g,C,A,Q));var t=0;let D=0;for(;t<Q.length;t++){const e=I(Q[t]);e!=null&&(Q[D++]=e)}D<t&&(Q.length=D),o=eg(o=Vn(o,C,!1),20,!0),o=eg(o,4096,!1),o=eg(o,8192,!1),OI(Q,o),2&o&&Object.freeze(Q)}return QE(o)||(I=o,(o=(t=B===1)?eg(o,2,!0):eg(o,32,!1))!==I&&OI(Q,o),t&&Object.freeze(Q)),B===2&&QE(o)&&(Q=Ng(Q),o=vB(o,C,!1),OI(Q,o),LI(g,C,A,Q)),Q}function Tn(g,A,I){return g=LC(g,A,I),Array.isArray(g)?g:qB}function Vn(g,A,I){return g===0&&(g=vB(g,A,I)),eg(g,1,!0)}function QE(g){return!!(2&g)&&!!(4&g)||!!(2048&g)}let Aa;function Ia(){return Aa??(Aa=new zg(HQ([]),void 0,void 0,void 0,My))}function Wn(g){g=Ng(g);for(let A=0;A<g.length;A++){const I=g[A]=Ng(g[A]);Array.isArray(I[1])&&(I[1]=HQ(I[1]))}return g}function bi(g,A,I){{const o=g.s;let t=cI(o);if(YC(t),I==null)LI(o,t,A);else{var C,B=g=TI(I),Q=!!(2&g)||Object.isFrozen(I);if((C=!Q)&&(C=!1),!(4&g))for(g=21,Q&&(I=Ng(I),B=0,g=vB(g,t,!0)),Q=0;Q<I.length;Q++)I[Q]=yE(I[Q]);C&&(I=Ng(I),B=0,g=vB(g,t,!0)),g!==B&&OI(I,g),LI(o,t,A,I)}}}function UE(g,A,I,C){const B=cI(g);YC(B),g=qQ(g,B,A,2),C=I(C,!!(4&(A=TI(g)))&&!!(4096&A)),g.push(C)}function Ly(g){return g}function Et(g,A){return rs(g=g.s,cI(g),Sh)===A?A:-1}function rs(g,A,I){let C=0;for(let B=0;B<I.length;B++){const Q=I[B];LC(g,A,Q)!=null&&(C!==0&&(A=LI(g,A,C)),C=Q)}return C}function cs(g,A,I,C){let B=cI(g);YC(B);const Q=LC(g,B,I,C);let o;if(Q!=null&&Q.W===NE)return(A=go(Q))!==Q&&LI(g,B,I,A,C),A.s;if(Array.isArray(Q)){const t=TI(Q);o=2&t?xn(Q,t,!1):Q,o=WB(o,A)}else o=WB(void 0,A);return o!==Q&&LI(g,B,I,o,C),o}function On(g,A,I,C){g=g.s;let B=cI(g);const Q=LC(g,B,I,C);return(A=ns(Q,A,!1,B))!==Q&&A!=null&&LI(g,B,I,A,C),A}function rI(g,A,I,C=!1){if((A=On(g,A,I,C))==null)return A;g=g.s;let B=cI(g);if(!(2&B)){const Q=go(A);Q!==A&&LI(g,B,I,A=Q,C)}return A}function Zn(g,A,I,C,B,Q){var o=!!(2&A),t=o?1:2;const D=t===1;t=t===2,B=!!B,Q&&(Q=!o),o=Tn(g,A,C);var e=TI(o);const w=!!(4&e);if(!w){var G=o,c=A;const R=!!(2&(e=Vn(e,A,B)));R&&(c=eg(c,2,!0));let M=!R,y=!0,r=0,h=0;for(;r<G.length;r++){const J=ns(G[r],I,!1,c);if(J instanceof I){if(!R){const K=!!(2&TI(J.s));M&&(M=!K),y&&(y=K)}G[h++]=J}}h<r&&(G.length=h),e=eg(e,4,!0),e=eg(e,16,y),e=eg(e,8,M),OI(G,e),R&&Object.freeze(G)}if(I=!!(8&e)||D&&!o.length,Q&&!I){for(QE(e)&&(o=Ng(o),e=vB(e,A,B),A=LI(g,A,C,o)),Q=o,I=e,G=0;G<Q.length;G++)(e=Q[G])!==(c=go(e))&&(Q[G]=c);I=eg(I,8,!0),I=eg(I,16,!Q.length),OI(Q,I),e=I}return QE(e)||(Q=e,D?e=eg(e,!o.length||16&e&&(!w||32&e)?2:2048,!0):B||(e=eg(e,32,!1)),e!==Q&&OI(o,e),D&&Object.freeze(o)),t&&QE(e)&&(o=Ng(o),e=vB(e,A,B),OI(o,e),LI(g,A,C,o)),o}function AB(g,A,I){g=g.s;const C=cI(g);return Zn(g,C,A,I,!1,!(2&C))}function XA(g,A,I,C,B){return C==null&&(C=void 0),YI(g,I,C,B)}function EE(g,A,I,C){C==null&&(C=void 0),g=g.s;let B=cI(g);YC(B),(I=rs(g,B,I))&&I!==A&&C!=null&&(B=LI(g,B,I)),LI(g,B,A,C)}function vB(g,A,I){return g=eg(g,2,!!(2&A)),g=eg(g,32,!!(32&A)&&I),eg(g,2048,!1)}function lt(g,A,I){g=g.s;const C=cI(g);YC(C),g=Zn(g,C,A,1,!0),A=I??new A,g.push(A),2&TI(A.s)?fi(g,8):fi(g,16)}function jg(g,A){return pQ(KQ(g,A))}function _g(g,A){return eE(KQ(g,A))}function kC(g){return g??0}function ag(g,A){return kC(Ri(g,A))}function aE(g,A,I){if(I!=null&&typeof I!="boolean")throw g=typeof I,Error(`Expected boolean but got ${g!="object"?g:I?Array.isArray(I)?"array":g:"null"}: ${I}`);YI(g,A,I)}function dC(g,A,I){if(I!=null){if(typeof I!="number"||!Number.isFinite(I))throw un("int32");I|=0}YI(g,A,I)}function jA(g,A,I){if(I!=null&&typeof I!="number")throw Error(`Value of float/double field must be a number, found ${typeof I}: ${I}`);YI(g,A,I)}function aC(g,A,I){A.g?A.m(g,A.g,A.h,I,!0):A.m(g,A.h,I,!0)}zg.prototype.toJSON=void 0,zg.prototype.Na=Jn;var fA=class{constructor(g,A){this.s=qn(g,A)}toJSON(){return vn(this,ws(this.s,mn,void 0,void 0,!1,!1),!0)}l(){var g=qM;return g.g?g.l(this,g.g,g.h,!0):g.l(this,g.h,g.defaultValue,!0)}clone(){const g=this.s;return Gs(this,g,cI(g),!1)}L(){return!!(2&TI(this.s))}};function vn(g,A,I){const C=g.constructor.A;var B=cI(I?g.s:A),Q=ui(B),o=!1;if(C&&Yn){if(!I){var t;if((A=Ng(A)).length&&BE(t=A[A.length-1])){for(o=0;o<C.length;o++)if(C[o]>=Q){Object.assign(A[A.length-1]={},t);break}}o=!0}var D;Q=A,I=!I,g=ui(t=cI(g.s)),t=+!!(512&t)-1;for(let r=0;r<C.length;r++){var e=C[r];if(e<g){var w=Q[e+=t];w==null?Q[e]=I?qB:Xe():I&&w!==qB&&ve(w)}else{if(!D){var G=void 0;Q.length&&BE(G=Q[Q.length-1])?D=G:Q.push(D={})}w=D[e],D[e]==null?D[e]=I?qB:Xe():I&&w!==qB&&ve(w)}}}if(!(D=A.length))return A;let c,R;if(BE(G=A[D-1])){A:{var M=G;for(var y in Q={},I=!1,M)g=M[y],Array.isArray(g)&&(t=g,(!pe&&St(g,C,+y)||!Ft&&Pe(g)&&g.size===0)&&(g=null),g!=t&&(I=!0)),g!=null?Q[y]=g:I=!0;if(I){for(let r in Q){M=Q;break A}M=null}}M!=G&&(c=!0),D--}for(B=+!!(512&B)-1;0<D&&((G=A[y=D-1])==null||!pe&&St(G,C,y-B)||!Ft&&Pe(G)&&G.size===0);D--)R=!0;return(c||R)&&(A=o?A:Array.prototype.slice.call(A,0,D),o&&(A.length=D),M&&A.push(M)),A}function Xn(g){return Array.isArray(g)?g[0]instanceof uQ?g:[Wy,g]:[g,void 0]}function mQ(g,A){if(Array.isArray(A)){var I=TI(A);if(4&I)return A;for(var C=0,B=0;C<A.length;C++){const Q=g(A[C]);Q!=null&&(A[B++]=Q)}return B<C&&(A.length=B),OI(A,-12289&(5|I)),2&I&&Object.freeze(A),A}}fA.prototype.W=NE,fA.prototype.toString=function(){return vn(this,this.s,!1).toString()};const ga=Symbol();function Fs(g){let A=g[ga];if(!A){const I=Pn(g),C=Ns(g),B=C.g;A=B?(Q,o)=>B(Q,o,C):(Q,o)=>{for(;ln(o)&&o.h!=4;){var t=o.m,D=C[t];if(!D){var e=C.ha;e&&(e=e[t])&&(D=C[t]=fy(e))}D&&D(o,Q,t)||(t=(D=o).l,Fi(D),D.ga?D=void 0:(e=D.g.g-t,D.g.g=t,D=Kn(D.g,e)),t=Q,D&&(jC||(jC=Symbol()),(e=t[jC])?e.push(D):t[jC]=[D]))}I===kt||I===dt||I.Oa||(Q[SQ||(SQ=Symbol())]=I)},g[ga]=A}return A}function fy(g){const A=(g=Xn(g))[0].g;if(g=g[1]){const I=Fs(g),C=Ns(g).S;return(B,Q,o)=>A(B,Q,o,C,I)}return A}let kt,dt;const Ni=Symbol();function uy(g,A,I){const C=I[1];let B;if(C){const Q=C[Ni];B=Q?Q.S:xi(C[0]),g[A]=Q??C}B&&B===mi?(g.na||(g.na=[])).push(A):I[0]&&(g.oa||(g.oa=[])).push(A)}function Ca(g,A){return[g.l,!A||0<A[0]?void 0:A]}function Pn(g){var A=g[Ni];if(A)return A;if(!(A=Rs(g,g[Ni]={},Ca,Ca,uy)).oa&&!A.na){let I=!0;for(let C in A){isNaN(C)||(I=!1);break}I?(A=xi(g[0])===mi,A=g[Ni]=A?dt||(dt={S:xi(!0)}):kt||(kt={})):A.Oa=!0}return A}function Hy(g,A,I){g[A]=I}function Rs(g,A,I,C,B=Hy){A.S=xi(g[0]);let Q=0;var o=g[++Q];o&&o.constructor===Object&&(A.ha=o,typeof(o=g[++Q])=="function"&&(A.g=o,A.h=g[++Q],o=g[++Q]));const t={};for(;Array.isArray(o)&&typeof o[0]=="number"&&0<o[0];){for(var D=0;D<o.length;D++)t[o[D]]=o;o=g[++Q]}for(D=1;o!==void 0;){let G;typeof o=="number"&&(D+=o,o=g[++Q]);var e=void 0;if(o instanceof uQ?G=o:(G=Oy,Q--),G.qa){o=g[++Q],e=g;var w=Q;typeof o=="function"&&(o=o(),e[w]=o),e=o}for(w=D+1,typeof(o=g[++Q])=="number"&&0>o&&(w-=o,o=g[++Q]);D<w;D++){const c=t[D];B(A,D,e?C(G,e,c):I(G,c))}}return A}const Ba=Symbol();function jn(g){let A=g[Ba];if(!A){const I=Co(g);A=(C,B)=>zn(C,B,I),g[Ba]=A}return A}const yi=Symbol();function py(g){return g.h}function qy(g,A){let I,C;const B=g.h;return(Q,o,t)=>B(Q,o,t,C||(C=Co(A).S),I||(I=jn(A)))}function Co(g){let A=g[yi];return A||(A=Rs(g,g[yi]={},py,qy),Mi in g&&yi in g&&(g.length=0),A)}const Mi=Symbol();function my(g,A){const I=g.g;return A?(C,B,Q)=>I(C,B,Q,A):I}function xy(g,A,I){const C=g.g;let B,Q;return(o,t,D)=>C(o,t,D,Q||(Q=Ns(A).S),B||(B=Fs(A)),I)}function Ns(g){let A=g[Mi];return A||(Pn(g),A=Rs(g,g[Mi]={},my,xy),Mi in g&&yi in g&&(g.length=0),A)}function Qa(g,A){var I=g[A];if(I)return I;if((I=g.ha)&&(I=I[A])){var C=(I=Xn(I))[0].h;if(I=I[1]){const B=jn(I),Q=Co(I).S;I=(I=g.h)?I(Q,B):(o,t,D)=>C(o,t,D,Q,B)}else I=C;return g[A]=I}}function zn(g,A,I){for(var C=cI(g),B=+!!(512&C)-1,Q=g.length,o=512&C?1:0,t=Q+(256&C?-1:0);o<t;o++){const D=g[o];if(D==null)continue;const e=o-B,w=Qa(I,e);w&&w(A,D,e)}if(256&C){C=g[Q-1];for(let D in C)B=+D,Number.isNaN(B)||(Q=C[D])!=null&&(t=Qa(I,B))&&t(A,Q,B)}if(g=jC?g[jC]:void 0)for(UQ(A,A.g.end()),I=0;I<g.length;I++)UQ(A,As(g[I])||Pi())}function Kg(g,A){return new uQ(g,A,!1,!1)}function xQ(g,A){return new uQ(g,A,!0,!1)}function Bo(g,A){return new uQ(g,A,!1,!0)}function lg(g,A,I){LI(g,cI(g),A,I)}var by=Bo(function(g,A,I,C,B){return g.h===2&&(g=FE(g,WB([void 0,void 0],C),B),YC(C=cI(A)),(B=LC(A,C,I))instanceof zg?2&B.O?((B=B.X()).push(g),LI(A,C,I,B)):B.Ta(g):Array.isArray(B)?(2&TI(B)&&LI(A,C,I,B=Wn(B)),B.push(g)):LI(A,C,I,[g]),!0)},function(g,A,I,C,B){if(A instanceof zg)A.forEach((Q,o)=>{Mt(g,I,WB([o,Q],C),B)});else if(Array.isArray(A))for(let Q=0;Q<A.length;Q++){const o=A[Q];Array.isArray(o)&&Mt(g,I,WB(o,C),B)}});function _n(g,A,I){A:if(A!=null){if(Io(A)){if(typeof A=="string"){A=as(A);break A}if(typeof A=="number"){A=es(A);break A}}A=void 0}A!=null&&(typeof A=="string"&&Ve(A),A!=null&&(AC(g,I,0),typeof A=="number"?(g=g.g,TB(A),Li(g,JI,jI)):(I=Ve(A),Li(g.g,I.h,I.g))))}function $n(g,A,I){(A=pQ(A))!=null&&A!=null&&(AC(g,I,0),_i(g.g,A))}function Ah(g,A,I){(A=Hn(A))!=null&&(AC(g,I,0),g.g.g.push(A?1:0))}function Ih(g,A,I){(A=eE(A))!=null&&$i(g,I,nn(A))}function Qo(g,A,I,C,B){Mt(g,I,A instanceof fA?A.s:Array.isArray(A)?WB(A,C):void 0,B)}function gh(g,A,I){(A=A==null||typeof A=="string"||Xi(A)||A instanceof hB?A:void 0)!=null&&$i(g,I,gs(A).buffer)}function Ch(g,A,I){return(g.h===5||g.h===2)&&(A=qQ(A,cI(A),I,2,!1),g.h==2?zi(g,yt,A):A.push(yt(g.g)),!0)}var Ag,_C=Kg(function(g,A,I){if(g.h!==1)return!1;var C=g.g;g=Nt(C);const B=Nt(C);C=2*(B>>31)+1;const Q=B>>>20&2047;return g=4294967296*(1048575&B)+g,lg(A,I,Q==2047?g?NaN:1/0*C:Q==0?C*Math.pow(2,-1074)*g:C*Math.pow(2,Q-1075)*(g+4503599627370496)),!0},function(g,A,I){(A=RB(A))!=null&&(AC(g,I,1),g=g.g,(I=Ji||(Ji=new DataView(new ArrayBuffer(8)))).setFloat64(0,+A,!0),JI=I.getUint32(0,!0),jI=I.getUint32(4,!0),DE(g,JI),DE(g,jI))}),Bg=Kg(function(g,A,I){return g.h===5&&(lg(A,I,yt(g.g)),!0)},function(g,A,I){(A=RB(A))!=null&&(AC(g,I,5),g=g.g,Bs(A),DE(g,JI))}),Ty=xQ(Ch,function(g,A,I){if((A=mQ(RB,A))!=null)for(let o=0;o<A.length;o++){var C=g,B=I,Q=A[o];Q!=null&&(AC(C,B,5),C=C.g,Bs(Q),DE(C,JI))}}),ys=xQ(Ch,function(g,A,I){if((A=mQ(RB,A))!=null&&A.length){AC(g,I,2),RE(g.g,4*A.length);for(let C=0;C<A.length;C++)I=g.g,Bs(A[C]),DE(I,JI)}}),cB=Kg(function(g,A,I){return g.h===0&&(lg(A,I,is(g.g,Qs)),!0)},_n),it=Kg(function(g,A,I){return g.h===0&&(lg(A,I,(g=is(g.g,Qs))===0?void 0:g),!0)},_n),Vy=Kg(function(g,A,I){return g.h===0&&(lg(A,I,is(g.g,Rt)),!0)},function(g,A,I){A:if(A!=null){if(Io(A)){if(typeof A=="string"){var C=Math.trunc(Number(A));Number.isSafeInteger(C)&&0<=C?A=String(C):((C=A.indexOf("."))!==-1&&(A=A.substring(0,C)),ze(A)||(ji(A),A=Yi(JI,jI)));break A}if(typeof A=="number"){A=0<=(A=Math.trunc(A))&&Number.isSafeInteger(A)?A:function(B){if(0>B){TB(B);const Q=Yi(JI,jI);return B=Number(Q),Number.isSafeInteger(B)?B:Q}return ze(String(B))?B:(TB(B),Rt(JI,jI))}(A);break A}}A=void 0}A!=null&&(typeof A=="string"&&xe(A),A!=null&&(AC(g,I,0),typeof A=="number"?(g=g.g,TB(A),Li(g,JI,jI)):(I=xe(A),Li(g.g,I.h,I.g))))}),vI=Kg(function(g,A,I){return g.h===0&&(lg(A,I,GB(g.g)),!0)},$n),Ms=xQ(function(g,A,I){return(g.h===0||g.h===2)&&(A=qQ(A,cI(A),I,2,!1),g.h==2?zi(g,GB,A):A.push(GB(g.g)),!0)},function(g,A,I){if((A=mQ(pQ,A))!=null&&A.length){I=ss(g,I);for(let C=0;C<A.length;C++)_i(g.g,A[C]);Ds(g,I)}}),lQ=Kg(function(g,A,I){return g.h===0&&(lg(A,I,(g=GB(g.g))===0?void 0:g),!0)},$n),zI=Kg(function(g,A,I){return g.h===0&&(lg(A,I,os(g.g)),!0)},Ah),iE=Kg(function(g,A,I){return g.h===0&&(lg(A,I,(g=os(g.g))===!1?void 0:g),!0)},Ah),Rg=xQ(function(g,A,I){return g.h===2&&(UE(A,I,Ly,g=ts(g)),!0)},function(g,A,I){if((A=mQ(eE,A))!=null)for(let o=0;o<A.length;o++){var C=g,B=I,Q=A[o];Q!=null&&$i(C,B,nn(Q))}}),FB=Kg(function(g,A,I){return g.h===2&&(lg(A,I,(g=ts(g))===""?void 0:g),!0)},Ih),uI=Kg(function(g,A,I){return g.h===2&&(lg(A,I,ts(g)),!0)},Ih),Wy=Bo(function(g,A,I,C,B){return g.h===2&&(FE(g,cs(A,C,I,!0),B),!0)},Qo),Oy=Bo(function(g,A,I,C,B){return g.h===2&&(FE(g,cs(A,C,I),B),!0)},Qo);Ag=new uQ(function(g,A,I,C,B){if(g.h!==2)return!1;C=WB(void 0,C);let Q=cI(A);YC(Q);let o=qQ(A,Q,I,3);return Q=cI(A),4&TI(o)&&(o=Ng(o),OI(o,-2079&(1|TI(o))),LI(A,Q,I,o)),o.push(C),FE(g,C,B),!0},function(g,A,I,C,B){if(Array.isArray(A))for(let Q=0;Q<A.length;Q++)Qo(g,A[Q],I,C,B)},!0,!0);var qI=Bo(function(g,A,I,C,B,Q){if(g.h!==2)return!1;let o=cI(A);return YC(o),(Q=rs(A,o,Q))&&I!==Q&&LI(A,o,Q),FE(g,A=cs(A,C,I),B),!0},Qo),Bh=Kg(function(g,A,I){return g.h===2&&(lg(A,I,kn(g)),!0)},gh),Zy=xQ(function(g,A,I){return(g.h===0||g.h===2)&&(A=qQ(A,cI(A),I,2,!1),g.h==2?zi(g,rB,A):A.push(rB(g.g)),!0)},function(g,A,I){if((A=mQ(Sy,A))!=null)for(let o=0;o<A.length;o++){var C=g,B=I,Q=A[o];Q!=null&&(AC(C,B,0),RE(C.g,Q))}}),JC=Kg(function(g,A,I){return g.h===0&&(lg(A,I,GB(g.g)),!0)},function(g,A,I){(A=pQ(A))!=null&&(A=parseInt(A,10),AC(g,I,0),_i(g.g,A))}),vy=xQ(function(g,A,I){return(g.h===0||g.h===2)&&(A=qQ(A,cI(A),I,2,!1),g.h==2?zi(g,Ny,A):A.push(GB(g.g)),!0)},function(g,A,I){if((A=mQ(pQ,A))!=null&&A.length){I=ss(g,I);for(let C=0;C<A.length;C++)_i(g.g,A[C]);Ds(g,I)}});class Xy{constructor(A,I){this.h=A,this.g=I,this.l=rI,this.m=XA,this.defaultValue=void 0}}function nC(g,A){return new Xy(g,A)}function NB(g,A){return(I,C)=>{A:{if(ni.length){const Q=ni.pop();Q.o(C),Ct(Q.g,I,C),I=Q}else I=new class{constructor(Q,o){if(me.length){const t=me.pop();Ct(t,Q,o),Q=t}else Q=new class{constructor(t,D){this.h=null,this.m=!1,this.g=this.l=this.j=0,Ct(this,t,D)}clear(){this.h=null,this.m=!1,this.g=this.l=this.j=0,this.aa=!1}}(Q,o);this.g=Q,this.l=this.g.g,this.h=this.m=-1,this.o(o)}o({ga:Q=!1}={}){this.ga=Q}}(I,C);try{const Q=new g,o=Q.s;Fs(A)(o,I),SQ&&delete o[SQ];var B=Q;break A}finally{I.g.clear(),I.m=-1,I.h=-1,100>ni.length&&ni.push(I)}B=void 0}return B}}function Us(g){return function(){const A=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const o=this.g;return this.g=[],o}}}};zn(this.s,A,Co(g)),UQ(A,A.g.end());const I=new Uint8Array(A.h),C=A.l,B=C.length;let Q=0;for(let o=0;o<B;o++){const t=C[o];I.set(t,Q),Q+=t.length}return A.l=[I],I}}var Qh=[0,FB,Kg(function(g,A,I){return g.h===2&&(lg(A,I,(g=kn(g))===MQ()?void 0:g),!0)},function(g,A,I){if(A!=null){if(A instanceof fA){const C=A.Va;return void(C&&(A=C(A),A!=null&&$i(g,I,gs(A).buffer)))}if(Array.isArray(A))return}gh(g,A,I)})],Py=[0,uI],Eh=[0,vI,JC,zI,-1,Ms,JC,-1],jy=[0,zI,-1],ih=class extends fA{constructor(){super()}};ih.A=[6];var oh=[0,zI,uI,zI,JC,-1,vy,uI,-1,jy,JC],th=[0,uI,-2],Ea=class extends fA{constructor(){super()}},sh=[0],Dh=[0,vI,zI,-2],$g=class extends fA{constructor(g){super(g,2)}},xI={},zy=[-2,xI,zI];xI[336783863]=[0,uI,zI,-1,vI,[0,[1,2,3,4,5],qI,sh,qI,oh,qI,th,qI,Dh,qI,Eh],Py];var _y=[0,FB,iE],eh=[0,it,-1,iE,-3,it,Ms,FB,lQ,it,-1,iE,lQ,iE,-2,FB],SE=[-1,{}],ah=[0,uI,1,SE],nh=[0,uI,Rg,SE];function IC(g,A){A=ME(A),g=g.s;let I=cI(g);YC(I),LI(g,I,2,A===""?void 0:A)}function fI(g,A){UE(g.s,3,yE,A)}function dI(g,A){UE(g.s,4,yE,A)}var yg=class extends fA{constructor(g){super(g,500)}o(g){return XA(this,0,7,g)}};yg.A=[3,4,5,6,8,13,17,1005];var $y=[-500,FB,-1,Rg,-3,zy,Ag,Qh,lQ,-1,ah,nh,Ag,_y,FB,eh,lQ,Rg,987,Rg],AM=[0,FB,-1,SE],IM=[-500,uI,-1,[-1,{}],998,uI],gM=[-500,uI,Rg,-1,[-2,{},zI],997,Rg,-1],CM=[-500,uI,Rg,SE,998,Rg];function gC(g,A){lt(g,yg,A)}function bI(g,A){UE(g.s,10,yE,A)}function mI(g,A){UE(g.s,15,yE,A)}var kg=class extends fA{constructor(g){super(g,500)}o(g){return XA(this,0,1001,g)}};kg.A=[1,6,7,9,10,15,16,17,14,1002];var hh=[-500,Ag,$y,4,Ag,IM,Ag,gM,lQ,Ag,CM,Rg,lQ,ah,nh,Ag,AM,Rg,-2,eh,FB,-1,iE,979,SE,Ag,Qh],BM=NB(kg,hh);kg.prototype.g=Us(hh);var QM=[0,Ag,[0,vI,-2]],EM=class extends fA{constructor(g){super(g)}},iM=[0,vI,Bg,uI,-1],Ss=class extends fA{constructor(g){super(g)}g(){return AB(this,EM,1)}};Ss.A=[1];var wh=[0,Ag,iM],Ks=NB(Ss,wh),oM=[0,vI,Bg],tM=[0,vI,-1,QM],sM=class extends fA{constructor(g){super(g)}},DM=[0,vI,-3],eM=[0,Bg,-3],aM=class extends fA{constructor(g){super(g)}},nM=[0,Bg,-1,uI,Bg],Ui=class extends fA{constructor(g){super(g)}h(){return rI(this,sM,2)}g(){return AB(this,aM,5)}};Ui.A=[5];var hM=[0,JC,DM,eM,tM,Ag,nM],Gh=class extends fA{constructor(g){super(g)}};Gh.A=[1,2,3,8,9];var rh=NB(Gh,[0,Rg,Ms,ys,hM,uI,-1,cB,Ag,oM,Rg,cB]),ch=class extends fA{constructor(g){super(g)}},wM=[0,Bg,-4],Fh=class extends fA{constructor(g){super(g)}};Fh.A=[1];var ls=NB(Fh,[0,Ag,wM]),Rh=class extends fA{constructor(g){super(g)}},GM=[0,Bg,-4],Nh=class extends fA{constructor(g){super(g)}};Nh.A=[1];var Eo=NB(Nh,[0,Ag,GM]),yh=class extends fA{constructor(g){super(g)}};yh.A=[3];var rM=[0,vI,-1,ys,JC],Mh=class extends fA{constructor(){super()}};Mh.prototype.g=Us([0,Bg,-4,cB]);var cM=class extends fA{constructor(g){super(g)}},FM=[0,1,vI,uI,wh],Uh=class extends fA{constructor(g){super(g)}};Uh.A=[1];var RM=NB(Uh,[0,Ag,FM,cB]),Jt=class extends fA{constructor(g){super(g)}};Jt.A=[1];var NM=class extends fA{constructor(g){super(g)}ua(){return bn(this)??MQ()}},yM=class extends fA{constructor(g){super(g)}},Sh=[1,2],MM=[0,Sh,qI,[0,ys],qI,[0,Bh],vI,uI],Kh=class extends fA{constructor(g){super(g)}};Kh.A=[1];var UM=NB(Kh,[0,Ag,MM,cB]),io=class extends fA{constructor(g){super(g)}};io.A=[4,5];var lh=[0,uI,vI,Bg,Rg,-1],ia=class extends fA{constructor(g){super(g)}},SM=[0,zI,-1],oa=class extends fA{constructor(g){super(g)}},Si=[1,2,3,4,5],Ti=class extends fA{constructor(g){super(g)}g(){return bn(this)!=null}h(){return _g(this,2)!=null}},kh=[0,Bh,uI,[0,vI,cB,-1],[0,Vy,cB]],ZI=class extends fA{constructor(g){super(g)}g(){return Hn(KQ(this,2))??!1}},Qg=[0,kh,zI,[0,Si,qI,Dh,qI,oh,qI,Eh,qI,sh,qI,th],JC],ks=class extends fA{constructor(g){super(g)}},dh=[0,Qg,Bg,-1,vI],KM=nC(502141897,ks);xI[502141897]=dh;var Jh=[0,kh];xI[512499200]=Jh;var Yh=[0,Jh];xI[515723506]=Yh;var lM=NB(class extends fA{constructor(g){super(g)}},[0,[0,JC,-1,Ty,Zy],rM]),Lh=[0,Qg];xI[508981768]=Lh;var kM=class extends fA{constructor(g){super(g)}},fh=[0,Qg,Bg,Lh,zI],uh=class extends fA{constructor(g){super(g)}},Hh=[0,Qg,dh,fh,Bg,Yh];xI[508968149]=fh;var dM=nC(508968150,uh);xI[508968150]=Hh;var ph=class extends fA{constructor(g){super(g)}},JM=nC(513916220,ph);xI[513916220]=[0,Qg,Hh,vI];var eQ=class extends fA{constructor(g){super(g)}h(){return rI(this,io,2)}g(){YI(this,2)}},qh=[0,Qg,lh];xI[478825465]=qh;var mh=[0,Qg];xI[478825422]=mh;var YM=class extends fA{constructor(g){super(g)}},xh=[0,Qg,mh,qh,-1],bh=class extends fA{constructor(g){super(g)}},Th=[0,Qg,Bg,vI],Vh=class extends fA{constructor(g){super(g)}},Wh=[0,Qg,Bg],ds=class extends fA{constructor(g){super(g)}},Oh=[0,Qg,Th,Wh,Bg],Zh=class extends fA{constructor(g){super(g)}},LM=[0,Qg,Oh,xh];xI[463370452]=xh,xI[464864288]=Th,xI[474472470]=Wh;var fM=nC(462713202,ds);xI[462713202]=Oh;var uM=nC(479097054,Zh);xI[479097054]=LM;var vh=class extends fA{constructor(g){super(g)}},HM=nC(456383383,vh);xI[456383383]=[0,Qg,lh];var Xh=class extends fA{constructor(g){super(g)}},pM=nC(476348187,Xh);xI[476348187]=[0,Qg,SM];var Ph=class extends fA{constructor(g){super(g)}},jh=[0,JC,-1],Yt=class extends fA{constructor(g){super(g)}};Yt.A=[3];var qM=nC(458105876,class extends fA{constructor(g){super(g)}g(){var g=this.s;const A=cI(g);var I=2&A;return g=function(C,B,Q){var o=Yt;const t=2&B;let D=!1;if(Q==null){if(t)return Ia();Q=[]}else if(Q.constructor===zg){if(!(2&Q.O)||t)return Q;Q=Q.X()}else Array.isArray(Q)?D=!!(2&TI(Q)):Q=[];if(t){if(!Q.length)return Ia();D||(D=!0,HQ(Q))}else D&&(D=!1,Q=Wn(Q));return D||(64&TI(Q)?fi(Q,32):32&B&&Ao(Q,32)),LI(C,B,2,o=new zg(Q,o,Ky,void 0),!1),o}(g,A,LC(g,A,2)),g==null||!I&&Yt&&(g.xa=!0),I=g}});xI[458105876]=[0,jh,by,[!0,cB,[0,uI,-1,Rg]]];var Js=class extends fA{constructor(g){super(g)}},zh=nC(458105758,Js);xI[458105758]=[0,Qg,uI,jh];var Ys=class extends fA{constructor(g){super(g)}};Ys.A=[5,6];var mM=nC(443442058,Ys);xI[443442058]=[0,Qg,uI,vI,Bg,Rg,-1];var xM=class extends fA{constructor(g){super(g)}},_h=[0,Qg,Bg,-1,vI];xI[514774813]=_h;var bM=class extends fA{constructor(g){super(g)}},$h=[0,Qg,Bg,zI],A0=class extends fA{constructor(g){super(g)}},TM=[0,Qg,_h,$h,Bg];xI[518928384]=$h;var VM=nC(516587230,A0);function Lt(g,A){return A=A?A.clone():new io,g.displayNamesLocale!==void 0?YI(A,1,ME(g.displayNamesLocale)):g.displayNamesLocale===void 0&&YI(A,1),g.maxResults!==void 0?dC(A,2,g.maxResults):"maxResults"in g&&YI(A,2),g.scoreThreshold!==void 0?jA(A,3,g.scoreThreshold):"scoreThreshold"in g&&YI(A,3),g.categoryAllowlist!==void 0?bi(A,4,g.categoryAllowlist):"categoryAllowlist"in g&&YI(A,4),g.categoryDenylist!==void 0?bi(A,5,g.categoryDenylist):"categoryDenylist"in g&&YI(A,5),A}function I0(g,A=-1,I=""){return{categories:g.map(C=>({index:kC(jg(C,1))??-1,score:ag(C,2)??0,categoryName:_g(C,3)??""??"",displayName:_g(C,4)??""??""})),headIndex:A,headName:I}}function g0(g){var A,I,C=wQ(g,3,RB),B=wQ(g,2,pQ),Q=wQ(g,1,eE),o=wQ(g,9,eE);const t={categories:[],keypoints:[]};for(let D=0;D<C.length;D++)t.categories.push({score:C[D],index:B[D]??-1,categoryName:Q[D]??"",displayName:o[D]??""});if((C=(A=rI(g,Ui,4))==null?void 0:A.h())&&(t.boundingBox={originX:jg(C,1)??0,originY:jg(C,2)??0,width:jg(C,3)??0,height:jg(C,4)??0,angle:0}),(I=rI(g,Ui,4))==null?void 0:I.g().length)for(const D of rI(g,Ui,4).g())t.keypoints.push({x:Ri(D,1)??0,y:Ri(D,2)??0,score:Ri(D,4)??0,label:_g(D,3)??""});return t}function Ls(g){const A=[];for(const I of AB(g,Rh,1))A.push({x:ag(I,1)??0,y:ag(I,2)??0,z:ag(I,3)??0});return A}function C0(g){const A=[];for(const I of AB(g,ch,1))A.push({x:ag(I,1)??0,y:ag(I,2)??0,z:ag(I,3)??0});return A}function ta(g){return Array.from(g,A=>127<A?A-256:A)}function sa(g,A){if(g.length!==A.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${g.length} vs. ${A.length}).`);let I=0,C=0,B=0;for(let Q=0;Q<g.length;Q++)I+=g[Q]*A[Q],C+=g[Q]*g[Q],B+=A[Q]*A[Q];if(0>=C||0>=B)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return I/Math.sqrt(C*B)}let wi;xI[516587230]=TM;const WM=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function B0(){if(wi===void 0)try{await WebAssembly.instantiate(WM),wi=!0}catch{wi=!1}return wi}async function ot(g,A=""){const I=await B0()?"wasm_internal":"wasm_nosimd_internal";return{wasmLoaderPath:`${A}/${g}_${I}.js`,wasmBinaryPath:`${A}/${g}_${I}.wasm`}}var IE=class{};function Q0(){const g=navigator.userAgent;return g.includes("Safari")&&!g.includes("Chrome")}async function Da(g){if(typeof importScripts!="function"){const A=document.createElement("script");return A.src=g.toString(),A.crossOrigin="anonymous",new Promise((I,C)=>{A.addEventListener("load",()=>{I()},!1),A.addEventListener("error",B=>{C(B)},!1),document.body.appendChild(A)})}importScripts(g.toString())}function WA(g,A,I){g.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),I(A=g.i.stringToNewUTF8(A)),g.i._free(A)}function ea(g,A,I){if(!g.i.canvas)throw Error("No OpenGL canvas configured.");if(I?g.i._bindTextureToStream(I):g.i._bindTextureToCanvas(),!(I=g.i.canvas.getContext("webgl2")||g.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");return g.i.gpuOriginForWebTexturesIsBottomLeft&&I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,!0),I.texImage2D(I.TEXTURE_2D,0,I.RGBA,I.RGBA,I.UNSIGNED_BYTE,A),g.i.gpuOriginForWebTexturesIsBottomLeft&&I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,!1),A.videoWidth?(I=A.videoWidth,A=A.videoHeight):A.naturalWidth?(I=A.naturalWidth,A=A.naturalHeight):(I=A.width,A=A.height),!g.l||I===g.i.canvas.width&&A===g.i.canvas.height||(g.i.canvas.width=I,g.i.canvas.height=A),[I,A]}function aa(g,A,I){g.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const C=new Uint32Array(A.length);for(let B=0;B<A.length;B++)C[B]=g.i.stringToNewUTF8(A[B]);A=g.i._malloc(4*C.length),g.i.HEAPU32.set(C,A>>2),I(A);for(const B of C)g.i._free(B);g.i._free(A)}function OC(g,A,I){g.i.simpleListeners=g.i.simpleListeners||{},g.i.simpleListeners[A]=I}function fB(g,A,I){let C=[];g.i.simpleListeners=g.i.simpleListeners||{},g.i.simpleListeners[A]=(B,Q,o)=>{Q?(I(C,o),C=[]):C.push(B)}}IE.forVisionTasks=function(g){return ot("vision",g)},IE.forTextTasks=function(g){return ot("text",g)},IE.forAudioTasks=function(g){return ot("audio",g)},IE.isSimdSupported=function(){return B0()};async function OM(g,A,I,C){return g=await(async(B,Q,o,t,D)=>{if(Q&&await Da(Q),!self.ModuleFactory||o&&(await Da(o),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&D&&((Q=self.Module).locateFile=D.locateFile,D.mainScriptUrlOrBlob&&(Q.mainScriptUrlOrBlob=D.mainScriptUrlOrBlob)),D=await self.ModuleFactory(self.Module||D),self.ModuleFactory=self.Module=void 0,new B(D,t)})(g,I.wasmLoaderPath,I.assetLoaderPath,A,{locateFile:B=>B.endsWith(".wasm")?I.wasmBinaryPath.toString():I.assetBinaryPath&&B.endsWith(".data")?I.assetBinaryPath.toString():B}),await g.o(C),g}function na(g,A){const I=rI(g.baseOptions,Ti,1)||new Ti;typeof A=="string"?(YI(I,2,ME(A)),YI(I,1)):A instanceof Uint8Array&&(YI(I,1,Ln(A,!1,!1)),YI(I,2)),XA(g.baseOptions,0,1,I)}function ha(g){try{const A=g.F.length;if(A===1)throw Error(g.F[0].message);if(1<A)throw Error("Encountered multiple errors: "+g.F.map(I=>I.message).join(", "))}finally{g.F=[]}}function ZA(g,A){g.I=Math.max(g.I,A)}function fs(g,A){g.C=new yg,IC(g.C,"PassThroughCalculator"),fI(g.C,"free_memory"),dI(g.C,"free_memory_unused_out"),bI(A,"free_memory"),gC(A,g.C)}function nE(g,A){fI(g.C,A),dI(g.C,A+"_unused_out")}function us(g){g.g.addBoolToStream(!0,"free_memory",g.I)}var ft=class{constructor(g){this.g=g,this.F=[],this.I=0,this.g.setAutoRenderToScreen(!1)}l(g,A=!0){var I,C,B,Q,o,t;if(A){const D=g.baseOptions||{};if((I=g.baseOptions)!=null&&I.modelAssetBuffer&&(C=g.baseOptions)!=null&&C.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!((B=rI(this.baseOptions,Ti,1))!=null&&B.g()||(Q=rI(this.baseOptions,Ti,1))!=null&&Q.h()||(o=g.baseOptions)!=null&&o.modelAssetBuffer||(t=g.baseOptions)!=null&&t.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if(function(e,w){let G=rI(e.baseOptions,oa,3);if(!G){var c=G=new oa,R=new Ea;EE(c,4,Si,R)}"delegate"in w&&(w.delegate==="GPU"?(w=G,c=new ih,EE(w,2,Si,c)):(w=G,c=new Ea,EE(w,4,Si,c))),XA(e.baseOptions,0,3,G)}(this,D),D.modelAssetPath)return fetch(D.modelAssetPath.toString()).then(e=>{if(e.ok)return e.arrayBuffer();throw Error(`Failed to fetch model: ${D.modelAssetPath} (${e.status})`)}).then(e=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(e),!0,!1,!1),na(this,"/model.dat"),this.m(),this.N()});na(this,D.modelAssetBuffer)}return this.m(),this.N(),Promise.resolve()}N(){}da(){let g;if(this.g.da(A=>{g=BM(A)}),!g)throw Error("Failed to retrieve CalculatorGraphConfig");return g}setGraph(g,A){this.g.attachErrorListener((I,C)=>{this.F.push(Error(C))}),this.g.Ra(),this.g.setGraph(g,A),this.C=void 0,ha(this)}finishProcessing(){this.g.finishProcessing(),ha(this)}close(){this.C=void 0,this.g.closeGraph()}};function $C(g,A){if(g===null)throw Error(`Unable to obtain required WebGL resource: ${A}`);return g}ft.prototype.close=ft.prototype.close;class ZM{constructor(A,I,C,B){this.g=A,this.h=I,this.m=C,this.l=B}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function wa(g,A,I){const C=g.g;if(I=$C(C.createShader(I),"Failed to create WebGL shader"),C.shaderSource(I,A),C.compileShader(I),!C.getShaderParameter(I,C.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${C.getShaderInfoLog(I)}`);return C.attachShader(g.h,I),I}function Ga(g,A){const I=g.g,C=$C(I.createVertexArray(),"Failed to create vertex array");I.bindVertexArray(C);const B=$C(I.createBuffer(),"Failed to create buffer");I.bindBuffer(I.ARRAY_BUFFER,B),I.enableVertexAttribArray(g.N),I.vertexAttribPointer(g.N,2,I.FLOAT,!1,0,0),I.bufferData(I.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),I.STATIC_DRAW);const Q=$C(I.createBuffer(),"Failed to create buffer");return I.bindBuffer(I.ARRAY_BUFFER,Q),I.enableVertexAttribArray(g.M),I.vertexAttribPointer(g.M,2,I.FLOAT,!1,0,0),I.bufferData(I.ARRAY_BUFFER,new Float32Array(A?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),I.STATIC_DRAW),I.bindBuffer(I.ARRAY_BUFFER,null),I.bindVertexArray(null),new ZM(I,C,B,Q)}function Hs(g,A){if(g.g){if(A!==g.g)throw Error("Cannot change GL context once initialized")}else g.g=A}function ps(g,A,I,C){return Hs(g,A),g.h||(g.m(),g.F()),I?(g.u||(g.u=Ga(g,!0)),I=g.u):(g.v||(g.v=Ga(g,!1)),I=g.v),A.useProgram(g.h),I.bind(),g.l(),g=C(),I.g.bindVertexArray(null),g}function oo(g,A,I){return Hs(g,A),g=$C(A.createTexture(),"Failed to create texture"),A.bindTexture(A.TEXTURE_2D,g),A.texParameteri(A.TEXTURE_2D,A.TEXTURE_WRAP_S,A.CLAMP_TO_EDGE),A.texParameteri(A.TEXTURE_2D,A.TEXTURE_WRAP_T,A.CLAMP_TO_EDGE),A.texParameteri(A.TEXTURE_2D,A.TEXTURE_MIN_FILTER,I??A.LINEAR),A.texParameteri(A.TEXTURE_2D,A.TEXTURE_MAG_FILTER,I??A.LINEAR),A.bindTexture(A.TEXTURE_2D,null),g}function to(g,A,I){Hs(g,A),g.C||(g.C=$C(A.createFramebuffer(),"Failed to create framebuffe.")),A.bindFramebuffer(A.FRAMEBUFFER,g.C),A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,I,0)}function qs(g){var A;(A=g.g)==null||A.bindFramebuffer(g.g.FRAMEBUFFER,null)}var ms=class{I(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const g=this.g;if(this.h=$C(g.createProgram(),"Failed to create WebGL program"),this.ta=wa(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
`)):typeof readline=="function"&&(i=readline(),i!==null&&(i+=`
`));if(!i)return null;E.input=bE(i,!0)}return E.input.shift()},put_char:function(E,i){i===null||i===10?(K(X(E.output,0)),E.output=[]):i!=0&&E.output.push(i)},flush:function(E){E.output&&E.output.length>0&&(K(X(E.output,0)),E.output=[])}},default_tty1_ops:{put_char:function(E,i){i===null||i===10?(L(X(E.output,0)),E.output=[]):i!=0&&E.output.push(i)},flush:function(E){E.output&&E.output.length>0&&(L(X(E.output,0)),E.output=[])}}};function ao(E){for(var i=q(E,16384),s=XQ(i);E<i;)JA[s+E++]=0;return s}var U={ops_table:null,mount:function(E){return U.createNode(null,"/",16895,0)},createNode:function(E,i,s,n){if(a.isBlkdev(s)||a.isFIFO(s))throw new a.ErrnoError(63);U.ops_table||(U.ops_table={dir:{node:{getattr:U.node_ops.getattr,setattr:U.node_ops.setattr,lookup:U.node_ops.lookup,mknod:U.node_ops.mknod,rename:U.node_ops.rename,unlink:U.node_ops.unlink,rmdir:U.node_ops.rmdir,readdir:U.node_ops.readdir,symlink:U.node_ops.symlink},stream:{llseek:U.stream_ops.llseek}},file:{node:{getattr:U.node_ops.getattr,setattr:U.node_ops.setattr},stream:{llseek:U.stream_ops.llseek,read:U.stream_ops.read,write:U.stream_ops.write,allocate:U.stream_ops.allocate,mmap:U.stream_ops.mmap,msync:U.stream_ops.msync}},link:{node:{getattr:U.node_ops.getattr,setattr:U.node_ops.setattr,readlink:U.node_ops.readlink},stream:{}},chrdev:{node:{getattr:U.node_ops.getattr,setattr:U.node_ops.setattr},stream:a.chrdev_stream_ops}});var F=a.createNode(E,i,s,n);return a.isDir(F.mode)?(F.node_ops=U.ops_table.dir.node,F.stream_ops=U.ops_table.dir.stream,F.contents={}):a.isFile(F.mode)?(F.node_ops=U.ops_table.file.node,F.stream_ops=U.ops_table.file.stream,F.usedBytes=0,F.contents=null):a.isLink(F.mode)?(F.node_ops=U.ops_table.link.node,F.stream_ops=U.ops_table.link.stream):a.isChrdev(F.mode)&&(F.node_ops=U.ops_table.chrdev.node,F.stream_ops=U.ops_table.chrdev.stream),F.timestamp=Date.now(),E&&(E.contents[i]=F),F},getFileDataAsRegularArray:function(E){if(E.contents&&E.contents.subarray){for(var i=[],s=0;s<E.usedBytes;++s)i.push(E.contents[s]);return i}return E.contents},getFileDataAsTypedArray:function(E){return E.contents?E.contents.subarray?E.contents.subarray(0,E.usedBytes):new Uint8Array(E.contents):new Uint8Array(0)},expandFileStorage:function(E,i){var s=E.contents?E.contents.length:0;if(!(s>=i)){var n=1048576;i=Math.max(i,s*(s<n?2:1.125)>>>0),s!=0&&(i=Math.max(i,256));var F=E.contents;E.contents=new Uint8Array(i),E.usedBytes>0&&E.contents.set(F.subarray(0,E.usedBytes),0)}},resizeFileStorage:function(E,i){if(E.usedBytes!=i){if(i==0){E.contents=null,E.usedBytes=0;return}if(!E.contents||E.contents.subarray){var s=E.contents;E.contents=new Uint8Array(i),s&&E.contents.set(s.subarray(0,Math.min(i,E.usedBytes))),E.usedBytes=i;return}if(E.contents||(E.contents=[]),E.contents.length>i)E.contents.length=i;else for(;E.contents.length<i;)E.contents.push(0);E.usedBytes=i}},node_ops:{getattr:function(E){var i={};return i.dev=a.isChrdev(E.mode)?E.id:1,i.ino=E.id,i.mode=E.mode,i.nlink=1,i.uid=0,i.gid=0,i.rdev=E.rdev,a.isDir(E.mode)?i.size=4096:a.isFile(E.mode)?i.size=E.usedBytes:a.isLink(E.mode)?i.size=E.link.length:i.size=0,i.atime=new Date(E.timestamp),i.mtime=new Date(E.timestamp),i.ctime=new Date(E.timestamp),i.blksize=4096,i.blocks=Math.ceil(i.size/i.blksize),i},setattr:function(E,i){i.mode!==void 0&&(E.mode=i.mode),i.timestamp!==void 0&&(E.timestamp=i.timestamp),i.size!==void 0&&U.resizeFileStorage(E,i.size)},lookup:function(E,i){throw a.genericErrors[44]},mknod:function(E,i,s,n){return U.createNode(E,i,s,n)},rename:function(E,i,s){if(a.isDir(E.mode)){var n;try{n=a.lookupNode(i,s)}catch{}if(n)for(var F in n.contents)throw new a.ErrnoError(55)}delete E.parent.contents[E.name],E.name=s,i.contents[s]=E,E.parent=i},unlink:function(E,i){delete E.contents[i]},rmdir:function(E,i){var s=a.lookupNode(E,i);for(var n in s.contents)throw new a.ErrnoError(55);delete E.contents[i]},readdir:function(E){var i=[".",".."];for(var s in E.contents)E.contents.hasOwnProperty(s)&&i.push(s);return i},symlink:function(E,i,s){var n=U.createNode(E,i,41471,0);return n.link=s,n},readlink:function(E){if(!a.isLink(E.mode))throw new a.ErrnoError(28);return E.link}},stream_ops:{read:function(E,i,s,n,F){var N=E.node.contents;if(F>=E.node.usedBytes)return 0;var k=Math.min(E.node.usedBytes-F,n);if(k>8&&N.subarray)i.set(N.subarray(F,F+k),s);else for(var d=0;d<k;d++)i[s+d]=N[F+d];return k},write:function(E,i,s,n,F,N){if(i.buffer===JA.buffer&&(N=!1),!n)return 0;var k=E.node;if(k.timestamp=Date.now(),i.subarray&&(!k.contents||k.contents.subarray)){if(N)return k.contents=i.subarray(s,s+n),k.usedBytes=n,n;if(k.usedBytes===0&&F===0)return k.contents=i.slice(s,s+n),k.usedBytes=n,n;if(F+n<=k.usedBytes)return k.contents.set(i.subarray(s,s+n),F),n}if(U.expandFileStorage(k,F+n),k.contents.subarray&&i.subarray)k.contents.set(i.subarray(s,s+n),F);else for(var d=0;d<n;d++)k.contents[F+d]=i[s+d];return k.usedBytes=Math.max(k.usedBytes,F+n),n},llseek:function(E,i,s){var n=i;if(s===1?n+=E.position:s===2&&a.isFile(E.node.mode)&&(n+=E.node.usedBytes),n<0)throw new a.ErrnoError(28);return n},allocate:function(E,i,s){U.expandFileStorage(E.node,i+s),E.node.usedBytes=Math.max(E.node.usedBytes,i+s)},mmap:function(E,i,s,n,F,N){if(EA(i===0),!a.isFile(E.node.mode))throw new a.ErrnoError(43);var k,d,Y=E.node.contents;if(!(N&2)&&Y.buffer===$A)d=!1,k=Y.byteOffset;else{if((n>0||n+s<Y.length)&&(Y.subarray?Y=Y.subarray(n,n+s):Y=Array.prototype.slice.call(Y,n,n+s)),d=!0,k=ao(s),!k)throw new a.ErrnoError(48);JA.set(Y,k)}return{ptr:k,allocated:d}},msync:function(E,i,s,n,F){if(!a.isFile(E.node.mode))throw new a.ErrnoError(43);return F&2||U.stream_ops.write(E,i,0,n,s,!1),0}}},a={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,trackingDelegate:{},tracking:{openFlags:{READ:1,WRITE:2}},ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,lookupPath:function(E,i){if(E=CC.resolve(a.cwd(),E),i=i||{},!E)return{path:"",node:null};var s={follow_mount:!0,recurse_count:0};for(var n in s)i[n]===void 0&&(i[n]=s[n]);if(i.recurse_count>8)throw new a.ErrnoError(32);for(var F=eI.normalizeArray(E.split("/").filter(function(IA){return!!IA}),!1),N=a.root,k="/",d=0;d<F.length;d++){var Y=d===F.length-1;if(Y&&i.parent)break;if(N=a.lookupNode(N,F[d]),k=eI.join2(k,F[d]),a.isMountpoint(N)&&(!Y||Y&&i.follow_mount)&&(N=N.mounted.root),!Y||i.follow)for(var b=0;a.isLink(N.mode);){var v=a.readlink(k);k=CC.resolve(eI.dirname(k),v);var z=a.lookupPath(k,{recurse_count:i.recurse_count});if(N=z.node,b++>40)throw new a.ErrnoError(32)}}return{path:k,node:N}},getPath:function(E){for(var i;;){if(a.isRoot(E)){var s=E.mount.mountpoint;return i?s[s.length-1]!=="/"?s+"/"+i:s+i:s}i=i?E.name+"/"+i:E.name,E=E.parent}},hashName:function(E,i){for(var s=0,n=0;n<i.length;n++)s=(s<<5)-s+i.charCodeAt(n)|0;return(E+s>>>0)%a.nameTable.length},hashAddNode:function(E){var i=a.hashName(E.parent.id,E.name);E.name_next=a.nameTable[i],a.nameTable[i]=E},hashRemoveNode:function(E){var i=a.hashName(E.parent.id,E.name);if(a.nameTable[i]===E)a.nameTable[i]=E.name_next;else for(var s=a.nameTable[i];s;){if(s.name_next===E){s.name_next=E.name_next;break}s=s.name_next}},lookupNode:function(E,i){var s=a.mayLookup(E);if(s)throw new a.ErrnoError(s,E);for(var n=a.hashName(E.id,i),F=a.nameTable[n];F;F=F.name_next){var N=F.name;if(F.parent.id===E.id&&N===i)return F}return a.lookup(E,i)},createNode:function(E,i,s,n){var F=new a.FSNode(E,i,s,n);return a.hashAddNode(F),F},destroyNode:function(E){a.hashRemoveNode(E)},isRoot:function(E){return E===E.parent},isMountpoint:function(E){return!!E.mounted},isFile:function(E){return(E&61440)===32768},isDir:function(E){return(E&61440)===16384},isLink:function(E){return(E&61440)===40960},isChrdev:function(E){return(E&61440)===8192},isBlkdev:function(E){return(E&61440)===24576},isFIFO:function(E){return(E&61440)===4096},isSocket:function(E){return(E&49152)===49152},flagModes:{r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},modeStringToFlags:function(E){var i=a.flagModes[E];if(typeof i>"u")throw new Error("Unknown file open mode: "+E);return i},flagsToPermissionString:function(E){var i=["r","w","rw"][E&3];return E&512&&(i+="w"),i},nodePermissions:function(E,i){return a.ignorePermissions?0:i.indexOf("r")!==-1&&!(E.mode&292)||i.indexOf("w")!==-1&&!(E.mode&146)||i.indexOf("x")!==-1&&!(E.mode&73)?2:0},mayLookup:function(E){var i=a.nodePermissions(E,"x");return i||(E.node_ops.lookup?0:2)},mayCreate:function(E,i){try{var s=a.lookupNode(E,i);return 20}catch{}return a.nodePermissions(E,"wx")},mayDelete:function(E,i,s){var n;try{n=a.lookupNode(E,i)}catch(N){return N.errno}var F=a.nodePermissions(E,"wx");if(F)return F;if(s){if(!a.isDir(n.mode))return 54;if(a.isRoot(n)||a.getPath(n)===a.cwd())return 10}else if(a.isDir(n.mode))return 31;return 0},mayOpen:function(E,i){return E?a.isLink(E.mode)?32:a.isDir(E.mode)&&(a.flagsToPermissionString(i)!=="r"||i&512)?31:a.nodePermissions(E,a.flagsToPermissionString(i)):44},MAX_OPEN_FDS:4096,nextfd:function(E,i){E=E||0,i=i||a.MAX_OPEN_FDS;for(var s=E;s<=i;s++)if(!a.streams[s])return s;throw new a.ErrnoError(33)},getStream:function(E){return a.streams[E]},createStream:function(E,i,s){a.FSStream||(a.FSStream=function(){},a.FSStream.prototype={object:{get:function(){return this.node},set:function(k){this.node=k}},isRead:{get:function(){return(this.flags&2097155)!==1}},isWrite:{get:function(){return(this.flags&2097155)!==0}},isAppend:{get:function(){return this.flags&1024}}});var n=new a.FSStream;for(var F in E)n[F]=E[F];E=n;var N=a.nextfd(i,s);return E.fd=N,a.streams[N]=E,E},closeStream:function(E){a.streams[E]=null},chrdev_stream_ops:{open:function(E){var i=a.getDevice(E.node.rdev);E.stream_ops=i.stream_ops,E.stream_ops.open&&E.stream_ops.open(E)},llseek:function(){throw new a.ErrnoError(70)}},major:function(E){return E>>8},minor:function(E){return E&255},makedev:function(E,i){return E<<8|i},registerDevice:function(E,i){a.devices[E]={stream_ops:i}},getDevice:function(E){return a.devices[E]},getMounts:function(E){for(var i=[],s=[E];s.length;){var n=s.pop();i.push(n),s.push.apply(s,n.mounts)}return i},syncfs:function(E,i){typeof E=="function"&&(i=E,E=!1),a.syncFSRequests++,a.syncFSRequests>1&&L("warning: "+a.syncFSRequests+" FS.syncfs operations in flight at once, probably just doing extra work");var s=a.getMounts(a.root.mount),n=0;function F(k){return a.syncFSRequests--,i(k)}function N(k){if(k)return N.errored?void 0:(N.errored=!0,F(k));++n>=s.length&&F(null)}s.forEach(function(k){if(!k.type.syncfs)return N(null);k.type.syncfs(k,E,N)})},mount:function(E,i,s){var n=s==="/",F=!s,N;if(n&&a.root)throw new a.ErrnoError(10);if(!n&&!F){var k=a.lookupPath(s,{follow_mount:!1});if(s=k.path,N=k.node,a.isMountpoint(N))throw new a.ErrnoError(10);if(!a.isDir(N.mode))throw new a.ErrnoError(54)}var d={type:E,opts:i,mountpoint:s,mounts:[]},Y=E.mount(d);return Y.mount=d,d.root=Y,n?a.root=Y:N&&(N.mounted=d,N.mount&&N.mount.mounts.push(d)),Y},unmount:function(E){var i=a.lookupPath(E,{follow_mount:!1});if(!a.isMountpoint(i.node))throw new a.ErrnoError(28);var s=i.node,n=s.mounted,F=a.getMounts(n);Object.keys(a.nameTable).forEach(function(k){for(var d=a.nameTable[k];d;){var Y=d.name_next;F.indexOf(d.mount)!==-1&&a.destroyNode(d),d=Y}}),s.mounted=null;var N=s.mount.mounts.indexOf(n);s.mount.mounts.splice(N,1)},lookup:function(E,i){return E.node_ops.lookup(E,i)},mknod:function(E,i,s){var n=a.lookupPath(E,{parent:!0}),F=n.node,N=eI.basename(E);if(!N||N==="."||N==="..")throw new a.ErrnoError(28);var k=a.mayCreate(F,N);if(k)throw new a.ErrnoError(k);if(!F.node_ops.mknod)throw new a.ErrnoError(63);return F.node_ops.mknod(F,N,i,s)},create:function(E,i){return i=i!==void 0?i:438,i&=4095,i|=32768,a.mknod(E,i,0)},mkdir:function(E,i){return i=i!==void 0?i:511,i&=1023,i|=16384,a.mknod(E,i,0)},mkdirTree:function(E,i){for(var s=E.split("/"),n="",F=0;F<s.length;++F)if(s[F]){n+="/"+s[F];try{a.mkdir(n,i)}catch(N){if(N.errno!=20)throw N}}},mkdev:function(E,i,s){return typeof s>"u"&&(s=i,i=438),i|=8192,a.mknod(E,i,s)},symlink:function(E,i){if(!CC.resolve(E))throw new a.ErrnoError(44);var s=a.lookupPath(i,{parent:!0}),n=s.node;if(!n)throw new a.ErrnoError(44);var F=eI.basename(i),N=a.mayCreate(n,F);if(N)throw new a.ErrnoError(N);if(!n.node_ops.symlink)throw new a.ErrnoError(63);return n.node_ops.symlink(n,F,E)},rename:function(E,i){var s=eI.dirname(E),n=eI.dirname(i),F=eI.basename(E),N=eI.basename(i),k,d,Y;if(k=a.lookupPath(E,{parent:!0}),d=k.node,k=a.lookupPath(i,{parent:!0}),Y=k.node,!d||!Y)throw new a.ErrnoError(44);if(d.mount!==Y.mount)throw new a.ErrnoError(75);var b=a.lookupNode(d,F),v=CC.relative(E,n);if(v.charAt(0)!==".")throw new a.ErrnoError(28);if(v=CC.relative(i,s),v.charAt(0)!==".")throw new a.ErrnoError(55);var z;try{z=a.lookupNode(Y,N)}catch{}if(b!==z){var IA=a.isDir(b.mode),rA=a.mayDelete(d,F,IA);if(rA)throw new a.ErrnoError(rA);if(rA=z?a.mayDelete(Y,N,IA):a.mayCreate(Y,N),rA)throw new a.ErrnoError(rA);if(!d.node_ops.rename)throw new a.ErrnoError(63);if(a.isMountpoint(b)||z&&a.isMountpoint(z))throw new a.ErrnoError(10);if(Y!==d&&(rA=a.nodePermissions(d,"w"),rA))throw new a.ErrnoError(rA);try{a.trackingDelegate.willMovePath&&a.trackingDelegate.willMovePath(E,i)}catch(VA){L("FS.trackingDelegate['willMovePath']('"+E+"', '"+i+"') threw an exception: "+VA.message)}a.hashRemoveNode(b);try{d.node_ops.rename(b,Y,N)}catch(VA){throw VA}finally{a.hashAddNode(b)}try{a.trackingDelegate.onMovePath&&a.trackingDelegate.onMovePath(E,i)}catch(VA){L("FS.trackingDelegate['onMovePath']('"+E+"', '"+i+"') threw an exception: "+VA.message)}}},rmdir:function(E){var i=a.lookupPath(E,{parent:!0}),s=i.node,n=eI.basename(E),F=a.lookupNode(s,n),N=a.mayDelete(s,n,!0);if(N)throw new a.ErrnoError(N);if(!s.node_ops.rmdir)throw new a.ErrnoError(63);if(a.isMountpoint(F))throw new a.ErrnoError(10);try{a.trackingDelegate.willDeletePath&&a.trackingDelegate.willDeletePath(E)}catch(k){L("FS.trackingDelegate['willDeletePath']('"+E+"') threw an exception: "+k.message)}s.node_ops.rmdir(s,n),a.destroyNode(F);try{a.trackingDelegate.onDeletePath&&a.trackingDelegate.onDeletePath(E)}catch(k){L("FS.trackingDelegate['onDeletePath']('"+E+"') threw an exception: "+k.message)}},readdir:function(E){var i=a.lookupPath(E,{follow:!0}),s=i.node;if(!s.node_ops.readdir)throw new a.ErrnoError(54);return s.node_ops.readdir(s)},unlink:function(E){var i=a.lookupPath(E,{parent:!0}),s=i.node,n=eI.basename(E),F=a.lookupNode(s,n),N=a.mayDelete(s,n,!1);if(N)throw new a.ErrnoError(N);if(!s.node_ops.unlink)throw new a.ErrnoError(63);if(a.isMountpoint(F))throw new a.ErrnoError(10);try{a.trackingDelegate.willDeletePath&&a.trackingDelegate.willDeletePath(E)}catch(k){L("FS.trackingDelegate['willDeletePath']('"+E+"') threw an exception: "+k.message)}s.node_ops.unlink(s,n),a.destroyNode(F);try{a.trackingDelegate.onDeletePath&&a.trackingDelegate.onDeletePath(E)}catch(k){L("FS.trackingDelegate['onDeletePath']('"+E+"') threw an exception: "+k.message)}},readlink:function(E){var i=a.lookupPath(E),s=i.node;if(!s)throw new a.ErrnoError(44);if(!s.node_ops.readlink)throw new a.ErrnoError(28);return CC.resolve(a.getPath(s.parent),s.node_ops.readlink(s))},stat:function(E,i){var s=a.lookupPath(E,{follow:!i}),n=s.node;if(!n)throw new a.ErrnoError(44);if(!n.node_ops.getattr)throw new a.ErrnoError(63);return n.node_ops.getattr(n)},lstat:function(E){return a.stat(E,!0)},chmod:function(E,i,s){var n;if(typeof E=="string"){var F=a.lookupPath(E,{follow:!s});n=F.node}else n=E;if(!n.node_ops.setattr)throw new a.ErrnoError(63);n.node_ops.setattr(n,{mode:i&4095|n.mode&-4096,timestamp:Date.now()})},lchmod:function(E,i){a.chmod(E,i,!0)},fchmod:function(E,i){var s=a.getStream(E);if(!s)throw new a.ErrnoError(8);a.chmod(s.node,i)},chown:function(E,i,s,n){var F;if(typeof E=="string"){var N=a.lookupPath(E,{follow:!n});F=N.node}else F=E;if(!F.node_ops.setattr)throw new a.ErrnoError(63);F.node_ops.setattr(F,{timestamp:Date.now()})},lchown:function(E,i,s){a.chown(E,i,s,!0)},fchown:function(E,i,s){var n=a.getStream(E);if(!n)throw new a.ErrnoError(8);a.chown(n.node,i,s)},truncate:function(E,i){if(i<0)throw new a.ErrnoError(28);var s;if(typeof E=="string"){var n=a.lookupPath(E,{follow:!0});s=n.node}else s=E;if(!s.node_ops.setattr)throw new a.ErrnoError(63);if(a.isDir(s.mode))throw new a.ErrnoError(31);if(!a.isFile(s.mode))throw new a.ErrnoError(28);var F=a.nodePermissions(s,"w");if(F)throw new a.ErrnoError(F);s.node_ops.setattr(s,{size:i,timestamp:Date.now()})},ftruncate:function(E,i){var s=a.getStream(E);if(!s)throw new a.ErrnoError(8);if(!(s.flags&2097155))throw new a.ErrnoError(28);a.truncate(s.node,i)},utime:function(E,i,s){var n=a.lookupPath(E,{follow:!0}),F=n.node;F.node_ops.setattr(F,{timestamp:Math.max(i,s)})},open:function(E,i,s,n,F){if(E==="")throw new a.ErrnoError(44);i=typeof i=="string"?a.modeStringToFlags(i):i,s=typeof s>"u"?438:s,i&64?s=s&4095|32768:s=0;var N;if(typeof E=="object")N=E;else{E=eI.normalize(E);try{var k=a.lookupPath(E,{follow:!(i&131072)});N=k.node}catch{}}var d=!1;if(i&64)if(N){if(i&128)throw new a.ErrnoError(20)}else N=a.mknod(E,s,0),d=!0;if(!N)throw new a.ErrnoError(44);if(a.isChrdev(N.mode)&&(i&=-513),i&65536&&!a.isDir(N.mode))throw new a.ErrnoError(54);if(!d){var Y=a.mayOpen(N,i);if(Y)throw new a.ErrnoError(Y)}i&512&&a.truncate(N,0),i&=-131713;var b=a.createStream({node:N,path:a.getPath(N),flags:i,seekable:!0,position:0,stream_ops:N.stream_ops,ungotten:[],error:!1},n,F);b.stream_ops.open&&b.stream_ops.open(b),I.logReadFiles&&!(i&1)&&(a.readFiles||(a.readFiles={}),E in a.readFiles||(a.readFiles[E]=1,L("FS.trackingDelegate error on read file: "+E)));try{if(a.trackingDelegate.onOpenFile){var v=0;(i&2097155)!==1&&(v|=a.tracking.openFlags.READ),i&2097155&&(v|=a.tracking.openFlags.WRITE),a.trackingDelegate.onOpenFile(E,v)}}catch(z){L("FS.trackingDelegate['onOpenFile']('"+E+"', flags) threw an exception: "+z.message)}return b},close:function(E){if(a.isClosed(E))throw new a.ErrnoError(8);E.getdents&&(E.getdents=null);try{E.stream_ops.close&&E.stream_ops.close(E)}catch(i){throw i}finally{a.closeStream(E.fd)}E.fd=null},isClosed:function(E){return E.fd===null},llseek:function(E,i,s){if(a.isClosed(E))throw new a.ErrnoError(8);if(!E.seekable||!E.stream_ops.llseek)throw new a.ErrnoError(70);if(s!=0&&s!=1&&s!=2)throw new a.ErrnoError(28);return E.position=E.stream_ops.llseek(E,i,s),E.ungotten=[],E.position},read:function(E,i,s,n,F){if(n<0||F<0)throw new a.ErrnoError(28);if(a.isClosed(E))throw new a.ErrnoError(8);if((E.flags&2097155)===1)throw new a.ErrnoError(8);if(a.isDir(E.node.mode))throw new a.ErrnoError(31);if(!E.stream_ops.read)throw new a.ErrnoError(28);var N=typeof F<"u";if(!N)F=E.position;else if(!E.seekable)throw new a.ErrnoError(70);var k=E.stream_ops.read(E,i,s,n,F);return N||(E.position+=k),k},write:function(E,i,s,n,F,N){if(n<0||F<0)throw new a.ErrnoError(28);if(a.isClosed(E))throw new a.ErrnoError(8);if(!(E.flags&2097155))throw new a.ErrnoError(8);if(a.isDir(E.node.mode))throw new a.ErrnoError(31);if(!E.stream_ops.write)throw new a.ErrnoError(28);E.seekable&&E.flags&1024&&a.llseek(E,0,2);var k=typeof F<"u";if(!k)F=E.position;else if(!E.seekable)throw new a.ErrnoError(70);var d=E.stream_ops.write(E,i,s,n,F,N);k||(E.position+=d);try{E.path&&a.trackingDelegate.onWriteToFile&&a.trackingDelegate.onWriteToFile(E.path)}catch(Y){L("FS.trackingDelegate['onWriteToFile']('"+E.path+"') threw an exception: "+Y.message)}return d},allocate:function(E,i,s){if(a.isClosed(E))throw new a.ErrnoError(8);if(i<0||s<=0)throw new a.ErrnoError(28);if(!(E.flags&2097155))throw new a.ErrnoError(8);if(!a.isFile(E.node.mode)&&!a.isDir(E.node.mode))throw new a.ErrnoError(43);if(!E.stream_ops.allocate)throw new a.ErrnoError(138);E.stream_ops.allocate(E,i,s)},mmap:function(E,i,s,n,F,N){if(F&2&&!(N&2)&&(E.flags&2097155)!==2)throw new a.ErrnoError(2);if((E.flags&2097155)===1)throw new a.ErrnoError(2);if(!E.stream_ops.mmap)throw new a.ErrnoError(43);return E.stream_ops.mmap(E,i,s,n,F,N)},msync:function(E,i,s,n,F){return!E||!E.stream_ops.msync?0:E.stream_ops.msync(E,i,s,n,F)},munmap:function(E){return 0},ioctl:function(E,i,s){if(!E.stream_ops.ioctl)throw new a.ErrnoError(59);return E.stream_ops.ioctl(E,i,s)},readFile:function(E,i){if(i=i||{},i.flags=i.flags||0,i.encoding=i.encoding||"binary",i.encoding!=="utf8"&&i.encoding!=="binary")throw new Error('Invalid encoding type "'+i.encoding+'"');var s,n=a.open(E,i.flags),F=a.stat(E),N=F.size,k=new Uint8Array(N);return a.read(n,k,0,N,0),i.encoding==="utf8"?s=X(k,0):i.encoding==="binary"&&(s=k),a.close(n),s},writeFile:function(E,i,s){s=s||{},s.flags=s.flags||577;var n=a.open(E,s.flags,s.mode);if(typeof i=="string"){var F=new Uint8Array(BA(i)+1),N=$(i,F,0,F.length);a.write(n,F,0,N,void 0,s.canOwn)}else if(ArrayBuffer.isView(i))a.write(n,i,0,i.byteLength,void 0,s.canOwn);else throw new Error("Unsupported data type");a.close(n)},cwd:function(){return a.currentPath},chdir:function(E){var i=a.lookupPath(E,{follow:!0});if(i.node===null)throw new a.ErrnoError(44);if(!a.isDir(i.node.mode))throw new a.ErrnoError(54);var s=a.nodePermissions(i.node,"x");if(s)throw new a.ErrnoError(s);a.currentPath=i.path},createDefaultDirectories:function(){a.mkdir("/tmp"),a.mkdir("/home"),a.mkdir("/home/web_user")},createDefaultDevices:function(){a.mkdir("/dev"),a.registerDevice(a.makedev(1,3),{read:function(){return 0},write:function(i,s,n,F,N){return F}}),a.mkdev("/dev/null",a.makedev(1,3)),uC.register(a.makedev(5,0),uC.default_tty_ops),uC.register(a.makedev(6,0),uC.default_tty1_ops),a.mkdev("/dev/tty",a.makedev(5,0)),a.mkdev("/dev/tty1",a.makedev(6,0));var E=kE();a.createDevice("/dev","random",E),a.createDevice("/dev","urandom",E),a.mkdir("/dev/shm"),a.mkdir("/dev/shm/tmp")},createSpecialDirectories:function(){a.mkdir("/proc"),a.mkdir("/proc/self"),a.mkdir("/proc/self/fd"),a.mount({mount:function(){var E=a.createNode("/proc/self","fd",16895,73);return E.node_ops={lookup:function(i,s){var n=+s,F=a.getStream(n);if(!F)throw new a.ErrnoError(8);var N={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:function(){return F.path}}};return N.parent=N,N}},E}},{},"/proc/self/fd")},createStandardStreams:function(){I.stdin?a.createDevice("/dev","stdin",I.stdin):a.symlink("/dev/tty","/dev/stdin"),I.stdout?a.createDevice("/dev","stdout",null,I.stdout):a.symlink("/dev/tty","/dev/stdout"),I.stderr?a.createDevice("/dev","stderr",null,I.stderr):a.symlink("/dev/tty1","/dev/stderr"),a.open("/dev/stdin",0),a.open("/dev/stdout",1),a.open("/dev/stderr",1)},ensureErrnoError:function(){a.ErrnoError||(a.ErrnoError=function(E,i){this.node=i,this.setErrno=function(s){this.errno=s},this.setErrno(E),this.message="FS error"},a.ErrnoError.prototype=new Error,a.ErrnoError.prototype.constructor=a.ErrnoError,[44].forEach(function(E){a.genericErrors[E]=new a.ErrnoError(E),a.genericErrors[E].stack="<generic error, no stack>"}))},staticInit:function(){a.ensureErrnoError(),a.nameTable=new Array(4096),a.mount(U,{},"/"),a.createDefaultDirectories(),a.createDefaultDevices(),a.createSpecialDirectories(),a.filesystems={MEMFS:U}},init:function(E,i,s){a.init.initialized=!0,a.ensureErrnoError(),I.stdin=E||I.stdin,I.stdout=i||I.stdout,I.stderr=s||I.stderr,a.createStandardStreams()},quit:function(){a.init.initialized=!1;var E=I._fflush;E&&E(0);for(var i=0;i<a.streams.length;i++){var s=a.streams[i];s&&a.close(s)}},getMode:function(E,i){var s=0;return E&&(s|=365),i&&(s|=146),s},findObject:function(E,i){var s=a.analyzePath(E,i);return s.exists?s.object:null},analyzePath:function(E,i){try{var s=a.lookupPath(E,{follow:!i});E=s.path}catch{}var n={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var s=a.lookupPath(E,{parent:!0});n.parentExists=!0,n.parentPath=s.path,n.parentObject=s.node,n.name=eI.basename(E),s=a.lookupPath(E,{follow:!i}),n.exists=!0,n.path=s.path,n.object=s.node,n.name=s.node.name,n.isRoot=s.path==="/"}catch(F){n.error=F.errno}return n},createPath:function(E,i,s,n){E=typeof E=="string"?E:a.getPath(E);for(var F=i.split("/").reverse();F.length;){var N=F.pop();if(N){var k=eI.join2(E,N);try{a.mkdir(k)}catch{}E=k}}return k},createFile:function(E,i,s,n,F){var N=eI.join2(typeof E=="string"?E:a.getPath(E),i),k=a.getMode(n,F);return a.create(N,k)},createDataFile:function(E,i,s,n,F,N){var k=i?eI.join2(typeof E=="string"?E:a.getPath(E),i):E,d=a.getMode(n,F),Y=a.create(k,d);if(s){if(typeof s=="string"){for(var b=new Array(s.length),v=0,z=s.length;v<z;++v)b[v]=s.charCodeAt(v);s=b}a.chmod(Y,d|146);var IA=a.open(Y,577);a.write(IA,s,0,s.length,0,N),a.close(IA),a.chmod(Y,d)}return Y},createDevice:function(E,i,s,n){var F=eI.join2(typeof E=="string"?E:a.getPath(E),i),N=a.getMode(!!s,!!n);a.createDevice.major||(a.createDevice.major=64);var k=a.makedev(a.createDevice.major++,0);return a.registerDevice(k,{open:function(d){d.seekable=!1},close:function(d){n&&n.buffer&&n.buffer.length&&n(10)},read:function(d,Y,b,v,z){for(var IA=0,rA=0;rA<v;rA++){var VA;try{VA=s()}catch{throw new a.ErrnoError(29)}if(VA===void 0&&IA===0)throw new a.ErrnoError(6);if(VA==null)break;IA++,Y[b+rA]=VA}return IA&&(d.node.timestamp=Date.now()),IA},write:function(d,Y,b,v,z){for(var IA=0;IA<v;IA++)try{n(Y[b+IA])}catch{throw new a.ErrnoError(29)}return v&&(d.node.timestamp=Date.now()),IA}}),a.mkdev(F,N,k)},forceLoadFile:function(E){if(E.isDevice||E.isFolder||E.link||E.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");if(M)try{E.contents=bE(M(E.url),!0),E.usedBytes=E.contents.length}catch{throw new a.ErrnoError(29)}else throw new Error("Cannot load without read() or XMLHttpRequest.")},createLazyFile:function(E,i,s,n,F){function N(){this.lengthKnown=!1,this.chunks=[]}if(N.prototype.get=function(z){if(!(z>this.length-1||z<0)){var IA=z%this.chunkSize,rA=z/this.chunkSize|0;return this.getter(rA)[IA]}},N.prototype.setDataGetter=function(z){this.getter=z},N.prototype.cacheLength=function(){var z=new XMLHttpRequest;if(z.open("HEAD",s,!1),z.send(null),!(z.status>=200&&z.status<300||z.status===304))throw new Error("Couldn't load "+s+". Status: "+z.status);var IA=Number(z.getResponseHeader("Content-length")),rA,VA=(rA=z.getResponseHeader("Accept-Ranges"))&&rA==="bytes",DI=(rA=z.getResponseHeader("Content-Encoding"))&&rA==="gzip",oI=1024*1024;VA||(oI=IA);var RI=function(RA,aI){if(RA>aI)throw new Error("invalid range ("+RA+", "+aI+") or no bytes requested!");if(aI>IA-1)throw new Error("only "+IA+" bytes available! programmer error!");var qA=new XMLHttpRequest;if(qA.open("GET",s,!1),IA!==oI&&qA.setRequestHeader("Range","bytes="+RA+"-"+aI),typeof Uint8Array<"u"&&(qA.responseType="arraybuffer"),qA.overrideMimeType&&qA.overrideMimeType("text/plain; charset=x-user-defined"),qA.send(null),!(qA.status>=200&&qA.status<300||qA.status===304))throw new Error("Couldn't load "+s+". Status: "+qA.status);return qA.response!==void 0?new Uint8Array(qA.response||[]):bE(qA.responseText||"",!0)},QA=this;QA.setDataGetter(function(RA){var aI=RA*oI,qA=(RA+1)*oI-1;if(qA=Math.min(qA,IA-1),typeof QA.chunks[RA]>"u"&&(QA.chunks[RA]=RI(aI,qA)),typeof QA.chunks[RA]>"u")throw new Error("doXHR failed!");return QA.chunks[RA]}),(DI||!IA)&&(oI=IA=1,IA=this.getter(0).length,oI=IA,K("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=IA,this._chunkSize=oI,this.lengthKnown=!0},typeof XMLHttpRequest<"u"){if(!e)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var k=new N;Object.defineProperties(k,{length:{get:function(){return this.lengthKnown||this.cacheLength(),this._length}},chunkSize:{get:function(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}});var d={isDevice:!1,contents:k}}else var d={isDevice:!1,url:s};var Y=a.createFile(E,i,d,n,F);d.contents?Y.contents=d.contents:d.url&&(Y.contents=null,Y.url=d.url),Object.defineProperties(Y,{usedBytes:{get:function(){return this.contents.length}}});var b={},v=Object.keys(Y.stream_ops);return v.forEach(function(z){var IA=Y.stream_ops[z];b[z]=function(){return a.forceLoadFile(Y),IA.apply(null,arguments)}}),b.read=function(z,IA,rA,VA,DI){a.forceLoadFile(Y);var oI=z.node.contents;if(DI>=oI.length)return 0;var RI=Math.min(oI.length-DI,VA);if(oI.slice)for(var QA=0;QA<RI;QA++)IA[rA+QA]=oI[DI+QA];else for(var QA=0;QA<RI;QA++)IA[rA+QA]=oI.get(DI+QA);return RI},Y.stream_ops=b,Y},createPreloadedFile:function(E,i,s,n,F,N,k,d,Y,b){m.init();var v=i?CC.resolve(eI.join2(E,i)):E;function z(IA){function rA(DI){b&&b(),d||a.createDataFile(E,i,DI,n,F,Y),N&&N(),HA()}var VA=!1;I.preloadPlugins.forEach(function(DI){VA||DI.canHandle(v)&&(DI.handle(IA,v,rA,function(){k&&k(),HA()}),VA=!0)}),VA||rA(IA)}CA(),typeof s=="string"?m.asyncLoad(s,function(IA){z(IA)},k):z(s)},indexedDB:function(){return window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB},DB_NAME:function(){return"EM_FS_"+window.location.pathname},DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:function(E,i,s){i=i||function(){},s=s||function(){};var n=a.indexedDB();try{var F=n.open(a.DB_NAME(),a.DB_VERSION)}catch(N){return s(N)}F.onupgradeneeded=function(){K("creating db");var N=F.result;N.createObjectStore(a.DB_STORE_NAME)},F.onsuccess=function(){var N=F.result,k=N.transaction([a.DB_STORE_NAME],"readwrite"),d=k.objectStore(a.DB_STORE_NAME),Y=0,b=0,v=E.length;function z(){b==0?i():s()}E.forEach(function(IA){var rA=d.put(a.analyzePath(IA).object.contents,IA);rA.onsuccess=function(){Y++,Y+b==v&&z()},rA.onerror=function(){b++,Y+b==v&&z()}}),k.onerror=s},F.onerror=s},loadFilesFromDB:function(E,i,s){i=i||function(){},s=s||function(){};var n=a.indexedDB();try{var F=n.open(a.DB_NAME(),a.DB_VERSION)}catch(N){return s(N)}F.onupgradeneeded=s,F.onsuccess=function(){var N=F.result;try{var k=N.transaction([a.DB_STORE_NAME],"readonly")}catch(IA){s(IA);return}var d=k.objectStore(a.DB_STORE_NAME),Y=0,b=0,v=E.length;function z(){b==0?i():s()}E.forEach(function(IA){var rA=d.get(IA);rA.onsuccess=function(){a.analyzePath(IA).exists&&a.unlink(IA),a.createDataFile(eI.dirname(IA),eI.basename(IA),rA.result,!0,!0,!0),Y++,Y+b==v&&z()},rA.onerror=function(){b++,Y+b==v&&z()}}),k.onerror=s},F.onerror=s}},Z={mappings:{},DEFAULT_POLLMASK:5,umask:511,calculateAt:function(E,i){if(i[0]!=="/"){var s;if(E===-100)s=a.cwd();else{var n=a.getStream(E);if(!n)throw new a.ErrnoError(8);s=n.path}i=eI.join2(s,i)}return i},doStat:function(E,i,s){try{var n=E(i)}catch(F){if(F&&F.node&&eI.normalize(i)!==eI.normalize(a.getPath(F.node)))return-54;throw F}return GA[s>>2]=n.dev,GA[s+4>>2]=0,GA[s+8>>2]=n.ino,GA[s+12>>2]=n.mode,GA[s+16>>2]=n.nlink,GA[s+20>>2]=n.uid,GA[s+24>>2]=n.gid,GA[s+28>>2]=n.rdev,GA[s+32>>2]=0,gI=[n.size>>>0,(eA=n.size,+Math.abs(eA)>=1?eA>0?(Math.min(+Math.floor(eA/4294967296),4294967295)|0)>>>0:~~+Math.ceil((eA-+(~~eA>>>0))/4294967296)>>>0:0)],GA[s+40>>2]=gI[0],GA[s+44>>2]=gI[1],GA[s+48>>2]=4096,GA[s+52>>2]=n.blocks,GA[s+56>>2]=n.atime.getTime()/1e3|0,GA[s+60>>2]=0,GA[s+64>>2]=n.mtime.getTime()/1e3|0,GA[s+68>>2]=0,GA[s+72>>2]=n.ctime.getTime()/1e3|0,GA[s+76>>2]=0,gI=[n.ino>>>0,(eA=n.ino,+Math.abs(eA)>=1?eA>0?(Math.min(+Math.floor(eA/4294967296),4294967295)|0)>>>0:~~+Math.ceil((eA-+(~~eA>>>0))/4294967296)>>>0:0)],GA[s+80>>2]=gI[0],GA[s+84>>2]=gI[1],0},doMsync:function(E,i,s,n,F){var N=nI.slice(E,E+s);a.msync(i,N,F,s,n)},doMkdir:function(E,i){return E=eI.normalize(E),E[E.length-1]==="/"&&(E=E.substr(0,E.length-1)),a.mkdir(E,i,0),0},doMknod:function(E,i,s){switch(i&61440){case 32768:case 8192:case 24576:case 4096:case 49152:break;default:return-28}return a.mknod(E,i,s),0},doReadlink:function(E,i,s){if(s<=0)return-28;var n=a.readlink(E),F=Math.min(s,BA(n)),N=JA[i+F];return tA(n,i,s+1),JA[i+F]=N,F},doAccess:function(E,i){if(i&-8)return-28;var s,n=a.lookupPath(E,{follow:!0});if(s=n.node,!s)return-44;var F="";return i&4&&(F+="r"),i&2&&(F+="w"),i&1&&(F+="x"),F&&a.nodePermissions(s,F)?-2:0},doDup:function(E,i,s){var n=a.getStream(s);return n&&a.close(n),a.open(E,i,0,s,s).fd},doReadv:function(E,i,s,n){for(var F=0,N=0;N<s;N++){var k=GA[i+N*8>>2],d=GA[i+(N*8+4)>>2],Y=a.read(E,JA,k,d,n);if(Y<0)return-1;if(F+=Y,Y<d)break}return F},doWritev:function(E,i,s,n){for(var F=0,N=0;N<s;N++){var k=GA[i+N*8>>2],d=GA[i+(N*8+4)>>2],Y=a.write(E,JA,k,d,n);if(Y<0)return-1;F+=Y}return F},varargs:void 0,get:function(){Z.varargs+=4;var E=GA[Z.varargs-4>>2];return E},getStr:function(E){var i=_(E);return i},getStreamFromFD:function(E){var i=a.getStream(E);if(!i)throw new a.ErrnoError(8);return i},get64:function(E,i){return E}};function T(E,i,s){Z.varargs=s;try{var n=Z.getStreamFromFD(E);switch(i){case 0:{var F=Z.get();if(F<0)return-28;var N;return N=a.open(n.path,n.flags,0,F),N.fd}case 1:case 2:return 0;case 3:return n.flags;case 4:{var F=Z.get();return n.flags|=F,0}case 12:{var F=Z.get(),k=0;return AI[F+k>>1]=2,0}case 13:case 14:return 0;case 16:case 8:return-28;case 9:return bQ(28),-1;default:return-28}}catch(d){return(typeof a>"u"||!(d instanceof a.ErrnoError))&&UA(d),-d.errno}}function gA(E,i,s){Z.varargs=s;try{var n=Z.getStreamFromFD(E);switch(i){case 21509:case 21505:return n.tty?0:-59;case 21510:case 21511:case 21512:case 21506:case 21507:case 21508:return n.tty?0:-59;case 21519:{if(!n.tty)return-59;var F=Z.get();return GA[F>>2]=0,0}case 21520:return n.tty?-28:-59;case 21531:{var F=Z.get();return a.ioctl(n,i,F)}case 21523:return n.tty?0:-59;case 21524:return n.tty?0:-59;default:UA("bad ioctl syscall "+i)}}catch(N){return(typeof a>"u"||!(N instanceof a.ErrnoError))&&UA(N),-N.errno}}function KA(E,i,s){Z.varargs=s;try{var n=Z.getStr(E),F=Z.get(),N=a.open(n,i,F);return N.fd}catch(k){return(typeof a>"u"||!(k instanceof a.ErrnoError))&&UA(k),-k.errno}}var pA={};function bA(E){for(;E.length;){var i=E.pop(),s=E.pop();s(i)}}function TA(E){return this.fromWireType(LA[E>>2])}var zA={},OA={},PA={},SI=48,VI=57;function hg(E){if(E===void 0)return"_unknown";E=E.replace(/[^a-zA-Z0-9_]/g,"$");var i=E.charCodeAt(0);return i>=SI&&i<=VI?"_"+E:E}function dg(E,i){return E=hg(E),new Function("body","return function "+E+`() {
    "use strict" ;    return body.apply(this, arguments);
};
`)(i)}function HI(E,i){var s=dg(i,function(n){this.name=i,this.message=n;var F=new Error(n).stack;F!==void 0&&(this.stack=this.toString()+`
`+F.replace(/^Error(:[^\n]*)?\n/,""))});return s.prototype=Object.create(E.prototype),s.prototype.constructor=s,s.prototype.toString=function(){return this.message===void 0?this.name:this.name+": "+this.message},s}var sI=void 0;function CB(E){throw new sI(E)}function GI(E,i,s){E.forEach(function(d){PA[d]=i});function n(d){var Y=s(d);Y.length!==E.length&&CB("Mismatched type converter count");for(var b=0;b<E.length;++b)BC(E[b],Y[b])}var F=new Array(i.length),N=[],k=0;i.forEach(function(d,Y){OA.hasOwnProperty(d)?F[Y]=OA[d]:(N.push(d),zA.hasOwnProperty(d)||(zA[d]=[]),zA[d].push(function(){F[Y]=OA[d],++k,k===N.length&&n(F)}))}),N.length===0&&n(F)}function HC(E){var i=pA[E];delete pA[E];var s=i.elements,n=s.length,F=s.map(function(d){return d.getterReturnType}).concat(s.map(function(d){return d.setterArgumentType})),N=i.rawConstructor,k=i.rawDestructor;GI([E],F,function(d){return s.forEach(function(Y,b){var v=d[b],z=Y.getter,IA=Y.getterContext,rA=d[b+n],VA=Y.setter,DI=Y.setterContext;Y.read=function(oI){return v.fromWireType(z(IA,oI))},Y.write=function(oI,RI){var QA=[];VA(DI,oI,rA.toWireType(QA,RI)),bA(QA)}}),[{name:i.name,fromWireType:function(Y){for(var b=new Array(n),v=0;v<n;++v)b[v]=s[v].read(Y);return k(Y),b},toWireType:function(Y,b){if(n!==b.length)throw new TypeError("Incorrect number of tuple elements for "+i.name+": expected="+n+", actual="+b.length);for(var v=N(),z=0;z<n;++z)s[z].write(v,b[z]);return Y!==null&&Y.push(k,v),v},argPackAdvance:8,readValueFromPointer:TA,destructorFunction:k}]})}var yB={};function MB(E){var i=yB[E];delete yB[E];var s=i.rawConstructor,n=i.rawDestructor,F=i.fields,N=F.map(function(k){return k.getterReturnType}).concat(F.map(function(k){return k.setterArgumentType}));GI([E],N,function(k){var d={};return F.forEach(function(Y,b){var v=Y.fieldName,z=k[b],IA=Y.getter,rA=Y.getterContext,VA=k[b+F.length],DI=Y.setter,oI=Y.setterContext;d[v]={read:function(RI){return z.fromWireType(IA(rA,RI))},write:function(RI,QA){var RA=[];DI(oI,RI,VA.toWireType(RA,QA)),bA(RA)}}}),[{name:i.name,fromWireType:function(Y){var b={};for(var v in d)b[v]=d[v].read(Y);return n(Y),b},toWireType:function(Y,b){for(var v in d)if(!(v in b))throw new TypeError('Missing field:  "'+v+'"');var z=s();for(v in d)d[v].write(z,b[v]);return Y!==null&&Y.push(n,z),z},argPackAdvance:8,readValueFromPointer:TA,destructorFunction:n}]})}function UB(E){switch(E){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+E)}}function sg(){for(var E=new Array(256),i=0;i<256;++i)E[i]=String.fromCharCode(i);rC=E}var rC=void 0;function pI(E){for(var i="",s=E;nI[s];)i+=rC[nI[s++]];return i}var XI=void 0;function CI(E){throw new XI(E)}function BC(E,i,s){if(s=s||{},!("argPackAdvance"in i))throw new TypeError("registerType registeredInstance requires argPackAdvance");var n=i.name;if(E||CI('type "'+n+'" must have a positive integer typeid pointer'),OA.hasOwnProperty(E)){if(s.ignoreDuplicateRegistrations)return;CI("Cannot register type '"+n+"' twice")}if(OA[E]=i,delete PA[E],zA.hasOwnProperty(E)){var F=zA[E];delete zA[E],F.forEach(function(N){N()})}}function dE(E,i,s,n,F){var N=UB(s);i=pI(i),BC(E,{name:i,fromWireType:function(k){return!!k},toWireType:function(k,d){return d?n:F},argPackAdvance:8,readValueFromPointer:function(k){var d;if(s===1)d=JA;else if(s===2)d=AI;else if(s===4)d=GA;else throw new TypeError("Unknown boolean type size: "+i);return this.fromWireType(d[k>>N])},destructorFunction:null})}function K0(E){if(!(this instanceof BB)||!(E instanceof BB))return!1;for(var i=this.$$.ptrType.registeredClass,s=this.$$.ptr,n=E.$$.ptrType.registeredClass,F=E.$$.ptr;i.baseClass;)s=i.upcast(s),i=i.baseClass;for(;n.baseClass;)F=n.upcast(F),n=n.baseClass;return i===n&&s===F}function l0(E){return{count:E.count,deleteScheduled:E.deleteScheduled,preservePointerOnDelete:E.preservePointerOnDelete,ptr:E.ptr,ptrType:E.ptrType,smartPtr:E.smartPtr,smartPtrType:E.smartPtrType}}function no(E){function i(s){return s.$$.ptrType.registeredClass.name}CI(i(E)+" instance already deleted")}var ho=!1;function Ts(E){}function k0(E){E.smartPtr?E.smartPtrType.rawDestructor(E.smartPtr):E.ptrType.registeredClass.rawDestructor(E.ptr)}function Vs(E){E.count.value-=1;var i=E.count.value===0;i&&k0(E)}function TQ(E){return typeof FinalizationGroup>"u"?(TQ=function(i){return i},E):(ho=new FinalizationGroup(function(i){for(var s=i.next();!s.done;s=i.next()){var n=s.value;n.ptr?Vs(n):console.warn("object already deleted: "+n.ptr)}}),TQ=function(i){return ho.register(i,i.$$,i.$$),i},Ts=function(i){ho.unregister(i.$$)},TQ(E))}function d0(){if(this.$$.ptr||no(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var E=TQ(Object.create(Object.getPrototypeOf(this),{$$:{value:l0(this.$$)}}));return E.$$.count.value+=1,E.$$.deleteScheduled=!1,E}function J0(){this.$$.ptr||no(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&CI("Object already scheduled for deletion"),Ts(this),Vs(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function Y0(){return!this.$$.ptr}var VQ=void 0,WQ=[];function wo(){for(;WQ.length;){var E=WQ.pop();E.$$.deleteScheduled=!1,E.delete()}}function L0(){return this.$$.ptr||no(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&CI("Object already scheduled for deletion"),WQ.push(this),WQ.length===1&&VQ&&VQ(wo),this.$$.deleteScheduled=!0,this}function f0(){BB.prototype.isAliasOf=K0,BB.prototype.clone=d0,BB.prototype.delete=J0,BB.prototype.isDeleted=Y0,BB.prototype.deleteLater=L0}function BB(){}var Ws={};function Go(E,i,s){if(E[i].overloadTable===void 0){var n=E[i];E[i]=function(){return E[i].overloadTable.hasOwnProperty(arguments.length)||CI("Function '"+s+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+E[i].overloadTable+")!"),E[i].overloadTable[arguments.length].apply(this,arguments)},E[i].overloadTable=[],E[i].overloadTable[n.argCount]=n}}function Os(E,i,s){I.hasOwnProperty(E)?((s===void 0||I[E].overloadTable!==void 0&&I[E].overloadTable[s]!==void 0)&&CI("Cannot register public name '"+E+"' twice"),Go(I,E,E),I.hasOwnProperty(s)&&CI("Cannot register multiple overloads of a function with the same number of arguments ("+s+")!"),I[E].overloadTable[s]=i):(I[E]=i,s!==void 0&&(I[E].numArguments=s))}function u0(E,i,s,n,F,N,k,d){this.name=E,this.constructor=i,this.instancePrototype=s,this.rawDestructor=n,this.baseClass=F,this.getActualType=N,this.upcast=k,this.downcast=d,this.pureVirtualFunctions=[]}function JE(E,i,s){for(;i!==s;)i.upcast||CI("Expected null or instance of "+s.name+", got an instance of "+i.name),E=i.upcast(E),i=i.baseClass;return E}function H0(E,i){if(i===null)return this.isReference&&CI("null is not a valid "+this.name),0;i.$$||CI('Cannot pass "'+PB(i)+'" as a '+this.name),i.$$.ptr||CI("Cannot pass deleted object as a pointer of type "+this.name);var s=i.$$.ptrType.registeredClass,n=JE(i.$$.ptr,s,this.registeredClass);return n}function p0(E,i){var s;if(i===null)return this.isReference&&CI("null is not a valid "+this.name),this.isSmartPointer?(s=this.rawConstructor(),E!==null&&E.push(this.rawDestructor,s),s):0;i.$$||CI('Cannot pass "'+PB(i)+'" as a '+this.name),i.$$.ptr||CI("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&i.$$.ptrType.isConst&&CI("Cannot convert argument of type "+(i.$$.smartPtrType?i.$$.smartPtrType.name:i.$$.ptrType.name)+" to parameter type "+this.name);var n=i.$$.ptrType.registeredClass;if(s=JE(i.$$.ptr,n,this.registeredClass),this.isSmartPointer)switch(i.$$.smartPtr===void 0&&CI("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:i.$$.smartPtrType===this?s=i.$$.smartPtr:CI("Cannot convert argument of type "+(i.$$.smartPtrType?i.$$.smartPtrType.name:i.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:s=i.$$.smartPtr;break;case 2:if(i.$$.smartPtrType===this)s=i.$$.smartPtr;else{var F=i.clone();s=this.rawShare(s,ZQ(function(){F.delete()})),E!==null&&E.push(this.rawDestructor,s)}break;default:CI("Unsupporting sharing policy")}return s}function q0(E,i){if(i===null)return this.isReference&&CI("null is not a valid "+this.name),0;i.$$||CI('Cannot pass "'+PB(i)+'" as a '+this.name),i.$$.ptr||CI("Cannot pass deleted object as a pointer of type "+this.name),i.$$.ptrType.isConst&&CI("Cannot convert argument of type "+i.$$.ptrType.name+" to parameter type "+this.name);var s=i.$$.ptrType.registeredClass,n=JE(i.$$.ptr,s,this.registeredClass);return n}function m0(E){return this.rawGetPointee&&(E=this.rawGetPointee(E)),E}function x0(E){this.rawDestructor&&this.rawDestructor(E)}function b0(E){E!==null&&E.delete()}function Zs(E,i,s){if(i===s)return E;if(s.baseClass===void 0)return null;var n=Zs(E,i,s.baseClass);return n===null?null:s.downcast(n)}function T0(){return Object.keys(OQ).length}function V0(){var E=[];for(var i in OQ)OQ.hasOwnProperty(i)&&E.push(OQ[i]);return E}function W0(E){VQ=E,WQ.length&&VQ&&VQ(wo)}function O0(){I.getInheritedInstanceCount=T0,I.getLiveInheritedInstances=V0,I.flushPendingDeletes=wo,I.setDelayFunction=W0}var OQ={};function Z0(E,i){for(i===void 0&&CI("ptr should not be undefined");E.baseClass;)i=E.upcast(i),E=E.baseClass;return i}function v0(E,i){return i=Z0(E,i),OQ[i]}function YE(E,i){(!i.ptrType||!i.ptr)&&CB("makeClassHandle requires ptr and ptrType");var s=!!i.smartPtrType,n=!!i.smartPtr;return s!==n&&CB("Both smartPtrType and smartPtr must be specified"),i.count={value:1},TQ(Object.create(E,{$$:{value:i}}))}function X0(E){var i=this.getPointee(E);if(!i)return this.destructor(E),null;var s=v0(this.registeredClass,i);if(s!==void 0){if(s.$$.count.value===0)return s.$$.ptr=i,s.$$.smartPtr=E,s.clone();var n=s.clone();return this.destructor(E),n}function F(){return this.isSmartPointer?YE(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:i,smartPtrType:this,smartPtr:E}):YE(this.registeredClass.instancePrototype,{ptrType:this,ptr:E})}var N=this.registeredClass.getActualType(i),k=Ws[N];if(!k)return F.call(this);var d;this.isConst?d=k.constPointerType:d=k.pointerType;var Y=Zs(i,this.registeredClass,d.registeredClass);return Y===null?F.call(this):this.isSmartPointer?YE(d.registeredClass.instancePrototype,{ptrType:d,ptr:Y,smartPtrType:this,smartPtr:E}):YE(d.registeredClass.instancePrototype,{ptrType:d,ptr:Y})}function P0(){pC.prototype.getPointee=m0,pC.prototype.destructor=x0,pC.prototype.argPackAdvance=8,pC.prototype.readValueFromPointer=TA,pC.prototype.deleteObject=b0,pC.prototype.fromWireType=X0}function pC(E,i,s,n,F,N,k,d,Y,b,v){this.name=E,this.registeredClass=i,this.isReference=s,this.isConst=n,this.isSmartPointer=F,this.pointeeType=N,this.sharingPolicy=k,this.rawGetPointee=d,this.rawConstructor=Y,this.rawShare=b,this.rawDestructor=v,!F&&i.baseClass===void 0?n?(this.toWireType=H0,this.destructorFunction=null):(this.toWireType=q0,this.destructorFunction=null):this.toWireType=p0}function vs(E,i,s){I.hasOwnProperty(E)||CB("Replacing nonexistant public symbol"),I[E].overloadTable!==void 0&&s!==void 0?I[E].overloadTable[s]=i:(I[E]=i,I[E].argCount=s)}function j0(E,i,s){return s&&s.length?I["dynCall_"+E].apply(null,[i].concat(s)):I["dynCall_"+E].call(null,i)}function z0(E,i,s){return E.indexOf("j")!=-1?j0(E,i,s):II.get(i).apply(null,s)}function _0(E,i){EA(E.indexOf("j")>=0,"getDynCaller should only be called with i64 sigs");var s=[];return function(){s.length=arguments.length;for(var n=0;n<arguments.length;n++)s[n]=arguments[n];return z0(E,i,s)}}function Eg(E,i){E=pI(E);function s(){return E.indexOf("j")!=-1?_0(E,i):II.get(i)}var n=s();return typeof n!="function"&&CI("unknown function pointer with signature "+E+": "+i),n}var Xs=void 0;function Ps(E){var i=iD(E),s=pI(i);return qC(i),s}function SB(E,i){var s=[],n={};function F(N){if(!n[N]&&!OA[N]){if(PA[N]){PA[N].forEach(F);return}s.push(N),n[N]=!0}}throw i.forEach(F),new Xs(E+": "+s.map(Ps).join([", "]))}function $0(E,i,s,n,F,N,k,d,Y,b,v,z,IA){v=pI(v),N=Eg(F,N),d&&(d=Eg(k,d)),b&&(b=Eg(Y,b)),IA=Eg(z,IA);var rA=hg(v);Os(rA,function(){SB("Cannot construct "+v+" due to unbound types",[n])}),GI([E,i,s],n?[n]:[],function(VA){VA=VA[0];var DI,oI;n?(DI=VA.registeredClass,oI=DI.instancePrototype):oI=BB.prototype;var RI=dg(rA,function(){if(Object.getPrototypeOf(this)!==QA)throw new XI("Use 'new' to construct "+v);if(RA.constructor_body===void 0)throw new XI(v+" has no accessible constructor");var Jg=RA.constructor_body[arguments.length];if(Jg===void 0)throw new XI("Tried to invoke ctor of "+v+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(RA.constructor_body).toString()+") parameters instead!");return Jg.apply(this,arguments)}),QA=Object.create(oI,{constructor:{value:RI}});RI.prototype=QA;var RA=new u0(v,RI,QA,IA,DI,N,d,b),aI=new pC(v,RA,!0,!1,!1),qA=new pC(v+"*",RA,!1,!1,!1),Dg=new pC(v+" const*",RA,!1,!0,!1);return Ws[E]={pointerType:qA,constPointerType:Dg},vs(rA,RI),[aI,qA,Dg]})}function js(E,i){if(!(E instanceof Function))throw new TypeError("new_ called with constructor type "+typeof E+" which is not a function");var s=dg(E.name||"unknownFunctionName",function(){});s.prototype=E.prototype;var n=new s,F=E.apply(n,i);return F instanceof Object?F:n}function ro(E,i,s,n,F){var N=i.length;N<2&&CI("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var k=i[1]!==null&&s!==null,d=!1,Y=1;Y<i.length;++Y)if(i[Y]!==null&&i[Y].destructorFunction===void 0){d=!0;break}for(var b=i[0].name!=="void",v="",z="",Y=0;Y<N-2;++Y)v+=(Y!==0?", ":"")+"arg"+Y,z+=(Y!==0?", ":"")+"arg"+Y+"Wired";var IA="return function "+hg(E)+"("+v+`) {
if (arguments.length !== `+(N-2)+`) {
throwBindingError('function `+E+" called with ' + arguments.length + ' arguments, expected "+(N-2)+` args!');
}
`;d&&(IA+=`var destructors = [];
`);var rA=d?"destructors":"null",VA=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],DI=[CI,n,F,bA,i[0],i[1]];k&&(IA+="var thisWired = classParam.toWireType("+rA+`, this);
`);for(var Y=0;Y<N-2;++Y)IA+="var arg"+Y+"Wired = argType"+Y+".toWireType("+rA+", arg"+Y+"); // "+i[Y+2].name+`
`,VA.push("argType"+Y),DI.push(i[Y+2]);if(k&&(z="thisWired"+(z.length>0?", ":"")+z),IA+=(b?"var rv = ":"")+"invoker(fn"+(z.length>0?", ":"")+z+`);
`,d)IA+=`runDestructors(destructors);
`;else for(var Y=k?1:2;Y<i.length;++Y){var oI=Y===1?"thisWired":"arg"+(Y-2)+"Wired";i[Y].destructorFunction!==null&&(IA+=oI+"_dtor("+oI+"); // "+i[Y].name+`
`,VA.push(oI+"_dtor"),DI.push(i[Y].destructorFunction))}b&&(IA+=`var ret = retType.fromWireType(rv);
return ret;
`),IA+=`}
`,VA.push(IA);var RI=js(Function,VA).apply(null,DI);return RI}function LE(E,i){for(var s=[],n=0;n<E;n++)s.push(GA[(i>>2)+n]);return s}function Aw(E,i,s,n,F,N,k){var d=LE(s,n);i=pI(i),N=Eg(F,N),GI([],[E],function(Y){Y=Y[0];var b=Y.name+"."+i;function v(){SB("Cannot call "+b+" due to unbound types",d)}var z=Y.registeredClass.constructor;return z[i]===void 0?(v.argCount=s-1,z[i]=v):(Go(z,i,b),z[i].overloadTable[s-1]=v),GI([],d,function(IA){var rA=[IA[0],null].concat(IA.slice(1)),VA=ro(b,rA,null,N,k);return z[i].overloadTable===void 0?(VA.argCount=s-1,z[i]=VA):z[i].overloadTable[s-1]=VA,[]}),[]})}function Iw(E,i,s,n,F,N){EA(i>0);var k=LE(i,s);F=Eg(n,F);var d=[N],Y=[];GI([],[E],function(b){b=b[0];var v="constructor "+b.name;if(b.registeredClass.constructor_body===void 0&&(b.registeredClass.constructor_body=[]),b.registeredClass.constructor_body[i-1]!==void 0)throw new XI("Cannot register multiple constructors with identical number of parameters ("+(i-1)+") for class '"+b.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return b.registeredClass.constructor_body[i-1]=function(){SB("Cannot construct "+b.name+" due to unbound types",k)},GI([],k,function(z){return b.registeredClass.constructor_body[i-1]=function(){arguments.length!==i-1&&CI(v+" called with "+arguments.length+" arguments, expected "+(i-1)),Y.length=0,d.length=i;for(var IA=1;IA<i;++IA)d[IA]=z[IA].toWireType(Y,arguments[IA-1]);var rA=F.apply(null,d);return bA(Y),z[0].fromWireType(rA)},[]}),[]})}function gw(E,i,s,n,F,N,k,d){var Y=LE(s,n);i=pI(i),N=Eg(F,N),GI([],[E],function(b){b=b[0];var v=b.name+"."+i;d&&b.registeredClass.pureVirtualFunctions.push(i);function z(){SB("Cannot call "+v+" due to unbound types",Y)}var IA=b.registeredClass.instancePrototype,rA=IA[i];return rA===void 0||rA.overloadTable===void 0&&rA.className!==b.name&&rA.argCount===s-2?(z.argCount=s-2,z.className=b.name,IA[i]=z):(Go(IA,i,v),IA[i].overloadTable[s-2]=z),GI([],Y,function(VA){var DI=ro(v,VA,b,N,k);return IA[i].overloadTable===void 0?(DI.argCount=s-2,IA[i]=DI):IA[i].overloadTable[s-2]=DI,[]}),[]})}function zs(E,i,s){return E instanceof Object||CI(s+' with invalid "this": '+E),E instanceof i.registeredClass.constructor||CI(s+' incompatible with "this" of type '+E.constructor.name),E.$$.ptr||CI("cannot call emscripten binding method "+s+" on deleted object"),JE(E.$$.ptr,E.$$.ptrType.registeredClass,i.registeredClass)}function Cw(E,i,s,n,F,N,k,d,Y,b){i=pI(i),F=Eg(n,F),GI([],[E],function(v){v=v[0];var z=v.name+"."+i,IA={get:function(){SB("Cannot access "+z+" due to unbound types",[s,k])},enumerable:!0,configurable:!0};return Y?IA.set=function(){SB("Cannot access "+z+" due to unbound types",[s,k])}:IA.set=function(rA){CI(z+" is a read-only property")},Object.defineProperty(v.registeredClass.instancePrototype,i,IA),GI([],Y?[s,k]:[s],function(rA){var VA=rA[0],DI={get:function(){var RI=zs(this,v,z+" getter");return VA.fromWireType(F(N,RI))},enumerable:!0};if(Y){Y=Eg(d,Y);var oI=rA[1];DI.set=function(RI){var QA=zs(this,v,z+" setter"),RA=[];Y(b,QA,oI.toWireType(RA,RI)),bA(RA)}}return Object.defineProperty(v.registeredClass.instancePrototype,i,DI),[]}),[]})}function Bw(E,i,s){E=pI(E),GI([],[i],function(n){return n=n[0],I[E]=n.fromWireType(s),[]})}var co=[],Tg=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function _s(E){E>4&&--Tg[E].refcount===0&&(Tg[E]=void 0,co.push(E))}function Qw(){for(var E=0,i=5;i<Tg.length;++i)Tg[i]!==void 0&&++E;return E}function Ew(){for(var E=5;E<Tg.length;++E)if(Tg[E]!==void 0)return Tg[E];return null}function iw(){I.count_emval_handles=Qw,I.get_first_emval=Ew}function ZQ(E){switch(E){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:{var i=co.length?co.pop():Tg.length;return Tg[i]={refcount:1,value:E},i}}}function ow(E,i){i=pI(i),BC(E,{name:i,fromWireType:function(s){var n=Tg[s].value;return _s(s),n},toWireType:function(s,n){return ZQ(n)},argPackAdvance:8,readValueFromPointer:TA,destructorFunction:null})}function PB(E){if(E===null)return"null";var i=typeof E;return i==="object"||i==="array"||i==="function"?E.toString():""+E}function tw(E,i){switch(i){case 2:return function(s){return this.fromWireType(BI[s>>2])};case 3:return function(s){return this.fromWireType(vA[s>>3])};default:throw new TypeError("Unknown float type: "+E)}}function sw(E,i,s){var n=UB(s);i=pI(i),BC(E,{name:i,fromWireType:function(F){return F},toWireType:function(F,N){if(typeof N!="number"&&typeof N!="boolean")throw new TypeError('Cannot convert "'+PB(N)+'" to '+this.name);return N},argPackAdvance:8,readValueFromPointer:tw(i,n),destructorFunction:null})}function Dw(E,i,s,n,F,N){var k=LE(i,s);E=pI(E),F=Eg(n,F),Os(E,function(){SB("Cannot call "+E+" due to unbound types",k)},i-1),GI([],k,function(d){var Y=[d[0],null].concat(d.slice(1));return vs(E,ro(E,Y,null,F,N),i-1),[]})}function ew(E,i,s){switch(i){case 0:return s?function(n){return JA[n]}:function(n){return nI[n]};case 1:return s?function(n){return AI[n>>1]}:function(n){return V[n>>1]};case 2:return s?function(n){return GA[n>>2]}:function(n){return LA[n>>2]};default:throw new TypeError("Unknown integer type: "+E)}}function aw(E,i,s,n,F){i=pI(i),F===-1&&(F=4294967295);var N=UB(s),k=function(b){return b};if(n===0){var d=32-8*s;k=function(b){return b<<d>>>d}}var Y=i.indexOf("unsigned")!=-1;BC(E,{name:i,fromWireType:k,toWireType:function(b,v){if(typeof v!="number"&&typeof v!="boolean")throw new TypeError('Cannot convert "'+PB(v)+'" to '+this.name);if(v<n||v>F)throw new TypeError('Passing a number "'+PB(v)+'" from JS side to C/C++ side to an argument of type "'+i+'", which is outside the valid range ['+n+", "+F+"]!");return Y?v>>>0:v|0},argPackAdvance:8,readValueFromPointer:ew(i,N,n!==0),destructorFunction:null})}function nw(E,i,s){var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],F=n[i];function N(k){k=k>>2;var d=LA,Y=d[k],b=d[k+1];return new F($A,b,Y)}s=pI(s),BC(E,{name:s,fromWireType:N,argPackAdvance:8,readValueFromPointer:N},{ignoreDuplicateRegistrations:!0})}function hw(E,i){i=pI(i);var s=i==="std::string";BC(E,{name:i,fromWireType:function(n){var F=LA[n>>2],N;if(s)for(var k=n+4,d=0;d<=F;++d){var Y=n+4+d;if(d==F||nI[Y]==0){var b=Y-k,v=_(k,b);N===void 0?N=v:(N+="\0",N+=v),k=Y+1}}else{for(var z=new Array(F),d=0;d<F;++d)z[d]=String.fromCharCode(nI[n+4+d]);N=z.join("")}return qC(n),N},toWireType:function(n,F){F instanceof ArrayBuffer&&(F=new Uint8Array(F));var N,k=typeof F=="string";k||F instanceof Uint8Array||F instanceof Uint8ClampedArray||F instanceof Int8Array||CI("Cannot pass non-string to std::string"),s&&k?N=function(){return BA(F)}:N=function(){return F.length};var d=N(),Y=XQ(4+d+1);if(LA[Y>>2]=d,s&&k)tA(F,Y+4,d+1);else if(k)for(var b=0;b<d;++b){var v=F.charCodeAt(b);v>255&&(qC(Y),CI("String has UTF-16 code units that do not fit in 8 bits")),nI[Y+4+b]=v}else for(var b=0;b<d;++b)nI[Y+4+b]=F[b];return n!==null&&n.push(qC,Y),Y},argPackAdvance:8,readValueFromPointer:TA,destructorFunction:function(n){qC(n)}})}function ww(E,i,s){s=pI(s);var n,F,N,k,d;i===2?(n=nA,F=oA,k=uA,N=function(){return V},d=1):i===4&&(n=O,F=sA,k=DA,N=function(){return LA},d=2),BC(E,{name:s,fromWireType:function(Y){for(var b=LA[Y>>2],v=N(),z,IA=Y+4,rA=0;rA<=b;++rA){var VA=Y+4+rA*i;if(rA==b||v[VA>>d]==0){var DI=VA-IA,oI=n(IA,DI);z===void 0?z=oI:(z+="\0",z+=oI),IA=VA+i}}return qC(Y),z},toWireType:function(Y,b){typeof b!="string"&&CI("Cannot pass non-string to C++ string type "+s);var v=k(b),z=XQ(4+v+i);return LA[z>>2]=v>>d,F(b,z+4,v+i),Y!==null&&Y.push(qC,z),z},argPackAdvance:8,readValueFromPointer:TA,destructorFunction:function(Y){qC(Y)}})}function Gw(E,i,s,n,F,N){pA[E]={name:pI(i),rawConstructor:Eg(s,n),rawDestructor:Eg(F,N),elements:[]}}function rw(E,i,s,n,F,N,k,d,Y){pA[E].elements.push({getterReturnType:i,getter:Eg(s,n),getterContext:F,setterArgumentType:N,setter:Eg(k,d),setterContext:Y})}function cw(E,i,s,n,F,N){yB[E]={name:pI(i),rawConstructor:Eg(s,n),rawDestructor:Eg(F,N),fields:[]}}function Fw(E,i,s,n,F,N,k,d,Y,b){yB[E].fields.push({fieldName:pI(i),getterReturnType:s,getter:Eg(n,F),getterContext:N,setterArgumentType:k,setter:Eg(d,Y),setterContext:b})}function Rw(E,i){i=pI(i),BC(E,{isVoid:!0,name:i,argPackAdvance:0,fromWireType:function(){},toWireType:function(s,n){}})}var Nw={};function $s(E){var i=Nw[E];return i===void 0?pI(E):i}var Fo=[];function fE(E){return E||CI("Cannot use deleted val. handle = "+E),Tg[E].value}function yw(E,i,s,n){E=Fo[E],i=fE(i),s=$s(s),E(i,s,null,n)}function Mw(E){var i=Fo.length;return Fo.push(E),i}function AD(E,i){var s=OA[E];return s===void 0&&CI(i+" has unknown type "+Ps(E)),s}function Uw(E,i){for(var s=new Array(E),n=0;n<E;++n)s[n]=AD(GA[(i>>2)+n],"parameter "+n);return s}function Sw(E,i){for(var s=Uw(E,i),n=s[0],F=n.name+"_$"+s.slice(1).map(function(rA){return rA.name}).join("_")+"$",N=["retType"],k=[n],d="",Y=0;Y<E-1;++Y)d+=(Y!==0?", ":"")+"arg"+Y,N.push("argType"+Y),k.push(s[1+Y]);for(var b=hg("methodCaller_"+F),v="return function "+b+`(handle, name, destructors, args) {
`,z=0,Y=0;Y<E-1;++Y)v+="    var arg"+Y+" = argType"+Y+".readValueFromPointer(args"+(z?"+"+z:"")+`);
`,z+=s[Y+1].argPackAdvance;v+="    var rv = handle[name]("+d+`);
`;for(var Y=0;Y<E-1;++Y)s[Y+1].deleteObject&&(v+="    argType"+Y+".deleteObject(arg"+Y+`);
`);n.isVoid||(v+=`    return retType.toWireType(destructors, rv);
`),v+=`};
`,N.push(v);var IA=js(Function,N).apply(null,k);return Mw(IA)}function Kw(E){E>4&&(Tg[E].refcount+=1)}function lw(){return ZQ([])}function kw(E){return ZQ($s(E))}function dw(E,i,s){E=fE(E),i=fE(i),s=fE(s),E[i]=s}function Jw(E,i){E=AD(E,"_emval_take_value");var s=E.readValueFromPointer(i);return ZQ(s)}function Yw(){UA()}var Lw=!0;function fw(E,i){var s;if(E===0)s=Date.now();else if((E===1||E===4)&&Lw)s=UI();else return bQ(28),-1;return GA[i>>2]=s/1e3|0,GA[i+4>>2]=s%1e3*1e3*1e3|0,0}function uw(E,i,s){nI.copyWithin(E,i,i+s)}function Hw(){return nI.length}function pw(E){try{return l.grow(E-$A.byteLength+65535>>>16),yI(l.buffer),1}catch{}}function qw(E){E=E>>>0;var i=Hw(),s=1073741824;if(E>s)return!1;for(var n=16777216,F=1;F<=4;F*=2){var N=i*(1+.2/F);N=Math.min(N,E+100663296);var k=Math.min(s,xA(Math.max(n,E,N),65536)),d=pw(k);if(d)return!0}return!1}var ID={};function mw(){return t||"./this.program"}function vQ(){if(!vQ.strings){var E=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",i={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:E,_:mw()};for(var s in ID)i[s]=ID[s];var n=[];for(var s in i)n.push(s+"="+i[s]);vQ.strings=n}return vQ.strings}function xw(E,i){try{var s=0;return vQ().forEach(function(n,F){var N=i+s;GA[E+F*4>>2]=N,kA(n,N),s+=n.length+1}),0}catch(n){return(typeof a>"u"||!(n instanceof a.ErrnoError))&&UA(n),n.errno}}function bw(E,i){try{var s=vQ();GA[E>>2]=s.length;var n=0;return s.forEach(function(F){n+=F.length+1}),GA[i>>2]=n,0}catch(F){return(typeof a>"u"||!(F instanceof a.ErrnoError))&&UA(F),F.errno}}function Tw(E){try{var i=Z.getStreamFromFD(E);return a.close(i),0}catch(s){return(typeof a>"u"||!(s instanceof a.ErrnoError))&&UA(s),s.errno}}function Vw(E,i,s,n){try{var F=Z.getStreamFromFD(E),N=Z.doReadv(F,i,s);return GA[n>>2]=N,0}catch(k){return(typeof a>"u"||!(k instanceof a.ErrnoError))&&UA(k),k.errno}}function Ww(E,i,s,n,F){try{var N=Z.getStreamFromFD(E),k=4294967296,d=s*k+(i>>>0),Y=9007199254740992;return d<=-Y||d>=Y?-61:(a.llseek(N,d,n),gI=[N.position>>>0,(eA=N.position,+Math.abs(eA)>=1?eA>0?(Math.min(+Math.floor(eA/4294967296),4294967295)|0)>>>0:~~+Math.ceil((eA-+(~~eA>>>0))/4294967296)>>>0:0)],GA[F>>2]=gI[0],GA[F+4>>2]=gI[1],N.getdents&&d===0&&n===0&&(N.getdents=null),0)}catch(b){return(typeof a>"u"||!(b instanceof a.ErrnoError))&&UA(b),b.errno}}function Ow(E,i,s,n){try{var F=Z.getStreamFromFD(E),N=Z.doWritev(F,i,s);return GA[n>>2]=N,0}catch(k){return(typeof a>"u"||!(k instanceof a.ErrnoError))&&UA(k),k.errno}}function Zw(E){}function uE(E){return E%4===0&&(E%100!==0||E%400===0)}function Ro(E,i){for(var s=0,n=0;n<=i;s+=E[n++]);return s}var HE=[31,29,31,30,31,30,31,31,30,31,30,31],pE=[31,28,31,30,31,30,31,31,30,31,30,31];function qE(E,i){for(var s=new Date(E.getTime());i>0;){var n=uE(s.getFullYear()),F=s.getMonth(),N=(n?HE:pE)[F];if(i>N-s.getDate())i-=N-s.getDate()+1,s.setDate(1),F<11?s.setMonth(F+1):(s.setMonth(0),s.setFullYear(s.getFullYear()+1));else return s.setDate(s.getDate()+i),s}return s}function vw(E,i,s,n){var F=GA[n+40>>2],N={tm_sec:GA[n>>2],tm_min:GA[n+4>>2],tm_hour:GA[n+8>>2],tm_mday:GA[n+12>>2],tm_mon:GA[n+16>>2],tm_year:GA[n+20>>2],tm_wday:GA[n+24>>2],tm_yday:GA[n+28>>2],tm_isdst:GA[n+32>>2],tm_gmtoff:GA[n+36>>2],tm_zone:F?_(F):""},k=_(s),d={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var Y in d)k=k.replace(new RegExp(Y,"g"),d[Y]);var b=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],v=["January","February","March","April","May","June","July","August","September","October","November","December"];function z(QA,RA,aI){for(var qA=typeof QA=="number"?QA.toString():QA||"";qA.length<RA;)qA=aI[0]+qA;return qA}function IA(QA,RA){return z(QA,RA,"0")}function rA(QA,RA){function aI(Dg){return Dg<0?-1:Dg>0?1:0}var qA;return(qA=aI(QA.getFullYear()-RA.getFullYear()))===0&&(qA=aI(QA.getMonth()-RA.getMonth()))===0&&(qA=aI(QA.getDate()-RA.getDate())),qA}function VA(QA){switch(QA.getDay()){case 0:return new Date(QA.getFullYear()-1,11,29);case 1:return QA;case 2:return new Date(QA.getFullYear(),0,3);case 3:return new Date(QA.getFullYear(),0,2);case 4:return new Date(QA.getFullYear(),0,1);case 5:return new Date(QA.getFullYear()-1,11,31);case 6:return new Date(QA.getFullYear()-1,11,30)}}function DI(QA){var RA=qE(new Date(QA.tm_year+1900,0,1),QA.tm_yday),aI=new Date(RA.getFullYear(),0,4),qA=new Date(RA.getFullYear()+1,0,4),Dg=VA(aI),Jg=VA(qA);return rA(Dg,RA)<=0?rA(Jg,RA)<=0?RA.getFullYear()+1:RA.getFullYear():RA.getFullYear()-1}var oI={"%a":function(QA){return b[QA.tm_wday].substring(0,3)},"%A":function(QA){return b[QA.tm_wday]},"%b":function(QA){return v[QA.tm_mon].substring(0,3)},"%B":function(QA){return v[QA.tm_mon]},"%C":function(QA){var RA=QA.tm_year+1900;return IA(RA/100|0,2)},"%d":function(QA){return IA(QA.tm_mday,2)},"%e":function(QA){return z(QA.tm_mday,2," ")},"%g":function(QA){return DI(QA).toString().substring(2)},"%G":function(QA){return DI(QA)},"%H":function(QA){return IA(QA.tm_hour,2)},"%I":function(QA){var RA=QA.tm_hour;return RA==0?RA=12:RA>12&&(RA-=12),IA(RA,2)},"%j":function(QA){return IA(QA.tm_mday+Ro(uE(QA.tm_year+1900)?HE:pE,QA.tm_mon-1),3)},"%m":function(QA){return IA(QA.tm_mon+1,2)},"%M":function(QA){return IA(QA.tm_min,2)},"%n":function(){return`
`},"%p":function(QA){return QA.tm_hour>=0&&QA.tm_hour<12?"AM":"PM"},"%S":function(QA){return IA(QA.tm_sec,2)},"%t":function(){return"	"},"%u":function(QA){return QA.tm_wday||7},"%U":function(QA){var RA=new Date(QA.tm_year+1900,0,1),aI=RA.getDay()===0?RA:qE(RA,7-RA.getDay()),qA=new Date(QA.tm_year+1900,QA.tm_mon,QA.tm_mday);if(rA(aI,qA)<0){var Dg=Ro(uE(qA.getFullYear())?HE:pE,qA.getMonth()-1)-31,Jg=31-aI.getDate(),lB=Jg+Dg+qA.getDate();return IA(Math.ceil(lB/7),2)}return rA(aI,RA)===0?"01":"00"},"%V":function(QA){var RA=new Date(QA.tm_year+1900,0,4),aI=new Date(QA.tm_year+1901,0,4),qA=VA(RA),Dg=VA(aI),Jg=qE(new Date(QA.tm_year+1900,0,1),QA.tm_yday);if(rA(Jg,qA)<0)return"53";if(rA(Dg,Jg)<=0)return"01";var lB;return qA.getFullYear()<QA.tm_year+1900?lB=QA.tm_yday+32-qA.getDate():lB=QA.tm_yday+1-qA.getDate(),IA(Math.ceil(lB/7),2)},"%w":function(QA){return QA.tm_wday},"%W":function(QA){var RA=new Date(QA.tm_year,0,1),aI=RA.getDay()===1?RA:qE(RA,RA.getDay()===0?1:7-RA.getDay()+1),qA=new Date(QA.tm_year+1900,QA.tm_mon,QA.tm_mday);if(rA(aI,qA)<0){var Dg=Ro(uE(qA.getFullYear())?HE:pE,qA.getMonth()-1)-31,Jg=31-aI.getDate(),lB=Jg+Dg+qA.getDate();return IA(Math.ceil(lB/7),2)}return rA(aI,RA)===0?"01":"00"},"%y":function(QA){return(QA.tm_year+1900).toString().substring(2)},"%Y":function(QA){return QA.tm_year+1900},"%z":function(QA){var RA=QA.tm_gmtoff,aI=RA>=0;return RA=Math.abs(RA)/60,RA=RA/60*100+RA%60,(aI?"+":"-")+("0000"+RA).slice(-4)},"%Z":function(QA){return QA.tm_zone},"%%":function(){return"%"}};for(var Y in oI)k.indexOf(Y)>=0&&(k=k.replace(new RegExp(Y,"g"),oI[Y](N)));var RI=bE(k,!1);return RI.length>i?0:(SA(RI,E),RI.length-1)}function Xw(E,i,s,n){return vw(E,i,s,n)}I.requestFullscreen=function(E,i){m.requestFullscreen(E,i)},I.requestAnimationFrame=function(E){m.requestAnimationFrame(E)},I.setCanvasSize=function(E,i,s){m.setCanvasSize(E,i,s)},I.pauseMainLoop=function(){m.mainLoop.pause()},I.resumeMainLoop=function(){m.mainLoop.resume()},I.getUserMedia=function(){m.getUserMedia()},I.createContext=function(E,i,s,n){return m.createContext(E,i,s,n)};var gD=function(E,i,s,n){E||(E=this),this.parent=E,this.mount=E.mount,this.mounted=null,this.id=a.nextInode++,this.name=i,this.mode=s,this.node_ops={},this.stream_ops={},this.rdev=n},mE=365,xE=146;Object.defineProperties(gD.prototype,{read:{get:function(){return(this.mode&mE)===mE},set:function(E){E?this.mode|=mE:this.mode&=~mE}},write:{get:function(){return(this.mode&xE)===xE},set:function(E){E?this.mode|=xE:this.mode&=~xE}},isFolder:{get:function(){return a.isDir(this.mode)}},isDevice:{get:function(){return a.isChrdev(this.mode)}}}),a.FSNode=gD,a.staticInit(),I.FS_createPath=a.createPath,I.FS_createDataFile=a.createDataFile,I.FS_createPreloadedFile=a.createPreloadedFile,I.FS_createLazyFile=a.createLazyFile,I.FS_createDevice=a.createDevice,I.FS_unlink=a.unlink,sI=I.InternalError=HI(Error,"InternalError"),sg(),XI=I.BindingError=HI(Error,"BindingError"),f0(),P0(),O0(),Xs=I.UnboundTypeError=HI(Error,"UnboundTypeError"),iw();function bE(E,i,s){var n=s>0?s:BA(E)+1,F=new Array(n),N=$(E,F,0,F.length);return i&&(F.length=N),F}function CD(E){for(var i=[],s=0;s<E.length;s++){var n=E[s];n>255&&(n&=255),i.push(String.fromCharCode(n))}return i.join("")}var Pw=typeof atob=="function"?atob:function(E){var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",s="",n,F,N,k,d,Y,b,v=0;E=E.replace(/[^A-Za-z0-9\+\/\=]/g,"");do k=i.indexOf(E.charAt(v++)),d=i.indexOf(E.charAt(v++)),Y=i.indexOf(E.charAt(v++)),b=i.indexOf(E.charAt(v++)),n=k<<2|d>>4,F=(d&15)<<4|Y>>2,N=(Y&3)<<6|b,s=s+String.fromCharCode(n),Y!==64&&(s=s+String.fromCharCode(F)),b!==64&&(s=s+String.fromCharCode(N));while(v<E.length);return s};function jw(E){if(typeof w=="boolean"&&w){var i;try{i=Buffer.from(E,"base64")}catch{i=new Buffer(E,"base64")}return new Uint8Array(i.buffer,i.byteOffset,i.byteLength)}try{for(var s=Pw(E),n=new Uint8Array(s.length),F=0;F<s.length;++F)n[F]=s.charCodeAt(F);return n}catch{throw new Error("Converting base64 string to bytes failed.")}}function KB(E){if(lA(E))return jw(E.slice(dA.length))}FI.push({func:function(){QD()}});var BD={__cxa_allocate_exception:KE,__cxa_atexit:lE,__cxa_throw:XB,__sys_fcntl64:T,__sys_ioctl:gA,__sys_open:KA,_embind_finalize_value_array:HC,_embind_finalize_value_object:MB,_embind_register_bool:dE,_embind_register_class:$0,_embind_register_class_class_function:Aw,_embind_register_class_constructor:Iw,_embind_register_class_function:gw,_embind_register_class_property:Cw,_embind_register_constant:Bw,_embind_register_emval:ow,_embind_register_float:sw,_embind_register_function:Dw,_embind_register_integer:aw,_embind_register_memory_view:nw,_embind_register_std_string:hw,_embind_register_std_wstring:ww,_embind_register_value_array:Gw,_embind_register_value_array_element:rw,_embind_register_value_object:cw,_embind_register_value_object_field:Fw,_embind_register_void:Rw,_emval_call_void_method:yw,_emval_decref:_s,_emval_get_method_caller:Sw,_emval_incref:Kw,_emval_new_array:lw,_emval_new_cstring:kw,_emval_set_property:dw,_emval_take_value:Jw,abort:Yw,clock_gettime:fw,emscripten_memcpy_big:uw,emscripten_resize_heap:qw,environ_get:xw,environ_sizes_get:bw,fd_close:Tw,fd_read:Vw,fd_seek:Ww,fd_write:Ow,setTempRet0:Zw,strftime_l:Xw};cA();var QD=I.___wasm_call_ctors=function(){return(QD=I.___wasm_call_ctors=I.asm.__wasm_call_ctors).apply(null,arguments)},XQ=I._malloc=function(){return(XQ=I._malloc=I.asm.malloc).apply(null,arguments)},qC=I._free=function(){return(qC=I._free=I.asm.free).apply(null,arguments)},ED=I.___errno_location=function(){return(ED=I.___errno_location=I.asm.__errno_location).apply(null,arguments)},iD=I.___getTypeName=function(){return(iD=I.___getTypeName=I.asm.__getTypeName).apply(null,arguments)};I.___embind_register_native_and_builtin_types=function(){return(I.___embind_register_native_and_builtin_types=I.asm.__embind_register_native_and_builtin_types).apply(null,arguments)},I._emscripten_main_thread_process_queued_calls=function(){return(I._emscripten_main_thread_process_queued_calls=I.asm.emscripten_main_thread_process_queued_calls).apply(null,arguments)},I.stackSave=function(){return(I.stackSave=I.asm.stackSave).apply(null,arguments)},I.stackRestore=function(){return(I.stackRestore=I.asm.stackRestore).apply(null,arguments)},I.stackAlloc=function(){return(I.stackAlloc=I.asm.stackAlloc).apply(null,arguments)},I._setThrew=function(){return(I._setThrew=I.asm.setThrew).apply(null,arguments)},I.___cxa_demangle=function(){return(I.___cxa_demangle=I.asm.__cxa_demangle).apply(null,arguments)},I.dynCall_viijii=function(){return(I.dynCall_viijii=I.asm.dynCall_viijii).apply(null,arguments)},I.dynCall_ji=function(){return(I.dynCall_ji=I.asm.dynCall_ji).apply(null,arguments)},I.dynCall_vij=function(){return(I.dynCall_vij=I.asm.dynCall_vij).apply(null,arguments)},I.dynCall_jiji=function(){return(I.dynCall_jiji=I.asm.dynCall_jiji).apply(null,arguments)},I.dynCall_iiiiij=function(){return(I.dynCall_iiiiij=I.asm.dynCall_iiiiij).apply(null,arguments)},I.dynCall_iiiiijj=function(){return(I.dynCall_iiiiijj=I.asm.dynCall_iiiiijj).apply(null,arguments)},I.dynCall_iiiiiijj=function(){return(I.dynCall_iiiiiijj=I.asm.dynCall_iiiiiijj).apply(null,arguments)},I.addRunDependency=CA,I.removeRunDependency=HA,I.FS_createPath=a.createPath,I.FS_createDataFile=a.createDataFile,I.FS_createPreloadedFile=a.createPreloadedFile,I.FS_createLazyFile=a.createLazyFile,I.FS_createDevice=a.createDevice,I.FS_unlink=a.unlink;var TE;function oD(E){this.name="ExitStatus",this.message="Program terminated with exit("+E+")",this.status=E}FA=function E(){TE||No(),TE||(FA=E)};function No(E){if(YA>0||(f(),YA>0))return;function i(){TE||(TE=!0,I.calledRun=!0,!u&&(S(),AA(),C(I),I.onRuntimeInitialized&&I.onRuntimeInitialized(),hA()))}I.setStatus?(I.setStatus("Running..."),setTimeout(function(){setTimeout(function(){I.setStatus("")},1),i()},1)):i()}if(I.run=No,I.preInit)for(typeof I.preInit=="function"&&(I.preInit=[I.preInit]);I.preInit.length>0;)I.preInit.pop()();No(),typeof I.FS>"u"&&typeof a<"u"&&(I.FS=a),I.imread=function(E){var i=null;typeof E=="string"?i=document.getElementById(E):i=E;var s=null,n=null;if(i instanceof HTMLImageElement)s=document.createElement("canvas"),s.width=i.width,s.height=i.height,n=s.getContext("2d"),n.drawImage(i,0,0,i.width,i.height);else if(i instanceof HTMLCanvasElement)s=i,n=s.getContext("2d");else throw new Error("Please input the valid canvas or img id.");var F=n.getImageData(0,0,s.width,s.height);return A.matFromImageData(F)},I.imshow=function(E,i){var s=null;if(typeof E=="string"?s=document.getElementById(E):s=E,!(s instanceof HTMLCanvasElement))throw new Error("Please input the valid canvas element or id.");if(!(i instanceof A.Mat))throw new Error("Please input the valid cv.Mat instance.");var n=new A.Mat,F=i.type()%8,N=F<=A.CV_8S?1:F<=A.CV_32S?1/256:255,k=F===A.CV_8S||F===A.CV_16S?128:0;switch(i.convertTo(n,A.CV_8U,N,k),n.type()){case A.CV_8UC1:A.cvtColor(n,n,A.COLOR_GRAY2RGBA);break;case A.CV_8UC3:A.cvtColor(n,n,A.COLOR_RGB2RGBA);break;case A.CV_8UC4:break;default:throw new Error("Bad number of channels (Source image must have 1, 3 or 4 channels)")}var d=new ImageData(new Uint8ClampedArray(n.data),n.cols,n.rows),Y=s.getContext("2d");Y.clearRect(0,0,s.width,s.height),s.width=d.width,s.height=d.height,Y.putImageData(d,0,0),n.delete()},I.VideoCapture=function(E){var i=null;if(typeof E=="string"?i=document.getElementById(E):i=E,!(i instanceof HTMLVideoElement))throw new Error("Please input the valid video element or id.");var s=document.createElement("canvas");s.width=i.width,s.height=i.height;var n=s.getContext("2d");this.video=i,this.read=function(F){if(!(F instanceof A.Mat))throw new Error("Please input the valid cv.Mat instance.");if(F.type()!==A.CV_8UC4)throw new Error("Bad type of input mat: the type should be cv.CV_8UC4.");if(F.cols!==i.width||F.rows!==i.height)throw new Error("Bad size of input mat: the size should be same as the video.");n.drawImage(i,0,0,i.width,i.height),F.data.set(n.getImageData(0,0,i.width,i.height).data)}};function zw(E,i){this.start=typeof E>"u"?0:E,this.end=typeof i>"u"?0:i}I.Range=zw;function VE(E,i){this.x=typeof E>"u"?0:E,this.y=typeof i>"u"?0:i}I.Point=VE;function _w(E,i){this.width=typeof E>"u"?0:E,this.height=typeof i>"u"?0:i}I.Size=_w;function $w(){switch(arguments.length){case 0:{this.x=0,this.y=0,this.width=0,this.height=0;break}case 1:{var E=arguments[0];this.x=E.x,this.y=E.y,this.width=E.width,this.height=E.height;break}case 2:{var i=arguments[0],s=arguments[1];this.x=i.x,this.y=i.y,this.width=s.width,this.height=s.height;break}case 4:{this.x=arguments[0],this.y=arguments[1],this.width=arguments[2],this.height=arguments[3];break}default:throw new Error("Invalid arguments")}}I.Rect=$w;function WE(){switch(arguments.length){case 0:{this.center={x:0,y:0},this.size={width:0,height:0},this.angle=0;break}case 3:{this.center=arguments[0],this.size=arguments[1],this.angle=arguments[2];break}default:throw new Error("Invalid arguments")}}WE.points=function(E){return I.rotatedRectPoints(E)},WE.boundingRect=function(E){return I.rotatedRectBoundingRect(E)},WE.boundingRect2f=function(E){return I.rotatedRectBoundingRect2f(E)},I.RotatedRect=WE;function OE(E,i,s,n){this.push(typeof E>"u"?0:E),this.push(typeof i>"u"?0:i),this.push(typeof s>"u"?0:s),this.push(typeof n>"u"?0:n)}OE.prototype=new Array,OE.all=function(E){return new OE(E,E,E,E)},I.Scalar=OE;function AG(){switch(arguments.length){case 0:{this.minVal=0,this.maxVal=0,this.minLoc=new VE,this.maxLoc=new VE;break}case 4:{this.minVal=arguments[0],this.maxVal=arguments[1],this.minLoc=arguments[2],this.maxLoc=arguments[3];break}default:throw new Error("Invalid arguments")}}I.MinMaxLoc=AG;function IG(){switch(arguments.length){case 0:{this.center=new VE,this.radius=0;break}case 2:{this.center=arguments[0],this.radius=arguments[1];break}default:throw new Error("Invalid arguments")}}I.Circle=IG;function gG(){switch(arguments.length){case 0:{this.type=0,this.maxCount=0,this.epsilon=0;break}case 3:{this.type=arguments[0],this.maxCount=arguments[1],this.epsilon=arguments[2];break}default:throw new Error("Invalid arguments")}}return I.TermCriteria=gG,I.matFromArray=function(E,i,s,n){var F=new A.Mat(E,i,s);switch(s){case A.CV_8U:case A.CV_8UC1:case A.CV_8UC2:case A.CV_8UC3:case A.CV_8UC4:{F.data.set(n);break}case A.CV_8S:case A.CV_8SC1:case A.CV_8SC2:case A.CV_8SC3:case A.CV_8SC4:{F.data8S.set(n);break}case A.CV_16U:case A.CV_16UC1:case A.CV_16UC2:case A.CV_16UC3:case A.CV_16UC4:{F.data16U.set(n);break}case A.CV_16S:case A.CV_16SC1:case A.CV_16SC2:case A.CV_16SC3:case A.CV_16SC4:{F.data16S.set(n);break}case A.CV_32S:case A.CV_32SC1:case A.CV_32SC2:case A.CV_32SC3:case A.CV_32SC4:{F.data32S.set(n);break}case A.CV_32F:case A.CV_32FC1:case A.CV_32FC2:case A.CV_32FC3:case A.CV_32FC4:{F.data32F.set(n);break}case A.CV_64F:case A.CV_64FC1:case A.CV_64FC2:case A.CV_64FC3:case A.CV_64FC4:{F.data64F.set(n);break}default:throw new Error("Type is unsupported")}return F},I.matFromImageData=function(E){var i=new A.Mat(E.height,E.width,A.CV_8UC4);return i.data.set(E.data),i},A.ready}}();R0(oU);let N0=!1;const y0={},M0=[],tU=async()=>N0?!0:new Promise((g,A)=>{M0.push(g)});R0().then(g=>{N0=!0,Object.assign(y0,g),M0.forEach(A=>{A()})});const KI=y0,MC=[[0,-3.406404,5.979507],[0,-1.126865,7.475604],[0,-2.089024,6.058267],[-.463928,.955357,6.633583],[0,-.46317,7.58658],[0,.365669,7.24287],[0,2.473255,5.788627],[-4.253081,2.577646,3.279702],[0,4.019042,5.284764],[0,4.885979,5.385258],[0,8.261778,4.481535],[0,-3.706811,5.864924],[0,-3.918301,5.56943],[0,-3.994436,5.219482],[0,-4.5424,5.404754],[0,-4.745577,5.529457],[0,-5.019567,5.601448],[0,-5.365123,5.535441],[0,-6.149624,5.071372],[0,-1.501095,7.112196],[-.416106,-1.466449,6.447657],[-7.08796,5.434801,.09962],[-2.628639,2.035898,3.848121],[-3.198363,1.985815,3.796952],[-3.775151,2.039402,3.646194],[-4.465819,2.42295,3.155168],[-2.164289,2.189867,3.851822],[-3.208229,3.223926,4.115822],[-2.673803,3.205337,4.092203],[-3.745193,3.165286,3.972409],[-4.161018,3.059069,3.719554],[-5.062006,1.934418,2.776093],[-2.266659,-7.425768,4.389812],[-4.445859,2.663991,3.173422],[-7.21453,2.263009,.07315],[-5.799793,2.349546,2.204059],[-2.844939,-.720868,4.43313],[-.711452,-3.329355,5.877044],[-.606033,-3.924562,5.444923],[-1.431615,-3.500953,5.496189],[-1.91491,-3.803146,5.02893],[-1.131043,-3.973937,5.189648],[-1.563548,-4.082763,4.842263],[-2.650112,-5.003649,4.188483],[-.427049,-1.094134,7.360529],[-.496396,-.475659,7.440358],[-5.253307,3.881582,3.363159],[-1.718698,.974609,4.558359],[-1.608635,-.942516,5.814193],[-1.651267,-.610868,5.581319],[-4.765501,-.701554,3.534632],[-.478306,.295766,7.101013],[-3.734964,4.50823,4.550454],[-4.588603,4.302037,4.048484],[-6.279331,6.615427,1.42585],[-1.220941,4.142165,5.106035],[-2.193489,3.100317,4.000575],[-3.102642,-4.352984,4.095905],[-6.719682,-4.788645,-1.745401],[-1.193824,-1.306795,5.737747],[-.729766,-1.593712,5.833208],[-2.456206,-4.342621,4.283884],[-2.204823,-4.304508,4.162499],[-4.985894,4.802461,3.751977],[-1.592294,-1.257709,5.456949],[-2.644548,4.524654,4.921559],[-2.760292,5.100971,5.01599],[-3.523964,8.005976,3.729163],[-5.599763,5.71547,2.724259],[-3.063932,6.566144,4.529981],[-5.720968,4.254584,2.830852],[-6.374393,4.78559,1.591691],[-.672728,-3.688016,5.737804],[-1.26256,-3.787691,5.417779],[-1.732553,-3.952767,5.000579],[-1.043625,-1.464973,5.662455],[-2.321234,-4.329069,4.258156],[-2.056846,-4.477671,4.520883],[-2.153084,-4.276322,4.038093],[-.946874,-1.035249,6.512274],[-1.469132,-4.036351,4.604908],[-1.02434,-3.989851,4.926693],[-.533422,-3.993222,5.138202],[-.76972,-6.095394,4.985883],[-.699606,-5.29185,5.448304],[-.669687,-4.94977,5.509612],[-.630947,-4.695101,5.449371],[-.583218,-4.517982,5.339869],[-1.53717,-4.423206,4.74547],[-1.6156,-4.475942,4.813632],[-1.729053,-4.61868,4.854463],[-1.838624,-4.828746,4.823737],[-2.36825,-3.106237,4.868096],[-7.542244,-1.049282,-2.431321],[0,-1.724003,6.60139],[-1.826614,-4.399531,4.399021],[-1.929558,-4.411831,4.497052],[-.597442,-2.013686,5.866456],[-1.405627,-1.714196,5.241087],[-.662449,-1.819321,5.863759],[-2.34234,.572222,4.294303],[-3.327324,.104863,4.11386],[-1.726175,-.919165,5.273355],[-5.133204,7.485602,2.660442],[-4.538641,6.319907,3.683424],[-3.986562,5.109487,4.466315],[-2.169681,-5.440433,4.455874],[-1.395634,5.011963,5.316032],[-1.6195,6.599217,4.921106],[-1.891399,8.236377,4.274997],[-4.195832,2.235205,3.375099],[-5.733342,1.411738,2.431726],[-1.859887,2.355757,3.843181],[-4.988612,3.074654,3.083858],[-1.303263,1.416453,4.831091],[-1.305757,-.672779,6.415959],[-6.46517,.937119,1.689873],[-5.258659,.945811,2.974312],[-4.432338,.722096,3.522615],[-3.300681,.861641,3.872784],[-2.430178,1.131492,4.039035],[-1.820731,1.467954,4.224124],[-.563221,2.307693,5.566789],[-6.338145,-.529279,1.881175],[-5.587698,3.208071,2.687839],[-.242624,-1.462857,7.071491],[-1.611251,.339326,4.895421],[-7.743095,2.364999,-2.005167],[-1.391142,1.851048,4.448999],[-1.785794,-.978284,4.85047],[-4.670959,2.664461,3.084075],[-1.33397,-.283761,6.097047],[-7.270895,-2.890917,-2.252455],[-1.856432,2.585245,3.757904],[-.923388,.073076,6.671944],[-5.000589,-6.135128,1.892523],[-5.085276,-7.17859,.714711],[-7.159291,-.81182,-.072044],[-5.843051,-5.248023,.924091],[-6.847258,3.662916,.724695],[-2.412942,-8.258853,4.119213],[-.179909,-1.689864,6.573301],[-2.103655,-.163946,4.566119],[-6.407571,2.236021,1.560843],[-3.670075,2.360153,3.63523],[-3.177186,2.294265,3.775704],[-2.196121,-4.598322,4.479786],[-6.234883,-1.94443,1.663542],[-1.292924,-9.29592,4.094063],[-3.210651,-8.533278,2.802001],[-4.068926,-7.993109,1.925119],[0,6.54539,5.027311],[0,-9.403378,4.264492],[-2.724032,2.315802,3.777151],[-2.28846,2.398891,3.697603],[-1.998311,2.496547,3.689148],[-6.13004,3.399261,2.038516],[-2.28846,2.886504,3.775031],[-2.724032,2.96181,3.871767],[-3.177186,2.964136,3.876973],[-3.670075,2.927714,3.724325],[-4.018389,2.857357,3.482983],[-7.555811,4.106811,-.991917],[-4.018389,2.483695,3.440898],[0,-2.521945,5.932265],[-1.776217,-2.683946,5.213116],[-1.222237,-1.182444,5.952465],[-.731493,-2.536683,5.815343],[0,3.271027,5.236015],[-4.135272,-6.996638,2.67197],[-3.311811,-7.660815,3.382963],[-1.313701,-8.639995,4.702456],[-5.940524,-6.223629,-.631468],[-1.998311,2.743838,3.74403],[-.901447,1.236992,5.754256],[0,-8.765243,4.891441],[-2.308977,-8.974196,3.60907],[-6.954154,-2.439843,-.131163],[-1.098819,-4.458788,5.120727],[-1.181124,-4.579996,5.189564],[-1.255818,-4.787901,5.237051],[-1.325085,-5.106507,5.20501],[-1.546388,-5.819392,4.757893],[-1.953754,-4.183892,4.431713],[-2.117802,-4.137093,4.555096],[-2.285339,-4.051196,4.582438],[-2.85016,-3.66572,4.484994],[-5.278538,-2.238942,2.861224],[-.946709,1.907628,5.196779],[-1.314173,3.104912,4.231404],[-1.78,2.86,3.881555],[-1.84511,-4.09888,4.247264],[-5.436187,-4.030482,2.109852],[-.766444,3.182131,4.861453],[-1.938616,-6.61441,4.521085],[0,1.059413,6.774605],[-.516573,1.583572,6.148363],[0,1.728369,6.31675],[-1.246815,.230297,5.681036],[0,-7.942194,5.181173],[0,-6.991499,5.153478],[-.997827,-6.930921,4.979576],[-3.288807,-5.382514,3.795752],[-2.311631,-1.566237,4.590085],[-2.68025,-6.111567,4.096152],[-3.832928,-1.537326,4.137731],[-2.96186,-2.274215,4.440943],[-4.386901,-2.683286,3.643886],[-1.217295,-7.834465,4.969286],[-1.542374,-.136843,5.201008],[-3.878377,-6.041764,3.311079],[-3.084037,-6.809842,3.814195],[-3.747321,-4.503545,3.726453],[-6.094129,-3.205991,1.473482],[-4.588995,-4.728726,2.983221],[-6.583231,-3.941269,.070268],[-3.49258,-3.19582,4.130198],[-1.255543,.802341,5.307551],[-1.126122,-.933602,6.538785],[-1.443109,-1.142774,5.905127],[-.923043,-.529042,7.003423],[-1.755386,3.529117,4.327696],[-2.632589,3.713828,4.364629],[-3.388062,3.721976,4.309028],[-4.075766,3.675413,4.076063],[-4.62291,3.474691,3.646321],[-5.171755,2.535753,2.670867],[-7.297331,.763172,-.048769],[-4.706828,1.651,3.109532],[-4.071712,1.476821,3.476944],[-3.269817,1.470659,3.731945],[-2.527572,1.617311,3.865444],[-1.970894,1.858505,3.961782],[-1.579543,2.097941,4.084996],[-7.664182,.673132,-2.435867],[-1.397041,-1.340139,5.630378],[-.884838,.65874,6.233232],[-.767097,-.968035,7.077932],[-.460213,-1.334106,6.787447],[-.748618,-1.067994,6.798303],[-1.236408,-1.585568,5.48049],[-.387306,-1.40999,6.957705],[-.319925,-1.607931,6.508676],[-1.639633,2.556298,3.863736],[-1.255645,2.467144,4.2038],[-1.031362,2.382663,4.615849],[-4.253081,2.772296,3.315305],[-4.53,2.91,3.339685],[.463928,.955357,6.633583],[4.253081,2.577646,3.279702],[.416106,-1.466449,6.447657],[7.08796,5.434801,.09962],[2.628639,2.035898,3.848121],[3.198363,1.985815,3.796952],[3.775151,2.039402,3.646194],[4.465819,2.42295,3.155168],[2.164289,2.189867,3.851822],[3.208229,3.223926,4.115822],[2.673803,3.205337,4.092203],[3.745193,3.165286,3.972409],[4.161018,3.059069,3.719554],[5.062006,1.934418,2.776093],[2.266659,-7.425768,4.389812],[4.445859,2.663991,3.173422],[7.21453,2.263009,.07315],[5.799793,2.349546,2.204059],[2.844939,-.720868,4.43313],[.711452,-3.329355,5.877044],[.606033,-3.924562,5.444923],[1.431615,-3.500953,5.496189],[1.91491,-3.803146,5.02893],[1.131043,-3.973937,5.189648],[1.563548,-4.082763,4.842263],[2.650112,-5.003649,4.188483],[.427049,-1.094134,7.360529],[.496396,-.475659,7.440358],[5.253307,3.881582,3.363159],[1.718698,.974609,4.558359],[1.608635,-.942516,5.814193],[1.651267,-.610868,5.581319],[4.765501,-.701554,3.534632],[.478306,.295766,7.101013],[3.734964,4.50823,4.550454],[4.588603,4.302037,4.048484],[6.279331,6.615427,1.42585],[1.220941,4.142165,5.106035],[2.193489,3.100317,4.000575],[3.102642,-4.352984,4.095905],[6.719682,-4.788645,-1.745401],[1.193824,-1.306795,5.737747],[.729766,-1.593712,5.833208],[2.456206,-4.342621,4.283884],[2.204823,-4.304508,4.162499],[4.985894,4.802461,3.751977],[1.592294,-1.257709,5.456949],[2.644548,4.524654,4.921559],[2.760292,5.100971,5.01599],[3.523964,8.005976,3.729163],[5.599763,5.71547,2.724259],[3.063932,6.566144,4.529981],[5.720968,4.254584,2.830852],[6.374393,4.78559,1.591691],[.672728,-3.688016,5.737804],[1.26256,-3.787691,5.417779],[1.732553,-3.952767,5.000579],[1.043625,-1.464973,5.662455],[2.321234,-4.329069,4.258156],[2.056846,-4.477671,4.520883],[2.153084,-4.276322,4.038093],[.946874,-1.035249,6.512274],[1.469132,-4.036351,4.604908],[1.02434,-3.989851,4.926693],[.533422,-3.993222,5.138202],[.76972,-6.095394,4.985883],[.699606,-5.29185,5.448304],[.669687,-4.94977,5.509612],[.630947,-4.695101,5.449371],[.583218,-4.517982,5.339869],[1.53717,-4.423206,4.74547],[1.6156,-4.475942,4.813632],[1.729053,-4.61868,4.854463],[1.838624,-4.828746,4.823737],[2.36825,-3.106237,4.868096],[7.542244,-1.049282,-2.431321],[1.826614,-4.399531,4.399021],[1.929558,-4.411831,4.497052],[.597442,-2.013686,5.866456],[1.405627,-1.714196,5.241087],[.662449,-1.819321,5.863759],[2.34234,.572222,4.294303],[3.327324,.104863,4.11386],[1.726175,-.919165,5.273355],[5.133204,7.485602,2.660442],[4.538641,6.319907,3.683424],[3.986562,5.109487,4.466315],[2.169681,-5.440433,4.455874],[1.395634,5.011963,5.316032],[1.6195,6.599217,4.921106],[1.891399,8.236377,4.274997],[4.195832,2.235205,3.375099],[5.733342,1.411738,2.431726],[1.859887,2.355757,3.843181],[4.988612,3.074654,3.083858],[1.303263,1.416453,4.831091],[1.305757,-.672779,6.415959],[6.46517,.937119,1.689873],[5.258659,.945811,2.974312],[4.432338,.722096,3.522615],[3.300681,.861641,3.872784],[2.430178,1.131492,4.039035],[1.820731,1.467954,4.224124],[.563221,2.307693,5.566789],[6.338145,-.529279,1.881175],[5.587698,3.208071,2.687839],[.242624,-1.462857,7.071491],[1.611251,.339326,4.895421],[7.743095,2.364999,-2.005167],[1.391142,1.851048,4.448999],[1.785794,-.978284,4.85047],[4.670959,2.664461,3.084075],[1.33397,-.283761,6.097047],[7.270895,-2.890917,-2.252455],[1.856432,2.585245,3.757904],[.923388,.073076,6.671944],[5.000589,-6.135128,1.892523],[5.085276,-7.17859,.714711],[7.159291,-.81182,-.072044],[5.843051,-5.248023,.924091],[6.847258,3.662916,.724695],[2.412942,-8.258853,4.119213],[.179909,-1.689864,6.573301],[2.103655,-.163946,4.566119],[6.407571,2.236021,1.560843],[3.670075,2.360153,3.63523],[3.177186,2.294265,3.775704],[2.196121,-4.598322,4.479786],[6.234883,-1.94443,1.663542],[1.292924,-9.29592,4.094063],[3.210651,-8.533278,2.802001],[4.068926,-7.993109,1.925119],[2.724032,2.315802,3.777151],[2.28846,2.398891,3.697603],[1.998311,2.496547,3.689148],[6.13004,3.399261,2.038516],[2.28846,2.886504,3.775031],[2.724032,2.96181,3.871767],[3.177186,2.964136,3.876973],[3.670075,2.927714,3.724325],[4.018389,2.857357,3.482983],[7.555811,4.106811,-.991917],[4.018389,2.483695,3.440898],[1.776217,-2.683946,5.213116],[1.222237,-1.182444,5.952465],[.731493,-2.536683,5.815343],[4.135272,-6.996638,2.67197],[3.311811,-7.660815,3.382963],[1.313701,-8.639995,4.702456],[5.940524,-6.223629,-.631468],[1.998311,2.743838,3.74403],[.901447,1.236992,5.754256],[2.308977,-8.974196,3.60907],[6.954154,-2.439843,-.131163],[1.098819,-4.458788,5.120727],[1.181124,-4.579996,5.189564],[1.255818,-4.787901,5.237051],[1.325085,-5.106507,5.20501],[1.546388,-5.819392,4.757893],[1.953754,-4.183892,4.431713],[2.117802,-4.137093,4.555096],[2.285339,-4.051196,4.582438],[2.85016,-3.66572,4.484994],[5.278538,-2.238942,2.861224],[.946709,1.907628,5.196779],[1.314173,3.104912,4.231404],[1.78,2.86,3.881555],[1.84511,-4.09888,4.247264],[5.436187,-4.030482,2.109852],[.766444,3.182131,4.861453],[1.938616,-6.61441,4.521085],[.516573,1.583572,6.148363],[1.246815,.230297,5.681036],[.997827,-6.930921,4.979576],[3.288807,-5.382514,3.795752],[2.311631,-1.566237,4.590085],[2.68025,-6.111567,4.096152],[3.832928,-1.537326,4.137731],[2.96186,-2.274215,4.440943],[4.386901,-2.683286,3.643886],[1.217295,-7.834465,4.969286],[1.542374,-.136843,5.201008],[3.878377,-6.041764,3.311079],[3.084037,-6.809842,3.814195],[3.747321,-4.503545,3.726453],[6.094129,-3.205991,1.473482],[4.588995,-4.728726,2.983221],[6.583231,-3.941269,.070268],[3.49258,-3.19582,4.130198],[1.255543,.802341,5.307551],[1.126122,-.933602,6.538785],[1.443109,-1.142774,5.905127],[.923043,-.529042,7.003423],[1.755386,3.529117,4.327696],[2.632589,3.713828,4.364629],[3.388062,3.721976,4.309028],[4.075766,3.675413,4.076063],[4.62291,3.474691,3.646321],[5.171755,2.535753,2.670867],[7.297331,.763172,-.048769],[4.706828,1.651,3.109532],[4.071712,1.476821,3.476944],[3.269817,1.470659,3.731945],[2.527572,1.617311,3.865444],[1.970894,1.858505,3.961782],[1.579543,2.097941,4.084996],[7.664182,.673132,-2.435867],[1.397041,-1.340139,5.630378],[.884838,.65874,6.233232],[.767097,-.968035,7.077932],[.460213,-1.334106,6.787447],[.748618,-1.067994,6.798303],[1.236408,-1.585568,5.48049],[.387306,-1.40999,6.957705],[.319925,-1.607931,6.508676],[1.639633,2.556298,3.863736],[1.255645,2.467144,4.2038],[1.031362,2.382663,4.615849],[4.253081,2.772296,3.315305],[4.53,2.91,3.339685]],bt=[[.499977,.347466],[.500026,.452513],[.499974,.397628],[.482113,.528021],[.500151,.472844],[.49991,.501747],[.499523,.598938],[.289712,.619236],[.499955,.687602],[.499987,.730081],[.500023,.89295],[.500023,.333766],[.500016,.320776],[.500023,.307652],[.499977,.304722],[.499977,.294066],[.499977,.280615],[.499977,.262981],[.499968,.218629],[.499816,.437019],[.473773,.42609],[.104907,.745859],[.36593,.590424],[.338758,.586975],[.31112,.59054],[.274658,.610869],[.393362,.596294],[.345234,.655989],[.370094,.653924],[.319322,.652735],[.297903,.646409],[.247792,.58919],[.396889,.157245],[.280098,.6244],[.10631,.600044],[.209925,.608647],[.355808,.465594],[.471751,.349596],[.474155,.319808],[.439785,.342771],[.414617,.333459],[.450374,.319139],[.428771,.317309],[.374971,.272195],[.486717,.452371],[.485301,.472605],[.257765,.68551],[.401223,.544828],[.429819,.451385],[.421352,.466259],[.276896,.467943],[.48337,.500413],[.337212,.717117],[.296392,.706757],[.169295,.806186],[.44758,.69739],[.39239,.646112],[.35449,.303216],[.067305,.269895],[.442739,.427174],[.457098,.415208],[.381974,.305289],[.392389,.305797],[.277076,.728068],[.422552,.436767],[.385919,.718636],[.383103,.74416],[.331431,.880286],[.229924,.767997],[.364501,.810886],[.229622,.700459],[.173287,.721252],[.472879,.333802],[.446828,.331473],[.422762,.32611],[.445308,.419934],[.388103,.306039],[.403039,.29346],[.403629,.306047],[.460042,.442861],[.431158,.307634],[.452182,.307634],[.475387,.307634],[.465828,.22081],[.472329,.263774],[.473087,.282143],[.473122,.295374],[.473033,.304722],[.427942,.304722],[.426479,.29646],[.423162,.288154],[.418309,.279937],[.390095,.360427],[.013954,.439966],[.499914,.419853],[.4132,.3046],[.409626,.298177],[.46808,.398465],[.422729,.414015],[.46308,.406216],[.37212,.526586],[.334562,.503927],[.411671,.453035],[.242176,.852324],[.290777,.798554],[.327338,.743473],[.39951,.251079],[.441728,.738324],[.429765,.812166],[.412198,.891099],[.288955,.601048],[.218937,.564589],[.412782,.60103],[.257135,.64456],[.427685,.562039],[.44834,.463064],[.17856,.542446],[.247308,.542806],[.286267,.532325],[.332828,.539288],[.368756,.552793],[.398964,.567345],[.47641,.594194],[.189241,.476076],[.228962,.651049],[.490726,.437599],[.40467,.514867],[.019469,.598436],[.426243,.579569],[.396993,.451203],[.26647,.623023],[.439121,.481042],[.032314,.355643],[.419054,.612845],[.462783,.494253],[.238979,.220255],[.198221,.168062],[.10755,.459245],[.18361,.259743],[.13441,.666317],[.385764,.116846],[.490967,.420622],[.382385,.491427],[.174399,.602329],[.318785,.603765],[.343364,.599403],[.3961,.289783],[.187885,.411462],[.430987,.055935],[.318993,.101715],[.266248,.130299],[.500023,.809424],[.499977,.045547],[.36617,.601178],[.393207,.604463],[.410373,.60892],[.194993,.657898],[.388665,.637716],[.365962,.644029],[.343364,.644643],[.318785,.64166],[.301415,.636844],[.058133,.680924],[.301415,.612551],[.499988,.381566],[.415838,.375804],[.445682,.433923],[.465844,.379359],[.499923,.648476],[.288719,.180054],[.335279,.14718],[.440512,.097581],[.128294,.208059],[.408772,.626106],[.455607,.548199],[.499877,.09101],[.375437,.075808],[.11421,.384978],[.448662,.304722],[.44802,.295368],[.447112,.284192],[.444832,.269206],[.430012,.233191],[.406787,.314327],[.400738,.318931],[.3924,.322297],[.367856,.336081],[.247923,.398667],[.45277,.57915],[.436392,.640113],[.416164,.631286],[.413386,.307634],[.228018,.316428],[.468268,.647329],[.411362,.195673],[.499989,.530175],[.479154,.557346],[.499974,.560363],[.432112,.506411],[.499886,.133083],[.499913,.178271],[.456549,.180799],[.344549,.254561],[.378909,.42599],[.374293,.219815],[.319688,.429262],[.357155,.39573],[.295284,.378419],[.44775,.137523],[.410986,.491277],[.313951,.224692],[.354128,.187447],[.324548,.296007],[.189096,.3537],[.279777,.285342],[.133823,.317299],[.336768,.355267],[.429884,.533478],[.455528,.451377],[.437114,.441104],[.467288,.470075],[.414712,.66478],[.377046,.677222],[.344108,.679849],[.312876,.677668],[.283526,.66681],[.241246,.617214],[.102986,.531237],[.267612,.57544],[.297879,.566824],[.333434,.566122],[.366427,.573884],[.396012,.583304],[.420121,.589772],[.007561,.519223],[.432949,.430482],[.458639,.520911],[.473466,.454256],[.476088,.43617],[.468472,.444943],[.433991,.417638],[.483518,.437016],[.482483,.422151],[.42645,.610201],[.438999,.603505],[.450067,.599566],[.289712,.631747],[.27667,.636627],[.517862,.528052],[.710288,.619236],[.526227,.42609],[.895093,.745859],[.63407,.590424],[.661242,.586975],[.68888,.59054],[.725342,.610869],[.60663,.596295],[.654766,.655989],[.629906,.653924],[.680678,.652735],[.702097,.646409],[.752212,.589195],[.602918,.157137],[.719902,.6244],[.893693,.60004],[.790082,.608646],[.643998,.465512],[.528249,.349596],[.52585,.319809],[.560215,.342771],[.585384,.333459],[.549626,.319139],[.571228,.317308],[.624852,.271901],[.51305,.452718],[.515097,.472748],[.742247,.685493],[.598631,.545021],[.570338,.451425],[.578632,.466377],[.723087,.467946],[.516446,.500361],[.662801,.717082],[.703624,.706729],[.830705,.806186],[.552386,.697432],[.60761,.646112],[.645429,.303293],[.932695,.269895],[.557261,.427174],[.542902,.415208],[.618026,.305289],[.607591,.305797],[.722943,.728037],[.577414,.436833],[.614083,.718613],[.616907,.744114],[.668509,.880086],[.770092,.767979],[.635536,.810751],[.770391,.700444],[.826722,.721245],[.527121,.333802],[.553172,.331473],[.577238,.32611],[.554692,.419934],[.611897,.306039],[.596961,.29346],[.596371,.306047],[.539958,.442861],[.568842,.307634],[.547818,.307634],[.524613,.307634],[.53409,.220859],[.527671,.263774],[.526913,.282143],[.526878,.295374],[.526967,.304722],[.572058,.304722],[.573521,.29646],[.576838,.288154],[.581691,.279937],[.609945,.36009],[.986046,.439966],[.5868,.3046],[.590372,.298177],[.531915,.398463],[.577268,.414065],[.536915,.406214],[.627543,.526648],[.665586,.504049],[.588354,.453138],[.757824,.852324],[.70925,.798492],[.672684,.743419],[.600409,.250995],[.558266,.738328],[.570304,.812129],[.588166,.890956],[.711045,.601048],[.78107,.564595],[.587247,.601068],[.74287,.644554],[.572156,.562348],[.551868,.46343],[.821442,.542444],[.752702,.542818],[.713757,.532373],[.667113,.539327],[.631101,.552846],[.600862,.567527],[.523481,.594373],[.810748,.476074],[.771046,.651041],[.509127,.437282],[.595293,.514976],[.980531,.598436],[.5735,.58],[.602995,.451312],[.73353,.623023],[.560611,.480983],[.967686,.355643],[.580985,.61284],[.537728,.494615],[.760966,.220247],[.801779,.168062],[.892441,.459239],[.816351,.25974],[.865595,.666313],[.614074,.116754],[.508953,.420562],[.617942,.491684],[.825608,.602325],[.681215,.603765],[.656636,.599403],[.6039,.289783],[.812086,.411461],[.568013,.055435],[.681008,.101715],[.733752,.130299],[.63383,.601178],[.606793,.604463],[.58966,.608938],[.805016,.657892],[.611335,.637716],[.634038,.644029],[.656636,.644643],[.681215,.64166],[.698585,.636844],[.941867,.680924],[.698585,.612551],[.584177,.375893],[.554318,.433923],[.534154,.37936],[.711218,.180025],[.66463,.147129],[.5591,.097368],[.871706,.208059],[.591234,.626106],[.544341,.548416],[.624563,.075808],[.88577,.384971],[.551338,.304722],[.55198,.295368],[.552888,.284192],[.555168,.269206],[.569944,.232965],[.593203,.314324],[.599262,.318931],[.6076,.322297],[.631938,.3365],[.752033,.398685],[.547226,.579605],[.563544,.640172],[.583841,.631286],[.586614,.307634],[.771915,.316422],[.531597,.647517],[.588371,.195559],[.520797,.557435],[.567985,.506521],[.543283,.180745],[.655317,.254485],[.621009,.425982],[.62556,.219688],[.680198,.429281],[.642764,.395662],[.704663,.37847],[.552012,.137408],[.589072,.491363],[.685945,.224643],[.645735,.18736],[.675343,.296022],[.810858,.353695],[.720122,.285333],[.866152,.317295],[.663187,.355403],[.570082,.533674],[.544562,.451624],[.562759,.441215],[.531987,.46986],[.585271,.664823],[.622953,.677221],[.655896,.679837],[.687132,.677654],[.716482,.666799],[.758757,.617213],[.897013,.531231],[.732392,.575453],[.702114,.566837],[.666525,.566134],[.633505,.573912],[.603876,.583413],[.579658,.590055],[.99244,.519223],[.567192,.43058],[.541366,.521101],[.526564,.453882],[.523913,.43617],[.531529,.444943],[.566036,.417671],[.516311,.436946],[.517472,.422123],[.573595,.610193],[.560698,.604668],[.549756,.600249],[.710288,.631747],[.72333,.636627]],sU=[173,155,133,246,33,7,382,398,362,263,466,249,308,415,324,78,95,191,356,389,264,127,34,162,368,264,389,139,162,34,267,0,302,37,72,0,11,302,0,11,0,72,349,451,350,120,121,231,452,350,451,232,231,121,267,302,269,37,39,72,303,269,302,73,72,39,357,343,350,128,121,114,277,350,343,47,114,121,350,452,357,121,128,232,453,357,452,233,232,128,299,333,297,69,67,104,332,297,333,103,104,67,175,152,396,175,171,152,377,396,152,148,152,171,381,384,382,154,155,157,398,382,384,173,157,155,280,347,330,50,101,118,348,330,347,119,118,101,269,303,270,39,40,73,304,270,303,74,73,40,9,336,151,9,151,107,337,151,336,108,107,151,344,278,360,115,131,48,279,360,278,49,48,131,262,431,418,32,194,211,424,418,431,204,211,194,304,408,270,74,40,184,409,270,408,185,184,40,272,310,407,42,183,80,415,407,310,191,80,183,322,270,410,92,186,40,409,410,270,185,40,186,347,449,348,118,119,229,450,348,449,230,229,119,434,432,430,214,210,212,422,430,432,202,212,210,313,314,18,83,18,84,17,18,314,17,84,18,307,375,306,77,76,146,291,306,375,61,146,76,259,387,260,29,30,160,388,260,387,161,160,30,286,414,384,56,157,190,398,384,414,173,190,157,418,424,406,194,182,204,335,406,424,106,204,182,367,416,364,138,135,192,434,364,416,214,192,135,391,423,327,165,98,203,358,327,423,129,203,98,298,301,284,68,54,71,251,284,301,21,71,54,4,275,5,4,5,45,281,5,275,51,45,5,254,373,253,24,23,144,374,253,373,145,144,23,320,321,307,90,77,91,375,307,321,146,91,77,280,425,411,50,187,205,427,411,425,207,205,187,421,313,200,201,200,83,18,200,313,18,83,200,335,321,406,106,182,91,405,406,321,181,91,182,405,321,404,181,180,91,320,404,321,90,91,180,17,314,16,17,16,84,315,16,314,85,84,16,425,266,426,205,206,36,423,426,266,203,36,206,369,396,400,140,176,171,377,400,396,148,171,176,391,269,322,165,92,39,270,322,269,40,39,92,417,465,413,193,189,245,464,413,465,244,245,189,257,258,386,27,159,28,385,386,258,158,28,159,260,388,467,30,247,161,466,467,388,246,161,247,248,456,419,3,196,236,399,419,456,174,236,196,333,298,332,104,103,68,284,332,298,54,68,103,285,8,417,55,193,8,168,417,8,168,8,193,340,261,346,111,117,31,448,346,261,228,31,117,285,417,441,55,221,193,413,441,417,189,193,221,327,460,326,98,97,240,328,326,460,99,240,97,277,355,329,47,100,126,371,329,355,142,126,100,309,392,438,79,218,166,439,438,392,219,166,218,381,382,256,154,26,155,341,256,382,112,155,26,360,279,420,131,198,49,429,420,279,209,49,198,365,364,379,136,150,135,394,379,364,169,135,150,355,277,437,126,217,47,343,437,277,114,47,217,443,444,282,223,52,224,283,282,444,53,224,52,281,275,363,51,134,45,440,363,275,220,45,134,431,262,395,211,170,32,369,395,262,140,32,170,337,299,338,108,109,69,297,338,299,67,69,109,335,273,321,106,91,43,375,321,273,146,43,91,348,450,349,119,120,230,451,349,450,231,230,120,467,359,342,247,113,130,446,342,359,226,130,113,282,283,334,52,105,53,293,334,283,63,53,105,250,458,462,20,242,238,461,462,458,241,238,242,276,353,300,46,70,124,383,300,353,156,124,70,325,292,324,96,95,62,308,324,292,78,62,95,283,276,293,53,63,46,300,293,276,70,46,63,447,264,345,227,116,34,372,345,264,143,34,116,352,345,346,123,117,116,340,346,345,111,116,117,1,19,274,1,44,19,354,274,19,125,19,44,248,281,456,3,236,51,363,456,281,134,51,236,425,426,427,205,207,206,436,427,426,216,206,207,380,381,252,153,22,154,256,252,381,26,154,22,391,393,269,165,39,167,267,269,393,37,167,39,199,428,200,199,200,208,421,200,428,201,208,200,330,329,266,101,36,100,371,266,329,142,100,36,422,432,273,202,43,212,287,273,432,57,212,43,290,250,328,60,99,20,462,328,250,242,20,99,258,286,385,28,158,56,384,385,286,157,56,158,342,446,353,113,124,226,265,353,446,35,226,124,257,386,259,27,29,159,387,259,386,160,159,29,430,422,431,210,211,202,424,431,422,204,202,211,445,342,276,225,46,113,353,276,342,124,113,46,424,422,335,204,106,202,273,335,422,43,202,106,306,292,307,76,77,62,325,307,292,96,62,77,366,447,352,137,123,227,345,352,447,116,227,123,302,268,303,72,73,38,271,303,268,41,38,73,371,358,266,142,36,129,423,266,358,203,129,36,327,294,460,98,240,64,455,460,294,235,64,240,294,331,278,64,48,102,279,278,331,49,102,48,303,271,304,73,74,41,272,304,271,42,41,74,427,436,434,207,214,216,432,434,436,212,216,214,304,272,408,74,184,42,407,408,272,183,42,184,394,430,395,169,170,210,431,395,430,211,210,170,395,369,378,170,149,140,400,378,369,176,140,149,296,334,299,66,69,105,333,299,334,104,105,69,417,168,351,193,122,168,6,351,168,6,168,122,280,411,352,50,123,187,376,352,411,147,187,123,319,320,325,89,96,90,307,325,320,77,90,96,285,295,336,55,107,65,296,336,295,66,65,107,404,320,403,180,179,90,319,403,320,89,90,179,330,348,329,101,100,119,349,329,348,120,119,100,334,293,333,105,104,63,298,333,293,68,63,104,323,454,366,93,137,234,447,366,454,227,234,137,16,315,15,16,15,85,316,15,315,86,85,15,429,279,358,209,129,49,331,358,279,102,49,129,15,316,14,15,14,86,317,14,316,87,86,14,8,285,9,8,9,55,336,9,285,107,55,9,329,349,277,100,47,120,350,277,349,121,120,47,252,253,380,22,153,23,374,380,253,145,23,153,402,403,318,178,88,179,319,318,403,89,179,88,351,6,419,122,196,6,197,419,6,197,6,196,324,318,325,95,96,88,319,325,318,89,88,96,397,367,365,172,136,138,364,365,367,135,138,136,288,435,397,58,172,215,367,397,435,138,215,172,438,439,344,218,115,219,278,344,439,48,219,115,271,311,272,41,42,81,310,272,311,80,81,42,5,281,195,5,195,51,248,195,281,3,51,195,273,287,375,43,146,57,291,375,287,61,57,146,396,428,175,171,175,208,199,175,428,199,208,175,268,312,271,38,41,82,311,271,312,81,82,41,444,445,283,224,53,225,276,283,445,46,225,53,254,339,373,24,144,110,390,373,339,163,110,144,295,282,296,65,66,52,334,296,282,105,52,66,346,448,347,117,118,228,449,347,448,229,228,118,454,356,447,234,227,127,264,447,356,34,127,227,336,296,337,107,108,66,299,337,296,69,66,108,151,337,10,151,10,108,338,10,337,109,108,10,278,439,294,48,64,219,455,294,439,235,219,64,407,415,292,183,62,191,308,292,415,78,191,62,358,371,429,129,209,142,355,429,371,126,142,209,345,372,340,116,111,143,265,340,372,35,143,111,388,390,466,161,246,163,249,466,390,7,163,246,352,346,280,123,50,117,347,280,346,118,117,50,295,442,282,65,52,222,443,282,442,223,222,52,19,94,354,19,125,94,370,354,94,141,94,125,295,285,442,65,222,55,441,442,285,221,55,222,419,197,248,196,3,197,195,248,197,195,197,3,359,263,255,130,25,33,249,255,263,7,33,25,275,274,440,45,220,44,457,440,274,237,44,220,300,383,301,70,71,156,368,301,383,139,156,71,417,351,465,193,245,122,412,465,351,188,122,245,466,263,467,246,247,33,359,467,263,130,33,247,389,251,368,162,139,21,301,368,251,71,21,139,374,386,380,145,153,159,385,380,386,158,159,153,379,394,378,150,149,169,395,378,394,170,169,149,351,419,412,122,188,196,399,412,419,174,196,188,426,322,436,206,216,92,410,436,322,186,92,216,387,373,388,160,161,144,390,388,373,163,144,161,393,326,164,167,164,97,2,164,326,2,97,164,354,370,461,125,241,141,462,461,370,242,141,241,0,267,164,0,164,37,393,164,267,167,37,164,11,12,302,11,72,12,268,302,12,38,12,72,386,374,387,159,160,145,373,387,374,144,145,160,12,13,268,12,38,13,312,268,13,82,13,38,293,300,298,63,68,70,301,298,300,71,70,68,340,265,261,111,31,35,446,261,265,226,35,31,380,385,381,153,154,158,384,381,385,157,158,154,280,330,425,50,205,101,266,425,330,36,101,205,423,391,426,203,206,165,322,426,391,92,165,206,429,355,420,209,198,126,437,420,355,217,126,198,391,327,393,165,167,98,326,393,327,97,98,167,457,438,440,237,220,218,344,440,438,115,218,220,382,362,341,155,112,133,463,341,362,243,133,112,457,461,459,237,239,241,458,459,461,238,241,239,434,430,364,214,135,210,394,364,430,169,210,135,414,463,398,190,173,243,362,398,463,133,243,173,262,428,369,32,140,208,396,369,428,171,208,140,457,274,461,237,241,44,354,461,274,125,44,241,316,403,317,86,87,179,402,317,403,178,179,87,315,404,316,85,86,180,403,316,404,179,180,86,314,405,315,84,85,181,404,315,405,180,181,85,313,406,314,83,84,182,405,314,406,181,182,84,418,406,421,194,201,182,313,421,406,83,182,201,366,401,323,137,93,177,361,323,401,132,177,93,408,407,306,184,76,183,292,306,407,62,183,76,408,306,409,184,185,76,291,409,306,61,76,185,410,409,287,186,57,185,291,287,409,61,185,57,436,410,432,216,212,186,287,432,410,57,186,212,434,416,427,214,207,192,411,427,416,187,192,207,264,368,372,34,143,139,383,372,368,156,139,143,457,459,438,237,218,239,309,438,459,79,239,218,352,376,366,123,137,147,401,366,376,177,147,137,4,1,275,4,45,1,274,275,1,44,1,45,428,262,421,208,201,32,418,421,262,194,32,201,327,358,294,98,64,129,331,294,358,102,129,64,367,435,416,138,192,215,433,416,435,213,215,192,455,439,289,235,59,219,392,289,439,166,219,59,328,462,326,99,97,242,370,326,462,141,242,97,326,370,2,97,2,141,94,2,370,94,141,2,460,455,305,240,75,235,289,305,455,59,235,75,448,339,449,228,229,110,254,449,339,24,110,229,261,446,255,31,25,226,359,255,446,130,226,25,449,254,450,229,230,24,253,450,254,23,24,230,450,253,451,230,231,23,252,451,253,22,23,231,451,252,452,231,232,22,256,452,252,26,22,232,256,341,452,26,232,112,453,452,341,233,112,232,413,464,414,189,190,244,463,414,464,243,244,190,441,413,286,221,56,189,414,286,413,190,189,56,441,286,442,221,222,56,258,442,286,28,56,222,442,258,443,222,223,28,257,443,258,27,28,223,444,443,259,224,29,223,257,259,443,27,223,29,259,260,444,29,224,30,445,444,260,225,30,224,260,467,445,30,225,247,342,445,467,113,247,225,250,309,458,20,238,79,459,458,309,239,79,238,290,305,392,60,166,75,289,392,305,59,75,166,460,305,328,240,99,75,290,328,305,60,75,99,376,433,401,147,177,213,435,401,433,215,213,177,250,290,309,20,79,60,392,309,290,166,60,79,411,416,376,187,147,192,433,376,416,213,192,147,341,463,453,112,233,243,464,453,463,244,243,233,453,464,357,233,128,244,465,357,464,245,244,128,412,343,465,188,245,114,357,465,343,128,114,245,437,343,399,217,174,114,412,399,343,188,114,174,363,440,360,134,131,220,344,360,440,115,220,131,456,420,399,236,174,198,437,399,420,217,198,174,456,363,420,236,198,134,360,420,363,131,134,198,361,401,288,132,58,177,435,288,401,215,177,58,353,265,383,124,156,35,372,383,265,143,35,156,255,249,339,25,110,7,390,339,249,163,7,110,261,255,448,31,228,25,339,448,255,110,25,228,14,317,13,14,13,87,312,13,317,82,87,13,317,402,312,87,82,178,311,312,402,81,178,82,402,318,311,178,81,88,310,311,318,80,88,81,318,324,310,88,80,95,415,310,324,191,95,80],U0=[[4,.070909939706326],[6,.032100144773722],[10,.008446550928056],[33,.058724168688059],[54,.007667080033571],[67,.009078059345484],[117,.009791937656701],[119,.014565368182957],[121,.018591361120343],[127,.005197994410992],[129,.120625205338001],[132,.005560018587857],[133,.05328618362546],[136,.066890455782413],[143,.014816547743976],[147,.014262833632529],[198,.025462191551924],[205,.047252278774977],[263,.058724168688059],[284,.007667080033571],[297,.009078059345484],[346,.009791937656701],[348,.014565368182957],[350,.018591361120343],[356,.005197994410992],[358,.120625205338001],[361,.005560018587857],[362,.05328618362546],[365,.066890455782413],[372,.014816547743976],[376,.014262833632529],[420,.025462191551924],[425,.047252278774977]],Vi=[];for(let g=0;g<MC.length;g++)Vi[g]=0;U0.forEach(([g,A])=>{Vi[g]=A});const Tt=[];for(let g=0;g<Vi.length;g++)Tt[g]=Math.sqrt(Vi[g]);const Wi=[33,263,61,291,199];U0.forEach(([g,A])=>{Wi.includes(g)||Wi.push(g)});Wi.sort((g,A)=>g-A);let Vt=0,Wt=0;for(let g=0;g<MC.length;g++)MC[g][0]<MC[Vt][0]&&(Vt=g),MC[g][0]>MC[Wt][0]&&(Wt=g);class DU{constructor(A){const I=A.height,C=A.width,B=C,Q=2*Math.atan(I/(2*B)),o=2*1*Math.tan(.5*Q),t=C*o/I;this.near=1,this.far=1e4,this.frameHeight=I,this.frameWidth=C,this.focalLength=B,this.fov=Q,this.left=-.5*t,this.right=.5*t,this.bottom=-.5*o,this.top=.5*o,this.focalLength=B,this.center=[C/2,I/2]}estimate(A){A=A.slice(0,MC.length);const I=this._projectToScreen(A);let C=this._cloneLandmarks(I);this._changeHandedness(C);const B=I.reduce((W,l)=>W+l[2],0)/I.length,Q=this._estimateScale(C);C=this._cloneLandmarks(I),this._moveAndRescaleZ(B,Q,C),this._unprojectScreen(C),this._changeHandedness(C);const o=this._estimateScale(C);let t=this._cloneLandmarks(I);const D=Q*o;this._moveAndRescaleZ(B,D,t),this._unprojectScreen(t),this._changeHandedness(t);const e=this._solveWeightedOrthogonal(MC,t,Tt),w=KI.matFromArray(4,4,KI.CV_64F,[e[0][0],e[0][1],e[0][2],e[0][3],e[1][0],e[1][1],e[1][2],e[1][3],e[2][0],e[2][1],e[2][2],e[2][3],e[3][0],e[3][1],e[3][2],e[3][3]]).inv(0).data64F,G=[[w[0],w[1],w[2],w[3]],[w[4],w[5],w[6],w[7]],[w[8],w[9],w[10],w[11]],[w[12],w[13],w[14],w[15]]],c=[];for(let W=0;W<t.length;W++){c[W]=[];for(let l=0;l<3;l++){c[W][l]=G[l][3];for(let u=0;u<3;u++)c[W][l]+=G[l][u]*t[W][u]}}const R=[],M=[];Wi.forEach(W=>{R.push(c[W][0],c[W][1],c[W][2]),M.push(A[W][0]*this.frameWidth,A[W][1]*this.frameHeight)});const y=KI.matFromArray(R.length/3,3,KI.CV_64F,R),r=KI.matFromArray(M.length/2,2,KI.CV_64F,M),h=KI.matFromArray(3,3,KI.CV_64F,[this.focalLength,0,this.center[0],0,this.focalLength,this.center[1],0,0,1]),J=KI.Mat.zeros(4,1,KI.CV_64F),K=new KI.Mat(3,1,KI.CV_64F),L=new KI.Mat(3,1,KI.CV_64F),H=new KI.Mat(3,3,KI.CV_64F);KI.solvePnP(y,r,h,J,K,L,!1),KI.Rodrigues(K,H);const q=[H.data64F[0],H.data64F[1],H.data64F[2],L.data64F[0],-H.data64F[3],-H.data64F[4],-H.data64F[5],-L.data64F[1],-H.data64F[6],-H.data64F[7],-H.data64F[8],-L.data64F[2],0,0,0,1],x=c[Wt][0]-c[Vt][0];return{metricLandmarks:c,faceMatrix:q,faceScale:x}}_estimateScale(A){const I=this._solveWeightedOrthogonal(MC,A,Tt);return Math.sqrt(I[0][0]*I[0][0]+I[0][1]*I[0][1]+I[0][2]*I[0][2])}_solveWeightedOrthogonal(A,I,C){const B=[],Q=[];for(let h=0;h<A.length;h++)B.push([A[h][0]*C[h],A[h][1]*C[h],A[h][2]*C[h]]),Q.push([I[h][0]*C[h],I[h][1]*C[h],I[h][2]*C[h]]);const o=C.reduce((h,J)=>h+J*J,0),t=[];for(let h=0;h<B.length;h++)t[h]=[B[h][0]*C[h],B[h][1]*C[h],B[h][2]*C[h]];const D=[0,0,0];for(let h=0;h<3;h++){for(let J=0;J<t.length;J++)D[h]+=t[J][h];D[h]/=o}const e=[];for(let h=0;h<t.length;h++){e[h]=[];for(let J=0;J<3;J++)e[h][J]=B[h][J]-D[J]*C[h]}const w=[[0,0,0],[0,0,0],[0,0,0]];for(let h=0;h<3;h++)for(let J=0;J<3;J++)for(let K=0;K<Q.length;K++)w[h][J]+=Q[K][h]*e[K][J];const G=this._computeOptimalRotation(w),c=this._computeOptimalScale(e,B,Q,G),R=[[],[],[]];for(let h=0;h<3;h++)for(let J=0;J<3;J++)R[h][J]=c*G[h][J];const M=[];for(let h=0;h<B.length;h++){M[h]=[];for(let J=0;J<3;J++){M[h][J]=Q[h][J];for(let K=0;K<3;K++)M[h][J]-=R[J][K]*B[h][K]}}const y=[];for(let h=0;h<M.length;h++){y[h]=[];for(let J=0;J<3;J++)y[h][J]=M[h][J]*C[h]}const r=[0,0,0];for(let h=0;h<3;h++){for(let J=0;J<y.length;J++)r[h]+=y[J][h];r[h]/=o}return[[R[0][0],R[0][1],R[0][2],r[0]],[R[1][0],R[1][1],R[1][2],r[1]],[R[2][0],R[2][1],R[2][2],r[2]],[0,0,0,1]]}_computeOptimalRotation(A){const I=KI.matFromArray(3,3,KI.CV_64F,[A[0][0],A[0][1],A[0][2],A[1][0],A[1][1],A[1][2],A[2][0],A[2][1],A[2][2]]),C=new KI.Mat(3,1,KI.CV_64F),B=new KI.Mat(3,3,KI.CV_64F),Q=new KI.Mat(3,3,KI.CV_64F);KI.SVDecomp(I,C,B,Q);const o=[[0,0,0],[0,0,0],[0,0,0]];for(let t=0;t<3;t++)for(let D=0;D<3;D++)for(let e=0;e<3;e++)o[t][D]+=B.data64F[t*3+e]*Q.data64F[e*3+D];return o}_computeOptimalScale(A,I,C,B){const Q=[];for(let D=0;D<A.length;D++){Q[D]=[];for(let e=0;e<3;e++){Q[D][e]=0;for(let w=0;w<3;w++)Q[D][e]+=B[e][w]*A[D][w]}}let o=0;for(let D=0;D<Q.length;D++)for(let e=0;e<3;e++)o+=Q[D][e]*C[D][e];let t=0;for(let D=0;D<A.length;D++)for(let e=0;e<3;e++)t+=A[D][e]*I[D][e];return o/t}_projectToScreen(A){const I=[],C=this.right-this.left,B=this.top-this.bottom,Q=this.left,o=this.bottom;for(let t=0;t<A.length;t++)I.push([A[t][0]*C+Q,(1-A[t][1])*B+o,A[t][2]*C]);return I}_cloneLandmarks(A){const I=[];for(let C=0;C<A.length;C++)I[C]=[A[C][0],A[C][1],A[C][2]];return I}_changeHandedness(A){for(let I=0;I<A.length;I++)A[I][2]*=-1}_moveAndRescaleZ(A,I,C){for(let B=0;B<C.length;B++)C[B][2]=(C[B][2]-A+this.near)/I}_unprojectScreen(A){for(let I=0;I<A.length;I++)A[I][0]=A[I][0]*A[I][2]/this.near,A[I][1]=A[I][1]*A[I][2]/this.near}}const ri=bt.length,eU=g=>{class A extends g.BufferGeometry{constructor(C={}){super(),this.positions=new Float32Array(ri*3),this.uvs=new Float32Array(ri*2),this.setAttribute("position",new g.BufferAttribute(this.positions,3)),this.setAttribute("uv",new g.BufferAttribute(this.uvs,2)),this.setUvs(),this.setIndex(sU)}setUvs(){for(let C=0;C<ri;C++)this.uvs[C*2]=bt[C][0],this.uvs[C*2+1]=bt[C][1];this.getAttribute("uv").needsUpdate=!0}updatePositions(C){for(let B=0;B<ri;B++)this.positions[B*3+0]=C[B][0],this.positions[B*3+1]=C[B][1],this.positions[B*3+2]=C[B][2];this.attributes.position.needsUpdate=!0,this.computeVertexNormals()}}return new A},aU=.001,nU=1;class hU{constructor({onUpdate:A=null,filterMinCF:I=null,filterBeta:C=null}){this.customFaceGeometries=[],this.estimator=null,this.lastEstimateResult=null,this.filterMinCF=I===null?aU:I,this.filterBeta=C===null?nU:C,this.onUpdate=A,this.flipFace=!1,this.landmarkFilters=[];for(let B=0;B<MC.length;B++)this.landmarkFilters[B]=new At({minCutOff:this.filterMinCF,beta:this.filterBeta});this.faceMatrixFilter=new At({minCutOff:this.filterMinCF,beta:this.filterBeta}),this.faceScaleFilter=new At({minCutOff:this.filterMinCF,beta:this.filterBeta})}async setup(A){this.flipFace=A,await tU(),this.faceMeshHelper=new iU,await this.faceMeshHelper.init()}onInputResized(A){this.estimator=new DU(A)}getCameraParams(){return{fov:this.estimator.fov*180/Math.PI,aspect:this.estimator.frameWidth/this.estimator.frameHeight,near:this.estimator.near,far:this.estimator.far}}async dummyRun(A){await this.faceMeshHelper.detect(A)}processVideo(A){if(this.processingVideo)return;const I=document.createElement("canvas");I.width=A.width,I.height=A.height;const C=I.getContext("2d");this.processingVideo=!0;const B=async()=>{let Q;if(this.flipFace?(C.clearRect(0,0,I.width,I.height),C.save(),C.translate(I.width,0),C.scale(-1,1),C.drawImage(A,0,0,I.width,I.height),C.restore(),Q=await this.faceMeshHelper.detect(I)):Q=await this.faceMeshHelper.detect(A),Q.faceLandmarks.length===0){this.lastEstimateResult=null,this.onUpdate({hasFace:!1});for(let o=0;o<this.landmarkFilters.length;o++)this.landmarkFilters[o].reset();this.faceMatrixFilter.reset(),this.faceScaleFilter.reset()}else{const o=Q.faceLandmarks[0].map(D=>[D.x,D.y,D.z]),t=this.estimator.estimate(o);if(this.lastEstimateResult===null)this.lastEstimateResult=t;else{const D=this.lastEstimateResult.metricLandmarks;this.lastEstimateResult.faceMatrix,this.lastEstimateResult.faceScale;const e=[];for(let c=0;c<D.length;c++)e[c]=this.landmarkFilters[c].filter(Date.now(),t.metricLandmarks[c]);const w=this.faceMatrixFilter.filter(Date.now(),t.faceMatrix),G=this.faceScaleFilter.filter(Date.now(),[t.faceScale]);this.lastEstimateResult={metricLandmarks:e,faceMatrix:w,faceScale:G[0],blendshapes:Q.faceBlendshapes[0]}}this.onUpdate&&this.onUpdate({hasFace:!0,estimateResult:this.lastEstimateResult});for(let D=0;D<this.customFaceGeometries.length;D++)this.customFaceGeometries[D].updatePositions(t.metricLandmarks)}this.processingVideo&&window.requestAnimationFrame(B)};window.requestAnimationFrame(B)}stopProcessVideo(){this.processingVideo=!1}createThreeFaceGeometry(A){const I=eU(A);return this.customFaceGeometries.push(I),I}getLandmarkMatrix(A){const{metricLandmarks:I,faceMatrix:C,faceScale:B}=this.lastEstimateResult,Q=C,o=B,t=[I[A][0],I[A][1],I[A][2]];return[Q[0]*o,Q[1]*o,Q[2]*o,Q[0]*t[0]+Q[1]*t[1]+Q[2]*t[2]+Q[3],Q[4]*o,Q[5]*o,Q[6]*o,Q[4]*t[0]+Q[5]*t[1]+Q[6]*t[2]+Q[7],Q[8]*o,Q[9]*o,Q[10]*o,Q[8]*t[0]+Q[9]*t[1]+Q[10]*t[2]+Q[11],Q[12]*o,Q[13]*o,Q[14]*o,Q[12]*t[0]+Q[13]*t[1]+Q[14]*t[2]+Q[15]]}}const wU={BufferGeometry:IB,BufferAttribute:eC};class S0{constructor({container:A,uiLoading:I="yes",uiScanning:C="yes",uiError:B="yes",filterMinCF:Q=null,filterBeta:o=null,userDeviceId:t=null,environmentDeviceId:D=null,disableFaceMirror:e=!1}){this.container=A,this.ui=new ny({uiLoading:I,uiScanning:C,uiError:B}),this.controller=new hU({filterMinCF:Q,filterBeta:o}),this.disableFaceMirror=e,this.scene=new Ue,this.cssScene=new Ue,this.renderer=new en({antialias:!0,alpha:!0}),this.cssRenderer=new ty({antialias:!0}),this.renderer.outputEncoding=nB,this.renderer.setPixelRatio(window.devicePixelRatio),this.camera=new Xg,this.userDeviceId=t,this.environmentDeviceId=D,this.anchors=[],this.faceMeshes=[],this.latestEstimate=null,this.container.appendChild(this.renderer.domElement),this.container.appendChild(this.cssRenderer.domElement),this.shouldFaceUser=!0,window.addEventListener("resize",this._resize.bind(this))}async start(){this.ui.showLoading(),await this._startVideo(),await this._startAR(),this.ui.hideLoading()}stop(){this.video.srcObject.getTracks().forEach(function(A){A.stop()}),this.video.remove(),this.controller.stopProcessVideo()}switchCamera(){this.shouldFaceUser=!this.shouldFaceUser,this.stop(),this.start()}addFaceMesh(){const A=this.controller.createThreeFaceGeometry(wU),I=new UC(A,new Ey({color:16777215}));return I.visible=!1,I.matrixAutoUpdate=!1,this.faceMeshes.push(I),I}addAnchor(A){const I=new hQ;I.matrixAutoUpdate=!1;const C={group:I,landmarkIndex:A,css:!1};return this.anchors.push(C),this.scene.add(I),C}addCSSAnchor(A){const I=new hQ;I.matrixAutoUpdate=!1;const C={group:I,landmarkIndex:A,css:!0};return this.anchors.push(C),this.cssScene.add(I),C}getLatestEstimate(){return this.latestEstimate}_startVideo(){return new Promise((A,I)=>{if(this.video=document.createElement("video"),this.video.setAttribute("autoplay",""),this.video.setAttribute("muted",""),this.video.setAttribute("playsinline",""),this.video.style.position="absolute",this.video.style.top="0px",this.video.style.left="0px",this.video.style.zIndex="-2",this.container.appendChild(this.video),!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){this.ui.showCompatibility(),I();return}const C={audio:!1,video:{}};this.shouldFaceUser?this.userDeviceId?C.video.deviceId={exact:this.userDeviceId}:C.video.facingMode="user":this.environmentDeviceId?C.video.deviceId={exact:this.environmentDeviceId}:C.video.facingMode="environment",navigator.mediaDevices.getUserMedia(C).then(B=>{this.video.addEventListener("loadedmetadata",()=>{this.video.setAttribute("width",this.video.videoWidth),this.video.setAttribute("height",this.video.videoHeight),A()}),this.video.srcObject=B}).catch(B=>{console.log("getUserMedia error",B),I()})})}_startAR(){return new Promise(async(A,I)=>{const C=this.video;this.container,this.controller.onUpdate=({hasFace:Q,estimateResult:o})=>{for(let t=0;t<this.anchors.length;t++)this.anchors[t].css?this.anchors[t].group.children.forEach(D=>{D.element.style.visibility=Q?"visible":"hidden"}):this.anchors[t].group.visible=Q;for(let t=0;t<this.faceMeshes.length;t++)this.faceMeshes[t].visible=Q;if(Q){const{metricLandmarks:t,faceMatrix:D,faceScale:e,blendshapes:w}=o;this.latestEstimate=o;for(let G=0;G<this.anchors.length;G++){const c=this.anchors[G].landmarkIndex,R=this.controller.getLandmarkMatrix(c);if(this.anchors[G].css){const M=[.001*R[0],.001*R[1],R[2],R[3],.001*R[4],.001*R[5],R[6],R[7],.001*R[8],.001*R[9],R[10],R[11],.001*R[12],.001*R[13],R[14],R[15]];this.anchors[G].group.matrix.set(...M)}else this.anchors[G].group.matrix.set(...R)}for(let G=0;G<this.faceMeshes.length;G++)this.faceMeshes[G].matrix.set(...D)}else this.latestEstimate=null},this._resize();const B=this.shouldFaceUser&&!this.disableFaceMirror;await this.controller.setup(B),await this.controller.dummyRun(C),this._resize(),this.controller.processVideo(C),A()})}_resize(){const{renderer:A,cssRenderer:I,camera:C,container:B,video:Q}=this;if(!Q)return;{this.video.setAttribute("width",this.video.videoWidth),this.video.setAttribute("height",this.video.videoHeight),this.controller.onInputResized(Q);const{fov:c,aspect:R,near:M,far:y}=this.controller.getCameraParams();this.camera.fov=c,this.camera.aspect=R,this.camera.near=M,this.camera.far=y,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.video.videoWidth,this.video.videoHeight),this.cssRenderer.setSize(this.video.videoWidth,this.video.videoHeight)}let o,t;const D=Q.videoWidth/Q.videoHeight,e=B.clientWidth/B.clientHeight;D>e?(t=B.clientHeight,o=t*D):(o=B.clientWidth,t=o/D),Q.style.top=-(t-B.clientHeight)/2+"px",Q.style.left=-(o-B.clientWidth)/2+"px",Q.style.width=o+"px",Q.style.height=t+"px",this.shouldFaceUser&&!this.disableFaceMirror?Q.style.transform="scaleX(-1)":Q.style.transform="scaleX(1)";const w=A.domElement,G=I.domElement;w.style.position="absolute",w.style.top=Q.style.top,w.style.left=Q.style.left,w.style.width=Q.style.width,w.style.height=Q.style.height,G.style.position="absolute",G.style.top=Q.style.top,G.style.left=Q.style.left,G.style.transformOrigin="top left",G.style.transform="scale("+o/parseFloat(G.style.width)+","+t/parseFloat(G.style.height)+")"}}window.MINDAR||(window.MINDAR={});window.MINDAR.FACE||(window.MINDAR.FACE={});window.MINDAR.FACE.MindARThree=S0;const bs=new S0({container:document.querySelector("#container")}),{renderer:La,scene:GU,camera:rU}=bs,cU=bs.addAnchor(40),FU=new zt(.1,32,16),RU=new Xt({color:65535,transparent:!0,opacity:.5}),NU=new UC(FU,RU);cU.group.add(NU);const yU=async()=>{console.log("button clicked"),await bs.start(),La.setAnimationLoop(()=>{La.render(GU,rU)})};document.getElementById("startButton").addEventListener("click",yU);console.log("hello3");