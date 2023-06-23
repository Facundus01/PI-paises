import CardsContainers from "../../components/CardsContainer/CardsContainer";
import style from "./Home.module.css";
const Home = () => {
  //**************************************************************************** */
  return (
    <div className={style.home}>
      <CardsContainers></CardsContainers>
    </div>
  );
};

export default Home;