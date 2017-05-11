import React, { Component } from "react";
import ContentBlockTypesToolbar from "../container/ContentBlockTypesToolbar";
import ContentBlockWidgetsManager from "../container/ContentBlockWidgetsManager";
import SlidePreview from "../container/SlidePreview";


class SlideEditorPage extends Component
{
    constructor ( props )
    {
        super( props );
    }

    render ()
    {
        return (
            <div className="l_page l_page--slide-editor">
                <div className="l_page__wrapper">
                    <div className="l_page__item l_page__item--title">
                        <div className="l_page__item__wrapper">
                            <h1>Test editor</h1>
                        </div>
                    </div>
                    <div className="l_page__item l_page__item--toolbar">
                        <div className="l_page__item__wrapper">
                            <h2>Toolbar</h2>
                            <ContentBlockTypesToolbar />
                        </div>
                    </div>
                    <div className="l_page__item l_page__item--manager">
                        <div className="l_page__item__wrapper">
                            <h2>Content block widgets manager</h2>
                            <ContentBlockWidgetsManager />
                        </div>
                    </div>
                    <div className="l_page__item l_page__item--slide-preview">
                        <div className="l_page__item__wrapper">
                            <h2>Hi, I'm JSON! :D</h2>
                            <SlidePreview />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SlideEditorPage;