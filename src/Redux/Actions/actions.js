import { GET_TEMPERAMENT,GET_DOGS, PAGINATE, FILTER,ORDER,GET_DOG_NAME, GET_DOGSAPI, GET_DOGSDB} from './action-types';
import axios from 'axios';

export const getTemperament = () => {
    return async (dispatch) =>{
        try {
            const response = await axios.get('https://servidor-dogs-tzwx.onrender.com/temperament');
            dispatch({
                type: GET_TEMPERAMENT,
                payload: response.data
            })
        } catch (error) {
            
        }
    }
}

export const postDog = (state) =>{
    return async (dispatch) =>{
        try {
            await axios.post("https://servidor-dogs-tzwx.onrender.com/dogs", state)
            alert("Raza creada con exito!")
        } catch (error) {
            alert(error.response.data.error)
        }
    }
}

export const getDogs = () =>{
    return async (dispatch) =>{
        try {
            const response = await axios.get('https://servidor-dogs-tzwx.onrender.com/dogs');
            dispatch({
                type: GET_DOGS,
                payload: response.data
            })
        } catch (error) {
            alert(error)
        }
    }
}
export const getDogsApi = () =>{
    return async (dispatch) =>{
        try {
            const response = await axios.get('https://servidor-dogs-tzwx.onrender.com/dogs/api');
            dispatch({
                type: GET_DOGSAPI,
                payload: response.data
            })
        } catch (error) {
            alert(error)
        }
    }
}
export const getDogsDb = () =>{
    return async (dispatch) =>{
        try {
            const response = await axios.get('https://servidor-dogs-tzwx.onrender.com/dogs/db');
            dispatch({
                type: GET_DOGSDB,
                payload: response.data
            })
        } catch (error) {
            alert(error)
        }
    }
}
export const paginateDogs = (order) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: PAGINATE,
                payload: order
            })
        } catch (error) {
            alert(error)
        }

    }
}
export const filterTemperamentAction = (t) => {
    
    return async (dispatch) => {
        try {
            dispatch({
                type: FILTER,
                payload: t
            })
        } catch (error) {
            alert(error)
        }

    }
}
export const orderDogsAction = (order ) => {
    return async (dispatch) => {
        
        try {
            dispatch({
                type: ORDER,
                payload: order
            })
        } catch (error) {
            alert(error.response.data.error)
        }

    }
}
export const getDogsName = (name) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`https://servidor-dogs-tzwx.onrender.com/dogs?name=${name}`);
            dispatch({
                type: GET_DOG_NAME,
                payload: response.data
            })
        } catch (error) {
            alert(error.response.data.error)
        }

    }
}