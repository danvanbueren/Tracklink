import * as React from 'react';
import {useState} from 'react';
import {Box, Button, Card, CardContent, CircularProgress, TextField, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import ImageLoader from "@/components/elements/generic/ImageLoader";
import {useRoute} from "@/context/RouteContext";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export default function LoginPage({ slug }) {

    const { navigate, loginAuth, isAuthenticated } = useRoute();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [usernameUntouched, setUsernameUntouched] = useState(true);
    const [passwordUntouched, setPasswordUntouched] = useState(true);

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // Handle form submission
    const handleSubmit = () => {
        setError("");
        setPasswordUntouched(false)
        setUsernameUntouched(false)

        if (!username.trim() && !password) {
            return;
        }

        setLoading(true);

        try {
            loginAuth(username, password)
                .then(
                    response => {
                        console.log("Login response received:", {response});
                        if (response) {
                            setError("");
                        } else {
                            setError("Login failed, please try again.");
                        }
                        setLoading(false);
                    }
                )
                .catch(
                    e => {
                        setError(e);
                        setLoading(false);
                    }
                )

        } finally {
            console.log("finally");
        }
    }

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
                                Sign In
                            </Typography>
                            
                            <TextField
                                label="Email"
                                variant="outlined"
                                fullWidth
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                onBlur={() => setUsernameUntouched(false)}
                                error={!usernameUntouched && !username.trim()}
                                helperText={!usernameUntouched && !username.trim() ? "This field is required" : null}
                                sx={{
                                    marginY: '0.5rem',
                                }}
                            />

                            <TextField
                                label="Password"
                                variant="outlined"
                                fullWidth
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onBlur={() => setPasswordUntouched(false)}
                                error={!passwordUntouched && !password}
                                helperText={!passwordUntouched && !password ? "This field is required" : null}
                                sx={{
                                    marginY: '0.5rem',
                                }}
                            />

                            <Typography
                                sx={{
                                    color: 'grey.500',
                                    fontSize: '0.875rem',
                                    marginTop: '1rem',
                                    marginBottom: '0.3rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                New to Tracklink?{'  '}
                                <Button
                                    variant="text"
                                    onClick={() => navigate('/register')}
                                    disabled={loading}
                                    sx={{
                                        textTransform: 'none',
                                        fontSize: '0.875rem',
                                        fontWeight: 'normal',
                                        padding: 0,
                                        paddingBottom: '0.05rem',
                                        paddingX: '0.2rem',
                                        minWidth: 'auto',
                                        marginLeft: '0.2rem',
                                    }}
                                >
                                    Sign up here!
                                </Button>
                            </Typography>

                            <Button
                                variant="text"
                                onClick={() => navigate('/resetpassword')}
                                disabled={loading}
                                sx={{
                                    textTransform: 'none',
                                    fontSize: '0.875rem',
                                    fontWeight: 'normal',
                                    padding: 0,
                                    marginY: '0.3rem',
                                    minWidth: 'auto',
                                }}
                            >
                                Lost access to your account?
                            </Button>

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
                                { !isAuthenticated &&
                                    <Button
                                        variant='outlined'
                                        size='large'
                                        onClick={() => {
                                            navigate('/')
                                        }}
                                        disabled={loading}
                                    >
                                        Back
                                    </Button>
                                }

                                { isAuthenticated &&
                                    <ThumbUpIcon color='success' fontSize="large"/>
                                }

                                { loading &&
                                    <CircularProgress />
                                }

                                { error &&
                                    <Typography
                                        color="error"
                                        sx={{
                                            margin: 0,
                                            padding: 0,
                                            fontSize: "0.875rem",
                                            fontWeight: 'bold',
                                    }}
                                    >
                                        {error}
                                    </Typography>
                                }
                                { !isAuthenticated &&
                                    <Button
                                        variant='contained'
                                        size='large'
                                        onClick={() => handleSubmit()}
                                        disabled={loading}
                                    >
                                        Next
                                    </Button>
                                }
                            </Box>


                        </CardContent>
                    </Card>
                </Grid>
                <Grid size='grow'/>
            </Grid>
        </main>
    );
}