                   //Imports
//-------------------------------------------------//
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  filterContinent,
  getCountries,
  orderCountries,
  orderPopulation,
  filterActivity,
  deleteAcitivty,
} from "../../Redux/actions";
import Pagination from "../Pagination/Pagination";
import  GetAll  from "../Hooks/GetAll";
import  SetPage  from "../Hooks/SetPage";

                   //Component SMART
//-------------------------------------------------//
const CardsContainer = () => {
  const dispatch = useDispatch();
  const { allCountries, countries, activities } = useSelector((state) => state);

  GetAll();

  const [page, setPage] = useState(1);
  const countriesForPage = 10;
  const maxPages = Math.ceil(countries.length / countriesForPage);

  SetPage(setPage);

  const handlerOrderName = (event) => {
    dispatch(orderCountries(event.target.value));
  };

  const handlerOrderPopulation = (event) => {
    dispatch(orderPopulation(event.target.value));
  };

  const handlerAllCountries = () => {
    dispatch(getCountries());
  };

  const handlerFilterContinent = (event) => {
    dispatch(filterContinent(event.target.value));
  };

  const handlerFilterActivity = (event) => {
    dispatch(filterActivity(event.target.value));
  };

  const handlerDeleteAcitivty = (event) => {
    const shouldDelete = window.confirm(
      "¿Are you sure you want to delete the activity?"
    );
    if (shouldDelete) {
      dispatch(deleteAcitivty(event.target.value));
    }
  };

  return (
    <div className={style.container}>
      <div className={style.buttonsContainer}>
        <select
          value={""}
          className={style.select}
          name="orderName"
          onChange={handlerOrderName}
        >
          <option hidden> Choose Alphabetical Order</option>
          <option disabled={true}> Select an Order </option>
          <option value="Ascendente">A-Z</option>
          <option value="Descendente">Z-A</option>
        </select>

        <select
          value={""}
          className={style.select}
          name="orderPopulation"
          onChange={handlerOrderPopulation}
        >
          <option hidden>Choose Population Order</option>
          <option disabled={true}> Select an Order </option>
          <option value="Ascendente">Elderly</option>
          <option value="Descendente">Minor</option>
        </select>

        <button className={style.select} onClick={handlerAllCountries}>
          <span>All Countries</span>
        </button>

        <select
          value={""}
          className={style.select}
          onChange={handlerFilterContinent}
        >
          <option hidden>Choose Continent</option>
          <option disabled={true}>Select a Continent</option>
          <option value="All">All Continents</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="America">America</option>
          <option value="Africa">Africa</option>
          <option value="Antarctica">Antartica</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>

        <select
          value={""}
          className={style.select}
          onChange={handlerFilterActivity}
        >
          <option hidden>Choose Activity</option>
          <option disabled={true}>Select an Activity</option>
          {activities.map((activity) => (
            <option value={activity.Countries.map((country) => country.id)}>
              {activity.name}
            </option>
          ))}
        </select>
        <select
          value={""}
          className={style.select}
          onChange={handlerDeleteAcitivty}
        >
          <option hidden>Delete Activity</option>
          <option disabled={true}>Select an Activity</option>
          {activities.map((activity) => (
            <option value={activity.id}>{activity.name}</option>
          ))}
        </select>
      </div>
      <div className={style.divPagination}>
        <Pagination setPage={setPage} page={page} maxPages={maxPages} />
      </div>
      <div className={style.cardsContainer}>
        {countries !== allCountries && countries.length !== 0
          ? countries
              ?.slice(
                (page - 1) * countriesForPage,
                (page - 1) * countriesForPage + countriesForPage
              )
              .map(({ id, name, flag, continent }) => {
                return (
                  <Card
                    key={id}
                    id={id}
                    name={name}
                    flag={flag}
                    continent={continent}
                  />
                );
              })
          : countries
              ?.slice(
                (page - 1) * countriesForPage,
                (page - 1) * countriesForPage + countriesForPage
              )
              .map(({ id, name, flag, continent }) => {
                return (
                  <Card
                    key={id}
                    id={id}
                    name={name}
                    flag={flag}
                    continent={continent}
                  />
                );
              })}
      </div>
    </div>
  );
};

export default CardsContainer;