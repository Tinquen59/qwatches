import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";

export default function Homepage() {
    // if haven't token go back to the login page
    if (!localStorage.getItem("token")) return <Redirect to="/Connection" />;

    return (
        <>
            <section className="qa-HeroHomepage__container">
                <h1 className="qa-HeroHomepage__container--title">Qwatches</h1>
            </section>

            <section className="qa-Homepage__container">
                <h2>Montre de collection</h2>

                <p>Découvrez de nouvelles montres de collection et ajoutez des commentaires afin d’aider la communauté à trouver sa montre</p>

                <Link to="/Voir-les-montres" className="qa-Btn qa-Btn--link">Voir les montres</Link>
            </section>
        </>
    );
};