import './style.css'

import * as THREE from 'three';
//import { OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import { PointerLockControls} from 'three/examples/jsm/controls/PointerLockControls';
import TWEEN from '@tweenjs/tween.js';
import { GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';

import { EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass} from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass} from 'three/examples/jsm/postprocessing/UnrealBloomPass';

//init
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight,0.1,1000);
const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#background'),antialias:true,
});

// for windows specific
//**
var ismobile = 1;
if (typeof window.orientation == 'undefined'){
ismobile = 0;
}else{
  window.location="/inside/main.html";
}
//renderer size &loc
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);
camera.position.setZ(0);
camera.position.setY(1.8);
camera.position.setX(-50);
camera.setRotationFromAxisAngle({x:0.0,y:1.0,z:0.0},Math.PI/-2+Math.random()/100);


//efcomp render passes
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera))
composer.addPass(new UnrealBloomPass({x:1024, y:1024}, 0.5, 0.0, 0.35))



//cabin load 
let doorModel;
var loader = new GLTFLoader();
var modelPath = '/cabin/cabin.gltf';

loader.load(
    modelPath,
    function (gltf) {
        var object = gltf.scene;
        scene.add(object);
        onModelALoaded();
    }
);
function onModelALoaded() {
  //loading script
  $(".loader-wrapper").fadeOut("slow");
  //turn back on instructions and cursor
  document.getElementById('blocker').style.display = 'flex';
  document.getElementById('instructions').style.display = 'flex';
  console.log('cabin loaded');
}



loader.load('/cabindoor/cabindoor.gltf', (gltfScene2)=>{
  doorModel = gltfScene2;
  //init door position
  gltfScene2.scene.position.x =-3.4; //frontback
  gltfScene2.scene.position.y =1.7; //updown
  gltfScene2.scene.position.z =0.2; //leftright
  scene.add(gltfScene2.scene)
})


//snow
let positions =[];
let sizes = [];
let snow,snowGeo,snowDrop,snowCount = 20000;
snowGeo = new THREE.BufferGeometry();
for (let i=0;i<snowCount;i++){
  snowDrop = new THREE.Vector3(
    Math.random()*1300+100,// long to prolong snow
    Math.random()*100-50,
    Math.random()*100-50
  );
  positions.push(Math.random()*1300+100);
  positions.push(Math.random()*100-50);
  positions.push(Math.random()*100-50);
  sizes.push(30);
}
snowGeo.setAttribute(
  "position",new THREE.BufferAttribute(new Float32Array(positions),3)
);
snowGeo.setAttribute(
  "size",
  new THREE.BufferAttribute(new Float32Array(sizes),1)

);
const snowMat = new THREE.PointsMaterial({
  color: 0xaaaaaa,
  sizes: 0.2,
  transparent: true
});
var snowAlpha = new THREE.TextureLoader().load('/snowAlpha.png');
snowMat.alphaMap=snowAlpha;
snow = new THREE.Points(snowGeo,snowMat);
scene.add(snow);





//add fog
scene.fog = new THREE.Fog(0x9E9EA1, 0.0, 170.0);

//add light
//const pointLight = new THREE.PointLight(0xffffff,  3.0,  100.0, 1.0)
const ambientLight = new THREE.AmbientLight(0xffffff,2);
//pointLight.position.set(-3,5,0)
scene.add(ambientLight)

//controls
//orbit for test
//const controls = new OrbitControls(camera, renderer.domElement);
const controls = new PointerLockControls(camera, renderer.domElement);
controls.pointerSpeed=0.4;


//lockcam and display
document.addEventListener('click', function(){
  controls.lock();
});
controls.addEventListener( 'lock', function () {
  instructions.style.display = 'none';
  blocker.style.display = 'none';
  const cursor = document.querySelector('.cursor');
  document.addEventListener('mousemove',e => {
    cursor.setAttribute("style","top: 45vh; left: 45vw;")
  })
});
controls.addEventListener( 'unlock', function () {
  blocker.style.display = 'block';
  instructions.style.display = 'flex';
  const cursor = document.querySelector('.cursor');
  document.addEventListener('mousemove',e => {
    cursor.setAttribute("style","top: " + (e.pageY-40)+"px; left: "+(e.pageX-45)+"px;")
  })
} );

//resize
window.addEventListener( 'resize', onWindowResize );
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );

}


//movecam
var footstep = document.getElementById("footsteps");
footstep.volume = 0.6;
function moveCam() {
    const targetX = Math.min(camera.position.x + 4, -4.5); //move 1 unit until x=-4
    new TWEEN.Tween(camera.position)
    .to({ x: targetX }, 2000) // 1000 ms = 1 sec
    .easing(TWEEN.Easing.Quadratic.Out) //easing
    .onEveryStart(()=>{
      if (camera.position.x <= -5) {
        footstep.play();
      }
    })
    .onComplete(()=>{
      if (camera.position.x > -5) {
        moveDoor();
      }
    })
    .start();
}

document.body.onclick = moveCam

//movedoor
//can only be executed once
var doorcreak = document.getElementById("doorcreak");
doorcreak.volume = 0.9
var moveDoor =(function() {
  var executed = false;
  return function() {
    if (!executed){
      doorcreak.play()
      const targetR = {y: doorModel.scene.rotation.y-Math.PI/2,x:doorModel.scene.rotation.y+Math.PI/16};
    new TWEEN.Tween(doorModel.scene.rotation)
    .to(targetR , 3800) // 1000 ms = 1 sec
    .easing(TWEEN.Easing.Quintic.Out) //easing
    .onComplete(()=>{
      window.location="/inside/main.html";
    })
    .start();
    executed = true;
    }
  };
})();



//animate loop
function animate(){
  //snowanimate
  snowGeo.attributes.size.array.forEach((r,i)=>{
    r +=0.3; 
  });
  snowGeo.verticesNeedUpdate = true;
  snow.position.x -=3;
  if (snow.position.x< -1500){
    snow.position.x = 0;
  }
  //subtle cam shake
  camera.rotation.x+=(Math.random()*2-1)/700;
  camera.rotation.y+=(Math.random()*2-1)/600;
  camera.rotation.z+=(Math.random()*2-1)/700;
  
  requestAnimationFrame(animate);
  controls.update;
  TWEEN.update();
  composer.render(scene,camera);
}
animate()




//sounds
var snowstorm = document.getElementById("snowstorm");
snowstorm.loop=true;
document.addEventListener("click",function(){
  console.log("what");
  snowstorm.play();
});