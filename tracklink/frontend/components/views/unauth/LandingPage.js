import * as React from 'react';
import {Button, Card} from "@mui/material";
import {useRoute} from "@/context/RouteContext";
import Grid from "@mui/material/Grid2";


export default function LandingPage({ slug }) {

    const { navigate } = useRoute();

    return (
        <main>

            <Grid container spacing={2}>
                <Grid size='grow' />

                <Grid size='auto'>

                    <h1>Welcome to Tracklink</h1>

                    <h4>Tracklink description</h4>

                    <Card sx={{}}>
                        <Button
                            fullWidth
                            variant='contained'
                            onClick={() => {
                                navigate('login')
                            }}
                        >
                            Get Started
                        </Button>
                    </Card>

                </Grid>

                <Grid size='grow'/>
            </Grid>


        </main>
    );
}