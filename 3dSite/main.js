import './style.css'

import * as THREE from 'three';
import { AmbientLight } from 'three';

// MAKE SCENE
const scene = new THREE.Scene();

/*
// MAKE PERSPECTIVE CAMERA
const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
*/

// MAKE ORTHO CAMERA
const camera = new THREE.OrthographicCamera(100, 100, 100, 100, 0.1, 1000);

// RENDER THIS SHIT
const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
});

// RENDER SPECS AND STUFF
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

// CAMERA POSITION
camera.position.z = 10;
camera.lookAt(0, 0, 0);

/*
// MAKE TORUS
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xFF6347 });
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);
*/

/*
// MAKE POINT LIGHT
const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(10, 5, 5)
*/

/*
// MAKE LIGHT HELPER
const lightHelper = new THREE.PointLightHelper(pointLight)
scene.add(lightHelper);
*/

// MAKE AMBIENT LIGHT
const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(pointLight, ambientLight)

// MAKE GRID
const gridHelper = new THREE.GridHelper(50, 50);
scene.add(gridHelper);





/*
function animate() {
  requestAnimationFrame(animate);

  torus.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate()
// */






