import * as React from 'react'
import NavBar from './NavBar'
import {Button} from './Button/Button'
import { useTheme } from 'providers/ThemeProvider'

const Header = () => {
  const { theme, toggle } = useTheme();
  return (
    <>
    <NavBar/>
    <Button label={`theme toggle`} onClick={() => toggle()}/>
    </>
    
  )
}

export default Header
