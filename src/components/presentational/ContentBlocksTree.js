import React, { Component } from "react";
import PropTypes from "prop-types";
import ContentBlockTreeNodesList from "./ContentBlockTreeNodesList";


class ContentBlocksTree extends Component
{
    render ()
    {
        console.log("Rendering ContentBlocksTree");

        return (
            <div className={ "c_content-blocks-tree c_content-blocks-tree--" + this.props.bemClassModifier }>
                <div className="o_recursive-tree">
                    <div className="o_recursive-tree__wrapper">
                        <ContentBlockTreeNodesList bemClassModifier={ this.props.bemClassModifier }
                                                   contentBlocks={ this.props.contentBlocks }
                        />
                    </div>
                </div>
            </div>
        );
    }
}


ContentBlocksTree.propTypes = {
    bemClassModifier: PropTypes.string.isRequired,
    contentBlocks: PropTypes.arrayOf( PropTypes.shape(
        {
            id: PropTypes.number.isRequired,
            contentBlockTypeId: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            childIds: PropTypes.arrayOf( PropTypes.number ).isRequired,
        },
    ) ).isRequired,
};


export default ContentBlocksTree;