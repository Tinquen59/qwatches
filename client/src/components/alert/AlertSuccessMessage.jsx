export default function AlertSuccessMessage ({ message, closeAlert }) {
    return (
        <div className="qa-AlertSuccessMessage__container">
            <div className="qa-AlertErrorMessage__container--close" onClick={() => closeAlert()}>fermer</div>
        
            <p className="qa-AlertSuccessMessage__container--message">{message}</p>
        </div>
    );
}