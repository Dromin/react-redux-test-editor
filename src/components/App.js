import React, { Component } from "react";
import SlideEditorPage from "./page/SlideEditorPage"


class App extends Component
{
    // #TODO routing?

    constructor ( props )
    {
        super( props );
    }

    render ()
    {
        return (
            <SlideEditorPage />
        );
    }
}


export default App;