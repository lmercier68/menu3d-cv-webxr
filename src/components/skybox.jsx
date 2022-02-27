import React, {useRef} from "react";
import {useLoader, useThree} from "@react-three/fiber";
import {CubeTextureLoader, TextureLoader} from "three";
import * as THREE from "three";


export default function Skybox({...props}) {

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
}