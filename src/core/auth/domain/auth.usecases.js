import { useDispatch } from 'react-redux';
import http from '../../common/domain/http.service';
import { registerAction } from '../state/auth.actions';

const useAuthUseCases = () => {
  const dispatch = useDispatch();

  const login = async credentials => {
    // dispatch(registerAction(credentials));
    const result = await http.post('/auth/login', credentials);
    console.log('axios login result', result);
  };

  const register = async credentials => {
    // dispatch(registerAction(credentials));
    const result = await http.post('/auth/register', credentials);
    console.log('axios register result', result);
  };

  return {
    login,
    register
  };
};

export default useAuthUseCases;
