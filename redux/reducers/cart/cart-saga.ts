import {all, call, put, take, takeEvery, takeLatest} from "@redux-saga/core/effects";
import {cartActionType} from "./cart-action-type";
import {Action} from "redux";

function* putCart(action: any) {
    yield put({type: cartActionType.CART_SUCCESS, payload: action.payload})
}
function* updateCart(action: any) {
    yield put({type: cartActionType.CART_INCREASE_QUANTITY_SUCCESS, payload: action.payload})
}
function* decreaseCart(action: any) {
    yield put({type: cartActionType.CART_DECREASE_QUANTITY_SUCCESS, payload: action.payload})
}
function* deleteCart(action: any) {
    yield put({type: cartActionType.CART_DELETE, payload: action.payload})
}



function* increaseFunc() {
    while (true) {
        const {payload} = yield take(cartActionType.CART_INCREASE_QUANTITY_REQUEST)
        yield call(updateCart, payload)
    }
}
function* decreaseFunc() {
    while (true) {
        const {payload} = yield take(cartActionType.CART_DECREASE_QUANTITY_REQUEST)
        yield call(decreaseCart, payload)
    }
}
function* deleteFunc() {
    yield takeEvery(cartActionType.CART_DELETE_REQUEST, deleteCart)
}

function* combinedCart() {
    yield takeEvery(cartActionType.CART_REQUEST, putCart)
}

export function* cartSaga() {
    yield all([deleteFunc(),combinedCart(), increaseFunc(), decreaseFunc()])
}