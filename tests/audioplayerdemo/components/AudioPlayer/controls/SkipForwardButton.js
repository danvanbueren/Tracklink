import {IconButton} from "@mui/material";
import React from "react";
import {useAudioPlayer} from "@/components/AudioPlayer/AudioPlayerContext";
import SkipNextIcon from "@mui/icons-material/SkipNext";

export default function SkipForwardButton() {

    const {
        skipForwardFunction,
        disabled,
    } = useAudioPlayer();

    return (
        <>
            <IconButton
                onClick={skipForwardFunction}
                disabled={disabled}
            >
                <SkipNextIcon/>
            </IconButton>
        </>
    )
}