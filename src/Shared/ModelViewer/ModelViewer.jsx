// ModelViewer.jsx
import React, { Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";

function LaptopModel({ path }) {
  const group = useRef();
  const { scene, animations } = useGLTF(path);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions) {
      const openAction = actions["Take 001"]; // Assurez-vous que le nom de l'animation correspond
      if (openAction) {
        openAction.reset().fadeIn(0.5).play();
      }
    }
  }, [actions]);

  return (
    <group ref={group} rotation={[Math.PI / 6, -Math.PI / 4, 0]}>
      <primitive object={scene} />
    </group>
  );
}

const ModelViewer = ({ modelPath }) => {
  return (
    <Canvas style={{ height: "75%", width: "100vw" }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}>
        <LaptopModel path={modelPath} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default ModelViewer;
