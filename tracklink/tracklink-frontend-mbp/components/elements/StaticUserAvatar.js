import * as React from "react";

import {Box, Button, Stack, Typography} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import {grey} from "@mui/material/colors";
import {useRoute} from "@/context/RouteContext";

export default function StaticUserAvatar({ userUUID }) {

    // Routing
    const { navigate } = useRoute();

    // SIMULATED DATABASE ACTION
    let name = 'John';
    const [imagePath, setImagePath] = React.useState('');
    const [timeLastActive, setTimeLastActive] = React.useState(Date.now());
    const [timeOfAction, setTimeOfAction] = React.useState(Date.now());
    React.useEffect(() => {
        setImagePath('https://picsum.photos/' + String(Math.floor(Math.random() * 101) + 200));
        setTimeLastActive(Date.now() - Math.floor(Math.random() * 100000));
        setTimeOfAction(Date.now() - Math.floor(Math.random() * 100000));
    }, []);



    // Compare times for text status
    function getActivityStatus() {

        const minute = 60;

        const currentTimestamp = Date.now();
        const timeDifference = currentTimestamp - timeLastActive;

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

    }

    function getPrettyTime() {

        const minute = 60;
        const hour = 60 * minute;
        const day = 24 * hour;
        const month = 30 * day;
        const year = 12 * month;

        const currentTimestamp = Date.now();
        const timeDifference = currentTimestamp - timeOfAction;

        if (!timeLastActive) {
            return 'Unknown';
        } else if (timeDifference < 0) {
            return 'Calc error'
        } else if (timeDifference < minute) {
            return 'Just now';
        } else if (timeDifference < hour) {
            const minutesAgo = Math.floor(timeDifference / minute);
            return `${minutesAgo} min${minutesAgo !== 1 ? 's' : ''} ago`;
        } else if (timeDifference < day) {
            const hoursAgo = Math.floor(timeDifference / hour);
            return `${hoursAgo} hr${hoursAgo !== 1 ? 's' : ''} ago`;
        } else if (timeDifference < month) {
            const daysAgo = Math.floor(timeDifference / day);
            return `${daysAgo} day${daysAgo !== 1 ? 's' : ''} ago`;
        } else if (timeDifference < year) {
            const monthsAgo = Math.floor(timeDifference / month);
            return `${monthsAgo} mo${monthsAgo !== 1 ? 's' : ''} ago`;
        } else {
            return 'Inactive';
        }
    }

    return (
        <Box
            sx={{
                paddingBottom: '0.7rem',
            }}
        >

            <Button
                className="child-container"
                variant="text"
                size="large"
                onClick={() => navigate('/user/' + String(userUUID))}
                sx={{
                    minWidth: '0',
                    maxWidth: '100%',
                    padding: '0',
                    margin: '0',
                    borderRadius: '100%',
                    borderTopRightRadius: '5rem',
                    borderBottomRightRadius: '5rem',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    textAlign: 'left',
                    color: 'white',
                    transition: 'color 0.3s ease, border-radius 0.15s ease',
                    backgroundColor: 'transparent',
                    '&:hover': {
                        color: 'primary.main',
                        borderRadius: '10px',

                        '& .child-top-level': {
                            backgroundColor: 'primary.dark',
                            borderRadius: '10px',
                            border: '2px solid',
                            borderColor: 'primary.dark',
                        },
                        '& .child-image': {
                            backgroundColor: 'primary.dark',
                            borderRadius: '10px',
                        },
                    },
                    '&:active': {
                        '& .child-to-hover': {
                            backgroundColor: 'primary.light',
                        }
                    },

                    textTransform: 'none',
                }}
            >
                <Box
                    className="child-top-level"
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
                        border: '2px solid',
                        borderColor: '#232323',

                        transition: 'background-color 0.3s ease, border-radius 0.3s ease, border-color 0.3s ease',

                        fontSize: '2rem',

                    }}
                >
                    { imagePath &&
                        <Box
                            className="child-image"
                            sx={{
                                position: 'absolute',
                                overflow: 'hidden',
                                maxWidth: '100%',
                                maxHeight: '100%',

                                backgroundColor: grey[900],
                                borderRadius: '50%',

                                transition: 'background-color 0.3s ease, border-radius 0.3s ease',
                            }}
                        >
                            <img
                                src={imagePath}
                                alt='Avatar'
                                loading='lazy'
                                width='70px'
                                height='70px'
                            />
                        </Box>
                    }

                    <PersonIcon fontSize="inherit"/>

                    <Box
                        component="span"
                        sx={{
                            position: 'absolute',
                            bottom: '-0.25rem',
                            right: '-0.25rem',
                            width: '1.2rem',
                            height: '1.2rem',
                            borderRadius: '50%',
                            backgroundColor: getActivityStatus(),
                            border: '0.25rem solid #232323',
                        }}
                    />

                </Box>



                <Box>
                    <Box
                        sx={{
                            marginLeft: '20px',
                            paddingRight: '15px',
                            fontSize: '0.9rem',

                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',

                            maxWidth: '15rem',
                        }}
                    >
                        <Typography
                            variant='h6'
                            fontSize='1.2rem'
                            sx={{
                                overflow: 'hidden',
                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis',
                                padding: 0,
                                margin: 0,
                            }}
                        >
                            {name} edited lyrics.
                        </Typography>
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
                        <Typography fontSize={10} color='#ccc'>{getPrettyTime()}</Typography>
                    </Box>
                </Box>

            </Button>
        </Box>
    )
}