/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
import { useRef, useState, useEffect, memo, Suspense } from 'react';
import { Canvas, createPortal, useFrame, useThree } from '@react-three/fiber';
import {
    useFBO,
    useGLTF,
    MeshTransmissionMaterial,
    Text,
    Preload,
} from '@react-three/drei';
import { easing } from 'maath';

// Preload the model
useGLTF.preload('/assets/3d/lens.glb');

const LensInner = memo(function LensInner({ textColor = '#ffffff', scale = 0.25, ior = 1.15, thickness = 5, anisotropy = 0.01, chromaticAberration = 0.1 }) {
    const ref = useRef();
    const { nodes } = useGLTF('/assets/3d/lens.glb');
    const buffer = useFBO();
    const { viewport: vp } = useThree();
    const [scene] = useState(() => new THREE.Scene());

    useFrame((state, delta) => {
        const { gl, viewport, pointer, camera } = state;
        const v = viewport.getCurrentViewport(camera, [0, 0, 15]);
        const destX = (pointer.x * v.width) / 2;
        const destY = (pointer.y * v.height) / 2;
        easing.damp3(ref.current.position, [destX, destY, 15], 0.15, delta);
        gl.setRenderTarget(buffer);
        gl.render(scene, camera);
        gl.setRenderTarget(null);
    });

    const geo = nodes['Cylinder']?.geometry;

    return (
        <>
            {createPortal(
                <group>
                    {/* Background plane with the title text */}
                    <Text
                        position={[0, 0, 12]}
                        fontSize={0.55}
                        letterSpacing={-0.05}
                        color={textColor}
                        anchorX="center"
                        anchorY="middle"
                        font="https://fonts.gstatic.com/s/oswald/v53/TK3_WkUHHAIjg75cFRf3bXL8LICs169vsUZiYA.woff2"
                    >
                        BIASED PIXELS
                    </Text>
                </group>,
                scene
            )}
            {/* Background that shows what's in scene */}
            <mesh scale={[vp.width, vp.height, 1]}>
                <planeGeometry />
                <meshBasicMaterial map={buffer.texture} />
            </mesh>
            {/* The glass lens mesh */}
            {geo && (
                <mesh ref={ref} scale={scale} rotation-x={Math.PI / 2} geometry={geo}>
                    <MeshTransmissionMaterial
                        buffer={buffer.texture}
                        ior={ior}
                        thickness={thickness}
                        anisotropy={anisotropy}
                        chromaticAberration={chromaticAberration}
                    />
                </mesh>
            )}
        </>
    );
});

function FallbackScene() {
    return (
        <mesh>
            <planeGeometry args={[10, 6]} />
            <meshBasicMaterial color="#050505" />
        </mesh>
    );
}

export default function FluidGlass() {
    return (
        <Canvas
            camera={{ position: [0, 0, 20], fov: 15 }}
            gl={{ alpha: false, antialias: true }}
            style={{ background: '#050505' }}
        >
            <color attach="background" args={['#050505']} />
            <Suspense fallback={<FallbackScene />}>
                <LensInner />
                <Preload all />
            </Suspense>
        </Canvas>
    );
}
