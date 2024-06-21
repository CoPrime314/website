import * as THREE from 'three';
import { GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';


// 1: pika,  2: rykard,  3: sunfish,  4: earwig

// Set up scene, camera, and renderer
let global_height = window.innerHeight*0.66;
var scene = new THREE.Scene();
var scene2 = new THREE.Scene();
var scene3 = new THREE.Scene();
var scene4 = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(10, window.innerWidth / global_height, 0.1, 1000);
var camera2 = new THREE.PerspectiveCamera(10, window.innerWidth / global_height, 0.1, 1000);
var camera3 = new THREE.PerspectiveCamera(10, window.innerWidth / global_height, 0.1, 1000);
var camera4 = new THREE.PerspectiveCamera(10, window.innerWidth / global_height, 0.1, 1000);

// Set camera position
camera.position.z = 0.7;
camera.position.x = 0.01;
camera.position.y = 0.24; //updown
camera.rotation.x = -0.25;
camera2.position.z = 0.7;
camera2.position.x = 0.01;
camera2.position.y = 0.22; //updown
camera2.rotation.x = -0.21;
camera3.position.z = 0.9;
camera3.position.x = 0.01;
camera3.position.y = 0.34; //updown
camera3.rotation.x = -0.25;
camera4.position.z = 1.1;
camera4.position.x = -0.01; //left right
camera4.position.y = 0.62; //updown
camera4.rotation.x = -0.50;


var renderer = new THREE.WebGLRenderer({antialias:true,});
var renderer2 = new THREE.WebGLRenderer({antialias:true,}); //dupe
var renderer3 = new THREE.WebGLRenderer({antialias:true,}); //dupe
var renderer4 = new THREE.WebGLRenderer({antialias:true,}); //dupe

// Set renderer size to match the div
var container = document.getElementById('threescene');
var container2 = document.getElementById('threescene2'); //dupe
var container3 = document.getElementById('threescene3'); //dupe
var container4 = document.getElementById('threescene4'); //dupe
renderer.setSize(window.innerWidth/2, window.innerHeight/3 );
renderer2.setSize(window.innerWidth/2, window.innerHeight/3 ); //dupe
renderer3.setSize(window.innerWidth/2, window.innerHeight/3 ); //dupe
renderer4.setSize(window.innerWidth/2, window.innerHeight/3 ); //dupe

// Append renderer to the div
container.appendChild(renderer.domElement); 
container2.appendChild(renderer2.domElement); //dupe
container3.appendChild(renderer3.domElement); //dupe
container4.appendChild(renderer4.domElement); //dupe


//OBJECTS
//pika load 
var loader = new GLTFLoader();
let pika;
loader.load('/pika/pika.gltf', (gltfScene)=>{
  pika = gltfScene.scene;
  scene.add(gltfScene.scene);
  animate();

})
let rykard;
loader.load('/rykard/rykard.gltf', (gltfScene)=>{
  rykard = gltfScene.scene;
  scene2.add(gltfScene.scene);
  animate();

})
let sunfish;
loader.load('/sunfish/sunfish.gltf', (gltfScene)=>{
  sunfish = gltfScene.scene;
  scene3.add(gltfScene.scene);
  animate();

})
let earwig;
loader.load('/earwig/earwig.gltf', (gltfScene)=>{
  earwig = gltfScene.scene;
  scene4.add(gltfScene.scene);
  onModelALoaded();
  animate();

})
function onModelALoaded() {
  //loading script
  $(".loader-wrapper").fadeOut("slow");
  //readd scroll
  document.body.style.overflow = 'visible';
  //turn back on instructions and cursor
  console.log('carousel loaded');
}


//add light


// add light
const amlight1 = new THREE.AmbientLight();
amlight1.intensity = 2;
scene.add(amlight1);

const amlight2 = new THREE.AmbientLight();
amlight2.intensity = 2;
scene2.add(amlight2);

const amlight3 = new THREE.AmbientLight();
amlight3.intensity = 2;
scene3.add(amlight3);

const amlight4 = new THREE.AmbientLight();
amlight4.intensity = 2;
scene4.add(amlight4);
//resize
window.addEventListener( 'resize', onWindowResize );
function onWindowResize() {
  global_height = window.innerHeight*0.85;
  camera.aspect = window.innerWidth / global_height;
  camera2.aspect = window.innerWidth / global_height;
  camera3.aspect = window.innerWidth / global_height;
  camera4.aspect = window.innerWidth / global_height;
  camera.updateProjectionMatrix();
  camera2.updateProjectionMatrix();
  camera3.updateProjectionMatrix();
  camera4.updateProjectionMatrix();

  renderer.setSize( window.innerWidth/2, window.innerHeight/2 );
  renderer2.setSize( window.innerWidth/2, window.innerHeight/2 ); //dupe
  renderer3.setSize( window.innerWidth/2, window.innerHeight/2 ); //dupe
  renderer4.setSize( window.innerWidth/2, window.innerHeight/2 ); //dupe

}

function moveCam(){
  const element = document.getElementById("body");
  const t = element.getBoundingClientRect().top;
  pika.rotation.y=t*0.0005;
  rykard.rotation.y=t*0.0005+1.3;
  sunfish.rotation.y=t*0.0005+0.3;
  earwig.rotation.y=t*0.0005+0.1;
  
}
document.body.onscroll = moveCam

function animate() {
    requestAnimationFrame(animate);
    // Render the scene
    renderer.render(scene, camera);
    renderer2.render(scene2, camera2); //dupe
    renderer3.render(scene3, camera3); //dupe
    renderer4.render(scene4, camera4); //dupe
    
};
















/*
      END OF THREEJS CODE
*/


//parallaxing with cursor
const bodymouse = document.querySelector('body');
function handleMouseMove(event) {
  const { clientX, clientY } = event;
  const x = clientX / window.innerWidth;
  const y = clientY / window.innerHeight;
  bodymouse.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
}
//end of parallax code


//**
// for windows specific
//**
if (typeof window.orientation == 'undefined'){
  bodymouse.addEventListener('mousemove', handleMouseMove);
}else{
  document.body.classList.add('bodyphone');
}
  

//sound
var snowstorm = document.getElementById("snowstorm");
snowstorm.loop=true;
snowstorm.volume=0.2;

var body = document.getElementsByTagName("body")[0];
body.addEventListener("click",changebg);

function changebg(body){ 
    document.body.removeEventListener("click",changebg);
    snowstorm.play();
}
