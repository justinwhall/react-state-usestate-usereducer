// Define the state type
interface State {
  favorites: string[];
}

// Define the action type
type Action = { type: 'ADD_FAVE', payload: string } | { type: 'REMOVE_FAVE', payload: string };

// Define the reducer
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_FAVE':
      return { favorites: [...state.favorites, action.payload] };
    case 'REMOVE_FAVE':
      return { favorites: state.favorites.filter(fave => fave !== action.payload) };
    default:
      return state;
  }
};

export default reducer