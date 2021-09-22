export default function ConnectionFormGroup (props) {
    return (
        <label className="qa-ConnectionForm__group">
            <input
                type={props.typeInput}
                className="qa-ConnectionForm__group--input"
                required
                {...props.register}
            />
            <span className="qa-ConnectionForm__group--text">{props.labelText} {props.isRequired && "*"}</span>
        </label>
    );
}