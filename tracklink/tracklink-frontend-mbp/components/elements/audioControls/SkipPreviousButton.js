import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import {IconButton} from "@mui/material";
import * as React from "react";
import {useAudioPlayer} from "@/context/AudioPlayerContext";

export default function SkipPreviousButton() {

    const {
        skipPreviousFunction,
        disabled,
    } = useAudioPlayer();

    return (
        <IconButton
            disabled={disabled}
            color="white"
            onClick={skipPreviousFunction}
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
            <SkipPreviousIcon/>
        </IconButton>
    )
}