import { createStore } from "redux";
import rootReducer from "./reducers";


let store = createStore( rootReducer );

// if ( process.env.NODE_ENV !== "production" )
// {
//     store.subscribe(
//         () => console.log( store.getState() ),
//     );
// }


export default store;