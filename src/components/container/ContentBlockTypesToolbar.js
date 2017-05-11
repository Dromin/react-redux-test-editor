import { connect } from "react-redux";
import Toolbar from "../presentational/Toolbar";
import { createEmptyContentBlockOfType } from "../../actions/entities/contentBlocks/creators"
import { getContentBlockTypeButtonsArray } from "../../selectors/entities/contentBlockTypes";


const mapStateToProps = ( state, props ) =>
{
    return {
        bemClassModifier: "content-block-types",
        buttons: getContentBlockTypeButtonsArray( state ),
    };
};

const mapDispatchToProps = ( dispatch, props ) =>
{
    return {
        onButtonClick: ( contentBlockTypeId ) =>
        {
            dispatch( createEmptyContentBlockOfType( contentBlockTypeId ) );
        },
    };
};

const contentBlockTypesToolbar = connect(
    mapStateToProps,
    mapDispatchToProps,
)( Toolbar );


export default contentBlockTypesToolbar;