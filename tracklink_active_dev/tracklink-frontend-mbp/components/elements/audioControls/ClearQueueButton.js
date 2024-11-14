import {Button} from "@mui/material";
import React from "react";
import {useAudioPlayer} from "@/context/AudioPlayerContext";

export default function ClearQueueButton() {

    const {
        clearQueueFunction,
    } = useAudioPlayer();

    return (
        <>
            <Button
                variant="contained"
                color='error'
                sx={{margin: '1rem'}}
                onClick={clearQueueFunction}
            >
                Clear Queue
            </Button>
        </>
    )
}