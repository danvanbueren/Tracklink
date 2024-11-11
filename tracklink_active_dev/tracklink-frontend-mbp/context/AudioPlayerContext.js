'use client';

import React, { createContext, useContext, useRef, useState, useEffect } from 'react';

const AudioPlayerContext = createContext();

export const useAudioPlayer = () => useContext(AudioPlayerContext);

export const AudioPlayerProvider = ({ children }) => {

    const audioRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [queueArray, setQueueArray] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [volume, setVolume] = useState(50);
    const [isMuted, setIsMuted] = useState(false);
    const [isLooping, setIsLooping] = useState(false);
    const [progress, setProgress] = useState(0);
    const [interfaceDisabled, setInterfaceDisabled] = useState(true);

    const [currentTrackUUID, setCurrentTrackUUID] = useState();
    const [currentTrackName, setCurrentTrackName] = useState();
    const [currentTrackArtists, setCurrentTrackArtists] = useState();
    const [currentTrackSrc, setCurrentTrackSrc] = useState();
    const [currentTrackArt, setCurrentTrackArt] = useState();


    const togglePlayPause = () => {
        if (isPlaying) {
            pause();
        } else {
            play();
        }
    };

    const play = () => {
        setIsPlaying(true);
        audioRef.current.play();
    };

    const pause = () => {
        setIsPlaying(false);
        audioRef.current.pause();
    };

    const skipNext = () => {
        if (queueArray.length >= currentIndex) {
            setCurrentIndex((currentIndex + 1) % queueArray.length);
        }
    };

    const skipPrevious = () => {
        if (queueArray.length >= 2 && currentIndex > 0) {
            setCurrentIndex((currentIndex - 1 + queueArray.length) % queueArray.length);
        }
    };

    const changeVolume = (newValue) => {
        setVolume(newValue);
        audioRef.current.volume = newValue / 100;
        setIsMuted(newValue === 0);
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
        audioRef.current.muted = !isMuted;
    };

    const toggleLoop = () => {
        setIsLooping(!isLooping);
        audioRef.current.loop = !isLooping;
    };

    const seekProgress = (newValue) => {
        const seekTime = (newValue / 100) * audioRef.current.duration;
        audioRef.current.currentTime = seekTime;
        setProgress(newValue);
    };

    const updateProgress = () => {
        if (audioRef.current) {
            const currentTime = audioRef.current.currentTime;
            const duration = audioRef.current.duration;
            setProgress((currentTime / duration) * 100);
        }
    };

    const addToQueue = (uuid, title, artists, srcAudio, srcArt) => {
        setQueueArray((prevPlaylist) => [...prevPlaylist, [uuid, title, artists, srcAudio, srcArt]]);
        if (audioRef.current) {
            audioRef.current.play();
        } else {
            audioRef.current.src = queueArray[3][currentIndex];
            audioRef.current.play();
        }
    };

    const removeFromQueue = (index) => {
        setQueueArray((prevPlaylist) => prevPlaylist.filter((_, i) => i !== index));
        if (index === currentIndex && queueArray.length > 1) {
            skipNext();
        } else if (index === queueArray.length - 1) {
            setCurrentIndex(0);
        }
    };

    const clearQueue = () => {
        if (audioRef.current) {
            audioRef.current.pause();
        }
        setIsPlaying(false);
        setCurrentIndex(0);
        setQueueArray([]);

    };


    // React to change in volume state
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume / 100;
        }
    }, [volume]);

    // React to change in queue array state
    useEffect(() => {
        if (queueArray.length > 0) {
            setInterfaceDisabled(false);
        } else {
            setInterfaceDisabled(true);

        }
    }, [queueArray])

    // React to change in states: current index, isPlaying, queue array
    useEffect(() => {
        const audioElement = audioRef.current;

        if ((queueArray.length > 0) && audioElement && queueArray[currentIndex] ) {

            audioElement.addEventListener('timeupdate', updateProgress);
            audioElement.src = queueArray[currentIndex][3];
            if (isPlaying) audioElement.play();

            setCurrentTrackUUID(queueArray[currentIndex][0]);
            setCurrentTrackName(queueArray[currentIndex][1]);
            setCurrentTrackArtists(queueArray[currentIndex][2]);
            setCurrentTrackSrc(queueArray[currentIndex][3]);
            setCurrentTrackArt(queueArray[currentIndex][4]);
        }

        return () => {
            if (audioElement) {
                audioElement.removeEventListener('timeupdate', updateProgress);
            }
        };
    }, [currentIndex, isPlaying, queueArray]);

    return (
        <AudioPlayerContext.Provider
            value={{
                audioRef,
                isPlaying,

                togglePlayPause,
                play,
                pause,

                skipNext,
                skipPrevious,

                volume,
                changeVolume,
                isMuted,
                toggleMute,

                isLooping,
                toggleLoop,

                progress,
                seekProgress,

                queueArray,
                addToQueue,
                removeFromQueue,
                clearQueue,
                interfaceDisabled,

                currentTrackUUID,
                currentTrackName,
                currentTrackArtists,
                currentTrackSrc,
                currentTrackArt,
            }}
        >
            {children}
        </AudioPlayerContext.Provider>
    );
};
