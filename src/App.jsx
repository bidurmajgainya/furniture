// src/App.js
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import AppRoutes from './router/Router';
function App() {
  return (
    <Router>
      <div className="app">
         <ScrollToTop />
        <Navbar />
        <main className=""> {/* Add padding-top to account for fixed navbar */}
          <AppRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;