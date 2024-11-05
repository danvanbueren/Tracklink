'use client';

import {createTheme} from "@mui/material";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export default function Theme() {
    return darkTheme;
}