import { Route, Routes } from "react-router-dom";
import "./App.css";
import BlogsContainer from "./components/BlogsContainer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
