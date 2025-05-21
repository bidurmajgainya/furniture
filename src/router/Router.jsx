import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "../pages/home/Home";
// import Wishlist from 

// Lazy load components
const About = lazy(() => import('../pages/about/About'));
const Contact = lazy(() => import('../pages/contact/Contact'));
const Shop = lazy(() => import('../pages/shop/Shop'));
const SignUp = lazy(() => import('../pages/signUp/SignUp'));
const Login = lazy(() => import('../pages/Login/Login')); 
const Cart = lazy(() => import('../pages/cart/Cart'));
const WishList = lazy(() => import('../pages/wishlist/WishList'));

function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />


      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
