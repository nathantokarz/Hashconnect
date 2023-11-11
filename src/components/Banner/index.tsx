
import React from "react"
import Box from '@mui/material/Box';
import Link from 'next/link';
import Button from '@mui/material/Button'
import ThemeProvider from "@mui/styles/ThemeProvider";
import theme from '../../../styles/theme';
import styled from "@mui/system/styled";
import { useState } from "react";
import { useEffect } from "react";

import Typography from "@mui/material/Typography";

const ExploreButton = styled(Button)(({ theme }) => ({
    color: "white",
    fontWeight: "bold",
    borderColor: "white",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10px',
    width: '185px',
    paddingTop: "3%",
    paddingBottom: "3%",
}))

const MobileButton = styled(Button)(({ theme }) => ({
    color: "black",
    fontSize: 12,
    fontWeight: "bold",
    backgroundColor: "gold",
    borderColor: "gold",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10px',
    width: '175px',
    paddingTop: "3%",
    paddingBottom: "3%",
}))


const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContents: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: "7%"
}))

const StyledDiv = styled("div")(({ theme }) => ({
    paddingTop: "4%",
}))

function Banner() {

    const [state, setState] = useState({
        mobileView: false,
    });

    const { mobileView } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 700
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();

        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        };
    }, []);

    const displayDesktop = () => {
        return (
            <StyledBox style={{paddingTop: "12%"}}>
                <img
                    src="/banner.png"
                    alt={'After Dark Social Club'}
                    width={'700px'}
                />
                <StyledDiv>
                    <Link href="/raffles">
                    <Button style={{ backgroundColor: "black", color: "#ED2939", textShadow: `0 0 6px #ED2939`, fontSize: 20}}>
                        Explore Raffles
                    </Button>
                    </Link>
                </StyledDiv>
            </StyledBox>
        )
    };

    const displayMobile = () => {
        return (
            <StyledBox style={{paddingTop: "20%"}}>
                <img
                    src="/banner.png"
                    alt={'After Dark Social Club'}
                    width={'390px'}
                />
                <StyledDiv>
                    <Link href="/raffles">
                    <Button style={{ backgroundColor: "black", color: "#ED2939", textShadow: `0 0 6px #ED2939`, fontSize: 20}}>
                        Explore Raffles
                    </Button>
                    </Link>
                </StyledDiv>
            </StyledBox>
            )
    }

    return (
        <ThemeProvider theme={theme}>
            {mobileView ? displayMobile() : displayDesktop()}
        </ThemeProvider>
        )
}

export default Banner;