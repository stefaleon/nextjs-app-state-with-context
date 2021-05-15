import { createContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  let sharedState = {
    // aString: 'initial string',
    // numbersArray: [1, 2, 3],
    anObject: { a: 'initial value' },
  };
  const [aString, setAString] = useState('initial string');
  const [numbersArray, setNumbersArray] = useState([1, 2, 3]);

  const updateTheString = (newValue) => {
    setAString(newValue);
  };

  const updateTheFirstNumber = () => {
    setNumbersArray([9, 2, 3]);
  };

  return (
    <AppContext.Provider
      value={{
        ...sharedState,
        aString,
        numbersArray,
        updateTheString,
        updateTheFirstNumber,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
