// src/App.js
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import AppRoutes from './router/Router';
function App() {
  const location= useLocation();
  const hideNavbarRoutes  = ["/login","/signup"];
   const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname.toLowerCase());
  return (
  
      <div className="app">
         <ScrollToTop />
 {!shouldHideNavbar && <Navbar />}
        <main className=""> 
          <AppRoutes />
        </main>
      </div>
 
  );
}

export default App;