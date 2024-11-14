import RepeatIcon from "@mui/icons-material/Repeat";
import RepeatOnIcon from "@mui/icons-material/RepeatOn";
import RepeatOneOnIcon from "@mui/icons-material/RepeatOneOn";
import {IconButton} from "@mui/material";
import * as React from "react";
import {useAudioPlayer} from "@/context/AudioPlayerContext";

export default function RepeatButton() {

    const {
        repeatFunction,
        disabled,
        repeatMode,
    } = useAudioPlayer();

    return (
        <IconButton
            disabled={disabled}
            color="white"
            onClick={repeatFunction}
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
            { repeatMode === "off" && <RepeatIcon /> }
            { repeatMode === "all" && <RepeatOnIcon /> }
            { repeatMode === "one" && <RepeatOneOnIcon /> }
        </IconButton>
    )
}