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
} 
