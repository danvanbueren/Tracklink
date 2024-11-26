import AddCommentIcon from "@mui/icons-material/AddComment";
import {IconButton} from "@mui/material";
import * as React from "react";
import {useAudioPlayer} from "@/context/AudioPlayerContext";
import {useRoute} from "@/context/RouteContext";

export default function AddCommentButton() {

    const {
        disabled,
        currentTrackUUID
    } = useAudioPlayer();

    // Routing
    const { navigate } = useRoute();

    return (
        <IconButton
            disabled={disabled}
            color="white"
            sx={{
                width: '2.5rem',
                height: '2.5rem',
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
            onClick={() => navigate('/track/' + currentTrackUUID)}
        >
            <AddCommentIcon/>
        </IconButton>
    )
}