import React from "react"
import { extend } from '@react-three/fiber'
import { render } from "react-dom";
import { Canvas, Sphere } from '@react-three/fiber'

function SphereObj() {
  return (
    <mesh>
      <sphereBufferGeometry args={[0.7, 30, 30]} attach="geometry" />
      <meshBasicMaterial color={0xfff1ef} attach="material" />
   </mesh>
  )
}

function SphereContainer() {
  return (
    <Canvas>
      <pointLight position={[15, 15, 15]} />
      <SphereObj />
    </Canvas>
  )
}

export { SphereContainer }