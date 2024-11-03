import * as React from "react";

import {Box, Divider} from "@mui/material";

import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ScheduleIcon from '@mui/icons-material/Schedule';
import StarIcon from '@mui/icons-material/Star';
import InventoryIcon from '@mui/icons-material/Inventory';
import DeleteIcon from '@mui/icons-material/Delete';

import {useLeftToggle} from "@/context/contextToggleVerboseNav";
import BigButton from "@/comp/BigButton";

export default function Nav(props) {

    const { toggle: leftToggle } = useLeftToggle();

    const { isToggled = true } = useLeftToggle();

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
                        paddingLeft: '20px',
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
                            onClick={leftToggle}
                        />
                    </Box>

                    <Divider />

                    <Box sx={{ height: '10px' }}></Box>
                </Box>

                {/* nav Buttons */}
                <Box
                    sx={{
                        paddingLeft: '20px',
                        overflow: 'auto',
                        flex: 1,
                    }}
                >
                    <Box sx={{ height: '1rem' }}></Box>

                    <BigButton
                        isToggled={isToggled}
                        icon={<HomeIcon fontSize="large" />}
                        text={'Home'}
                        href="/home"
                    />

                    <Box sx={{ height: '2.5rem' }}></Box>

                    <BigButton
                        isToggled={isToggled}
                        icon={<MusicNoteIcon fontSize="large" />}
                        text={'Tracks'}
                        href="/tracks"
                    />

                    <Box sx={{ height: '1rem' }}></Box>

                    <BigButton
                        isToggled={isToggled}
                        icon={<LibraryMusicIcon fontSize="large" />}
                        text={'Projects'}
                        href="/projects"
                    />

                    <Box sx={{ height: '2.5rem' }}></Box>

                    <BigButton
                        isToggled={isToggled}
                        icon={<PeopleAltIcon fontSize="large" />}
                        text={'Collab'}
                        href="/collab"
                    />

                    <Box sx={{ height: '1rem' }}></Box>

                    <BigButton
                        isToggled={isToggled}
                        icon={<ScheduleIcon fontSize="large" />}
                        text={'Recent'}
                        href="/recent"
                    />

                    <Box sx={{ height: '1rem' }}></Box>

                    <BigButton
                        isToggled={isToggled}
                        icon={<StarIcon fontSize="large" />}
                        text={'Starred'}
                        href="/starred"
                    />

                    <Box sx={{ height: '2.5rem' }}></Box>

                    <BigButton
                        isToggled={isToggled}
                        icon={<InventoryIcon fontSize="large" />}
                        text={'Archive'}
                        href="/archive"
                    />

                    <Box sx={{ height: '1rem' }}></Box>

                    <BigButton
                        isToggled={isToggled}
                        icon={<DeleteIcon fontSize="large" />}
                        text={'Trash'}
                        href="/trash"
                    />
                </Box>

                {/* Snapped to bottom */}
                <Box
                    sx={{ paddingLeft: '20px', }}
                >
                    <Box sx={{ height: '10px' }}></Box>

                    <Divider />

                    <Box sx={{ height: '30px' }}></Box>

                    <BigButton
                        isToggled={isToggled}
                        icon={<AddIcon fontSize="large" />}
                        text={'New'}
                        href="/new"
                    />
                </Box>
            </Box>
        </>
    )
}