import { useState } from "react";
import FormGroup from "../components/FormGroup";

export default function AddWatch () {

    const [dataNewWatch, setDataNewWatch] = useState({
        model: "",
        mark: "",
        movement: "",
        waterproof: "",
        claspMaterial: "",
        braceletMaterial: "",
        housingMaterial: "",
        claspType: "",
        madeIn: "",
        description: ""
    })

    function handleChange (event) {
        const el = event.target;
        setDataNewWatch({...dataNewWatch, [el.name]: el.value})
    }

    return (
        <>
            <section className="qa-BasicHero__container qa-BasicHero__container--addWatchBgi">
                <h1 className="qa-BasicHero__container--title">Aidez la communauté en ajoutant des montres de collection</h1>
            </section>

            <div className="qa-AddWatch__container">
                <h2 className="qa-AddWatch__container--subTitle">Ajouter une montre de collection</h2>

                <form className="qa-NewWatch__container">
                    <div className="qa-NewWatch__group">
                        <FormGroup
                            labelText="Modèle"
                            typeInput="text"
                            nameInput="model"
                            valueInput={dataNewWatch.model}
                            placeholderInput="PETITE SECONDE BLACK"
                            handleChange={handleChange}
                        />

                        <FormGroup
                            labelText="Marque"
                            typeInput="text"
                            nameInput="mark"
                            valueInput={dataNewWatch.mark}
                            placeholderInput="Swatch"
                            handleChange={handleChange}
                        />

                        <FormGroup
                            labelText="Mouvement"
                            typeInput="text"
                            nameInput="movement"
                            valueInput={dataNewWatch.movement}
                            placeholderInput="Automatique"
                            handleChange={handleChange}
                        />

                        <FormGroup
                            labelText="Etanchéité"
                            typeInput="number"
                            nameInput="waterproof"
                            valueInput={dataNewWatch.waterproof}
                            placeholderInput="30 (en mètre)"
                            handleChange={handleChange}
                        />

                        <FormGroup
                            labelText="Matière du fermoir"
                            typeInput="text"
                            nameInput="claspMaterial"
                            valueInput={dataNewWatch.claspMaterial}
                            placeholderInput="Acier inoxydable"
                            handleChange={handleChange}
                        />

                        <FormGroup
                            labelText="Matière du bracelet"
                            typeInput="text"
                            nameInput="braceletMaterial"
                            valueInput={dataNewWatch.braceletMaterial}
                            placeholderInput="Cuir animal"
                            handleChange={handleChange}
                        />

                        <FormGroup
                            labelText="Matière du boitier"
                            typeInput="text"
                            nameInput="housingMaterial"
                            valueInput={dataNewWatch.housingMaterial}
                            placeholderInput="Acier inoxydable"
                            handleChange={handleChange}
                        />

                        <FormGroup
                            labelText="Type de fermoir"
                            typeInput="text"
                            nameInput="claspType"
                            valueInput={dataNewWatch.claspType}
                            placeholderInput="Demi boucle"
                            handleChange={handleChange}
                        />

                        <FormGroup
                            labelText="Made in"
                            typeInput="text"
                            nameInput="madeIn"
                            valueInput={dataNewWatch.madeIn}
                            placeholderInput="Suisse"
                            handleChange={handleChange}
                        />
                    </div>

                    <FormGroup
                        isTextarea={true}
                        labelText="Description"
                        nameTextarea="description"
                        valueTextarea={dataNewWatch.description}
                        placeholderTextarea="Une courte description ..."
                        handleChange={handleChange}
                    />

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