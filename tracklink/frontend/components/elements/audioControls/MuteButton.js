import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import {IconButton} from "@mui/material";
import * as React from "react";
import {useAudioPlayer} from "@/context/AudioPlayerContext";

export default function MuteButton() {

    const {
        muteFunction,
        disabled,
        muted,
    } = useAudioPlayer();

    return (
        <IconButton
            disabled={disabled}
            color="white"
            onClick={muteFunction}
            sx={{
                color: 'white',
                transition: 'color 0.3s ease',
                '&:hover': {
                    color: 'primary.dark',
                },
                '&:active': {
                    color: 'primary.main',
                },
            }}
        >
            {
                muted ?
                    <VolumeOffIcon/> : <VolumeUpIcon/>
            }
        </IconButton>
    )
}