'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const RouteContext = createContext();

export const RouteProvider = ({ children }) => {
    const [currentRoute, setCurrentRoute] = useState('/');
    const [slug, setSlug] = useState(null);
    const [isHydrated, setIsHydrated] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const navigate = (route) => {
        const [base, slugPart] = route.split('/').filter(Boolean);
        setCurrentRoute(`/${base || ''}`);
        setSlug(slugPart || null);
        window.history.pushState({}, '', route);
    };

    const refreshAuth = () => {
        setIsAuthenticated(false);
    }

    useEffect(() => {
        const path = window.location.pathname;
        const [base, slugPart] = path.split('/').filter(Boolean);
        setCurrentRoute(`/${base || ''}`);
        setSlug(slugPart || null);
        setIsHydrated(true);
    }, []);

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

    if (!isHydrated) {
        return null;
    }

    return (
        <RouteContext.Provider
            value={{
                currentRoute,
                slug,
                navigate,
                isAuthenticated
            }}
        >
            {children}
        </RouteContext.Provider>
    );
};

export const useRoute = () => useContext(RouteContext);