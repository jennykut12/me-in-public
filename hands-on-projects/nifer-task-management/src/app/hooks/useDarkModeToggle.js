"use client"
import { useEffect } from 'react';

// Custom hook to manage theme state

 const useDarkModeToggle = () => {
  useEffect(() => {
    const applyTheme = () => {
      if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    applyTheme();

    const handleChange = () => {
      applyTheme();
    };

    window.addEventListener('storage', handleChange);

    return () => {
      window.removeEventListener('storage', handleChange);
    };
  }, []);
};
export default useDarkModeToggle