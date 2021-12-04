import { createContext, useReducer } from "react";
import { LOGIN, LOGOUT } from "./constants";

const initialState = {
  user: null,
  login: (userData) => {},
  logout: () => {},
};

export const AuthContext = createContext(initialState);

const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const login = (userData) => {
    localStorage.setItem("rhouse", userData.token);
    dispatch({
      type: LOGIN,
      payload: userData,
    });
  };
  const logout = () => {
    localStorage.removeItem("rhouse");
    dispatch({
      type: LOGOUT,
    });
  };
  return (
    <AuthContext.Provider value={{ user: state.user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
