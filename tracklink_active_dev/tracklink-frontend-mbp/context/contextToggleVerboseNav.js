'use client'

import { createContext, useContext, useState } from 'react';

const ContextToggleVerboseNav = createContext();

export const LeftToggleProvider = ({ children }) => {
    const [isToggled, setIsToggled] = useState(true);

    const toggle = () => setIsToggled(prev => !prev);

    return (
        <ContextToggleVerboseNav.Provider value={{ isToggled, toggle }}>
            {children}
        </ContextToggleVerboseNav.Provider>
    );
};

export const useLeftToggle = () => useContext(ContextToggleVerboseNav);