import { http } from '../../global/services';
import { setUser } from '../state/auth.actions';

const API = {
  login: '/auth/login',
  register: '/auth/register',
  retrieveUser: '/auth/session',
  status: '/auth/status',
};

export const register = async newUser => {
  try {
    const user = await http.post(API.register, newUser, { spinner: 'register' });
    setUser(user);
  } catch (error) {
    console.log('LOGIN SERVICE FETCH ERROR', error);
    // TODO handle Error;
  }
};

export const login = async credentials => {
  try {
    const user = await http.post(API.login, credentials, { spinner: 'login' });
    setUser(user);
  } catch (error) {
    console.log('LOGIN SERVICE FETCH ERROR', error);
    // TODO handle Error;
  }
};

export const retrieveUser = async () => {
  try {
    return await http.get(API.retrieveUser, { spinner: 'retrieve-user' });
  } catch (error) {
    console.log(error);

    // TODO: Handle Error
  }
};
