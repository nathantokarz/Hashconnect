
import React from "react"
import Box from '@mui/material/Box';
import ThemeProvider from "@mui/styles/ThemeProvider";
import theme from '../styles/theme';
import CssBaseline from "@mui/material/CssBaseline";
import Banner from './components/Banner/index';


export const Homepage = () => {

    return (
        <Box>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box 
                sx={{
                    backgroundColor: "black",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                }}
                >
                    <Banner />
                </Box>
            </ThemeProvider>
        </Box>
        )
}

export default Homepage;