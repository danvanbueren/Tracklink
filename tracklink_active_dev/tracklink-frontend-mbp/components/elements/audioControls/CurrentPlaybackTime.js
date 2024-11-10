import {Typography} from "@mui/material";
import * as React from "react";
import {useAudioPlayer} from "@/context/AudioPlayerContext";

export default function CurrentPlaybackTime() {

    const { interfaceDisabled } = useAudioPlayer();

    let opacity;

    if (interfaceDisabled) {
        opacity = '50%';
    } else {
        opacity = '';
    }

    return (
        <Typography
            sx={{
                fontSize: '0.85rem',
                userSelect: 'none', // Prevents text selection
                opacity: opacity,
            }}
        >
            0:00
        </Typography>
    )
}