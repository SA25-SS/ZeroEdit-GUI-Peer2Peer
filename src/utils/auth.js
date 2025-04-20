import { clearAuthToken, saveAuthToken } from "./storage";
import CryptoJS from "crypto-js";

const AUTH_API_BASE = "http://15.207.110.230";

export const verifyToken = async (token) => {
    return await fetch(`${AUTH_API_BASE}/verify-token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            token: token
        }),
    });
}


export const login = async ({ username, password }) => {
    const hashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
    const response = await fetch(`${AUTH_API_BASE}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: hashedPassword,
        }),
    });

    try {
        const data = await response.json();
        if (data.status !== 'success')
            throw Error(data.message)

        saveAuthToken(data.token);
    }
    catch (error) {
        console.error('Login failed:', error);
        alert('Invalid username or password');
    }

    return true;
}


export const logout = () => {
    clearAuthToken();
}


export const register = async ({ name, username, age, email, password }) => {
    const hashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
    try {
        const response = await fetch(`${AUTH_API_BASE}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                username,
                age,
                email,
                password: hashedPassword,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            if(data.status !== 'success')
                throw new Error(data.message || 'Registration failed');
        }
        else{
            throw new Error(data.message || 'Registration failed');
        }

        return data;
    } catch (error) {
        console.error('Registration failed:', error);
        throw error;
    }
};
