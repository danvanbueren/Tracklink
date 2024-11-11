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

import BigButton from "@/components/elements/BigButton";
import {useRoute} from "@/context/RouteContext";

export default function Navigation(props) {

    // Routing
    const { navigate } = useRoute();

    const { toggle: leftToggle, isToggled = true } = useLeftToggle();

    return (
        <>
            <Box
                sx={{
                    minHeight: '100%',
                    maxHeight: '1px',

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
                        minHeight: '5rem',
                    }}
                >
                    <Box sx={{ height: '1rem' }}></Box>

                    <BigButton
                        isToggled={isToggled}
                        icon={<HomeIcon fontSize="inherit" />}
                        text={'Home'}
                        href="/"
                        onClick={() => navigate('/')}
                    />

                    <Box sx={{ height: '2.5rem' }}></Box>

                    <BigButton
                        isToggled={isToggled}
                        icon={<MusicNoteIcon fontSize="inherit" />}
                        text={'Tracks'}
                        href="/tracks"
                        onClick={() => navigate('/tracks')}
                    />

                    <Box sx={{ height: '1rem' }}></Box>

                    <BigButton
                        isToggled={isToggled}
                        icon={<LibraryMusicIcon fontSize="inherit" />}
                        text={'Projects'}
                        href="/projects"
                        onClick={() => navigate('/projects')}
                    />

                    <Box sx={{ height: '2.5rem' }}></Box>

                    <BigButton
                        isToggled={isToggled}
                        icon={<PeopleAltIcon fontSize="inherit" />}
                        text={'Collab'}
                        href="/collab"
                        onClick={() => navigate('/collab')}
                    />

                    <Box sx={{ height: '1rem' }}></Box>

                    <BigButton
                        isToggled={isToggled}
                        icon={<ScheduleIcon fontSize="inherit" />}
                        text={'Recent'}
                        href="/recent"
                        onClick={() => navigate('/recent')}
                    />

                    <Box sx={{ height: '1rem' }}></Box>

                    <BigButton
                        isToggled={isToggled}
                        icon={<StarIcon fontSize="inherit" />}
                        text={'Starred'}
                        href="/starred"
                        onClick={() => navigate('/starred')}
                    />

                    <Box sx={{ height: '2.5rem' }}></Box>

                    <BigButton
                        isToggled={isToggled}
                        icon={<InventoryIcon fontSize="inherit" />}
                        text={'Archive'}
                        href="/archive"
                        onClick={() => navigate('/archive')}
                    />

                    <Box sx={{ height: '1rem' }}></Box>

                    <BigButton
                        isToggled={isToggled}
                        icon={<DeleteIcon fontSize="inherit" />}
                        text={'Trash'}
                        href="/trash"
                        onClick={() => navigate('/trash')}
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
                        icon={<AddIcon fontSize="inherit" />}
                        text={'New'}
                        href="/new"
                        onClick={() => navigate('/new')}
                    />
                </Box>
            </Box>
        </>
    )
}