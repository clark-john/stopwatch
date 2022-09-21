import { html, css, LitElement } from "lit";
import { property, customElement } from "lit/decorators.js";

@customElement("stopwatch-button")
export class StopwatchButton extends LitElement {
	static styles = css`
		:host button {
			font-family: Inter, sans-serif;
			padding: 10px 20px;
			border-style: none;
			border-radius: 1rem;
			transition: filter 100ms;
			box-shadow: 0.2rem 0.2rem 1px 1px rgba(0, 0, 0, 0.7);
		}
		:host button:active {
			transform: translateY(2px);
		}
		:host button:hover {
			filter: brightness(0.75);
		}
	`;
	@property({ type: String })
	name: string = "";
	render = () =>
		html`<button class="${this.name.toLowerCase()}">${this.name}</button>`;
}
