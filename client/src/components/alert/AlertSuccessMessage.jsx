export default function AlertSuccessMessage ({ message }) {
    return (
        <div className="qa-AlertSuccessMessage__container">
            <p className="qa-AlertSuccessMessage__container--message">{message}</p>
        </div>
    );
}