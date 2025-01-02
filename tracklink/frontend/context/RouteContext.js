'use client';

import {createContext, useContext, useState, useEffect} from 'react';
import {jwtDecode} from "jwt-decode";

const RouteContext = createContext();

export const RouteProvider = ({ children }) => {
    // TODO: Change for production build!! (unless running Dockerized, I guess)
    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000";

    const [currentRoute, setCurrentRoute] = useState('/');
    const [slug, setSlug] = useState(null);
    const [isHydrated, setIsHydrated] = useState(false);

    // holds last access token
    const [accessToken, setAccessToken] = useState(null);

    // holds result of checkAuth()
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    // Nav
    const navigate = (route) => {
        const [base, slugPart] = route.split('/').filter(Boolean);
        setCurrentRoute(`/${base || ''}`);
        setSlug(slugPart || null);
        window.history.pushState({}, '', route);
    };

    // Auth
    const loginAuth = async (username, password) => {
        const params = new URLSearchParams();
        params.append("grant_type", "password");
        params.append("username", username);
        params.append("password", password);
        params.append("scope", "");
        params.append("client_id", "");
        params.append("client_secret", "");

        try {
            const response = await fetch(API_URL + "/auth/token", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Accept": "application/json",
                },
                body: params.toString(),
            });

            const data = await response.json();
            console.log('Data response', {data});

            if (response.ok && data.access_token) {
                localStorage.setItem('access_token', data.access_token);
                setAccessToken(data.access_token)
                navigate('/');
                return true
            }
        } catch (err) {
            console.log("Login completely failed!");
        }

        console.log('Current state of access token', {accessToken})
        return false
    }

    // Logout - Clear local storage & reset auth bool and token useStates
    const logoutAuth = () => {
        setIsAuthenticated(false);
        setAccessToken('');
        localStorage.removeItem('access_token');
        navigate('/login');
    }

    // Check if current token is still valid
    const checkAuth = async () => {

        // TODO: Create timer based on token expiration to prevent over-saturation of API

        let logOutput = []

        if (!accessToken) {
            logOutput.push('Access token not found')
            setIsAuthenticated(false)
            return
        }

        try {
            const response = await fetch(`${API_URL}/auth/session/validate`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${accessToken}`, // Include token in Authorization header
                },
            });

            if (!response.ok) {
                logOutput.push("Failed to validate the session");
                setIsAuthenticated(false);
                setAccessToken('');
                localStorage.removeItem('access_token');
                return;
            }

            const data = await response.json();
            logOutput.push('checkAuth response json:', data);

            // If the API returns a valid session
            if (data.token_valid) { // Assuming the server responds with { valid: true/false }
                setIsAuthenticated(true);
                logOutput.push('setIsAuthenticated(true)')
            } else {
                setIsAuthenticated(false);
                logOutput.push('setIsAuthenticated(false)')
            }

            logOutput.push('DATA:', data)
        } catch (error) {
            logOutput.push("Error while validating session:", error);
            setIsAuthenticated(false);
            setAccessToken('');
            localStorage.removeItem('access_token');
        }

        console.log('checkAuth', {logOutput})
    }

    // Replace null with token from local storage (to avoid SSR issues)
    useEffect(() => {
        if (typeof window !== "undefined") {
            const token = localStorage.getItem('access_token');
            setAccessToken(token);
        }
    }, []);

    // Check authentication every time the access token or current route changes
    useEffect(() => {
        checkAuth().catch(err => console.error(err));
    }, [accessToken, currentRoute]);

    // Change window location pathname
    useEffect(() => {
        const path = window.location.pathname;
        const [base, slugPart] = path.split('/').filter(Boolean);
        setCurrentRoute(`/${base || ''}`);
        setSlug(slugPart || null);
        setIsHydrated(true);
    }, []);

    // Pop state
    useEffect(() => {
        const handlePopState = () => {
            const path = window.location.pathname;
            const [base, slugPart] = path.split('/').filter(Boolean);
            setCurrentRoute(`/${base || ''}`);
            setSlug(slugPart || null);
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    // Prevent hydration issues
    if (!isHydrated) {
        return null;
    }

    return (
        <RouteContext.Provider
            value={{
                currentRoute,
                slug,
                navigate,
                isAuthenticated,
                API_URL,
                loginAuth,
                logoutAuth,
                checkAuth,
            }}
        >
            {children}
        </RouteContext.Provider>
    );
};

export const useRoute = () => useContext(RouteContext);