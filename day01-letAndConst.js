function main(number) {
  // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
  
  const PI = Math.PI;
  const r = number;
  const area = PI * r ** 2;
  const perimeter = 2 * PI * r;
  // Print the area of the circle:
  console.log(area.toFixed(2));
  // Print the perimeter of the circle:
  console.log(perimeter.toFixed(2));
}

main(2);