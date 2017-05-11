import React, { Component } from "react";
import { connect } from "react-redux";
import ContentBlockWidgetsTree from "../presentational/ContentBlockWidgetsTree";
import { updateContentBlockText } from "../../actions/creators";


const getContentBlockObjects = ( allContentBlockIds, contentBlocksById ) =>
{
    // #TODO remove duplicate function (see SlidePreview.js)

    return allContentBlockIds.map(
        id =>
        {
            const contentBlock = contentBlocksById[ id ];
            const children = contentBlock.childIds instanceof Array
                ? getContentBlockObjects( contentBlock.childIds, contentBlocksById )
                : []
            ;

            return {
                ...contentBlock,
                children,
            };
        },
    );
};

const mapStateToProps = ( state ) =>
{
    return {
        bemClassModifier: "manager",
        contentBlocks: getContentBlockObjects(
            state.entities.contentBlocks.allContentBlockIds,
            state.entities.contentBlocks.contentBlocksById,
        ),
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