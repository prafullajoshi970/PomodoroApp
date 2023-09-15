import React,{useState} from "react";
import { Input, Button, Heading,Box,ButtonGroup,Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import{auth} from '../firebase'

const Signup = () => {
  const[formdetails,setFormdetails]=useState({name:'',email:'',pass:''})
  const [errmsg,setErrmsg]=useState('')
const navigate=useNavigate()
  console.log(formdetails)
  const  handleSubmit=()=>{
    if(!formdetails.name||!formdetails.email||!formdetails.pass){
      setErrmsg('Enter credentials')
    }
    createUserWithEmailAndPassword(auth,formdetails.email,formdetails.pass).then((res)=>{
      console.log(res)
      navigate('/signin');
    }).catch(err=>setErrmsg(err.message))
   
  }
  return (
    <div className="signup">
      <Heading mb="20px">Registeration</Heading>
<Box  boxShadow='outline' p='6' rounded='md'height='50vh' pt='10px' >
<form>
        <Input m="10px" w= {{base:'65vw',lg:'30vw'}} size="lg" placeholder="UserName" onChange={(e)=>{setFormdetails((prev)=>({...prev,name:e.target.value}))}} />
        <Input m="10px" w= {{base:'65vw',lg:'30vw'}} size="lg" placeholder="Email"onChange={(e)=>{setFormdetails((prev)=>({...prev,email:e.target.value}))}} />
        <Input m="10px" w= {{base:'65vw',lg:'30vw'}} size="lg" placeholder="Password"onChange={(e)=>{setFormdetails((prev)=>({...prev,pass:e.target.value}))}} />
       <Text color='red'>{errmsg}</Text>
        <ButtonGroup>
        <Button m="10px" w= {{base:'20vw',lg:'10vw'}} colorScheme="teal" size="md" onClick={()=>handleSubmit()}>
          Sign_up!
        </Button>
       
       <p style={{marginTop:'15px'}}>Already have account? <Link style={{color:"blue"}} to='/signin'>Signin</Link></p>  
       
        </ButtonGroup>
       
      </form>
</Box>
     
    </div>
  );
};

export default Signup;
