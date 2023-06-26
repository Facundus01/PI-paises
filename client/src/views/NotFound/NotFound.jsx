import { Link } from "react-router-dom/cjs/react-router-dom.min";
import style from "./NotFound.module.css";
const NotFound = () => {
  return (
    <div className={style.notFound}>
      <h1 className={style.h1}>Not Found</h1>
      <Link className={style.button} to="/">
        Back to Start
      </Link>
    </div>
  );
};

export default NotFound;