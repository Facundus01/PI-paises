                   //Imports
//-------------------------------------------------//
import { useDispatch , useSelector} from "react-redux";
import { getActivities, getCountries } from "../../Redux/actions";
import { useEffect } from "react";

                   //Hooks
//-------------------------------------------------//
const GetAll = () => {
  const { countries } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities());
    if (!countries.length)dispatch(getCountries()); 
  }, [countries]);
};  

export default GetAll

