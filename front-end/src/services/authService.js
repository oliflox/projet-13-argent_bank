import { login as loginAction } from "../auth/authActions";

export const handleLogin = async (email, password, dispatch) => {
  try {
    await dispatch(loginAction({ email, password })).unwrap();
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
}; 