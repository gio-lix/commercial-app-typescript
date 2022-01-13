import {LOADING_OFF, LOADING_ON} from "../type";

interface ILoading {
    loading: boolean
}
const initialState: ILoading = {
    loading: false
}


export const loadingReduce = (state: ILoading = initialState, action: any) => {

    switch (action.type) {
        case LOADING_ON:
            return {loading: true}
        case LOADING_OFF:
            return {loading: false}
        default:
            return state
    }
}