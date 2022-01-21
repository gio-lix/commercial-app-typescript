import {call, put, takeEvery, takeLatest} from "@redux-saga/core/effects";
import {productActionType} from "./action-type";
import {fetchProducts} from "../../../pages/api";


export function* getProducts() {
    try {
        const data: Response = yield call(fetchProducts.getProducts)
        yield put({type: productActionType.FETCH_PRODUCTS_SUCCESS, payload: data})
    } catch (err) {
        yield put({type: productActionType.FETCH_PRODUCTS_ERROR, payload: {message: 'A few errors occurred during the fetch'}})
    }
}


export function* productsSaga() {
    yield takeLatest( productActionType.FETCH_PRODUCTS_REQUEST, getProducts)
}