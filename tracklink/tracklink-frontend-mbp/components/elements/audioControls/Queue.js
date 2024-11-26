import React from 'react';
import {Box, Button, Stack, Typography} from '@mui/material';
import { useAudioPlayer } from "@/context/AudioPlayerContext";
import TempAddToQueueButton from "@/components/elements/audioControls/TempAddToQueueButton";
import ClearQueueButton from "@/components/elements/audioControls/ClearQueueButton";

export default function Queue() {

    const {
        queue,
        queueIndex,
        removeFromQueueByIndexFunction,
        setQueueIndex,
    } = useAudioPlayer();

    return (
        <>
            <Box sx={{border: '1px black solid', padding: 2, borderRadius: 5, backgroundColor: '#000000'}}>
                <ClearQueueButton />
                <TempAddToQueueButton src='/amber.mp3' name='Amber' artist='Polybit' uuid={1} art='https://picsum.photos/100' />
                <TempAddToQueueButton src='/away.mp3' name='Ran Away' artist='Polybit' uuid={2} art='https://picsum.photos/101' />
                <TempAddToQueueButton src='/drifter.mp3' name='The Drifter' artist='Polybit' uuid={3} art='https://picsum.photos/102' />
                <TempAddToQueueButton src='/hydrolock.mp3' name='Hydrolock' artist='Polybit' uuid={4} art='https://picsum.photos/103' />
                <TempAddToQueueButton src='/jupiter.mp3' name='Jupiter' artist='Polybit' uuid={5} art='https://picsum.photos/104' />
                <TempAddToQueueButton src='/soon.mp3' name='Soon' artist='Polybit' uuid={6} art='https://picsum.photos/105' />
            </Box>

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
    );
};