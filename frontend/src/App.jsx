import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import HomeClient from "./pages/home-client";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/client" element={<HomeClient />} />
        <Route path="/restaurant" element={<h1>Page Restaurant (à venir)</h1>} />
      </Routes>
    </Router>
  );
}
