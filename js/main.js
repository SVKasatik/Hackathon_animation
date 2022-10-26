import * as THREE from './../node_modules/three/build/three.module.js';


//Creating the scene
const scene = new THREE.Scene();
const spaceTexture = new THREE.TextureLoader().load('images/space.jpg');
scene.background = spaceTexture;
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


//Additing the Objects
const geometry = new THREE.BoxGeometry( 2, 2, 2 );
const cubeTexture = new THREE.TextureLoader().load('images/cube.jpg');
const material = new THREE.MeshBasicMaterial({ map: cubeTexture });
const cube = new THREE.Mesh( geometry, material );
cube.position.z = -2;
cube.rotation.y = 10;
cube.rotation.x = 10;
scene.add( cube );

// const geometry1 = new THREE.SphereGeometry( 1, 14, 14 );
// const cubeTexture1 = new THREE.TextureLoader().load('images/sphere.jpg');
// const material1 = new THREE.MeshBasicMaterial({ map: cubeTexture1 });
// const sphere = new THREE.Mesh( geometry1, material1 );
// scene.add( sphere );

camera.position.z = 5;

//Rendering the scene
function animate() {
	requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();