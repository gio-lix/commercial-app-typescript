import {HYDRATE} from "next-redux-wrapper";
import {productActionType} from "./action-type";
import {IProductsTypes} from "../../types";

interface IProducts {
    products: IProductsTypes[]
    errors: string
}

const initialState: IProducts = {
    products: [],
    errors: ''
}

export const productReducer = (state = initialState, action :any) => {
    switch (action.type) {
        case HYDRATE: {
            return {...state, ...action.payload.productReducer}
        }
        case productActionType.FETCH_PRODUCTS_SUCCESS:
            return {...state, products: action.payload}
        case productActionType.FETCH_PRODUCTS_ERROR:
            return {...state, errors: action.payload.message}
        default:
            return state
    }
}

const initialStateId: any  = {
    productsId: [],
    errors: ''

}

export const productReducerId = (state = initialStateId, action :any) => {
    switch (action.type) {
        case HYDRATE: {
            return {...state, ...action.payload.productReducerId}
        }
        case productActionType.FETCH_PRODUCTS_SUCCESS_ID:
            return {...state, productsId: action.payload}
        case productActionType.FETCH_PRODUCTS_ERROR_ID:
            return {...state, errors: action.payload.message}
        default:
            return state
    }
}