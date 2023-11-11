
import type { AppProps } from 'next/app'
import { Box } from '@mui/material'
import { HashConnectAPIProvider } from "../src/components/Login/HashConnectAPIProvider";
import DashboardLayout from "../src/components/Layout";


function MyApp({ Component, pageProps }: AppProps) {
    return (
    <Box>
        <HashConnectAPIProvider network={"mainnet"} debug={true}>
            <DashboardLayout>
                <Component {...pageProps} />
            </DashboardLayout>
        </HashConnectAPIProvider>
    </Box>
    )
}

export default MyApp
