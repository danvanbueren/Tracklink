import {Typography} from "@mui/material";
import React from "react";
import {useAudioPlayer} from "@/components/AudioPlayer/AudioPlayerContext";

export default function TotalTimeInfo() {

    const {
        totalTime,
    } = useAudioPlayer();

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    return (
        <>
            <Typography> {formatTime(totalTime)} </Typography>
        </>
    )
}