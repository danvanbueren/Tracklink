import {IconButton} from "@mui/material";
import React from "react";
import {useAudioPlayer} from "@/components/AudioPlayer/AudioPlayerContext";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

export default function MuteButton() {

    const {
        muteFunction,
        disabled,
        muted,
    } = useAudioPlayer();

    return (
        <>
            <IconButton
                onClick={muteFunction}
                disabled={disabled}
            >
                {
                    muted ?
                        <VolumeOffIcon/> : <VolumeUpIcon/>
                }
            </IconButton>
        </>
    )
}