import { useState } from "react";

const PrimerComponente = ({ setTexto }) => {
  const [textoIntermedio, SetTextoIntermedio] = useState("");
  const tomarTexto = (e) => {
    SetTextoIntermedio(e.target.value);
  };
  const subirTexto = () => {
    setTexto(textoIntermedio);
  };

  return (
    <>
      <input type="text" onChange={tomarTexto} />

      <button onClick={subirTexto}>Apreta</button>
    </>
  );
};
export default PrimerComponente;
