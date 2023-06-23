                   //Imports
//-------------------------------------------------//
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivity } from "../../Redux/actions";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

                   //Hooks
//-------------------------------------------------//
const GetActivity = () => {
  const dispatch = useDispatch();
  const { activity } = useSelector((state) => state);
  const { activityId } = useParams();

  useEffect(() => {
    dispatch(getActivity(activityId));
  }, [activityId]);

  return activity;
};

export default GetActivity;