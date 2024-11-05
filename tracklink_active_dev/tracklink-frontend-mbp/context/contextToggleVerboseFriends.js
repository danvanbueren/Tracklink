'use client'

import { createContext, useContext, useState } from 'react';

const ContextToggleVerboseFriends = createContext();

export const RightToggleProvider = ({ children }) => {
    const [isToggled, setIsToggled] = useState(true);

    const toggle = () => setIsToggled(prev => !prev);

    return (
        <ContextToggleVerboseFriends.Provider value={{ isToggled, toggle }}>
            {children}
        </ContextToggleVerboseFriends.Provider>
    );
};

export const useRightToggle = () => useContext(ContextToggleVerboseFriends);