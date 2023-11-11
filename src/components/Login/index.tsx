import React, { useEffect, useState } from "react";
import { useHashConnect } from "./HashConnectAPIProvider";
import Typography from '@mui/material/Typography';
import styled from "@mui/system/styled";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import theme from '../../../styles/theme';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const StyledButton = styled(Button)(({ theme }) => ({
    color: "white",
    backgroundColor: "black",
    width: 200,
    height: 45,
    "&:hover": {
        color: "white",
        backgroundColor: "black",
        width: 200,
        height: 45,
    },
}))

const Login = () => {
    const { connectToExtension, disconnect, pairingData, availableExtension, network, pairingString } = useHashConnect();


    interface State {
        response: string;
        post: string;
        responseToPost: string;
    }

    const INITIAL_STATE: State = {
        response: '',
        post: '',
        responseToPost: '',
    };

    const [state, setState] = useState<State>(INITIAL_STATE);

    const conCatAccounts = (lastAccs: string, Acc: string) => {
        return lastAccs + " " + Acc;
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(pairingString!);
    };

    const handleClick = () => {
        if (availableExtension && !pairingData) connectToExtension();
        else if (pairingData) disconnect();
        else
            alert(
                "Please install hashconnect wallet extension first. from chrome web store."
            );
    };


    return (
        <div style={{ justifyContent: "center" }} className="grid place-items-center">
            <Box display="flex" justifyContent="center" alignItems="center">
                <StyledButton style={{ justifyContent: "center", display: "flex", alignItems: "center"}} onClick={handleClick}>
                    <Typography style={{ justifyContent: "center", display: "flex", alignItems: "center", color: "white", paddingBottom: "14px"}} align="center" id="modal-modal-description" sx={{ mt: 2 }}>
                        Login With Hashpack
                    </Typography>
                </StyledButton>
            </Box>

            {pairingData?.accountIds && pairingData.accountIds?.length > 0 && (
                <div style={{ justifyContent: "center", display: "flex"}}>
                    <Typography style={{ justifyContent: "center", display: "flex", color: "black", alignItems: "center" }} align="center" id="modal-modal-description" sx={{ mt: 2 }}>
                        Connected Account: {pairingData?.accountIds.reduce(conCatAccounts)}
                    </Typography>
                </div>
            )}

            {!availableExtension && <Typography style={{ justifyContent: "center", display: "flex", color: "black", alignItems: "center" }} align="center" id="modal-modal-description" sx={{ mt: 2 }}>
                Hashpack is not installed in your Browser.
            </Typography>}
            <Typography style={{ justifyContent: "center", display: "flex", color: "black", paddingBottom: "8px" }} align="center" id="modal-modal-description" sx={{ mt: 2 }}>
                OR copy this code below:
            </Typography>
            <p style={{ justifyContent: "center", display: "flex" }}><Typography style={{ justifyContent: "center", display: "flex", color: "black", alignItems: "center", paddingBottom: "8px" }} align="center" id="modal-modal-description" sx={{ mt: 2 }}>
                Pairing Key:
            </Typography><Input style={{ paddingLeft: "6px" }} readOnly value={pairingString} /> <Button style={{ paddingLeft: "6px" }} onClick={handleCopy}><ContentCopyIcon/></Button> </p>

            <p>{state.response}</p>
        </div>
    )
}

export default Login