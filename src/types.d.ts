// types

type Lap = {
	time: string | undefined;
	number: number;
};

type LapEventOptions = {
	readonly time?: string;
	reset?: boolean;
};

type Shortcut = {
	shortcut: string;
	description: string;
};

type IntervalId = ReturnType<typeof setInterval> | undefined;

type LapTimeObject = {
	hours: string;
	minutes: string;
	seconds: string;
	milliseconds: string;
	time: string;
};

// interfaces

interface StopwatchInterface {
	start(): void;
	stop(): void;
	lap(time: string): void;
	reset(): void;
}

interface LapsHandler {
	createLap(lap: Lap): void;
	resetAll(): void;
}
