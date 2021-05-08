import React from "react";
import ReactDOM from "react-dom";

import Card from 'card/Card'

import css from "./index.css";

function App() {
    return <div>
        <h1>Main Component</h1>

        <div className={css.grid}>
            <Card id={1} />
            <Card id={2} />
            <Card id={3} />
        </div>
    </div>
}

ReactDOM.render(<App />, document.getElementById("app"));
