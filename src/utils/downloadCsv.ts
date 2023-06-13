/**
 * Download csv utility
 *
 * @author John Clark
 */

import { Lap } from "./types";

export const downloadCsv = (lapsArray: Array<Lap>): void => {
	if (!lapsArray.length) {
		alert("Laps empty");
	} else {
		let csvString: string = "";
		for (let x of lapsArray) {
			const { time, number } = x;
			csvString += `${number}, ${time}\n`;
		}
		const blob: Blob = new Blob([csvString], { type: "text/plain" });
		const blobUrl: string = URL.createObjectURL(blob);
		const anchor: HTMLAnchorElement = document.createElement("a");
		anchor.href = blobUrl;
		anchor.download = "laps.csv";
		anchor.click();
		anchor.remove();		
	}
};
