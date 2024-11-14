import {IconButton} from "@mui/material";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import React from "react";
import {useAudioPlayer} from "@/components/AudioPlayer/AudioPlayerContext";

export default function PlayButton() {

    const {
        playing,
        disabled,
        togglePlayFunction,
    } = useAudioPlayer();

    return (
        <>
            <IconButton
                onClick={togglePlayFunction}
                disabled={disabled}
            >
                {
                    playing ?
                        <PauseIcon/> : <PlayArrowIcon/>
                }
            </IconButton>
        </>
    )
}