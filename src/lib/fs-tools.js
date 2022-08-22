import fs from "fs-extra"
import { fileURLToPath } from "url"
import { dirname, join } from "path"

const { readFile, writeFile } = fs


const dataFolderPath = join(dirname(fileURLToPath(import.meta.url)), "../data")
const inputPath = join(dataFolderPath, "input.txt")
const outputPath = join(dataFolderPath, "output.txt")

// function to read the input.txt file
export const getInput = () =>  readFile(inputPath)

// function to write in the output.txt file
export const writeOutput = (text) =>  writeFile(outputPath, text)


