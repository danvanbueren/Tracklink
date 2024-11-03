import * as React from "react";

import {Box, Divider} from "@mui/material";

import PersonAddIcon from '@mui/icons-material/PersonAdd';

import {useRightToggle} from "@/context/contextToggleVerboseFriends";

import FriendElement from "@/comp/FriendElement";
import BigButton from "@/comp/BigButton";


export default function Friends(props) {

    const { toggle: rightToggle } = useRightToggle();

    const { isToggled = true } = useRightToggle();

    return (
    <>
        <Box
            sx={{
                minHeight: '100%',
                maxHeight: '100%',

                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',

                padding: 0,
                paddingLeft: 0,
                paddingRight: 0,
                margin: 0,
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
                }}
            >

                <Box sx={{ height: '1rem' }}></Box>

                <FriendElement name='Dan Van Bueren' imagePath='https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-6/458761771_27479483351650579_285909054981703462_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=jj_Jv7MHb5UQ7kNvgFk6_6I&_nc_zt=23&_nc_ht=scontent-dus1-1.xx&_nc_gid=A2jy4xEKfLrOS8zw_hPsNPR&oh=00_AYA56m1YL_7Sp8aqY71qv5XM9jSiu0-BHQzGkWJY6ZGFLw&oe=672C6639' />

                <Box sx={{ height: '1rem' }}></Box>

                <FriendElement name='Owen Tabor' imagePath='https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-6/358373642_3405586719680385_7555361372614125702_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=NeNqeC0Ydw4Q7kNvgEHrcqU&_nc_zt=23&_nc_ht=scontent-dus1-1.xx&_nc_gid=Ae-gmt0V9H1k1z1mTMN_aWT&oh=00_AYDqFcYKnaxJhgdoEzwtqUYDs0Ga5i1Myq2oy163tCCpGw&oe=672C819D'/>

                <Box sx={{ height: '1rem' }}></Box>

                <FriendElement name='Dustin Robbins' imagePath='https://cdn.discordapp.com/attachments/391377440112640001/1302407600775626803/dustingoogle-1.png?ex=67280119&is=6726af99&hm=6f269d70ec8f86aabdd8a690f473b6c56999a58fde8b7aec3aae80441d847147&'/>

                <Box sx={{ height: '1rem' }}></Box>

                <FriendElement name='Kros' />

                <Box sx={{ height: '1rem' }}></Box>

                <FriendElement name='Emmie' />

                <Box sx={{ height: '1rem' }}></Box>

                <FriendElement name='Dixie' />

                <Box sx={{ height: '1rem' }}></Box>

                <FriendElement name='Aaron Knotts' />

                <Box sx={{ height: '1rem' }}></Box>

                <FriendElement name='Levi Valentine' />
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
                    icon={<PersonAddIcon fontSize="large" />}
                    text={'Add Friend'}
                    href={'/addfriend'}
                />
            </Box>
        </Box>
    </>
    )
}