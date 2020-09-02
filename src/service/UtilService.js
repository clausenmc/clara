export const UtilService = {
    handleResponse,
    authHeader,
};

function authHeader() {
    let token = 'it´s a token';

    if (token) {
        return { 'Content-Type': 'application/json','Authorization': 'Bearer ' + token };
    } else {
        return {};
    }
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (data.code !== 200) {
            const error = (data && data.data) || response.statusText;
            return Promise.reject(error);
        }
        return data.data;
    });
}