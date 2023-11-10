// route that we declare in server side logic. will be the url that we make our fetch request to
const BASE_URL = './api/users';

export async function signUp(userData) {
    // the fetch req that we're sending to our backend
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userData)
    });
    // The fetch method will not raise an error unless there’s a network failure. 
    // This is why we need to check the res.ok property to see if the server 
    // returned a successful response (status code in the 200s).
    if (res.ok) {
        return res.json();
    } else {
        throw new Error('Invalid Sign Up')
    }
}
export async function login(userData) {
    const res = await fetch(BASE_URL + `/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userData)
    });
    if (res.ok) {
        return res.json();
    } else {
        throw new Error('Invalid Sign Up')
    }
}