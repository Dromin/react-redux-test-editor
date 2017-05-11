import * as actions from "../../../actions/entities/contentBlocks/definitions";


const initialState = [
    1,
    3,
];


function addContentBlockId ( currentState, action )
{
    const { payload } = action;
    const { contentBlockId } = payload;

    return [
        ...currentState,
        contentBlockId,
    ];
}


export default function allContentBlockIds ( currentState = initialState, action )
{
    switch ( action.type )
    {
        case actions.CREATE_EMPTY_CONTENT_BLOCK_OF_TYPE:
            return addContentBlockId( currentState, action );
        default:
            return currentState;
    }
}