import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import {IconButton} from "@mui/material";
import * as React from "react";
import {useAudioPlayer} from "@/context/AudioPlayerContext";

export default function SkipPreviousButton() {

    const { interfaceDisabled } = useAudioPlayer();

    return (
        <IconButton
            disabled={interfaceDisabled}
            color="white"
            onClick={() => {
                alert('TODO: onClick function')
            }}
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
        >
            <SkipPreviousIcon/>
        </IconButton>
    )
}