/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface IwsEventFlights {
    }
    interface IwsEventListener {
    }
    interface IwsEventsBooking {
    }
    interface IwsGetData {
        "countryProp": string;
    }
    interface IwsGetLatestPosts {
    }
    interface IwsListConferences {
    }
    interface IwsPlaces {
    }
    interface MyComponent {
    }
    interface UcSpinner {
    }
}
declare global {
    interface HTMLIwsEventFlightsElement extends Components.IwsEventFlights, HTMLStencilElement {
    }
    var HTMLIwsEventFlightsElement: {
        prototype: HTMLIwsEventFlightsElement;
        new (): HTMLIwsEventFlightsElement;
    };
    interface HTMLIwsEventListenerElement extends Components.IwsEventListener, HTMLStencilElement {
    }
    var HTMLIwsEventListenerElement: {
        prototype: HTMLIwsEventListenerElement;
        new (): HTMLIwsEventListenerElement;
    };
    interface HTMLIwsEventsBookingElement extends Components.IwsEventsBooking, HTMLStencilElement {
    }
    var HTMLIwsEventsBookingElement: {
        prototype: HTMLIwsEventsBookingElement;
        new (): HTMLIwsEventsBookingElement;
    };
    interface HTMLIwsGetDataElement extends Components.IwsGetData, HTMLStencilElement {
    }
    var HTMLIwsGetDataElement: {
        prototype: HTMLIwsGetDataElement;
        new (): HTMLIwsGetDataElement;
    };
    interface HTMLIwsGetLatestPostsElement extends Components.IwsGetLatestPosts, HTMLStencilElement {
    }
    var HTMLIwsGetLatestPostsElement: {
        prototype: HTMLIwsGetLatestPostsElement;
        new (): HTMLIwsGetLatestPostsElement;
    };
    interface HTMLIwsListConferencesElement extends Components.IwsListConferences, HTMLStencilElement {
    }
    var HTMLIwsListConferencesElement: {
        prototype: HTMLIwsListConferencesElement;
        new (): HTMLIwsListConferencesElement;
    };
    interface HTMLIwsPlacesElement extends Components.IwsPlaces, HTMLStencilElement {
    }
    var HTMLIwsPlacesElement: {
        prototype: HTMLIwsPlacesElement;
        new (): HTMLIwsPlacesElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLUcSpinnerElement extends Components.UcSpinner, HTMLStencilElement {
    }
    var HTMLUcSpinnerElement: {
        prototype: HTMLUcSpinnerElement;
        new (): HTMLUcSpinnerElement;
    };
    interface HTMLElementTagNameMap {
        "iws-event-flights": HTMLIwsEventFlightsElement;
        "iws-event-listener": HTMLIwsEventListenerElement;
        "iws-events-booking": HTMLIwsEventsBookingElement;
        "iws-get-data": HTMLIwsGetDataElement;
        "iws-get-latest-posts": HTMLIwsGetLatestPostsElement;
        "iws-list-conferences": HTMLIwsListConferencesElement;
        "iws-places": HTMLIwsPlacesElement;
        "my-component": HTMLMyComponentElement;
        "uc-spinner": HTMLUcSpinnerElement;
    }
}
declare namespace LocalJSX {
    interface IwsEventFlights {
        "onIwsFlightSelected"?: (event: CustomEvent<string>) => void;
    }
    interface IwsEventListener {
    }
    interface IwsEventsBooking {
    }
    interface IwsGetData {
        "countryProp"?: string;
    }
    interface IwsGetLatestPosts {
        "onIwsPostSelected"?: (event: CustomEvent<string>) => void;
    }
    interface IwsListConferences {
        "onIwsConferenceSelected"?: (event: CustomEvent<string>) => void;
    }
    interface IwsPlaces {
    }
    interface MyComponent {
    }
    interface UcSpinner {
    }
    interface IntrinsicElements {
        "iws-event-flights": IwsEventFlights;
        "iws-event-listener": IwsEventListener;
        "iws-events-booking": IwsEventsBooking;
        "iws-get-data": IwsGetData;
        "iws-get-latest-posts": IwsGetLatestPosts;
        "iws-list-conferences": IwsListConferences;
        "iws-places": IwsPlaces;
        "my-component": MyComponent;
        "uc-spinner": UcSpinner;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "iws-event-flights": LocalJSX.IwsEventFlights & JSXBase.HTMLAttributes<HTMLIwsEventFlightsElement>;
            "iws-event-listener": LocalJSX.IwsEventListener & JSXBase.HTMLAttributes<HTMLIwsEventListenerElement>;
            "iws-events-booking": LocalJSX.IwsEventsBooking & JSXBase.HTMLAttributes<HTMLIwsEventsBookingElement>;
            "iws-get-data": LocalJSX.IwsGetData & JSXBase.HTMLAttributes<HTMLIwsGetDataElement>;
            "iws-get-latest-posts": LocalJSX.IwsGetLatestPosts & JSXBase.HTMLAttributes<HTMLIwsGetLatestPostsElement>;
            "iws-list-conferences": LocalJSX.IwsListConferences & JSXBase.HTMLAttributes<HTMLIwsListConferencesElement>;
            "iws-places": LocalJSX.IwsPlaces & JSXBase.HTMLAttributes<HTMLIwsPlacesElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "uc-spinner": LocalJSX.UcSpinner & JSXBase.HTMLAttributes<HTMLUcSpinnerElement>;
        }
    }
}
