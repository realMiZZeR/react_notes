import auth from '@react-native-firebase/auth';
import {IAuthParams} from 'modules/Auth/interfaces/IAuthParams.ts';

export const signUp = async ({email, password}: IAuthParams) => {
  try {
    const createdData = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    console.log(`${createdData.user.email} was created!`);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
