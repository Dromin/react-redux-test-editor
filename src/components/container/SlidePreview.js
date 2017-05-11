import { connect } from "react-redux";
import { getNestedContentBlockObjects } from "../../selectors/entities/contentBlocks";
import ContentBlocksJsonDebug from "../presentational/ContentBlocksJsonDebug";


const mapStateToProps = ( state, props ) =>
{
    return {
        bemClassModifier: "slide-preview",
        contentBlocks: getNestedContentBlockObjects( state ),
    };
};

const mapDispatchToProps = ( dispatch, props ) =>
{
    return {};
};

const SlidePreview = connect(
    mapStateToProps,
    mapDispatchToProps,
)( ContentBlocksJsonDebug );


export default SlidePreview;