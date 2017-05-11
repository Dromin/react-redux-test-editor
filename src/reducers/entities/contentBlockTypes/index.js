import { combineReducers } from "redux";

import contentBlockTypesById from "./contentBlockTypesById";
import allContentBlockTypeIds from "./allContentBlockTypeIds";


const contentBlockTypes = combineReducers(
    {
        contentBlockTypesById,
        allContentBlockTypeIds,
    }
);


export default contentBlockTypes;