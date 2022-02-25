import React, {Suspense, useEffect, useRef, useState} from "react";
import {OrbitControls, Reflector, useTexture, Environment, Text, useContextBridge, MeshReflectorMaterial} from '@react-three/drei'
import HexaBallCV from "./HexaBallCV"
import {config, useSpring, useSpringRef} from "@react-spring/three";
import {VRCanvas, DefaultXRControllers } from '@react-three/xr'
import {Canvas, useThree} from "@react-three/fiber";

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

    return <>

            <VRCanvas  concurrent gl={{ alpha: true }} pixelRatio={[1, 1.5]} VRCamera={{position: [0,2,10]}} camera={{ position: [0, 2, 10], fov: 50 }}>

                <DefaultXRControllers />
            <OrbitControls maxAzimuthAngle={0} maxPolarAngle={0} minAzimuthAngle={Math.PI / 2}
                           minPolarAngle={Math.PI / 2}/>



            <ambientLight intensity={0.25}/>
            <directionalLight castShadow={true} intensity={2} position={[10, 6, 6]} shadow-mapSize={[1024, 1024]}>

                <orthographicCamera attach="shadow-camera" left={-20} right={20} top={20} bottom={-20}/>
            </directionalLight>
            <Suspense fallback={null}>


                <HexaBallCV cam={cam} canvas={canvas} position={[0, -3.5, 0]}/>

                <Environment preset="dawn"/>
            </Suspense>

        </VRCanvas>

    </>


}
