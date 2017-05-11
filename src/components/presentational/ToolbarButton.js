import React, { Component } from "react";
import PropTypes from "prop-types";


class ToolbarButton extends Component
{
    render ()
    {
        console.log( "Rendering ToolbarButton: " + this.props.actionCode );

        return (
            <span className={ "c_toolbar-button c_toolbar-button--" + this.props.bemClassModifier }>
                <button className={ "c_toolbar-button__widget o_button o_action o_action--id_" + this.props.actionCode }
                        title={ this.props.title !== 'undefined'
                            ? this.props.title
                            : this.props.text }
                        onClick={ this.props.onClick }
                >
                    <span className="c_toolbar-button__widget__wrapper o_button__wrapper o_action__wrapper">
                        { this.props.text }
                    </span>
                </button>
            </span>
        );
    }
}

ToolbarButton.propTypes = {
    bemClassModifier: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    title: PropTypes.string,
    actionCode: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};


export default ToolbarButton;