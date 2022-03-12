import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
// import AllProjects from "./components/AllProjects/allProjects";
import NavBar from "./components/NavBar";
import SplashPage from "./components/Splash/splash.js";
import Footer from "./components/Footer/footer";
import * as sessionActions from './store/session'

function App() {
  const dispatch = useDispatch()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(()=> {
    dispatch(sessionActions.restoreUser())
    setIsLoaded(true)
  })

  return isLoaded && (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' exact={true} element={<SplashPage />}/>
        <Route path='/projects' exact={true} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
