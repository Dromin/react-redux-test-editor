import React, { Component } from "react";
import { connect } from "react-redux";
import { getNestedContentBlockObjects } from "../../selectors/entities/contentBlocks";
import { updateContentBlockText } from "../../actions/entities/contentBlocks/creators";
import ContentBlockWidgetsTree from "../presentational/ContentBlockWidgetsTree";

const mapStateToProps = ( state ) =>
{
    console.log( 'manager' );
    console.log( state.entities.contentBlocks.allContentBlockIds );

    return {
        bemClassModifier: "manager",
        contentBlocks: getNestedContentBlockObjects( state.entities.contentBlocks ),
        contentBlockTypes: Object.keys( state.entities.contentBlockTypes.contentBlockTypesById )
                                 .map( key => state.entities.contentBlockTypes.contentBlockTypesById[ key ] ),
    };
};

const mapDispatchToProps = ( dispatch ) =>
{
    return {
        onContentBlockTextInput: ( event, contentBlockId ) =>
        {
            dispatch( updateContentBlockText( contentBlockId, event.target.value ) );
        },
    };
};


const ContentBlockWidgetsManager = connect(
    mapStateToProps,
    mapDispatchToProps,
)( ContentBlockWidgetsTree );


export default ContentBlockWidgetsManager;