import React, { Component } from "react";
import PropTypes from 'prop-types';


class ContentBlocksJsonDebug extends Component
{
    render ()
    {
        return (
            <div className={ "c_content-blocks-json-debug c_content-blocks-json-debug--" + this.props.bemClassModifier }>
                <div className="c_content-blocks-json-debug__wrapper">
                    <pre><code>{ JSON.stringify( this.props.contentBlocks, null, 4 ) }</code></pre>
                </div>
            </div>
        );
    }
}

ContentBlocksJsonDebug.propTypes = {
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
};


export default ContentBlocksJsonDebug;