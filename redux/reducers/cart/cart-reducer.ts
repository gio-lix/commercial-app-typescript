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
            return {...state}

        default:
            return state
    }
}