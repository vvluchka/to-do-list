import React, {useEffect , useState} from 'react'
import Box from '@mui/material/Box'
import axios from 'axios'
import { Typography } from '@mui/material'



const Bored: React.FC = () => {

    const [activity, setActivity] = useState<string>('')
    const [type, setType] = useState<string>('')

    const loadData = () => {
      return axios.get('http://www.boredapi.com/api/activity/')
  }

    useEffect(() => {
        loadData().then((response) => {
            setActivity(response.data.activity)
            setType(response.data.type)
        })
    }, [])


  return (
    <Box>
        <Typography fontWeight={700}variant='h5'>Hey Here Is A Tip:</Typography>
        <Typography fontWeight={700}>Activity:</Typography>
        <Typography>{activity}</Typography>
        <Typography fontWeight={700}>Type:</Typography>
        <Typography>{type}</Typography> 

    </Box>
  )
}


export default Bored