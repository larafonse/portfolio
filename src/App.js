import './App.css';
import { About, Blog, Home } from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const blogs = [{
  title: 'My 2023 Goals',
  body: 'Here are are my goals'
}]

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/portfolio/home" element={<Home blogs={blogs}/>} />
          <Route path="/portfolio/blog" element={<Blog blogs={blogs}/>} />
          <Route path="/portfolio/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
