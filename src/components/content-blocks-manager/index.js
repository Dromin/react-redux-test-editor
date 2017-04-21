import React, { Component } from "react";
import template from "./template.rt";

class ContentBlocksManager extends Component
{
    constructor ( props )
    {
        super( props );
        this.state = {
            contentBlocks: [],
        };

        this.handleContentBlockAdd = this.handleContentBlockAdd.bind( this );
    }

    render () { return template.apply( this ); }

    handleContentBlockAdd ( contentBlock )
    {
        this.setState(
            {
                contentBlocks: [ ...this.state.contentBlocks, contentBlock ],
            },
        );
    }
}

export default ContentBlocksManager;