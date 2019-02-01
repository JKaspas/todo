import React, {Component} from 'react';
import ResponsiveDrawer from "./components/ResponsiveDrawer";
import {BrowserRouter, Route, Switch} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <ResponsiveDrawer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
