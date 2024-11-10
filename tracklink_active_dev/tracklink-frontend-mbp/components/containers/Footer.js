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
import {useLocalRouter} from "@/context/LocalRouterContext";
import TrackSummaryButton from "@/components/elements/TrackSummaryButton";
import {useState} from "react";
import {useRoute} from "@/context/RouteContext";

export default function Footer(props) {

    // Routing
    const { navigate, currentRoute } = useRoute();

    // Control sliders
    const [playbackDurationSliderValue, setPlaybackDurationSliderValue] = useState(0);
    const [volumeSliderValue, setVolumeSliderValue] = useState(100);

    const handleChangePlaybackDurationSliderValue = (event, newValue) => {
        setPlaybackDurationSliderValue(newValue);
    };

    const handleChangeVolumeSliderValue = (event, newValue) => {
        setVolumeSliderValue(newValue);
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

                            <TrackSummaryButton />

                            <IconButton
                                color="white"
                                onClick={() => {alert('TODO: onClick function')}}
                                sx={{
                                    width: '2.5rem',
                                    height: '2.5rem',
                                    marginLeft: '1rem',

                                    color: 'white',
                                    transition: 'color 0.3s ease',
                                    '&:hover': {
                                        color: 'primary.dark',
                                    },
                                    '&:active': {
                                        color: 'primary.main',
                                    },
                                }}
                            >
                                <StarBorderIcon />
                            </IconButton>
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
                                                        color: 'primary.dark',
                                                    },
                                                    '&:active': {
                                                        color: 'primary.main',
                                                    },
                                                }}
                                                onClick={() => navigate('/track/some-track-id')}
                                            >
                                                <AddCommentIcon/>
                                            </IconButton>

                                            <IconButton
                                                color="white"
                                                onClick={() => {alert('TODO: onClick function')}}
                                                sx={{
                                                    width: '2.5rem',
                                                    height: '2.5rem',
                                                    marginX: '0.2rem',

                                                    color: 'white',
                                                    transition: 'color 0.3s ease',
                                                    '&:hover': {
                                                        color: 'primary.dark',
                                                    },
                                                    '&:active': {
                                                        color: 'primary.main',
                                                    },
                                                }}
                                            >
                                                <SkipPreviousIcon/>
                                            </IconButton>

                                            <IconButton
                                                color="white"
                                                onClick={() => {alert('TODO: onClick function')}}
                                                sx={{
                                                    width: '3.5rem',
                                                    height: '3.5rem',
                                                    marginX: '0.2rem',

                                                    color: 'white',
                                                    transition: 'color 0.3s ease',
                                                    '&:hover': {
                                                        color: 'primary.dark',
                                                    },
                                                    '&:active': {
                                                        color: 'primary.main',
                                                    },
                                                }}
                                            >
                                                <PauseCircleIcon sx={{fontSize: '3rem'}}/>
                                            </IconButton>

                                            <IconButton
                                                color="white"
                                                onClick={() => {alert('TODO: onClick function')}}
                                                sx={{
                                                    width: '2.5rem',
                                                    height: '2.5rem',
                                                    marginX: '0.2rem',

                                                    color: 'white',
                                                    transition: 'color 0.3s ease',
                                                    '&:hover': {
                                                        color: 'primary.dark',
                                                    },
                                                    '&:active': {
                                                        color: 'primary.main',
                                                    },
                                                }}
                                            >
                                                <SkipNextIcon/>
                                            </IconButton>

                                            <IconButton
                                                color="white"
                                                onClick={() => {alert('TODO: onClick function')}}
                                                sx={{
                                                    width: '2.5rem',
                                                    height: '2.5rem',
                                                    marginX: '0.2rem',

                                                    color: 'white',
                                                    transition: 'color 0.3s ease',
                                                    '&:hover': {
                                                        color: 'primary.dark',
                                                    },
                                                    '&:active': {
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
                                                value={playbackDurationSliderValue}
                                                onChange={handleChangePlaybackDurationSliderValue}
                                                sx={{
                                                    marginX: '1rem',
                                                    '& .MuiSlider-thumb': {
                                                        visibility: 'hidden', // Hide the thumb by default
                                                        transition: 'visibility 0s, opacity 0.2s linear', // Smooth transition
                                                        width: 15,
                                                        height: 15,
                                                        opacity: 0, // Set initial opacity to 0
                                                    },
                                                    '&:hover': {
                                                        color: 'primary.dark',
                                                    },
                                                    '&:hover .MuiSlider-thumb, &:active .MuiSlider-thumb': {
                                                        visibility: 'visible', // Show the thumb on hover or active
                                                        opacity: 1, // Set opacity to 1 when visible
                                                    },
                                                    '&:active .MuiSlider-thumb, &:active .MuiSlider-track': {
                                                        color: 'primary.main',
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
                                                color: 'primary.dark',
                                            },
                                            '&:active': {
                                                color: 'primary.main',
                                            },
                                        }}
                                        onClick={() => navigate('/queue')}
                                    >
                                        <QueueMusicIcon/>
                                    </IconButton>

                                    <IconButton
                                        color="white"
                                        onClick={() => {alert('TODO: onClick function')}}
                                        sx={{
                                            color: 'white',
                                            transition: 'color 0.3s ease',
                                            '&:hover': {
                                                color: 'primary.dark',
                                            },
                                            '&:active': {
                                                color: 'primary.main',
                                            },
                                        }}
                                    >
                                        <VolumeUpIcon/>
                                    </IconButton>

                                    <Slider
                                        value={volumeSliderValue}
                                        onChange={handleChangeVolumeSliderValue}
                                        color="white"
                                        sx={{
                                            color: 'white',
                                            transition: 'color 0.3s ease',

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
                                            '&:hover': {
                                                color: 'primary.dark',
                                            },
                                            '&:hover .MuiSlider-thumb, &:active .MuiSlider-thumb': {
                                                visibility: 'visible', // Show the thumb on hover or active
                                                opacity: 1, // Set opacity to 1 when visible
                                            },
                                            '&:active .MuiSlider-thumb, &:active .MuiSlider-track': {
                                                color: 'primary.main',
                                            },
                                        }}
                                    />

                                    <IconButton
                                        color="white"
                                        onClick={() => {alert('TODO: onClick function')}}
                                        sx={{
                                            color: 'white',
                                            transition: 'color 0.3s ease',
                                            '&:hover': {
                                                color: 'primary.dark',
                                            },
                                            '&:active': {
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