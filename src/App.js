import { useState } from "react";
import "./App.css";
import dataContext from "./contexts/dataContext";
import List from "./components/List/List";
import Form from "./components/Form/Form";

function App() {
    let [listItem, setListItem] = useState([]);
    const items = [...listItem];

    return (
        <div className="container">
            <dataContext.Provider value={[items, listItem, setListItem]}>
                <div className="row row-cols-2 my-3">
                    <List />
                    <Form />
                </div>
            </dataContext.Provider>
        </div>
    );
}

export default App;
