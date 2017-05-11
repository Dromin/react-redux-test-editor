import { connect } from "react-redux";
import { getNestedContentBlockObjects } from "../../selectors/entities/contentBlocks";
import ContentBlocksJsonDebug from "../presentational/ContentBlocksJsonDebug";


const mapStateToProps = ( state ) =>
{
    console.log('preview');
    console.log(state.entities.contentBlocks.allContentBlockIds);

    return {
        bemClassModifier: "slide-preview",
        contentBlocks: getNestedContentBlockObjects( state.entities.contentBlocks ),
    };
};

const mapDispatchToProps = ( dispatch ) =>
{
    return {};
};

const SlidePreview = connect(
    mapStateToProps,
    mapDispatchToProps,
)( ContentBlocksJsonDebug );


export default SlidePreview;