import fs from "fs-extra"
import { fileURLToPath } from "url"
import { dirname, join } from "path"
import  readLine  from "readline"

const { readJSON, writeJSON, writeFile, createReadStream } = fs

const dataFolderPath = join(dirname(fileURLToPath(import.meta.url)), "../data")
console.log(dataFolderPath)
const inputJSONPath = join(dataFolderPath, "input.txt")
const outputJSONPath = join(dataFolderPath, "output.txt")


export const getInput = () => readJSON(inputJSONPath)
export const writeOut = output => writeJSON(outputJSONPath, output)


export const getInputReadableStream = () => createReadStream(dataFolderPath)

