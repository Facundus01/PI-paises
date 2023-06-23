                   //Imports
//-------------------------------------------------//
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCountries } from "../../Redux/actions";
import style from "./SearchBar.module.css";

                   //Component
//-------------------------------------------------//
const SearchBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  function onSubmit(event) {
    event.preventDefault();
    if (search.length === 0) return alert("You must put a Country");
    dispatch(searchCountries(search));
    setSearch("");
  }

  function onInputChange(event) {
    setSearch(event.target.value);
  }

  return (
    <div className={style.container}>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="search"
          placeholder="Write the Country"
          onChange={onInputChange}
          value={search}
          className={style.input}
        />
        <input className={style.button} type="submit" value="Search 🔎" />
      </form>
    </div>
  );
};

export default SearchBar;