import * as React from "react";

import {Box, Divider} from "@mui/material";

import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import ScheduleIcon from '@mui/icons-material/Schedule';
import StarIcon from '@mui/icons-material/Star';
import InventoryIcon from '@mui/icons-material/Inventory';
import DeleteIcon from '@mui/icons-material/Delete';
import GroupsIcon from '@mui/icons-material/Groups';
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';

import BigNavigationButton from "@/components/elements/BigNavigationButton";
import {useRoute} from "@/context/RouteContext";
import {useGlobalStyle} from "@/context/GlobalStyleContext";

export default function Navigation(props) {

    // Routing
    const { navigate } = useRoute();

    const { navigationVerbose, toggleNavigationVerbose } = useGlobalStyle();

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
                        <BigNavigationButton
                            isToggleController={true}
                            isToggled={navigationVerbose}
                            onClick={toggleNavigationVerbose}
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

                    <BigNavigationButton
                        isToggled={navigationVerbose}
                        icon={<HomeIcon fontSize="inherit" />}
                        text={'Home'}
                        href="/"
                        onClick={() => navigate('/')}
                    />

                    <Box sx={{ height: '2.5rem' }}></Box>

                    <BigNavigationButton
                        isToggled={navigationVerbose}
                        icon={<MusicNoteIcon fontSize="inherit" />}
                        text={'Tracks'}
                        href="/tracks"
                        onClick={() => navigate('/tracks')}
                    />

                    <Box sx={{ height: '1rem' }}></Box>

                    <BigNavigationButton
                        isToggled={navigationVerbose}
                        icon={<LibraryMusicIcon fontSize="inherit" />}
                        text={'Projects'}
                        href="/projects"
                        onClick={() => navigate('/projects')}
                    />

                    <Box sx={{ height: '1rem' }}></Box>

                    <BigNavigationButton
                        isToggled={navigationVerbose}
                        icon={<InterpreterModeIcon fontSize="inherit" />}
                        text={'Collab'}
                        href="/collab"
                        onClick={() => navigate('/collab')}
                    />

                    <Box sx={{ height: '2.5rem' }}></Box>

                    <BigNavigationButton
                        isToggled={navigationVerbose}
                        icon={<ScheduleIcon fontSize="inherit" />}
                        text={'Recent'}
                        href="/recent"
                        onClick={() => navigate('/recent')}
                    />

                    <Box sx={{ height: '1rem' }}></Box>

                    <BigNavigationButton
                        isToggled={navigationVerbose}
                        icon={<StarIcon fontSize="inherit" />}
                        text={'Starred'}
                        href="/starred"
                        onClick={() => navigate('/starred')}
                    />

                    <Box sx={{ height: '1rem' }}></Box>

                    <BigNavigationButton
                        isToggled={navigationVerbose}
                        icon={<GroupsIcon fontSize="inherit" />}
                        text={'Social'}
                        href="/social"
                        onClick={() => navigate('/social')}
                    />

                    <Box sx={{ height: '2.5rem' }}></Box>

                    <BigNavigationButton
                        isToggled={navigationVerbose}
                        icon={<InventoryIcon fontSize="inherit" />}
                        text={'Archive'}
                        href="/archive"
                        onClick={() => navigate('/archive')}
                    />

                    <Box sx={{ height: '1rem' }}></Box>

                    <BigNavigationButton
                        isToggled={navigationVerbose}
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

                    <BigNavigationButton
                        isToggled={navigationVerbose}
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