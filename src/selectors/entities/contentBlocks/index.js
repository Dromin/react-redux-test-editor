import { createSelector } from "reselect";
import createCachedSelector from "re-reselect";


export const getAllContentBlockIds = state => state.entities.contentBlocks.allContentBlockIds;

export const getContentBlocksById = state => state.entities.contentBlocks.contentBlocksById;

export const getContentBlockById = ( state, id ) => state.entities.contentBlocks.contentBlocksById[ id ];

export const getContentBlocksArray = createSelector(
    [ getAllContentBlockIds, getContentBlocksById ],
    ( allContentBlockIds, contentBlocksById ) =>
    {
        return allContentBlockIds.map(
            ( id ) =>
            {
                return contentBlocksById[ id ];
            },
        );
    },
);

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

export const getChildContentBlocks = createCachedSelector(
    [ getContentBlockById, getContentBlocksById ],
    ( contentBlock, contentBlocksById ) =>
    {
        return contentBlock.childIds.map(
            id => contentBlocksById[ id ],
        );
    },
)( ( state, id ) => id );