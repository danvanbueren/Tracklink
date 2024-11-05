import {Box, Button, Card, CardMedia, IconButton, Slider, Stack, Typography} from "@mui/material";
import * as React from "react";
import Grid from "@mui/material/Grid2";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import AddCommentIcon from '@mui/icons-material/AddComment';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RepeatIcon from '@mui/icons-material/Repeat';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import {useNavigation} from "@/context/contextNavigation";

export default function Footer(props) {

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
            <Box
                sx={{
                    display: 'flex', // Enable flexbox
                    alignItems: 'center', // Center vertically

                    minWidth: '70rem',
                    width: '100vw',
                    maxWidth: '100vw',

                    paddingTop: '1rem',
                    paddingBottom: '0.5rem',
                    paddingX: '1rem',
                }}
            >
                <Grid container spacing={3} sx={{
                    minWidth: '70rem',
                    width: '100vw',
                    maxWidth: '100vw',
                }}
                >
                    <Grid size="grow">

                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',     // Vertical centering
                                height: '100%',          // Full viewport height
                                width: '100%',
                            }}
                        >

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
                                    onClick={() => handleNavigate('/track')}
                                >
                                    <Card sx={{ display: 'flex', padding: 0, margin: 0, height: '4rem', width: '4rem',}}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <CardMedia
                                                component="img"
                                                image="https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/08/36/6e/08366e18-05aa-35ea-1e3c-0f4cb6b89883/artwork.jpg/486x486bb.png"
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
                                            onClick={() => handleNavigate('/track')}
                                        >
                                            <Typography variant='h6'>Song Title</Typography>
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
                                            onClick={() => handleNavigate('/user')}
                                        >
                                            <Typography>Artist Name</Typography>
                                        </Button>
                                    </Box>


                                </Stack>

                                <IconButton
                                    color="white"
                                    sx={{
                                        width: '2.5rem',
                                        height: '2.5rem',
                                        marginLeft: '1rem',

                                        color: 'white',
                                        transition: 'color 0.3s ease',
                                        '&:hover': {
                                            color: 'primary.main',
                                        },
                                    }}
                                >
                                    <StarBorderIcon />
                                </IconButton>
                            </Box>
                        </Stack>
                        </Box>
                    </Grid>


                    <Grid size={4}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center', // Horizontal centering
                                alignItems: 'center',     // Vertical centering
                                height: '100%',          // Full viewport height
                                width: '100%',
                            }}
                        >

                            <Stack direction="column" sx={{width: '100%',}}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center', // Horizontal centering
                                        height: '100%',
                                        width: '100%',
                                    }}
                                >
                                    <Stack direction="row">
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center', // Horizontal centering
                                                alignItems: 'center', // Center vertically
                                                height: '100%',
                                                width: '100%',
                                            }}
                                        >

                                            <IconButton
                                                color="white"
                                                sx={{
                                                    width: '2.5rem',
                                                    height: '2.5rem',
                                                    marginX: '0.2rem',

                                                    color: 'white',
                                                    transition: 'color 0.3s ease',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                    },
                                                }}
                                                onClick={() => handleNavigate('/track')}
                                            >
                                                <AddCommentIcon/>
                                            </IconButton>

                                            <IconButton
                                                color="white"
                                                sx={{
                                                    width: '2.5rem',
                                                    height: '2.5rem',
                                                    marginX: '0.2rem',

                                                    color: 'white',
                                                    transition: 'color 0.3s ease',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                    },
                                                }}
                                            >
                                                <SkipPreviousIcon/>
                                            </IconButton>

                                            <IconButton
                                                color="white"
                                                sx={{
                                                    width: '3.5rem',
                                                    height: '3.5rem',
                                                    marginX: '0.2rem',

                                                    color: 'white',
                                                    transition: 'color 0.3s ease',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                    },
                                                }}
                                            >
                                                <PauseCircleIcon sx={{fontSize: '3rem'}}/>
                                            </IconButton>

                                            <IconButton
                                                color="white"
                                                sx={{
                                                    width: '2.5rem',
                                                    height: '2.5rem',
                                                    marginX: '0.2rem',

                                                    color: 'white',
                                                    transition: 'color 0.3s ease',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                    },
                                                }}
                                            >
                                                <SkipNextIcon/>
                                            </IconButton>

                                            <IconButton
                                                color="white"
                                                sx={{
                                                    width: '2.5rem',
                                                    height: '2.5rem',
                                                    marginX: '0.2rem',

                                                    color: 'white',
                                                    transition: 'color 0.3s ease',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                    },
                                                }}
                                            >
                                                <RepeatIcon/>
                                            </IconButton>

                                        </Box>
                                    </Stack>
                                </Box>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center', // Horizontal centering
                                        height: '100%',
                                        width: '100%',
                                    }}
                                >
                                    <Stack direction="row" sx={{width: '100%',}}>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center', // Horizontal centering
                                                alignItems: 'center',     // Vertical centering
                                                height: '100%',
                                                width: '100%',
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize: '0.85rem',
                                                    userSelect: 'none', // Prevents text selection
                                                }}
                                            >
                                                0:00
                                            </Typography>

                                            <Slider
                                                value={50}
                                                sx={{
                                                    marginX: '1rem',
                                                    '& .MuiSlider-thumb': {
                                                        visibility: 'hidden', // Hide the thumb by default
                                                        transition: 'visibility 0s, opacity 0.2s linear', // Smooth transition
                                                        width: 15,
                                                        height: 15,
                                                        opacity: 0, // Set initial opacity to 0
                                                    },
                                                    '&:hover .MuiSlider-thumb, &:active .MuiSlider-thumb': {
                                                        visibility: 'visible', // Show the thumb on hover or active
                                                        opacity: 1, // Set opacity to 1 when visible
                                                    },
                                                }}
                                            />

                                            <Typography
                                                sx={{
                                                    fontSize: '0.85rem',
                                                    userSelect: 'none', // Prevents text selection
                                                }}
                                            >
                                                0:00
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </Box>

                            </Stack>

                        </Box>

                    </Grid>


                    <Grid size="grow">

                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                height: '100%',
                                width: '100%',
                                paddingRight: '20px',
                            }}
                        >

                            <Stack direction="row">
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',     // Vertical centering
                                        height: '100%',          // Full viewport height
                                        width: '100%',
                                        paddingRight: '20px',
                                    }}
                                >

                                    <IconButton
                                        color="white"
                                        sx={{
                                            marginRight: '1rem',

                                            color: 'white',
                                            transition: 'color 0.3s ease',
                                            '&:hover': {
                                                color: 'primary.main',
                                            },
                                        }}
                                        onClick={() => handleNavigate('/queue')}
                                    >
                                        <QueueMusicIcon/>
                                    </IconButton>

                                    <IconButton
                                        color="white"
                                        sx={{
                                            color: 'white',
                                            transition: 'color 0.3s ease',
                                            '&:hover': {
                                                color: 'primary.main',
                                            },
                                        }}
                                    >
                                        <VolumeUpIcon/>
                                    </IconButton>

                                    <Slider
                                        value={50}
                                        color="white"
                                        sx={{
                                            color: 'white',
                                            transition: 'color 0.3s ease',
                                            '&:hover': {
                                                color: 'primary.main',
                                            },

                                            marginLeft: '0.5rem',
                                            marginRight: '1rem',
                                            width: '7rem',
                                            '& .MuiSlider-thumb': {
                                                visibility: 'hidden', // Hide the thumb by default
                                                transition: 'visibility 0s, opacity 0.2s linear', // Smooth transition
                                                width: 15,
                                                height: 15,
                                                opacity: 0, // Set initial opacity to 0
                                            },
                                            '&:hover .MuiSlider-thumb, &:active .MuiSlider-thumb': {
                                                visibility: 'visible', // Show the thumb on hover or active
                                                opacity: 1, // Set opacity to 1 when visible
                                            },
                                        }}
                                    />

                                    <IconButton
                                        color="white"
                                        sx={{
                                            color: 'white',
                                            transition: 'color 0.3s ease',
                                            '&:hover': {
                                                color: 'primary.main',
                                            },
                                        }}
                                    >
                                        <KeyboardDoubleArrowDownIcon/>
                                    </IconButton>

                                </Box>
                            </Stack>
                        </Box>
                    </Grid>

                </Grid>
            </Box>

        </>
    )
}