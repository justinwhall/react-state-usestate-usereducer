'use client'
import React, { useState } from 'react';

interface Character {
  name: string;
  height: string;
  mass: string;
}

const StarWarsCharacters = () => {
  const [character, setCharacter] = useState<null|Character>(null);

  const fetchRandomCharacter = async () => {
    try {
      const response = await fetch('https://swapi.dev/api/people/');
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.results.length);
      setCharacter(data.results[randomIndex]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Star Wars Character</h1>
      {character ? (
        <div>
          <h2>{character.name}</h2>
          <p>Height: {character.height}</p>
          <p>Mass: {character.mass}</p>
        </div>
      ) : (
        <p>No character fetched</p>
      )}
      <button onClick={fetchRandomCharacter}>Fetch Random Character</button>
    </div>
  );
};

export default StarWarsCharacters;