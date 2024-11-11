import {Box, Button, Card, CardMedia, Stack, Typography} from "@mui/material";
import * as React from "react";
import Grid from "@mui/material/Grid2";
import {useRoute} from "@/context/RouteContext";
import {useAudioPlayer} from "@/context/AudioPlayerContext";

export default function NowPlayingButton() {

    const { currentTrackUUID, currentTrackName, currentTrackArtists, currentTrackArt } = useAudioPlayer();

    let trackHandle = currentTrackUUID;
    let trackName = currentTrackName;
    let userHandle = currentTrackArtists;
    let artPath = currentTrackArt;
    let artistName = 'LOOKUP UUID: ' + currentTrackArtists

    // Routing
    const { navigate } = useRoute();

return (
    <>
        <Grid container spacing={2}>
            <Grid size='auto' >

                <Button
                    sx={{padding: 0, margin: 0, marginRight: '0.8rem'}}
                    onClick={() => navigate('/track/' + trackHandle)}
                >
                    <Card sx={{ display: 'flex', padding: 0, margin: 0, height: '4rem', width: '4rem',}}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardMedia
                                component="img"
                                image={artPath}
                                alt="Art"
                            />
                        </Box>
                    </Card>
                </Button>
            </Grid>

            <Grid size='grow'>
                <Stack
                    direction='column'
                    sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                    }}
                >
                    <Button
                        color='white'
                        sx={{
                            flexShrink: 0,
                            margin: 0,
                            padding: 0,
                            paddingX: '0.5rem',
                            marginBottom: '0.1rem',
                            textTransform: 'none',
                            maxWidth: '100%',
                        }}
                        onClick={() => navigate('/track/' + trackHandle)}
                    >
                        <Typography
                            variant='h6'
                            sx={{
                                overflow: 'hidden',
                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis',
                            }}
                        >
                            {trackName}
                        </Typography>
                    </Button>

                    <Button
                        size="small"
                        color='white'
                        sx={{
                            flexShrink: 0,
                            margin: 0,
                            padding: 0,
                            paddingX: '0.5rem',
                            textTransform: 'none',
                            maxWidth: '100%',
                        }}
                        onClick={() => navigate('/user/' + userHandle)}
                    >
                        <Typography
                            sx={{
                                overflow: 'hidden',
                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis',
                            }}
                        >
                            {artistName}
                        </Typography>
                    </Button>
                </Stack>
            </Grid>
        </Grid>
    </>
)
}