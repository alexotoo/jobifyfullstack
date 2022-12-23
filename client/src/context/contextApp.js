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
  CLEAR_VALUES,
  HANDLE_CHANGE,
  CREATE_JOB_START,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_ERROR,
  GET_JOBS_START,
  GET_JOBS_SUCCESS,
  SET_EDIT_JOB,
  DELETE_JOB_START,
  EDIT_JOB_START,
  EDIT_JOB_SUCCESS,
  EDIT_JOB_ERROR,
  SHOW_STATS_START,
  SHOW_STATS_SUCCESS,
  CLEAR_FILTERS,
  CHANGE_PAGE,
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
    isEditing: false,
    editJobId: "",
    position: "",
    company: "",
    jobLocation: userLocation || "",
    jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
    jobType: "full-time",
    statusOptions: ["interview", "declined", "pending"],
    status: "pending",
    jobs: [],
    totalJobs: 0,
    numOfPages: 1,
    page: 1,
    stats: {},
    monthlyApplications: [],
    search: "",
    searchStatus: "all",
    searchType: "all",
    sort: "latest",
    sortOptions: ["latest", "oldest", "a-z", "z-a"],
  };
  return initialState;
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, getInitialState);

  //axios http setup
  const authHTTPfetch = axios.create({
    baseURL: "https://job101search.onrender.com/api/v1",
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
        "https://job101search.onrender.com/api/v1/auth/register",
        currentUser
      );

      const { user, token, location } = response.data;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user, token, location },
      });
      addUserToLocalStorage({ user, token, location });
    } catch (error) {
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
        "https://job101search.onrender.com/api/v1/auth/login",
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

      const { user, location, token } = data;

      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: { user, location, token },
      });
      addUserToLocalStorage({ user, location, token });
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({
          type: UPDATE_USER_ERROR,
          payload: { msg: error.response.data.msg },
        });
      }
    }
    clearAlert();
  };

  //global handle change
  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
  };

  //global clear values
  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES });
  };

  //create jobs
  const createJob = async () => {
    dispatch({ type: CREATE_JOB_START });
    try {
      const { position, company, jobLocation, jobType, status } = state;
      await authHTTPfetch.post("/jobs", {
        position,
        company,
        jobLocation,
        jobType,
        status,
      });
      dispatch({ type: CREATE_JOB_SUCCESS });
      dispatch({ type: CLEAR_VALUES });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: CREATE_JOB_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  //get all jobs
  const getJobs = async () => {
    const { page, search, searchStatus, searchType, sort } = state;

    let url = `/jobs?page=${page}&status=${searchStatus}&jobType=${searchType}&sort=${sort}`;
    if (search) {
      url = url + `&search=${search}`;
    }

    dispatch({ type: GET_JOBS_START });
    try {
      const { data } = await authHTTPfetch(url);
      const { jobs, totalJobs, numOfPages } = data;

      dispatch({
        type: GET_JOBS_SUCCESS,
        payload: {
          jobs,
          totalJobs,
          numOfPages,
        },
      });
    } catch (error) {
      logoutUser();
    }
    clearAlert();
  };

  //set edit job
  const setEditJob = (id) => {
    dispatch({ type: SET_EDIT_JOB, payload: { id } });
  };

  //edit job
  const editJob = async () => {
    dispatch({ type: EDIT_JOB_START });

    try {
      const { position, company, jobLocation, jobType, status } = state;
      await authHTTPfetch.patch(`/jobs/${state.editJobId}`, {
        company,
        position,
        jobLocation,
        jobType,
        status,
      });
      dispatch({ type: EDIT_JOB_SUCCESS });
      dispatch({ type: CLEAR_VALUES });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: EDIT_JOB_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  //delete job
  const deleteJob = async (jobId) => {
    dispatch({ type: DELETE_JOB_START });
    try {
      await authHTTPfetch.delete(`/jobs/${jobId}`);
      getJobs();
    } catch (error) {
      logoutUser();
    }
  };

  //show stats
  const showStats = async () => {
    dispatch({ type: SHOW_STATS_START });
    try {
      const { data } = await authHTTPfetch("/jobs/stats");

      dispatch({
        type: SHOW_STATS_SUCCESS,
        payload: {
          stats: data.defaultStats,
          monthlyApplications: data.monthlyApplications,
        },
      });
    } catch (error) {
      logoutUser();
    }
    clearAlert();
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };
  const changePage = (page) => {
    dispatch({ type: CHANGE_PAGE, payload: { page } });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        changePage,
        displayAlert,
        registerUser,
        loginUser,
        logoutUser,
        updateUser,
        handleChange,
        clearValues,
        createJob,
        getJobs,
        deleteJob,
        editJob,
        setEditJob,
        showStats,
        clearFilters,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//context custom hook
const useAppContext = () => useContext(AppContext);

export { AppProvider, getInitialState, useAppContext };
