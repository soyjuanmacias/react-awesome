import { useNavigate } from 'react-router';
import * as service from './auth.service';

const authUseCases = () => {
  const navigate = useNavigate();
  const login = credentials => service.login(credentials);

  const register = async user => {
    await service.register(user);
    navigate('/');
  }

  const retrieveUser = () => service.retrieveUser();

  return {
    login,
    register,
    retrieveUser,
  };
};

export default authUseCases;
