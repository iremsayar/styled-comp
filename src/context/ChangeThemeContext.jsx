import { createContext, useState } from "react";

const ChangeThemeContext = createContext()

function ChangeThemeContextProvider(props) {
    
    const [themeName, setThemeName] = useState("light")
    
    return (
        <ChangeThemeContext.Provider
        value={{setThemeName,themeName}}
        >
            {props.children}
        </ChangeThemeContext.Provider>
    )
}

export{ChangeThemeContext,ChangeThemeContextProvider}