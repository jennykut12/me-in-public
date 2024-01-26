import React, { useEffect } from 'react';

const ThemeToggle = () => {
  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const setLightTheme = () => {
    // Whenever the user explicitly chooses light mode
    localStorage.theme = 'light';
    document.documentElement.classList.remove('dark');
  };

  const setDarkTheme = () => {
    // Whenever the user explicitly chooses dark mode
    localStorage.theme = 'dark';
    document.documentElement.classList.add('dark');
  };

  const respectOsPreference = () => {
    // Whenever the user explicitly chooses to respect the OS preference
    localStorage.removeItem('theme');
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div>
      <button onClick={setLightTheme}>Set Light Theme</button>
      <button onClick={setDarkTheme}>Set Dark Theme</button>
      <button onClick={respectOsPreference}>Respect OS Preference</button>
    </div>
  );
};

export default ThemeToggle;
