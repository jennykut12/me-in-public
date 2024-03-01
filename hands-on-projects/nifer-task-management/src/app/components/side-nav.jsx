import React from 'react'

const SideNavigation = () => {
    useDarkModeToggle();

    const toggleTheme = () => {
      if (localStorage.theme === 'dark') {
        localStorage.theme = 'light';
      } else {
        localStorage.theme = 'dark';
      }
    };
    
  return (
    <div></div>
  )
}

export default SideNavigation