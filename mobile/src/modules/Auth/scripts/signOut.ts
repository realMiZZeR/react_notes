import auth from '@react-native-firebase/auth';

export const signOut = async () => {
  await auth().signOut();
  console.log('User has left.');
};
