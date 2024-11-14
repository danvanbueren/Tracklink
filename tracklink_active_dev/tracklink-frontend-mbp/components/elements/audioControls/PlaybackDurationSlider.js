import {Slider} from "@mui/material";
import * as React from "react";
import {useState} from "react";
import {useAudioPlayer} from "@/context/AudioPlayerContext";

export default function PlaybackDurationSlider() {

    const {
        currentTime,
        totalTime,
        seekFunction,
        disabled,
    } = useAudioPlayer();

    let sliderTrackOpacity;
    if (disabled) {
        sliderTrackOpacity = 0;
    } else {
        sliderTrackOpacity = 1;
    }

    return (
        <Slider
            disabled = {disabled}
            value={currentTime}
            onChange={(e, value) => seekFunction(value)}
            min={0}
            max={totalTime}
            step={0.001}
            sx={{
                marginX: '1rem',
                '& .MuiSlider-thumb': {
                    visibility: 'hidden', // Hide the thumb by default
                    transition: 'visibility 0s, opacity 0.2s linear', // Smooth transition
                    width: 15,
                    height: 15,
                    opacity: 0, // Set initial opacity to 0
                },
                '&:hover': {
                    color: 'primary.dark',
                },
                '&:hover .MuiSlider-thumb, &:active .MuiSlider-thumb': {
                    visibility: 'visible', // Show the thumb on hover or active
                    opacity: 1, // Set opacity to 1 when visible
                },
                '&:active .MuiSlider-thumb, &:active .MuiSlider-track': {
                    color: 'primary.main',
                },
                '.MuiSlider-track': {
                    opacity: sliderTrackOpacity,
                },
            }}
        />
    )
}