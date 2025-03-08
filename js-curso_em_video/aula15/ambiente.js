let num = [2, 8, 9, 15, 16];

console.log(`Nosso vetor é o ${num}`);
num[3] = 12;
num.sort();
num.push(10);

console.log(`O vetor com ${num.length} elementos é ${num}`);
console.log(`O primeiro valor do vetor é ${num[0]}`);

let pos = 3;

if (num.indexOf(pos) != -1) {
  console.log(`O valor ${pos} está na posição ${num.indexOf(pos)}.`);
} else {
  console.log(`O valor ${pos} não foi encontrado.`);
}
