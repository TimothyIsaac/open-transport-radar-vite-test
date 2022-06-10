import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { Grid, GridItem, Box, Flex } from "@chakra-ui/react";


function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Grid height="100vh" width="100vw" templateRows="auto 1fr auto">
            <GridItem>
                <Header />
            </GridItem>
            <GridItem alignItems="center" justifyContent="center" width="100%" border="solid">

                {children}

            </GridItem>
            <GridItem>
                <Footer />
            </GridItem>
        </Grid>
    )
}

export default Layout