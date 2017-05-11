import * as actions from "./definitions";


// #TODO how to generate ids when state contains existing content blocks?
let nextContentBlockId = 100;


function generateContentBlockId ()
{
    const newId = nextContentBlockId;
    nextContentBlockId++;

    return newId;
}


// export function addContentBlock( contentBlockTypeCode, content )
// {
//     return {
//         type: 'ADD_CONTENTBLOCK',
//         id: nextContentBlockId++,
//         contentBlockTypeCode,
//         content,
//     };
// }


export function createEmptyContentBlockOfType ( contentBlockTypeId )
{
    const contentBlockId = generateContentBlockId();

    return {
        type: actions.CREATE_EMPTY_CONTENT_BLOCK_OF_TYPE,
        payload: {
            contentBlockId,
            contentBlockTypeId,
        },
    };
}


export function updateContentBlockText ( contentBlockId, text )
{
    return {
        type: actions.UPDATE_CONTENT_BLOCK_TEXT,
        payload: {
            contentBlockId,
            text,
        },
    }
}