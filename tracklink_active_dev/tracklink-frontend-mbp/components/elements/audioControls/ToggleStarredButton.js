import StarBorderIcon from "@mui/icons-material/StarBorder";
import * as React from "react";
import {IconButton} from "@mui/material";
import {useAudioPlayer} from "@/context/AudioPlayerContext";

export default function ToggleStarredButton() {

    const {
        queue,
    } = useAudioPlayer();

    return (
        <>
            {queue.length > 0 &&
                <IconButton
                    color="white"
                    onClick={() => {alert('TODO: onClick function')}}
                    sx={{
                        width: '2.5rem',
                        height: '2.5rem',
                        marginLeft: '1rem',

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
                    <StarBorderIcon />
                </IconButton>
            }
        </>
    )
}