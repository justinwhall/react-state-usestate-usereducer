import { createContext } from "react";

// Define the state type
interface State {
  characters: string[];
  favorites: string[];
}

// Define the action type
type Action =
    { type: 'ADD_FAVE', payload: string }
  | { type: 'REMOVE_FAVE', payload: string }
  | { type: 'SET_CHARACTERS', payload: [] }

// Define the initial state
const initialState: State = {
  characters: [],
  favorites: [],
}

// create the context
export const StarWarsContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

// Define the reducer
const reducer = (state: State, action: Action): State => {
  console.log('action ➔', action);
  switch (action.type) {
    case 'ADD_FAVE':
      return { ...state, favorites: [...state.favorites, action.payload] };
    case 'REMOVE_FAVE':
      return { ...state, favorites: state.favorites.filter(fave => fave !== action.payload) };
    case 'SET_CHARACTERS':
      return { ...state, characters: action.payload };
    default:
      return state;
  }
};

export default reducer