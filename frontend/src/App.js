import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SplashPage from "./components/Splash/splash";
import { ThemeProvider } from '@material-ui/core'
import { createTheme } from '@material-ui/core/styles'
import AllProjects from "./components/Projects/AllProjects";
import CreateProjectPage from "./components/ProjectForms/CreateProjectPage";
import { useEffect } from "react";
import { getProjects } from "./store/project";
import { restoreUser } from "./store/session";
import CategoryResults from "./components/CategoryResults/CategoryResults";

const theme = createTheme ({
  palette: {
    primary: {
      main: "#578011"
    },
    secondary: {
      main: "#5a245c"
    }
  }
})

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProjects())
    dispatch(restoreUser())
  }, [])

  return (
    <div>
      <ThemeProvider theme={theme}>
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path='/'  exact={true} element={<SplashPage />} />
            <Route path='/home' exact={true} element={<AllProjects />} />
            <Route path='/newProject' exact={true} element={<CreateProjectPage />} />
            <Route path='/category/:id' exact={true} element={<CategoryResults />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
