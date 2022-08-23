export default isInCanvas = (row, col, drawing) => {
    if(row >=drawing.canvasHeight+1 || row <= 0 || col >= drawing.canvasWidth+1 || col <= 0 ){
        return false
    }else{
        return true
    }
}