import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SplashPage from "./components/Splash/splash";
import { ThemeProvider } from '@material-ui/core'
import { createTheme } from '@material-ui/core/styles'
import AllProjects from "./components/Projects/AllProjects";
import CreateProjectPage from "./components/ProjectForms/CreateProjectPage";
import { useEffect } from "react";
import { getProjects, postFunding } from "./store/project";
import { restoreUser } from "./store/session";
import CategoryResults from "./components/CategoryResults/CategoryResults";
import ProjectPage from "./components/Projects/ProjectPage";
import { Elements } from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import './index.css'

const stripePromise = loadStripe('pk_test_51KeBquIXDN1OZLZBSTIFm1KqRdRhH1V8l6GV0AneKU4bER0KFOKhBVo8oCmQlkZyLYbnxf4sxw5AEDxig0whuLhX00f5VVh5mO')

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
    // dispatch(postFunding({projectId: 1, userId: 1, funded: 500}))
  }, [])

  return (
    <div className='appBody'>
      <ThemeProvider theme={theme}>
        <Elements stripe={stripePromise}>
          <NavBar />
          <BrowserRouter>
            <Routes>
              <Route path='/'  exact={true} element={<SplashPage />} />
              <Route path='/home' exact={true} element={<AllProjects />} />
              <Route path='/newProject' exact={true} element={<CreateProjectPage />} />
              <Route path='/category/:id' exact={true} element={<CategoryResults />} />
              <Route path='/project/:id' exact={true} element={<ProjectPage />} />
            </Routes>
          </BrowserRouter>
        </Elements>
      </ThemeProvider>
    </div>
  );
}

export default App;
