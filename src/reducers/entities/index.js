import { combineReducers } from "redux";

import contentBlocks from "./contentBlocks";
import contentBlockTypes from "./contentBlockTypes";


const entities = combineReducers(
    {
        contentBlocks,
        contentBlockTypes,
    }
);


export default entities;