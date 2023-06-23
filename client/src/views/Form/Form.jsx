import { useState } from "react";
import axios from "axios";
import validation from "./validation";
import { useSelector } from "react-redux";
import style from "./Form.module.css";

const Form = () => {
  //! ESTADOS
  const { allCountries } = useSelector((state) => state);
  // const allCountries = useSelector((state)=> state.allCountries)

  const [form, setForm] = useState({
    name: "",
    difficulty: "",
    duration: "0",
    season: "",
    countries: [],
  });

  //* Estado de errores
  const [errors, setErrors] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: "",
  });

  //******************************************************************* */
  //! FUNCIONES

  //* Funcion que maneja los cambios de los input
  const changeHandler = (event) => {
    if (event.target.name === "countries") {
      if (!form.countries.find((id) => id === event.target.value)) {
        const { name, value } = event.target;
        setForm({
          ...form,
          [name]: [...form.countries, value],
        });

        setErrors(
          validation(
            {
              ...form,
              [name]: value,
            },
            errors
          )
        );
      } else {
        alert("Pais ya agregado");
      }
    } else {
      const { name, value } = event.target;

      setForm({ ...form, [name]: value });

      setErrors(validation({ ...form, [name]: value }, errors));
    }
  };

  //* BOTON SUBMIT QUE ENVIA EL FORM
  const submitHandler = async (event) => {
    event.preventDefault();
    if (
      form.name.length !== 0 &&
      form.difficulty.length !== 0 &&
      form.season.length !== 0 &&
      form.countries.length !== 0
    ) {
      await axios
        .post("http://localhost:3001/activities", form)
        .then((res) => alert(res.data))
        .catch((error) => alert(error.message));
/*
     fetch("http://localhost:3001/activities",{
       METHOD: "POST",
       headers:{
        "Content-Type": "aplication/json",
       }
    });
*/        
      setForm({
        name: "",
        difficulty: "",
        duration: "0",
        season: "",
        countries: [],
      });
      document.forms["formTag"].reset();
    } else {
      alert("Missing data");
    }
  };

  const deleteHandler = (event) => {
    setForm({
      ...form,
      countries: form.countries.filter((country) => country !== event),
    });
  };

  //******************************************************************* */
  return (
    <form name="formTag" className={style.form} onSubmit={submitHandler}>
      <div className={style.divs}>
        <label className={style.label}> Name </label>
        <input
          className={style.input}
          placeholder="Name of the Activity"
          type="text"
          value={form.name}
          onChange={changeHandler}
          name="name"
        />
      </div>
      <span className={style.errors}>{errors.name}</span>

      <div className={style.divs}>
        <label className={style.label}> Difficulty </label>
        <select
          className={style.input}
          name="difficulty"
          onChange={changeHandler}
        >
          <option hidden> Choose Difficulty </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <span className={style.errors}>{errors.difficulty}</span>

      <div className={style.divs}>
        <label className={style.label}>Hours of Duration</label>
        <input
          className={style.input}
          type="number"
          value={form.duration}
          onChange={changeHandler}
          name="duration"
          min={0}
        />
      </div>
      <span className={style.errors}>{errors.duration}</span>

      <div className={style.divs}>
        <label className={style.label}> Season </label>
        <select className={style.input} name="season" onChange={changeHandler}>
          <option hidden>Choose Season</option>
          <option value="Winter">Winter</option>
          <option value="Autumn">Autumn</option>
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
        </select>
      </div>
      <span className={style.errors}>{errors.season}</span>

      <div className={style.divs}>
        <label className={style.label}>Country</label>
        <select
          className={style.input}
          name="countries"
          onChange={changeHandler}
          value={""}
        >
          <option hidden>Choose Country</option>
          {allCountries.map((country) => (
            <option value={country.id}>{country.name}</option>
          ))}
        </select>
      </div>
      <span className={style.errors}>{errors.countries}</span>
      <div className={style.divCountries}>
        {form.countries.map((id) => {
          const selectedCountry = allCountries.find(
            (country) => country.id === id
          );
          return (
            <div className={style.divCountry} key={id}>
              <input
                type="button"
                value="X"
                onClick={() => deleteHandler(id)}
              />
              <p>{selectedCountry.name}</p>
              <img className={style.flag} src={selectedCountry.flag} />
            </div>
          );
        })}
      </div>
      <div>
        <button className={style.buttonSubmit} type="submit">
          Post Activity
        </button>
      </div>
    </form>
  );
};

export default Form;