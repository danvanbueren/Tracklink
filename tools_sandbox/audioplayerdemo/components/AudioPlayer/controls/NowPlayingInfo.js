import {useAudioPlayer} from "@/components/AudioPlayer/AudioPlayerContext";
import {Typography} from "@mui/material";
import React from "react";

export default function NowPlayingInfo() {

    const {
        queue,
        currentTrackName,
        currentTrackArtist,
        currentTrackSrc,
    } = useAudioPlayer();

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
        </>
    )
}