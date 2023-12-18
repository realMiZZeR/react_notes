import React, {StrictMode} from 'react';
import {StyleSheet, View} from 'react-native';
import {AuthForm} from './modules/AuthForm.tsx';
import {AuthScreen} from './screens/AuthScreen.tsx';
import {ScreenNavigation} from './modules/ScreenNavigation.tsx';

const App = () => {
  return (
    <StrictMode>
      <ScreenNavigation />
    </StrictMode>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default App;
