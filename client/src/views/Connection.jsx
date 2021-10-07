import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Redirect } from "react-router";

import instance from "../helpers/axiosInstance";

import { LogoQwatches } from "../iconComponents/index";

import ConnectionFormGroup from "../components/formGroup/ConnectionFormGroup";


// verification for input
const schema = yup.object().shape({
    pseudo: yup.string().when("isLogin", {
        is: true,
        then: yup.string().trim().required()
    }),
    email: yup.string().email().trim().required(),
    password: yup.string().trim().required()
})

export default function Connection () {
    const [isLogin, setIsLogin] = useState(true);
    const [issend, setIsSend] = useState(false)
    const {register, handleSubmit, reset, formState: {isSubmitted, isSubmitSuccessful}} = useForm({
        resolver: yupResolver(schema)
    });


    /**
     * change between login and signup
     */
    const changeIsLogin = () => {
        setIsLogin(!isLogin)
        reset();
    };

    /**
     * login user and get the token
     * @param {*} data is fields data 
     */
    const loginQwatches = async data => {
        instance.post("/api/login", data)
            .then(response => {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("userId", response.data.userId);
                setIsSend(true);
            })
            .catch(error => console.error(error));
    };

    /**
     * add new user and get the token
     * @param {*} data is fields data
     */
    const newUser = data => {
        instance.post("/api/signup", data)
            .then(response => {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("userId", response.data.userId);
                setIsSend(true);
            })
            .catch(error => console.error(error));
    };

    // if have token go to the home page
    if (localStorage.getItem("token")) return <Redirect to="/" />;

    return (
        <>
            <div className="qa-Connection__container">
                <LogoQwatches className="qa-Connection__container--logo"/>

                <div className="qa-CardConnection__container">
                    <div className={`qa-CardConnection__block ${isLogin ? "qa-CardConnection__block--active" : ""}`}>
                        {isLogin ? (
                            <>
                                <h1 className="qa-CardConnection__container--title">Connexion</h1>

                                <form className="qa-ConnectionForm__container" onSubmit={handleSubmit(loginQwatches)}>
                                    <div className="qa-ConnectionForm__body">
                                        <ConnectionFormGroup
                                            labelText="Mail"
                                            typeInput="text"
                                            isRequired={true}
                                            register={register("email")}
                                        />
                                        
                                        <ConnectionFormGroup
                                            labelText="Mot de passe"
                                            typeInput="password"
                                            isRequired={true}
                                            register={register("password")}
                                        />
                                    </div>

                                    <div className="qa-Connection__submitForm">
                                        <button type="submit" className="qa-Btn qa-Btn--sendForm">
                                            Se connecter
                                        </button>
                                    </div>
                                </form>
                            </>
                        ) : (
                            <>
                                <button
                                    type="button"
                                    className="qa-Btn qa-Btn--third"
                                    onClick={changeIsLogin}
                                >
                                    Se connecter
                                </button>
                            </>
                        )}
                    </div>

                    <span className="qa-CardConnection__container--separator"></span>

                    <div className={`qa-CardConnection__block ${isLogin ? "" : "qa-CardConnection__block--active"}`}>
                        {isLogin ? (
                            <>
                                <button
                                    type="button"
                                    className="qa-Btn qa-Btn--third"
                                    onClick={changeIsLogin}
                                >
                                    S'inscrire
                                </button>
                            </>
                        ) : (
                            <>
                                <h1 className="qa-CardConnection__container--title">Inscription</h1>

                                <form className="qa-ConnectionForm__container" onSubmit={handleSubmit(newUser)}>
                                    <div className="qa-ConnectionForm__body">
                                        <ConnectionFormGroup
                                            labelText="Pseudo"
                                            typeInput="text"
                                            isRequired={true}
                                            register={register("pseudo")}
                                        />
                                        
                                        <ConnectionFormGroup
                                            labelText="Mail"
                                            typeInput="text"
                                            isRequired={true}
                                            register={register("email")}
                                        />
                                        
                                        <ConnectionFormGroup
                                            labelText="Mot de passe"
                                            typeInput="password"
                                            isRequired={true}
                                            register={register("password")}
                                        />
                                    </div>

                                    <div className="qa-Connection__submitForm">
                                        <button type="submit" className="qa-Btn qa-Btn--sendForm">
                                            S'inscrire
                                        </button>
                                    </div>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}