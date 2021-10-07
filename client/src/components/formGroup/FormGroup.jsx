export default function FormGroup ({
    isTextarea,
    labelText,
    isRequired,
    typeInput,
    placeholderInput,
    register,
    nameField,
    placeholderTextarea
}) {
    return (
        <label className={`qa-Form__group ${isTextarea ? "qa-Form__group-L" : ""}`}>
            <span className="qa-Form__group--text">{labelText} : {isRequired && "*"}</span>
            {(isTextarea !== true) ? (
                <input
                    type={typeInput}
                    className="qa-Form__group--input"
                    placeholder={`Ex: ${placeholderInput}`}
                    {...register(nameField, {required: isRequired})}
                />
            ) : (
                <textarea
                    className="qa-Form__group--textarea"
                    placeholder={placeholderTextarea}
                    rows="5"
                    {...register(nameField, {required: isRequired})}
                />
            )}
        </label>
    );
}