import { writeOutput, getInput } from "./lib/fs-tools.js"

let height = 0
let width = 0
let isCanvas = false
const inputsText = ["C 20 4",
"L 1 2 6 2",
"L 6 3 6 4",
"R 16 1 20 3",
"B 10 3 o"]
let output
let storeOutput

// create canvas border function
function createCanvasBorder (){
    isCanvas=true
    output = new Array(height)
    for(let row = 0; row < height+2; row++){
    output[row] = new Array(width)
            for(let col = 0; col < width+2; col++){
            if(row=== 0 || row === height+1){
                output[row][col] = "-"
            }else if(col === 0 || col === width+1){
                output[row][col] = "|"
            }else{
                output[row][col]= " "
            }
        }
    }
    printCanvas()
}

// print the canvas function
const printCanvas = () =>{
    let printLine=""
     for(let i = 0; i < height+2; i++){
        let line = ""
            for(let col = 0; col < width+2; col++){
                line = line + output[i][col]
        }
        printLine = printLine + "\n" + line
    }
    storeOutput += printLine
    writeOutput(storeOutput)
}


// create line function
function createLine(x1, y1, x2, y2) {
    let line = ""
    if(x1 === x2){
        for(let i = y1; i <= y2; i++){
            output[i][x1] = "x"
        }
    } else if (y1 === y2){
        for(let col = x1; col <= x2; col++){
                output[y1][col] = "x"
            }  
        } else{
        console.log("The coordinates are not for the verticle or horizontal line.Currently this app can only draw verticle and horizontal line.")
    }
    printCanvas()
}


function createRectangle(x1, y1, x2, y2){
    let line = ""
    if(!isCanvas){
        writeOutput("create canvas is absent")
    }else if(x2 > x1 && y2 > y1){
        for(let i = y1; i <= y2; i++){
            output[i][x1] = "x"
            output[i][x2] = "x"
        }
        for(let col = x1; col <= x2; col++){
            output[y1][col] = "x"
            output[y2][col] = "x"
        }

        printCanvas()
    }else{
        console.log("Cannot create a rectangle using the given coordinates.")
    }
}

function bucketFill (y, x, char){

    // console.log(output)
    if (x > 0 || x < height || y > 0 || y < width) {
            for(let row = x; row<=height; row++){
                for(let col = y; col <= width; col++ ){
                    console.log('dr',row,col)
                    if(output[row][col] === " "){
                        output[row][col] = "o"
                    }else{
                        col=width
                    }
                }
            }

            for(let row = x; row > 0; row--){
                for(let col = y; col > 0; col-- ){
                    console.log("ul",row,col)
                    if(output[row][col] === " "){
                        output[row][col] = "o"
                    }else{
                        col=0
                    }
                }
            }

            for(let row = x; row > 0; row--){
                for(let col = y+1; col <= width; col++ ){
                    console.log('ur',row,col)
                    if(output[row][col] === " "){
                        output[row][col] = "o"
                    }else{
                        col=width
                    }
                }
            }
            for(let row = x; row<=height; row++){
                for(let col = y-1; col > 0; col-- ){
                    console.log("dl",row,col)
                    if(output[row][col] === " "){
                        output[row][col] = "o"
                    }else{
                        col=0
                    }
                }
            }
    }
    printCanvas()
}


const checkInput = (input) =>{
        const inputArray = input.split(" ")
        switch (inputArray[0].toLowerCase()){
            case("c"):
            if(inputArray.length === 3){
                isCanvas= true
                width = parseInt(inputArray[1])
                height = parseInt(inputArray[2])
                createCanvasBorder(width, height)
            } else{
                console.log("Input for create canvas needs to be char num num format")
            }
            break;
            
            case("l"):
            if(!isCanvas){
                writeOutput("The canvas is absent")
                throw Error("error - The canvas is absent")
            }else if(inputArray.length === 5){
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
            if(!isCanvas){
                writeOutput("The canvas is absent")
                throw Error("error")
            }else if(inputArray.length === 5){
                const x1 = parseInt(inputArray[1])
                const y1 = parseInt(inputArray[2])
                const x2 = parseInt(inputArray[3])
                const y2 = parseInt(inputArray[4])
                createRectangle(x1, y1, x2, y2)
            } else{
                console.log("Input for create rectangle must be char num num num num format")
            }
            break;

            case("b"):
            if(!isCanvas){
                writeOutput("The canvas is absent")
                throw Error("error")
            }else if(inputArray.length === 4){
                const x = parseInt(inputArray[1])
                const y = parseInt(inputArray[2])
                const char = inputArray[3]
                bucketFill(x, y, char)
            } else{
                console.log("Input for create rectangle must be char num num num num format")
            }
            break;
            
            default: 
            console.log("Error input")
        }
}


const readData = async() => {
    let data = await getInput()
    let dataArray = data.toString().split("\n")
    dataArray.forEach(inputsText => 
        checkInput(inputsText)
        )
    
}
readData()

