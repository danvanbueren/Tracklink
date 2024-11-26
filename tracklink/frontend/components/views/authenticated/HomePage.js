'use client';

import * as React from 'react';
import {
    Box, Button,
    Menu,
    MenuItem, Stack,
    TextField, useMediaQuery
} from "@mui/material";

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import {useState} from "react";
import Grid from "@mui/material/Grid2";
import BigTrackButton from "@/components/elements/BigTrackButton";
import {useRoute} from "@/context/RouteContext";
import SocialActivityCard from "@/components/elements/SocialActivityCard";

export default function HomePage({ slug }) {

    // Routing
    const { navigate } = useRoute();

    /* DROPDOWN VARIABLES */
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // Handle small screens (Recent & Starred projects)
    const isVisible = useMediaQuery('(min-width:1536px)'); // Adjust the breakpoint as needed

    return (
        <main>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: '8vh',
                }}
            >
                <h1>Welcome to Tracklink</h1>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        maxWidth: '40rem',
                        minWidth: '40rem',
                    }}
                >
                    <TextField
                        fullWidth
                        label="Search in Tracklink"
                        id="fullWidth"
                    />
                </Box>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        marginTop: '0.5rem',
                    }}
                >
                    <Button
                        variant="outlined"
                        onClick={handleClick}
                        startIcon={<DescriptionIcon/>}
                        endIcon={<ArrowDropDownIcon/>}

                        sx={{
                            textTransform: 'none',
                            borderRadius: '5rem',
                            m: '1rem',
                        }}
                    >
                        Type
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={handleClick}
                        startIcon={<PersonIcon/>}
                        endIcon={<ArrowDropDownIcon/>}

                        sx={{
                            textTransform: 'none',
                            borderRadius: '5rem',
                            m: '1rem',
                        }}
                    >
                        People
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={handleClick}
                        startIcon={<CalendarTodayIcon/>}
                        endIcon={<ArrowDropDownIcon/>}

                        sx={{
                            textTransform: 'none',
                            borderRadius: '5rem',
                            m: '1rem',
                        }}
                    >
                        Modified
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem
                            onClick={
                                () => { navigate('/search/action1') }
                            }
                        >
                            Action 1
                        </MenuItem>

                        <MenuItem
                            onClick={
                                () => { navigate('/search/action2') }
                            }
                        >
                            Action 2
                        </MenuItem>

                        <MenuItem
                            onClick={
                                () => { navigate('/search/action3') }
                            }
                        >
                            Action 3
                        </MenuItem>
                    </Menu>
                </Box>
            </Box>

            <Box
                sx={{
                    paddingX: '2rem',
                    paddingBottom: '2rem',
                    marginTop: '10vh',
                }}
            >
                <Stack direction='row' display="flex" justifyContent="space-between" alignItems='center'>
                    <h2>Recent</h2>
                    <Button variant='text' onClick={() => {navigate('/recent')}}>See more</Button>
                </Stack>

                <Grid container spacing={2}>

                    <Grid size={{xs: 6, xl: 4}}>
                        <BigTrackButton trackUUID={1}/>
                    </Grid>

                    <Grid size={{xs: 6, xl: 4}}>
                        <BigTrackButton trackUUID={2}/>
                    </Grid>

                    {isVisible &&
                        <Grid size={{xs: 6, xl: 4}}>
                            <BigTrackButton trackUUID={3}/>
                        </Grid>
                    }
                </Grid>

            </Box>

            <Box
                sx={{
                    paddingX: '2rem',
                    paddingBottom: '2rem',
                }}
            >
                <Stack direction='row' display="flex" justifyContent="space-between" alignItems='center'>
                    <h2>Starred</h2>
                    <Button variant='text' onClick={() => {navigate('/starred')}}>See more</Button>
                </Stack>

                <Grid container spacing={2}>

                    <Grid size={{xs: 6, xl: 4}}>
                        <BigTrackButton trackUUID={7}/>
                    </Grid>

                    <Grid size={{xs: 6, xl: 4}}>
                        <BigTrackButton trackUUID={8}/>
                    </Grid>

                    {isVisible &&
                        <Grid size={{xs: 6, xl: 4}}>
                            <BigTrackButton trackUUID={9}/>
                        </Grid>
                    }
                </Grid>

            </Box>

            <Box
                sx={{
                    paddingX: '2rem',
                    paddingBottom: '2rem',
                }}
            >
                <Stack direction='row' display="flex" justifyContent="space-between" alignItems='center'>
                    <h2>Social</h2>
                    <Button variant='text' onClick={() => {navigate('/social')}}>See more</Button>
                </Stack>

                <SocialActivityCard href='/someplace' />

            </Box>
        </main>
    );
}