import * as THREE from 'three';
import { GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';

// Set up scene, camera, and renderer
let global_height = window.innerHeight*0.66;
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(10, window.innerWidth / global_height, 0.1, 1000);

// Set camera position
camera.position.z = 0.7;
camera.position.x = 0.01;
camera.position.y = 0.18; //updown
camera.rotation.x = -0.17;


var renderer = new THREE.WebGLRenderer({antialias:true,});
var renderer2 = new THREE.WebGLRenderer({antialias:true,}); //dupe

// Set renderer size to match the div
var container = document.getElementById('threescene');
var container2 = document.getElementById('threescene2'); //dupe
renderer.setSize(window.innerWidth/2, window.innerHeight/3 );
renderer2.setSize(window.innerWidth/2, window.innerHeight/3 ); //dupe

// Append renderer to the div
container.appendChild(renderer.domElement); 
container2.appendChild(renderer2.domElement); //dupe


//OBJECTS
//pika load 
var loader = new GLTFLoader();
let pika;
loader.load('/pika/pika.gltf', (gltfScene)=>{
  pika = gltfScene.scene;
  scene.add(gltfScene.scene);
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


const amlight = new THREE.AmbientLight();
amlight.intensity=3;
scene.add(amlight);

//resize
window.addEventListener( 'resize', onWindowResize );
function onWindowResize() {
  global_height = window.innerHeight*0.85;
  camera.aspect = window.innerWidth / global_height;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth/2, window.innerHeight/2 );
  renderer2.setSize( window.innerWidth/2, window.innerHeight/2 ); //dupe

}

function moveCam(){

  const t = document.body.getBoundingClientRect().top;
  pika.rotation.y=t*0.001;
  
}
document.body.onscroll = moveCam

function animate() {
    requestAnimationFrame(animate);
    // Render the scene
    renderer.render(scene, camera);
    renderer2.render(scene, camera); //dupe
    
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
