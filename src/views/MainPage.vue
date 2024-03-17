<template>
  <ion-page>
    
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Welcome</ion-title>
      </ion-toolbar>
    </ion-header>
  
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Welcome</ion-title>
        </ion-toolbar>
      </ion-header>
      <div style="width: 100%; height: 100%; position: absolute; top: 0;" id="content-house" v-bind:on-load="load()"></div>
      <div id="wtf">
        <div id="bruh">
          <h2>Limoncello</h2>
          <p class="error" style="text-align: center;">Please note this app is in early development and you may experience some demons.</p>
        </div>
      </div>
    </ion-content>

  </ion-page>
</template>

<script setup lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToast, IonToolbar, IonFooter } from '@ionic/vue';
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setClearColor( 0xffffff, 0);
renderer.setSize( window.innerWidth, window.innerHeight );

const geometry = new THREE.SphereGeometry( 1, 10, 10 );
const wireframe = new THREE.WireframeGeometry( geometry );
const material = new THREE.MeshBasicMaterial( { color: 0xeb445a } );

const line = new THREE.LineSegments( wireframe, material );

scene.add( line );

camera.position.z = 5;

function animate() {
  requestAnimationFrame( animate );
  
	line.rotation.x += 0.005;
	line.rotation.y += 0.005;
	line.rotation.z += 0.005;
  
	renderer.render( scene, camera );
}

animate();

function load() {
  document.getElementById("content-house")?.appendChild( renderer.domElement );
}

let speed = 0.01;
let reqSpeed = 0.05;
let increasing = true;
setTimeout(() => {
  let interval = setInterval(() => {
    camera.position.z -= speed;
    if (camera.position.z <= 0.8) {
      changeOpacity();
      clearInterval(interval);
    } else if (camera.position.z > 0.8 && camera.position.z < 1.5) {
      if (speed > reqSpeed) {
        speed -= 0.002;
      }
    }
    if (speed < reqSpeed && increasing) {
      speed += 0.001;
    } else {
      increasing = false;
      reqSpeed = 0.01;
    }
  }, 10);
}, 1000);

function changeOpacity() {
  let element = document.getElementById("wtf");
  element!.style.opacity = '0';
  let interval2 = setInterval(() => {
    let opacityFloat = Number.parseFloat(element!.style.opacity);
    if (opacityFloat < 1) {
      element!.style.opacity = (0.05 + opacityFloat).toString();
    } else {
      clearInterval(interval2);
    }
  }, 10);
}

</script>

<style scoped>
h1 {
  font-size: 2rem;
}
p {
  padding: 10px;
}
.error {
  color: darkred;
}
#wtf {
  height: 100%;
  display: grid;
  place-items: center;
  opacity: 0;
}
#bruh {
  background-color: #FFEAA7;
  width: 200px;
  /* height: fit-content; */
  display: grid;
  place-items: center;
  border-radius: 10px;
  z-index: 0;
  border: 1.5px solid #FF6868;
}
#bruh h1 {
  color: black;
}

</style>