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
  if (x1 === x2) {
    for (let i = y1; i <= y2; i++) {
      drawing.output[i][x1] = "x";
    }
  } else if (y1 === y2) {
    for (let col = x1; col <= x2; col++) {
      drawing.output[y1][col] = "x";
    }
  } else {
    console.log(
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
    console.log("Cannot create a rectangle using the given coordinates.");
  }
}

export function bucketFill(y, x, char, drawing) {
  if (x > 0 || x < drawing.canvasHeight || y > 0 || y < drawing.canvasWidth) {
    for (let row = x; row <= drawing.canvasHeight; row++) {
      for (let col = y; col <= drawing.canvasWidth; col++) {
        if (drawing.output[row][col] === " ") {
          drawing.output[row][col] = "o";
        } else {
          col = drawing.canvasWidth;
        }
      }
    }

    for (let row = x; row > 0; row--) {
      for (let col = y; col > 0; col--) {
        if (drawing.output[row][col] === " ") {
          drawing.output[row][col] = "o";
        } else {
          col = 0;
        }
      }
    }

    for (let row = x; row > 0; row--) {
      for (let col = y + 1; col <= drawing.canvasWidth; col++) {
        if (drawing.output[row][col] === " ") {
          drawing.output[row][col] = "o";
        } else {
          col = drawing.canvasWidth;
        }
      }
    }
    for (let row = x; row <= drawing.canvasHeight; row++) {
      for (let col = y - 1; col > 0; col--) {
        if (drawing.output[row][col] === " ") {
          drawing.output[row][col] = "o";
        } else {
          col = 0;
        }
      }
    }
  }
  printCanvas(drawing);
}
