import { Component, State, h } from '@stencil/core';
@Component({
  tag: 'form-entry',
  styleUrl: 'form-entry.css',
  shadow: true,
})
export class FormEntry {
  // to reference a DOM element - checkbox
  cbo: HTMLInputElement;

  selectedReceiverIds = [102, 103];

  @State() inputValue: string = 'test@example.com';
  @State() radioValue: string = 'none';
  @State() checkboxValue: string = 'NO_BIKE';
  @State() selectValue: string = 'default_make';
  @State() secondSelectValue: string = 'default_name';
  @State() avOptions: any[] = [
    { id: 101, name: 'Mark' },
    { id: 102, name: 'Smith' },
  ];
  @State() submittedData: string = '';

  handleSubmit(e) {
    e.preventDefault();
    //console.log(e);
    console.log('Email:', this.inputValue, 'Car:', this.selectValue, 'Name:', this.secondSelectValue, 'Radio:', this.radioValue, 'Checkbox:', this.checkboxValue);

    this.submittedData = this.inputValue + ' ' + this.selectValue + ' ' + this.secondSelectValue + ' ' + this.radioValue + ' ' + this.checkboxValue;
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

  handleCheckbox() {
    console.log(this.cbo.checked);
    if (this.cbo.checked) {
      this.checkboxValue = 'HAS_BIKE';
    } else {
      this.checkboxValue = 'NO_BIKE';
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <div>
            <label>
              Email:
              <input name="email" type="email" value={this.inputValue} onInput={event => this.handleChange(event)} />
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
          <div class="checkbox">
            <input type="checkbox" id="cb1" name="cb1" onInput={() => this.handleCheckbox()} ref={el => (this.cbo = el as HTMLInputElement)} />
            {/* as HTMLInputElement optional */}
            <label htmlFor="cb1"> I have a bike</label>
          </div>

          <p>Please select your gender:</p>
          <div class="radio-list">
            <input type="radio" id="male" name="gender" value="male" onInput={event => this.handleRadio(event)} />
            <label htmlFor="male"> Male</label>
            <input type="radio" id="female" name="gender" value="female" onInput={event => this.handleRadio(event)} />
            <label htmlFor="female">Female</label>
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
        {/* {this.submittedData}
        <br></br> */}
        {this.inputValue}
        <br></br>
        {this.selectValue}
        <br></br>
        {this.secondSelectValue}
        <br></br>
        {this.checkboxValue}
        <br></br>
        {this.radioValue}
        <br></br>
      </div>
    );
  }
}
