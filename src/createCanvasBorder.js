// create canvas border function
export default function createCanvasBorder ({width,height,output}){
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
    return output
}