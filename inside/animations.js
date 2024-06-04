import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';

// Set up scene, camera, and renderer
let global_height = window.innerHeight*0.85;
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
controls.enableZoom = false;
controls.screenSpacePanning = false;
controls.maxPolarAngle = Math.PI / 2;
controls.minPolarAngle = Math.PI / 2;
//SHADER WORK
// Vertex shader
const vertexShader = `
      attribute float size; 
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

// Fragment shader
const fragmentShader = `
      uniform sampler2D texture1;
      uniform float brightness;
      varying vec2 vUv;
      void main() {
        vec4 color = texture(texture1, vUv);
        gl_FragColor = vec4(color.rgb * brightness, color.a);
      }
    `;
//OBJECTS
//carousel load 
var loader = new GLTFLoader();
let carousel;
loader.load('/carousel/carousel.gltf', (gltfScene)=>{
  carousel = gltfScene.scene;
  carousel.normal;
  //init door position
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

// get screen

const textureLoader = new THREE.TextureLoader();
    const textureA = textureLoader.load('/images/A.png', () => {
      animate();
    });
    const textureB = textureLoader.load('/images/B.png', () => {
      animate();
    });
// screen shader
const materialA = new THREE.ShaderMaterial({
  uniforms: {
    texture1: { value: textureA },
    brightness: { value: 1.0 }
  },
  vertexShader: vertexShader,
  fragmentShader: fragmentShader
});
const materialB = new THREE.ShaderMaterial({
  uniforms: {
    texture1: { value: textureB },
    brightness: { value: 1.0 }
  },
  vertexShader: vertexShader,
  fragmentShader: fragmentShader
});
//screens
const geometry = new THREE.BoxGeometry(0.95,0.55,0.01);
const screenA = new THREE.Mesh(geometry, materialA);
const screenB = new THREE.Mesh(geometry, materialB);
screenA.position.x =0.075; //leftright
screenA.position.y =0.3; //updown
screenA.position.z =0.70; //frontback
screenA.rotation.x =-0.1; 
screenA.rotation.y =-0.3; //zvert
screenA.rotation.z =0.1; //front
scene.add(screenA);
screenB.position.x =0.87; //leftright
screenB.position.y =0.35; //updown
screenB.position.z =-0.28; //frontback
screenB.rotation.x =-0.15; 
screenB.rotation.y =-96; //zvert
screenB.rotation.z =-0.1; //front
scene.add(screenB);


//add light


const amlight = new THREE.AmbientLight();
amlight.intensity=1.1;
scene.add(amlight);

//resize
window.addEventListener( 'resize', onWindowResize );
function onWindowResize() {
  global_height = window.innerHeight*0.85;
  camera.aspect = window.innerWidth / global_height;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, global_height );

}

function animate() {
    requestAnimationFrame(animate);
    //screen flashing
    materialA.uniforms.brightness.value = 0.5+(Math.random()/3);
    materialB.uniforms.brightness.value = 0.5+(Math.random()/3);
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
