import {Box, Button, IconButton, TextField, Typography} from "@mui/material";
import * as React from "react";
import SettingsIcon from '@mui/icons-material/Settings';
import Grid from "@mui/material/Grid2";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import {useNavigation} from "@/context/contextNavigation";

export default function Header(props) {

    // Routing
    const { navigateTo, isNavigating } = useNavigation();
    const handleNavigate = (destination) => {
        if (isNavigating) {
            return;
        }
        navigateTo(destination);
    };

    // Hide search bar on `/home`
    const { currentPage } = useNavigation();

    let searchBar;

    if(currentPage !== '/home') {
        searchBar =
        <TextField
            fullWidth
            label="Search"
            id="fullWidth"
        />

    }

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
                                onClick={() => handleNavigate('/')}
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

                        {searchBar}


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
                                color='white'
                                sx={{
                                    marginRight: '1rem',

                                    color: 'white',
                                    transition: 'color 0.3s ease',
                                    '&:hover': {
                                        color: 'primary.main',
                                    },
                                }}
                            >
                                <DarkModeIcon />
                            </IconButton>

                            <IconButton
                                onClick={() => handleNavigate('/settings')}
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

                        </Box>
                    </Grid>
                </Grid>





            </Box>
        </>
    )
}