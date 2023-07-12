'use client'
import React, { useEffect, useState } from 'react';

interface Character {
  name: string;
  height: string;
  mass: string;
}

/**
 * Parent container component.
 *  - Fetches characters from the Star Wars API.
 *  - Manages the state.
 */
const StarWarsCharacters = () => {
  const [characters, setCharacters] = useState<null|Character[]>(null);

  const fetchAllCharacters = async () => {
    try {
      const response = await fetch('https://swapi.dev/api/people?format=json');
      const data = await response.json();
      setCharacters(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllCharacters();
  }, []);

  return (
    <div>
      {characters?.length ? (
        <CharacterList characters={characters} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

/**
 * Renders a list of characters.
 */
function CharacterList({ characters }: { characters: Character[] }) {
  return (
    <ul>
      {characters.map((character) => <SingleCharacter key={character.name} character={character} />)}
    </ul>
  );
}

/**
 * Renders a single character.
 */
function SingleCharacter ({ character }: { character: Character }) {
  return (
    <div className='p-5 bg-zinc-900 my-2'>
      <h2>{character.name}</h2>
      <p>Height: {character.height}</p>
      <p>Mass: {character.mass}</p>
    </div>
  )
}

export default StarWarsCharacters;