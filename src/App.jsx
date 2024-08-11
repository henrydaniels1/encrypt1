
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import Encrypt from './components/Encrypt';
import {Blog} from './components/Blog';

export default function App() {
  return (
    <Router>
      <div>
        {/* <Nav />
        <Header />
        <Feature /> */}
        {/* <Landing/> */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/encryption" element={ <Encrypt /> } />
          <Route path="/blog" element={ <Blog /> } />
          
        </Routes>
      </div>
    </Router>
  );
}
