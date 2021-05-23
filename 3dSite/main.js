import './style.css'

import * as THREE from 'three';
import { AmbientLight } from 'three';


const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(30);
camera.lookAt(0, 0, 0);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xFF6347 });
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);


const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(10, 5, 5)
const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(pointLight, ambientLight)

const lightHelper = new THREE.PointLightHelper(pointLight)
scene.add(lightHelper);

const gridHelper = new THREE.GridHelper(50, 50);
//scene.add(gridHelper);

// when scrolling, position changing stuff idk
torus.position.x = 0;
torus.position.y = 0;
torus.position.z = 0;

function scrollMoveCamera() {
  const t = document.body.getBoundingClientRect().top;

  camera.position.z = -0.05 * t;
  camera.rotation.y = 0.03 * t;

  renderer.render(scene, camera);
}

document.body.onscroll = scrollMoveCamera

/*
function animate() {
  requestAnimationFrame(animate);

  torus.rotation.y += 0.01;


  renderer.render(scene, camera);
}
animate()
// */






