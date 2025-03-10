function parImpar(num) {
  if (num % 2 == 0) {
    return "Par!";
  } else {
    return "Impar!";
  }
}

num = [10, 15, 31, 43, 55, 66, 77, 223, 99];

for (let c = 0; c < num.length; c++) {
    console.log(`O número ${num[c]} é ${parImpar(num[c])}`);
}
