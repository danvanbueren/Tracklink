'use client'

import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

const AudioPlayerContext = createContext();

export const useAudioPlayer = () => useContext(AudioPlayerContext);

export const AudioPlayerProvider = ({ children }) => {


    const audioRef = useRef(new Audio());


    /* USE STATES */
    const [queue, setQueue] = useState([]); // Array of song URLs
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [repeatMode, setRepeatMode] = useState("none"); // "none", "one", "all"
    const [volume, setVolume] = useState(1);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [controlsEnabled, setControlsEnabled] = useState(false);


    // REACT TO `queue` STATE ... Control whether inputs are disabled or enabled
    useEffect(() => {

        if (queue.length < 1) {
            setControlsEnabled(true);
        } else {
            setControlsEnabled(false);
        }

    }, [queue])


    // REACT TO `isPlaying` STATE ... Play/pause audio
    useEffect(() => {

        const audio = audioRef.current;

        if (queue.length < 1) {
            setIsPlaying(false);
            audio.pause();
            audio.load();
            return
        }

        if (currentTrackIndex > queue.length) {return}


        if (audio.src !== queue[currentTrackIndex]) {
            audio.src = queue[currentTrackIndex];
            audio.load();
        }

        if (isPlaying) {
            audio.play();
        } else {
            audio.pause();
        }

    }, [currentTrackIndex, queue, isPlaying])


/*
    // Update duration when the track is loaded
    useEffect(() => {
        const audio = audioRef.current;
        const handleLoadedMetadata = () => setDuration(audio.duration);
        audio.addEventListener('loadedmetadata', handleLoadedMetadata);
        return () => audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
    }, []);

    // Update currentTime as the track plays
    useEffect(() => {
        const audio = audioRef.current;

        const handleTimeUpdate = () => {
            setCurrentTime(audio.currentTime);
        }

        const handlePause = () => {
            setIsPlaying(false);
        }

        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('pause', handlePause);

        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            audio.removeEventListener('pause', handlePause);
        }
    }, []);

    useEffect(() => {
        const audio = audioRef.current;
        audio.addEventListener('ended', handleEnded);
        return () => audio.removeEventListener('ended', handleEnded);
    }, [repeatMode]);
*/


    const togglePlay = () => {
        console.log('=== START: togglePlay ===');

        if (queue.length < 1) {
            console.warn('Queue has no content, returning!');
            console.log('=== STOP__togglePlay ===');
            console.log('');
            return;
        }

        if (currentTrackIndex > queue.length) {
            console.warn('Queue has no content, returning!');
            console.log('=== STOP__togglePlay ===');
            console.log('');
            return;
        }

        setIsPlaying(!isPlaying);

        console.log('=== STOP__togglePlay ===');
        console.log('');
    };


    const skipForward = () => {
        setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % queue.length);
    };


    const skipBackward = () => {
        setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + queue.length) % queue.length);
    };


    const toggleMute = () => {
        const audio = audioRef.current;
        audio.muted = !audio.muted;
        setIsMuted(audio.muted);
    };


    const changeVolume = (value) => {
        const audio = audioRef.current;
        audio.volume = value;
        setVolume(value);
    };


    const changeCurrentTime = (value) => {
        const audio = audioRef.current;
        audio.currentTime = value;
        setCurrentTime(value);
    };


    const toggleRepeatMode = () => {
        setRepeatMode((prevMode) =>
            prevMode === "none" ? "one" : prevMode === "one" ? "all" : "none"
        );
    };


    const handleEnded = () => {
        if (repeatMode === "one") {
            audioRef.current.play();
        } else if (repeatMode === "all") {
            skipForward();
        } else {
            setIsPlaying(false);
        }
    };


    const addSongToQueue = (song) => {
        setQueue((prevQueue) => [...prevQueue, song]);
    };


    const clearQueue = () => {
        setQueue([]);
    }


    return (
        <AudioPlayerContext.Provider
            value={{
                // Functions
                playPause: togglePlay,
                skipForward,
                skipBackward,
                toggleMute,
                changeVolume,
                changeCurrentTime,
                toggleRepeatMode,
                addSongToQueue,
                clearQueue,
                // States
                isPlaying,
                isMuted,
                volume,
                currentTime,
                duration,
                repeatMode,
                currentTrack: queue[currentTrackIndex],
                controlsEnabled,
            }}
        >
            {children}
        </AudioPlayerContext.Provider>
    );
};
