import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("lap-item")
export class LapItem extends LitElement {
  @property({ type: String })
  private time: string = "";

  @property({ type: Number })
  private number: number = 0;

  static styles = css`
    :host div {
      display: flex;
      width: 85%;
      background-color: #232323;
      border-radius: 1rem;
      padding: 10px 1rem;
      column-gap: 1rem;
      justify-content: space-between;
      align-items: center;
    }
    :host div .time {
      margin-right: 2rem;
    }
    :host div .number {
      padding: 3px 8px;
      background-color: #545454;
      border-radius: 1rem;
    }
  `;
  render = () => html`
    <div> 
      <span class="number">${this.number}</span>
      <span class="time">${this.time}</span>
    </div>
  `;
}
