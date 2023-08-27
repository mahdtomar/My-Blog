import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddArticel from "./components/Admin/AddArticel";
import BlogsContainer from "./components/BlogsContainer";
import Navbar from "./components/Navbar";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/new" element={<AddArticel />} />
      </Routes>
    </div>
  );
}

export default App;
