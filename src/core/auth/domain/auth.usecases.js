import { useDispatch } from 'react-redux';
import { http } from '../../global/services';
import { sessionService } from './auth.service';
// import http from '../../common/services/http.service';

const useAuthUseCases = () => {
  const dispatch = useDispatch();

  const login = async credentials => loginService(dispatch, credentials);

  const register = async credentials => {
    const result = await http.post('/auth/register', credentials);
    console.log('axios register result', result);
  };

  const getSession = () => sessionService(dispatch);

  return {
    login,
    register,
    getSession,
  };
};

export default useAuthUseCases;
