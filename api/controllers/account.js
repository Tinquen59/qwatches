import bcrypt from "bcrypt";
import { ObjectId } from "bson";
import jwt from "jsonwebtoken";

import { ModelCollection } from "../models/index";

/**
 * login user
 * @param {*} req is request
 * @param {*} res is response
 */
export const loginController = (req, res) => {
    const account = new ModelCollection("accounts");
    const queryLogin = {
        email: req.body.email
    };

    account.getOne(queryLogin)
        .then(user => {
            if(!user) return res.status(401).json({ error: "User not found !!" });

            // compare the hash password with the password in the client and return token
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if(!valid) return res.status(401).json({ error: "incorect password !!" });
                    
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id },
                            "RANDOM_TOKEN_SECRET",
                            { expiresIn: "24h" }
                        )
                    })
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

/**
 * add a new user to the database
 * @param {*} req is request
 * @param {*} res is response
 * @returns 
 */
export const newUserController = (req, res) => {
    const account = new ModelCollection("accounts");
    const { body } = req;

    // checks all values in request body
    for (const key in body) {
        if (body[key] === "") return res.status(500).json({ error: "empty fields" });
    }

    const queryFindOne = {
        email: body.email
    }

    // hash password
    bcrypt.hash(body.password, 10)
        .then(hash => {
            body.password = hash;
            account.newDocument(body)
                .then(() => {
                    account.getOne(queryFindOne)
                        .then(user => {
                            if(!user) return res.status(401).json({ error: "User not found !!" });

                            res.status(200).json({
                                userId: user._id,
                                token: jwt.sign(
                                    { userId: user._id },
                                    "RANDOM_TOKEN_SECRET",
                                    { expiresIn: "24h" }
                                )
                            })
                        })
                        .catch(error => res.status(500).json({ error }));
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

/**
 * get information for a user
 * @param {*} req is request
 * @param {*} res is response
 */
export const getAccountInformation = (req, res) => {
    const account = new ModelCollection("accounts");
    const query = {
        _id: ObjectId(req.body.userId)
    }
    const projection = {
        _id: 0,
        password: 0
    };

    account.getOne(query, projection)
        .then(result => res.status(200).json(result))
        .catch(error => res.status(500).json({ error }));
}

/**
 * get information for a user
 * @param {*} req is request
 * @param {*} res is response
 * @returns error with status 404
 */
export const setAccountController = (req, res) => {
    const account = new ModelCollection("accounts");
    const { body } = req;

    // checks the value for the pseudo and the email in the body of the request
    if (body.pseudo === "" && body.email === "") return res.status(400).json({ error: "empty field" })
    
    const query = {
        _id: ObjectId(body.userId)
    };
    const setValues = {};

    for (const key in body) {
        if (key !== "userId") setValues[key] = body[key];
    }


    account.setOne(query, setValues)
        .then(() => res.status(200).send( { message: "modification applied"} ))
        .catch(error => res.status(400).json({ error }));
}