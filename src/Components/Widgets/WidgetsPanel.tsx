import React, { useState } from "react";
import Bored from "./Bored/Bored";
import Location from "./Location/Location";
import CatFact from "./CatFact/CatFact";
import Dog from "./Dog/Dog";
import { Box, Typography} from "@mui/material";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const WidgetsPanel: React.FC = () => {
   
  return (
    <Box className="panel-container">
      <Typography className="title">Widgets</Typography>
      <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>
            <Bored/>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Location/>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <CatFact/>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Dog/>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </Box>
  );
}

export default WidgetsPanel;
