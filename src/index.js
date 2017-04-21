import React from "react";
import ReactDOM from "react-dom";
//import BoilerplateTestPage from "./components/boilerplate-test-page";
import ContentBlocksManager from "./components/content-blocks-manager";

import "./assets/stylesheets/global.scss";

const CONTENTBLOCKTYPES = [
    {
        code: "TITLE",
        name: "Title",
        description: "Lorem ipsum",
    },
    {
        code: "CLARIFICATION",
        name: "Clarification",
        description: "Dolor sit",
    },
    {
        code: "ILLUSTRATIVE_IMAGE",
        name: "Illustrative image",
        description: "Amet",
    },
];

ReactDOM.render(
    <ContentBlocksManager contentBlockTypes={ CONTENTBLOCKTYPES } />,
    document.getElementById( "root" ),
);
