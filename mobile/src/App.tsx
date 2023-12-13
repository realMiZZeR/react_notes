import {View} from 'react-native';
import {StrictMode} from 'react';
import {AuthProvider} from './providers/AuthProvider.tsx';
import {ThemeProvider} from './providers/ThemeProvider.tsx';

const App = () => {
  return (
    <StrictMode>
      <View>
        <AuthProvider>
          <ThemeProvider></ThemeProvider>
        </AuthProvider>
      </View>
    </StrictMode>
  );
};

export default App;
