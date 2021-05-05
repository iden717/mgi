const object = [
  {
    nama: "Smith",
    hobi: "Self Service",
  },
  {
    nama: "Dio",
    hobi: "Design Grafis",
  },
  {
    nama: "Agung",
    hobi: "Bermain Game",
  },
];

let arrayObject = null;
const hasil = object.map((value, index) => {
  const row = object.findIndex((rows) => rows.nama === "Agung");
  const rowTwo = object.findIndex((rows) => rows.nama === "Smith");
  return (arrayObject = {
    nama: object[row].nama,
    hobi: object[rowTwo].hobi,
  });
});

console.log({ result: arrayObject });
