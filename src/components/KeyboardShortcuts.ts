import { html, css, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { Shortcut } from "@/utils/types";

@customElement("keyboard-shortcuts")
export class KeyboardShortcuts extends LitElement {
  private shortcuts: Array<Shortcut> = [
    { shortcut: "Space", description: "Start/Stop" },
    { shortcut: "L", description: "Lap" },
    { shortcut: "Shift + R", description: "Reset" }
  ];
  static styles = css`
    :host {
      position: absolute;
      margin-left: 1rem;
      display: grid;
      padding: 1rem;
      background-color: #303030;
      border-radius: 1.25rem;
      row-gap: .75rem;
    }
    :host kbd {
      padding: 4px 9px;
      background-color: #656565;
      font-weight: bold;
      border-radius: 1rem;
    }
    :host .shortcut {
      display: flex;
      align-items: center;
      column-gap: 1rem;
    }
    :host h4 {
      margin-top: unset;
    }
    @media only screen and (max-width: 1044px) {
      :host {
        visibility: hidden;
      }
    }
  `;
  render = () => {
    const shortcuts = this.shortcuts.map(x => html`
      <div class="shortcut">
        <kbd>${x.shortcut}</kbd>
          - 
        <div>${x.description}</div>
      </div>
    `)
    return html`
      <h4>Keyboard Shortcuts</h4>
      ${shortcuts}
    `;
  }
}
