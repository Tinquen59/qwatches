import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitterSquare, faPinterestSquare } from "@fortawesome/free-brands-svg-icons";

export default function PiedDePage() {
    return (
        <footer>
            <p className="qa-Copyright">© Quentin Andrieu - 2021</p>
            <div className="qa-Network__container">
                <FontAwesomeIcon icon={faInstagram} className="qa-Network__container--icon" />
                <FontAwesomeIcon icon={faPinterestSquare} className="qa-Network__container--icon" />
                <FontAwesomeIcon icon={faTwitterSquare} className="qa-Network__container--icon" />
            </div>
        </footer>
    )
}