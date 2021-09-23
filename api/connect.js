import { MongoClient } from "mongodb";
import config from "./config.js";
const { DB_COLLECTION_ACCOUNTS, DB_NAME, DB_URI } = config();

export const client = new MongoClient(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const nameOfCollection = {
    accounts: "accounts"
}
let collectionAccounts = null;

export const run = async (collectionName) => {
    try {
        if (collectionName === nameOfCollection.accounts) {
            if (collectionAccounts) return collectionAccounts;

            await client.connect();
            collectionAccounts = await client.db(DB_NAME).collection(DB_COLLECTION_ACCOUNTS);
            console.log("Connected successfully to collection accounts");

            return collectionAccounts;
        }
    } catch (e) {
        console.log("Bad connect ...", e);
        await client.close();
    }
}