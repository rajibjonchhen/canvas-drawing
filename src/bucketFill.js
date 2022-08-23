
import { printCanvas } from "./printOutput.js";

    // Function that returns true if
    // the given pixel is valid
    function isValid(x, y, prevC, newC, drawing)
    {
        if(x<0 || x>= drawing.canvasHeight+1 || y<0 || y>= drawing.canvasWidth+1 || drawing.output[x][y]!= prevC
           || drawing.output[x][y]== newC)
            return false;
        return true;
    }
 
    // FloodFill function
    export function floodFill(col, row, prevC, newC, drawing)
    {
        let queue = [];
        // Append the position of starting
        // pixel of the component
        queue.push([row, col]);
 
        // start with coloring the given point with the new char
        drawing.output[row][col] = newC;
 
        // While the queue is not empty i.e. the
        // whole component having prevC color
        // is not colored with newC color
        while(queue.length > 0)
        {
            // Dequeue the front node
            let currPixel = queue[queue.length - 1];
            queue.pop();
 
            let posX = currPixel[0];
            let posY = currPixel[1];
 
            // Check if the adjacent
            // pixels are valid
            if(isValid(posX + 1, posY, prevC, newC, drawing))
            {
                // Color with newC
                // if valid and enqueue
                drawing.output[posX + 1][posY] = newC;
                queue.push([posX + 1, posY]);
            }
 
            if(isValid( posX-1, posY, prevC, newC, drawing))
            {
                drawing.output[posX-1][posY]= newC;
                queue.push([posX-1, posY]);
            }
 
            if(isValid( posX, posY + 1, prevC, newC, drawing))
            {
                drawing.output[posX][posY + 1]= newC;
                queue.push([posX, posY + 1]);
            }
 
            if(isValid( posX, posY-1, prevC, newC, drawing))
            {
                drawing.output[posX][posY-1]= newC;
                queue.push([posX, posY-1]);
            }
        }
        printCanvas(drawing)
    }
