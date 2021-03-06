// required Stencil components
import { Component, h, Prop, State, Watch } from '@stencil/core';
// custom imports
import { getRandom, getTemp, data, getJSON, getConferences } from '../../utils/utils';
// import { API_KEY } from '../../global/keys';

@Component({
  tag: 'iws-get-data',
  styleUrl: 'iws-get-data.scss', // usually css by default
  shadow: true, // optional but best to encapsulate
})
export class GetData {
  countryInput: HTMLInputElement;

  @State() countryData: string;
  @State() gnp: string;
  @State() population: string;
  @State() name: string;
  @State() code: string = '';
  @State() pop: string = '';
  @State() value: string;
  @State() inputValid = false;
  @State() randomEmail = '';

  // immutable by default from inside
  // reflect set HTML attribute if changed in browser or inside
  @Prop({ mutable: true, reflect: true }) countryProp: string;

  @Watch('countryProp')
  countryChanged(newValue: string, oldValue: string) {
    if (newValue !== oldValue) {
      console.log('Value changed: ', oldValue, newValue);
      this.value = newValue;
      this.inputValid = true;
      this.fetchDataOnProp(newValue);
    }
  }

  handleChange(event) {
    this.value = event.target.value;
    this.code = this.value;
    if (this.code.trim().length > 0) {
      // console.log('NOT EMPTY');
      this.inputValid = true;
    } else {
      console.log('EMPTY');
      this.inputValid = false;
    }
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    if (!this.inputValid) {
      return;
    }
    // we can send data to our backend
    this.onFetchData();
    this.handleData();
  }

  // to demo the use of imported functions for code modularity
  handleData() {
    // gets random email from randomuser.me api
    getJSON().then(movies => {
      const data = movies; // fetched movies
      console.log('RANDOM EMAIL: ', data.results[0].email);
      this.randomEmail = data.results[0].email;
    });
    // get data from own custom api
    getConferences().then(conf => {
      // fetched movies
      console.log('CONF:', conf[0].population);
    });
  }

  // these two fetch functions can be refactored toi be DRY
  fetchDataOnProp(countryProp) {
    fetch(`https://wpjs.co.uk/enterprise/wp-json/enterprise/v2/get-country-data?code=${countryProp}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.gnp = data[0].gnp;
        this.name = data[0].name;
        this.code = data[0].code;
        this.population = data[0].population;
      })
      .catch(err => console.log('Error has occured: ', err.message));
  }
  onFetchData() {
    // console.log('API_KEY: ', API_KEY);
    // console.log('Get Data...');
    const countrySymbol = this.countryInput.value;
    fetch(`https://wpjs.co.uk/enterprise/wp-json/enterprise/v2/get-country-data?code=${countrySymbol}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.gnp = data[0].gnp;
        this.name = data[0].name;
        this.code = data[0].code;
        this.population = data[0].population;
      })
      .catch(err => console.log('Error has occured: ', err.message));
  }

  // initial load
  componentDidLoad() {
    if (this.countryProp) {
      this.value = this.countryProp;
      console.log('loaded', this.value);
      this.inputValid = true;
      this.fetchDataOnProp(this.countryProp);
      this.handleData();
      // to show how attribute can be set from within
      // this.countryProp = 'ABW';
    }
  }
  render() {
    return [
      // array as there is no root element
      <div>
        <h3>PROP: {this.countryProp}</h3>
      </div>,
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>
            Name:
            <input type="text" value={this.value} onInput={event => this.handleChange(event)} ref={el => (this.countryInput = el)} />
          </label>
          <button type="submit" disabled={!this.inputValid}>
            {!this.inputValid ? 'Enter code' : 'GET DATA'}
          </button>
        </form>
      </div>,
      <div>
        <h3>
          Country Code: {this.code} {this.name}
        </h3>

        <p>Population: {this.population}</p>
        <p>GNP: {this.gnp}</p>
        <p>
          RandomUser fetch email: <em>{this.randomEmail}</em>
        </p>
        <p>
          Util: imported data {data.first} {data.last}
        </p>
        <p>Util: imported function getRandom() {getRandom()}</p>
        <p>Util: imported function getTemp() {getTemp()}</p>
      </div>,
      <div>
        {/* We can add components within components without the need to import at top. */}
        <form-entry></form-entry>
        <iws-get-latest-posts></iws-get-latest-posts>
      </div>,
    ];
  }
}
