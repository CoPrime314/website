import"./modulepreload-polyfill-3cfb730f.js";/* empty css                  */import{R as $e,l as Je,E as et,V as u,m as x,n as R,Q as Oe,o as Ae,b as d,p as tt,e as nt,P as ot,q as at,G as it,k as st}from"./GLTFLoader-36134f7d.js";const Le={type:"change"},ne={type:"start"},je={type:"end"},V=new $e,De=new Je,rt=Math.cos(70*tt.DEG2RAD);class ct extends et{constructor(I,q){super(),this.object=I,this.domElement=q,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new u,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:x.ROTATE,MIDDLE:x.DOLLY,RIGHT:x.PAN},this.touches={ONE:R.ROTATE,TWO:R.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(t){t.addEventListener("keydown",ee),this._domElementKeyEvents=t},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ee),this._domElementKeyEvents=null},this.saveState=function(){e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=function(){e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(Le),e.update(),i=o.NONE},this.update=function(){const t=new u,n=new Oe().setFromUnitVectors(I.up,new u(0,1,0)),r=n.clone().invert(),c=new u,l=new Oe,S=new u,b=2*Math.PI;return function(Qe=null){const Me=e.object.position;t.copy(Me).sub(e.target),t.applyQuaternion(n),s.setFromVector3(t),e.autoRotate&&i===o.NONE&&C(ke(Qe)),e.enableDamping?(s.theta+=m.theta*e.dampingFactor,s.phi+=m.phi*e.dampingFactor):(s.theta+=m.theta,s.phi+=m.phi);let p=e.minAzimuthAngle,h=e.maxAzimuthAngle;isFinite(p)&&isFinite(h)&&(p<-Math.PI?p+=b:p>Math.PI&&(p-=b),h<-Math.PI?h+=b:h>Math.PI&&(h-=b),p<=h?s.theta=Math.max(p,Math.min(h,s.theta)):s.theta=s.theta>(p+h)/2?Math.max(p,s.theta):Math.min(h,s.theta)),s.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,s.phi)),s.makeSafe(),e.enableDamping===!0?e.target.addScaledVector(M,e.dampingFactor):e.target.add(M),e.zoomToCursor&&K||e.object.isOrthographicCamera?s.radius=Q(s.radius):s.radius=Q(s.radius*y),t.setFromSpherical(s),t.applyQuaternion(r),Me.copy(e.target).add(t),e.object.lookAt(e.target),e.enableDamping===!0?(m.theta*=1-e.dampingFactor,m.phi*=1-e.dampingFactor,M.multiplyScalar(1-e.dampingFactor)):(m.set(0,0,0),M.set(0,0,0));let X=!1;if(e.zoomToCursor&&K){let z=null;if(e.object.isPerspectiveCamera){const _=t.length();z=Q(_*y);const W=_-z;e.object.position.addScaledVector(se,W),e.object.updateMatrixWorld()}else if(e.object.isOrthographicCamera){const _=new u(f.x,f.y,0);_.unproject(e.object),e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/y)),e.object.updateProjectionMatrix(),X=!0;const W=new u(f.x,f.y,0);W.unproject(e.object),e.object.position.sub(W).add(_),e.object.updateMatrixWorld(),z=t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),e.zoomToCursor=!1;z!==null&&(this.screenSpacePanning?e.target.set(0,0,-1).transformDirection(e.object.matrix).multiplyScalar(z).add(e.object.position):(V.origin.copy(e.object.position),V.direction.set(0,0,-1).transformDirection(e.object.matrix),Math.abs(e.object.up.dot(V.direction))<rt?I.lookAt(e.target):(De.setFromNormalAndCoplanarPoint(e.object.up,e.target),V.intersectPlane(De,e.target))))}else e.object.isOrthographicCamera&&(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/y)),e.object.updateProjectionMatrix(),X=!0);return y=1,K=!1,X||c.distanceToSquared(e.object.position)>ie||8*(1-l.dot(e.object.quaternion))>ie||S.distanceToSquared(e.target)>0?(e.dispatchEvent(Le),c.copy(e.object.position),l.copy(e.object.quaternion),S.copy(e.target),X=!1,!0):!1}}(),this.dispose=function(){e.domElement.removeEventListener("contextmenu",we),e.domElement.removeEventListener("pointerdown",Ee),e.domElement.removeEventListener("pointercancel",Y),e.domElement.removeEventListener("wheel",Pe),e.domElement.removeEventListener("pointermove",J),e.domElement.removeEventListener("pointerup",Y),e._domElementKeyEvents!==null&&(e._domElementKeyEvents.removeEventListener("keydown",ee),e._domElementKeyEvents=null)};const e=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let i=o.NONE;const ie=1e-6,s=new Ae,m=new Ae;let y=1;const M=new u,g=new d,E=new d,O=new d,P=new d,w=new d,A=new d,L=new d,j=new d,k=new d,se=new u,f=new d;let K=!1;const a=[],U={};function ke(t){return t!==null?2*Math.PI/60*e.autoRotateSpeed*t:2*Math.PI/60/60*e.autoRotateSpeed}function F(){return Math.pow(.95,e.zoomSpeed)}function C(t){m.theta-=t}function Z(t){m.phi-=t}const re=function(){const t=new u;return function(r,c){t.setFromMatrixColumn(c,0),t.multiplyScalar(-r),M.add(t)}}(),ce=function(){const t=new u;return function(r,c){e.screenSpacePanning===!0?t.setFromMatrixColumn(c,1):(t.setFromMatrixColumn(c,0),t.crossVectors(e.object.up,t)),t.multiplyScalar(r),M.add(t)}}(),D=function(){const t=new u;return function(r,c){const l=e.domElement;if(e.object.isPerspectiveCamera){const S=e.object.position;t.copy(S).sub(e.target);let b=t.length();b*=Math.tan(e.object.fov/2*Math.PI/180),re(2*r*b/l.clientHeight,e.object.matrix),ce(2*c*b/l.clientHeight,e.object.matrix)}else e.object.isOrthographicCamera?(re(r*(e.object.right-e.object.left)/e.object.zoom/l.clientWidth,e.object.matrix),ce(c*(e.object.top-e.object.bottom)/e.object.zoom/l.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}}();function B(t){e.object.isPerspectiveCamera||e.object.isOrthographicCamera?y/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function le(t){e.object.isPerspectiveCamera||e.object.isOrthographicCamera?y*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function ue(t){if(!e.zoomToCursor)return;K=!0;const n=e.domElement.getBoundingClientRect(),r=t.clientX-n.left,c=t.clientY-n.top,l=n.width,S=n.height;f.x=r/l*2-1,f.y=-(c/S)*2+1,se.set(f.x,f.y,1).unproject(e.object).sub(e.object.position).normalize()}function Q(t){return Math.max(e.minDistance,Math.min(e.maxDistance,t))}function de(t){g.set(t.clientX,t.clientY)}function Ce(t){ue(t),L.set(t.clientX,t.clientY)}function me(t){P.set(t.clientX,t.clientY)}function Ye(t){E.set(t.clientX,t.clientY),O.subVectors(E,g).multiplyScalar(e.rotateSpeed);const n=e.domElement;C(2*Math.PI*O.x/n.clientHeight),Z(2*Math.PI*O.y/n.clientHeight),g.copy(E),e.update()}function ze(t){j.set(t.clientX,t.clientY),k.subVectors(j,L),k.y>0?B(F()):k.y<0&&le(F()),L.copy(j),e.update()}function _e(t){w.set(t.clientX,t.clientY),A.subVectors(w,P).multiplyScalar(e.panSpeed),D(A.x,A.y),P.copy(w),e.update()}function He(t){ue(t),t.deltaY<0?le(F()):t.deltaY>0&&B(F()),e.update()}function ve(t){let n=!1;switch(t.code){case e.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?Z(2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):D(0,e.keyPanSpeed),n=!0;break;case e.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?Z(-2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):D(0,-e.keyPanSpeed),n=!0;break;case e.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?C(2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):D(e.keyPanSpeed,0),n=!0;break;case e.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?C(-2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):D(-e.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),e.update())}function pe(){if(a.length===1)g.set(a[0].pageX,a[0].pageY);else{const t=.5*(a[0].pageX+a[1].pageX),n=.5*(a[0].pageY+a[1].pageY);g.set(t,n)}}function he(){if(a.length===1)P.set(a[0].pageX,a[0].pageY);else{const t=.5*(a[0].pageX+a[1].pageX),n=.5*(a[0].pageY+a[1].pageY);P.set(t,n)}}function fe(){const t=a[0].pageX-a[1].pageX,n=a[0].pageY-a[1].pageY,r=Math.sqrt(t*t+n*n);L.set(0,r)}function Ke(){e.enableZoom&&fe(),e.enablePan&&he()}function Ue(){e.enableZoom&&fe(),e.enableRotate&&pe()}function be(t){if(a.length==1)E.set(t.pageX,t.pageY);else{const r=te(t),c=.5*(t.pageX+r.x),l=.5*(t.pageY+r.y);E.set(c,l)}O.subVectors(E,g).multiplyScalar(e.rotateSpeed);const n=e.domElement;C(2*Math.PI*O.x/n.clientHeight),Z(2*Math.PI*O.y/n.clientHeight),g.copy(E)}function ye(t){if(a.length===1)w.set(t.pageX,t.pageY);else{const n=te(t),r=.5*(t.pageX+n.x),c=.5*(t.pageY+n.y);w.set(r,c)}A.subVectors(w,P).multiplyScalar(e.panSpeed),D(A.x,A.y),P.copy(w)}function ge(t){const n=te(t),r=t.pageX-n.x,c=t.pageY-n.y,l=Math.sqrt(r*r+c*c);j.set(0,l),k.set(0,Math.pow(j.y/L.y,e.zoomSpeed)),B(k.y),L.copy(j)}function Fe(t){e.enableZoom&&ge(t),e.enablePan&&ye(t)}function Ze(t){e.enableZoom&&ge(t),e.enableRotate&&be(t)}function Ee(t){e.enabled!==!1&&(a.length===0&&(e.domElement.setPointerCapture(t.pointerId),e.domElement.addEventListener("pointermove",J),e.domElement.addEventListener("pointerup",Y)),qe(t),t.pointerType==="touch"?Ve(t):Xe(t))}function J(t){e.enabled!==!1&&(t.pointerType==="touch"?Ge(t):We(t))}function Y(t){Be(t),a.length===0&&(e.domElement.releasePointerCapture(t.pointerId),e.domElement.removeEventListener("pointermove",J),e.domElement.removeEventListener("pointerup",Y)),e.dispatchEvent(je),i=o.NONE}function Xe(t){let n;switch(t.button){case 0:n=e.mouseButtons.LEFT;break;case 1:n=e.mouseButtons.MIDDLE;break;case 2:n=e.mouseButtons.RIGHT;break;default:n=-1}switch(n){case x.DOLLY:if(e.enableZoom===!1)return;Ce(t),i=o.DOLLY;break;case x.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enablePan===!1)return;me(t),i=o.PAN}else{if(e.enableRotate===!1)return;de(t),i=o.ROTATE}break;case x.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enableRotate===!1)return;de(t),i=o.ROTATE}else{if(e.enablePan===!1)return;me(t),i=o.PAN}break;default:i=o.NONE}i!==o.NONE&&e.dispatchEvent(ne)}function We(t){switch(i){case o.ROTATE:if(e.enableRotate===!1)return;Ye(t);break;case o.DOLLY:if(e.enableZoom===!1)return;ze(t);break;case o.PAN:if(e.enablePan===!1)return;_e(t);break}}function Pe(t){e.enabled===!1||e.enableZoom===!1||i!==o.NONE||(t.preventDefault(),e.dispatchEvent(ne),He(t),e.dispatchEvent(je))}function ee(t){e.enabled===!1||e.enablePan===!1||ve(t)}function Ve(t){switch(Te(t),a.length){case 1:switch(e.touches.ONE){case R.ROTATE:if(e.enableRotate===!1)return;pe(),i=o.TOUCH_ROTATE;break;case R.PAN:if(e.enablePan===!1)return;he(),i=o.TOUCH_PAN;break;default:i=o.NONE}break;case 2:switch(e.touches.TWO){case R.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Ke(),i=o.TOUCH_DOLLY_PAN;break;case R.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Ue(),i=o.TOUCH_DOLLY_ROTATE;break;default:i=o.NONE}break;default:i=o.NONE}i!==o.NONE&&e.dispatchEvent(ne)}function Ge(t){switch(Te(t),i){case o.TOUCH_ROTATE:if(e.enableRotate===!1)return;be(t),e.update();break;case o.TOUCH_PAN:if(e.enablePan===!1)return;ye(t),e.update();break;case o.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Fe(t),e.update();break;case o.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Ze(t),e.update();break;default:i=o.NONE}}function we(t){e.enabled!==!1&&t.preventDefault()}function qe(t){a.push(t)}function Be(t){delete U[t.pointerId];for(let n=0;n<a.length;n++)if(a[n].pointerId==t.pointerId){a.splice(n,1);return}}function Te(t){let n=U[t.pointerId];n===void 0&&(n=new d,U[t.pointerId]=n),n.set(t.pageX,t.pageY)}function te(t){const n=t.pointerId===a[0].pointerId?a[1]:a[0];return U[n.pointerId]}e.domElement.addEventListener("contextmenu",we),e.domElement.addEventListener("pointerdown",Ee),e.domElement.addEventListener("pointercancel",Y),e.domElement.addEventListener("wheel",Pe,{passive:!1}),this.update()}}const G=window.innerHeight*.85;var oe=new nt,H=new ot(10,window.innerWidth/G,.1,1e3);H.position.z=13;var v=new at({antialias:!0}),lt=document.getElementById("threescene");v.setSize(window.innerWidth,G);lt.appendChild(v.domElement);const N=new ct(H,v.domElement);N.enableDamping=!0;N.dampingFactor=.05;N.enableZoom=!1;N.screenSpacePanning=!1;N.maxPolarAngle=Math.PI/2;N.minPolarAngle=Math.PI/2;var ut=new it;let Se;ut.load("/carousel/carousel.gltf",T=>{Se=T.scene,Se.normal,oe.add(T.scene),dt(),Re()});function dt(){$(".loader-wrapper").fadeOut("slow"),console.log("carousel loaded")}const xe=new st;xe.intensity=1;oe.add(xe);window.addEventListener("resize",mt);function mt(){H.aspect=window.innerWidth/G,H.updateProjectionMatrix(),v.setSize(window.innerWidth,G)}function Re(){requestAnimationFrame(Re),v.render(oe,H)}const Ne=document.querySelector("body");function pt(T){const{clientX:I,clientY:q}=T,e=I/window.innerWidth,o=q/window.innerHeight;Ne.style.backgroundPosition=`${e*100}% ${o*100}%`}typeof window.orientation>"u"?Ne.addEventListener("mousemove",pt):document.body.classList.add("bodyphone");var ae=document.getElementById("snowstorm");ae.loop=!0;ae.volume=.2;var ht=document.getElementsByTagName("body")[0];ht.addEventListener("click",Ie);function Ie(T){document.body.removeEventListener("click",Ie),ae.play()}