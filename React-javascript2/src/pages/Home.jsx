import { Link } from "react-router-dom";
import Context from "../context/Context";
import { useContext } from "react";

function Home() {
  const {exemplo} = useContext(Context)
  return (
    <>
    <h2>{exemplo}</h2>
      <Link to="/calculadorapagea">
        <h5>Vá para a Página de Calculadora</h5>
      </Link>
    </>
  );
}

export default Home;
