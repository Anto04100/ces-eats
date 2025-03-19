import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/client" element={<h1>Page Client (à venir)</h1>} />
        <Route path="/restaurant" element={<h1>Page Restaurant (à venir)</h1>} />
      </Routes>
    </Router>
  );
}
