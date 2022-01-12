interface Initial  {
    products: {}[]
}

const initialState: Initial = {
    products: []
}

export const fetchData = (state = initialState, action: any) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return {...state, products: action.payload}
        default:
            return state
    }
}