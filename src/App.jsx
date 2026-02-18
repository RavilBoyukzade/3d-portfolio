import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  About,
  Blog,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const HomePage = () => (
  <>
    <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
      <Hero />
    </div>
    <About />
    <Experience />
    <Tech />
    <Works />
    <div className="relative z-0">
      <Contact />
      <StarsCanvas />
    </div>
  </>
);

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 min-h-screen bg-primary">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
