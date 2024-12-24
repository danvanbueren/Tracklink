/** @jsxImportSource @emotion/react */

import * as React from 'react';
import {useEffect, useState} from 'react';

import {Box, Button, Card, CardContent, CircularProgress, TextField, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { css, keyframes } from "@emotion/react";

import ImageLoader from "@/components/elements/generic/ImageLoader";
import {useRoute} from "@/context/RouteContext";

const ripple = keyframes`
    0% {
        transform: translate(-50%, -50%) scale(0); /* Start at center, small */
        opacity: 1; /* Almost fully visible */
    }
    100% {
        transform: translate(-50%, -50%) scale(4); /* Expand outward */
        opacity: 0; /* Fully fade out */
    }
`;

const rippleEffect = css`
    position: relative; /* Ensure this is the parent positioning context */
    overflow: hidden; /* Prevent the ripple from spilling out */

    &::after {
        content: '';
        position: absolute;
        top: 50%; /* Start at the center of parent */
        left: 50%; /* Start at the center of parent */
        width: 10rem; /* Base diameter for the ripple */
        height: 10rem;
        background: rgba(255, 0, 0, 0.5); /* Semi-transparent ripple */
        border-radius: 50%; /* Ensure a circular shape */
        transform: translate(-50%, -50%) scale(0); /* Center the circle and shrink it */
        transform-origin: center; /* Ensure the animation grows from the center */
        animation: ${ripple} 0.6s ease-out; /* Animation timing */
        pointer-events: none; /* Ensure ripple doesn’t block clicks */
    }
`;

export default function LoginPage({ slug }) {

    const { navigate, loginAuth, isAuthenticated } = useRoute();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameHelperText, setUsernameHelperText] = useState('');
    const [passwordHelperText, setPasswordHelperText] = useState('');

    const [error, setError] = useState('');
    const [rippleTrigger, setRippleTrigger] = useState(false);

    const [loading, setLoading] = useState(false);
    const [readyForSubmit, setReadyForSubmit] = useState(false);

    const errorText = React.useRef();
    
    useEffect(() => {
        if (inputIsValid('username', false) && inputIsValid('password', false)) {
            setReadyForSubmit(true)
        } else {
            setReadyForSubmit(false)
        }
    }, [username, password]);
    
    useEffect(() => {
        if (error) {
            setRippleTrigger(true); // Trigger the ripple animation

            const timeout = setTimeout(() => {
                setRippleTrigger(false); // Reset the animation
            }, 600); // Duration matches the keyframes animation (0.6s)

            return () => clearTimeout(timeout); // Cleanup timeout on unmount
        }
    }, [error])

    const inputIsValid = (type, updateHelperText) => {
        function isValidEmail(input) {
            // Check for illegal characters
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+$/;
            if (!emailRegex.test(input)) {
                return false;
            }

            // Check for only one "@" and placement
            const symbolIndex = input.indexOf('@');
            if (symbolIndex === -1 || input.lastIndexOf('@') !== symbolIndex) {
                return false; // No "@" or multiple "@"
            }

            // Check for only one "." and placement
            const dotIndex = input.indexOf('.', symbolIndex); // Look for "." after "@"
            if (dotIndex === -1 || dotIndex <= symbolIndex + 1 || dotIndex === input.length - 1) {
                return false; // No ".", or invalid placement
            }

            // Check if the last character is a "." and return false
            if (input[input.length - 1] === '.') {
                return false;
            }

            return true;
        }

        switch(type) {
            case 'username':
                setUsername(username.trim())

                if (!username) {
                    updateHelperText && setUsernameHelperText('This field is required.')
                    return false
                }

                if (!isValidEmail(username)) {
                    updateHelperText && setUsernameHelperText('Provide a valid email address.')
                    return false
                }

                updateHelperText && setUsernameHelperText('')
                return true

            case 'password':
                if (!password) {
                    updateHelperText && setPasswordHelperText('This field is required.')
                    return false
                }

                updateHelperText && setPasswordHelperText('')
                return true
        }
    }

    const handleSubmit = () => {
        if (!inputIsValid('username', true))
            return

        if (!inputIsValid('password', true))
            return

        setError("");

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

        } catch (e) {
            setError(e);
            setLoading(false);
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
                                onBlur={() => { inputIsValid('username', true) }}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" && !loading && readyForSubmit) {
                                        handleSubmit()
                                    }
                                }}
                                error={ !!usernameHelperText }
                                helperText={ usernameHelperText ? usernameHelperText : null }
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
                                onBlur={() => { inputIsValid('password', true) }}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" && !loading && readyForSubmit) {
                                        handleSubmit()
                                    }
                                }}
                                error={ !!passwordHelperText }
                                helperText={ passwordHelperText ? passwordHelperText : null }
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
                                        ref={errorText}
                                        css={rippleTrigger && rippleEffect}
                                        sx={{
                                            margin: 0,
                                            padding: '0.5rem',
                                            paddingX: '1rem',
                                            fontSize: "0.875rem",
                                            fontWeight: 'bold',
                                            borderRadius: '1.5rem',
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
                                        disabled={loading || !readyForSubmit}
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