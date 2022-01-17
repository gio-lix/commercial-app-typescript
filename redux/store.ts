import {applyMiddleware, combineReducers, createStore, Middleware, StoreEnhancer} from "redux";
import {createWrapper, MakeStore} from "next-redux-wrapper";
import createSagaMiddleware from "@redux-saga/core";
import {productReducer} from "./reducers/products/product-reducer";
import {productsSaga} from "./reducers/products/products-saga";

const RootReducer = combineReducers({
    productReducer
})

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
    store.sagaTask = sagaMiddleware.run(productsSaga);
    return store;
};

export const wrapper = createWrapper<any>(makeStore, { debug: true });