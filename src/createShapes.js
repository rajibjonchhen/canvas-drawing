import { printCanvas } from "./printOutput.js";

// create canvas border function
export function createCanvasBorder(drawing) {
  drawing.isCanvas = true;
  drawing.output = new Array(drawing.canvasHeight);
  for (let row = 0; row < drawing.canvasHeight + 2; row++) {
    drawing.output[row] = new Array(drawing.canvasWidth);
    for (let col = 0; col < drawing.canvasWidth + 2; col++) {
      if (row === 0 || row === drawing.canvasHeight + 1) {
        drawing.output[row][col] = "-";
      } else if (col === 0 || col === drawing.canvasWidth + 1) {
        drawing.output[row][col] = "|";
      } else {
        drawing.output[row][col] = " ";
      }
    }
  }
  printCanvas(drawing);
}

// create line function
export function createLine(x1, y1, x2, y2, drawing) {
  
    // checking if the point is a verticle line
    if (x1 === x2) {
    for (let i = y1; i <= y2; i++) {
      drawing.output[i][x1] = "x";
    }
    // checking if the point is a horizontal line
  } else if (y1 === y2) {
    for (let col = x1; col <= x2; col++) {
      drawing.output[y1][col] = "x";
    }
  } else {
    throw Error(
      "The coordinates are not for the verticle or horizontal line.Currently this app can only draw verticle and horizontal line."
    );
  }
  printCanvas(drawing);
}

export function createRectangle(x1, y1, x2, y2, drawing) {
  let line = "";
  if (!drawing.isCanvas) {
    writeOutput("create canvas is absent");
  } else if (x2 > x1 && y2 > y1) {
    for (let i = y1; i <= y2; i++) {
      drawing.output[i][x1] = "x";
      drawing.output[i][x2] = "x";
    }
    for (let col = x1; col <= x2; col++) {
      drawing.output[y1][col] = "x";
      drawing.output[y2][col] = "x";
    }
    printCanvas(drawing);
  } else {
    throw Error("Cannot create a rectangle using the given coordinates.");
  }
}
