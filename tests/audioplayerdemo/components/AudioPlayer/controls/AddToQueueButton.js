import {Button} from "@mui/material";
import React from "react";
import {useAudioPlayer} from "@/components/AudioPlayer/AudioPlayerContext";

export default function AddToQueueButton({ src, name, artist }) {

    const {
        addToQueueFunction,
    } = useAudioPlayer();

    return (
        <>
            <Button
                variant="contained"
                sx={{margin: '1rem'}}
                onClick={() => {
                    addToQueueFunction(src, name, artist)
                }}
            >
                {name}
            </Button>
        </>
    )
}