'use client'

import React, {createContext, useContext, useState, useRef, useEffect} from 'react';
import {useRoute} from "@/context/RouteContext";

const AudioPlayerContext = createContext();

export const useAudioPlayer = () => useContext(AudioPlayerContext);

export const AudioPlayerProvider = ({ children }) => {

    const {
        isAuthenticated
    } = useRoute();

    const ref = useRef(new Audio());

    const [playing, setPlaying] = useState(false);

    const [queue, setQueue] = useState([]);
    const [queueIndex, setQueueIndex] = useState(0);

    const [repeatMode, setRepeatMode] = useState("off"); // off, all, one

    const [muted, setMuted] = useState(false);
    const [volume, setVolume] = useState(0.8);
    const [previousVolume, setPreviousVolume] = useState(0);

    const [disabled, setDisabled] = useState(true);

    const [currentTime, setCurrentTime] = useState(0);
    const [totalTime, setTotalTime] = useState(0);

    const [currentTrackName, setCurrentTrackName] = useState(null);
    const [currentTrackSrc, setCurrentTrackSrc] = useState(null);
    const [currentTrackArtist, setCurrentTrackArtist] = useState(null);
    const [currentTrackUUID, setCurrentTrackUUID] = useState(null);
    const [currentTrackImg, setCurrentTrackImg] = useState(null);

    // End of playback logic based on repeatMode
    const handleTrackEnded = () => {
        if (repeatMode === "one") {
            ref.current.currentTime = 0;
        } else {
            if ((queue.length - 2) >= queueIndex) {
                setQueueIndex(queueIndex + 1);
            } else {
                if (repeatMode === 'all') {
                    setQueueIndex(0);
                    ref.current.currentTime = 0;
                } else {
                    setPlaying(false);
                    ref.current.pause();
                }
            }
        }
        if (playing) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
    }

    // Late load function to handle end of playback
    useEffect(() => {
        ref.current.onended = handleTrackEnded;
        return () => {
            ref.current.onended = null;
        };
    }, [handleTrackEnded]);

    // Enable and disable controls
    useEffect(() => {
        if (queue.length < 1) {
            setDisabled(true);
            setRepeatMode("off");
            setCurrentTime(0);
            setTotalTime(0);
            setCurrentTrackName(undefined);
            setCurrentTrackSrc(undefined);
            setCurrentTrackArtist(undefined);
            setCurrentTrackUUID(undefined);
            setCurrentTrackImg(undefined);
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

    // Update current name, src, artist
    useEffect(() => {
        if (queue.length > 0) {
            setCurrentTrackSrc(queue[queueIndex][0])
            setCurrentTrackName(queue[queueIndex][1])
            setCurrentTrackArtist(queue[queueIndex][2])
            setCurrentTrackUUID(queue[queueIndex][3])
            setCurrentTrackImg(queue[queueIndex][4])
        }
    }, [queue, queueIndex])

    // Update ref source from state
    useEffect(() => {
        ref.current.src = currentTrackSrc;
        ref.current.load();
        if (playing) {
            ref.current.play();
        }
    }, [currentTrackSrc])

    // Update ref play/pause from state
    useEffect(() => {
        if (playing) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
    }, [playing])

    // Update ref volume from state
    useEffect(() => {
        ref.current.volume = volume;
    }, [volume])

    const togglePlayFunction = () => {
        setPlaying(!playing);
        if (playing) {
            ref.current.pause();
        } else {
            if (queue.length === queueIndex && currentTime >= totalTime) {
                ref.current.currentTime = 0
                ref.current.play();
            } else {
                ref.current.play();
            }
        }
    }

    const skipPreviousFunction = () => {
        if(ref.current.currentTime < 2) {
            if (queue.length > queueIndex && queueIndex > 0) {
                setQueueIndex(queueIndex - 1);
                ref.current.src = currentTrackSrc;
                ref.current.load();
                if (playing) {
                    ref.current.play();
                }
            } else {
                ref.current.currentTime = 0;
            }
        } else {
            ref.current.currentTime = 0;
        }
    }

    const skipForwardFunction = () => {
        if (queue.length - 1 > queueIndex) {
            setQueueIndex(queueIndex + 1);
            ref.current.src = currentTrackSrc;
            ref.current.load();
            if (playing) {
                ref.current.play();
            }
        } else {
            ref.current.currentTime = totalTime;
            setCurrentTime(totalTime);
        }
    }

    const repeatFunction = () => {
        if (repeatMode === "off") {
            setRepeatMode("all");
        } else if (repeatMode === "all") {
            setRepeatMode("one");
        } else {
            setRepeatMode("off");
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
    }

    const seekFunction = (value) => {
        setCurrentTime(value);
        ref.current.currentTime = value;
    }

    const clearQueueFunction = () => {
        if(playing) {
            setPlaying(false);
        }
        ref.current.pause();
        ref.current.currentTime = 0;
        setQueue([]);
        setQueueIndex(0);
    }

    const removeFromQueueByIndexFunction = (index) => {

        if (index === queueIndex) {
            if (queueIndex < 1) {
                setPlaying(false);
                ref.current.pause();
                ref.current.currentTime = 0;
            } else {
                setQueueIndex(queueIndex - 1);
            }

        }

        setQueue((prevQueue) => prevQueue.filter((_, i) => i !== index));
    }

    const addToQueueFunction = (src, name, artist, uuid, img) => {
        setQueue([...queue, [src, name, artist, uuid, img]])
    }

    const playImmediatelyFunction = (src, name, artist, uuid, img) => {

        console.log(uuid, currentTrackUUID)

        if (uuid !== currentTrackUUID) {
            ref.current.pause();
            ref.current.currentTime = 0;
            setQueue([]);
            setQueueIndex(0);
            clearQueueFunction();
            addToQueueFunction(src, name, artist, uuid, img);
        }

        togglePlayFunction();
    }

    return (
        <AudioPlayerContext.Provider
            value={{
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
                currentTrackUUID,
                currentTrackImg,
                setQueueIndex,
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
                playImmediatelyFunction,
            }}
        >
            {children}
        </AudioPlayerContext.Provider>
    );
};
