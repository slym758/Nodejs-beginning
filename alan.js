let value = process.argv.slice(2);

function circleArea(radius) {
  const Area = 3.14 * (radius * radius);
  console.log(Area);
}

circleArea(value);
