import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import Gallery from "../pages/gallery";
import About from "../pages/about";

const AppRoutes = () => {
    return (
        <BrowserRouter basename="/oeykevinwijaya">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
