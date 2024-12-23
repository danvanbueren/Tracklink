import {Box, Button, IconButton, TextField, Typography} from "@mui/material";
import * as React from "react";
import SettingsIcon from '@mui/icons-material/Settings';
import Grid from "@mui/material/Grid2";
import LogoutIcon from '@mui/icons-material/Logout';
import {useRoute} from "@/context/RouteContext";

export default function Header(props) {

    // Routing
    const { navigate, currentRoute, logoutAuth } = useRoute();

    return (
        <>
            <Box
                sx={{
                    height: '5rem',
                    display: 'flex', // Enable flexbox
                    alignItems: 'center', // Center vertically
                    width: '100%',
                }}
            >
                <Grid container sx={{width: '100%',}}>
                    <Grid size="grow">
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                height: '100%',
                                width: '100%',
                            }}
                        >
                            <Button
                                color='white'
                                onClick={() => navigate('/')}
                            >
                                <Typography
                                    variant='h4'
                                    sx={{
                                        fontWeight: '700',
                                        fontStyle: 'italic',
                                        fontSize: '2rem',    // Optional: Customize font size
                                        paddingRight: '0.5rem'
                                    }}

                                >
                                    Tracklink
                                </Typography>
                            </Button>
                        </Box>
                    </Grid>

                    <Grid size={4}>
                        {(currentRoute !== '/search' && currentRoute !== '/') ?
                            <TextField
                                fullWidth
                                label="Search"
                                id="fullWidth"
                            /> : null
                        }
                    </Grid>

                    <Grid size="grow">
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                height: '100%',
                                width: '100%',
                            }}
                        >

                            <IconButton
                                onClick={() => navigate('/settings')}
                                color='white'
                                sx={{
                                    color: 'white',
                                    transition: 'color 0.3s ease',
                                    '&:hover': {
                                        color: 'primary.main',
                                    },

                                    marginRight: '1rem'
                                 }}
                            >
                                <SettingsIcon />
                            </IconButton>

                            <IconButton
                                color='white'
                                onClick={() => {logoutAuth()}}
                                sx={{
                                    marginRight: '1rem',

                                    color: 'white',
                                    transition: 'color 0.3s ease',
                                    '&:hover': {
                                        color: 'primary.main',
                                    },
                                }}
                            >
                                <LogoutIcon />
                            </IconButton>

                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}