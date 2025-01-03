import SkipNextIcon from "@mui/icons-material/SkipNext";
import {IconButton} from "@mui/material";
import * as React from "react";
import {useAudioPlayer} from "@/context/AudioPlayerContext";

export default function SkipNextButton() {

    const {
        skipForwardFunction,
        disabled,
    } = useAudioPlayer();

    return (
        <IconButton
            disabled={disabled}
            color="white"
            onClick={skipForwardFunction}
            sx={{
                width: '2.5rem',
                height: '2.5rem',
                marginX: '0.2rem',

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
            <SkipNextIcon/>
        </IconButton>
    )
}