import { useState } from "react";
import Context from "./Context";

function Provider({ children }) {
  const [exemplo, setExemplo] = useState(10);
  const [qtdPecas, setQtdPecas] = useState(0);
  const [div, setDiv] = useState(0);
  const [somaTotal, setSomaTotal] = useState(0); 

  const contextValue = {
    exemplo,
    setExemplo,
    qtdPecas,
    setQtdPecas,
    div,
    setDiv,
    somaTotal,
    setSomaTotal,
  };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export default Provider;
