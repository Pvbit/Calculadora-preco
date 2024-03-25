import { useContext, useState } from "react";
import "./calculadoraB.css";
import { Container } from "react-bootstrap";
import Context from "../../context/Context";

function CalculadoraB() {
  const [form, setForm] = useState({
    valorCapital: "",
    valorMei: "",
    valorSalario: "",
    valorFuncionario: "",
    valorCelnet: "",
    valorAluguel: "",
    valorOutros: "",
  });

  const {setSomaTotal} = useContext(Context)

  function handleChange({ target }) {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
    console.log(form);
  }

  function handleClick(event) {
    event.preventDefault();
    const {valorCapital, valorMei, valorSalario, valorFuncionario, valorCelnet, valorAluguel, valorOutros} = form
    const data = []
    data.push(parseFloat(valorCapital), parseFloat(valorMei), parseFloat(valorSalario), parseFloat(valorFuncionario), parseFloat(valorCelnet), parseFloat(valorAluguel), parseFloat(valorOutros))
    const soma = data.reduce((acc, cur) => acc+cur, 0)
    setSomaTotal(soma)
  }

  return (
    <div className="row">
      <div className="col-lg-6 col-md-12 col-sm-12">
        <Container>
          <div className="d-flex justify-content-center">
            <div className="d-flex flex-column">
              <div className="">
                <label className="form-label lead">
                  Valor para Garimpar (Capital de Giro)
                </label>
              </div>

              <div className="input-group divinput01">
                <span className="input-group-text">R$</span>
                <input
                  className="form-control"
                  type="number"
                  name="valorCapital"
                  value={form.valorCapital}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center mt-3 mb-3">
            <div className="d-flex flex-column">
              <div>
                <label className="form-label lead">MEI - Imposto Simples</label>
              </div>
              <div className="input-group divinput01">
                <span className="input-group-text">R$</span>
                <input
                  className="form-control"
                  type="number"
                  name="valorMei"
                  value={form.valorMei}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center mt-3 mb-3">
            <div className="d-flex flex-column">
              <div>
                <label className="form-label lead">
                  Pró-Labore (Salário da Dona de Brechó)
                </label>
              </div>
              <div className="input-group divinput01">
                <span className="input-group-text">R$</span>
                <input
                  className="form-control"
                  type="number"
                  name="valorSalario"
                  value={form.valorSalario}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center mt-3 mb-3">
            <div className="d-flex flex-column">
              <div>
                <label className="form-label lead">Salários Funcionários</label>
              </div>
              <div className="input-group divinput01">
                <span className="input-group-text">R$</span>
                <input
                  className="form-control"
                  type="number"
                  name="valorFuncionario"
                  value={form.valorFuncionario}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center mt-3 mb-3">
            <div className="d-flex flex-column">
              <div>
                <label className="form-label lead">Celular + Internet</label>
              </div>
              <div className="input-group divinput01">
                <span className="input-group-text">R$</span>
                <input
                  className="form-control"
                  type="number"
                  name="valorCelnet"
                  value={form.valorCelnet}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center mt-3 mb-3">
            <div className="d-flex flex-column">
              <div>
                <label className="form-label lead">
                  Aluguel + Conta de Luz + Água
                </label>
              </div>
              <div className="input-group divinput01">
                <span className="input-group-text">R$</span>
                <input
                  className="form-control"
                  type="number"
                  name="valorAluguel"
                  value={form.valorAluguel}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center mt-3 mb-3">
            <div className="d-flex flex-column">
              <div>
                <label className="form-label lead">Outras Despesas Fixas</label>
              </div>
              <div className="input-group divinput01">
                <span className="input-group-text">R$</span>
                <input
                  className="form-control"
                  type="number"
                  name="valorOutros"
                  value={form.valorOutros}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center mt-3 mb-3">
            <div className="d-flex flex-column">
              <div className="input-group divinput01">
                <a href="./calculadorapagea" className="btn btn-primary btn-lg">
                  VOLTAR
                </a>
              </div>
              <div className="input-group divinput02">
                <button
                  className="btn btn-primary btn-lg"
                  onClick={handleClick}
                >
                  PRÓXIMO
                </button>
              </div>
            </div>
          </div>
          {/* Mostrar a soma */}
          <div className="mt-3">
            <h3>Total de Despesas Fixas</h3>
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

export default CalculadoraB;
