import {Slider} from "@mui/material";
import React from "react";
import {useAudioPlayer} from "@/components/AudioPlayer/AudioPlayerContext";

export default function SeekSlider() {

    const {
        currentTime,
        totalTime,
        seekFunction,
        disabled,
    } = useAudioPlayer();

    return (
        <>
            <Slider
                value={currentTime}
                onChange={(e, value) => seekFunction(value)}
                min={0}
                max={totalTime}
                step={0.001}
                disabled={disabled}
                sx={{
                    width: '32rem'
                }}
            />
        </>
    )
}