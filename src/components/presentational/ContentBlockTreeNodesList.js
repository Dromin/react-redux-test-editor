import React, { Component } from "react";
import PropTypes from "prop-types";
import ContentBlockTreeNodeContainer from "../container/ContentBlockTreeNodeContainer";


class ContentBlockTreeNodesList extends Component
{
    render ()
    {
        return (
            <div className={ "c_content-block-tree-nodes-list c_content-block-tree-nodes-list--" +
                             this.props.bemClassModifier }>
                <div className="o_recursive-tree__nodes">
                    <div className="o_recursive-tree__nodes__wrapper">
                        {
                            this.props.contentBlocks.map(
                                ( contentBlock ) =>
                                {
                                    return (
                                        <ContentBlockTreeNodeContainer contentBlock={ contentBlock }
                                                                       key={ contentBlock.id }
                                        />
                                    );
                                },
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}


ContentBlockTreeNodesList.propTypes = {
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


export default ContentBlockTreeNodesList;