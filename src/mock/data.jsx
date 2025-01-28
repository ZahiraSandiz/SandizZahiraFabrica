const products = [
  {
    id: "01",
    name: "Abrigo de piel Amarty",
    price: 79490,
    category: "nuevos",
    description: "bla bla",
    img: "https://i.postimg.cc/XJt1wQ8S/pexels-david-manzyk-253085053-20426347.jpg",
    stock: 3,
  },
  {
    id: "02",
    name: "Abrigo de piel Zare",
    price: 61190,
    category: "sale",
    description: "bla bla",
    img: "https://i.postimg.cc/05JB81k8/pexels-david-manzyk-253085053-29879990.jpg",
    stock: 1,
  },
  {
    id: "03",
    name: "Tapado Instinto",
    price: 53490,
    category: "nuevos",
    description: "bla bla",
    img: "https://i.postimg.cc/5NSp0xZM/pexels-maksgelatin-6702723.jpg",
    stock: 8,
  },
  {
    id: "04",
    name: "Tapado Aura Boreal",
    price: 62490,
    category: "nuevos",
    description: "bla bla",
    img: "https://i.postimg.cc/NMKP9WRk/pexels-lazarus-ziridis-351891426-29775708.jpg",
    stock: 10,
  },
  {
    id: "05",
    name: "Trench Luisa",
    price: 49490,
    category: "nuevos",
    description: "bla bla",
    img: "https://i.postimg.cc/Nf6CH82S/pexels-maryiaplashchynskaya-3393793.jpg",
    stock: 7,
  },
  {
    id: "06",
    name: "Abrigo de piel Amarty",
    price: 79490,
    category: "nuevos",
    description: "bla bla",
    img: "https://i.postimg.cc/XJt1wQ8S/pexels-david-manzyk-253085053-20426347.jpg",
    stock: 3,
  },
  {
    id: "07",
    name: "Abrigo de piel Zare",
    price: 61190,
    category: "sale",
    description: "bla bla",
    img: "https://i.postimg.cc/05JB81k8/pexels-david-manzyk-253085053-29879990.jpg",
    stock: 1,
  },
  {
    id: "08",
    name: "Tapado Instinto",
    price: 53490,
    category: "nuevos",
    description: "bla bla",
    img: "https://i.postimg.cc/5NSp0xZM/pexels-maksgelatin-6702723.jpg",
    stock: 8,
  },
  {
    id: "09",
    name: "Tapado Aura Boreal",
    price: 62490,
    category: "nuevos",
    description: "bla bla",
    img: "https://i.postimg.cc/NMKP9WRk/pexels-lazarus-ziridis-351891426-29775708.jpg",
    stock: 10,
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
