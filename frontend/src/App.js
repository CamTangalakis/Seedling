import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllProjects from "./components/AllProjects/allProjects";
import NavBar from "./components/NavBar";
import * as sessionActions from './store/session'

function App() {
  const dispatch = useDispatch()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(()=> {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true))
  })

  return isLoaded && (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' exact={true} element={<AllProjects />} />
      </Routes>
    </div>
  );
}

export default App;
