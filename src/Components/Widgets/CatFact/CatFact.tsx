import React, {useState, useEffect} from 'react'
import Box from '@mui/material/Box'
import axios from 'axios'
import { Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {Icon} from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets';


const CatFact: React.FC = () => {

  const [fact, setFact] = useState<any>([])
    useEffect(() => {
        axios.get('https://catfact.ninja/fact')
        .then(res => {
            setFact(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])



    return (
        <Box>
            <Icon sx={{color: "red"}} ><PetsIcon/></Icon>
            <Typography sx={{fontWeight: '700'}}>Interesting fact about cats: </Typography>
            <Typography>{fact.fact}</Typography>
        </Box>
    )
    }

export default CatFact