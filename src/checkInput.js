import { floodFill } from "./bucketFill.js";

import {
  createCanvasBorder,
  createLine,
  createRectangle,
} from "./createShapes.js";
import { writeOutput } from "./lib/fs-tools.js";

// get the command as prop and identify the command type with switch case
export default function checkInput(input, drawing) {
  const inputArray = input.split(" ");

  switch (inputArray[0].toLowerCase()) {
    // canvas is created if correct format command is passed else console log the error message
    case "c":
      if (inputArray.length === 3) {
        drawing.isCanvas = true;
        drawing.canvasWidth = parseInt(inputArray[1]);
        drawing.canvasHeight = parseInt(inputArray[2]);

        // drawing object received as prop is updated with canvas height weight and isCanvas set to true
        createCanvasBorder(drawing);
        return drawing;
      } else {
        console.log("Input for create canvas needs to be char num num format");
      }
      break;
       //if command is for line, canvas is present and correct format command is passed else console log the error message  
    case "l":
      if (!drawing.isCanvas) {
        writeOutput("The canvas is absent");
        throw Error("error - The canvas is absent");
      } else if (inputArray.length === 5) {
        const x1 = parseInt(inputArray[1]);
        const y1 = parseInt(inputArray[2]);
        const x2 = parseInt(inputArray[3]);
        const y2 = parseInt(inputArray[4]);
        createLine(x1, y1, x2, y2, drawing);
      } else {
        throw Error(
          "Input for create line must be char num num num num format"
        );
      }
      break;

    case "r":
      if (!drawing.isCanvas) {
        writeOutput("The canvas is absent");
        throw Error("error");
      } else if (inputArray.length === 5) {
        const x1 = parseInt(inputArray[1]);
        const y1 = parseInt(inputArray[2]);
        const x2 = parseInt(inputArray[3]);
        const y2 = parseInt(inputArray[4]);
        createRectangle(x1, y1, x2, y2, drawing);
      } else {
        throw Error(
          "Input for create rectangle must be char num num num num format"
        );
      }
      break;

    case "b":
      if (!drawing.isCanvas) {
        writeOutput("The canvas is absent");
        throw Error("error");
      } else if (inputArray.length === 4) {
        const x = parseInt(inputArray[1]);
        const y = parseInt(inputArray[2]);
        const newC = inputArray[3];
        let prevC = " "
        floodFill(x, y,prevC, newC, drawing)
      } else {
        throw Error(
          "Input for create rectangle must be char num num num num format"
        );
      }
      break;

    default:
      console.log("Error input");
      break;
  }
}
