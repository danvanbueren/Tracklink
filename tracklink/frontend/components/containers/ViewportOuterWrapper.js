import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

import Header from "@/components/containers/Header";
import Footer from "@/components/containers/Footer";
import Navigation from "@/components/containers/Navigation";
import ViewportInnerRouter from "@/components/containers/ViewportInnerRouter";
import Friends from "@/components/containers/Friends";
import {useRoute} from "@/context/RouteContext";

export default function ViewportOuterWrapper({ children }) {

    const {
        isAuthenticated
    } = useRoute();

    if (isAuthenticated) {
        return (
            <>
                {/* CONTAINER */}
                <Box
                    sx={{
                        minWidth: '70rem',
                        width: '100vw',
                        maxWidth: '100vw',
                        minHeight: '100vh',
                        maxHeight: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        overflow: 'hidden',
                    }}
                >
                    {/* ALL BUT FOOTER */}
                    <Box
                        sx={{
                            display: 'flex',
                            flex: 1,

                        }}
                    >
                        {/* GRID CONTAINER */}
                        <Grid
                            container
                            spacing={0}
                            width="100%"
                        >
                            {/* GRID - NAV */}
                            <Grid size='auto'>
                                <Navigation />
                            </Grid>

                            {/* GRID - MIDDLE */}
                            <Grid
                                size='grow'
                                sx={{ paddingX: '20px' }}
                            >
                                {/* HEADER AND VIEW WRAPPER */}
                                <Box
                                    sx={{
                                        minHeight: '100%',
                                        maxHeight: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    {/* HEADER */}
                                    <Box
                                        sx={{
                                            minHeight: '5rem',
                                            maxHeight: '5rem',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            flexShrink: 0,
                                        }}
                                    >
                                        <Header />
                                    </Box>

                                    {/* VIEW WRAPPER */}
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            flex: 1,
                                            overflow: 'auto',
                                            maxHeight: 'calc(100vh - 11.9rem)',
                                        }}
                                    >
                                        <ViewportInnerRouter>
                                            {children}
                                        </ViewportInnerRouter>
                                    </Box>
                                </Box>
                            </Grid>

                            {/* GRID - FRIENDS */}
                            <Grid size='auto'>
                                <Friends />
                            </Grid>
                        </Grid>
                    </Box>

                    {/* FOOTER */}
                    <Box
                        sx={{
                            minWidth: '100vw',
                            maxWidth: '100vw',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            flexShrink: 0,
                        }}
                    >
                        <Footer />
                    </Box>
                </Box>
            </>
        )
    } else {
        return (
            <ViewportInnerRouter>
                {children}
            </ViewportInnerRouter>
        )
    }


}