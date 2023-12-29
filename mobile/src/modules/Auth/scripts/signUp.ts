import auth from '@react-native-firebase/auth';
import {ISignUpParams} from 'modules/Auth/interfaces/ISignUpParams.ts';

export const signUp = async ({email, password}: ISignUpParams) => {
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
