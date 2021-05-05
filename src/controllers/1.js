exports.getOne = async (req, res) => {
  try {
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

    res.send({
      hasil,
    });
    console.log(sstok);
  } catch (error) {
    console.log(error);
  }
};
exports.getThree = async (req, res) => {
  try {
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

    res.send({
      result: arrayObject,
    });
    console.log({ result: arrayObject });
  } catch (error) {
    console.log(error);
  }
};
