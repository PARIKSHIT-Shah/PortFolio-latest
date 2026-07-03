import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
    Float,
    Environment,
    Sparkles,
    MeshTransmissionMaterial,
    Icosahedron,
    Torus,
} from "@react-three/drei";

function Centerpiece() {
    const ref = useRef();
    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.y += delta * 0.15;
            ref.current.rotation.x += delta * 0.05;
        }
    });
    return (
        <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.9}>
            <group ref={ref}>
                <Icosahedron args={[1.35, 2]}>
                    <MeshTransmissionMaterial
                        thickness={1.2}
                        roughness={0.05}
                        transmission={1}
                        ior={1.55}
                        chromaticAberration={0.08}
                        anisotropy={0.4}
                        distortion={0.25}
                        distortionScale={0.3}
                        temporalDistortion={0.15}
                        color="#ffffff"
                        attenuationColor="#eae6d7"
                        attenuationDistance={0.6}
                    />
                </Icosahedron>
                <Torus args={[2.2, 0.008, 16, 128]} rotation={[Math.PI / 2, 0, 0]}>
                    <meshBasicMaterial color="#d4af37" transparent opacity={0.35} />
                </Torus>
                <Torus args={[2.6, 0.006, 16, 128]} rotation={[Math.PI / 2.4, Math.PI / 3, 0]}>
                    <meshBasicMaterial color="#eae6d7" transparent opacity={0.2} />
                </Torus>
            </group>
        </Float>
    );
}

export default function HeroScene() {
    return (
        <div className="absolute inset-0 z-0" data-testid="hero-3d-canvas">
            <Canvas
                dpr={[1, 1.5]}
                gl={{ antialias: true, alpha: true }}
                camera={{ position: [0, 0, 5], fov: 45 }}
            >
                <color attach="background" args={["#050505"]} />
                <ambientLight intensity={0.4} />
                <directionalLight position={[3, 3, 3]} intensity={1.1} color="#eae6d7" />
                <directionalLight position={[-3, -2, -3]} intensity={0.4} color="#d4af37" />
                <Suspense fallback={null}>
                    <Centerpiece />
                    <Sparkles count={80} scale={[8, 5, 5]} size={2} speed={0.3} opacity={0.5} color="#eae6d7" />
                    <Environment preset="city" />
                </Suspense>
            </Canvas>
        </div>
    );
}
