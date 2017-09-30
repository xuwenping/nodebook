function * fib(max) {
  console.log("xxx");
  var
      t,
      a = 0,
      b = 1,
      n = 1;
  while (n < max) {
    yield a;
    t = a + b;
    a = b;
    b = t;
    n++;
  }

  return a;
}

console.log("xxx:"+fib(5).next());
for (var x in fib(5)) {
  console.log("x ["+x+"]");
}
