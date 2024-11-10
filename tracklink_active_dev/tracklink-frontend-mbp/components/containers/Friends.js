import * as React from "react";

import {Box, Divider} from "@mui/material";

import PersonAddIcon from '@mui/icons-material/PersonAdd';

import {useRightToggle} from "@/context/contextToggleVerboseFriends";

import FriendElement from "@/components/elements/FriendElement";
import BigButton from "@/components/elements/BigButton";
import {useLocalRouter} from "@/context/LocalRouterContext";
import {useRoute} from "@/context/RouteContext";

export default function Friends(props) {

    // Routing
    const { navigate, currentRoute } = useRoute();

    const { toggle: rightToggle, isToggled = true } = useRightToggle();

    return (
    <>
        <Box
            sx={{
                minHeight: '100%',
                maxHeight: '1rem',

                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',

                padding: 0,
                paddingLeft: 0,
                paddingRight: 0,
                margin: 0,

                overflow: 'auto',
            }}
        >
            <Box
                sx={{
                    paddingRight: '20px',
                }}>
                <Box
                    sx={{
                        height: '5rem',
                        display: 'flex', // Enable flexbox
                        alignItems: 'center', // Center vertically
                    }}
                >
                    <BigButton
                        isToggleController={true}
                        isToggled={isToggled}
                        onClick={rightToggle}
                    />
                </Box>

                <Divider />

                <Box sx={{ height: '10px' }}></Box>
            </Box>
            {/* nav Buttons */}
            <Box
                sx={{
                    paddingRight: '20px',
                    overflow: 'auto',
                    flex: 1,
                    minHeight: '5rem',
                }}
            >

                <FriendElement friendUUID='1' />
                <FriendElement />
                <FriendElement />
                <FriendElement />
                <FriendElement />
                <FriendElement />
                <FriendElement />
                <FriendElement />
                <FriendElement />
                <FriendElement />



            </Box>

            {/* Snapped to bottom */}
            <Box
                sx={{
                    paddingRight: '20px',
                }}
            >
                <Box sx={{ height: '10px' }}></Box>

                <Divider />

                <Box sx={{ height: '30px' }}></Box>

                <BigButton
                    isToggled={isToggled}
                    icon={<PersonAddIcon fontSize="inherit" />}
                    text={'Add Friend'}
                    href="/addfriend"
                    onClick={() => navigate('/addfriend')}
                />
            </Box>
        </Box>
    </>
    )
}