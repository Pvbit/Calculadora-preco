import { useContext, useState } from "react";
import "./calculadoraA.css";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Context from "../../context/Context";

function CalculadoraA() {
  const {qtdPecas, setQtdPecas} = useContext(Context)
  const [valorGarimpo, setValorGarimpo] = useState(0)

  const {div, setDiv} = useContext(Context)  
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    const resultado = valorGarimpo / qtdPecas;
    setDiv(resultado);
    //navigate("/calculadorapageb");
  };

  return (
    <div className="row">
      <div className="col-lg-6 col-md-12 col-sm-12">
        <Container>
          <div className="d-flex justify-content-center">
            <div className="d-flex flex-column">
              <div className="">
                <label className="form-label lead">Quantidade de peças</label>
              </div>

              <div className="input-group divinput01">
                <span className="input-group-text">UN</span>
                <input
                  className="form-control"
                  type="number"
                  value={qtdPecas}
                  onChange={({ target }) => setQtdPecas(target.value)}
                />
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center mt-3 mb-3">
            <div className="d-flex flex-column">
              <div>
                <label className="form-label lead">
                  Valor Total Gasto no Garimpo
                </label>
              </div>
              <div className="input-group divinput01">
                <span className="input-group-text">R$</span>
                <input
                  className="form-control"
                  type="number"
                  value={valorGarimpo}
                  onChange={({ target }) => setValorGarimpo(target.value)}
                />
              </div>

              <div className="d-flex justify-content-center mt-3 mb-3">
                <div className="d-flex flex-column">
                  <div className="input-group divinput01">
                    <button
                      className="btn btn-primary btn-lg"
                      onClick={handleClick}
                    >
                      PRÓXIMO
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <h3>Custo Unitário da Peça{div}</h3>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12 div-2col">
        <Container>
          <p>Qual o valor justo a ser cobrado</p>
        </Container>
      </div>
    </div>
  );
}

export default CalculadoraA;
