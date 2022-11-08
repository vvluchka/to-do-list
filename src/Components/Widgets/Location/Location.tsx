import React, {useEffect , useState} from 'react'
import Box from '@mui/material/Box'
import axios from 'axios'
import { Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {Icon} from '@mui/material'

const Location: React.FC = () => {

// get data from api
const [data, setData] = useState<any>([])
useEffect(() => {
    axios.get('http://ip-api.com/json/217.196.161.215')
    .then(res => {
        setData(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}, [])

  
return (
    <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}>
        <Icon sx={{color: "red"}} ><LocationOnIcon/></Icon>
        <Box>
            <Typography>{data.country}</Typography>
            <Typography>{data.regionName}</Typography>
            <Typography>{data.city}</Typography>
        </Box>
    </Box>
  )
}


export default Location