import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';
import {Pressable, StyleSheet} from 'react-native';

interface IBlackoutContext {
  enable: () => void;
  disable: () => void;
}

const BlackoutContext = createContext<IBlackoutContext | null>(null);

export const useBlackout = () => {
  const context = useContext(BlackoutContext);

  if (context === null) {
    throw new Error('no context for blackout');
  }

  return context;
};

export const BlackoutProvider = ({children}: PropsWithChildren) => {
  const [isActive, setIsActive] = useState(false);

  const enable = () => {
    setIsActive(true);
  };

  const disable = () => {
    setIsActive(false);
  };

  return (
    <BlackoutContext.Provider value={{enable, disable}}>
      <Pressable
        onPress={disable}
        style={isActive ? styles.blackoutActive : styles.blackoutInactive}
      />
      {children}
    </BlackoutContext.Provider>
  );
};

const styles = StyleSheet.create({
  blackoutActive: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(22,20,24,0.85)',
    zIndex: 1,
  },
  blackoutInactive: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    zIndex: -1,
  },
});
