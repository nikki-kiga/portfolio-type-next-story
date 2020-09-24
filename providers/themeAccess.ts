import lightTheme from '../.storybook/lightTheme';
import darkTheme from '../.storybook/darkTheme';

export function getTheme(theme: string){
  return themeMap[theme];
}

const themeMap: { [key: string] : any} = {
  light: lightTheme,
  dark: darkTheme
} 
