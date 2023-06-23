                   //Imports
//-------------------------------------------------//
import { useDispatch } from "react-redux";
import { getActivities, getCountries } from "../../Redux/actions";
import { useEffect } from "react";

                   //Hooks
//-------------------------------------------------//
const GetAll = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getActivities());
    dispatch(getCountries());
  }, []);
};

export default GetAll

