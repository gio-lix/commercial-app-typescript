import {HYDRATE} from "next-redux-wrapper";
import {productActionType} from "./action-type";
import {IProductsTypes} from "../../types";

interface IProducts {
    products: IProductsTypes[]
}

const initialState: IProducts = {
    products: []
}

export const productReducer = (state = initialState, action :any) => {
    switch (action.type) {
        case HYDRATE: {
            return {...state, ...action.payload.productReducer}
        }
        case productActionType.FETCH_PRODUCTS_SUCCESS:
            return {...state, products: action.payload}
        default:
            return state
    }
}

const initialStateId: any = {
    productsId: []
}

export const productReducerId = (state = initialStateId, action :any) => {
    switch (action.type) {
        case HYDRATE: {
            return {...state, ...action.payload.productReducerId}
        }
        case productActionType.FETCH_PRODUCTS_SUCCESS_ID:
            return {...state, productsId: action.payload}
        default:
            return state
    }
}