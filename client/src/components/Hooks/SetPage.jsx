                   //Imports
//-------------------------------------------------//
import { useEffect } from "react";
import { useSelector } from "react-redux";

                   //Hooks
//-------------------------------------------------//
const SetPage = (setPage) => {
  const { countries } = useSelector((state) => state);
  useEffect(() => {
    setPage(1);
  }, [countries]);
};

export default SetPage;

