import styled from "@mui/system/styled";
import React from "react";
import Header from "../Header";
type DashboardLayoutProps = {
    children?: React.ReactNode;
};

const Container = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    color: "white",
    backgroundColor: "black"
}))

export default function DashboardLayout({ children }: DashboardLayoutProps) {

    return (
        <Container>
            <Header/>
            <Container>
                <Container style={{ width: "99vw" }}>{children}</Container>
            </Container>
        </Container>
    );
}