
let height = 0
let width = 0
let isCanvas = false
const inputsText = ["C 20 4",
"L 1 2 6 2",
"L 6 3 6 4",
"R 16 1 20 3",
"B 10 3 o"]

let output


function createCanvasBorder (){
    isCanvas=true
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
    printCanvas()
}

function printCanvas(){
    
    let printLine
     for(let i = 0; i < height+2; i++){
        let line = ""
            for(let j = 0; j < width+2; j++){
                line = line + output[i][j]
        }
        printLine = printLine + "\n" + line
    }
    console.log(printLine)
    // console.log(isCanvas)
}


// 1 2 6 2
function createLine(x1, y1, x2, y2) {
    let line = ""
    if(x1 === x2){
        for(let i = y1; i <= y2; i++){
            output[i][x1] = "x"
        }
    } else if (y1 === y2){
        for(let j = x1; j <= x2; j++){
                output[y1][j] = "x"
            }  
        } else{
        console.log("The coordinates are not for the verticle or horizontal line.Currently this app can only draw verticle and horizontal line.")
    }
    printCanvas()
}


function createRectangle(x1, y1, x2, y2){
    let line = ""
    if(x2 > x1 && y2 > y1){
        for(let i = y1; i <= y2; i++){
            output[i][x1] = "x"
            output[i][x2] = "x"
        }
        for(let j = x1; j <= x2; j++){
            output[y1][j] = "x"
            output[y2][j] = "x"
        }
    }else{
        console.log("Cannot create a rectangle using the given coordinates.")
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

checkInput("C 20 4")
checkInput("L 1 2 6 2")
checkInput("L 6 3 6 4",)
checkInput("R 16 1 20 3")
