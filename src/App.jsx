import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import PDFMergerTool from "./components/PDFMergerTool";
import Pricing from "./components/Pricing";
import { AppProvider } from "./context/AppProvider";

export default function App() {
  return (
    <AppProvider>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <NavBar />
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<PDFMergerTool />} />
              <Route path="/about" element={<About />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />

              {/* Redirects */}
              <Route path="/home" element={<Navigate to="/" replace />} />
              <Route path="/merge" element={<Navigate to="/" replace />} />
              <Route path="/merge-pdf" element={<Navigate to="/" replace />} />

              {/* 404 Not Found */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}
