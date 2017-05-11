import React, { Component } from "react";
import PropTypes from "prop-types";


class ContentBlockWidget extends Component
{
    constructor ( props )
    {
        super( props );

        this.contentInputTypes = {
            "TEXTFIELD": 0,
            "TEXTAREA": 1,
            "UPLOADFIELD": 2,
        };
    }

    mapContentBlockTypeIdToContentInputType ( contentBlockTypeId )
    {
        switch ( contentBlockTypeId )
        {
            case "TITLE":
                return this.contentInputTypes.TEXTFIELD;
            case "CLARIFICATION":
                return this.contentInputTypes.TEXTAREA;
            case "ILLUSTRATIVE_IMAGE":
                return this.contentInputTypes.UPLOADFIELD;
            default:
                return this.contentInputTypes.TEXTFIELD;
        }
    };

    render ()
    {
        let contentInput = null;

        switch ( this.mapContentBlockTypeIdToContentInputType( this.props.contentBlock.contentBlockTypeId ) )
        {
            case this.contentInputTypes.TEXTFIELD:
                contentInput = (
                    <input className="c_content-block-widget__input"
                           type="text"
                           value={ this.props.contentBlock.text }
                           onChange={ this.props.onTextInput }
                    />
                );
                break;
            case this.contentInputTypes.TEXTAREA:
                contentInput = (
                    <textarea className="c_content-block-widget__input"
                              value={ this.props.contentBlock.text }
                              onChange={ this.props.onTextInput }
                    />
                );
                break;
            case this.contentInputTypes.UPLOADFIELD:
                contentInput = (
                    <input className="c_content-block-widget__input"
                           type="file"
                           placeholder="TODO"
                           readOnly
                    />
                );
                break;
            default:
                break;
        }

        return (
            <div className={ "c_content-block-widget c_content-block-widget--" + this.props.bemClassModifier }>
                <div className="c_content-block-widget__wrapper">

                    <div className="c_content-block-widget__type">
                        <select className="c_content-block-widget__select"
                                value={ this.props.contentBlock.contentBlockTypeId }
                                readOnly
                                disabled
                        >
                            {
                                this.props.contentBlockTypes.map(
                                    ( contentBlockType ) =>
                                    {
                                        return (
                                            <option key={ contentBlockType.id }
                                                    value={ contentBlockType.id }
                                            >
                                                { contentBlockType.name }
                                            </option>
                                        );
                                    },
                                )
                            }
                        </select>
                    </div>

                    <div className="c_content-block-widget__text">
                        { contentInput }
                    </div>

                </div>
            </div>
        );
    }
}


ContentBlockWidget.propTypes = {
    bemClassModifier: PropTypes.string.isRequired,
    contentBlock: PropTypes.shape(
        {
            id: PropTypes.number.isRequired,
            contentBlockTypeId: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            childIds: PropTypes.arrayOf( PropTypes.number ),
        },
    ),
    contentBlockTypes: PropTypes.arrayOf( PropTypes.shape(
        {
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        },
    ) ).isRequired,
    onTextInput: PropTypes.func.isRequired,

};


export default ContentBlockWidget;