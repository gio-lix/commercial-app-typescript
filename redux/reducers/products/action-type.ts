export const productActionType = {
    FETCH_PRODUCTS_REQUEST: 'FETCH_PRODUCTS_REQUEST',
    FETCH_PRODUCTS_SUCCESS: 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_ERROR: 'FETCH_PRODUCTS_ERROR',
}

export const requestProducts = () => ({type: productActionType.FETCH_PRODUCTS_REQUEST})