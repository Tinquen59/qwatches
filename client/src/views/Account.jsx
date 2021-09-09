import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import AlertSuccessMessage from "../components/alert/AlertSuccessMessage";
import AlertErrorMessage from "../components/alert/AlertErrorMessage";
import FormGroup from "../components/FormGroup";


const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g

// verification for input
const schema = yup.object().shape({
    firstName: yup.string().trim(),
    lastName: yup.string().trim(),
    pseudo: yup.string().trim().required(),
    email: yup.string().email().trim().required(),
    phoneNumber: yup.string().matches(phoneRegex, { excludeEmptyString: true }).trim()
})

export default function Account () {
    const {register, handleSubmit, formState: {isSubmitted, isSubmitSuccessful}} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = data => {
        console.log("data : ", data);
    }

    return (
        <>
            <section className="qa-BasicHero__container qa-BasicHero__container--accountBgi">
                <div className="qa-BasicHero__container--filter"></div>
                <h1 className="qa-BasicHero__container--title">Mon compte</h1>
            </section>

            <div className="qa-Account__container">
                <h2 className="qa-Account__container--subTitle">Mes informations</h2>

                <form className="qa-AccountForm__container" onSubmit={handleSubmit(onSubmit)}>
                    {isSubmitSuccessful && <AlertSuccessMessage message="La montre a bien été ajouté" />}
                    
                    {(isSubmitted && !isSubmitSuccessful) && <AlertErrorMessage message="Oups ! Veuillez vérifier vos informations" />}

                    <div className="qa-AccountForm__group">
                        <FormGroup
                            labelText="Prénom"
                            typeInput="text"
                            placeholderInput="Didier"
                            register={register("firstName")}
                        />

                        <FormGroup
                            labelText="Nom"
                            typeInput="text"
                            placeholderInput="Dupont"
                            register={register("lastName")}
                        />

                        <FormGroup
                            isRequired={true}
                            labelText="Pseudo"
                            typeInput="text"
                            placeholderInput="LeCollectionneur"
                            register={register("pseudo")}
                        />

                        <FormGroup
                            isRequired={true}
                            labelText="E-mail"
                            typeInput="email"
                            placeholderInput="example@toto.fr"
                            register={register("email")}
                        />

                        <FormGroup
                            labelText="Numéro de téléphone"
                            typeInput="tel"
                            placeholderInput="0605040302"
                            register={register("phoneNumber")}
                        />
                    </div>

                    <p className="qa-AccountForm__container--requiredField">* : Champs obligatoire</p>

                    <div className="qa-AccountForm__buttonGroup">
                        <button
                            type="submit"
                            className="qa-AccountForm__buttonGroup--btn qa-Btn qa-Btn--sendForm"
                        >
                            Valider
                        </button>

                        <button
                            type="button"
                            className="qa-NewWatch__submitForm--btn qa-Btn qa-Btn--leave"
                        >
                            Quitter
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}