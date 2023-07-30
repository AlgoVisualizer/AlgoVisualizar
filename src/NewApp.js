import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FixedFooter from "./FixedFooter";
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
const NewApp = () => {
  const navigate = useNavigate();
  return (
    <div style={{ overflow: "auto", background: "#393e46", width: "100%" }}>
  

      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <AppBar position="relative" style={{background:'#0D1929'}}>
          <Toolbar></Toolbar>
        </AppBar>
        <main>
          {/* Hero unit */}
          <Box
            sx={{
             background:'#393e46',  
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm" >
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="white"
                style={{

                  fontFamily: '"Stylish", sans-serif'
                }}
                gutterBottom
              >
                Algorithm Visualizer
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="#d9d9d9"
                paragraph
              >
                Discover the Hidden Symphony of Algorithms: Algorithm
                Visualizer - Elevate Your Coding Insights with Engaging Visual
                Experiences, Unraveling the Secrets of Complex Algorithms in
                Stunning Detail!"
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
                style={{marginTop:'100px'}}
              >
                <Button variant="contained" onClick={()=>{
                  navigate('/sorting')
                }}>Graph Algorithms</Button>
                <Button variant="contained" onClick={()=>{
                  navigate('/sorting')
                }}>Sorting Algorithm</Button>
              </Stack>
            </Container>
          </Box>
        </main>
   {/* <br/> */}
   {/* <br/> */}

      </ThemeProvider>
      <FixedFooter/> 
    </div>
  );
};

export default NewApp;
