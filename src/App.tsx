import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio'; // Import the new Portfolio page
import './App.css'; // Assuming App.css is for global styles

function App() {
  return (
    <BrowserRouter>
      <nav className="p-4 bg-primary text-primary-foreground shadow-md">
        <ul className="flex space-x-4 container mx-auto">
          <li>
            <Link to="/" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/portfolio" className="hover:underline">Portfolio</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/portfolio" element={<Portfolio />} /> {/* Add the new route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
