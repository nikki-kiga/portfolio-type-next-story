//References code from Carl Rippon on using preferred theme
import React from 'react';

type ThemeContextType = {
  mode: string,
  toggle (): void;
}

type Props = {
  children: React.ReactNode,
};

const defaultMode = 'dark';

export const ManageThemeContext: React.Context<ThemeContextType> = React.createContext({
  mode: defaultMode,
  toggle: () => {}
});

export const useTheme = () => React.useContext(ManageThemeContext)

export const ThemeProvider = ({children,}: Props) => {
  const [themeName, setThemeName] = React.useState(defaultMode);
  
  React.useEffect(() => {
    const darkPref = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    darkPref ? setThemeName('dark') 
      : setThemeName('light');
  },[]);

  const setTheme = () => themeName === 'dark' ? setThemeName('light') : setThemeName('dark');

  return (
    <ManageThemeContext.Provider value={{
      mode:themeName,
      toggle: setTheme
    }}>
      {children}
    </ManageThemeContext.Provider>
  )
}
