import {fetchProducts} from "../pages/api";

export const fetchingData = () => {
    return async (dispatch: any) => {
        try {
            const data = await fetchProducts.getProducts()
            dispatch({type: 'FETCH_DATA', payload: data})
        } catch (err) {
            console.log(err)
        }
    }
}