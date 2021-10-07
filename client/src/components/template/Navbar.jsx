import React, { useState, useEffect, useRef } from "react";

import { LogoQwatchesSecondary } from "../../iconComponents/index";

import { Link, NavLink } from "react-router-dom";


const widthNoDisplayMenu = 960;

export default function Navbar () {
    const burgerMenu = useRef(null)

    const [ toggleMenu, setToggleMenu] = useState(false);
    const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);

    /**
     * affiche ou non le menu sur petit écran
     * @returns le contraire de toggleMenu
     */
    const toggleBurgerMenu = () => {
        setToggleMenu(!toggleMenu);

        !toggleMenu ? burgerMenu.current.classList.add("qa-BurgerMenu--active") : burgerMenu.current.classList.remove("qa-BurgerMenu--active");
    };

    useEffect(() => {
        const changeWidth = () => {
            setWindowWidth(window.innerWidth);
            
            if (window.innerWidth > widthNoDisplayMenu) setToggleMenu(false);
        }

        window.addEventListener("resize", changeWidth);

        return () => window.removeEventListener("resize", changeWidth);
    }, [])

    return (
        <header>
            <Link to="/Accueil">
                <LogoQwatchesSecondary className="qa-LogoQwatches" />
            </Link>

            <nav className="qa-Navigation__container">
                {(toggleMenu || windowWidth > widthNoDisplayMenu) && (
                    <div className="qa-Item__container">
                        <NavLink to="/Voir-les-montres" className="qa-Item__container--link" activeClassName="qa-Link--active">Voir les montres</NavLink>
                        <NavLink to="/Ajouter-une-montre" className="qa-Item__container--link" activeClassName="qa-Link--active">Ajouter une montre</NavLink>
                        <NavLink to="/Mon-compte" className="qa-Item__container--link" activeClassName="qa-Link--active">Mon compte</NavLink>
                    </div>
                )}

                <div
                    className="qa-BurgerMenu"
                    onClick={toggleBurgerMenu}
                    ref={burgerMenu}
                >
                    <span></span>
                </div>
            </nav>
        </header>
    );
}