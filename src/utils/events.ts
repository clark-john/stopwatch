import { LapEventOptions } from "./types";

export class LapEvent extends Event {
  constructor(type: string, options: LapEventOptions) {
    super(type);
    const { time, reset } = options;
    this.time = time;
    this.reset = reset ? reset : false;
  }
  time: string | undefined;
  reset: boolean;
}
