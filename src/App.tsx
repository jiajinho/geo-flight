import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function App() {
  return (
    <Canvas style={{ height: "100vh", width: "100vw" }}>

      <OrbitControls />

      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="red" />
      </mesh>


    </Canvas>
  );
}

export default App;
