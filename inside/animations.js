import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';

// Set up scene, camera, and renderer
const global_height = window.innerHeight*0.85;
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(10, window.innerWidth / global_height, 0.1, 1000);

// Set camera position
camera.position.z = 13;
//camera.position.z = 10;

var renderer = new THREE.WebGLRenderer({antialias:true,});


// Set renderer size to match the div
var container = document.getElementById('threescene');
renderer.setSize(window.innerWidth, global_height );

// Append renderer to the div
container.appendChild(renderer.domElement);

//controls

const controls = new OrbitControls( camera, renderer.domElement );

controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
controls.dampingFactor = 0.05;
controls.screenSpacePanning = false;
controls.maxPolarAngle = Math.PI / 2;
controls.minPolarAngle = Math.PI / 2;

//carousel load 
var loader = new GLTFLoader();
let carousel;
loader.load('/carousel/carousel.gltf', (gltfScene)=>{
  carousel = gltfScene.scene;
  carousel.normal
  //init door position
  scene.add(gltfScene.scene)
  animate();

})


//add light


const amlight = new THREE.AmbientLight();
amlight.intensity=1;
scene.add(amlight);

//resize
window.addEventListener( 'resize', onWindowResize );
function onWindowResize() {
  camera.aspect = window.innerWidth / global_height;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, global_height );

}

function animate() {
    requestAnimationFrame(animate);
    //carousel rotate
    //carousel.rotation.y -= 0.001;

    // Render the scene
    renderer.render(scene, camera);
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
