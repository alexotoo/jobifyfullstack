import React, { useReducer, useContext, useEffect, useState } from "react";
import axios from "axios";
import reducer from "./reducer";

import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  UPDATE_INITIAL_STATES,
  LOGOUT_USER,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
} from "./actions";

const getInitialState = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  const userLocation = localStorage.getItem("location");

  const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: "",
    alertType: "",
    alertTitle: "",
    user: user,
    token: token,
    userLocation: userLocation || "",
    jobLocation: userLocation || "",
  };
  return initialState;
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, getInitialState);

  //axios http setup
  const authHTTPfetch = axios.create({
    baseURL: "http://localhost:8000/api/v1",
  });

  //with axios request
  authHTTPfetch.interceptors.request.use(
    (config) => {
      config.headers.common["Authorization"] = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  //with axios response
  authHTTPfetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        logoutUser();
      }
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    updateSates();
  }, []);

  const updateSates = () => {
    dispatch({ type: UPDATE_INITIAL_STATES });
  };

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const addUserToLocalStorage = ({ user, token, location }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("location", location);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("location");
  };

  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_START });

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/auth/register",
        currentUser
      );
      console.log(response);
      const { user, token, location } = response.data;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user, token, location },
      });
      addUserToLocalStorage({ user, token, location });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_USER_START });

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/auth/login",
        currentUser
      );

      const { user, token, location } = response.data;
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { user, token, location },
      });
      addUserToLocalStorage({ user, token, location });
    } catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  //logout user
  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };

  //update user
  const updateUser = async (currentUser) => {
    dispatch({ type: UPDATE_USER_START });
    try {
      const { data } = await authHTTPfetch.patch(
        "/auth/updateUser",
        currentUser,
        {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }
      );
      console.log(data);

      const { user, location, token } = data;

      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: { user, location, token },
      });
      addUserToLocalStorage({ user, location, token });
    } catch (error) {
      console.log(error.response);
      if (error.response.status !== 401) {
        dispatch({
          type: UPDATE_USER_ERROR,
          payload: { msg: error.response.data.msg },
        });
      }
    }
    clearAlert();
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        registerUser,
        loginUser,
        logoutUser,
        updateUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//context custom hook
const useAppContext = () => useContext(AppContext);

export { AppProvider, getInitialState, useAppContext };
