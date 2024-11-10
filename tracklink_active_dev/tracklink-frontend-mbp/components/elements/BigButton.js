import * as React from "react";

import {Box, Button, Tooltip} from "@mui/material";

import BrokenImageIcon from '@mui/icons-material/BrokenImage';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import {useLocalRouter} from "@/context/LocalRouterContext";
import {useRoute} from "@/context/RouteContext";

export default function BigButton({ icon, text, onClick, isToggled, isToggleController, href }) {

    // Default values if props not passed
    if (icon === undefined)
        icon = <BrokenImageIcon fontSize="inherit" />
    if (text === undefined)
        text = 'Broken'


    // Override icon and text if it's a toggle controller
    if (isToggleController) {
        icon = <BrokenImageIcon fontSize="inherit" />;
        text = 'Toggle';
    }

    // Set tooltip opacity based on toggled state
    const tooltipOpacity = isToggled ? 0 : 1;

    // Default inactive styling - blue outline and icon
    let buttonSxHover = {
        '& .child-to-hover': {
            backgroundColor: 'rgba(25, 118, 210, 0.1)', // Lighten the background on hover
            color: 'primary.dark', // Change text color on hover
        }
    };
    let buttonSxActive = {};
    let boxSxBorder = '1px solid';
    let boxSxBgColor = '';
    let boxSxColor = '';

    // Routing
    const { currentRoute } = useRoute();

    if(currentRoute === href) {
        // Solid blue button with black icon
        buttonSxHover = {
            '& .child-to-hover': {
                backgroundColor: 'primary.dark', // Darken on hover
            }
        };
        buttonSxActive = {
            '& .child-to-hover': {
                backgroundColor: 'primary.light', // Lighten on active
            }
        };
        boxSxBorder = '';
        boxSxBgColor = 'primary.main';
        boxSxColor = 'primary.contrastText';
    }

    return (
        <>
            <Tooltip
                title={!isToggleController
                    ? text
                    : (
                        isToggled
                            ? 'Close'
                            : 'Open'
                    )
                }
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
                    onClick={onClick}
                    sx={{
                        minWidth: '0',

                        padding: '0',
                        borderRadius: '10px',
                        display: 'flex',
                        justifyContent: 'flex-start', // Align content to the left
                        textAlign: 'left',

                        '&:hover': buttonSxHover,
                        '&:active': buttonSxActive,
                    }}
                >
                    <Box
                        className="child-to-hover"
                        component="div" // Ensures it's treated as a block-level element
                        sx={{
                            display: 'flex', // Enable flexbox
                            alignItems: 'center', // Center vertically
                            justifyContent: 'center', // Center horizontally (optional)

                            border: boxSxBorder,

                            backgroundColor: boxSxBgColor,
                            color: boxSxColor,
                            padding: '8px',
                            borderRadius: '10px',
                            boxShadow: 1,

                            transition: 'background-color 0.3s ease',

                            fontSize: '2rem',

                        }}
                    >
                        {!isToggleController
                            ? icon
                            : (
                                isToggled
                                    ? <CloseFullscreenIcon fontSize="inherit" />
                                    : <OpenInFullIcon fontSize="inherit" />
                            )
                        }
                    </Box>


                    {isToggled &&
                        <Box
                            sx={{
                                marginLeft: '20px',
                                paddingRight: '15px',
                                fontSize: '0.9rem',
                            }}
                        >
                            {!isToggleController
                                ? text
                                : (
                                    isToggled
                                        ? 'Close'
                                        : 'Open'
                                )
                            }
                        </Box>
                    }
                </Button>
            </Tooltip>
        </>
    )
}