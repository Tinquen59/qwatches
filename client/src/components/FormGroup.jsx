export default function FormGroup (props) {
    return (
        <label className={`qa-Form__group ${props.isTextarea ? "qa-Form__group-L" : ""}`}>
            <span className="qa-Form__group--text">{props.labelText} : *</span>
            {(props.isTextarea !== true) ? (
                <input
                    type={props.typeInput}
                    name={props.nameInput}
                    className="qa-Form__group--input"
                    value={props.valueInput}
                    placeholder={`Ex: ${props.placeholderInput}`}
                    onChange={props.handleChange}
                />
            ) : (
                <textarea
                    className="qa-Form__group--textarea"
                    name={props.nameTextarea}
                    value={props.valueTextarea}
                    placeholder={props.placeholderTextarea}
                    rows="5"
                    onChange={props.handleChange}
                />
            )}
        </label>
    );
}