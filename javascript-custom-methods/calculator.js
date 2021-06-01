/* exported calculator */
var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x * x;
  },
  sumAll: function (numbers) {
    return numbers.reduce(function (x, y) {
      return x + y;
    });
  },
  getAverage: function (numbers) {
    const sum = numbers.reduce(function (x, y) {
      return x + y;
    });
    return sum / numbers.length;
  }
};
