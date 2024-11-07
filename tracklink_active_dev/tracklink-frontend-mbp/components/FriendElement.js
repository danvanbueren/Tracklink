import * as React from "react";

import {Box, Button, Tooltip, Typography} from "@mui/material";
import {useRightToggle} from "@/context/contextToggleVerboseFriends";
import {useNavigation} from "@/context/contextNavigation";
import PersonIcon from '@mui/icons-material/Person';
import {grey} from "@mui/material/colors";

export default function FriendElement({ name, imagePath, size, timeLastActive }) {


    // if online, set activity bubble to green
    // if away for 5 minutes or more, set to yellow
    // if away for 30 minutes or more, set to red

    // Compare times for text status
    function getActivityStatus(type) {

        const minute = 60;
        const hour = 60 * minute;
        const day = 24 * hour;
        const month = 30 * day;
        const year = 12 * month;

        const currentTimestamp = Date.now();
        const timeDifference = currentTimestamp - timeLastActive;

        switch(type) {
            case 'color':

                if (!timeLastActive) {
                    return 'grey';
                } else if (timeDifference < 0) {
                    return 'grey'
                } else if (timeDifference < 5 * minute) {
                    return 'success.main';
                } else if (timeDifference < 30 * minute) {
                    return 'warning.main';
                } else {
                    return 'error.main';
                }

            case 'text':

                if (!timeLastActive) {
                    return 'Unknown';
                } else if (timeDifference < 0) {
                    return 'Calc error'
                } else if (timeDifference < minute) {
                    return 'Active now';
                } else if (timeDifference < hour) {
                    const minutesAgo = Math.floor(timeDifference / minute);
                    return `Active ${minutesAgo} min${minutesAgo !== 1 ? 's' : ''} ago`;
                } else if (timeDifference < day) {
                    const hoursAgo = Math.floor(timeDifference / hour);
                    return `Active ${hoursAgo} hr${hoursAgo !== 1 ? 's' : ''} ago`;
                } else if (timeDifference < month) {
                    const daysAgo = Math.floor(timeDifference / day);
                    return `Active ${daysAgo} day${daysAgo !== 1 ? 's' : ''} ago`;
                } else if (timeDifference < year) {
                    const monthsAgo = Math.floor(timeDifference / month);
                    return `Active ${monthsAgo} mo${monthsAgo !== 1 ? 's' : ''} ago`;
                } else {
                    return 'Inactive';
                }
        }
    }

    // Routing
    const { navigateTo, isNavigating } = useNavigation();
    const handleNavigate = (destination) => {
        if (isNavigating) {
            return;
        }
        navigateTo(destination);
    };

    // Toggle drawer
    const { isToggled = true } = useRightToggle();

    // Tooltip opacity
    const tooltipOpacity = isToggled ? 0 : 1;


    if (size === undefined)
        size = '2.9rem';

    return (
        <>
            <Tooltip
                title={name}
                placement="right"
                PopperProps={{
                    sx: {
                        '&[data-popper-placement]': {
                            opacity: tooltipOpacity,
                        },
                    },
                }}
                arrow
            >

                <Button
                    fullWidth
                    variant="text"
                    size="large"
                    sx={{
                        minWidth: '0',
                        maxWidth: '100%',
                        padding: '0',
                        margin: '0',
                        borderRadius: '100%',
                        borderTopRightRadius: '5rem',
                        borderBottomRightRadius: '5rem',
                        display: 'flex',
                        justifyContent: 'flex-start', // Align content to the left
                        textAlign: 'left',
                        color: 'white',
                        transition: 'color 0.3s ease, border-radius 0.15s ease',
                        '&:hover': {
                            color: 'primary.main',
                            borderRadius: '10px',

                            '& .child-to-hover': {
                                backgroundColor: 'primary.dark', // Darken on hover
                                borderRadius: '10px',
                            }
                        },
                        '&:active': {
                            '& .child-to-hover': {
                                backgroundColor: 'primary.light', // Lighten on active
                            }
                        },

                        textTransform: 'none',
                    }}
                >
                    <Box
                        className="child-to-hover"
                        component="div" // Ensures it's treated as a block-level element
                        sx={{
                            position: 'relative',
                            display: 'flex', // Enable flexbox
                            alignItems: 'center', // Center vertically
                            justifyContent: 'center', // Center horizontally (optional)

                            backgroundColor: grey[900],
                            color: 'primary.contrastText',
                            padding: '8px',
                            borderRadius: '50%',
                            boxShadow: 1,

                            transition: 'background-color 0.3s ease, border-radius 0.3s ease',

                            fontSize: '2rem',

                        }}
                    >

                        <PersonIcon fontSize="inherit" />

                        <Box
                            component="span"
                            sx={{
                                position: 'absolute',
                                bottom: '-0.25rem',
                                right: '-0.25rem',
                                width: '1.2rem',
                                height: '1.2rem',
                                borderRadius: '50%',
                                backgroundColor: getActivityStatus('color'),
                                border: '0.25rem solid #121212',
                            }}
                        />

                    </Box>


                    {isToggled &&
                        <Box>
                            <Box
                                sx={{
                                    marginLeft: '20px',
                                    paddingRight: '15px',
                                    fontSize: '0.9rem',

                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',

                                    maxWidth: '7rem',
                                }}
                            >
                                <Typography fontSize={15}>{name}</Typography>
                            </Box>
                            <Box
                                sx={{
                                    marginLeft: '20px',
                                    paddingRight: '15px',
                                    fontSize: '0.9rem',

                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',

                                    maxWidth: '7rem',
                                }}
                            >
                                <Typography fontSize={10} color='#999'>{getActivityStatus('text')}</Typography>
                            </Box>
                        </Box>
                    }
                </Button>
            </Tooltip>
        </>
    )
}