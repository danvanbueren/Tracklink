import {Box, Button, Card, CardMedia, Stack, Typography} from "@mui/material";
import * as React from "react";
import {useNavigation} from "@/context/contextNavigation";

export default function TrackSummaryButton({trackId}) {

    /* simulate trackId lookup */
    const artPath = 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/08/36/6e/08366e18-05aa-35ea-1e3c-0f4cb6b89883/artwork.jpg/486x486bb.png';
    const trackName = 'Extremely Long Very Long Super Long Song Title';
    const artistName = 'Artist Name';
    const userHandle = '';
    const trackHandle = '';
    /* simulate trackId lookup */


    // Routing
    const { navigateTo, isNavigating } = useNavigation();
    const handleNavigate = (destination) => {
        if (isNavigating) {
            return;
        }
        navigateTo(destination);
    };

return (
    <>
        <Stack direction="row">
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',     // Vertical centering
                    height: '100%',          // Full viewport height
                    width: '100%',
                }}
            >
                <Button
                    sx={{padding: 0, margin: 0, marginRight: '0.8rem'}}
                    onClick={() => handleNavigate('/track/' + trackHandle)}
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

                <Stack direction="column">
                    <Box display="flex" justifyContent="flex-start"> {/* Use appropriate alignment */}
                        <Button
                            color='white'
                            sx={{
                                flexShrink: 0,
                                margin: 0,
                                padding: 0,
                                paddingX: '0.5rem',
                                marginBottom: '0.1rem',
                                textTransform: 'none',
                            }}
                            onClick={() => handleNavigate('/track/' + trackHandle)}
                        >
                            <Typography
                                variant='h6'
                                sx={{
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                    maxWidth: '6rem',
                                }}
                            >
                                {trackName}
                            </Typography>
                        </Button>
                    </Box>
                    <Box display="flex" justifyContent="flex-start"> {/* Use appropriate alignment */}
                        <Button
                            size="small"
                            color='white'
                            sx={{
                                flexShrink: 0,
                                margin: 0,
                                padding: 0,
                                paddingX: '0.5rem',
                                textTransform: 'none',
                            }}
                            onClick={() => handleNavigate('/user/' + userHandle)}
                        >
                            <Typography
                                sx={{
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                    maxWidth: '100%',
                                }}
                            >
                                {artistName}
                            </Typography>
                        </Button>
                    </Box>


                </Stack>
            </Box>
        </Stack>
    </>
)
}