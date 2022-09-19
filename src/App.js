import NavBar from './components/layouts/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/layouts/Footer';
import './App.css'
import Sobre from './pages/Sobre';
import Projetos from './pages/Projetos';
import Skills from './pages/Skills';
import Contato from './pages/Contato';

function App() {
  return (
    <Router >
      <div className='principal'>
        <NavBar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Sobre' element={<Sobre />}></Route>
            <Route path='/Projetos' element={<Projetos />}></Route>
            <Route path='/Skills' element={<Skills />}></Route>
            <Route path='/ Contato' element={<Contato />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
