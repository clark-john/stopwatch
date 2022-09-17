/**
 * All types for stopwatch web app
 * 
 * @author John Clark
*/

export type Lap = {
  time: string | undefined;
  number: number;
};

export type LapEventOptions = {
  readonly time?: string;
  reset?: boolean;
};

export type Shortcut = {
  shortcut: string;
  description: string;
};

export type IntervalId = number | undefined;

export type LapTimeObject = {
  hours: string;
  minutes: string;
  seconds: string;
  milliseconds: string;
  time: string;
};
