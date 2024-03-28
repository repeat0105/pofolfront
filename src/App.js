import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './component/Home';
import Skill from './component/Skill';
import Work from './component/Work';
import FritsText from './component/FritsText';
import About from './component/About';
import MouseOneHtml from './component/MouseOneHtml';
import Workform from './component/Workform';

import Usercom from './component/Usercom';
import Writelevue from './component/Writelevue';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/'element={<Home />} />
        <Route path='/skill'element={<Skill />} />
        <Route path='/work' element={<Work />} />
        <Route path='/mouseonehtml' element={<MouseOneHtml />} />
        <Route path='/fritstext' element={<FritsText />} />
        <Route path='/about' element={<About />} />
        <Route path='/workform' element={<Workform />} />
        <Route path='/usercom' element={<Usercom />} />

        <Route path='/Writelevue' element={<Writelevue />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
