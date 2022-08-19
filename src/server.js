import readLine from  "readline"
import fs from "fs"
import lineReader from 'line-reader'

let width = 0
let height = 0

const horizontalLine = (width) => {
    let hLine = "" 
    for(let i = 0; i < width; i++){
        hLine = hLine + "x"
    }
    console.log(hLine)
}

const verticleLine = (width, height) => {
    for(let j = 0; j < height; j++){
        let vLine = "" 
        for(let k = 0; k < width; k++){
            if(k === 0 || k === width-1){
                vLine = vLine + "x"
            }else{    
                vLine = vLine + " "
            }
        }
        console.log(vLine)
    }
}

const createCanvas = (width, height) => {
    horizontalLine(width)
    verticleLine(width, height)
    horizontalLine(width)
}

const createLine = (x1, y1, x2, y2) => {
    let line = ""
    if(x1 === x2){
        for(let i = 0; i < y2; i++){
            if(i < y1 || i>y2){
                
                console.log(" ")
            }else{
                console.log("x")

            }
        }
    } else if(y1 === y2){
        for(let i = 0; i < x2; i++){
            if(i < x1 || i>x2){
                line = line + " "
            }else{
                line = line + "x"
            }
        }
        console.log(line)
    }else{
        console.log("The coordinates are not for the verticle or horizontal line.Currently this app can only draw verticle and horizontal line.")
    }
}

const checkInput = ()  => {
    const input = "l 2 10 20 10"
    const inputArray = input.split(" ")
    switch (inputArray[0].toLowerCase()){
        case("c"):
        if(inputArray.length === 3){
            width = parseInt(inputArray[1])
            height = parseInt(inputArray[2])
            return createCanvas(width, height)
        } else{
            console.log("Input for create canvas needs to be char num num format")
        }
        break;
         
        case("l"):
        if(inputArray.length === 5){
        const x1 = parseInt(inputArray[1])
        const y1 = parseInt(inputArray[2])
        const x2 = parseInt(inputArray[3])
        const y2 = parseInt(inputArray[4])
        createLine(x1, y1, x2, y2)
    } else{
        console.log("Input for create line must be char num num num num format")
    }
    break;
         
        case("r"):
        if(inputArray.length === 5){
        const x1 = parseInt(inputArray[1])
        const y1 = parseInt(inputArray[2])
        const x2 = parseInt(inputArray[3])
        const y2 = parseInt(inputArray[4])
        createRectangle(x1, y1, x2, y2)
    } else{
        console.log("Input for create rectangle must be char num num num num format")
    }
    break;

        default: 
        console.log("Error input")
    }
}





checkInput()