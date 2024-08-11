
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import Encrypt from './components/Encrypt';
import { Blog } from './components/Blog';
import {Feature} from './components/Body1';

export default function App() {
  return (
    <Router>
      <div>
       
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/encryption" element={ <Encrypt /> } />
          <Route path="/blog" element={ <Blog /> } />
           <Route path="/feature" element={<Feature />} />
          
        </Routes>
      </div>
    </Router>
  );
}
