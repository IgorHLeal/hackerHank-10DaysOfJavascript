function getCount(objects) {
  return objects.reduce((prev, curr) => {
      curr.x === curr.y && (prev += 1);

      return prev;
  }, 0);
}
