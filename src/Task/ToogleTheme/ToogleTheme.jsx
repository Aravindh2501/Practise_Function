// ThemeToggle.jsx
import React, { useState, useEffect } from 'react';
import './ToogleTheme.scss';

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check system theme preference
        const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDarkMode(prefersDarkMode);
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
            <button className="theme-toggle-button" onClick={toggleTheme}>
                Toggle Theme
            </button>
            <p>Content goes here...</p>
        </div>
    );
};

export default ThemeToggle;
