import { Component, State, Listen, h } from "@stencil/core";

@Component({
  tag: "iws-event-listener",
  styleUrl: "./event-listener.css",
  shadow: true,
})
export class EventListener {
  stockInput: HTMLInputElement;
  // initialStockSymbol: string;
  @State() listOfEvents: string[] = [];
  @State() anEvent: string = "default";
  @State() id: number = 0;

  @Listen("iwsConferenceSelected", { target: "body" })
  onEventSymbolSelected(event: CustomEvent) {
    console.log("[EVENT LISTENER] iwsConferenceSelected: " + event.detail);
    this.id++;
    const logOutput = `${this.id}: CONFERENCE - ${event.detail}`;
    this.anEvent = logOutput; //causes rerender
    this.listOfEvents.push(this.anEvent);
  }

  @Listen("iwsFlightSelected", { target: "body" })
  iwsFlightsSelected(event: CustomEvent) {
    const flight = JSON.parse(event.detail);
    console.log("[EVENT LISTENER] iwsFlightSelected: " + flight.id);
    this.id++;
    const logOutput = `${this.id}: FLIGHT - ${event.detail}`;
    this.anEvent = logOutput;
    this.listOfEvents.push(this.anEvent);
  }

  render() {
    // let dataContent = <p>Please enter a symbol!</p>;
    let content = (
      <ul>
        {this.listOfEvents.map((item) => (
          <li key={Math.random()}>{item}</li>
        ))}
      </ul>
    );
    return (
      <div class="log">
        <h2>EVENT BUS COMPONENT</h2>

        <div>{content}</div>
      </div>
    );
  }
}
