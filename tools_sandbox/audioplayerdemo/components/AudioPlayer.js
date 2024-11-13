'use client'

import React from 'react';
import {Box, Button, IconButton, Slider, Stack, Typography} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import RepeatIcon from '@mui/icons-material/Repeat';
import RepeatOnIcon from '@mui/icons-material/RepeatOn';
import RepeatOneOnIcon from '@mui/icons-material/RepeatOneOn';
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

        currentTrackName,
        currentTrackArtist,
        currentTrackSrc,

        skipPreviousFunction,
        togglePlayFunction,
        skipForwardFunction,
        repeatFunction,
        muteFunction,
        volumeFunction,
        seekFunction,

        clearQueueFunction,
        removeFromQueueByIndexFunction,
        addToQueueFunction,

        setQueueIndex,

    } = useAudioPlayer();

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    return (
        <>
            {queue.length > 0 ?
                <>
                    <Typography sx={{fontWeight: 'bold'}}>Now Playing: {currentTrackName}</Typography>
                    <Typography>by {currentTrackArtist}</Typography>
                    <Typography sx={{opacity: '50%'}}>{currentTrackSrc}</Typography>
                </>
                : <Typography sx={{fontWeight: 'bold'}}>Not Playing</Typography>
            }


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
                { repeatMode === "off" && <RepeatIcon /> }
                { repeatMode === "all" && <RepeatOnIcon /> }
                { repeatMode === "one" && <RepeatOneOnIcon /> }
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
                sx={{
                    width: '8rem'
                }}
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
                sx={{
                    width: '32rem'
                }}
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
                sx={{margin: '1rem'}}
                onClick={() => {
                    addToQueueFunction('/bestvibes.mp3', 'Best Vibes', 'Dan')
                }}
            >
                bestvibes
            </Button>

            <Button
                variant="contained"
                sx={{margin: '1rem'}}
                onClick={() => {
                    addToQueueFunction('/fightclub.mp3', 'Fight Club', 'Dan')
                }}
            >
                fightclub
            </Button>

            <Button
                variant="contained"
                sx={{margin: '1rem'}}
                onClick={() => {
                    addToQueueFunction('/soulish.mp3', 'Soulish', 'Dan')
                }}
            >
                soulish
            </Button>

            <Typography>Queue Index: {queueIndex}</Typography>
            <Typography>Queue Length: {queue.length}</Typography>
            <Typography>Queue:</Typography>
            <ul>
                {
                    queue.length > 0 ?
                        queue.map((a, b) =>
                            <li key={b}>
                                <Stack direction="row">
                                    <Button
                                        variant="text"
                                        color='primary'
                                        size='small'
                                        sx={{marginX: '1rem'}}
                                        onClick={() => {
                                            setQueueIndex(b)
                                        }}
                                    >
                                        {b === queueIndex ?
                                        <Typography sx={{backgroundColor: 'background.default'}}>Index: {b} --- Name: {a[1]} --- Artist: {a[2]} --- Source: {a[0]}</Typography>
                                            : <Typography>Index: {b} --- Name: {a[1]} --- Artist: {a[2]} --- Source: {a[0]}</Typography>
                                        }
                                    </Button>
                                    <Button
                                        variant="text"
                                        color='error'
                                        size='small'
                                        sx={{marginX: '1rem'}}
                                        onClick={() => {
                                            removeFromQueueByIndexFunction(b)
                                        }}
                                    >
                                        delete {b}
                                    </Button>
                                </Stack>
                            </li>
                        ) : <Typography>Queue empty</Typography>
                }
            </ul>
        </>
    );
};

export default AudioPlayer;
