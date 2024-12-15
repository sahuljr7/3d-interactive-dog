'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import DogModel from './DogModel'

export default function DogScene() {
  return (
    <Canvas shadows camera={{ position: [0, 2, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <DogModel />
      <OrbitControls enablePan={false} maxPolarAngle={Math.PI / 2} minDistance={3} maxDistance={8} />
      <Environment preset="park" background />
    </Canvas>
  )
}

