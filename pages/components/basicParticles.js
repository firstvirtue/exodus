import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";

const BasicParticles = () => {
  const points = useRef();

  return (
    <points ref={points}>
      <sphereGeometry args={[1, 48, 48]} />
      <pointsMaterial color={'#5786F5'} size={0.015} sizeAttenuation />
    </points>
  );
};

const Scene = () => {
  return (
    <Canvas id="basic-scene" camera={{ position: [1.5, 1.5, 1.5] }}>
      <ambientLight intensity={0.5} />
      <BasicParticles />
      <OrbitControls autoRotate />
    </Canvas>
  )
}

export default Scene;