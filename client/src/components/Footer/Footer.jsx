                   //Imports
//-------------------------------------------------//
import github from "../../Icons/github.png";
import style from "./Footer.module.css";
import whatsapp from "../../Icons/whatsapp.png";
import instagram from "../../Icons/instagram.png";
import facebook from "../../Icons/facebook.png";
import youtube from "../../Icons/youtube.png";

                   //Component
//-------------------------------------------------//
const Footer = () => {
  return (
    <div className={style.divFooter}>
      <p className={style.pe}>Creator: Facundo Moreno</p>
      <p className={style.pe}>
        Website made for the individual project of Henry
      </p>

      <p>Social Networks:</p>
      <a href="https://github.com/facundus01" target="_blank">
        <img className={style.imagen} src={github} alt="" />
      </a>
      <a href="https://web.whatsapp.com/" target="_blank">
        <img className={style.imagen} src={whatsapp} alt="" />
      </a>
      <a href="https://www.instagram.com/fachu_moreno" target="_blank">
        <img className={style.imagen} src={instagram} alt="" />
      </a>
      <a href="http://faceboook.com/" target="_blank">
        <img className={style.imagen} src={facebook} alt="" />
      </a>
      <a href="https://www.youtube.com/" target="_blank">
        <img className={style.imagen} src={youtube} alt="" />
      </a>
    </div>
  );
};

export default Footer;