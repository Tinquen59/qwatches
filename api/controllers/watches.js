import { ObjectId } from "bson";
import fs from "fs";

import { ModelCollection } from "../models";


/**
 * get all watches in database
 * @param {*} req is request
 * @param {*} res is response
 */
export const allWatches = (req, res) => {
    const watches = new ModelCollection("watches");
    const projection = {
        _id: 0,
        watchImage: 1,
        mark: 1,
        model: 1
    };

    watches.getAll(projection)
        .then(result => res.status(200).json( result ))
        .catch(error => res.status(500).json({ error }));
};

/**
 * get all watches by the mark or model
 * @param {*} req is request
 * @param {*} res is response
 */
export const searchWatches = (req, res) => {
    const watches = new ModelCollection("watches");
    const { body } = req;
    const regex = new RegExp(body.searchBar, "i")
    const query = {
        $or: [
            { mark: regex },
            { model: regex }
        ]
    };
    const projection = {
        _id: 0,
        watchImage: 1,
        mark: 1,
        model: 1
    };

    watches.getMany(query, projection)
        .then(result => res.status(200).json(result))
        .catch(error => res.status(500).json({ error }));
};

/**
 * get the detail of a watch
 * @param {*} req is request
 * @param {*} res is response
 */
export const detailWatch = (req, res) => {
    const watches = new ModelCollection("watches");
    const projection = {
        _id: 0,
        userId: 0
    };

    watches.getOne(req.body, projection)
        .then(result => res.status(200).json(result))
        .catch(error => res.status(500).json({ error }));
};

/**
 * insert new watch
 * @param {*} req is request
 * @param {*} res is response
 * @returns 
 */
export const newWatch = (req, res) => {
    const watches = new ModelCollection("watches");
    const { body } = req;

    // checks all values in request body
    for (const key in body) {
        if (body[key] === "") return res.status(500).json({ error: "empty fields" });
    }

    const newData = {
        ...body,
        watchImage: `${req.protocol}://${req.get("host")}/uploads/images/${req.file.filename}`
    };

    watches.newDocument(newData)
        .then(() => res.status(200).json( { message: "Successfully inserted watch" } ))
        .catch(error => res.status(500).json({ error }));
};

/**
 * get all watches that user to add
 * @param {*} req is request
 * @param {*} res is response
 */
export const getMyWatches = (req, res) => {
    const watches = new ModelCollection("watches");
    const projection = {
        watchImage: 1,
        mark: 1,
        model: 1
    };
    
    watches.getMany(req.body, projection)
        .then(result => res.status(200).json(result))
        .catch(error => res.status(500).json({ error }))
}

/**
 * remove a watch from the user
 * @param {*} req is request
 * @param {*} res is response
 */
export const removeMyWatches = (req, res) => {
    const watches = new ModelCollection("watches");
    const query = {
        _id: ObjectId(req.params.id)
    };
    const filter = { ...query };

    watches.getOne(query)
        .then(watch => {
            if(!watch) return res.status(401).json({ error: "watch not found !!" });

            const filename = watch.watchImage.split("/images/")[1];
            fs.unlink(`uploads/images/${filename}`, () => {
                watches.removeOne(filter)
                    .then(() => res.status(200).json({ message: "deleted item"}))
                    .catch(error => res.status(400).json({ error }));
            })
        })
        .catch(error => res.status(500).json({ error }));
}