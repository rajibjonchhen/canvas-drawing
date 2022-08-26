import { writeOutput } from "./lib/fs-tools.js";

// print the canvas and shapes pass it to writeOutput function
export const printCanvas = (drawing) => {
  let printLine = "";
  for (let i = 0; i < drawing.canvasHeight + 2; i++) {
    let line = "";
    for (let col = 0; col < drawing.canvasWidth + 2; col++) {
      line = line + drawing.output[i][col];
    }
    printLine = printLine + "\n" + line;
  }
  drawing.storeOutput += printLine;

//   the updated drawing is passed writeOutput to write it in the output.txt
  writeOutput(drawing.storeOutput);
};
