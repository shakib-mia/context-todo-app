import React from "react";
import dataContext from "./../../contexts/dataContext";

const List = () => {
    const deleteItem = (listItem, setListItem, item) => {
        listItem.splice(listItem.indexOf(item), 1);

        setListItem(listItem);
        console.log(listItem);
    };

    return (
        <dataContext.Consumer>
            {([items, listItem, setListItem]) => {
                return (
                    <ul className="list-group">
                        {items.map((item) => (
                            <li
                                key={Math.random()}
                                className="list-group-item d-flex justify-content-between"
                            >
                                {item}
                                <span
                                    style={{ cursor: "pointer" }}
                                    onClick={() =>
                                        deleteItem(listItem, setListItem, item)
                                    }
                                >
                                    Delete
                                </span>
                            </li>
                        ))}
                    </ul>
                );
            }}
        </dataContext.Consumer>
    );
};

export default List;
