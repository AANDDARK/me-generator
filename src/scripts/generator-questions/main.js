import digitGenerator from "../../core/helpers/digitGenerator.js";
import TaskParser from "../../core/helpers/parser.js";

export default function generator(){
const question = [
  { question: "If one side of a cube equals %d, the perimeter of one face will equal ______.", numberOfDigits: 1 },
  { question: "If one side of a square equals %d, the area will equal ______.", numberOfDigits: 1 },
  { question: "If the radius of a circle equals %d, the circumference will equal ______.", numberOfDigits: 1 },
  { question: "If the radius of a circle equals %d, the area will equal ______.", numberOfDigits: 1 },
  { question: "If the length of a rectangle equals %d and the width equals %d, the perimeter will equal ______.", numberOfDigits: 2 },
  { question: "If the base of a triangle equals %d and the height equals %d, the area will equal ______.", numberOfDigits: 2 },
  { question: "If the side of an equilateral triangle equals %d, the perimeter will equal ______.", numberOfDigits: 1 },
  { question: "If the side of an equilateral triangle equals %d, the area will equal ______.", numberOfDigits: 1 },
  { question: "If the radius of a sphere equals %d, the volume will equal ______.", numberOfDigits: 1 },
  { question: "If the radius of a sphere equals %d, the surface area will equal ______.", numberOfDigits: 1 },
  { question: "If one side of a cube equals %d, the surface area will equal ______.", numberOfDigits: 1 },
  { question: "If one side of a cube equals %d, the volume will equal ______.", numberOfDigits: 1 },
  { question: "If the base of a parallelogram equals %d and the height equals %d, the area will equal ______.", numberOfDigits: 2 },
  { question: "If the radius of a cylinder equals %d and the height equals %d, the volume will equal ______.", numberOfDigits: 2 },
  { question: "If the radius of a cylinder equals %d and the height equals %d, the surface area will equal ______.", numberOfDigits: 2 },
  { question: "If the radius of a cone equals %d and the height equals %d, the volume will equal ______.", numberOfDigits: 2 },
  { question: "If the diagonal of a square equals %d, the side length will equal ______.", numberOfDigits: 1 },
  { question: "If the perimeter of a square equals %d, the side length will equal ______.", numberOfDigits: 1 },
  { question: "If the side of a cube equals %d, the total edge length of the cube will equal ______.", numberOfDigits: 1 },
  { question: "If the circumference of a circle equals %d, the radius will equal ______.", numberOfDigits: 1 },
  { question: "If the base of a trapezium equals %d and %d, and the height equals %d, the area will equal ______.", numberOfDigits: 3 },
  { question: "If the sides of a triangle are %d, %d, and %d, find its perimeter.", numberOfDigits: 3 },
  { question: "If the sides of a rectangle are %d and %d, the area will equal ______.", numberOfDigits: 2 },
  { question: "If the diameter of a circle equals %d, the circumference will equal ______.", numberOfDigits: 1 },
  { question: "If the base of a cone equals %d and its slant height equals %d, find its curved surface area.", numberOfDigits: 2 },
  { question: "If the length, width, and height of a cuboid are %d, %d, and %d respectively, find its volume.", numberOfDigits: 3 },
  { question: "If the radius of a hemisphere equals %d, find its total surface area.", numberOfDigits: 1 },
  { question: "If two sides of a right triangle are %d and %d, find the length of the hypotenuse.", numberOfDigits: 2 },
  { question: "If the diagonal of a cube equals %d, find the side length.", numberOfDigits: 1 },
  { question: "If the perimeter of an equilateral triangle equals %d, find the length of one side.", numberOfDigits: 1 }
];
const int = Math.floor(Math.random() * question.length)

return TaskParser(question[int].question, digitGenerator(question[int].numberOfDigits))
}
console.log(generator());