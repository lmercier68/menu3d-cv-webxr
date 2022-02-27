import React, {Suspense, useEffect, useRef, useState} from "react";
import {
    OrbitControls,
    Reflector,
    useTexture,
    Environment,
    Text,
    useContextBridge,
    MeshReflectorMaterial
} from '@react-three/drei'
import HexaBallCV from "./HexaBallCV"
import {config, useSpring, useSpringRef} from "@react-spring/three";
import {VRCanvas, DefaultXRControllers} from '@react-three/xr'
import Skybox from "./skybox";
import {Canvas, useLoader, useThree} from "@react-three/fiber";
import {CubeTextureLoader, TextureLoader} from "three";

export default function D3MenuScene() {
    const cam = [0, 2, 20];

    const canvas = useRef();


    const camReference = useSpringRef();
    const camPos = useSpring({
        ref: camReference,
        from: [0, 2, 50],
        to: async (next, cancel) => {
            await next({camPos: [0, 2, 20]})
        }, delay: 100,
        config: config.molasses,
    })
    camReference.start()
    const camPosition = [0, 2, 50];

    function Sky() {
        const {scene} = useThree();
        const loader = new CubeTextureLoader();
        console.log('scene ' + scene);
        // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
        const texture = loader.load([

            "./assets/bkg3_back6.png",
            "./assets/bkg3_front5.png",

            "./assets/bkg3_top3.png",
            "./assets/bkg3_bottom4.png",
            "./assets/bkg3_right1.png",
            "./assets/bkg3_left2.png",

        ]);
        // Set the scene background property to the resulting texture.
        scene.background = texture;
        return null;
    }

    return <>

        <VRCanvas concurrent gl={{alpha: true}} pixelRatio={[1, 1.5]} VRCamera={{position: [0, 2, 10]}}
                  camera={{position: [0, 2, 10], fov: 50}}>

            <DefaultXRControllers/>

            <OrbitControls maxAzimuthAngle={0} maxPolarAngle={0} minAzimuthAngle={Math.PI / 2}
                           minPolarAngle={Math.PI / 2}/>


            <ambientLight intensity={0.25}/>
            <directionalLight castShadow={true} intensity={2} position={[10, 6, 6]} shadow-mapSize={[1024, 1024]}>

                <orthographicCamera attach="shadow-camera" left={-20} right={20} top={20} bottom={-20}/>
            </directionalLight>
            <Suspense fallback={null}>
                <HexaBallCV cam={cam} position={[0, -3.5, 0]}/>
                <Sky/>
                <Environment preset="dawn"/>
            </Suspense>

        </VRCanvas>

    </>


}
