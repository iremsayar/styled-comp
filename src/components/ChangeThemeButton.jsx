import React, { useContext } from 'react'
import { ChangeThemeContext } from '../context/ChangeThemeContext'
import { ChangeButton } from '../styledComponents'


function ChangeThemeButton(props) {

const {themeName, setThemeName} = useContext(ChangeThemeContext)

    return (
        <ChangeButton
        onClick={() => {
            setThemeName(prev => prev === "light" ? "dark" : "light")
            console.log(themeName)
            }}>
             Change Theme
        </ChangeButton>
        
        
           
      
        
    )
}
export default ChangeThemeButton