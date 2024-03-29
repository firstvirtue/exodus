import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

import vertexShader from './vertexShader';
import fragmentShader from './fragmentShader';

const CustomGeometryParticles = (props) => {
  const {count, shape } = props;

  const radius = 2;

  const points = useRef();

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);

    if (shape === "box") {
      for (let i = 0; i < count; i++) {
        let x = (Math.random() - 0.5) * 2;
        let y = (Math.random() - 0.5) * 2;
        let z = (Math.random() - 0.5) * 2;
        
        positions.set([x, y, z], i * 3);
      }
    } else if(shape === "sphere") {
      // const distance = 1;
      for (let i = 0; i < count; i++) {
        const distance = Math.sqrt(Math.random()) * radius;
        const theta = THREE.MathUtils.randFloatSpread(360);
        const phi = THREE.MathUtils.randFloatSpread(360);

        let x = distance * Math.sin(theta) * Math.cos(phi);
        let y = distance * Math.sin(theta) * Math.sin(phi);
        let z = distance * Math.cos(theta);
        
        positions.set([x, y, z], i * 3);
      }
    }

    return positions;
  }, [count, shape]);

  const uniforms = useMemo(() => ({
    uTime: {
      value: 0.0
    },
    uRadius: {
      value: radius
    }
    // Add any other attributes here
  }), [])

  useFrame((state) => {
    const { clock } = state;

    points.current.material.uniforms.uTime.value = clock.elapsedTime;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach={"attributes-position"}
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      {/* <pointsMaterial
        size={0.015}
        color="#5786F5"
        sizeAttenuation
        depthWrite={false}
      /> */}
      <shaderMaterial
        depthWrite={false}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
    </points>
  )
}

const Scene = () => {
  return (
    <Canvas id="basic-scene" camera={{ position: [2.0, 2.0, 2.0] }}>
      <ambientLight intensity={0.5} />
      <CustomGeometryParticles count={4000} shape="sphere" />
      <OrbitControls />
    </Canvas>
  )
}

export default Scene;