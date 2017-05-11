import React, { Component } from "react";
import PropTypes from "prop-types";

import ToolbarButton from "./ToolbarButton";


class Toolbar extends Component
{
    render ()
    {
        return (
            <div className={ "c_toolbar c_toolbar--" + this.props.bemClassModifier }>
                <div className="c_toolbar__wrapper">
                    <ul className="c_toolbar__list o_list">
                    {
                        this.props.buttons.map(
                            ( button ) =>
                            {
                                return (
                                    <li className="c_toolbar__item o_list__item"
                                        key={ button.actionCode }>
                                        <div className="c_toolbar__item__wrapper o_list__item__wrapper">
                                            <ToolbarButton bemClassModifier={ this.props.bemClassModifier }
                                                           text={ button.text }
                                                           title={ button.title }
                                                           actionCode={ button.actionCode }
                                                           onClick={ () => this.props.onButtonClick( button.id ) }
                                            />
                                        </div>
                                    </li>
                                );
                            },
                        )
                    }
                    </ul>
                </div>
            </div>
        );
    }
}

Toolbar.propTypes = {
    bemClassModifier: PropTypes.string.isRequired,
    buttons: PropTypes.arrayOf( PropTypes.shape(
        {
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            title: PropTypes.string,
            actionCode: PropTypes.string.isRequired,
        },
    ) ).isRequired,
    onButtonClick: PropTypes.func.isRequired,
};


export default Toolbar;