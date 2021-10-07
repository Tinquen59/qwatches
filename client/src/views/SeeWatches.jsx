import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";

import instance from "../helpers/axiosInstance";

import CardWatches from "../components/Card/CardWatches";


export default function SeeWatches () {
    const [dataWatches, setDataWatches] = useState({});
    const [searchBar, setSearchBar] = useState("");

    /**
     * get all watches
     */
    const getAllWatches = () => {
        instance.get("/api/watch/all-watches")
            .then(result => setDataWatches(result.data))
            .catch(error => console.error(error));
    }

    /**
     * set value when the value of search bar change
     * @param {*} event 
     */
    const handleChangeSearchBar = (event) => {
        const el = event.target;
        setSearchBar(el.value);
    };

    /**
     * search watches by the search bar
     * @param {*} event 
     */
    const searchWatches = (event) => {
        event.preventDefault();

        if (searchBar === "") {
            getAllWatches();
        } else {
            instance.post("/api/watch/search-watches", { searchBar })
                .then(result => setDataWatches(result.data))
                .catch(error => console.error(error));
        }
    };

    /**
     * get all watches when the component is mounted
     */
    useEffect(() => {
        if (localStorage.getItem("token")) getAllWatches();
    }, []);

    // if haven't token go back to the login page
    if (!localStorage.getItem("token")) return <Redirect to="/Connection" />;

    return(
        <>
            <section className="qa-BasicHero__container qa-BasicHero__container--seeWatchesBgi">
                <div className="qa-BasicHero__container--filter"></div>
                <h1 className="qa-BasicHero__container--title">Contempler les montres de collections</h1>
            </section>

            <section className="qa-SeeWatches__container">
                <form className="qa-SearchBar__container" onSubmit={searchWatches}>
                    <input
                        className="qa-SearchBar__container--input"
                        type="text"
                        name="search"
                        placeholder="Rechercher une montre"
                        onChange={handleChangeSearchBar}
                    />
                    <button
                        className="qa-Btn--search"
                        type="submit"
                    >
                        <FontAwesomeIcon
                            className="qa-SearchBar__container--icon"
                            icon={faSearch}
                        />
                    </button>
                </form>
                    
                <div className="qa-AllWatches__container">
                    {(dataWatches.length)
                        ? dataWatches.map((watchData, index) => (
                            <Link to={`/voir-les-montres/${watchData.model}`} className="qa-CardWatch__container" key={index}>
                                <CardWatches watchData={watchData} />
                            </Link>
                        ))
                        : (
                            <p>Aucun résultat</p>
                        )
                    }
                </div>
            </section>
        </>
    );
}