import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import AboutPage from "./pages/AboutPage";
import DataPage from "./pages/DataPage";

function App() {
  return (
    <div className="App">
      <NavBar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="about" element={<AboutPage/>} />
          <Route path="data" element={<DataPage/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
