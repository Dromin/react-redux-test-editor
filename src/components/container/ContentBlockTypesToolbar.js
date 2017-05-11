import { connect } from "react-redux";
import Toolbar from "../presentational/Toolbar";
import { createEmptyContentBlockOfType } from "../../actions/entities/contentBlocks/creators"


const getContentBlockTypeButtonObjects = ( allContentBlockTypeIds, contentBlockTypesById ) =>
{
    return allContentBlockTypeIds.map(
        id =>
        {
            const contentBlockType = contentBlockTypesById[ id ];

            return {
                id: contentBlockType.id,
                text: contentBlockType.name,
                title: contentBlockType.description,
                actionCode: "add-" + id.toLowerCase().replace( "_", "-" ),
            };
        },
    );
};


const mapStateToProps = ( state ) =>
{
    return {
        bemClassModifier: "content-block-types",
        buttons: getContentBlockTypeButtonObjects(
            state.entities.contentBlockTypes.allContentBlockTypeIds,
            state.entities.contentBlockTypes.contentBlockTypesById,
        ),
    };
};

const mapDispatchToProps = ( dispatch ) =>
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