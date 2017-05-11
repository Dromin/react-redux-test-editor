const initialState = {
    TITLE: {
        id: "TITLE",
        name: "Title",
        description: "Lorem ipsum",
    },
    CLARIFICATION: {
        id: "CLARIFICATION",
        name: "Clarification",
        description: "Dolor sit",
    },
    ILLUSTRATIVE_IMAGE: {
        id: "ILLUSTRATIVE_IMAGE",
        name: "Illustrative image",
        description: "Amet",
    },
};

const contentBlockTypesById = ( currentState = initialState, action ) =>
{
    switch ( action.type )
    {
        default:
            return currentState;
    }
};


export default contentBlockTypesById;