const initialState = {
  users: [],
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.data };
    default:
      return state;
  }
};

export default users;
