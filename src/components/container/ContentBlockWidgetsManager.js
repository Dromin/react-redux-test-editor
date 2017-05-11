import React from "react";
import { connect } from "react-redux";
import { getAllContentBlockIds } from "../../selectors/entities/contentBlocks";
import ContentBlocksTree from "../presentational/ContentBlocksTree";


const mapStateToProps = ( state, props ) =>
{
    return {
        bemClassModifier: "tree",
        contentBlockIds: getAllContentBlockIds( state ),
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