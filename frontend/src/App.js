import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SplashPage from "./components/Splash/splash";
import {Button} from '@material-ui/core'
import LoginModal from "./components/Login/LoginModal";

function App() {
  // const dispatch = useDispatch()

  return (
    <div>
      <NavBar />
      <Button onClick={()=> <LoginModal />} variant="contained" style={{"background-color": "rgb(90, 36, 92)"}}> Hi </Button>
      <BrowserRouter>
        <Routes>
          <Route path='/'  exact={true} element={<SplashPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
