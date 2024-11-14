import {Button} from "@mui/material";
import React from "react";
import {useAudioPlayer} from "@/context/AudioPlayerContext";

export default function AddToQueueButton({ src, name, artist, uuid, art }) {

    const {
        addToQueueFunction,
    } = useAudioPlayer();

    return (
        <>
            <Button
                variant="contained"
                sx={{margin: '1rem'}}
                onClick={() => {
                    addToQueueFunction(src, name, artist, uuid, art)
                }}
            >
                {name}
            </Button>
        </>
    )
}