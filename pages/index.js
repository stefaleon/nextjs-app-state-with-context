import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <p>
        The application state from context/state.js is available throughout the
        app by wrapping the Component in _app.js inside AppWrapper
      </p>
      <p>Check the test page at http://localhost:3000/test</p>
    </div>
  );
}
