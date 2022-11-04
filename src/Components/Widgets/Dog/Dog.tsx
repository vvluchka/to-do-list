import React from 'react'
import { Box, Typography } from '@mui/material'

import axios from 'axios'

const Dog: React.FC = () => {

    const [dog, setDog] = React.useState<any>([])
    React.useEffect(() => {
        axios.get('https://dog.ceo/api/breeds/image/random')
        .then(res => {
            setDog(res.data)
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])


    return (
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-around'}}>
            <Typography>So cute dog</Typography>
            <img width = {'150px'} height={'150px'}src={dog.message} alt="dog"/>
        </Box>
    )
}

export default Dog