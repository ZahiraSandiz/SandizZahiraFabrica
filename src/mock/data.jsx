const products = [
  {
    id: "01",
    name: "Abrigo de piel Amarty",
    price: 79490,
    installments: "3 cuotas de: $23000",
    category: "new",
    img: "https://i.postimg.cc/XJt1wQ8S/pexels-david-manzyk-253085053-20426347.jpg",
    description: "bla bla",
    stock: 3,
  },
  {
    id: "02",
    name: "Blazer Aura",
    price: 41190,
    installments: "3 cuotas de: $23000",
    category: "sale",
    img: "https://i.ibb.co/cSZNFnqw/Captura-de-Pantalla-2025-01-30-a-la-s-01-27-03.png",
    description: "bla bla",
    stock: 1,
  },
  {
    id: "03",
    name: "Abrigo de piel Aura",
    price: 62490,
    installments: "3 cuotas de: $23000",
    category: "new",
    img: "https://i.postimg.cc/NMKP9WRk/pexels-lazarus-ziridis-351891426-29775708.jpg",
    description: "bla bla",
    stock: 10,
  },
  {
    id: "04",
    name: "Abrigo Zare",
    price: 61190,
    installments: "3 cuotas de: $23000",
    category: "sale",
    img: "https://i.postimg.cc/05JB81k8/pexels-david-manzyk-253085053-29879990.jpg",
    description: "bla bla",
    stock: 8,
  },
  {
    id: "05",
    name: "Trench Luisa",
    price: 49490,
    installments: "3 cuotas de: $23000",
    category: "sale",
    img: "https://i.postimg.cc/Nf6CH82S/pexels-maryiaplashchynskaya-3393793.jpg",
    description: "bla bla",
    stock: 7,
  },
  {
    id: "06",
    name: "Blazer Osk",
    price: 79490,
    installments: "3 cuotas de: $23000",
    category: "sale",
    img: "https://i.ibb.co/TBDs5VbW/Captura-de-Pantalla-2025-01-30-a-la-s-01-26-00.png",
    description: "bla bla",
    stock: 3,
  },
  {
    id: "07",
    name: "Chaleco Orne",
    price: 61190,
    installments: "3 cuotas de: $23000",
    category: "sale",
    img: "https://i.ibb.co/mCFZgRj4/Captura-de-Pantalla-2025-01-30-a-la-s-01-25-45.png",
    description: "bla bla",
    stock: 1,
  },
];

export const getProducts = () => {
  let error = false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("Hubo un error, intente mas tarde");
      } else {
        resolve(products);
      }
    }, 2000);
  });
};

export const getOneProduct = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let product = products.find((item) => item.id === id);
      resolve(product);
    }, 1000);
  });
};
