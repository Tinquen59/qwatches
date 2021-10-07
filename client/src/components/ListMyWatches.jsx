import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default function ListMyWatches ({ myWatch, removeMyWatch }) {
    const { watchImage, mark, model } = myWatch;
    // console.log("props", props)
    // const { myWatch } = props;
    return (
        <li className="qa-ListMyWatches__item">
            <img
                className="qa-ListMyWatches__item--image"
                src={watchImage}
                alt={`${myWatch.mark} - ${model}`}
            />

            <div className="qa-ListMyWatches__content">
                <p className="qa-ListMyWatches__content--title">{mark} - {model}</p>
            </div>

            <button
                type="button"
                className="qa-ListMyWatches__item--btn qa-Btn qa-Btn--remove"
                onClick={() => removeMyWatch(myWatch)}
            >
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
        </li>
    );
}