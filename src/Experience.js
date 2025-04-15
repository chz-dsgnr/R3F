import { useFrame } from "@react-three/fiber"
import { useRef } from "react"


export default function Experience() 
{
    const cube = useRef()

    
    useFrame[() => 
    {
        console.log('tick')
    }]

    return (
        <>
            <mesh position-x={-2}>
                <sphereGeometry args={[1.5, 32, 32]} />
                <meshBasicMaterial color="pink" />
            </mesh>
            <mesh rotation-y={Math.PI * 0.25} scale={1.5} position-x={2}>
                <boxGeometry scale={1.5}/>
                <meshBasicMaterial color="orange" />
            </mesh>
            <mesh position-z={-2} position-y={-1.5} rotation-x={Math.PI * -0.5} scale={10}>
                <planeGeometry />
                <meshBasicMaterial color="greenyellow" />
            </mesh>
        </>
    )
}