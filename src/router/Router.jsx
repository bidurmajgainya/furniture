import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "../pages/home/Home"
import Contact from '../pages/contact/Contact';
import Shop from "../pages/Shop/shop"
import Login from '../pages/login/Login';
// Lazy load other components
const About = lazy(() => import('../pages/about/About'));


function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
       <Route path ="/contact" element = {<Contact/>}/>
       <Route path ="/shop" element = {<Shop/>}/>
       <Route path ="/login" element ={<Login/>}/>
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;