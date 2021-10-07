import { useState } from "react";

export default function AlertErrorMessage ({ message, closeAlert }) {
    return (
        <div className="qa-AlertErrorMessage__container">
            <div className="qa-AlertErrorMessage__container--close" onClick={() => closeAlert()}>fermer</div>

            <p className="qa-AlertErrorMessage__container--message">{ message }</p>
        </div>
    );
}