import {useAudioPlayer} from "@/components/AudioPlayer/AudioPlayerContext";
import {Button, Stack, Typography} from "@mui/material";
import React from "react";

export default function QueueInfo() {

    const {
        queue,
        queueIndex,
        removeFromQueueByIndexFunction,
        setQueueIndex,
    } = useAudioPlayer();

    return (
        <>
            <Typography>Queue Index: {queueIndex}</Typography>
            <Typography>Queue Length: {queue.length}</Typography>
            <Typography>Queue:</Typography>
            <ul>
                {
                    queue.length > 0 ?
                        queue.map((a, b) =>
                            <li key={b}>
                                <Stack direction="row">
                                    <Button
                                        variant="text"
                                        color='primary'
                                        size='small'
                                        sx={{marginX: '1rem'}}
                                        onClick={() => {
                                            setQueueIndex(b)
                                        }}
                                    >
                                        {b === queueIndex ?
                                            <Typography sx={{backgroundColor: 'background.default'}}>Index: {b} --- Name: {a[1]} --- Artist: {a[2]} --- Source: {a[0]}</Typography>
                                            : <Typography>Index: {b} --- Name: {a[1]} --- Artist: {a[2]} --- Source: {a[0]}</Typography>
                                        }
                                    </Button>
                                    <Button
                                        variant="text"
                                        color='error'
                                        size='small'
                                        sx={{marginX: '1rem'}}
                                        onClick={() => {
                                            removeFromQueueByIndexFunction(b)
                                        }}
                                    >
                                        delete {b}
                                    </Button>
                                </Stack>
                            </li>
                        ) : <Typography>Queue empty</Typography>
                }
            </ul>
        </>
    )
}