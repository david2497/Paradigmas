
function stats(a, init, oper) {
  var s = init;
  for (var i = 0; i < a.length; i++) {
    s = oper(s, a[i]);
  }
  return s;
}

function sum(a) {
  return stats(a, 0,(x, y) => x + y); //function(x,y){return x + y;}
}

function mult(a) {
  return stats(a, 1,(x, y) => x * y); //function(x,y){return x * y;}
}

function max(a) {
  return stats(a, -Infinity,(x, y) => Math.max(x, y)); //function(x,y){return Math.max(x, y);}
}

function min(a) {
  return stats(a, Infinity,(x, y) => Math.min(x, y)); //function(x,y){return Math.min(x, y);}
}

function test_all() {
  var a = [2, 1, 4, 5, 3];
  console.log("Testing all with " + a);
  console.log("sum = " + sum(a));
  console.log("mult= " + mult(a));
  console.log("max = " + max(a));
  console.log("min = " + min(a));
}
////////////////////////////////////////////////////////////
// do test
test_all()
