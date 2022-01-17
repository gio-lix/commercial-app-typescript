import {call, put, takeLatest} from "@redux-saga/core/effects";
import {productActionType} from "./action-type";
import {fetchProducts} from "../../../pages/api";

export function* getProductById (action: any) {
    try {
        const data: Response = yield call(fetchProducts.getProductsId, action.payload)
        yield put({type: productActionType.FETCH_PRODUCTS_SUCCESS_ID, payload: data})
    } catch (err) {
        console.log(err)
    }
}

export function* productIdSaga() {
    yield takeLatest(productActionType.FETCH_PRODUCTS_REQUEST_ID, getProductById)
}