import { useContext } from 'react';

import styles from '../styles/Home.module.css';
import AppContext from '../context/state';

export default function test() {
  const ctx = useContext(AppContext);

  const changeTheString = () => {
    ctx.updateTheString('NEW VALUE!');
  };

  const changeTheFirstNumber = () => {
    ctx.updateTheFirstNumber();
  };

  return (
    <div className={styles.container}>
      <p>test</p>
      <p>Displaying state parts below:</p>
      <p>The string is: {ctx.aString}</p>
      <p>The first number is: {ctx.numbersArray[0]}</p>
      <p>The value of a is: {ctx.anObject.a}</p>
      <button onClick={changeTheString}>Change the string</button>
      <button onClick={changeTheFirstNumber}>Change the first number</button>
    </div>
  );
}
