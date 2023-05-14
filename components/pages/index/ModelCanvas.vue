<template>
  <canvas class="h-full"></canvas>
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default {
  name: "ModelCanvas",
  data() {
    return{
      camera: null,
      scene: null,
      renderer: null

    }
  },
  mounted() {
    this.initScene();
  },
  methods: {
    initScene(){
      const canvas = document.querySelector('canvas');
      const scene = new THREE.Scene();

      let camera = new THREE.PerspectiveCamera( 16, 0.5, 1, 100 );
      camera.position.set( 1, 1, 20 );

      const renderer = new THREE.WebGLRenderer( { antialias: true, canvas: canvas, alpha: true } );
      renderer.setPixelRatio( window.devicePixelRatio );
      renderer.shadowMap.enabled = true;
      renderer.outputEncoding = THREE.sRGBEncoding;


      const loader = new GLTFLoader();
      loader.load(
        // resource URL
        '/model/cros.glb',
        // called when the resource is loaded
        function ( gltf ) {
          gltf.scene.position.x = 0;				    //Position (x = right+ left-)
          gltf.scene.position.y = 0;				    //Position (y = up+, down-)
          gltf.scene.position.z = 0;
          scene.add( gltf.scene );

        },
        // called while loading is progressing
        function ( xhr ) {

          console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

        },
        // called when loading has errors
        function ( error ) {

          console.log( 'An error happened' );

        }
      );

      let light = new THREE.AmbientLight(0xffffff);
      scene.add(light);

      camera.lookAt(new THREE.Vector3(0,0,0))

      renderer.setAnimationLoop( () => {
        renderer.render(scene, camera);

        const width = canvas.clientWidth;
        const height = canvas.clientHeight;

        // adjust displayBuffer size to match
        if (canvas.width !== width || canvas.height !== height) {
          // you must pass false here or three.js sadly fights the browser
          renderer.setSize(width, height, false);
          camera.aspect = width / height;
          camera.updateProjectionMatrix();

          // update any render target sizes here
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
