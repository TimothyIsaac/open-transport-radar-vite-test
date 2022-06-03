import { Heading, Text, Container, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../../components'
import DepartureBoard from '../../components/DepartureBoard/DepartureBoard'

function Home() {
    return (
        <Layout>
            <Grid
                m={{ "base": "0.5rem", "sm": "1rem", "md": "2rem" }}

                maxW="1600px"
                h={{ "base": "50em", "md": "50em" }}
                gap={{ "base": "0.5rem", "md": "2rem" }}
                templateColumns={{ "base": "1fr", "md": "repeat(3,1fr)" }}
                templateRows={{ "base": "4rem 12rem 1fr", "md": "4rem auto" }}

            >
                <GridItem bg="gray.100" colSpan={{ "base": 1, "md": 3 }}  >
                    Suchleiste
                </GridItem>
                <GridItem bg="blue.100" ><DepartureBoard /></GridItem>
                <GridItem bg="green.100" colSpan={{ "base": 1, "md": 2 }} >Radar</GridItem>
            </Grid>
        </Layout>
    )
}

export default Home