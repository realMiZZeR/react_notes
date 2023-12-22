import React, {StrictMode} from 'react';
import {ScreenNavigation} from './modules/ScreenNavigtation/ScreenNavigation.tsx';
import {AuthProvider} from './modules/Auth/AuthProvider.tsx';

const App = () => {
  return (
    <StrictMode>
      <AuthProvider>
        <ScreenNavigation />
      </AuthProvider>
    </StrictMode>
  );
};

export default App;
