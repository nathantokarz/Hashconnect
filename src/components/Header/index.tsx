import { useState, useEffect } from "react";
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import { useHashConnect } from "../Login/HashConnectAPIProvider"
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from '@mui/material/Menu';
import styled from "@mui/system/styled";
import Login from '../Login/index';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ToolBar = styled(Toolbar)(({
    display: "flex",
    alignItems: "center",
    background: 'none',
    justifyContent: "space-between",
    paddingRight: 0,
}))

const HeaderStyle = styled(AppBar)(() => ({
    paddingRight: "79px",
    paddingLeft: "118px",
    background: "none",
    "@media (max-width: 900px)": {
        paddingLeft: 0,
        paddingRight: 0,
    }
}))

const Logo = styled("span")(() => ({
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    textAlign: "left",
}))

const LoginButton = styled(Button)(({
    color: "black",
    backgroundColor: "#BCCEFD",
    width: 120,
    fontSize: "16px",
    "&:hover": {
        color: "black",
        backgroundColor: "#BCCEFD",
        width: 120,
        fontSize: "16px",
    },
}))

const DrawerContainer = styled("div")(() => ({
    padding: "20px 30px",
    alignitems: "center",
}))

const NavButton = styled(Button)(({
    color: "#BCCEFD",
    fontSize: "14px"
}))

const MobNavButton = styled(Button)(({
    color: "#BCCEFD",
    textShadow: `0 0 6px #ED2939`,
    "&:hover": {
        color: "#BCCEFD",
        textShadow: `0 0 7px #ED2939`,
    },
}))

const MenuButton = styled(IconButton)(({
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "24px",
    marginRight: "10px",
    color: "#BCCEFD",
    textShadow: `0 0 7px #ED2939`
}))

const StyledMenuItem = styled(MenuItem)(({
    justifyContent: "center",
    paddingRight: 12,
    color: "black",
    fontSize: "14px",
}))

const LoginTypography = styled(Typography)(({
    color: "black",
}))

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    justifyContent: "center",
    alignItems: "center",
    bgcolor: 'white',
    border: '4px solid #ED2939',
    boxShadow: '0 0 5px 2px ##ED2939',
    p: 4,
};

const mobilestyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    bgcolor: 'white',
    border: '4px solid #ED2939',
    boxShadow: '0 0 5px 2px #ED2939',
    p: 4,
}

export interface IData {
    data: {
        name: string,
        attributes: {
            trait_type: string,
            value: string,
            score: number,
            percent: number,
        }[],
        image: string,
        custom_id: number,
        score: number,
        rank: number,
        rankname: string,
    }[],
    error: undefined,
}

export interface IBalance {
    tokenID: string,
    balance: string,
    decimals: number
}

export enum APIError {
    ExternalRequestFailed = "URL failed to fetch"
}

export interface IServerError {
    error: { message: string, code: APIError },
    data: undefined,
}





function Header() {
    const {  pairingData } = useHashConnect();

    const conCatAccounts = (lastAccs: string, Acc: string) => {
        return lastAccs + " " + Acc;
    };

    const [state, setState] = useState({
        mobileView: true,
        drawerOpen: false,
    });

    const { mobileView } = state;

    // create a function that clears all pairings
    const clearPairings = () => {
        localStorage.removeItem("hashconnectData");
        window.location.reload();
    }

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();

        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        };
    }, []);
    const [balanchor, setbalAnchor] = React.useState<null | HTMLElement>(null);
    const balopen = Boolean(balanchor)


    const handlebalClick = (event: React.MouseEvent<HTMLElement>) => {
        setbalAnchor(event.currentTarget);
    };

    const handlebalClose = () => {
        setbalAnchor(null);
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);






    const displayDesktop = () => {
        return (
        <AppBar position="absolute" style={{ display: 'flex', width: '100%', flexGrow: 1, background: 'none',boxShadow: 'none', transition: 'none' }}>
            <ToolBar style={{boxShadow: 'none'}}>
                <Link href="/">
                    <a style={{paddingTop: "25px"}}>
                        <Logo style={{paddingTop: "50px", paddingLeft: "50px"}}>
                            <Image src="/hbar-logo.png" alt="Logo" width={70} height={70} />
                        </Logo>
                    </a>
                </Link>
                <Box>
                    {pairingData?.accountIds && pairingData.accountIds?.length > 0 && (
                        <Button>
                            <NavButton
                                id="button2"
                                aria-controls={balopen ? 'menu2' : undefined}
                                aria-haspopup="true"
                                aria-expanded={balopen ? 'true' : undefined}
                                    onClick={handlebalClick}
                                    endIcon={<KeyboardArrowDownIcon />}
                            >
                                {pairingData.accountIds.reduce(conCatAccounts)}
                            </NavButton>
                            <Menu
                                id="menu2"
                                MenuListProps={{
                                    'aria-labelledby': 'button2',
                                }}
                                anchorEl={balanchor}
                                open={balopen}
                                onClose={handlebalClose}
                            >
                                <Button style={{color: "black"}} onClick={clearPairings}>Unpair</Button>
                            </Menu>
                        </Button>)
                    }
                    {!pairingData?.accountIds && (
                    <LoginButton onClick={handleOpen}>Connect</LoginButton>)
                    }
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography style={{ justifyContent: "center", display: "flex", color: "black", paddingBottom: "12px", fontWeight: 'bold' }} align="center" id="modal-modal-title" variant="h6" component="h2">
                                Connect with HashPack
                            </Typography>
                            <div />
                            <Divider style={{paddingBottom: "8px"}} sx={{"&::before, &::after": {borderColor: "black",},}}>
                                <Typography style={{ color: "black", fontWeight: 'bold' }}>Step 1</Typography>
                            </Divider>
                            <Login/>
                            <Divider sx={{ "&::before, &::after": { borderColor: "black", }, }}>
                                <Typography style={{ color: "black", fontWeight: 'bold' }}>Step 2</Typography>
                            </Divider>
                            <Typography style={{ justifyContent: "center", display: "flex", color: "black", paddingBottom: "8px" }} align="center" id="modal-modal-description" sx={{ mt: 2 }}>
                                Navigate to Hashpack and click the globe icon at the top. Afterwards click Connect Dapp
                            </Typography>
                            <Divider sx={{ "&::before, &::after": { borderColor: "black", }, }}>
                                <Typography style={{ color: "black", fontWeight: 'bold' }}>Step 3</Typography>
                            </Divider>
                            <Typography style={{ justifyContent: "center", display: "flex", color: "black", paddingBottom: "8px" }} align="center" id="modal-modal-description" sx={{ mt: 2 }}>
                                Paste in the copied code in the field that says Pairing string
                            </Typography>
                            <Divider sx={{ "&::before, &::after": { borderColor: "black", }, }}>
                                <Typography style={{ color: "black", fontWeight: 'bold'}}>Step 4</Typography>
                            </Divider>
                            <Typography style={{ justifyContent: "center", display: "flex", color: "black" }} align="center" id="modal-modal-description" sx={{ mt: 2 }}>
                                Select the wallet you want to connect with and hit Approve
                            </Typography>

                            </Box>
                        </Modal>
                </Box>
            </ToolBar>
        </AppBar>
      );
    };


    return (
            <header>
                <HeaderStyle>
                    {mobileView ? <></>: displayDesktop()}
                </HeaderStyle>
            </header>
    )
}

export default Header;