import { Component } from "react";
import template from "./template.rt";

class ContentBlockControl extends Component
{
    constructor ( props )
    {
        super( props );

        this.state = {
            contentBlockTypeCode: '',
            contentBlockContent: '',
        };

        this.handleContentBlockTypeChange = this.handleContentBlockTypeChange.bind( this );
        this.handleContentBlockContentInput = this.handleContentBlockContentInput.bind( this );
        this.handleContentBlockAdd = this.handleContentBlockAdd.bind( this );
    }

    render () { return template.apply( this ); }

    handleContentBlockTypeChange ( contentBlockTypeCode )
    {
        this.setState( { contentBlockTypeCode: contentBlockTypeCode } );
    }

    handleContentBlockContentInput ( e )
    {
        this.setState( { contentBlockContent: e.target.value } );
    }

    handleContentBlockAdd ( e )
    {
        this.props.onContentBlockAdd(
            {
                contentBlockTypeCode: this.state.contentBlockTypeCode,
                content: this.state.contentBlockContent,
            },
        );
    }
}

export default ContentBlockControl;