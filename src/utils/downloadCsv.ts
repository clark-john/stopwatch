export const downloadCsv = (lapsArray: Array<any>): void => {
	let csvString = "";
	for (let x of lapsArray) {
		const { time, number } = x;
		csvString += `${number}, ${time}\n`;
	}
	const blob = new Blob([csvString], { type: "text/plain" })
	const blobUrl = URL.createObjectURL(blob);
	const anchor = document.createElement("a");
	anchor.href = blobUrl;
	anchor.download = "laps.csv";
	document.body.appendChild(anchor);
	anchor.click();
	document.body.removeChild(anchor);
}	
