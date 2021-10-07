import Homepage from "../views/Homepage";
import SeeWatches from "../views/SeeWatches";
import WatchInformation from "../views/WatchInformation";
import AddWatch from "../views/AddWatch";
import Account from "../views/Account";
import Connection from "../views/Connection";

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
                        <Redirect to="/Accueil" key="accueil" />
                    )
                }}
            />
            <Route path="/Connection" key="connection">
                <Connection />
            </Route>
            <Route path="/Accueil" key="accueil">
                <Homepage />
            </Route>
            <Route exact path="/Voir-les-montres" key="voirLesMontres">
                <SeeWatches />
            </Route>
            <Route path="/voir-les-montres/:slug" key="informationMontre">
                <WatchInformation />
            </Route>
            <Route path="/Ajouter-une-montre" key="ajouterUneMontre">
                <AddWatch />
            </Route>
            <Route path="/Mon-compte" key="monCompte">
                <Account />
            </Route>
        </Switch>
    );
}