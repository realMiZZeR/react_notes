import auth from '@react-native-firebase/auth';
import {IAuthParams} from 'modules/Auth/interfaces/IAuthParams.ts';
export const signIn = async ({email, password}: IAuthParams) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
    console.log(`User ${email} has joined.`);
    return true;
  } catch {
    return false;
  }
};
