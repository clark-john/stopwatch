import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { StopwatchInterface } from "@/utils/interfaces";
import { LapTimeObject, IntervalId } from "@/utils/types";
import { LapEventOptions } from "@/utils/types";
import "./Button";

@customElement("stop-watch")
export class Stopwatch extends LitElement implements StopwatchInterface {
  constructor() {
    super();
    window.onbeforeunload = (): any => {
      if (this.isStarted) {
        return "";
      }
    };
    window.onkeypress = (e: KeyboardEvent): any => {
      switch (e.key) {
        case " ":
          (!this.isStarted ? this.start : this.stop)();
          break;
        case "l":
          (this.isStarted ? this.lap : this.nothing)(this.getLapTime().time);
          break;
        case "R":
          this.reset();
          break;
        default:
          break;
      }
    };
  }
  private nothing = (a: any): void => void a;
  static styles = css`
    :host div {
      justify-content: center;
    }
    :host .buttons {
      display: flex;
      gap: 1rem;
      width: 100%;
    }
    :host div .time-display {
      text-align: center;
      margin: 5rem 0;
      font-size: 2rem;
    }
    :host stopwatch-button [name="Start"] {
      padding: 4rem;
    }
    @media only screen and (max-width: 790px) {
      .lap-button {
        display: none;
      }
    }
  `;
  private intervalId: IntervalId;
  private doubleZeroes = (num: number): string => (num < 10 ? "0" : "") + num;

  @property() private isStarted: boolean = false;
  @property() private milliseconds: number = 0;
  @property() private seconds: number = 0;
  @property() private minutes: number = 0;
  @property() private hours: number = 0;

  private updateTime(millisecs: number) {
    if (millisecs > 99) {
      this.milliseconds = 0;
      this.seconds++;
    }
    if (this.seconds > 60) {
      this.minutes++;
      this.seconds = 0;
    }
    if (this.minutes > 60) {
      this.hours++;
      this.minutes = 0;
    }
    if (this.hours > 25) {
      this.stop();
    }
  }

  // stopwatch methods
  public start = (): void => {
    if (!this.intervalId) {
      this.isStarted = true;
      this.intervalId = setInterval(() => {
        this.milliseconds++;
        this.updateTime(this.milliseconds);
      }, 10);
    }
  };
  public stop = (): void => {
    if (this.isStarted) {
      this.isStarted = false;
      clearInterval(this.intervalId);
      delete this.intervalId;
    }
  };
  public lap = (time: string): void =>
    void (this.isStarted
      ? window.dispatchEvent(new CustomEvent<LapEventOptions>("lap", { detail: { time } }))
      : null);

  public reset = (): void => {
    this.stop();
    this.milliseconds = 0;
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    window.dispatchEvent(new CustomEvent<LapEventOptions>("lap", { detail: { reset: true } }))
  };

  private getLapTime = (): LapTimeObject => {
    const hours = this.doubleZeroes(this.hours);
    const minutes = this.doubleZeroes(this.minutes);
    const seconds = this.doubleZeroes(this.seconds);
    const milliseconds = this.doubleZeroes(this.milliseconds);
    return {
      hours,
      minutes,
      seconds,
      milliseconds,
      time: `${hours}:${minutes}:${seconds}.${milliseconds}`
    };
  };

  render() {
    const { hours, minutes, seconds, milliseconds, time } = this.getLapTime();
    return html`
      <div>
        <div class="time-display">
          ${hours}:${minutes}:${seconds}.${milliseconds}
        </div>
        <div class="buttons">
          <stopwatch-button
            name="${this.isStarted ? "Started" : "Start"}"
            @click="${this.start}"
            id="start"
          ></stopwatch-button>
          <stopwatch-button
            name="Stop"
            @click="${this.stop}"
          ></stopwatch-button>
          <stopwatch-button
            name="Lap"
            class="lap-button"
            @click="${() => this.lap(time)}"
          ></stopwatch-button>
          <stopwatch-button
            name="Reset"
            @click="${this.reset}"
          ></stopwatch-button>
        </div>
      </div>
    `;
  }
}
