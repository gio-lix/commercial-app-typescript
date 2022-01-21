import {call, put, takeLatest} from "@redux-saga/core/effects";
import {productActionType} from "./action-type";
import {fetchProducts} from "../../../pages/api";

export function* getProductById (action: any) {
    try {
        const data: Response = yield call(fetchProducts.getProductsId, action.payload)
        yield put({type: productActionType.FETCH_PRODUCTS_SUCCESS_ID, payload: data})
    } catch (err) {
        yield put({type: productActionType.FETCH_PRODUCTS_ERROR_ID,  payload: {message: 'A few errors occurred during the fetch'}})
    }
}

export function* productIdSaga() {
    yield takeLatest(productActionType.FETCH_PRODUCTS_REQUEST_ID, getProductById)
}