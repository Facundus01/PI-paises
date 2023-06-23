                   //Imports
//-------------------------------------------------//
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import ImagenHome from "../../Icons/hogar.png";
import ImagenOut from "../../Icons/salir-alt.png";
import ImagenAct from "../../Icons/calendario-lineas-boligrafo.png";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

                   //Component
//-------------------------------------------------//
const NavBar = () => {
  const location = useLocation();
  return (
    <div className={style.mainContainer}>
      <Link className={style.buttonHome} to="/home">
        <img className={style.imagenHome} src={ImagenHome} alt="" />
        Home
      </Link>
      <Link className={style.buttonAct} to="/create">
        <img className={style.imagenAct} src={ImagenAct} alt="" />
        Create Activity
      </Link>

      {location.pathname !== "/create" && <SearchBar></SearchBar>}
      <Link className={style.buttonOut} to="/">
        <img className={style.imagenOut} src={ImagenOut} alt="" />
        Start
      </Link>
    </div>
  );
};

export default NavBar;