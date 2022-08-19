import readLine from  "readline"
import fs from "fs"
import lineReader from 'line-reader'

let width = 0
let height = 0
let isCanvas = false
const inputs = ["C 20 4",
"L 1 2 6 2",
"L 6 3 6 4",
"R 16 1 20 3",
"B 10 3 o"]

let output


const createCanvasBorder = (width, height) => {
   
    output = new Array(height)
    
    for(let i = 0; i < height+2; i++){
    output[i] = new Array(width)
            for(let j = 0; j < width+2; j++){
            if(i=== 0 || i === height+1){
                output[i][j] = "-"
            }else if(j === 0 || j === width+1){
                output[i][j] = "|"
            }else{
                output[i][j]= " "
            }
        }
    }
    return output
}

const printCanvas = (width, height) => {
    let line = ""
     output =   createCanvasBorder(width, height)
     for(let i = 0; i < height+2; i++){
      line = ""
            for(let j = 0; j < width+2; j++){
             line = line + output[i][j]
        }
        console.log(line)
    }

}
printCanvas(20, 4)




const horizontalLine = (width) => {
    let hLine = "  " 
    for(let i = 0; i < width; i++){
        hLine = hLine + "-"
    }
    console.log(hLine)
}

const verticleLine = (width, height) => {
    for(let j = 0; j < height; j++){
        let vLine = "" 
        for(let k = 0; k < width; k++){
            if(k === 0 || k === width){
                vLine = vLine + " | "
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
    console.log(isCanvas)
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


const createRectangle = (x1, y1, x2, y2) => {
    let line = ""
    if(x2 > x1 && y2 > y1){
        for(let i = 0; i < y2; i++){
            if(i < y1 || i>y2){
                console.log(" ")
            }else{
                console.log("x")
            }
        }
    }else{
        console.log("Cannot create a rectangle using the given coordinates.")
    }
}

const checkInput = ()  => {
    inputs.forEach(input => {

        const inputArray = input.split(" ")
        switch (inputArray[0].toLowerCase()){
            case("c"):
            if(inputArray.length === 3){
                isCanvas= true
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
    })
}





// checkInput()