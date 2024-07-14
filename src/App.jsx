import {BrowserRouter, Link, Routes, Route} from "react-router-dom";
import Menu from "./components/Menu";
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"
import Contato from "./pages/Contato"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"

function App() {
  return (
    <>
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
      </>
      );
     }
export default App;

