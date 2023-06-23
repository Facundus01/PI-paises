//* Inicio el Estado Global

import {
    CLEAN_COUNTRY,
    GET_COUNTRIES,
    GET_COUNTRY,
    ORDER_COUNTRIES,
    SEARCH_COUNTRIES,
    FILTER_CONTINENT,
    ORDER_POPULATION,
    GET_ACTIVITIES,
    FILTER_ACTIVITY,
    DELETE_ACTIVITY,
    GET_ACTIVITY,
  } from "./action-types";
  
  const initialState = {
    allCountries: [],
    countries: [],
    country: {},
    activities: [],
    activity: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_COUNTRIES:
        return {
          ...state,
          allCountries: action.payload,
          countries: action.payload,
        };
      case GET_COUNTRY: {
        return {
          ...state,
          country: action.payload,
        };
      }
      case CLEAN_COUNTRY: {
        return {
          ...state,
          country: {},
        };
      }
      case ORDER_COUNTRIES: {
        return {
          ...state,
          countries:
            action.payload === "Ascendente"
              ? state.countries.sort((a, b) => a.name.localeCompare(b.name))
              : state.countries.sort((a, b) => b.name.localeCompare(a.name)),
        };
      }
      case ORDER_POPULATION: {
        return {
          ...state,
          countries:
            action.payload === "Ascendente"
              ? state.countries.sort((a, b) => b.population - a.population)
              : state.countries.sort((a, b) => a.population - b.population),
        };
      }
      case SEARCH_COUNTRIES: {
        if (typeof action.payload === "string") throw new Error();
        return {
          ...state,
  
          countries: action.payload,
        };
      }
      case FILTER_CONTINENT: {
        const allContinent = state.allCountries;
  
        const filterContinent =
          action.payload === "All"
            ? allContinent
            : action.payload === "North America"
            ? allContinent.filter((country) =>
                country.continent.includes("North America")
              )
            : action.payload === "South America"
            ? allContinent.filter((country) =>
                country.continent.includes("South America")
              )
            : action.payload === "America"
            ? allContinent.filter((country) =>
                country.continent.includes("America")
              )
            : allContinent.filter(
                (country) => country.continent === action.payload
              );
  
        return {
          ...state,
          countries: filterContinent,
        };
      }
      case GET_ACTIVITIES: {
        return {
          ...state,
          activities: action.payload,
        };
      }
      case FILTER_ACTIVITY: {
        const idsCountries = action.payload.split(",");
  
        const allCountries = state.allCountries;
        const filterActivity = allCountries.filter((country) =>
          idsCountries.includes(country.id)
        );
  
        return {
          ...state,
          countries: filterActivity,
        };
      }
      case DELETE_ACTIVITY: {
        const activitiesFilter = state.activities.filter(
          (activity) => activity.id != action.payload
        );
  
        return {
          ...state,
          activities: activitiesFilter,
        };
      }
      case GET_ACTIVITY: {
        const ActivityFind = state.activities.find(
          (activity) => activity.id == action.payload
        );
  
        return {
          ...state,
          activity: ActivityFind,
        };
      }
      default:
        return { ...state };
    }
  };
  
  export default rootReducer;