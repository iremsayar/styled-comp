import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import { Background, styledComponentTheme } from "./styledComponents";
import { ThemeProvider } from 'styled-components';
import { ChangeThemeContext } from './context/ChangeThemeContext'
import { useContext } from "react";

function App() {
  const {themeName} = useContext(ChangeThemeContext)
  return (
    <ThemeProvider theme={styledComponentTheme[themeName]}>
<Background>
    <div>
      <Routes>
        {
          routes.map((item) =>
            <Route path={item.path} element={item.element} />)
        }
        
        </Routes>
        </div>
        
        
        </Background>
      </ThemeProvider>

  );
}

export default App;
