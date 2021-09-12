import axios from "axios";
import config from "../../config/config";

export const fetchAllSymbols = () => dispatch => {
    const apiUrlSymbols = `http://data.fixer.io/api/symbols?access_key=${config.access_key}`;

    dispatch(setLoaded(false));

    axios.get(apiUrlSymbols).then(({data}) => {
        dispatch(setSymbols(data.symbols));
        dispatch(setLoaded(true));
    });
}
export const setSymbols = (symbols) => ({
    type: 'SET_SYMBOLS',
    payload: symbols,
});
export const setLoaded = (isLoaded) => ({
    type: 'SET_LOADED',
    payload: isLoaded,
});

