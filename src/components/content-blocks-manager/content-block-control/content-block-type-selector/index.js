import { Component } from "react";
import template from "./template.rt";

class ContentBlockTypeSelector extends Component
{
    constructor ( props )
    {
        super( props );

        this.handleContentBlockTypeChange = this.handleContentBlockTypeChange.bind( this );
    }

    render () { return template.apply( this ); }

    handleContentBlockTypeChange ( e )
    {
        this.props.onContentBlockTypeChange( e.target.value );
    }
}

export default ContentBlockTypeSelector;