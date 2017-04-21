// File for documentation purposes only; not actually used in the app

const state = {
    contentBlocks: [ 1, 3 ],
    contentBlocksById: {
        1: {
            id: 1,
            contentBlockTypeCode: "TITLE",
            content: "Hello world!",
            childIds: [ 2 ],
        },
        2: {
            id: 2,
            contentblockTypeCode: "CLARIFICATION",
            content: "Lorem ipsum dolor sit amet, " +
                     "consectetur adipiscing elit. " +
                     "Praesent ornare, ligula vitae " +
                     "condimentum suscipit, quam metus " +
                     "commodo sapien, ut hendrerit nisi " +
                     "ex a velit.",
        },
        3: {
            id: 3,
            contentBlockTypeCode: "TITLE",
            content: "Valar Morghulis",
            childIds: [ 4 ],
        },
        4: {
            id: 4,
            contentblockTypeCode: "CLARIFICATION",
            content: "Valar Dohaeris",
        },
    },
    contentBlockTypesByCode: {
        TITLE: {
            code: "TITLE",
            name: "Title",
            description: "Lorem ipsum",
        },
        CLARIFICATION: {
            code: "CLARIFICATION",
            name: "Clarification",
            description: "Dolor sit",
        },
        ILLUSTRATIVE_IMAGE: {
            code: "ILLUSTRATIVE_IMAGE",
            name: "Illustrative image",
            description: "Amet",
        },
    },
};