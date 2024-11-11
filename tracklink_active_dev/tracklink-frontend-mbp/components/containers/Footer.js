import {Box, IconButton, Stack} from "@mui/material";
import * as React from "react";
import Grid from "@mui/material/Grid2";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import TrackSummaryButton from "@/components/elements/TrackSummaryButton";
import {useAudioPlayer} from "@/context/AudioPlayerContext";
import ToggleStarredButton from "@/components/elements/ToggleStarredButton";
import AddCommentButton from "@/components/elements/audioControls/AddCommentButton";
import SkipPreviousButton from "@/components/elements/audioControls/SkipPreviousButton";
import TogglePlayPauseButton from "@/components/elements/audioControls/TogglePlayPauseButton";
import SkipNextButton from "@/components/elements/audioControls/SkipNextButton";
import RepeatButton from "@/components/elements/audioControls/RepeatButton";
import PlaybackDurationSlider from "@/components/elements/audioControls/PlaybackDurationSlider";
import CurrentPlaybackTime from "@/components/elements/audioControls/CurrentPlaybackTime";
import TotalPlaybackTime from "@/components/elements/audioControls/TotalPlaybackTime";
import QueueMusicButton from "@/components/elements/audioControls/QueueMusicButton";
import MuteButton from "@/components/elements/audioControls/MuteButton";
import VolumeSlider from "@/components/elements/audioControls/VolumeSlider";

export default function Footer() {

    const { interfaceDisabled, audioRef, skipNext, isLooping } = useAudioPlayer();

    return (
        <>
            <audio ref={audioRef} onEnded={skipNext} loop={isLooping}/>
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
                            {!interfaceDisabled &&
                                <>
                                    <TrackSummaryButton />
                                    <ToggleStarredButton />
                                </>
                            }
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
                                            <AddCommentButton/>
                                            <SkipPreviousButton/>
                                            <TogglePlayPauseButton/>
                                            <SkipNextButton/>
                                            <RepeatButton/>
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
                                            <CurrentPlaybackTime/>
                                            <PlaybackDurationSlider/>
                                            <TotalPlaybackTime/>
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
                                    <QueueMusicButton/>
                                    <MuteButton/>
                                    <VolumeSlider/>

                                    <IconButton
                                        color="white"
                                        onClick={() => {
                                            alert('TODO: onClick function')
                                        }}
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