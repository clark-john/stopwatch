import { html, css, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "./components/Stopwatch";
import "./components/Laps";
import "./components/Button";
import "./components/KeyboardShortcuts";

@customElement("main-element")
export class MainElement extends LitElement {
  static styles = css`
    :host div {
      display: flex;
      justify-content: center;
      height: 84vh;
      align-items: center;
      column-gap: 8vw;
    }
    :host div .root {
      display: grid;
      width: 25%;
      height: 80vh;
      justify-content: center;
      align-items: center;
    }
    :host div .root img {
      filter: invert(1);
      justify-self: center;
    }
    :host h2 {
      text-align: center;
    }
    :host div .laps {
      display: grid;
      height: 100%;
      grid-template-rows: 90% 10%;
    }
    :host div .laps stopwatch-button {
      padding: 11px;
      position: relative;
      border-radius: 1.5rem;
      justify-self: center;
    }
    @media only screen and (max-width: 790px) {
      :host div .laps {
        display: none;
      }
    }
  `;
  render = () => html`
    <h2>Stopwatch</h2>
    <div>
      <div class="root">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1584/1584892.png"
          height="300"
        />
        <stop-watch />
      </div>
      <div class="laps">
        <laps-container></laps-container>
        <stopwatch-button
          name="Download CSV"
          @click="${() => dispatchEvent(new Event("downloadlaps"))}"
        />
      </div>
    </div>
  `;
}
