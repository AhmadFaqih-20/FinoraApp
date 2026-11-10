import {db} from "../db.native";

export interface User {
    id: number;
    name: string;
    email: string;
    password?: string;
}

export const signUp = async (
    name: string,
    email: string,
    password: string,
): Promise<any | null> => {
    const database = await db;
    if (!database) {
        throw new Error("Database not initialized");
    }
    const existing = await database.getFirstAsync<{ id:number }>(
        `SELECT id FROM users WHERE email = ?`,
        email.trim(),
    );
    if (existing) {
        throw new Error("An account with this email allready exists.");
    }

    const result = await database.runAsync(
        `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`,
        name.trim(),
        email.trim(),
        password.trim(),
    );

    console.log(name + " ", email, "Account created Successfully");

    return result;
};

export const loginUser = async (
    email: string,
    password: string,
): Promise<User | null> => {
    const database = await db;
    if (!database) {
        throw new Error("Database not initialized");
    }
    
    const row = await database.getFirstAsync<User & {password: string}> (
        `SELECT id, name, email, password FROM users WHERE email = ?`,
        email.trim(),
    );

    if (!row) {
        console.log(email, "No Account found with this email");
        return null;
    }

    const passwordMatch = String(password) === String(row.password);

    if (!passwordMatch) {
        console.log(email, "Invalid password");
        return null;
    }

    console.log(email, "Account logged in Successfully");

    const {password: _hash, ...user } = row;
    return user as User;
};