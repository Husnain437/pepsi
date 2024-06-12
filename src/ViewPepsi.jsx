import { Html, OrbitControls, ScrollControls } from "@react-three/drei";
import React, { Suspense, useEffect, useState } from "react";
import { Camera } from "three";
import Pepsi from "./Pepsi";
import { Canvas } from "@react-three/fiber";


const ViewPepsi = () => {
  return (
    <>
      <Canvas
        camera={{
          fov: 45,
          position: [1, 0, 1],
        }}
      >
        <ambientLight intensity={4} />
        <directionalLight intensity={6} position={[2, 1, 0]} />
        <OrbitControls enableZoom={false} />

        <Suspense
          fallback={
            <Html>
              <div>Loading..........</div>
            </Html>
          }
        >
          <Pepsi />
        </Suspense>
      </Canvas>
    </>
  );
};

export default ViewPepsi;
