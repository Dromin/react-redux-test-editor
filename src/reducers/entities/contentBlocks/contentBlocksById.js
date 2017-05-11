import * as actions from "../../../actions/definitions";


const initialState = {
    1: {
        id: 1,
        contentBlockTypeId: "TITLE",
        text: "Hello world!",
        childIds: [ 2 ],
    },
    2: {
        id: 2,
        contentBlockTypeId: "CLARIFICATION",
        text: "Lorem ipsum dolor sit amet, " +
              "consectetur adipiscing elit. " +
              "Praesent ornare, ligula vitae " +
              "condimentum suscipit, quam metus " +
              "commodo sapien, ut hendrerit nisi " +
              "ex a velit.",
    },
    3: {
        id: 3,
        contentBlockTypeId: "TITLE",
        text: "Valar Morghulis",
        childIds: [ 4 ],
    },
    4: {
        id: 4,
        contentBlockTypeId: "CLARIFICATION",
        text: "Valar Dohaeris",
    },
};


function createEmptyContentBlockOfType ( currentState, action )
{
    const { payload } = action;
    const { contentBlockId, contentBlockTypeId } = payload;

    const contentBlock = {
        id: contentBlockId,
        contentBlockTypeId: contentBlockTypeId,
        text: "",
    };

    return {
        ...currentState,
        [contentBlockId]: contentBlock,
    };
}


function updateContentBlockText ( currentState, action )
{
    const { payload } = action;
    const { contentBlockId, text } = payload;

    const contentBlock = currentState[ contentBlockId ];

    contentBlock["text"] = text;

    return {
        ...currentState,
        [contentBlockId]: contentBlock,
    };
}


export default function contentBlocksById ( currentState = initialState, action )
{
    switch ( action.type )
    {
        case actions.CREATE_EMPTY_CONTENT_BLOCK_OF_TYPE:
            return createEmptyContentBlockOfType( currentState, action );
        case actions.UPDATE_CONTENT_BLOCK_TEXT:
            return updateContentBlockText( currentState, action );
        default:
            return currentState;
    }
}