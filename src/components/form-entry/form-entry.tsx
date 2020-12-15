import { Component, State, h } from '@stencil/core';
@Component({
  tag: 'form-entry',
  styleUrl: 'form-entry.css',
})
export class FormEntry {
  selectedReceiverIds = [102, 103];
  @State() inputValue: string;
  @State() radioValue: string = 'none';
  @State() checkboxValue: string = 'none';
  @State() selectValue: string;
  @State() secondSelectValue: string;
  @State() avOptions: any[] = [
    { id: 101, name: 'Mark' },
    { id: 102, name: 'Smith' },
  ];

  handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    console.log('Email:', this.inputValue, 'Car:', this.selectValue, 'Name:', this.secondSelectValue, 'Radio:', this.radioValue, 'Checkbox:', this.checkboxValue);
  }

  handleChange(event) {
    this.inputValue = event.target.value;

    if (event.target.validity.typeMismatch) {
      console.log('this element is not valid');
    }
  }

  handleSelect(event) {
    console.log(event.target.value);
    this.selectValue = event.target.value;
  }

  handleSecondSelect(event) {
    console.log(event.target.value);
    this.secondSelectValue = event.target.value;
  }
  handleRadio(event) {
    console.log('RADIO');
    this.radioValue = event.target.value;
    console.log(event.target.value);
  }

  handleCheckbox(event) {
    console.log('CHECKBOX');
    this.checkboxValue = event.target.value;
    console.log(event.target.value);
  }
  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <div>
          <label>
            Email:
            <input type="email" value={this.inputValue} onInput={e => this.handleChange(e)} />
          </label>
        </div>
        <div>
          <select onInput={event => this.handleSelect(event)}>
            <option value="volvo" selected={this.selectValue === 'volvo'}>
              Volvo
            </option>
            <option value="saab" selected={this.selectValue === 'saab'}>
              Saab
            </option>
            <option value="mercedes" selected={this.selectValue === 'mercedes'}>
              Mercedes
            </option>
            <option value="audi" selected={this.selectValue === 'audi'}>
              Audi
            </option>
          </select>
        </div>
        <div>
          <select onInput={event => this.handleSecondSelect(event)}>
            {this.avOptions.map(recipient => (
              <option value={recipient.id} selected={this.selectedReceiverIds.indexOf(recipient.id) !== -1}>
                {recipient.name}
              </option>
            ))}
          </select>
        </div>
        <p>Please tick</p>
        <input type="checkbox" id="cb1" name="cb1" value="yes" onInput={event => this.handleCheckbox(event)} />
        <label htmlFor="cb1"> I have a bike</label>
        <p>Please select your gender:</p>
        <input type="radio" id="male" name="gender" value="male" onInput={event => this.handleRadio(event)} />
        <label htmlFor="male"> Male</label>
        <input type="radio" id="female" name="gender" value="female" onInput={event => this.handleRadio(event)} />
        <label htmlFor="female">Female</label>

        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}
