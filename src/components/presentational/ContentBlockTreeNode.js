import React, { Component } from "react";
import PropTypes from "prop-types";
import ContentBlockWidget from "./ContentBlockWidget";
import ContentBlockTreeNodesList from "./ContentBlockTreeNodesList";


class ContentBlockTreeNode extends Component
{
    render ()
    {
        console.log( "Rendering ContentBlockTreeNode: " + this.props.contentBlock.id );

        return (
            <div className={ "c_content-block-tree-node c_content-block-tree-node--" + this.props.bemClassModifier }>
                <div className="o_recursive-tree__node">
                    <div className="o_recursive-tree__node__wrapper">
                        <div className="o_recursive-tree__content">
                            <ContentBlockWidget bemClassModifier={ this.props.bemClassModifier }
                                                contentBlock={ this.props.contentBlock }
                                                contentBlockTypes={ this.props.contentBlockTypes }
                                                onTextInput={ ( e ) =>
                                                {
                                                    this.props.onContentBlockTextInput( e, this.props.contentBlock.id )
                                                } }
                            />
                        </div>
                        {
                            this.props.childContentBlocks.length > 0 &&
                            <div className="o_recursive-tree__children">
                                <ContentBlockTreeNodesList bemClassModifier={ this.props.bemClassModifier }
                                                           contentBlocks={ this.props.childContentBlocks }
                                />
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
            ;
    }
}


ContentBlockTreeNode.propTypes = {
    bemClassModifier: PropTypes.string.isRequired,
    contentBlock: PropTypes.shape(
        {
            id: PropTypes.number.isRequired,
            contentBlockTypeId: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            childIds: PropTypes.arrayOf( PropTypes.number ).isRequired,
        },
    ),
    childContentBlocks: PropTypes.arrayOf( PropTypes.shape(
        {
            id: PropTypes.number.isRequired,
            contentBlockTypeId: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            childIds: PropTypes.arrayOf( PropTypes.number ).isRequired,
        },
    ) ),
    contentBlockTypes: PropTypes.arrayOf( PropTypes.shape(
        {
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        },
    ) ).isRequired,
    onContentBlockTextInput: PropTypes.func.isRequired,
};


export default ContentBlockTreeNode;