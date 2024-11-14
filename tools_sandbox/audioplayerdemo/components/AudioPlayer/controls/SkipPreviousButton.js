import {IconButton} from "@mui/material";
import React from "react";
import {useAudioPlayer} from "@/components/AudioPlayer/AudioPlayerContext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";

export default function SkipPreviousButton() {

    const {
        skipPreviousFunction,
        disabled,
    } = useAudioPlayer();

    return (
        <>
            <IconButton
                onClick={skipPreviousFunction}
                disabled={disabled}
            >
                <SkipPreviousIcon/>
            </IconButton>
        </>
    )
}