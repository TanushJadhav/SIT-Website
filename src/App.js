import { Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;