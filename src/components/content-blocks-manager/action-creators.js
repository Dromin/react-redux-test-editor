// -----------------------------------------------
// Actions for the content-block-manager component
// -----------------------------------------------

// action types
export const ADD_CONTENTBLOCK = "ADD_CONTENTBLOCK";
export const DELETE_CONTENTBLOCK = "DELETE_CONTENTBLOCK";

// other variables
let nextContentBlockId = 0;

export function addContentBlock( contentBlockTypeCode, content )
{
    return {
        type: 'ADD_CONTENTBLOCK',
        id: nextContentBlockId++,
        contentBlockTypeCode,
        content,
    };
}