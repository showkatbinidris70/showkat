import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
