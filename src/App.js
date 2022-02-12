import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/header_footer/Footer";
import Navbar from "./components/Navigation/Navbar";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
