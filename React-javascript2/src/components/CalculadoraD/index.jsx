import { useState } from "react";
import "./calculadoraD.css";
import { Container } from "react-bootstrap";

function CalculadoraD() {
  return (
    <div className="row">
      <div className="col-lg-6 col-md-12 col-sm-12">
        <Container>
          <div className="d-flex justify-content-center">
            <div className="d-flex flex-column">
              <div className="">
                <label className="form-label lead">Margem de Lucro</label>
              </div>

              <div className="input-group divinput01">
                <span className="input-group-text">%</span>
                <input className="form-control" type="number" />
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center mt-3 mb-3">
            <div className="d-flex flex-column">
              <div>
                <label className="form-label lead">Impostos</label>
              </div>
              <div className="input-group divinput01">
                <span className="input-group-text">%</span>
                <input className="form-control" type="number" />
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center mt-3 mb-3">
            <div className="d-flex flex-column">
              <div>
                <label className="form-label lead">Outros</label>
              </div>
              <div className="input-group divinput01">
                <span className="input-group-text">%</span>
                <input className="form-control" type="number" />
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center mt-3 mb-3">
            <div className="d-flex flex-column">
              <div className="input-group divinput01">
                <a href="./calculadorapagec" className="btn btn-primary btn-lg">
                  VOLTAR
                </a>
              </div>
              <div className="input-group divinput02">
                <a href="" className="btn btn-primary btn-lg">
                  PRÓXIMO
                </a>
              </div>
            </div>
          </div>
          {/* Mostrar a soma */}
          <div className="mt-3">
            <h3>Total de Despesas Variáveis</h3>
          </div>
        </Container>
      </div>

      <div className="col-lg-6 col-md-12 col-sm-12 div-2col">
        <Container>
          <p>Qual o valor justo a ser cobrado2</p>
        </Container>
      </div>
    </div>
  );
}

export default CalculadoraD;
