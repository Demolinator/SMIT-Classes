import Item from "../item/Item";

function List ({arr}) {
    
    return (
        <ul>
            <Item arr={arr} />
        </ul>
    )
}

export default List;