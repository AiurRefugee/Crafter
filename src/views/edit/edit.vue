<template>
    <div class="main-wrapper">
        Editor to be continued
    </div>
</template>
<script setup>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { onMounted, ref, watch, nextTick, getCurrentInstance } from 'vue'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js'
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const loader = new GLTFLoader();

let lightsSettings = {
  'intensity': 0.4,
  'target': {
    'position': {
      'x': 0,
      'y': 0,
      'z': 0
    }
  }
}

let debugSettings = {
  keypointVisible: false,
  axesHelperVisible: true
}
let mixer, idleAction, walkAction, runAction

function init() {
    scene.background = new THREE.Color( 0xbfe3dd )
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.shadowMap.enabled = true;
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize(window.innerWidth , window.innerHeight )
    const controls = new OrbitControls(camera, renderer.domElement)
    document.body.appendChild( renderer.domElement );
}

function addAxesHelper() {
    const axesHelper = new THREE.AxesHelper(10)
    axesHelper.visible = debugSettings.axesHelperVisible
    scene.add(axesHelper)
}
addAxesHelper()


 
function loadFloor() {
    const texture = new THREE.TextureLoader().load('src/assets/textures/brick.jpg');
    texture.wrapS = THREE.RepeatWrapping; // 在横向上重复纹理
    texture.wrapT = THREE.RepeatWrapping; // 在纵向上使用边缘颜色填充
    texture.repeat.set(100, 100)
    
    const planeMaterial = new THREE.MeshLambertMaterial({ 
    map: texture,
    }); 
    const mesh = new THREE.Mesh( new THREE.PlaneGeometry( 5000, 5000 ), planeMaterial);
    mesh.rotation.x = - Math.PI / 2
    mesh.receiveShadow = true
    mesh.name = 'brick'
    scene.add( mesh )
}




function loadModel() {
    loader.load(
        // resource URL
        "src/assets/models/Soldier.glb",
        // called when the resource is loaded
        function ( gltf ) { 
            camera.position.set(0, 10, 45)
            let model = gltf.scene;
            camera.lookAt(model.position)
            model.scale.set(10, 10, -10)

            scene.add( model );
            model.traverse( function ( object ) {

                if ( object.isMesh ) object.castShadow = true;
                //console.log(object.name, object.parent.name)
            } );

            //

            // const skeleton = new THREE.SkeletonHelper( model );
            // skeleton.depthWrite = true
            // skeleton.bones.map((item) => {
            //   console.log(item.name)
            // })
            // skeleton.bones[0].position.set(90, 0, 0)
            // skeleton.bones[1].position.set(80, 0, 0)
            // skeleton.visible = true;
            // scene.add( skeleton );

            const animations = gltf.animations;
            
            // 创建骨骼和动画混合器
            mixer = new THREE.AnimationMixer(model);

            // 将动画添加到混合器中，并播放动画
            const animation = mixer.clipAction(animations[3]);
            animation.play();
            animate();


        },
        // called while loading is progressing
        function ( xhr ) {

        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

        },
        // called when loading has errors
        function ( error ) {

        console.log( error );

        }
    )
}
 
function addLight() {
    const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444 )
    hemiLight.position.set( 0, 5, 0 )
    scene.add( hemiLight );

    const dirLight = new THREE.DirectionalLight( 0xffffff )
    dirLight.position.set( - 30, 50,  -50 )
    dirLight.intensity = lightsSettings.intensity
    dirLight.castShadow = true
    dirLight.shadow.camera.top = 200
    dirLight.shadow.camera.bottom = - 200
    dirLight.shadow.camera.left = - 200
    dirLight.shadow.camera.right = 200
    dirLight.shadow.camera.near = 0.1
    dirLight.shadow.camera.far = 500
    dirLight.shadow.mapSize.width = 2048 // default 512
    dirLight.shadow.mapSize.height = 2048 // default
    scene.add( dirLight );
    scene.add( dirLight.target )
}

const clock = new THREE.Clock();
const time = clock.getElapsedTime();

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
    const delta = clock.getDelta();
    if(mixer){
        mixer.update(delta);
    }
}
onMounted(() => {
    init()
    addLight()
    loadFloor()
    loadModel()
    animate()
})  
</script>
<style lang="scss" scoped></style>
