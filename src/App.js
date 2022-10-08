import NavBar from "./components/layouts/NavBar";
import Home from "./pages/Home";
import Footer from "./components/layouts/Footer";
import Sobre from "./pages/Sobre";
import Projetos from "./pages/Projetos";
import Skills from "./pages/Skills";
import Contato from "./pages/Contato";


function App() {
  return (
    <div className="principal">
      <NavBar />
      <Home />
      <Sobre />
      <Projetos />
      <Skills />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
