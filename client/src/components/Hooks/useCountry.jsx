                   //Imports
//-------------------------------------------------//
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { cleanCountry, getCountry } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";

                   //Hooks
//-------------------------------------------------//
const useCountry = () => {
  const dispatch = useDispatch();
  const { country } = useSelector((state) => state);
  const { detailId } = useParams();

  useEffect(() => {
    dispatch(getCountry(detailId));

    return () => {
      dispatch(cleanCountry());
    };
  }, [detailId]);
  return country;
};

export default useCountry;