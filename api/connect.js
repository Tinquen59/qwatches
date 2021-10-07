import { MongoClient } from "mongodb";
import config from "./config.js";
const { DB_COLLECTION_ACCOUNTS, DB_COLLECTION_WATCHES, DB_NAME, DB_URI } = config();

export const client = new MongoClient(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const nameOfCollection = {
    accounts: "accounts",
    watches: "watches"
}
let collectionAccounts = null;
let collectionWatches = null;

/**
 * connect the MongoClient
 * @param {*} collectionName  name of the collection in database
 * @returns the collection in database
 */
export const run = async (collectionName) => {
    try {
        if (collectionName === nameOfCollection.accounts) {
            if (collectionAccounts) return collectionAccounts;

            await client.connect();
            collectionAccounts = await client.db(DB_NAME).collection(DB_COLLECTION_ACCOUNTS);
            console.log("Connected successfully to collection accounts");

            return collectionAccounts;
        } else if (collectionName === nameOfCollection.watches) {
            if (collectionWatches) return collectionWatches;

            await client.connect();
            collectionWatches = await client.db(DB_NAME).collection(DB_COLLECTION_WATCHES);
            console.log("Connected successfully to collection watches");

            return collectionWatches;
        }
    } catch (e) {
        console.log("Bad connect ...", e);
        await client.close();
    }
}