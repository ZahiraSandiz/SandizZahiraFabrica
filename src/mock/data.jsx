const products = [
  {
    id: "01",
    name: "Abrigo de piel Amarty",
    price: 79490,
    installments: "3 cuotas de: $23000",
    category: "nuevos",
    img: "https://i.postimg.cc/XJt1wQ8S/pexels-david-manzyk-253085053-20426347.jpg",
    description: "bla bla",
    stock: 3,
  },
  {
    id: "02",
    name: "Abrigo de piel Zare",
    price: 61190,
    installments: "3 cuotas de: $23000",
    category: "sale",
    img: "https://i.postimg.cc/05JB81k8/pexels-david-manzyk-253085053-29879990.jpg",
    description: "bla bla",
    stock: 8,
  },
  {
    id: "03",
    name: "Tapado Instinto",
    price: 53490,
    installments: "3 cuotas de: $23000",
    category: "nuevos",
    img: "https://i.postimg.cc/5NSp0xZM/pexels-maksgelatin-6702723.jpg",
    description: "bla bla",
    stock: 8,
  },
  {
    id: "04",
    name: "Tapado Aura Boreal",
    price: 62490,
    installments: "3 cuotas de: $23000",
    category: "nuevos",
    img: "https://i.postimg.cc/NMKP9WRk/pexels-lazarus-ziridis-351891426-29775708.jpg",
    description: "bla bla",
    stock: 10,
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
    name: "Abrigo de piel Amarty",
    price: 79490,
    installments: "3 cuotas de: $23000",
    category: "sale",
    img: "https://i.postimg.cc/XJt1wQ8S/pexels-david-manzyk-253085053-20426347.jpg",
    description: "bla bla",
    stock: 3,
  },
  {
    id: "07",
    name: "Abrigo piel",
    price: 61190,
    installments: "3 cuotas de: $23000",
    category: "sale",
    img: "https://i.postimg.cc/05JB81k8/pexels-david-manzyk-253085053-29879990.jpg",
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
