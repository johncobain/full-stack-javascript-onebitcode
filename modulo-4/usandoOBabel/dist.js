"use strict";

function media() {
  for (var _len = arguments.length, n = new Array(_len), _key = 0; _key < _len; _key++) {
    n[_key] = arguments[_key];
  }
  var sum = n.reduce(function (accum, num) {
    return accum + num;
  }, 0);
  return sum / n.length;
}
function mediaPonderada() {
  var len = 0;
  for (var _len2 = arguments.length, num = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    num[_key2] = arguments[_key2];
  }
  var sum = num.reduce(function (accum, nums) {
    len += nums.p;
    return accum + nums.n * nums.p;
  }, 0);
  return sum / len;
}
function mediana() {
  for (var _len3 = arguments.length, n = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    n[_key3] = arguments[_key3];
  }
  n.sort(function (a, b) {
    return a - b;
  });
  if (n.length % 2 === 0) {
    var sum = n[Math.floor(n.length / 2) - 1] + n[Math.floor(n.length / 2)];
    return sum / 2;
  } else {
    return n[Math.round(n.length / 2) - 1];
  }
}
function moda() {
  for (var _len4 = arguments.length, n = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    n[_key4] = arguments[_key4];
  }
  //[[n,qtd],[n,qtd]]
  var quantidades = n.map(function (num) {
    return [num, n.filter(function (number) {
      return num === number;
    }).length];
  });
  quantidades.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quantidades[0][0];
}
console.log(media(2, 6, 3, 7, 4));
console.log(mediaPonderada({
  n: 7,
  p: 2
}, {
  n: 9,
  p: 5
}, {
  n: 3,
  p: 1
}));
console.log(mediana(2, 4, 5, 7, 42, 99));
console.log(mediana(15, 14, 8, 7, 3));
console.log(moda(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4));
