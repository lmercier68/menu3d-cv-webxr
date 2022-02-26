import React, {useRef} from "react";
import {useLoader} from "@react-three/fiber";
import {TextureLoader} from "three";
import * as THREE from "three";


export default function Model({...props}) {

    const ft =useLoader(TextureLoader, './assets/bkg3_front5.png');
    const bk = useLoader(TextureLoader, './assets/bkg3_back6.png');
    const up = useLoader(TextureLoader, './assets/bkg3_top3.png');
    const dn = useLoader(TextureLoader, './assets/bkg3_bottom4.png');
    const rt =useLoader(TextureLoader, './assets/bkg3_right1.png');
    const lf = useLoader(TextureLoader, './assets/bkg3_left2.png');

    function createPathStrings(filename) {


        const fileType = ".png";
        const sides = [ft, bk, up, dn, rt, lf];
        const pathStings = sides.map(side => {
            return side;
        });
        return pathStings;
    }
    let skyboxImage = "purplenebula";
    function createMaterialArray(filename) {
        const skyboxImagepaths = createPathStrings(filename);
        const materialArray = skyboxImagepaths.map(image => {
            let texture = new THREE.TextureLoader().load(image);
            return new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide });
        });
        return materialArray;
    }
    function init() {

        const materialArray = createMaterialArray(skyboxImage);

         const skybox = ()=> {
             <mesh geometry={nodes.Cylindre004.geometry} material={materials['Material.005']}/>
                 new THREE.Mesh(skyboxGeo, materialArray);
         }

    }


    const skybox = useRef();
return (
    <>
        <boxGeometry ref={skybox} args={[10000, 10000, 10000]} />
    </>
)
}