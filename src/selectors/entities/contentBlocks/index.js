import { createSelector } from "reselect";


export const getAllContentBlockIds = state => state.entities.contentBlocks.allContentBlockIds;

export const getContentBlocksById = state => state.entities.contentBlocks.contentBlocksById;

export const getContentBlockById = ( state, props ) => state.entities.contentBlocks.contentBlocksById[ props.contentBlockId ];

export const getNestedContentBlockObjects = createSelector(
    [ getAllContentBlockIds, getContentBlocksById ],
    ( allContentBlockIds, contentBlocksById ) =>
    {
        // note: for debugging purposes; avoid using this; use smaller connected components instead

        const recursivelyProcessContentBlocks = ( allIds, byId ) =>
        {
            return allIds.map(
                id =>
                {
                    const contentBlock = byId[ id ];
                    const children = contentBlock.childIds instanceof Array
                        ? recursivelyProcessContentBlocks( contentBlock.childIds, byId )
                        : []
                    ;

                    return {
                        ...contentBlock,
                        children,
                    };
                },
            );
        };

        return recursivelyProcessContentBlocks( allContentBlockIds, contentBlocksById );
    },
);
