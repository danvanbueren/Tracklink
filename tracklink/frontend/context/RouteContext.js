'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const RouteContext = createContext();

export const RouteProvider = ({ children }) => {
    // TODO: Change for production build!! (unless running Dockerized, I guess)
    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000";

    const [currentRoute, setCurrentRoute] = useState('/');
    const [slug, setSlug] = useState(null);
    const [isHydrated, setIsHydrated] = useState(false);

    // holds last access token
    const [accessToken, setAccessToken] = useState(localStorage.getItem('access_token'));
    // holds result of checkAuth()
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Nav
    const navigate = (route) => {
        const [base, slugPart] = route.split('/').filter(Boolean);
        setCurrentRoute(`/${base || ''}`);
        setSlug(slugPart || null);
        window.history.pushState({}, '', route);
    };

    // Auth
    const loginAuth = async (username, password) => {
        const params = new URLSearchParams(); // Prepare URL-encoded body
        params.append("grant_type", "password");
        params.append("username", username); // Replace with the actual user input
        params.append("password", password); // Replace with the actual user input
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
                return true
            }
        } catch (err) {
            console.log("Login completely failed!");
        }

        console.log('Current state of access token', {accessToken})
        return false
    }

    const logoutAuth = () => {
        setIsAuthenticated(false);
        setAccessToken('');
        localStorage.removeItem('access_token');
    }

    const checkAuth = async () => {
        if (!accessToken) {
            console.log("Access token not found");
            setIsAuthenticated(false);
            return;
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
                console.error("Failed to validate the session");
                setIsAuthenticated(false);
                setAccessToken('');
                localStorage.removeItem('access_token');
                return;
            }

            const data = await response.json();
            console.log('checkAuth response json', {data});

            // If the API returns a valid session
            if (data.token_valid) { // Assuming the server responds with { valid: true/false }
                setIsAuthenticated(true);
                console.log('setIsAuthenticated(true);')
            } else {
                setIsAuthenticated(false);
                console.log('setIsAuthenticated(false);')
            }

            console.log('DATA DATA:: ', data)
        } catch (error) {
            console.error("Error while validating session", {error});
            setIsAuthenticated(false);
            setAccessToken('');
            localStorage.removeItem('access_token');
        }
    }

    // Effects

    useEffect(() => {
        checkAuth().catch(err => console.error(err));
    }, [accessToken]);

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