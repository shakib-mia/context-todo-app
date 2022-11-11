import React, { useState } from "react";
import dataContext from "./../../contexts/dataContext";

const Form = () => {
    const [item, setItem] = useState("");

    const operation = (items, listItem, setListItem) => {
        if (item.length) {
            items.push(item);
            setListItem(items);
            document.getElementById("input").value = "";
            setItem("");
        } else {
            document
                .getElementById("input")
                .setCustomValidity("input field cannot be empty");
            document.getElementById("input").reportValidity();
        }
    };
    return (
        <dataContext.Consumer>
            {([items, listItem, setListItem]) => (
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        operation(items, listItem, setListItem);
                    }}
                    className="text-center"
                >
                    <input
                        type="text"
                        className="form-control mb-5"
                        id="input"
                        onChange={(e) => setItem(e.target.value)}
                    />
                    <input className="btn btn-success" type="submit" />
                </form>
            )}
        </dataContext.Consumer>
    );
};

export default Form;
