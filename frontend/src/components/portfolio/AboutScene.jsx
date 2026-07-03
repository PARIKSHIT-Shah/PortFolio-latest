import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles, Octahedron } from "@react-three/drei";

function Nodes() {
    const ref = useRef();
    useFrame((state, delta) => {
        if (ref.current) ref.current.rotation.y += delta * 0.2;
    });
    const positions = [];
    const size = 8;
    for (let i = 0; i < size; i++) {
        const a = (i / size) * Math.PI * 2;
        positions.push([Math.cos(a) * 1.2, Math.sin(a) * 1.2, Math.sin(a * 2) * 0.4]);
    }
    return (
        <group ref={ref}>
            {positions.map((p, i) => (
                <Float key={i} speed={1.5 + i * 0.1} floatIntensity={0.6} rotationIntensity={0.4}>
                    <mesh position={p}>
                        <sphereGeometry args={[0.06, 24, 24]} />
                        <meshStandardMaterial
                            color={i % 2 ? "#eae6d7" : "#d4af37"}
                            emissive={i % 2 ? "#eae6d7" : "#d4af37"}
                            emissiveIntensity={0.6}
                        />
                    </mesh>
                </Float>
            ))}
            <Octahedron args={[0.5, 0]}>
                <meshStandardMaterial
                    color="#ffffff"
                    wireframe
                    emissive="#eae6d7"
                    emissiveIntensity={0.4}
                />
            </Octahedron>
        </group>
    );
}

export default function AboutScene() {
    return (
        <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 4], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[3, 3, 3]} intensity={1.2} color="#eae6d7" />
            <Suspense fallback={null}>
                <Nodes />
                <Sparkles count={30} scale={4} size={2} speed={0.3} color="#d4af37" />
            </Suspense>
        </Canvas>
    );
}
