import { ModelCollection } from "../models"

export const loginController = (req, res) => {
    const account = new ModelCollection("accounts");
    const queryLogin = {
        email: req.params.email
    }

    account.getOne(queryLogin)
        .then(
            result => {
                res.json(result);
            }
        )
        .catch(error => res.status(500).send(`Failed to insert item: ${error}`));
};

export const newUserController = (req, res) => {
    const newUser = new ModelCollection("accounts");

    newUser.newDocument(req.body)
        .then(result => res.status(201).json({
            message: `Successfully inserted item`
        }))
        .catch(error => res.status(500).send(`Failed to insert item: ${error}`));
};