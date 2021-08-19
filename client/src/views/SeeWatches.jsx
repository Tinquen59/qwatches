import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import CardWatches from "../components/Card/CardWatches";

import swatchImg from "../assets/images/swatch_system51_irony.png";
import seikoImg from "../assets/images/seiko.jpg";


export default function SeeWatches () {

    const dataWatches = [
        {
            image: {
                src: swatchImg,
                alt: "montre swatch"
            },
            model: "Petite seconde black",
            mark: "Swatch"
        },
        {
            image: {
                src: seikoImg,
                alt: "montre seiko"
            },
            model: "Aucune idée",
            mark: "Seiko"
        },
        {
            image: {
                src: swatchImg,
                alt: "montre swatch"
            },
            model: "Petite seconde black",
            mark: "Swatch"
        },
        {
            image: {
                src: seikoImg,
                alt: "montre seiko"
            },
            model: "Aucune idée",
            mark: "Seiko"
        },
        {
            image: {
                src: swatchImg,
                alt: "montre swatch"
            },
            model: "Petite seconde black",
            mark: "Swatch"
        },
        {
            image: {
                src: seikoImg,
                alt: "montre seiko"
            },
            model: "Aucune idée",
            mark: "Seiko"
        }
    ]

    return(
        <>
            <section className="qa-BasicHero__container qa-BasicHero__container--bgi">
                <h1 className="qa-BasicHero__container--title">Contempler les montres de collections</h1>
            </section>

            <section className="qa-SeeWatches__container">
                <form className="qa-SearchBar__container">
                    <input
                        className="qa-SearchBar__container--input"
                        type="text"
                        name="search"
                        placeholder="Rechercher une montre"
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
                    {dataWatches.map((watch, index) => (
                        <CardWatches watchData={watch} key={index} />
                    ))}
                </div>
            </section>
        </>
    );
}