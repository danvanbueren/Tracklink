'use client'

import React from 'react';
import PlayButton from "@/components/AudioPlayer/controls/PlayButton";
import SkipPreviousButton from "@/components/AudioPlayer/controls/SkipPreviousButton";
import SkipForwardButton from "@/components/AudioPlayer/controls/SkipForwardButton";
import RepeatButton from "@/components/AudioPlayer/controls/RepeatButton";
import MuteButton from "@/components/AudioPlayer/controls/MuteButton";
import VolumeSlider from "@/components/AudioPlayer/controls/VolumeSlider";
import SeekSlider from "@/components/AudioPlayer/controls/SeekSlider";
import ClearQueueButton from "@/components/AudioPlayer/controls/ClearQueueButton";
import AddToQueueButton from "@/components/AudioPlayer/controls/AddToQueueButton";
import NowPlayingInfo from "@/components/AudioPlayer/controls/NowPlayingInfo";
import QueueInfo from "@/components/AudioPlayer/controls/QueueInfo";
import CurrentTimeInfo from "@/components/AudioPlayer/controls/CurrentTimeInfo";
import TotalTimeInfo from "@/components/AudioPlayer/controls/TotalTimeInfo";
import {Box, Stack} from "@mui/material";
import Grid from "@mui/material/Grid2";
import CommentIcon from "@mui/icons-material/Comment";

const AudioPlayerContainer = () => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid size='grow' sx={{display: 'flex', alignItems: 'center', paddingX: 3}}>
                    <Box>
                        <NowPlayingInfo />
                    </Box>
                </Grid>

                <Grid size='auto'>
                    <Stack direction='column' spacing={2} sx={{display: 'flex', alignItems: 'center'}}>
                        <Stack direction='row' spacing={4} sx={{display: 'flex', alignItems: 'center'}}>
                            <CommentIcon sx={{color: '#a50000'}} />
                            <SkipPreviousButton />
                            <PlayButton />
                            <SkipForwardButton />
                            <RepeatButton />
                        </Stack>

                        <Stack direction='row' spacing={4} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <CurrentTimeInfo />
                            <SeekSlider />
                            <TotalTimeInfo />
                        </Stack>
                    </Stack>
                </Grid>

                <Grid size='grow' sx={{display: 'flex', justifyContent: 'end', alignItems: 'center', paddingX: 3}}>
                    <MuteButton />
                    <VolumeSlider />
                </Grid>
            </Grid>

            <Box sx={{border: '1px black solid', marginTop: 5, padding: 2, borderRadius: 5, backgroundColor: '#ddd'}}>
                <ClearQueueButton />
                <AddToQueueButton src='/bestvibes.mp3' name='Best Vibes' artist='Dan' />
                <AddToQueueButton src='/fightclub.mp3' name='Fight Club' artist='Dustin' />
                <AddToQueueButton src='/soulish.mp3' name='Soulish' artist='Dixie' />
                <QueueInfo />
            </Box>
        </>
    );
};

export default AudioPlayerContainer;
