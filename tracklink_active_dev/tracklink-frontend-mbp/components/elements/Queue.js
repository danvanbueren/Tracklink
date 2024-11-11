import React from 'react';
import {Box, Button} from '@mui/material';
import { useAudioPlayer } from "@/context/AudioPlayerContext";

export default function Queue() {
    const { addToQueue, removeFromQueue, clearQueue, queueArray } = useAudioPlayer();

    return (
        <>
            <Button
                onClick={
                    () => addToQueue(
                        1, // uuid
                        'amber', // title
                        [1], // artists
                        'https://essentials.pixfort.com/original/wp-content/uploads/sites/4/2020/02/skanews.wav', // src audio
                        'https://picsum.photos/200' // src image
                    )
                }
            >
                Add Track
            </Button>

            <Button
                onClick={
                    () => removeFromQueue(0)
                }
            >
                Remove First Track
            </Button>

            <Button
                onClick={
                    clearQueue
                }
            >
                Clear Playlist
            </Button>

            <Box>
                {queueArray &&
                    queueArray.map(
                        (content, index) => (
                            'uuid [0]: ' +
                            content[0] + ' :: ' +
                            'title [1]: ' +
                            content[1] + ' :: ' +
                            'artists [2]: ' +
                            content[2] + ' :: ' +
                            'src [3]: ' +
                            content[3] + ' :: ' +
                            'img [4]: ' +
                            content[4]
                        )
                    )
                }
            </Box>
        </>
    );
};