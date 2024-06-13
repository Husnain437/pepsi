import React, { useRef, useEffect,useState } from 'react'
import { useGLTF } from '@react-three/drei'


 function Pepsi (props) {
  const { nodes, materials } = useGLTF('/Model/pepsi_can.glb')
  const [scale, setScale] = useState([1, 1, 1]);

  useEffect(() => {
    const handleResize = () => {
      const widthScale = window.innerWidth/1.5;
      if(widthScale>550){
        setScale(550)
      }
      else{
        setScale(widthScale); 
      }
      
    };
    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  console.log(scale);
  
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.02}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_Material_0.geometry}
            material={materials.Material}
            position={[0, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={scale}
          />
        </group>
      </group>
    </group>
  )
}
export default Pepsi 

useGLTF.preload('/Model/pepsi_can.glb')