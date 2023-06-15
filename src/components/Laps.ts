import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { downloadCsv } from "@/utils/downloadCsv";

@customElement("laps-container")
export class Laps extends LitElement implements LapsHandler {
	constructor() {
		super();
		this.style.overflowY = "";
		window.addEventListener("downloadlaps", (): void => downloadCsv(this.laps));
		// @ts-ignore
		window.addEventListener("lap", (lp: CustomEvent<LapEventOptions>): void => {
			if (!lp.detail.reset) {
				this.createLap({ time: lp.detail.time, number: this.startingNumber });
			} else {
				this.resetAll();
			}
		});
	}
	createLap = (lap: Lap): void => {
		this.laps.push(lap);
		this.lapsContainer = this.laps.map(
			x => html`<lap-item time="${x.time}" number="${x.number}" />`
		);
		this.startingNumber++;
		if (this.laps.length > 7) {
			this.style.overflowY = "scroll";
			setTimeout(() => {
				this.scroll({ top: 9 ** 20, behavior: "smooth" });
			}, 2);
		}
	};
	resetAll = (): void => {
		this.style.overflowY = "";
		this.startingNumber = 1;
		this.laps.length = 0;
		this.lapsContainer = html`<div></div>`;
	};

	@property()
	private lapsContainer: any | undefined;
	private laps: Array<Lap> = [];
	private startingNumber: number = 1;

	static styles = css`
		:host {
			--gray: rgba(255, 255, 255, 0.3);
			border: 2px solid var(--gray);
			height: 88%;
			border-radius: 0.5rem;
			padding: 1rem 2rem;
			width: 230px;
		}
		:host hr {
			border: 0.5px solid var(--gray);
			border-radius: 50%;
			margin-bottom: 1rem;
		}
		:host div div {
			display: grid;
			gap: 0.5rem;
		}
		:host::-webkit-scrollbar {
			width: 8px;
			background-color: #232323;
			border-radius: 2rem;
			display: block;
		}
		:host::-webkit-scrollbar-thumb {
			border-radius: 2rem;
			background-color: white;
		}
	`;
	render = () => html`
		<div>
			<h3>Laps</h3>
			<hr />
			<div>${this.lapsContainer}</div>
		</div>
	`;
}
