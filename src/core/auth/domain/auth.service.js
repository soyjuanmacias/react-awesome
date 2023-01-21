import { http } from "../../global/services";

const routes = {
    login: '/auth/login',
    register: '/auth/register',
    session: '/auth/session',
    status: '/auth/status',
}

export const loginService = async (dispatch, credentials) => {
    const result = await http.post('/auth/login', credentials);
    console.log('axios login result', result);
};

export const sessionService = async (dispatch) => await http.get(routes.session);

