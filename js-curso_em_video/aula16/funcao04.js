// 5! = 5 x 4 x 3 x 2 x 1 = 120

function fatorial(n) {
  if (n == 0) n = 1;
  for (c = n - 1; c > 1; c--) {
    console.log("Teste", n);
    n *= c;
  }
  return n;
}

console.log(fatorial(5));
