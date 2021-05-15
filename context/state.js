import { createContext } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  let sharedState = {
    aString: 'initial string',
    numbersArray: [1, 2, 3],
    anObject: { a: 'initial value' },
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export default AppContext;
