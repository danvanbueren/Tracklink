import * as React from 'react';
import {Button, Card, CardContent, Skeleton, Typography} from "@mui/material";
import {useRoute} from "@/context/RouteContext";
import Grid from "@mui/material/Grid2";


export default function LandingPage({ slug }) {

    const { navigate } = useRoute();

    return (
        <main>

            <Grid container spacing={2}>
                <Grid size='grow' />

                <Grid size='auto'>
                    <Card
                        sx={{
                            padding: '0rem',
                            marginTop: '20vh',
                    }}
                    >

                        <Skeleton
                            variant="rectangular"
                            animation="wave"
                            sx={{
                                height: '15vh',
                                width: '100%'
                            }}
                        />

                        <CardContent
                            sx={{
                                padding: '2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Typography variant='h3' sx={{ fontWeight: 'bold' }}>Welcome to Tracklink</Typography>
                            <Skeleton animation="wave">
                                <Typography variant='h6' sx={{ fontSize: '1rem', marginTop: '1rem', marginBottom: '2rem' }}>description</Typography>
                            </Skeleton>
                            <Button
                                fullWidth
                                variant='contained'
                                size='large'
                                onClick={() => {
                                    navigate('login')
                                }}
                            >
                                Get Started
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size='grow'/>
            </Grid>


        </main>
    );
}