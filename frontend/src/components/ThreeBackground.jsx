import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FloatingCrystal({ position, rotationSpeed = 0.15, scale = 1 }) {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = t * rotationSpeed * 0.6;
    ref.current.rotation.y = t * rotationSpeed;
    ref.current.position.y = position[1] + Math.sin(t * 0.4) * 0.2;
  });
  return (
    <mesh ref={ref} position={position} scale={scale}>
      <octahedronGeometry args={[1.2, 0]} />
      <meshStandardMaterial
        color="#3a1428"
        emissive="#d9a679"
        emissiveIntensity={0.12}
        roughness={0.25}
        metalness={0.6}
        transparent
        opacity={0.55}
        wireframe={false}
      />
    </mesh>
  );
}

function ParticleField() {
  const ref = useRef();
  const count = 500;
  const positions = React.useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#d9a679" size={0.025} sizeAttenuation transparent opacity={0.55} />
    </points>
  );
}

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 3, 5]} intensity={0.6} color="#d9a679" />
        <directionalLight position={[-5, -2, 3]} intensity={0.3} color="#7a1e4a" />
        <FloatingCrystal position={[-3.2, 0.5, -1]} scale={1.4} />
        <FloatingCrystal position={[3.4, -0.6, -2]} scale={1.6} rotationSpeed={0.09} />
        <FloatingCrystal position={[0.4, 1.6, -3]} scale={0.9} rotationSpeed={0.18} />
        <ParticleField />
      </Canvas>
    </div>
  );
}
