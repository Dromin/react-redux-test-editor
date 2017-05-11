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
                            this.props.contentBlockIds.map(
                                ( id ) =>
                                {
                                    return (
                                        <ContentBlockTreeNodeContainer contentBlockId={ id }
                                                                       key={ id }
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
    contentBlockIds: PropTypes.arrayOf( PropTypes.number ).isRequired,
};


export default ContentBlockTreeNodesList;