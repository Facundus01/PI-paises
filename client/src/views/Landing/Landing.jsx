import { Link } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={style.landing}>
      <h1 className={style.h1}>Individual Project: Countries</h1>

      <Link to="/home" className={style.button}>
        Enter
      </Link>
    </div>
  );
};

export default Landing;