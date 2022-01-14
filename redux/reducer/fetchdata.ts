interface Initial  {
    products: {}[],
    productsById: any
}

const initialState: Initial = {
    products: [],
    productsById: {}
}

export const fetchData = (state = initialState, action: any) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return {...state, products: action.payload}
        case 'FETCH_DATA_Id':
            return {...state, productsById: action.payload}
        default:
            return state
    }
}