import * as React from "react";

import {Box, Button, Tooltip} from "@mui/material";
import {useRightToggle} from "@/context/contextToggleVerboseFriends";
import {useNavigation} from "@/context/contextNavigation";
import PersonIcon from '@mui/icons-material/Person';
import {grey} from "@mui/material/colors";

export default function FriendElement({ name, imagePath, size }) {

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

                        padding: '0',
                        margin: '0',

                        borderRadius: '10px',
                        display: 'flex',
                        justifyContent: 'flex-start', // Align content to the left
                        textAlign: 'left',
                        color: 'white',

                        transition: 'color 0.3s ease',

                        '&:hover': {
                            color: 'primary.main',
                            '& .child-to-hover': {
                                backgroundColor: 'primary.dark', // Darken on hover
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
                            display: 'flex', // Enable flexbox
                            alignItems: 'center', // Center vertically
                            justifyContent: 'center', // Center horizontally (optional)

                            backgroundColor: grey[900],
                            color: 'primary.contrastText',
                            padding: '8px',
                            borderRadius: '10px',
                            boxShadow: 1,

                            transition: 'background-color 0.3s ease',

                            fontSize: '2rem',

                        }}
                    >

                        <PersonIcon fontSize="inherit" />
                    </Box>


                    {isToggled &&
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
                            {name}
                        </Box>
                    }
                </Button>
            </Tooltip>
        </>
    )
}