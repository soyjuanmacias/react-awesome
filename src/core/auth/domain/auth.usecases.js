import * as service from './auth.service';

const authUseCases = () => {
  const login = credentials => service.login(credentials);

  const register = user => service.register(user);

  const retrieveUser = () => service.retrieveUser();

  return {
    login,
    register,
    retrieveUser,
  };
};

export default authUseCases;
