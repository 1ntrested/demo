import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import TextField from '@mui/material/TextField';
import { useState } from 'react';


function Signup(){

  const[email,setEmail]=useState('car');
  const[password,setPassword]=useState('');
  

  return <div style={{display:'flex',justifyContent:'center'}}>

    <Card variant="outlined" style={{
    width:'400px',display:'flex',
  alignItems:'center' ,
  justifyContent:'center',
  padding:'100px'
}}
>

    <form>
    <Typography variant='h5'>Welcome to Coursera Signup</Typography> 
    <br></br>
      <Typography> Email <br></br><TextField onChange={(e)=>{
        setEmail(e.target.value)
      }} id={"email"} label="email" variant="outlined" /></Typography> 
        <br />
        <Typography> Password <br></br><TextField onChange={(e)=>{
          setPassword(e.target.value) //work similar as getElementbyId
        }} id={"password"} label="Password" variant="outlined" /> </Typography>
        <br />
     
        <Button variant="contained" 
          onClick={()=>{

            function callback2(data){
              //localStorage.setItem("token",data.token)
              console.log(data)
            }

             function callback1(res){
              res.json().then(callback2)
             }

          // let username=document.getElementById("username").value;
          // let password=document.getElementById("password").value;

          fetch('http://localhost:3000/admin/signup',{
            method:'POST',
            body:JSON.stringify({
              username:email,
              password:password
            }),
            headers:{
              'Content-Type':'application/json'
            }
          }).then(callback1) 
        }}>SignUp</Button>
        
    </form>
  </Card>
  </div>
}

export default Signup;