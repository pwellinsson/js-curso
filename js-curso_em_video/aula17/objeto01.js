let friend = {
  name: "Pertersson",
  age: 32,
  gender: "M",
  weight: 86.5,
  heigth: 1.2,
  engordar(w = 0) {
    console.log("Engordou");
    this.weight += w;
  },
};

friend.engordar(3);
console.log(typeof friend); // objeto
console.log(`O ${friend.name} pesa ${friend.weight}Kg`);
