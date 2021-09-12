const initialState = {
  items: {},
  isLoaded: false,
};

export const courses = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COURSES':
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
