import { Component, h, State } from '@stencil/core';
import { API_KEY } from '../../global/keys';

@Component({
  tag: 'iws-get-data',
  styleUrl: 'iws-get-data.css',
  shadow: true,
})
export class GetData {
  @State() countryData: string;
  @State() gnp: string;
  @State() population: string;
  @State() name: string;
  @State() code: string;

  onFetchData(e) {
    e.preventDefault();
    console.log('API_KEY: ', API_KEY);
    console.log('Get Data...');

    fetch(`https://wpjs.co.uk/enterprise/wp-json/enterprise/v2/get-country-data?code=GBR`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.gnp = data[0].gnp;
        this.name = data[0].name;
        this.code = data[0].code;
        this.population = data[0].population;

        const output = `
          ${data[0].name} - ${data[0].code}: \n
          Population: ${data[0].population} 
          GNP of ${data[0].gnp}
        `;
        console.log(output);
        this.countryData = output;
      })
      .catch();
  }

  render() {
    const countryAndCode = (
      <p>
        Country: {this.name} - {this.code}
      </p>
    );
    return [
      <div>
        <form onSubmit={this.onFetchData.bind(this)}>
          <input id="code" placeholder="Enter code..." />
          <button type="submit">Get data</button>
        </form>
      </div>,
      <div>
        <h3>Country Data:</h3>
        <p>{countryAndCode}</p>
        <p>Population: {this.population}</p>
        <p>GNP: {this.gnp}</p>
      </div>,
    ];
  }
}
