import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomCursor from "./components/portfolio/CustomCursor";
import Nav from "./components/portfolio/Nav";
import Hero from "./components/portfolio/Hero";
import About from "./components/portfolio/About";
import Skills from "./components/portfolio/Skills";
import Projects from "./components/portfolio/Projects";
import Journey from "./components/portfolio/Journey";
import Contact from "./components/portfolio/Contact";
import useLenis from "./hooks/useLenis";

function Portfolio() {
    useLenis();
    return (
        <div className="App" data-testid="portfolio-root">
            <CustomCursor />
            <Nav />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Journey />
                <Contact />
            </main>
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Portfolio />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
