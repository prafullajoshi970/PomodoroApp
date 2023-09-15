import React,{useState,useEffect} from 'react'
import { Box,Heading,Button } from '@chakra-ui/react'
import './Timer.css'

const Timer = () => {
    const [count,setCount]=useState(25*60);
  
    const[active,setActive]=useState(false)
   
    useEffect(()=>{
    if(active && count>0){ const interval= setInterval(()=>{
        setCount((count)=>count-1)
      },1000);
      return()=>clearInterval(interval)}
      else if(count===0){
        const interval=setInterval(()=>{
          setCount(()=>(5*60)-1)
        },1000);
        return()=>clearInterval(interval)
      }
    },[count,active]);


    const getTime=(count)=>{
const min=Math.floor(count/60);
const sec=count%60;
return`${min<10?'0'+min:min}:${sec<10?'0'+sec:sec}`
    }
  return (
    <Box>
    <Box ml={{ base: "17%", md: "38%", lg: "40p%" }}>
        <Heading m='5px' >Pomodoro Timer</Heading>
        <Button m='10px' colorScheme='teal' variant='outline' onClick={()=>setActive(true)}> Start </Button>
        <Button m='10px' colorScheme='teal' variant='outline'onClick={()=>setCount(25*60)}> Reset </Button>
        <Button  m='10px' colorScheme='teal' variant='outline'onClick={()=>setActive(false)}> Stop </Button>
    </Box>
    <div className='time'>
    {getTime (count)}
  
    <Button  colorScheme='white' variant='outline'onClick={()=>setCount(0)}>Take Break </Button>
    </div>
    </Box>
  )
}

export default Timer

// import React, { useState, useEffect } from "react";
// import { Button, Box, Text } from "@chakra-ui/react";

// function TimerApp() {
//   const [time, setTime] = useState(25 * 60); // Initial time in seconds (25 minutes)
//   const [isActive, setIsActive] = useState(false);

//   useEffect(() => {
//     let interval;

//     if (isActive && time > 0) {
//       interval = setInterval(() => {
//         setTime((prevTime) => prevTime - 1);
//       }, 1000);
//     } else if (time === 0) {
//       clearInterval(interval);
//     }

//     return () => {
//       clearInterval(interval);
//     };
//   }, [isActive, time]);

//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
//   };

//   const toggleTimer = () => {
//     setIsActive(!isActive);
//   };

//   return (
//     <div>
//       <Box textAlign="center" fontSize="2xl">
//         <Text>{formatTime(time)}</Text>
//       </Box>
//       <Box textAlign="center">
//         <Button
//           colorScheme={isActive ? "red" : "green"}
//           onClick={toggleTimer}
//         >
//           {isActive ? "Pause" : "Start"}
//         </Button>
//       </Box>
//     </div>
//   );
// }

// export default TimerApp;
