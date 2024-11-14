import {IconButton} from "@mui/material";
import React from "react";
import {useAudioPlayer} from "@/components/AudioPlayer/AudioPlayerContext";
import RepeatIcon from "@mui/icons-material/Repeat";
import RepeatOnIcon from "@mui/icons-material/RepeatOn";
import RepeatOneOnIcon from "@mui/icons-material/RepeatOneOn";

export default function RepeatButton() {

    const {
        repeatFunction,
        disabled,
        repeatMode,
    } = useAudioPlayer();

    return (
        <>
            <IconButton
                onClick={repeatFunction}
                disabled={disabled}
            >
                { repeatMode === "off" && <RepeatIcon /> }
                { repeatMode === "all" && <RepeatOnIcon /> }
                { repeatMode === "one" && <RepeatOneOnIcon /> }
            </IconButton>
        </>
    )
}