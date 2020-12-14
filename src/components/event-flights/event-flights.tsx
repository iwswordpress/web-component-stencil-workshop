import {
  Component,
  State,
  Event,
  EventEmitter,
  Listen,
  h,
} from "@stencil/core";

@Component({
  tag: "iws-event-flights",
  styleUrl: "./event-flights.css",
  shadow: true,
})
export class GetPosts {
  stockNameInput: HTMLInputElement;

  @State() searchResults: {
    id: string;
    city: string;
    flight_code: string;
    flight_time: string;
  }[] = [];
  @State() loading = false;
  @State() id: string = "";
  @State() code: string = "OSL";
  @State() post = "Output goes here...";

  @Event({ bubbles: true, composed: true })
  iwsFlightSelected: EventEmitter<string>;

  @Listen("iwsConferenceSelected", { target: "body" })
  onEvent(event: CustomEvent) {
    console.log("-----------------");
    console.log(
      "[FLIGHTS] Event heard: ",
      event.type,
      "payload: ",
      event.detail
    );
    console.log("-----------------");
    const payload = JSON.parse(event.detail);
    this.code = payload.symbol.substring(0, 3);

    this.getFlights();
  }
  getFlights() {
    this.loading = true;
    // const stockName = this.stockNameInput.value;
    //const url = `https://49plus.co.uk/udemy-rest/wp-json/wp/v2/posts`;
    const url = `https://wpjs.co.uk/enterprise/wp-json/enterprise/v2/get-flights?code=${this.code}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        this.searchResults = data.map((flight) => {
          return {
            id: flight.id,
            city: flight.city,
            flight_code: flight.flight_code,
            flight_time: flight.flight_time,
          };
        });
        //console.log(this.searchResults);
        this.loading = false;
      })
      .catch((err) => {
        console.log(err);
        this.loading = false;
      });
  }
  onSelectPost(data: string) {
    console.log("[FLIGHTS]");
    this.iwsFlightSelected.emit(data);
    const json = JSON.parse(data);
    this.post = `<h2 style='color:orange;font-style:italic'>${json.title}</h2><hr><p>${json.content}</p>`;
  }

  render() {
    let output = (
      <ul>
        {this.searchResults.map((result) => (
          <li
            onClick={this.onSelectPost.bind(
              this,
              JSON.stringify({
                id: result.id,
                city: result.city,
                flight_code: result.flight_code,
                flight_time: result.flight_time,
              })
            )}
          >
            <strong>
              {result.flight_code}: {result.flight_time.substring(0, 5)}
            </strong>
            <br></br>
            {result.city}
          </li>
        ))}
      </ul>
    );
    if (this.loading) {
      output = <uc-spinner />;
    }
    return [
      // <form onSubmit={this.handleGetFlights.bind(this)}>
      //   <button type="submit">Want a flight to {this.id}</button>
      // </form>,
      <h4>FLIGHTS COMPONENT</h4>,
      output,
      // <div class="output" innerHTML={this.post}></div>,
    ];
  }
}
