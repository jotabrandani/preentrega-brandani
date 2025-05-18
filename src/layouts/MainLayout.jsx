import { Box, Flex } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router";

const MainLayout = () => {
    return (
        <Box height={"100vh"} width={"100vw"}>
            <NavBar />
            <Box width={"100vw"}>
                <Outlet />
            </Box>
        </Box>
    );
};

export default MainLayout;