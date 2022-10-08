function getArea(length, width) {
  let area;
  area = length * width;
  return area;
}

function getPerimeter(length, width) {
  let perimeter;
  perimeter = 2 * ( length + width);
  return perimeter;
}

console.log(getArea(2, 5));
console.log(getPerimeter(5, 6));