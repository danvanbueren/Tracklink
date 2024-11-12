'use client'

import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

const AudioPlayerContext = createContext();

export const useAudioPlayer = () => useContext(AudioPlayerContext);

export const AudioPlayerProvider = ({ children }) => {

    const ref = useRef(new Audio());

    const [playing, setPlaying] = useState(false);

    const [queue, setQueue] = useState(['bestvibes.mp3']);
    const [queueIndex, setQueueIndex] = useState(0);

    const [repeatMode, setRepeatMode] = useState("none"); // off, all, one

    const [muted, setMuted] = useState(false);
    const [volume, setVolume] = useState(0.8);
    const [previousVolume, setPreviousVolume] = useState(0);

    const [currentTime, setCurrentTime] = useState(0);
    const [totalTime, setTotalTime] = useState(0);

    const [disabled, setDisabled] = useState(true);

    // Enable and disable controls
    useEffect(() => {
        if (queue.length < 1) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [queue])

    // Update duration when the track is loaded
    useEffect(() => {
        const handleLoadedMetadata = () => setTotalTime(ref.current.duration);
        ref.current.addEventListener('loadedmetadata', handleLoadedMetadata);
        return () => ref.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
    }, []);

    // Update currentTime as the track plays
    useEffect(() => {
        const handleTimeUpdate = () => setCurrentTime(ref.current.currentTime);
        ref.current.addEventListener('timeupdate', handleTimeUpdate);
        return () => ref.current.removeEventListener('timeupdate', handleTimeUpdate);
    }, []);

    const togglePlayFunction = () => {
        setPlaying(!playing);

        if (ref.current.src !== queue[queueIndex]) {
            ref.current.src = queue[queueIndex];
        }

        if (playing) {
            ref.current.pause();
        } else {
            ref.current.currentTime = '5';
            ref.current.play();
        }
    }

    const skipPreviousFunction = () => {
        if (queue.length > queueIndex && queueIndex > 0) {
            setQueueIndex(queueIndex - 1);
        } else {
            setCurrentTime(0);
        }
    }

    const skipForwardFunction = () => {
        if (queue.length - 1 > queueIndex) {
            setQueueIndex(queueIndex + 1);
        } else {
            setCurrentTime(totalTime);
        }
    }

    const repeatFunction = () => {
        if (repeatMode === "none") {
            setRepeatMode("all");
        } else if (repeatMode === "all") {
            setRepeatMode("one");
        } else {
            setRepeatMode("none");
        }
    }

    const muteFunction = () => {
        setMuted(!muted);

        if (muted) {
            setVolume(previousVolume);
        } else {
            setPreviousVolume(volume);
            setVolume(0);
        }
    }

    const volumeFunction = (value) => {
        if (muted) {setMuted(false);}
        if (value < 0.01) {
            setMuted(true);
            setPreviousVolume(1);
        }

        setVolume(value);
        ref.current.volume = value;
    }

    const seekFunction = (value) => {
        setCurrentTime(value);
        ref.current.currentTime = value;
    }

    const clearQueueFunction = () => {
        setQueue([]);
    }

    const removeFromQueueByIndexFunction = () => {

    }

    const addToQueueByPathFunction = () => {

    }

    return (
        <AudioPlayerContext.Provider
            value={{
                ref,
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
            }}
        >
            {children}
        </AudioPlayerContext.Provider>
    );
};
