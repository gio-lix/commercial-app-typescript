import { HYDRATE, createWrapper } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {fetchData} from "./reducer/fetchdata";
import {loadingReduce} from "./reducer/loadingReduce";

const bindMiddleware = (middleware: any) => {
    if (process.env.NODE_ENV !== "production") {
        const { composeWithDevTools } = require("redux-devtools-extension");
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

const combinedReducer = combineReducers({
    fetchData,
    loadingReduce
});

const rootReducer = (state: any, action: any) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        };
        return nextState;
    } else {
        return combinedReducer(state, action);
    }
};


const initStore = () => {
    return createStore(rootReducer, bindMiddleware([thunkMiddleware]));
};
export const wrapper = createWrapper(initStore);