import { connect } from "react-redux";
import ContentBlocksJsonDebug from "../presentational/ContentBlocksJsonDebug";


const getContentBlockObjects = ( allContentBlockIds, contentBlocksById ) =>
{
    return allContentBlockIds.map(
        id =>
        {
            const contentBlock = contentBlocksById[ id ];
            const children = contentBlock.childIds instanceof Array
                ? getContentBlockObjects( contentBlock.childIds, contentBlocksById )
                : []
            ;

            return {
                ...contentBlock,
                children,
            };
        },
    );
};

const mapStateToProps = ( state ) =>
{
    return {
        bemClassModifier: "slide-preview",
        contentBlocks: getContentBlockObjects(
            state.entities.contentBlocks.allContentBlockIds,
            state.entities.contentBlocks.contentBlocksById
        ),
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