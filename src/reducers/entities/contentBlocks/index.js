import { combineReducers } from "redux";

import contentBlocksById from "./contentBlocksById";
import allContentBlockIds from "./allContentBlockIds";


const contentBlocks = combineReducers(
    {
        contentBlocksById,
        allContentBlockIds,
    }
);


export default contentBlocks;