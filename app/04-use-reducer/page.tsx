'use client'
import React, { useContext, useEffect, useReducer } from 'react';
import reducer, { StarWarsContext } from '../../state/store'

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
  /**
   * @See new code!
   */
  const ctx = useContext(StarWarsContext);
  const [state, dispatch] = useReducer(reducer, ctx.state);

  const fetchAllCharacters = async () => {
    try {
      const response = await fetch('https://swapi.dev/api/people?format=json');
      const data = await response.json();
      dispatch({ type: 'SET_CHARACTERS', payload: data.results });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllCharacters();
  }, []);

  return (
    <StarWarsContext.Provider value={{ state, dispatch }}>
        <CharacterList />
    </StarWarsContext.Provider>
  );
};

/**
 * Renders a list of characters.
 */
function CharacterList() {
  const { state } = useContext(StarWarsContext);

  return !state.characters.length ? <p>Loading...</p> : (
    <ul>
      {state.characters.map((character) => <SingleCharacter key={character.name} character={character} />)}
    </ul>
  );
}

/**
 * Renders a single character.
 */
function SingleCharacter ({ character }: { character: Character }) {
  const { state, dispatch } = useContext(StarWarsContext);

  const addFave = (characterName: string): void => dispatch({ type: 'ADD_FAVE', payload: characterName });

  const removeFave = (characterName: string): void => dispatch({ type: 'REMOVE_FAVE', payload: characterName });

  return (
    <div className='p-5 bg-zinc-900 my-2'>
      <h2>{character.name}</h2>
      <p>Height: {character.height}</p>
      <p>Mass: {character.mass}</p>
      <button onClick={() => addFave(character.name)}>Add to Favorites</button>
      <button onClick={() => removeFave(character.name)}>Remove from Favorites</button>
      {state.favorites.includes(character.name) && (
        <div className="py-3 px-4 rounded-full bg-lime-600 inline-block ml-1">★</div>
      )}
    </div>
  )
}

export default StarWarsCharacters;