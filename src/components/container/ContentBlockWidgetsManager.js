import React from "react";
import { connect } from "react-redux";
import { getContentBlocksArray } from "../../selectors/entities/contentBlocks";
import ContentBlocksTree from "../presentational/ContentBlocksTree";


const mapStateToProps = ( state, props ) =>
{
    return {
        bemClassModifier: "tree",
        contentBlocks: getContentBlocksArray( state ),
    };
};

const mapDispatchToProps = ( dispatch, props ) =>
{
    return {};
};

const ContentBlockWidgetsManager = connect(
    mapStateToProps,
    mapDispatchToProps,
)( ContentBlocksTree );


export default ContentBlockWidgetsManager;