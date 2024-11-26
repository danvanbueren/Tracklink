import {useRoute} from "@/context/RouteContext";
import {Box, Card, Divider, Stack, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import * as React from "react";
import StaticUserAvatar from "@/components/elements/StaticUserAvatar";
import PlayImmediatelyButton from "@/components/elements/audioControls/PlayImmediatelyButton";
import AddToQueueButton from "@/components/elements/audioControls/AddToQueueButton";

export default function SocialActivityCard(props) {

    // Routing
    const { navigate } = useRoute();



    return (
        <>
                <Card
                    sx={{
                        p: '1rem',
                        outline: '1px solid',
                        outlineColor: 'background.default',
                        width: '100%',
                        backgroundColor: '#171717',
                        transition: 'background-color 0.3s ease',
                    }}
                >

                    <Grid container spacing={2} display='flex' justifyContent='space-between'>


                        <Grid size='auto' >
                            <Box>
                                {/* User avatar */}
                                <StaticUserAvatar userUUID='1' />
                            </Box>
                        </Grid>

                        <Grid size='auto'>
                            <Typography>name</Typography>
                        </Grid>

                    </Grid>

                    <Box>
                        {/* User comment */}
                        <Typography>Some comment about this...</Typography>
                    </Box>
                    <Divider sx={{marginTop: '1rem'}} />
                    <Stack sx={{marginTop: '1rem'}} direction='row' display='flex' alignItems='center'>
                        <PlayImmediatelyButton trackUUID={1} />
                        <AddToQueueButton trackUUID={1} />
                        <Typography variant="h5" paddingX='2rem'>file_name_123.mp3</Typography>
                    </Stack>

                </Card>
        </>
    );
}