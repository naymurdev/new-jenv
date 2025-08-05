import React from "react";
import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";

function MeshGradient() {
  return (
    <div>
      <ShaderGradientCanvas
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100%",
          }}
          lazyLoad={undefined}
  
          fov={undefined}
          pixelDensity={1}
          pointerEvents="none"
      >
     <ShaderGradient
    animate="on"
    type="plane"
    wireframe={true}
    shader="positionMix"
    uTime={12}
    uSpeed={0.15}
    uStrength={2.5}
    uDensity={2}
    uFrequency={0}
    uAmplitude={0}
    positionX={1.9}
    positionY={0}
    positionZ={0}
    rotationX={60}
    rotationY={0}
    rotationZ={30}
    color1="#094a52"
    color2="#1f1fb3"
    color3="#009cff"
    reflection={0.4}

    // View (camera) props
    cAzimuthAngle={184}
    cPolarAngle={67}
    cDistance={3}
    cameraZoom={8.5}

    // Effect props
    lightType="3d"
    brightness={1.3}
    envPreset="city"
    grain="on"

    // Tool props
    toggleAxis={false}
    zoomOut={false}
    hoverState=""

    // Optional - if using transition features
    enableTransition={false}
  />
      </ShaderGradientCanvas>
    </div>
  );
}

export default MeshGradient;
