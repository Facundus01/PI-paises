                   //Imports
//-------------------------------------------------//
import style from "./Card.module.css";
import { Link } from "react-router-dom";

                   //Component DUMB
//-------------------------------------------------//
const Card = (props) => {
  return (
    <div className={style.card}>
      <Link className={style.link} to={`/detail/${props.id}`}>
        <p> {props.name}</p>
      </Link>
      <img className={style.image} src={props.flag} alt={props.name} />
      <p> {props.continent}</p>
    </div>
  );
};

export default Card;


/* Class Component:

                   //Imports
//-------------------------------------------------//
import React from "react"
import style from "./Card.module.css";
import { Link } from "react-router-dom";

                   //Component DUMB
//-------------------------------------------------//
class Card extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
        <div className={style.card}>
      <Link className={style.link} to={`/detail/${props.id}`}>
        <p> {props.name}</p>
      </Link>
      <img className={style.image} src={props.flag} alt={props.name} />
      <p> {props.continent}</p>
    </div>
    )
  }
}
Si este fuera el componente CardsContainer tendriamos que usar mapStateToProps y mapDispatchToProps
*/ 
