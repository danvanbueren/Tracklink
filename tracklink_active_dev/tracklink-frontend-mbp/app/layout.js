'use client';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Box, CssBaseline, ThemeProvider} from "@mui/material";
import * as React from "react";
import {LeftToggleProvider} from "@/context/contextToggleVerboseNav";
import {RightToggleProvider} from "@/context/contextToggleVerboseFriends";
import AppWrapper from "@/components/containers/AppWrapper";
import {LocalRouterProvider} from "@/context/LocalRouterContext";
import darkTheme from "@/utils/theme";
import {RouteProvider} from "@/context/RouteContext";



// Replace this with authentication logic to control whether app layout is displayed or fallback to external site
const auth = true;



export default function RootLayout({ children }) {

    return (
        <html lang="en">
        <head>
            <title>Tracklink</title>
            <meta name='description' content='Tracklink'/>
        </head>
        <body>
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <Box
                sx={{
                    minWidth: '100vw',
                    maxWidth: '100vw',

                    minHeight: '100vh',
                    maxHeight: '100vh',
                }}
            >
                {auth ?
                    <LeftToggleProvider>
                        <RightToggleProvider>
                            <LocalRouterProvider>
                                <RouteProvider>
                                    <AppWrapper>
                                        {children}
                                    </AppWrapper>
                                </RouteProvider>
                            </LocalRouterProvider>
                        </RightToggleProvider>
                    </LeftToggleProvider>
                    :
                    <>
                        <h1>NO AUTH</h1>
                        {children}
                    </>
                }
            </Box>
        </ThemeProvider>
        </body>
        </html>
    );
}