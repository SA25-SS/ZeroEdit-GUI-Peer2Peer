const AUTH_API_BASE = "http://15.207.110.230"

export const verifyToken = async (token) => {
    return await fetch(`${AUTH_API_BASE}/verify-token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            token:token
        }),
    });
}


export const login = async ({username, hashedPassword}) => {
    return await fetch(`${AUTH_API_BASE}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username:username,
            password:hashedPassword,
        }),
    });
}