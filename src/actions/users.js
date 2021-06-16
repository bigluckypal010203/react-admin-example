import axios from "axios";
const endpoint = process.env.REACT_APP_ENDPOINT || "https://my.api.mockaroo.com/users.json?key=ac276b00";

const getUsersSuccess = (data) => {
  return { type: "GET_USERS", data };
};

export const getUsers = (callback) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(endpoint);
      dispatch(getUsersSuccess(res.data));

      if (typeof callback === "function") callback({ success: true });
    } catch (e) {
      console.log(e);
      if (typeof callback === "function") callback({ success: false });
    }
  };
};
