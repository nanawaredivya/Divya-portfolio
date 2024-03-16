import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Project from './components/pages/Project';
import Contact from './components/pages/Contact';

function App() {
  return (
  <>
  <BrowserRouter>
    <Routes>
       <Route path='/' element={<Layout />}  >  
       <Route index element={<Home />} />
       <Route path='/home' element={<Home />}  />
       <Route path='/about' element={<About />}  />
       <Route path='/project' element={<Project />}  />
       <Route path='/contact' element={<Contact />}  />
        {/* <Route path='*' element={<Error />}/> */}
      </Route>
    </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
