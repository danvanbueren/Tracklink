import {Slider} from "@mui/material";
import React from "react";
import {useAudioPlayer} from "@/components/AudioPlayer/AudioPlayerContext";

export default function VolumeSlider() {

    const {
        volume,
        volumeFunction,
        disabled,
    } = useAudioPlayer();

    return (
        <>
            <Slider
                value={volume}
                onChange={(e, value) => volumeFunction(value)}
                step={0.001}
                min={0}
                max={1}
                disabled={disabled}
                sx={{
                    width: '8rem'
                }}
            />
        </>
    )
}