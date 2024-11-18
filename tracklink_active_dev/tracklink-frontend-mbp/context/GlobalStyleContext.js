import { createContext, useContext, useState } from 'react';

const GlobalStyleContext = createContext();

export const GlobalStyleProvider = ({ children }) => {
    const [friendsVerbose, setFriendsVerbose] = useState(true);
    const [navigationVerbose, setNavigationVerbose] = useState(true);
    const [darkMode, setDarkMode] = useState(true);

    const toggleFriendsVerbose = () => setFriendsVerbose(prev => !prev);
    const toggleNavigationVerbose = () => setNavigationVerbose(prev => !prev);
    const toggleDarkMode = () => setDarkMode(prev => !prev);

    // Implement toggleable dark mode

    return (
        <GlobalStyleContext.Provider value={{ friendsVerbose, toggleFriendsVerbose, navigationVerbose, toggleNavigationVerbose, darkMode, toggleDarkMode }}>
            {children}
        </GlobalStyleContext.Provider>
    );
};

export const useGlobalStyle = () => useContext(GlobalStyleContext);