import "./App.css";
import { Routes, Route } from "react-router-dom";
import URLShortner from "./pages/URLShortner";
import HomePage from "./pages/HomePage";
import Temp from "./pages/temp";
import Header from "./components/Header";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/" element={<Temp />} /> */}
      <Route path="/url" element={<URLShortner />} />
      <Route path="/WtoPDF" element={<ErrorPage />} />
      <Route path="/PDFtoW" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
