import { createSelector } from "reselect";


export const getAllContentBlockTypeIds = state => state.entities.contentBlockTypes.allContentBlockTypeIds;

export const getContentBlockTypesById = state => state.entities.contentBlockTypes.contentBlockTypesById;

export const getContentBlockTypesArray = createSelector(
    [ getAllContentBlockTypeIds, getContentBlockTypesById ],
    ( allContentBlockTypeIds, contentBlockTypesById ) =>
    {
        return allContentBlockTypeIds.map(
            id  =>
            {
                return contentBlockTypesById[ id ];
            },
        );
    },
);

export const getContentBlockTypeButtonsArray = createSelector(
    [ getAllContentBlockTypeIds, getContentBlockTypesById ],
    ( allContentBlockTypeIds, contentBlockTypesById ) =>
    {
        return allContentBlockTypeIds.map(
            id =>
            {
                const contentBlockType = contentBlockTypesById[ id ];

                return {
                    id: contentBlockType.id,
                    text: contentBlockType.name,
                    title: contentBlockType.description,
                    actionCode: "add-" + id.toLowerCase().replace( "_", "-" ),
                };
            },
        );
    },
);