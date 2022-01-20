import React, { useState, useEffect } from "react";
import Linha from "./Linha";

export default function Exemplo02() {
  const [pokemons, setPokemons] = useState([]);
  const [contador, setContador] = useState(0);

  useEffect(() => {
    carregarPokemon();
  }, [contador]);

  async function carregarPokemon() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();
    setPokemons(data.results);
  }

  function removerPokemon(name) {
    const newList = pokemons.filter((elemento) => elemento.name !== name);
    setPokemons(newList);
  }

  function recarregar() {
    setContador(contador + 1);
  }

  return (
    <>
      <ul>
        {pokemons.map((elemento, index) => (
          <Linha key={index} pokemon={elemento} remover={removerPokemon} />

          //   <li key={index}>
          //     {elemento.name}
          //     <button onClick={() => removerPokemon(elemento.name)}>
          //       Remover
          //     </button>
          //   </li>
        ))}
      </ul>

      <button onClick={() => recarregar()}>Recarregar Pokemon</button>
    </>
  );
}
