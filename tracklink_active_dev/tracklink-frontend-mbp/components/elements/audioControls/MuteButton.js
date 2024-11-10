import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import {IconButton} from "@mui/material";
import * as React from "react";
import {useAudioPlayer} from "@/context/AudioPlayerContext";

export default function MuteButton() {

    const { interfaceDisabled } = useAudioPlayer();

    return (
        <IconButton
            disabled={interfaceDisabled}
            color="white"
            onClick={() => {alert('TODO: onClick function')}}
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
            <VolumeUpIcon/>
        </IconButton>
    )
}