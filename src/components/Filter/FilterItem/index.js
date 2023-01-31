import "./index.css"

function FilterItem (props) {

    const handleDelete = props.handleDelete;

    return (
        <button className="filter-item">
            <span>{props.children}</span>
            <ion-icon name="close" onClick={handleDelete}></ion-icon>
        </button>
    )
}

export default FilterItem;