import { Children } from "react";
import "./botao-formulario.estilos.css";

export function Botao({ children }) {
  return (
    <button className="botao" type="submit">
      {children}
    </button>
  );
}
