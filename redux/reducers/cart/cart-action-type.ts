export const cartActionType = {
    CART_REQUEST: "CART_REQUEST",
    CART_SUCCESS: "CART_SUCCESS",
    CART_DELETE: "CART_DELETE",
}

export const fetchCartRequest = (data: any) => ({type: cartActionType.CART_REQUEST, payload: data})
// export const fetchCArtDelete = () => ({type: cartActionType.CART_REQUEST})