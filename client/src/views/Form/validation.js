const validation = (form, errorsState) => {
    const errors = { ...errorsState };
  
    !form.name
      ? (errors.name = "Debe ponerle un nombre a la actividad")
      : (errors.name = "");
  
    // !form.duration || form.duration === "0"
    //   ? (errors.duration = "Debe ingresar alguna hora")
    //   : (errors.duration = "");
  
    !form.difficulty || form.difficulty === "0"
      ? (errors.difficulty = "Debe ingresar una dificultad")
      : (errors.difficulty = "");
  
    !form.season
      ? (errors.season = "Debe ingresar una temporada")
      : (errors.season = "");
    !form.countries || form.countries.length === 0
      ? (errors.countries = "Debe ingresar por lo menos un pais")
      : (errors.countries = "");
  
    return errors;
  };
  
  export default validation;