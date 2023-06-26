import axios from "axios";
import {
  GET_COUNTRIES,
  GET_COUNTRY,
  CLEAN_COUNTRY,
  ORDER_COUNTRIES,
  SEARCH_COUNTRIES,
  FILTER_CONTINENT,
  ORDER_POPULATION,
  FILTER_ACTIVITY,
  GET_ACTIVITIES,
  DELETE_ACTIVITY,
  GET_ACTIVITY,
} from "./action-types";

export const getCountries = () => {
  return async function (dispatch) {
    const dbData = await axios.get("countries");
    const countries = dbData.data.allCountries;
    dispatch({ type: GET_COUNTRIES, payload: countries });
  };
};

/* FETCH:

export const getCountries = () => {
  return function (dispatch) {
   fetch("countries")
   .then(response => response.json())
   .then(data => {
    return dispatch({ type: GET_COUNTRIES, payload: data.allCountries });
   })   
  };
};

*/

export const getCountry = (id) => {
  return async function (dispatch) {
    const dbData = await axios.get(`countries/${id}`);
    const country = dbData.data;
    dispatch({ type: GET_COUNTRY, payload: country });
  };
};

/* FETCH:

export const getCountry = (id) => {
  return function (dispatch) {
    fetch(`countries/${id}`)
    .then(response => response.json())
    .then(data => {
      return dispatch({ type: GET_COUNTRY, payload: data });
    })
  };
};

*/

export const cleanCountry = () => {
  return { type: CLEAN_COUNTRY };
};

export const orderCountries = (value) => {
  return {
    type: ORDER_COUNTRIES,
    payload: value,
  };
};

export const searchCountries = (search) => {
  return async function (dispatch) {
    try {
      const dbData = await axios.get(
      `countries/name?name=${search}`
      );
      return dispatch({
        type: SEARCH_COUNTRIES,
        payload: dbData.data.countriesFind,
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };
};

export const filterContinent = (continent) => {
  return {
    type: FILTER_CONTINENT,
    payload: continent,
  };
};

export const orderPopulation = (value) => {
  return {
    type: ORDER_POPULATION,
    payload: value,
  };
};

export const getActivities = () => {
  return async function (dispatch) {
    const dbData = await axios.get("activities");
    const activities = dbData.data.actividadTuristica;

    dispatch({ type: GET_ACTIVITIES, payload: activities });
  };
};

/*/ FETCH

export const getActivities = () => {
  return function (dispatch) {
    fetch("activities")
    .then(response => response.json())
    .then(data =>{
      return dispatch({type:GET_ACTIVITIES, payload: data.actividadTuristica})
    })
  };
};
/*/

export const filterActivity = (value) => {
  return {
    type: FILTER_ACTIVITY,
    payload: value,
  };
};

export const deleteAcitivty = (id) => {
  return async (dispatch) => {
    const res = await axios.delete(`activities/${id}`);
    alert(res.data);
    return dispatch({
      type: DELETE_ACTIVITY,
      payload: id,
    });
  };
};

export const getActivity = (id) => {
  return { type: GET_ACTIVITY, payload: id };
};