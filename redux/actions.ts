import {fetchProducts} from "../pages/api";
import {Dispatch} from "redux";
import {LOADING_OFF, LOADING_ON} from "./type";

// export const loadingOn: any = () => {
//     return async (dispatch: Dispatch) => dispatch({type: LOADING_ON})
// }
// export const loadingOff: any = () => {
//     return async (dispatch: Dispatch) => dispatch({type: LOADING_OFF})
// }


export const fetchingData = () => {
    return async (dispatch: Dispatch) => {
        try {
            const data = await fetchProducts.getProducts()
            dispatch({type: 'FETCH_DATA', payload: data})
        } catch (err) {
            console.log(err)
        }
    }
}