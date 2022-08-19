import readLine from  "readline"
import fs from "fs"
import lineReader from 'line-reader'


const horizontalLine = (width) => {
    let hLine = "  " 
    for(let i = 0; i < width; i++){
        hLine = hLine + " _ "
    }
    return console.log(hLine)
}

const verticleLine = (width, height) => {

}

const createCanvas = (input) => {
    const inputArray = input.split(" ")
    
    let vLine = ""
    let width = 0;
    let height = 0
 
    

    if(inputArray[0].toLowerCase() === "c"){
        width = parseInt(inputArray[1])
        height = parseInt(inputArray[2])

        horizontalLine(width)
        
        for(let j = 0; j < height; j++){
            let vLine = " " 
            for(let k = 0; k <= width+1; k++){
                if(k === 0 || k === width+1){
                    vLine = vLine + "|"
                }else{    
                    vLine = vLine + "   "
                }
            }
            console.log( vLine)
        }
    }
    horizontalLine(width)
}

createCanvas("C 20 40")