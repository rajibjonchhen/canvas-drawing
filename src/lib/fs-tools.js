import fs from "fs-extra"
import { fileURLToPath } from "url"
import { dirname, join } from "path"

const { readFile, writeFile, createReadStream } = fs


const dataFolderPath = join(dirname(fileURLToPath(import.meta.url)), "../data")
console.log("dataFolderPath", dataFolderPath)
const inputPath = join(dataFolderPath, "input.txt")
const outputPath = join(dataFolderPath, "output.txt")


export const getInput = () =>  readFile(inputPath)
export const writeOutput = (text) =>  writeFile(outputPath, text)

export const getBooksReadableStream = () => createReadStream(inputPath)

