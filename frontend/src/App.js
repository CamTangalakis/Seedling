import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SplashPage from "./components/Splash/splash";
import {Button, ThemeProvider} from '@material-ui/core'
import {createTheme} from '@material-ui/core/styles'
import {green} from '@material-ui/core/colors'
import LoginModal from "./components/Login/LoginModal";

const theme = createTheme ({
  palette: {
    primary: {
      main: "#578011",
    },
    secondary: {
      main: "#436606"
    }
  }
})

function App() {
  // const dispatch = useDispatch()

  return (
    <div>
      <ThemeProvider theme={theme}>
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path='/'  exact={true} element={<SplashPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
