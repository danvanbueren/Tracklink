import * as React from "react";

import {createContext, useContext, useState} from 'react';
import {usePathname, useRouter} from 'next/navigation';

const LocalRouterContext = createContext();

export const useLocalRouter = () => useContext(LocalRouterContext);

export const LocalRouterProvider = ({ children }) => {
    const router = useRouter();
    const pathname = usePathname();

    const [isNavigating, setIsNavigating] = useState(false);
    const [currentPage, setCurrentPage] = useState(pathname);

    const navigateTo = (url) => {
        setIsNavigating(true);

        switch (url) {
            case '/':
            case '/addfriend':
            case '/archive':
            case '/collab':
            case '/home':
            case '/new':
            case '/projects':
            case '/queue':
            case '/recent':
            case '/search':
            case '/settings':
            case '/starred':
            case '/track':
            case '/tracks':
            case '/trash':
            case '/user':
                setCurrentPage(url);
                router.push(url);
                break;
            default:
                console.error('`LocalRouterContext.js` :: Unknown Navigation Provider');
                break;
        }

        setIsNavigating(false);
    };

    return (
        <LocalRouterContext.Provider value={{ isNavigating, navigateTo, currentPage }}>
            {children}
        </LocalRouterContext.Provider>
    );
};