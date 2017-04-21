import { createStore, combineReducers } from "redux";
import contentBlockReducer from "./components/content-blocks-manager/reducer";

let store = createStore(
    combineReducers(
        {
            contentBlockReducer,
        },
    ),
);

if ( process.env.NODE_ENV !== "production" )
{
    store.subscribe(
        () => console.log( store.getState() ),
    );
}

export default store;