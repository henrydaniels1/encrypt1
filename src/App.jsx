// import { Nav } from "./components/Nav";
// import { Header } from "./components/Header";
// import { Feature } from "./components/Body1";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Landing from './components/Landing';
// import Encrypt from './components/Encrypt';

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <Nav />
//         <Header />
//         <Feature />
//         <Routes>
//           <Route path="/" element={<Landing />} />
//           <Route path="/encryption" element={<Encrypt />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// import { Nav } from "./components/Nav";
// import { Header } from "./components/Header";
// import { Feature } from "./components/Body1";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import Encrypt from './components/Encrypt';

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
          <Route path="/encryption" element={<Encrypt />} />
        </Routes>
      </div>
    </Router>
  );
}
