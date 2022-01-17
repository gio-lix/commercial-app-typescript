import {applyMiddleware, combineReducers, createStore, Middleware, StoreEnhancer} from "redux";
import {createWrapper, MakeStore} from "next-redux-wrapper";
import createSagaMiddleware from "@redux-saga/core";
import {productReducer, productReducerId} from "./reducers/products/product-reducer";
import {productsSaga} from "./reducers/products/products-saga";
import {productIdSaga} from "./reducers/products/product-id-saga";
import {all, fork} from "@redux-saga/core/effects";

const RootReducer = combineReducers({
    productReducer,
    productReducerId
})

const sagasList = [
    productsSaga,
    productIdSaga

];
export default function* rootSaga() {
    yield all(sagasList.map(saga => fork(saga)));
}

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};


export const makeStore: MakeStore<any> = () => {
    const sagaMiddleware = createSagaMiddleware();

    const store: any = createStore(RootReducer, bindMiddleware([sagaMiddleware]));
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
};

export const wrapper = createWrapper<any>(makeStore, { debug: true });