import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import AlertSuccessMessage from "../components/alert/AlertSuccessMessage";
import AlertErrorMessage from "../components/alert/AlertErrorMessage";
import FormGroup from "../components/formGroup/FormGroup";
import { useEffect, useState } from "react";
import { useHistory, Redirect } from "react-router";

import instance from "../helpers/axiosInstance";
import ListMyWatches from "../components/ListMyWatches";


const userId = {
    userId: localStorage.getItem("userId")
};

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
    const history = useHistory();

    const [showAlert, setShowAlert] = useState(false);
    const [messageAlert, setMessageAlert] = useState("");
    const [showMyWatches, setShowMyWatches] = useState(false);
    const [myWatches, setMyWatches] = useState([]);
    const {register, handleSubmit, formState: {submitCount, isSubmitted, isSubmitSuccessful}, setValue} = useForm({
        resolver: yupResolver(schema),
    })

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
     * get the watches that the user has added
     */
    const getMyWatches = () => {
        instance.post("/api/watch/my-watches", userId)
            .then(result => setMyWatches(result.data))
            .catch(error => console.error(error));
    }

    /**
     * when sending the form
     * @param {*} data is fields data
     */
    const setUser = data => {
        data = { ...data, userId: localStorage.getItem("userId") };

        instance.put("/api/my-account", data)
            .then(response => setMessageAlert(response.data.message))
            .catch(error => console.error(error));
    }

    /**
     * logout website and clear local storage
     */
    const logout = () => {
        localStorage.clear();
        history.push("/Connection");
    }

    /**
     * remove a watch
     * @param {*} data the watch data to be deleted
     */
    const removeMyWatch = async data => {
        await instance.delete(`/api/watch/my-watch/${data._id}`)
            .then(result => console.log(result))
            .catch(error => console.error(error));

        getMyWatches();
    }

    /**
     * get all watches and data of user
     */
    useEffect(() => {
        if (localStorage.getItem("token")) {
            instance.post("/api/my-account", userId)
                .then(result => {
                    const { data } = result;

                    for (const key in data) {
                        setValue(key, data[key])
                    }
                })
                .catch(error => console.error(error));

            getMyWatches();
        }
    }, []);

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
            <section className="qa-BasicHero__container qa-BasicHero__container--accountBgi">
                <div className="qa-BasicHero__container--filter"></div>
                <h1 className="qa-BasicHero__container--title">Mon compte</h1>
            </section>

            <div className="qa-Account__container">
                <h2 className="qa-Account__container--subTitle">Mes informations</h2>

                <form className="qa-AccountForm__container" onSubmit={handleSubmit(setUser)}>
                    {(isSubmitted && showAlert) && displayAlert()}

                    <div className="qa-AccountForm__group">
                        <FormGroup
                            labelText="Prénom"
                            typeInput="text"
                            placeholderInput="Didier"
                            nameField="firstName"
                            register={register}
                        />

                        <FormGroup
                            labelText="Nom"
                            typeInput="text"
                            placeholderInput="Dupont"
                            nameField="lastName"
                            register={register}
                        />

                        <FormGroup
                            isRequired={true}
                            labelText="Pseudo"
                            typeInput="text"
                            placeholderInput="LeCollectionneur"
                            nameField="pseudo"
                            register={register}
                        />

                        <FormGroup
                            isRequired={true}
                            labelText="E-mail"
                            typeInput="email"
                            placeholderInput="example@toto.fr"
                            nameField="email"
                            register={register}
                        />

                        <FormGroup
                            labelText="Numéro de téléphone"
                            typeInput="tel"
                            placeholderInput="0605040302"
                            nameField="phoneNumber"
                            register={register}
                        />
                    </div>

                    <p className="qa-AccountForm__container--requiredField">* : Champs obligatoire</p>

                    <div className="qa-AccountForm__buttonGroup">
                        <button
                            type="submit"
                            className="qa-AccountForm__buttonGroup--btn qa-Btn qa-Btn--sendForm"
                        >
                            Modifier
                        </button>

                        <button
                            type="button"
                            className="qa-NewWatch__submitForm--btn qa-Btn qa-Btn--leave"
                            onClick={logout}
                        >
                            Quitter
                        </button>
                    </div>
                </form>

                <div className="qa-ListMyWatches__container">
                    <div className="qa-ListMyWatches__header">
                        <p className="qa-ListMyWatches__header--title">Ma liste de montres</p>

                        <FontAwesomeIcon
                            className="qa-ListMyWatches__header--display"
                            icon={showMyWatches ? faMinus : faPlus}
                            onClick={() => setShowMyWatches(!showMyWatches)}
                        />
                    </div>

                    {showMyWatches && (
                        <ul className="qa-ListMyWatches__body">
                            {(myWatches.length)
                                ? myWatches.map((myWatch, index) => (
                                    <ListMyWatches
                                        myWatch={myWatch}
                                        key={index}
                                        removeMyWatch={removeMyWatch}
                                    />
                                ))
                                : (
                                    <p>Aucune montre ajouté</p>
                                )}
                        </ul>
                    )}
                </div>
            </div>
        </>
    );
}