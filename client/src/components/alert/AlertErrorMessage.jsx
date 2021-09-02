export default function AlertErrorMessage ({message}) {
    return (
        <div className="qa-AlertErrorMessage__container">
            <p className="qa-AlertErrorMessage__container--message">{ message }</p>
        </div>
    );
}