import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Pokemon() {
  const [curPokemon, setCurPokemon] = useState({});
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    getPokemon();
  }, []);

  async function getPokemon() {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=600"
      );
      setPokemonList(response.data.results);
      fetchPokemonMetaData(response.data.results[0].url);
    } catch (error) {
      console.error(error);
    }
  }

  const handleChange = (e) => {
    fetchPokemonMetaData(e.target.value);
  };

  const fetchPokemonMetaData = async (url) => {
    try {
      const response = await axios.get(url);
      setCurPokemon(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-6 text-4xl mt-5">
        <h1>Pokemon</h1>
        <div className="text-2xl border-2 w-[50vh] h-[50vh] flex justify-center items-center flex-col rounded-lg shadow-md bg-slate-100 space-y-2">
          <div>{curPokemon.name}</div>
          <div>ID: {curPokemon.id}</div>
          {curPokemon.sprites !== undefined ? (
            <img
              src={curPokemon.sprites.front_default}
              alt="pokemon_img"
              className="w-[70%]"
            />
          ) : null}
        </div>
        <select
          onChange={handleChange}
          className="text-xl border-2 rounded-md py-2 px-4 w-[50vh]"
        >
          {pokemonList.map((pokemon, idx) => (
            <option key={idx} value={pokemon.url}>
              {pokemon.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
