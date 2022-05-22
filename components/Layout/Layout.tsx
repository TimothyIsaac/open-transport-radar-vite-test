import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import {Grid, GridItem} from "@chakra-ui/react";


function Layout({children}: { children: React.ReactNode }) {
    return (
        <Grid height="100vh" templateRows="auto 1fr auto">
            <GridItem>
                <Header/>
            </GridItem>
            <GridItem>
                {children}
            </GridItem>
            <GridItem>
                <Footer/>
            </GridItem>
        </Grid>
    )
}

export default Layout