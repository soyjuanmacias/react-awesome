import { useSelector } from "react-redux";

const useSpinner = () => {
    const loginSpinner = useSelector(state => state.global.spinners.includes('login'));
    const registerSpinner = useSelector(state => state.global.spinners.includes('register'));
    const retrieveUserSpinner = useSelector(state => state.global.spinners.includes('retrieveUser'));

    return {
        loginSpinner,
        registerSpinner,
        retrieveUserSpinner,
    }
};

export default useSpinner;