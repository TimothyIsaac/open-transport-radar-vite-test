import React from 'react'
import {Box, Button, Center, Flex, Heading, IconButton, useColorMode, Avatar} from "@chakra-ui/react";
import {SunIcon, MoonIcon} from "@chakra-ui/icons"
import {NavLink} from "react-router-dom";


function Header() {
    const {toggleColorMode} = useColorMode()
    return (

        <Flex
            h="6rem"
            py="4"
            px="6"
            justify="space-between"
            borderBottom={1}
            borderStyle={'solid'}
            borderColor={'gray.200'}
        >
            <Center>
                <Box mr={"8"}>
                    <Heading color={"gray.800"}>Open Transport Radar</Heading>
                </Box>
            </Center>
            <Center>
                <Box mx={"2rem"}>
                    <NavLink to={"/home"}>Link1</NavLink>
                </Box>
                <Box mx={"2rem"} mr={"4rem"}>
                    <NavLink to={"/home"}>Link2</NavLink>
                </Box>
                <Avatar/>
            </Center>
        </Flex>
    )
}


export default Header