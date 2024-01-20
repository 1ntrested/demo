import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


function Login(){
  return <div style={{display:'flex',
  justifyContent:'center'}}>
   

    
    <Card variant="outlined" style={{
    width:'400px',display:'flex',
  alignItems:'center' ,
  justifyContent:'center',
  padding:'100px'
}}
>

    <form>
    <Typography variant='h5'>Welcome to Coursera</Typography> 
    <br></br>
      <Typography> Email <br></br><TextField id="outlined-basic" label="email" variant="outlined" /></Typography> 
        <br />
        <Typography> Password <br></br><TextField id="outlined-basic" label="Password" variant="outlined" /> </Typography>
        <br />
     
        <Button variant="contained">Login</Button>
       
    </form>
  </Card>
  </div>
}

export default Login;