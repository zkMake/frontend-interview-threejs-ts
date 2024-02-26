import { Canvas } from "@react-three/fiber";
import { Text, OrbitControls } from "@react-three/drei";

const Stage = () => {
  return (
    <Canvas>
      <pointLight position={[5, 5, 5]} />
      <Text
        scale={[0.5, 0.5, 0.5]}
        color="black" // default
        anchorX="center" // default
        anchorY="middle" // default
      >
        The Stage is Yours!
      </Text>
      <OrbitControls />
    </Canvas>
  );
};

export default Stage;
