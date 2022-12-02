'use client'

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import './threemodel.css'
function Box () {
  return (
    <mesh>
      <boxBufferGeometry attach='geometry' />
      <meshLambertMaterial attach='material' color='red' />
    </mesh>
  )
}
const ThreeTest = () => {
  return (
    <Canvas>
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.5} />
      <spotLight
        position={[10, 15, 10]}
        angle={0.3}
      />
      <Box />
    </Canvas>
  )
}

export default ThreeTest
