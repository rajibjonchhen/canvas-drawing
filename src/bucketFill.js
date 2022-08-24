
import { printCanvas } from "./printOutput.js";

//    fuction to check if the points are valid or not
    function isValid(x, y, prevC, newC, drawing)
    {
        if(x<0 || x>= drawing.canvasHeight+1 || y<0 || y>= drawing.canvasWidth+1 || drawing.output[x][y]!= prevC
           || drawing.output[x][y]== newC)
            return false;
        return true;
    }
 
    // function to fill the previous color or char with new color using backtracking  - Brute force approach  -  (Depth-First Search method) -
    export function floodFill(col, row, prevC, newC, drawing)
    {
        // array to hold the coordinated of valid point
        let queue = [];
    //   starting point
        queue.push([row, col]);
 
        // start with coloring the given point with the new char/color
        drawing.output[row][col] = newC;
        
        // loop until all the points are visited
        while(queue.length > 0)
        {
            // get the valid point from the back of the array
            let currPixel = queue[queue.length - 1];
            // remove the last item from the array
            queue.pop();
 
            let posX = currPixel[0];
            let posY = currPixel[1];
 
            // Check if the adjacent points are valid
            if(isValid(posX + 1, posY, prevC, newC, drawing))
            {
                // add new color/char if valid
                drawing.output[posX + 1][posY] = newC;
                // push the valid point to the que to check the adjacent points  
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
