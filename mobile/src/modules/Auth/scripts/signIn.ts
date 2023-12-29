import auth from '@react-native-firebase/auth';
import {ISignInParams} from '../interfaces/ISignInParams.ts';

export const signIn = async ({email, password}: ISignInParams) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
    console.log(`User ${email} has joined.`);
    return true;
  } catch {
    return false;
  }
};
