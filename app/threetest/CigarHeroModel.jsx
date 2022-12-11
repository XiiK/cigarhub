'use client'

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'

import './threemodel.css'

function Box1 () {
  return (
    <mesh position={[1, 0, 0]}>
      <boxBufferGeometry attach='geometry' rotateZ={3.14} />
      <meshLambertMaterial attach='material' color='red' />
    </mesh>
  )
}
function Box2 () {
  return (
    <mesh position={[-1, 0, 0]}>
      <boxBufferGeometry attach='geometry' />
      <meshLambertMaterial attach='material' color='yellow' />
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
      <Box1 />
      <Box2 />
    </Canvas>
  )
}

export default ThreeTest
