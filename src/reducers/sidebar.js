const initialState = {
  sidebarShow: "responsive",
};

const sidebar = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case "SET":
      return { ...state, ...rest };
    default:
      return state;
  }
};

export default sidebar;
