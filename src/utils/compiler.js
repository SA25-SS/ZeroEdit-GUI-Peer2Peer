import { apiRequest } from "./api";

/**
 * Sends a POST request to run code.
 * @param {string} language - The programming language.
 * @param {string} code - The code to execute.
 * @param {string} stdin - The input for the code.
 * @returns {Promise<Object>} - The parsed JSON response.
 */
export async function compile(language, code, stdin) {
    const payload = {
        language,
        code,
        stdin
    };

    const response = await apiRequest("/run-code", "POST", payload);
    return response.json();
}