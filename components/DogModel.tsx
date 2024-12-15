import { useRef, useEffect } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { createBody, createHead, createLeg, createTail, createEar, createEye, createNose } from '../utils/dogParts'

export default function DogModel() {
  const group = useRef<THREE.Group>(null)
  const tailRef = useRef<THREE.Mesh>(null)
  const furTexture = useLoader(THREE.TextureLoader, '/placeholder.svg?height=512&width=512')

  useEffect(() => {
    furTexture.wrapS = THREE.RepeatWrapping
    furTexture.wrapT = THREE.RepeatWrapping
    furTexture.repeat.set(4, 4)
  }, [furTexture])

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
    if (tailRef.current) {
      tailRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 5) * 0.2
    }
  })

  return (
    <group ref={group}>
      <mesh receiveShadow castShadow>{createBody(furTexture)}</mesh>
      <group position={[0, 0.7, 0.5]}>
        <mesh receiveShadow castShadow>{createHead(furTexture)}</mesh>
        <mesh position={[0.15, 0.1, 0.3]}>{createEye()}</mesh>
        <mesh position={[-0.15, 0.1, 0.3]}>{createEye()}</mesh>
        <mesh position={[0, -0.1, 0.4]}>{createNose()}</mesh>
        <mesh position={[0.2, 0.3, 0]} rotation={[0, 0, -Math.PI / 6]}>{createEar(furTexture)}</mesh>
        <mesh position={[-0.2, 0.3, 0]} rotation={[0, 0, Math.PI / 6]}>{createEar(furTexture)}</mesh>
      </group>
      <mesh position={[0.3, -0.5, 0.3]} receiveShadow castShadow>{createLeg(furTexture)}</mesh>
      <mesh position={[0.3, -0.5, -0.3]} receiveShadow castShadow>{createLeg(furTexture)}</mesh>
      <mesh position={[-0.3, -0.5, 0.3]} receiveShadow castShadow>{createLeg(furTexture)}</mesh>
      <mesh position={[-0.3, -0.5, -0.3]} receiveShadow castShadow>{createLeg(furTexture)}</mesh>
      <mesh ref={tailRef} position={[-0.5, 0.2, 0]} rotation={[0, 0, Math.PI / 4]} receiveShadow castShadow>
        {createTail(furTexture)}
      </mesh>
    </group>
  )
}

