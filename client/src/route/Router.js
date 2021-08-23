import Homepage from "../views/Homepage";
import SeeWatches from "../views/SeeWatches";
import WatchInformation from "../views/WatchInformation";
import AddWatch from "../views/AddWatch";
import Account from "../views/Account";

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
            <Route exact path="/Voir-les-montres">
                <SeeWatches />
            </Route>
            <Route path="/voir-les-montres/test">
                <WatchInformation />
            </Route>
            <Route path="/Ajouter-une-montre">
                <AddWatch />
            </Route>
            <Route path="/Mon-compte">
                <Account />
            </Route>
        </Switch>
    );
}