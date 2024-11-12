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
        playPause,
        skipForward,
        skipBackward,
        toggleMute,
        changeVolume,
        changeCurrentTime,
        toggleRepeatMode,
        isPlaying,
        isMuted,
        volume,
        currentTime,
        duration,
        repeatMode,
        addSongToQueue,
        controlsEnabled,
        clearQueue,
    } = useAudioPlayer();

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    const handleAddToQueue = (song) => {
        addSongToQueue(song); // Adds the song to the queue
    };

    return (
        <>
            {/* Play Pause */}

            <IconButton
                onClick={playPause}
                disabled={controlsEnabled}
            >
                {
                    isPlaying ?
                        <PauseIcon/> : <PlayArrowIcon/>
                }
            </IconButton>

            {/* Skip backward */}

            <IconButton
                onClick={skipBackward}
                disabled={controlsEnabled}
            >
                <SkipPreviousIcon/>
            </IconButton>

            {/* Skip forward */}

            <IconButton
                onClick={skipForward}
                disabled={controlsEnabled}
            >
                <SkipNextIcon/>
            </IconButton>

            {/* Repeat */}

            <IconButton
                onClick={toggleRepeatMode}
                disabled={controlsEnabled}
            >
                {
                    repeatMode === "one" ?
                        <RepeatOneIcon/> : <LoopIcon/>
                }
            </IconButton>

            {/* Mute */}

            <IconButton
                onClick={toggleMute}
                disabled={controlsEnabled}
            >
                {
                    isMuted ?
                        <VolumeOffIcon /> : <VolumeUpIcon />
                }
            </IconButton>

            {/* Volume */}

            <Slider
                value={volume}
                onChange={(e, value) => changeVolume(value)}
                step={0.01}
                min={0}
                max={1}
                disabled={controlsEnabled}
            />

            {/* Current time */}

            <Typography>
                {formatTime(currentTime)} / {formatTime(duration)}
            </Typography>

            {/* Seek */}

            <Slider
                value={currentTime}
                onChange={(e, value) => changeCurrentTime(value)}
                min={0}
                max={duration}
                disabled={controlsEnabled}
            />

            {/* Add to queue */}

            <Button
                variant="contained"
                color='error'
                sx={{margin: '1rem'}}
                onClick={clearQueue}
            >
                Clear Queue
            </Button>

            <Button
                variant="contained"
                color='warning'
                sx={{margin: '1rem'}}
                onClick={clearQueue}
                disabled
            >
                Remove 1st from Queue
            </Button>

            <Button
                variant="contained"
                sx={{margin: '1rem'}}
                onClick={() => {handleAddToQueue('https://cdn.discordapp.com/attachments/1131627146427781231/1154514312099016714/3_Split_Second.mp3?ex=6733ba3d&is=673268bd&hm=d2bd67467471d7bc867411c977c69d0f2e8307f5e19e7321d3ce598d1eee099f&')}}
            >
                Add SPLIT SECOND
            </Button>

            <Button
                variant="contained"
                sx={{margin: '1rem'}}
                onClick={() => {handleAddToQueue('https://cdn.discordapp.com/attachments/1274080119488512041/1304510290448093214/Polybit_-_Lockstep_Instrumental_-_241110.mp3?ex=67339be1&is=67324a61&hm=a8591c9b1850e1543572b9cb4895b66762c6bd55030420e33c169a7be90a1fb9&')}}
            >
                Add LOCKSTEP
            </Button>
        </>
    );
};

export default AudioPlayer;
