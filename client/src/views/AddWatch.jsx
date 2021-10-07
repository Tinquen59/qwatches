import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Redirect } from "react-router";

import instance from "../helpers/axiosInstance";

import AlertSuccessMessage from "../components/alert/AlertSuccessMessage";
import AlertErrorMessage from "../components/alert/AlertErrorMessage";
import FormGroup from "../components/formGroup/FormGroup";
import { useEffect, useState } from "react";


// accepted format for upload input
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

// verification for input
const schema = yup.object().shape({
    model: yup.string().trim().required(),
    mark: yup.string().trim().required(),
    movement: yup.string().trim().required(),
    waterproof: yup.number().positive().integer().required(),
    claspMaterial: yup.string().trim().required(),
    braceletMaterial: yup.string().trim().required(),
    housingMaterial: yup.string().trim().required(),
    claspType: yup.string().trim().required(),
    madeIn: yup.string().trim().required(),
    description: yup.string().trim().required(),
    watchImage: yup.mixed().required().test(
        "fileFormat",
        "Unsupported file type",
        (value) => value[0] && SUPPORTED_FORMATS.includes(value[0].type)
    )
});

export default function AddWatch () {
    const [showAlert, setShowAlert] = useState(false);
    const [messageAlert, setMessageAlert] = useState("");
    const {register, handleSubmit, reset, formState: {submitCount, isSubmitted, isSubmitSuccessful}} = useForm({
        resolver: yupResolver(schema)
    });

    /**
     * close alert
     */
    const closeAlert = () => {
        setShowAlert(false);
    }

    /**
     * display alert
     * @returns AlertSuccessMessage component or AlertErrorMessage component
     */
    const displayAlert = () => {
        if (isSubmitSuccessful) {
            if (showAlert) {
                return <AlertSuccessMessage
                            message={messageAlert}
                            closeAlert={closeAlert}
                       />
            }
            
        } else {
            if (showAlert) {
                return <AlertErrorMessage
                            message="Oups ! Veuillez vérifier vos informations"
                            closeAlert={closeAlert}
                        />
            }
            
        }
    }

    /**
     * when sending the form
     * @param {*} data is fields data
     */
    const onSubmit = data => {
        data = { ...data, userId: localStorage.getItem("userId") }
        const formData = new FormData();

        for (const key in data) {
            if (key === "watchImage") {
                formData.append(key, data[key][0]);
            }
            else {
                formData.append(key, data[key]);
            }
        }

        instance.post("/api/watch/new-watch", formData)
            .then(response => setMessageAlert(response.data.message))
            .catch(error => console.error(error));

        reset();
    };

    /**
     * show alert when sending the form
     */
    useEffect(() => {
        setShowAlert(isSubmitted);
    }, [submitCount]);

    // if haven't token go back to the login page
    if (!localStorage.getItem("token")) return <Redirect to="/Connection" />;

    return (
        <>
            <section className="qa-BasicHero__container qa-BasicHero__container--addWatchBgi">
                <div className="qa-BasicHero__container--filter"></div>
                <h1 className="qa-BasicHero__container--title">Aidez la communauté en ajoutant des montres de collection</h1>
            </section>

            <div className="qa-AddWatch__container">
                <h2 className="qa-AddWatch__container--subTitle">Ajouter une montre de collection</h2>

                <form className="qa-NewWatch__container" encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
                    {(isSubmitted && showAlert) && displayAlert()}

                    <div className="qa-NewWatch__group">
                        <FormGroup
                            isRequired={true}
                            labelText="Modèle"
                            typeInput="text"
                            placeholderInput="PETITE SECONDE BLACK"
                            nameField="model"
                            register={register}
                        />

                        <FormGroup
                            isRequired={true}
                            labelText="Marque"
                            typeInput="text"
                            placeholderInput="Swatch"
                            nameField="mark"
                            register={register}
                        />

                        <FormGroup
                            isRequired={true}
                            labelText="Mouvement"
                            typeInput="text"
                            placeholderInput="Automatique"
                            nameField="movement"
                            register={register}
                        />

                        <FormGroup
                            isRequired={true}
                            labelText="Etanchéité"
                            typeInput="number"
                            placeholderInput="30 (en mètre)"
                            nameField="waterproof"
                            register={register}
                        />

                        <FormGroup
                            isRequired={true}
                            labelText="Matière du fermoir"
                            typeInput="text"
                            placeholderInput="Acier inoxydable"
                            nameField="claspMaterial"
                            register={register}
                        />

                        <FormGroup
                            isRequired={true}
                            labelText="Matière du bracelet"
                            typeInput="text"
                            placeholderInput="Cuir animal"
                            nameField="braceletMaterial"
                            register={register}
                        />

                        <FormGroup
                            isRequired={true}
                            labelText="Matière du boitier"
                            typeInput="text"
                            placeholderInput="Acier inoxydable"
                            nameField="housingMaterial"
                            register={register}
                        />

                        <FormGroup
                            isRequired={true}
                            labelText="Type de fermoir"
                            typeInput="text"
                            placeholderInput="Demi boucle"
                            nameField="claspType"
                            register={register}
                        />

                        <FormGroup
                            isRequired={true}
                            labelText="Made in"
                            typeInput="text"
                            placeholderInput="Suisse"
                            nameField="madeIn"
                            register={register}
                        />
                    </div>

                    <FormGroup
                        isRequired={true}
                        isTextarea={true}
                        labelText="Description"
                        placeholderTextarea="Une courte description ..."
                        nameField="description"
                        register={register}
                    />

                    <label className="qa-Form__group qa-Form__group-block">
                        <button type="button" className="qa-Btn qa-Btn--uploadFile">Ajoutez une photo (PNG, JPG) : *</button>
                        <input
                            type="file"
                            accept=".jpeg, .jpg, .png"
                            {...register("watchImage", { required: true })}
                        />
                    </label>

                    <p className="qa-NewWatch__container--requiredField">* : Champs obligatoire</p>

                    <div className="qa-NewWatch__submitForm">
                        <button
                            type="submit"
                            className="qa-NewWatch__submitForm--btn qa-Btn qa-Btn--sendForm"
                        >
                            Valider
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}