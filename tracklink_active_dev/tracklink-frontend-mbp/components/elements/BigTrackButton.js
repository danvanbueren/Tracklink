import {Box, Button, Card, CardMedia, Stack, Typography} from "@mui/material";
import * as React from "react";
import Grid from "@mui/material/Grid2";
import {useRoute} from "@/context/RouteContext";
import {useAudioPlayer} from "@/context/AudioPlayerContext";

export default function BigTrackButton({trackUUID}) {

    // simulated lookup from trackUUID
    let trackName = 'Track '.concat(trackUUID);
    let artPath = 'https://picsum.photos/50'.concat(trackUUID);
    let artistUUIDs = '99'.concat(trackUUID);
    let artistName = 'LOOKUP UUID: ' + artistUUIDs;
    let navigateLink = ('/track/'.concat(trackUUID));

    // Routing
    const { navigate } = useRoute();

return (
    <>
    <Button
        onClick={() => navigate(navigateLink)}
        sx={{
            width: '100%',
            height: '100%',
            padding: 0,
            margin: 0,
        }}
    >
        <Card
            sx={{
                p: '1rem',
                outline: '1px solid',
                outlineColor: 'background.default',
                width: '100%',
                backgroundColor: '#171717',
                transition: 'background-color 0.3s ease',
                '&:hover': {
                    backgroundColor: '#222',
                },
                '&:active': {
                    backgroundColor: '#444',
                },
            }}
        >

            <Grid container spacing={2}>


                    <Grid size='auto' >
                        <Box sx={{padding: 0, margin: 0, marginRight: '0.8rem'}}>
                            <Card sx={{ display: 'flex', padding: 0, margin: 0, height: '4rem', width: '4rem',}}>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <CardMedia
                                        component="img"
                                        image={artPath}
                                        alt="Art"
                                    />
                                </Box>
                            </Card>
                        </Box>
                    </Grid>

                    <Grid size='grow'>
                        <Stack
                            direction='column'
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                            }}
                        >
                            <Box
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
                            </Box>

                            <Box
                                color='white'
                                sx={{
                                    flexShrink: 0,
                                    margin: 0,
                                    padding: 0,
                                    paddingX: '0.5rem',
                                    textTransform: 'none',
                                    maxWidth: '100%',
                                }}
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
                            </Box>
                        </Stack>
                    </Grid>

            </Grid>

        </Card>
    </Button>
    </>
)
}