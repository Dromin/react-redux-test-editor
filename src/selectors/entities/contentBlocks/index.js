import { createSelector } from "reselect";


export const getContentBlocksById = state => state.contentBlocksById;

export const getAllContentBlockIds = state => state.allContentBlockIds;

export const getNestedContentBlockObjects = createSelector(
    [ getAllContentBlockIds, getContentBlocksById ],
    ( allContentBlockIds, contentBlocksById ) =>
    {
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