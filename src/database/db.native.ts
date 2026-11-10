import * as SQlite from "expo-sqlite";

export const db = SQlite.openDatabaseAsync("finora.db");

export const initDatabase = async () => {
    try {
        (await db).execAsync(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL
        );
    `);
    console.log ("Database initialized successfully.")
    } catch (error) {
        console.error("Error initializing database:", error);
    }

};