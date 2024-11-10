import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import {IconButton} from "@mui/material";
import * as React from "react";
import {useAudioPlayer} from "@/context/AudioPlayerContext";

export default function TogglePlayPauseButton() {

    const { isPlaying, interfaceDisabled, togglePlayPause } = useAudioPlayer();

    return (
        <IconButton
            disabled={interfaceDisabled}
            color="white"
            onClick={togglePlayPause}
            sx={{
                width: '3.5rem',
                height: '3.5rem',
                marginX: '0.2rem',

                color: 'white',
                transition: 'color 0.3s ease',
                '&:hover': {
                    color: 'primary.dark',
                },
                '&:active': {
                    color: 'primary.main',
                },
            }}
        >
            {isPlaying ?
                <PauseCircleIcon sx={{fontSize: '3rem'}}/>
                :
                <PlayCircleIcon sx={{fontSize: '3rem'}}/>
            }

        </IconButton>
    )
}