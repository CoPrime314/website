import"./modulepreload-polyfill-3cfb730f.js";import{e as s,P as w,q as c,G as q,k as l}from"./GLTFLoader-8902865b.js";let n=window.innerHeight*.66;var g=new s,v=new s,W=new s,b=new s,i=new w(10,window.innerWidth/n,.1,1e3),t=new w(10,window.innerWidth/n,.1,1e3),o=new w(10,window.innerWidth/n,.1,1e3),d=new w(10,window.innerWidth/n,.1,1e3);i.position.z=.7;i.position.x=.01;i.position.y=.24;i.rotation.x=-.25;t.position.z=.7;t.position.x=.01;t.position.y=.22;t.rotation.x=-.21;o.position.z=.9;o.position.x=.01;o.position.y=.34;o.rotation.x=-.25;d.position.z=1.1;d.position.x=-.01;d.position.y=.64;d.rotation.x=-.5;var m=new c({antialias:!0}),h=new c({antialias:!0}),p=new c({antialias:!0}),u=new c({antialias:!0}),A=document.getElementById("threescene"),G=document.getElementById("threescene2"),R=document.getElementById("threescene3"),F=document.getElementById("threescene4");m.setSize(window.innerWidth/2,window.innerHeight/3);h.setSize(window.innerWidth/2,window.innerHeight/3);p.setSize(window.innerWidth/2,window.innerHeight/3);u.setSize(window.innerWidth/2,window.innerHeight/3);A.appendChild(m.domElement);G.appendChild(h.domElement);R.appendChild(p.domElement);F.appendChild(u.domElement);var y=new q;let E;y.load("/pika/pika.gltf",e=>{E=e.scene,g.add(e.scene),a()});let z;y.load("/rykard/rykard.gltf",e=>{z=e.scene,v.add(e.scene),a()});let x;y.load("/sunfish/sunfish.gltf",e=>{x=e.scene,W.add(e.scene),a()});let H;y.load("/earwig/earwig.gltf",e=>{H=e.scene,b.add(e.scene),T(),a()});function T(){$(".loader-wrapper").fadeOut("slow"),document.body.style.overflow="visible",console.log("carousel loaded")}const k=new l;k.intensity=2;g.add(k);const L=new l;L.intensity=2;v.add(L);const B=new l;B.intensity=2;W.add(B);const C=new l;C.intensity=2;b.add(C);window.addEventListener("resize",N);function N(){n=window.innerHeight*.85,i.aspect=window.innerWidth/n,t.aspect=window.innerWidth/n,o.aspect=window.innerWidth/n,d.aspect=window.innerWidth/n,i.updateProjectionMatrix(),t.updateProjectionMatrix(),o.updateProjectionMatrix(),d.updateProjectionMatrix(),m.setSize(window.innerWidth/2,window.innerHeight/2),h.setSize(window.innerWidth/2,window.innerHeight/2),p.setSize(window.innerWidth/2,window.innerHeight/2),u.setSize(window.innerWidth/2,window.innerHeight/2)}function O(){const r=document.getElementById("body").getBoundingClientRect().top;E.rotation.y=r*5e-4,z.rotation.y=r*5e-4+1.3,x.rotation.y=r*5e-4+.3,H.rotation.y=r*5e-4+.1}document.body.onscroll=O;function a(){requestAnimationFrame(a),m.render(g,i),h.render(v,t),p.render(W,o),u.render(b,d)}const M=document.querySelector("body");function X(e){const{clientX:r,clientY:I}=e,S=r/window.innerWidth,j=I/window.innerHeight;M.style.backgroundPosition=`${S*100}% ${j*100}%`}typeof window.orientation>"u"?M.addEventListener("mousemove",X):document.body.classList.add("bodyphone");var f=document.getElementById("snowstorm");f.loop=!0;f.volume=.2;var Y=document.getElementsByTagName("body")[0];Y.addEventListener("click",P);function P(e){document.body.removeEventListener("click",P),f.play()}