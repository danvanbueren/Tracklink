import * as React from 'react';
import Grid from "@mui/material/Grid2";
import {Box, Button, Card, CardContent, Divider, TextField, Typography} from "@mui/material";
import ImageLoader from "@/components/elements/generic/ImageLoader";
import {useRoute} from "@/context/RouteContext";

export default function RegisterPage({ slug }) {

    const { navigate } = useRoute();

    return (
        <main>
            <Grid container spacing={2}>
                <Grid size='grow'/>
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
                                    marginBottom: '1rem'
                                }}
                            >
                                Create Account
                            </Typography>

                            <TextField
                                label="Email"
                                variant="outlined"
                                fullWidth
                                value={null}
                                onChange={(e) => null}
                                onBlur={() => null}
                                onKeyDown={(e) => null}
                                error={null}
                                helperText={null}
                                sx={{
                                    marginY: '0.5rem',
                                }}
                            />

                            <Divider sx={{marginY: '1rem', width: '100%'}}/>

                            <TextField
                                label="Password"
                                variant="outlined"
                                fullWidth
                                type="password"
                                value={null}
                                onChange={(e) => null}
                                onBlur={() => null}
                                onKeyDown={(e) => null}
                                error={null}
                                helperText={null}
                                sx={{
                                    marginY: '0.5rem',
                                }}
                            />

                            <TextField
                                label="Verify password"
                                variant="outlined"
                                fullWidth
                                type="password"
                                value={null}
                                onChange={(e) => null}
                                onBlur={() => null}
                                onKeyDown={(e) => null}
                                error={null}
                                helperText={null}
                                sx={{
                                    marginY: '0.5rem',
                                }}
                            />

                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '100%',
                                    marginTop: '1.5rem',
                                }}
                            >

                                <Button
                                    variant='outlined'
                                    size='large'
                                    onClick={() => {
                                        navigate('/login')
                                    }}
                                >
                                    Back
                                </Button>

                                <Button
                                    variant='contained'
                                    size='large'
                                    onClick={null}
                                >
                                    Next
                                </Button>

                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size='grow'/>
            </Grid>
        </main>
    );
}