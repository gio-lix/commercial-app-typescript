export const cartActionType = {
    CART_REQUEST: "CART_REQUEST",
    CART_SUCCESS: "CART_SUCCESS",
    CART_DELETE: "CART_DELETE",

    CART_DELETE_REQUEST: "CART_DELETE_REQUEST",

    CART_INCREASE_QUANTITY_REQUEST: 'CART_INCREASE_QUANTITY_REQUEST',
    CART_INCREASE_QUANTITY_SUCCESS: 'CART_INCREASE_QUANTITY_REQUEST',
    CART_DECREASE_QUANTITY_REQUEST: 'CART_DECREASE_QUANTITY_SUCCESS',
    CART_DECREASE_QUANTITY_SUCCESS: 'CART_DECREASE_QUANTITY_SUCCESS',

}

export const fetchCartRequest = (data: any) => ({type: cartActionType.CART_REQUEST, payload: data})
export const fetchCartDelete = (id: any) => {
    console.log('id', id)
    return {type: cartActionType.CART_DELETE_REQUEST, payload: id}
}
export const fetchCartQuantity = (id: any) => ({type: cartActionType.CART_INCREASE_QUANTITY_REQUEST, payload: id})
export const fetchCartQuantityDecrease = (id: any) => ({type: cartActionType.CART_DECREASE_QUANTITY_REQUEST, payload: id})

