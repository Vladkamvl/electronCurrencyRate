const initialState = {
  items: {},
  isLoaded: false,
};

export const symbols = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SYMBOLS':
      return {
        ...state,
        items: action.payload,
      }
    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload,
      }
    default:
      return state;
  }
};
