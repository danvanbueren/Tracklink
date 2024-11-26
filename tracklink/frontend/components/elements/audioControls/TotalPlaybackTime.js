import {Typography} from "@mui/material";
import * as React from "react";
import {useAudioPlayer} from "@/context/AudioPlayerContext";

export default function TotalPlaybackTime() {

    const {
        disabled,
        totalTime,
    } = useAudioPlayer();

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    let opacity;

    if (disabled) {
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
            {formatTime(totalTime)}
        </Typography>
    )
}