import { run } from "../connect";

export class ModelCollection {
    constructor(collectionName) {
        this.collectionName = collectionName;
    }

    async getOne(query, projection = {_id: 0}) {
        const collection = await run(this.collectionName);

        return collection.findOne(query, { projection });
    }

    async newDocument(objectData) {
        const collection = await run(this.collectionName);

        return collection.insertOne(objectData);
    }
}