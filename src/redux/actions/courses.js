import axios from "axios";
import config from "../../config/config";

export const fetchAllCourses = () => dispatch => {

    const apiUrl = `http://data.fixer.io/api/latest?access_key=${config.access_key}`;

    dispatch(setCoursesLoaded(false));

    axios.get(apiUrl).then(({data}) => {
        dispatch(setCourses(data.rates));
        dispatch(setCoursesLoaded(true));
    });

};
export const setCourses = (courses) => ({
  type: 'SET_COURSES',
  payload: courses,
});
export const setCoursesLoaded = (isLoaded) => ({
  type: 'SET_LOADED',
  payload: isLoaded,
});