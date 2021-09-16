import { useState } from "react";

export default function Connection () {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <>
            <div className="qa-Connection__container">
                <div className="qa-CardConnection__container">
                    <div className={`qa-CardConnection__block ${isLogin ? "qa-CardConnection__block--active" : ""}`}>
                        {isLogin ? (
                            <>
                                <h1 className="qa-CardConnection__container--title">Se connecter</h1>

                                <form className="">
                                    <button type="submit" className="qaBtn qa-Btn--sendForm">
                                        Se connecter
                                    </button>
                                </form>
                            </>
                        ) : (
                            <>
                                <button type="button" className="qa-Btn qa-Btn--third">
                                    Se connecter
                                </button>
                            </>
                        )}
                    </div>

                    <span className="qa-CardConnection__container--separator"></span>

                    <div className={`qa-CardConnection__block ${isLogin ? "" : "qa-CardConnection__block--active"}`}>
                        {isLogin ? (
                            <>
                                <button type="button" className="qa-Btn qa-Btn--third">
                                    S'inscrire
                                </button>
                            </>
                        ) : (
                            <>
                                <h1 className="qa-CardConnection__container--title">S'inscrire</h1>

                                <form className="">
                                    <button type="submit" className="qaBtn qa-Btn--sendForm">
                                        S'inscrire
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}