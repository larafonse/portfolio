import logo from './logo.svg';
import './App.css';
import { About, Blog, Home } from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/portfolio/home" element={<Home />} />
          <Route path="/portfolio/blog" element={<Blog />} />
          <Route path="/portfolio/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
