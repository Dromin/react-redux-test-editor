import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getContentBlockById } from "../../selectors/entities/contentBlocks";
import { getContentBlockTypesArray } from "../../selectors/entities/contentBlockTypes";
import { updateContentBlockText } from "../../actions/entities/contentBlocks/creators";
import ContentBlockTreeNode from "../presentational/ContentBlockTreeNode";


const mapStateToProps = ( state, props ) =>
{
    return {
        bemClassModifier: "node",
        contentBlock: getContentBlockById( state, props ),
        contentBlockTypes: getContentBlockTypesArray( state ),
    };
};

const mapDispatchToProps = ( dispatch, props ) =>
{
    return {
        onContentBlockTextInput: ( event, contentBlockId ) =>
        {
            dispatch( updateContentBlockText( contentBlockId, event.target.value ) );
        },
    };
};

const ContentBlockTreeNodeContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)( ContentBlockTreeNode );


ContentBlockTreeNodeContainer.PropTypes = {
    contentBlockId: PropTypes.number.isRequired,
};


export default ContentBlockTreeNodeContainer;