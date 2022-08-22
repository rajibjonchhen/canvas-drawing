import { getInput } from "./lib/fs-tools.js";
import checkInput from "./checkInput.js";

let drawing = {
  inputCommandArray: [],
  canvasHeight: 0,
  canvasWidth: 0,
  isCanvas: false,
  output: [],
  storeOutput: [],
};

// get the input from the input.txt and pass the command to check types
const startCommand = async () => {
  let data = await getInput();
  drawing.inputCommandArray = data.toString().split("\n");
  drawing.inputCommandArray.forEach((command) => checkInput(command, drawing));
};
startCommand();
