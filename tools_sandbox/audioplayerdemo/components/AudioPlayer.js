'use client'

import React from 'react';
import {Button, IconButton, Slider, Typography} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import LoopIcon from '@mui/icons-material/Loop';
import RepeatOneIcon from '@mui/icons-material/RepeatOne';
import {useAudioPlayer} from "@/contexts/AudioPlayerContext";

const AudioPlayer = () => {
    const {
        playing,
        queue,
        queueIndex,
        repeatMode,
        muted,
        volume,
        currentTime,
        totalTime,
        disabled,

        skipPreviousFunction,
        togglePlayFunction,
        skipForwardFunction,
        repeatFunction,
        muteFunction,
        volumeFunction,
        seekFunction,

        clearQueueFunction,
        removeFromQueueByIndexFunction,
        addToQueueByPathFunction,

    } = useAudioPlayer();

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    return (
        <>

            {/* Skip backward */}
            <IconButton
                onClick={skipPreviousFunction}
                disabled={disabled}
            >
                <SkipPreviousIcon/>
            </IconButton>

            {/* Play Pause */}
            <IconButton
                onClick={togglePlayFunction}
                disabled={disabled}
            >
                {
                    playing ?
                        <PauseIcon/> : <PlayArrowIcon/>
                }
            </IconButton>

            {/* Skip forward */}
            <IconButton
                onClick={skipForwardFunction}
                disabled={disabled}
            >
                <SkipNextIcon/>
            </IconButton>

            {/* Repeat */}
            <IconButton
                onClick={repeatFunction}
                disabled={disabled}
            >
                {
                    repeatMode === "one" ?
                        <RepeatOneIcon/> : <LoopIcon/>
                }
            </IconButton>

            {/* Mute */}
            <IconButton
                onClick={muteFunction}
                disabled={disabled}
            >
                {
                    muted ?
                        <VolumeOffIcon/> : <VolumeUpIcon/>
                }
            </IconButton>

            {/* Volume */}
            <Slider
                value={volume}
                onChange={(e, value) => volumeFunction(value)}
                step={0.001}
                min={0}
                max={1}
                disabled={disabled}
            />

            {/* Current time */}
            <Typography>
                {formatTime(currentTime)} / {formatTime(totalTime)}
            </Typography>

            {/* Seek */}
            <Slider
                value={currentTime}
                onChange={(e, value) => seekFunction(value)}
                min={0}
                max={totalTime}
                step={0.001}
                disabled={disabled}
            />








            <Button
                variant="contained"
                color='error'
                sx={{margin: '1rem'}}
                onClick={clearQueueFunction}
            >
                Clear Queue
            </Button>

            <Button
                variant="contained"
                color='warning'
                sx={{margin: '1rem'}}
                onClick={() => {
                    removeFromQueueByIndexFunction(0)
                }}
            >
                Pop index 0
            </Button>

            <Button
                variant="contained"
                sx={{margin: '1rem'}}
                onClick={() => {
                    addToQueueByPathFunction('/bestvibes.mp3')
                }}
            >
                bestvibes
            </Button>

            <Button
                variant="contained"
                sx={{margin: '1rem'}}
                onClick={() => {
                    addToQueueByPathFunction('/fightclub.mp3')
                }}
            >
                fightclub
            </Button>

            <Button
                variant="contained"
                sx={{margin: '1rem'}}
                onClick={() => {
                    addToQueueByPathFunction('/soulish.mp3')
                }}
            >
                soulish
            </Button>

            <h4>QUEUE:</h4>
            <ul>
                {
                    queue.length > 0 ?
                        queue.map((a, b) => <li key={b}>{a}</li>) :
                        <p>Queue empty</p>
                }
            </ul>
        </>
    );
};

export default AudioPlayer;
