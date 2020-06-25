import React from 'react';

import { Headers, Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';


class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <Headers />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={data} />
        <Chart data={data} country={country} /> 
      </div>
    );
  }
}

export default App;