import React from 'react';
import './App.css';

import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {

  async componentDidMount() {
    const data = await fetchData();

    console.log(data);
  }

  render() {
    return (
    <div className={styles.container}>
      <h1>App Tracker</h1>
      <Cards />
      <Chart />
      <CountryPicker />
    </div>
  );
}
}

export default App;
