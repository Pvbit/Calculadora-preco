import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Ferramentas from "./pages/Ferramentas";
import Resultado from "./pages/Resultado";
import Layout from "./components/Layout/Layout";
import CalculadoraA from "./components/CalculadoraA";
import CalculadoraB from "./components/CalculadoraB";
import CalculadoraC from "./components/CalculadoraC";
import CalculadoraD from "./components/CalculadoraD";
 
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/ferramentas" element={<Ferramentas />} />
          <Route path="/resultado" element={<Resultado />} />
          <Route path="/calculadorapagea" element={<CalculadoraA />} />
          <Route path="/calculadorapageb" element={<CalculadoraB />} />
          <Route path="/calculadorapagec" element={<CalculadoraC />} />
          <Route path="/calculadorapaged" element={<CalculadoraD />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
