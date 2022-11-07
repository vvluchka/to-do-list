import React from 'react'
import {Box, Button, TextField, Typography} from '@mui/material'
import FormControlUnstyled from '@mui/base/FormControlUnstyled';
import { useHistory } from 'react-router';


let data = [
    {
        name: ""
    }
]


const LogIn: React.FC = () => {

    let history = useHistory();

    const [disabled, setDisabled] = React.useState(true);
    const [name, setName] = React.useState("");


    document.addEventListener('input', (event) => {
        const target = event.target as HTMLInputElement;
        if (target.value.length > 0) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    });

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const {value} = event.target;
        setName(value);
        console.log(name);
      }
    
 
  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',    
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        
    }}>
        <Typography variant="h3">Log In</Typography>
      
        <TextField
          size="small"
          id="outlined-basic"
          label="Enter your username"
          variant="outlined"
          
          
        />
        <Button  variant="outlined" disabled={disabled} onClick={() =>{
            history.push("/todo");
        }}>Submit</Button>
        

    </Box>
  )
}

export default LogIn
