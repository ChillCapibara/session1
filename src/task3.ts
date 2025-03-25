/* 
Task3

Implement a TypeScript function getFigureInfo() that takes a union type parameter representing different geometric figures: triangle, rectangle, and circle.
Each figure should be defined as a special type with certain properties:
A triangle must have base and height properties.
A rectangle must have width and height properties.
A circle must have a radius property.
The function getFigureInfo() should return a string with a description of the figure and its defined area.
For a triangle, the function should return `Triangle with base figure_base and height figure_height has an area of triangle_area`;
For a rectangle, the function should return `Rectangle with width figure_width and height figure_height has an area of rectangle_area`;
For a circle, the function should return `Circle with radius figure_radius has an area of circle_area`. For a circle, the area is determined with an accuracy of 2 decimal places. 
*/

// Example of usage:
//   const triangle: Triangle = { type: "triangle", base: 5, height: 10 };
//   const rectangle: Rectangle = { type: "rectangle", width: 8, height: 14 };
//   const circle: Circle = { type: "circle", radius: 8 };
 
//   console.log(getFigureInfo(triangle));
// // Output: " Triangle with base 5 and height 10 has an area of 25" 
//   console.log(getFigureInfo(rectangle));
// // Output: " Rectangle with width 8 and height 14 has an area of 112" 
//   console.log(getFigureInfo(circle));
// // Output: " Circle with radius 8 has an area of 201.06"

type Triangle = {
    type: "triangle";
    base: number;
    height: number; 
};

type Rectangle = {
    type: "rectangle";
    width: number; 
    height: number;
}

type Circle = {
    type: "circle";
    radius: number;
}

type Figure = Triangle | Rectangle | Circle;

function getFigureInfo(figure: Figure): string {
    let figureArea: number;
    
    switch(figure.type){
        case "triangle":
            figureArea = figure.base * figure.height / 2
            return `Triangle with base ${figure.base} and height ${figure.height} has an area of ${figureArea}`;

        case "rectangle":
            figureArea = figure.width * figure.height;
            return `Rectangle with width ${figure.width} and height ${figure.height} has an area of ${figureArea}`;

        case "circle":
            figureArea = Math.PI * figure.radius * figure.radius;
            return `Circle with radius ${figure.radius} has an area of ${figureArea.toFixed(2)}`;

        default: 
            throw new Error("Unsupported type: " +  figure)
    }
}


  const triangle: Triangle = { type: "triangle", base: 5, height: 10 };
  const rectangle: Rectangle = { type: "rectangle", width: 8, height: 14 };
  const circle: Circle = { type: "circle", radius: 8 };
 
  console.log(getFigureInfo(triangle));
// Output: " Triangle with base 5 and height 10 has an area of 25" 
  console.log(getFigureInfo(rectangle));
// Output: " Rectangle with width 8 and height 14 has an area of 112" 
  console.log(getFigureInfo(circle));
// Output: " Circle with radius 8 has an area of 201.06"