import React, { Component } from "react";
import PropTypes from "prop-types";
import ContentBlockWidget from "./ContentBlockWidget";


class ContentBlockWidgetsTree extends Component
{
    renderContentBlockWidget ( contentBlock )
    {
        return (
            <div className="o_recursive-tree__node"
                 key={ contentBlock.id }
            >
                <div className="o_recursive-tree__node__wrapper">
                    <div className="o_recursive-tree__content">
                        <ContentBlockWidget componentClass="c_content-block-widget"
                                            contentBlock={ contentBlock }
                                            contentBlockTypes={ this.props.contentBlockTypes }
                                            bemClassModifier={ this.props.bemClassModifier }
                                            onTextInput={ ( e ) => this.props.onContentBlockTextInput( e, contentBlock.id ) }
                        />
                    </div>
                    {
                        contentBlock.children.length > 0 &&
                        <div className="o_recursive-tree__children">
                            { this.renderContentBlockWidgets( contentBlock.children ) }
                        </div>
                    }
                </div>
            </div>
        );
    }

    renderContentBlockWidgets ( contentBlocks )
    {
        return (
            <div className="o_recursive-tree__nodes">
                <div className="o_recursive-tree__nodes__wrapper">
                    {
                        contentBlocks.map(
                            ( contentBlock ) =>
                            {
                                return this.renderContentBlockWidget( contentBlock );
                            },
                        )
                    }
                </div>
            </div>
        );
    }

    render ()
    {
        return (
            <div className={ "c_content-block-widgets-tree c_content-block-widgets-tree--" + this.props.bemClassModifier }>
                <div className="o_recursive-tree">
                    <div className="o_recursive-tree__wrapper">
                        {
                            this.renderContentBlockWidgets( this.props.contentBlocks )
                        }
                    </div>
                </div>
            </div>
        );
    }
}


ContentBlockWidgetsTree.propTypes = {
    bemClassModifier: PropTypes.string.isRequired,
    contentBlocks: PropTypes.arrayOf( PropTypes.shape(
        {
            id: PropTypes.number.isRequired,
            contentBlockTypeId: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            childIds: PropTypes.arrayOf( PropTypes.number ),
            children: PropTypes.arrayOf( PropTypes.object ).isRequired,
        },
    ) ).isRequired,
    onContentBlockTextInput: PropTypes.func.isRequired,
};


export default ContentBlockWidgetsTree;