import {cartActionType} from "./cart-action-type";
import { NIProductsTypes} from "../../types";

interface ICart {
    cart: NIProductsTypes[]
}

const initialState: ICart = {
    cart: []
}

export const cartReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case cartActionType.CART_SUCCESS:
            const product = action.payload.product
            const exist = state.cart.find((x: any) => x.id === product.id)
            if (exist) {
                state.cart.map((e: any) => e.id === product.id ? {...e, qty: e.qty += Number(1)} : e)
            } else {
                const oldProduct = action.payload.product
                return {...state, cart: [...state.cart , {...oldProduct, qty: 1}]}
            }
        case cartActionType.CART_DELETE:
            const newDeleteArr = state.cart.filter((el: any) => el.id !== action.payload)
            console.log('newDeleteArr', newDeleteArr)
            return {...state, cart: newDeleteArr}
        case cartActionType.CART_INCREASE_QUANTITY_SUCCESS:
            const existItem = state.cart.find((x: any) => x.id === action.payload)
            if (existItem) {
               state.cart.map((e: any) => e.id === action.payload ? {...e, qty: e.qty += Number(1)} : e)
            }
            return {...state}
        case cartActionType.CART_DECREASE_QUANTITY_SUCCESS:
            const existDecreaseItem = state.cart.find((x: any) => x.id === action.payload)
            if (existDecreaseItem) {
                state.cart.map((e: any) => e.id === action.payload ? {...e, qty: e.qty -= Number(1)} : e)
            }
            return {...state}
        default:
            return state
    }
}