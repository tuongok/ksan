import { Suspense } from 'react';
import { Canvas, useThree, useLoader } from '@react-three/fiber';  
import { OrbitControls, Html } from '@react-three/drei'; 
import * as THREE from 'three';
import anh from "../../img/a3602.jpg";

const PANORAMA_URL = anh;

function PanoramaRoom() {
  const texture = useLoader(THREE.TextureLoader, PANORAMA_URL);
  
  return (
    <mesh>
      <sphereGeometry args={[500, 60, 40]} />
      <meshBasicMaterial 
        side={THREE.BackSide}
        map={texture}
      />
    </mesh>
  );
}

function ZoomControls() {
  const { camera } = useThree();
  
  const handleZoom = (direction) => {
    if (direction === 'in') {
      camera.fov = Math.max(30, camera.fov - 5);
    } else {
      camera.fov = Math.min(100, camera.fov + 5);
    }
    camera.updateProjectionMatrix();
  };

  return (
    <Html
      as="div"
      wrapperClass="zoom-controls-wrapper"
      style={{
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        zIndex: 100,
        display: 'flex',
        gap: '10px'
      }}
    >
      <button 
        onClick={() => handleZoom('in')}
        style={zoomButtonStyle}
      >
        +
      </button>
      <button 
        onClick={() => handleZoom('out')}
        style={zoomButtonStyle}
      >
        -
      </button>
    </Html>
  );
}

const zoomButtonStyle = {
  background: 'rgba(0, 0, 0, 0.7)',
  color: 'white',
  border: '1px solid #fff',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  fontSize: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  userSelect: 'none'
};
export default function HotelRoomView() {
  return (
    <div style={{ 
      height: "500px",
      width: '100%',
      position: 'relative',
      backgroundColor: '#000'
    }}>
      <Canvas 
        camera={{ fov: 75 }}
        style={{ touchAction: 'none' }}
      >
        <Suspense fallback={null}>
          <PanoramaRoom />
          <OrbitControls
            enableZoom={true}
            zoomSpeed={0.8}
            minDistance={200}
            maxDistance={800}
            enablePan={false}
            autoRotate={false}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI / 1.5}
          />
          <ZoomControls />
        </Suspense>
      </Canvas>
      
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'white',
        background: 'rgba(0,0,0,0.5)',
        padding: '8px 16px',
        borderRadius: '4px',
        fontSize: '14px'
      }}>
        Ảnh panorama 360°
      </div>

      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        boxShadow: 'inset 0 0 30px rgba(0, 0, 0, 0.7)',
        pointerEvents: 'none'
      }} />
    </div>
  );
}