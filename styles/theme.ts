import AppBar from '@mui/material/AppBar';
import { IconButton, SwipeableDrawer } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { createTheme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';
import { styled } from '@mui/system';
const PRIMARY_COLOR = '#000000';
const SECONDARY_COLOR = '#000000';

const theme = createTheme({
        typography: {
            allVariants: { color: '#000000', fontFamily: 'Roboto Mono' },
            h1: {
                color: PRIMARY_COLOR,
                textAlign: 'center',
                fontSize: '40px',
            },
            h2: {
                color: SECONDARY_COLOR,
                fontWeight: 'bold',
                fontSize: '25px',
            },
            h3: {
                color: SECONDARY_COLOR,
                fontWeight: 'bold',
                fontSize: '16px',
            },
            h4: {
                color: 'white',
                fontSize: '20px',
            },
            body1: {
                fontSize: '14px',
            },
            overline: {
                color: '#999',
                fontSize: '13px',
            },
            caption: {
                fontSize: '16px',
            },
        },
        palette: {
            primary: {
                main: PRIMARY_COLOR,
            },
            secondary: {
                main: SECONDARY_COLOR,
            },
            grey: { 500: '#777' }
        },
    });

export default theme;


export const Styleroot = styled(SwipeableDrawer)(({ theme }) => ({
    width: '100vw'
}))


export const DrawerHeader = styled("div")(() => ({
    marginleft: '10px',
    height: '50px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
}))

export const DrawerContent = styled("div")(({ theme }) => ({
    width: '100vw',
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
}))

export const WalletButtonContainer = styled("div")(({ theme }) => ({
    width: '76%',
    maxWidth: '245px',
    display: 'flex',
    justifyContent: 'content'
}))

export const NavButtonsContainer = styled("div")(({ theme }) => ({
    width: '100%',
    marginTop: '30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}))

export const Header = styled(AppBar)(() => ({
    backgroundColor: "whitesmoke",
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 900px)": {
        paddingLeft: 0,
        paddingRight: 0,
    }
}))

export const Logo = styled("span")(() => ({
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
}))

export const WalletConnectButton = styled("div")(({ theme }) => ({
    width: '100%',
    backgroundColor: 'transparent',
    borderColor: theme.palette.primary.main,
    boxShadow: '0 0 5px 2px #e86bff, inset 0 0 10px 0px #e86bff',
    color: theme.palette.primary.main,
    '&:hover': {
        backgroundColor: alpha(theme.palette.primary.main, 0.2),
        borderColor: theme.palette.primary.main,
    },
}))

export const MenuButton = styled(IconButton)(({ theme }) => ({
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginRight: "10px",
    color: "darkblue",
}))

export const TooolBar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    paddingRight: 0,
    backgroundColor: 'smokegrey',
}))

export const DrawerContainer = styled("div")(({ theme }) => ({
    padding: "20px 30px",
    alignitems: "center",
}))


