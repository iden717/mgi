const product = [
  {
    id_product: 1,
    nama_product: "Huawei P30 pro",
  },
  {
    id_product: 2,
    nama_product: "Huawei Nova 5T",
  },
];

const stok_product = [
  {
    id_product: 1,
    qty: 15,
  },
  {
    id_product: 1,
    qty: 6,
  },
  {
    id_product: 2,
    qty: 4,
  },
  {
    id_product: 2,
    qty: 18,
  },
];

let sstok = [];
stok_product.map((value, index) => {
  var id = value.id_product;
  sstok[id] = value;
});
stok_product.forEach(function (obj, i) {
  var id = obj.id_product;
  sstok[id] = stok_product[i];
}, Object.create(null));

const hasil = product.map((value, index) => {
  const row = product.findIndex((rows) => rows.id_product === index + 1);

  //   sstok[index] = { id: value.id_product , qty: };
  return { nama_product: product[row].nama_product, total_stok: "" };
});

console.log(hasil);
