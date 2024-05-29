// AnimationInspector.jsx
import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

function LaptopModel({ path }) {
  const { scene, animations } = useGLTF(path);

  useEffect(() => {
    if (animations && animations.length > 0) {
      animations.forEach((clip) => {
        console.log("Animation name:", clip.name);
      });
    } else {
      console.log("No animations found in the GLB file.");
    }
  }, [animations]);

  return <primitive object={scene} />;
}

const AnimationInspector = ({ modelPath }) => {
  return (
    <Canvas style={{ height: "100vh", width: "100vw" }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}>
        <LaptopModel path={modelPath} />
      </Suspense>
    </Canvas>
  );
};

export default AnimationInspector;
