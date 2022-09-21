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

// correct setInterval return type:
// https://www.designcise.com/web/tutorial/what-is-the-correct-typescript-return-type-for-javascripts-setinterval-function
export type IntervalId = undefined | ReturnType<typeof setInterval>;

export type LapTimeObject = {
	hours: string;
	minutes: string;
	seconds: string;
	milliseconds: string;
	time: string;
};
