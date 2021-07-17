import Homepage from "../views/Homepage";

import {
    Switch,
    Route,
    Redirect
} from "react-router-dom"

export default () => {
    return(
        <Switch>
            <Route
                exact
                path="/"
                render={() => {
                    return (
                        <Redirect to="/Accueil" />
                    )
                }}
            />
            <Route path="/Accueil">
                <Homepage />
            </Route>
        </Switch>
    );
}