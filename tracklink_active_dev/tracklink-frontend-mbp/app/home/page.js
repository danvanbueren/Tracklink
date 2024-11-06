'use client';

import * as React from 'react';
import {
    Box, Button, Card, CardMedia,
    FormControl, IconButton,
    InputAdornment,
    InputLabel,
    Menu,
    MenuItem,
    OutlinedInput,
    Select, Stack,
    TextField, Typography
} from "@mui/material";

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import {useState} from "react";
import {grey} from "@mui/material/colors";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import TrackSummaryButton from "@/components/TrackSummaryButton";

export default function Home() {

    const [type, setType] = React.useState('');

    const handleChange = (event) => {
        setType(event.target.value);
    };


    //


    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (action) => {
        console.log("Selected action:", action); // Perform specific action
        handleClose();
    };

    return (
        <main>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
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
                        <MenuItem onClick={() => handleMenuItemClick('Action 1')}>Action 1</MenuItem>
                        <MenuItem onClick={() => handleMenuItemClick('Action 2')}>Action 2</MenuItem>
                        <MenuItem onClick={() => handleMenuItemClick('Action 3')}>Action 3</MenuItem>
                    </Menu>
                </Box>
            </Box>

            <Box
                sx={{
                    paddingX: '2rem',
                }}
            >
                <h2>Recent</h2>

                <Stack direction="row" spacing={8} sx={{ minWidth: '100%', maxWidth: '100%' }}>
                    <Card sx={{p: '1rem', outline: '1px solid', outlineColor: 'background.default'}}>
                        <TrackSummaryButton />
                    </Card>
                    <Card sx={{p: '1rem', outline: '1px solid', outlineColor: 'background.default'}}>
                        <TrackSummaryButton />
                    </Card>
                    <Card sx={{p: '1rem', outline: '1px solid', outlineColor: 'background.default'}}>
                        <TrackSummaryButton />
                    </Card>
                </Stack>
            </Box>










        </main>
    );
}