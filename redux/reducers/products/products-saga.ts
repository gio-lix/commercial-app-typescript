import {call, put, takeEvery, takeLatest} from "@redux-saga/core/effects";
import {productActionType} from "./action-type";
import {fetchProducts} from "../../../pages/api";


export function* getProducts() {
    try {
        const data: Response = yield call(fetchProducts.getProducts)
        console.log('data', data)
        yield put({type: productActionType.FETCH_PRODUCTS_SUCCESS, payload: data})
    } catch (err) {
        console.log(err)
    }
}


export function* productsSaga() {
    yield takeLatest( productActionType.FETCH_PRODUCTS_REQUEST, getProducts)
}