import { useState } from "react";

function Formulario() {
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    idade: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setFormInfo({ ...formInfo, [name]: value });
  };

  return (
    <>
      <form>
        <label>
          Nome:
          <input
            onChange={handleChange}
            required
            name="name"
            value={formInfo.name}
          />
        </label>

        <label>
          Email:
          <input
            onChange={handleChange}
            required
            name="email"
            value={formInfo.email}
          />
        </label>

        <label>
          Idade:
          <input
            onChange={handleChange}
            required
            name="idade"
            value={formInfo.idade}
          />
        </label>
      </form>
      <p>{formInfo.name}</p>
      <p>{formInfo.email}</p>
      <p>{formInfo.idade}</p>
    </>
  );
}

export default Formulario;
