import dotenv from "dotenv";

export default () => {
    dotenv.config({ path: __dirname + "/.env" });
    dotenv.parse(".env");
    const { DB_COLLECTION_ACCOUNTS, DB_COLLECTION_WATCHES, DB_NAME, DB_URI, APP_ENV, APP_TITLE } = process.env;
    return {
        DB_COLLECTION_ACCOUNTS,
        DB_COLLECTION_WATCHES,
        DB_NAME,
        DB_URI,
        APP_ENV,
        APP_TITLE
    };
};