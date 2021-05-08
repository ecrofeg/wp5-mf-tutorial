import React from "react";
import ReactDOM from "react-dom";

import Card from './components/Card/Card'

import "./index.css";

function App() {
    return <div>
        <h1>Card component</h1>

        <div>
            <Card id={1} />
        </div>
    </div>
}

ReactDOM.render(<App />, document.getElementById("app"));
