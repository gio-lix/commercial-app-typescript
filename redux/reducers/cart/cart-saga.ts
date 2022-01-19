import {put, takeEvery, takeLatest} from "@redux-saga/core/effects";
import {cartActionType} from "./cart-action-type";

function* putCart(action: any) {
    yield put({type: cartActionType.CART_SUCCESS, payload: action.payload})
}

export function* cartSaga() {
    yield takeEvery(cartActionType.CART_REQUEST, putCart)
}