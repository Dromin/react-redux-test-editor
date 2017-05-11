// File for documentation purposes only; not actually used in the app

const exampleState = {
    entities: {
        contentBlocks: {
            contentBlocksById: {
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
            },
            allContentBlockIds: [ 1, 3 ],
        },
        contentBlockTypes: {
            contentBlockTypesById: {
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
            },
            allContentBlockTypeIds: [ "TITLE", "CLARIFICATION", "ILLUSTRATIVE_IMAGE" ],
        },
    },
};