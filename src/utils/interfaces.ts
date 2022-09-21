/**
 * All interfaces for stopwatch web app
 *
 * @author John Clark
 */

import { Lap } from "./types";

export interface StopwatchInterface {
	start: () => void;
	stop: () => void;
	lap: (time: string) => void;
	reset: () => void;
}

export interface LapsHandler {
	createLap: (lap: Lap) => void;
	resetAll: () => void;
}
