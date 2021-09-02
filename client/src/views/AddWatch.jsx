import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import AlertSuccessMessage from "../components/alert/AlertSuccessMessage";
import AlertErrorMessage from "../components/alert/AlertErrorMessage";
import FormGroup from "../components/FormGroup";


const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

const schema = yup.object().shape({
    model: yup.string().trim().required(""),
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
    const {register, handleSubmit, formState: {errors, isSubmitted, isSubmitSuccessful}} = useForm({
        resolver: yupResolver(schema)
    });

    // console.log({isSubmitted, isSubmitSuccessful})
    // console.log("errors ", errors);
    // console.log("errors lentgh", errors.length);

    // const [dataNewWatch, setDataNewWatch] = useState({
    //     model: "",
    //     mark: "",
    //     movement: "",
    //     waterproof: "",
    //     claspMaterial: "",
    //     braceletMaterial: "",
    //     housingMaterial: "",
    //     claspType: "",
    //     madeIn: "",
    //     description: "",
    //     watchImage: {}
    // })

    // const handleChange = event => {
    //     const el = event.target;
    //     setDataNewWatch({...dataNewWatch, [el.name]: el.value})
    // }

    // const handleSubmit = event => {
    //     event.preventDefault();
    // }

    const onSubmit = data => {
        console.log("data useForm ", data);
    };

    // console.log("errors", errors);

    return (
        <>
            <section className="qa-BasicHero__container qa-BasicHero__container--addWatchBgi">
                <h1 className="qa-BasicHero__container--title">Aidez la communauté en ajoutant des montres de collection</h1>
            </section>

            <div className="qa-AddWatch__container">
                <h2 className="qa-AddWatch__container--subTitle">Ajouter une montre de collection</h2>

                <form className="qa-NewWatch__container" onSubmit={handleSubmit(onSubmit)}>
                    {isSubmitSuccessful && <AlertSuccessMessage message="La montre a bien été ajouté" />}
                    
                    {(isSubmitted && !isSubmitSuccessful) && <AlertErrorMessage message="Oups ! Veuillez vérifier vos informations" />}

                    <div className="qa-NewWatch__group">
                        <FormGroup
                            labelText="Modèle"
                            typeInput="text"
                            placeholderInput="PETITE SECONDE BLACK"
                            register={register("model")}
                        />

                        <FormGroup
                            labelText="Marque"
                            typeInput="text"
                            placeholderInput="Swatch"
                            register={register("mark")}
                        />

                        <FormGroup
                            labelText="Mouvement"
                            typeInput="text"
                            placeholderInput="Automatique"
                            register={register("movement")}
                        />

                        <FormGroup
                            labelText="Etanchéité"
                            typeInput="number"
                            placeholderInput="30 (en mètre)"
                            register={register("waterproof")}
                        />

                        <FormGroup
                            labelText="Matière du fermoir"
                            typeInput="text"
                            placeholderInput="Acier inoxydable"
                            register={register("claspMaterial")}
                        />

                        <FormGroup
                            labelText="Matière du bracelet"
                            typeInput="text"
                            placeholderInput="Cuir animal"
                            register={register("braceletMaterial")}
                        />

                        <FormGroup
                            labelText="Matière du boitier"
                            typeInput="text"
                            placeholderInput="Acier inoxydable"
                            register={register("housingMaterial")}
                        />

                        <FormGroup
                            labelText="Type de fermoir"
                            typeInput="text"
                            placeholderInput="Demi boucle"
                            register={register("claspType")}
                        />

                        <FormGroup
                            labelText="Made in"
                            typeInput="text"
                            placeholderInput="Suisse"
                            register={register("madeIn")}
                        />
                    </div>

                    <FormGroup
                        isTextarea={true}
                        labelText="Description"
                        placeholderTextarea="Une courte description ..."
                        register={register("description")}
                    />

                    <label className="qa-Form__group qa-Form__group-block">
                        <button type="button" className="qa-Btn qa-Btn--uploadFile">Ajoutez une photo (PNG, JPG) : *</button>
                        <input
                            type="file"
                            accept=".jpeg, .jpg, .png"
                            {...register("watchImage")}
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