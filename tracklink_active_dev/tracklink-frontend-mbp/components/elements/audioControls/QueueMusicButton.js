import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import {IconButton} from "@mui/material";
import * as React from "react";
import {useRoute} from "@/context/RouteContext";

export default function QueueMusicButton() {

    // Routing
    const { navigate } = useRoute();

    return (
        <IconButton
            color="white"
            sx={{
                marginRight: '1rem',

                color: 'white',
                transition: 'color 0.3s ease',
                '&:hover': {
                    color: 'primary.dark',
                },
                '&:active': {
                    color: 'primary.main',
                },
            }}
            onClick={() => navigate('/queue')}
        >
            <QueueMusicIcon/>
        </IconButton>
    )
}