import * as React from 'react';
import {Button, Card, CardContent, Typography} from "@mui/material";
import {useRoute} from "@/context/RouteContext";
import Grid from "@mui/material/Grid2";
import ImageLoader from "@/components/elements/generic/ImageLoader";


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
                            maxWidth: '40rem',
                            width: '80vw',
                            minWidth: '20rem',
                        }}
                    >
                        <ImageLoader
                            src={[
                                'https://picsum.photos/3000',
                                'https://picsum.photos/100',
                            ]}
                            title='Splash Image'
                            width='100%'
                            height='10rem'
                            objectFit='cover'
                        />
                        <CardContent
                            sx={{
                                padding: '3rem',
                                paddingTop: '2rem',
                                marginBottom: '1.3rem',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                            }}
                        >
                            <Typography
                                variant='h4'
                                sx={{
                                    fontWeight: 'bold',
                                    marginBottom: '0.5rem'
                                }}
                            >
                                Welcome to Tracklink
                            </Typography>

                            <Typography
                                variant='h6'
                                sx={{
                                    fontSize: 'clamp(0.8rem, 2.0vw, 1rem)',
                                }}
                            >
                                Tracklink is a project management solution for music artists, producers and engineers.
                            </Typography>

                            <Button
                                fullWidth
                                variant='contained'
                                size='large'
                                onClick={() => {
                                    navigate('login')
                                }}
                                sx={{
                                    marginTop: '2rem',
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