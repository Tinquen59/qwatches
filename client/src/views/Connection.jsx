import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { LogoQwatches } from "../iconComponents/index";

import ConnectionFormGroup from "../components/formGroup/ConnectionFormGroup";


const schema = yup.object().shape({
    pseudo: yup.string().when("isLogin", {
        is: true,
        then: yup.string().trim().required()
    }),
    mail: yup.string().email().trim().required(),
    password: yup.string().trim().required()
})

export default function Connection () {
    const [isLogin, setIsLogin] = useState(true);
    const {register, handleSubmit, reset, formState: {isSubmitted, isSubmitSuccessful}} = useForm({
        defaultValues: { mail: "", password: "" },
        resolver: yupResolver(schema)
    });
    console.log("send form", {isSubmitted, isSubmitSuccessful});


    const changeIsLogin = () => {
        setIsLogin(!isLogin)
        reset();
    };

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <>
            <div className="qa-Connection__container">
                <LogoQwatches className="qa-Connection__container--logo"/>

                <div className="qa-CardConnection__container">
                    <div className={`qa-CardConnection__block ${isLogin ? "qa-CardConnection__block--active" : ""}`}>
                        {isLogin ? (
                            <>
                                <h1 className="qa-CardConnection__container--title">Se connecter</h1>

                                <form className="qa-ConnectionForm__container" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="qa-ConnectionForm__body">
                                        <ConnectionFormGroup
                                            labelText="Mail"
                                            typeInput="email"
                                            isRequired={true}
                                            register={register("mail")}
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
                                <h1 className="qa-CardConnection__container--title">S'inscrire</h1>

                                <form className="qa-ConnectionForm__container" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="qa-ConnectionForm__body">
                                        <ConnectionFormGroup
                                            labelText="Pseudo"
                                            typeInput="text"
                                            isRequired={true}
                                            register={register("Pseudo")}
                                        />
                                        
                                        <ConnectionFormGroup
                                            labelText="Mail"
                                            typeInput="email"
                                            isRequired={true}
                                            register={register("mail")}
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