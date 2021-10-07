import { run } from "../connect";

export class ModelCollection {
    /**
     * 
     * @param {*} collectionName name of the collection in database
     */
    constructor(collectionName) {
        this.collectionName = collectionName;
    }

    async getOne(query, projection = {}) {
        const collection = await run(this.collectionName);

        return collection.findOne(query, { projection });
    }

    async getMany(query, projection = {}) {
        const collection = await run(this.collectionName);

        return collection.find(query, { projection }).toArray();
    }

    async getAll(projection = {}) {
        const collection = await run(this.collectionName);

        return collection.find({}, { projection }).toArray();
    }

    async setOne(query, newValue) {
        const collection = await run(this.collectionName);

        return collection.updateOne(
            query,
            { $set: newValue }
        );
    }

    async newDocument(objectData) {
        const collection = await run(this.collectionName);

        return collection.insertOne(objectData);
    }

    async removeOne(filter) {
        const collection = await run(this.collectionName);

        return collection.deleteOne(filter);
    }
}