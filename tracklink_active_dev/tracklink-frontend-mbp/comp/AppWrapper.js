'use client';

import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

import Header from "@/comp/Header";
import Footer from "@/comp/Footer";
import Nav from "@/comp/Nav";
import ViewWrapper from "@/comp/ViewWrapper";
import Friends from "@/comp/Friends";

export default function AppWrapper({ children }) {
    return (
        <>
            {/* Full container */}
            <Box
                sx={{
                    minWidth: '100vw',
                    maxWidth: '100vw',

                    minHeight: '100vh',
                    maxHeight: '100vh',

                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >

                {/* Column container */}
                <Box
                    sx={{
                        display: 'flex',
                        flex: 1,
                        overflow: 'hidden',
                    }}
                >
                    {/* Grid container */}
                    <Grid
                        container
                        spacing={0}
                        width="100%"
                    >
                        {/* Left nav */}
                        <Grid
                            size='auto'
                            sx={{

                                overflowY: 'auto',
                            }}
                        >
                            <Nav />
                        </Grid>

                        {/* Middle Wrapper */}
                        <Grid
                            size='grow'
                            sx={{

                                overflow: 'auto',

                                paddingX: '20px',
                            }}
                        >
                            <Box
                                sx={{
                                    minHeight: '100%',
                                    maxHeight: '100%',

                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',

                                }}
                            >

                                {/* Top nav */}
                                <Box
                                    sx={{
                                        minHeight: '5rem',
                                        maxHeight: '5rem',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <Header />
                                </Box>

                                {/* Middle content */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        flex: 1,
                                    }}
                                >
                                    <ViewWrapper>
                                        {children}
                                    </ViewWrapper>
                                </Box>

                            </Box>



                        </Grid>

                        {/* Right Avatars */}
                        <Grid
                            size='auto'
                            sx={{

                                overflowY: 'auto',
                            }}
                        >
                            <Friends />
                        </Grid>
                    </Grid>
                </Box>

                {/* Bottom nav */}
                <Box
                    sx={{
                        minWidth: '100vw',
                        maxWidth: '100vw',

                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <Footer />
                </Box>

            </Box>
        </>
    )
}