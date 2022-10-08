class Polygon {
  constructor(arr) {
      this.arr = arr;
  }
  
  perimeter() {
      let count = 0;
      for (let index = 0; index < this.arr.length; index += 1) {
          count += this.arr[index]  
      }
      return count;
  }
}
