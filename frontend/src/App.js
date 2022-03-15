import { BrowserRouter, Route, Routes } from "react-router-dom";
import SplashPage from "./components/Splash/splash";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'  exact={true} element={<SplashPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
