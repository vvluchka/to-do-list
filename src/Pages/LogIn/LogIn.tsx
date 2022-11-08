import React, {useEffect} from 'react'
import {Box, Button, TextField, Typography} from '@mui/material'
import FormControlUnstyled from '@mui/base/FormControlUnstyled';
import { useHistory } from 'react-router';
import {Link} from 'react-router-dom'


const LogIn: React.FC = () => {

    let history = useHistory();

    const [disabled, setDisabled] = React.useState(true);
    const [userName, setUserName] = React.useState("");

    const data = userName;
    
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
        setUserName(value);
        console.log(userName);
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
          onChange={onChange}
          
        />

            <Typography>{userName}</Typography>
        <Button  variant="outlined" disabled={disabled} onClick={() =>{
            history.push({
                pathname: '/todo',
            });
        }}>Submit</Button>
       

        
    </Box>
  )
}

export default LogIn
