import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getChildContentBlocks } from "../../selectors/entities/contentBlocks";
import { getContentBlockTypesArray } from "../../selectors/entities/contentBlockTypes";
import { updateContentBlockText } from "../../actions/entities/contentBlocks/creators";
import ContentBlockTreeNode from "../presentational/ContentBlockTreeNode";


const mapStateToProps = ( state, props ) =>
{
    return {
        bemClassModifier: "node",
        contentBlock: props.contentBlock,
        childContentBlocks: getChildContentBlocks( state, props.contentBlock.id ),
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
    contentBlock: PropTypes.shape(
        {
            id: PropTypes.number.isRequired,
            contentBlockTypeId: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            childIds: PropTypes.arrayOf( PropTypes.number ).isRequired,
        },
    ),
};


export default ContentBlockTreeNodeContainer;