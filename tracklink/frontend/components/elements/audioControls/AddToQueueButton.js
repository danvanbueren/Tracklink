import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import {IconButton} from "@mui/material";
import * as React from "react";
import {useAudioPlayer} from "@/context/AudioPlayerContext";

export default function AddToQueueButton({ trackUUID }) {

    const {
        playing,
        playImmediatelyFunction,
        currentTrackUUID,
    } = useAudioPlayer();

    return (
        <IconButton
            onClick={() => { /*playImmediatelyFunction('amber.mp3', 'Amber', 'Dan', 1, 'https://picsum.photos/108')*/ }}
            color="white"
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
            <PlaylistAddIcon sx={{fontSize: '2rem'}}/>
        </IconButton>
    )
}