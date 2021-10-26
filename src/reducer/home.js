const initialState = {
  loading: false,
  data: [],
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case "DATA_FETCH_REQUESTED":
      return { ...state, loading: true };

    case "DATA_FETCH_SUCCEEDED":
      return { ...state, data: action.data };

    case "DATA_FETCH_FAILED":
      return { ...state, loading: false };

    default:
      return state;
  }
}

export default homeReducer;
