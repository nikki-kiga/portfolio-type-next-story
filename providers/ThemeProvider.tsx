//References code from Carl Rippon on using preferred theme
import React from 'react';

type ThemeContextType = {
  theme: string,
  toggle: () => void;
}

type Props = {
  children: React.ReactNode,
};

const defaultMode = 'dark';

export const ManageThemeContext: React.Context<ThemeContextType> = React.createContext({
  theme: defaultMode,
  toggle: () => {}
});

export const useTheme = () => React.useContext(ManageThemeContext)

export const ThemeProvider = ({children,}: Props) => {
  const [themeName, setThemeName] = React.useState(defaultMode);
  
  //Use system preferences for dark mode
  React.useEffect(() => {
    const darkPref = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    darkPref ? setThemeName('dark') 
      : setThemeName('light');
      setTheme();
  },[]);

  //Update state for string of theme as well as update class on body
  const setTheme = () => {
    setThemeName(themeName === 'dark' ? 'light' : 'dark');
    themeName === 'dark' ? document.documentElement.classList.add(defaultMode)
    : document.documentElement.classList.remove(defaultMode)
  };

  return (
    <ManageThemeContext.Provider value={{ theme: themeName, toggle: setTheme}}>
      {children}
    </ManageThemeContext.Provider>
  )
}
