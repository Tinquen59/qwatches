export default function FormGroup (props) {
    return (
        <label className={`qa-Form__group ${props.isTextarea ? "qa-Form__group-L" : ""}`}>
            <span className="qa-Form__group--text">{props.labelText} : *</span>
            {(props.isTextarea !== true) ? (
                <input
                    type={props.typeInput}
                    className="qa-Form__group--input"
                    placeholder={`Ex: ${props.placeholderInput}`}
                    {...props.register}
                />
            ) : (
                <textarea
                    className="qa-Form__group--textarea"
                    placeholder={props.placeholderTextarea}
                    rows="5"
                    {...props.register}
                />
            )}
        </label>
    );
}