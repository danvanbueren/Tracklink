'use client';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Box, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import * as React from "react";
import {GlobalStyleProvider} from "@/context/GlobalStyleContext";
import ViewportOuterWrapper from "@/components/containers/ViewportOuterWrapper";
import {RouteProvider} from "@/context/RouteContext";
import {AudioPlayerProvider} from "@/context/AudioPlayerContext";

// Implement toggleable dark mode
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

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
                <GlobalStyleProvider>
                    <RouteProvider>
                        <AudioPlayerProvider>
                            <ViewportOuterWrapper />
                        </AudioPlayerProvider>
                    </RouteProvider>
                </GlobalStyleProvider>
            </Box>
        </ThemeProvider>
        </body>
        </html>
    );
}