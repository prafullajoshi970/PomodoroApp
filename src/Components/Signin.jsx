
import { Input, Button, Heading,Box,ButtonGroup,Text } from "@chakra-ui/react";
import { Link,useNavigate } from "react-router-dom";
import {useState} from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase'

const Signin = () => {
  const[logindetails,setLogindetails]=useState({
   email:'',pass:''
  })
  const[errmsg,setErrmsg]=useState('')
  const navigate=useNavigate()
  console.log(logindetails)
  const  handleSubmit=()=>{
    if(!logindetails.email||!logindetails.pass){
      setErrmsg('Enter credentials')
    }
   signInWithEmailAndPassword(auth,logindetails.email,logindetails.pass).then((res)=>{
      console.log(res)
      navigate('/timer');
    }).catch(err=>setErrmsg(err.message))
   
  }
  return (
<div className='signup'>
        <Heading mb='20px'>Login</Heading>
        <Box  boxShadow='outline' p='6' rounded='md'height={{base:'25vh',md:'30vh',lg:'50vh'}} pt='10px' >
<form>
      
<Input m="10px" w="30vw" size="lg" placeholder="Email"onChange={(e)=>{setLogindetails((prev)=>({...prev,email:e.target.value}))}} />
        <Input m="10px" w="30vw" size="lg" placeholder="Password"onChange={(e)=>{setLogindetails((prev)=>({...prev,pass:e.target.value}))}} />
        <Text color="red">{errmsg}</Text>
        <ButtonGroup>
        <Button m="10px" w= {{base:'15vw',lg:'10vw'}}colorScheme="green" size="md" onClick={()=>handleSubmit()}>
          Sign_in!
        </Button>
        <Button m="10px" w= {{base:'15vw',lg:'10vw'}}colorScheme="teal" size="md">
          <Link to='/'>Signup</Link>
        </Button>
        </ButtonGroup>
       
      </form>
</Box>
     
        
    </div>
  )
}

export default Signin