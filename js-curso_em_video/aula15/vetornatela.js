let value = [2, 8, 9, 15, 16, 19];

for (let c = 0; c < value.length; c++) {
  console.log(`O ${c + 1}° valor é ${value[c]}.`);
}

console.log('Pausa')

for (let pos in value) {
  console.log(`O ${pos}° valor é ${value[pos]}.`);
}
