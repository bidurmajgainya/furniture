import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "../pages/home/Home"


// Lazy load other components
const About = lazy(() => import('../pages/about/About'));


function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
       
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;