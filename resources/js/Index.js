import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ReactDOM from "react-dom";
import 'antd/dist/antd.css';
import Login from "./views/Login/Login";
import {NotFound} from "./views/Notfound/NotFound";
import PrivateRoute from "./PrivateRoute";
import {Dashboard} from "./views/Dashboard/Dashboard";

class Index extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path={"/"}>
                        <Login/>
                    </Route>
                    <Route path={"/login"}>
                        <Login/>
                    </Route>
                    <PrivateRoute path={"/dashboard"} component={Dashboard}/>
                    <Route path={"*"} component={NotFound}/>
                </Switch>
            </div>
        );
    }
}

ReactDOM.render(
    <BrowserRouter>
        <Index/>
    </BrowserRouter>
    , document.getElementById('index'));
