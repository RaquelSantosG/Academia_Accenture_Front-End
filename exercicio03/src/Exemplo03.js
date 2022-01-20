import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";

export default function Exemplo03() {
  const [livros, setLivros] = useState([
    { id: 1, nome: "React" },
    { id: 2, nome: "Java" },
    { id: 3, nome: "Node" },
  ]);

  useEffect(() => {
    console.log("Montando o componente.....");

    return () => console.log("Desmontando componente.....");
  }, []);

  return (
    <>
      <ul>
        {livros.map((elemento) => (
          <li key={elemento.id}>{elemento.nome}</li>
        ))}
      </ul>
    </>
  );
}
