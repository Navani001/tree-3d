import { useState, Suspense, useRef } from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Forst from "../public/Scene"; // Adjust the path if necessary

function App() {
  const cameraRef = useRef();
console.log(cameraRef)
  return (
    <>
      <div className='entire'>
        <Canvas>
          {/* Use perspectiveCamera directly in JSX */}
          <perspectiveCamera
            ref={cameraRef}
            makeDefault
            fov={75}
            aspect={window.innerWidth / window.innerHeight}
            near={0.1}
            far={1000}
            position={[0, 0, 10]}
          />
          <ambientLight intensity={0.6} />
          <Suspense fallback={null}>
            <OrbitControls />
            <Forst camera={cameraRef} />
          </Suspense>
          <Environment preset='sunset' />
        </Canvas>
      </div>
      <div className='popup' style={{color:"transparent",backgroundColor:"transparent"}}>
        All the content
      </div>
    </>
  );
}

export default App;
