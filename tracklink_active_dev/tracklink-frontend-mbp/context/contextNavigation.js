import {createContext, useContext, useEffect, useState} from 'react';
import { useRouter, usePathname } from 'next/navigation';

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
    const router = useRouter();
    const pathname = usePathname();

    // Pre-fetch
    useEffect(() => {
        router.prefetch('/');
        router.prefetch('/archive');
        router.prefetch('/collab');
        router.prefetch('/home');
        router.prefetch('/new');
        router.prefetch('/projects');
        router.prefetch('/recent');
        router.prefetch('/settings');
        router.prefetch('/starred');
        router.prefetch('/tracks');
        router.prefetch('/trash');
        router.prefetch('/user');
    }, []);

    const [isNavigating, setIsNavigating] = useState(false);
    const [currentPage, setCurrentPage] = useState(pathname);

    const navigateTo = (url) => {
        setIsNavigating(true);

        router.push(url);
        setCurrentPage(pathname);

        setIsNavigating(false);
    };

    return (
        <NavigationContext.Provider value={{ isNavigating, navigateTo, currentPage }}>
            {children}
        </NavigationContext.Provider>
    );
};

export const useNavigation = () => useContext(NavigationContext);