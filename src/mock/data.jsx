const products = [
  {
    id: "01",
    name: "Abrigo de piel Amarty",
    price: 79490,
    category: "tendencias",
    img: "https://i.postimg.cc/XJt1wQ8S/pexels-david-manzyk-253085053-20426347.jpg",
    description:
      "Abrigo de piel sintética de alta calidad con diseño oversize. Su textura suave y cálida lo convierte en la opción ideal para los días fríos sin renunciar al estilo. Forro interior confortable y acabado elegante, perfecto para combinar con looks casuales o sofisticados.",
    stock: 3,
  },
  {
    id: "02",
    name: "Blazer Space",
    price: 41190,
    category: "tendencias",
    img: "https://i.ibb.co/cSZNFnqw/Captura-de-Pantalla-2025-01-30-a-la-s-01-27-03.png",
    description:
      "Confeccionado en un tejido premium que combina confort y estilo, este blazer presenta líneas limpias y una silueta estructurada que realza la figura. Los detalles incluyen solapas clásicas que añaden un toque de formalidad y un cierre frontal sutil que proporciona un ajuste perfecto. Ideal para ocasiones que demandan un look refinado y profesional.",
    stock: 1,
  },
  {
    id: "03",
    name: "Abrigo de piel Aura",
    price: 62490,
    category: "new",
    img: "https://i.postimg.cc/NMKP9WRk/pexels-lazarus-ziridis-351891426-29775708.jpg",
    description:
      "Este abrigo de piel sintética es la combinación perfecta entre lujo y actitud. Su diseño moderno y audaz le aporta una onda única, mientras que su textura suave y elegante lo hace sentir tan refinado como cualquier prenda de alta costura. Este abrigo resalta el estilo urbano con un toque de sofisticación. Ideal para quienes buscan destacar con un look que no pasa desapercibido, sin sacrificar el confort.",
    stock: 10,
  },
  {
    id: "04",
    name: "Tapado Micaela",
    price: 61190,
    category: "sale",
    img: "https://i.postimg.cc/05JB81k8/pexels-david-manzyk-253085053-29879990.jpg",
    description:
      "Este tapado de silueta relajada y corte amplio es el equilibrio perfecto entre comodidad y estilo urbano. La suavidad de su tejido y su color gris neutro lo convierten en una pieza versátil que puedes combinar con cualquier atuendo, ya sea casual o más sofisticado. Ideal para quienes buscan un look moderno, cómodo y lleno de personalidad. Perfecto para los días fríos, donde el estilo y la calidez se encuentran en cada pliegue.",
    stock: 8,
  },
  {
    id: "05",
    name: "Trench Luisa",
    price: 49490,
    category: "sale",
    img: "https://i.postimg.cc/Nf6CH82S/pexels-maryiaplashchynskaya-3393793.jpg",
    description:
      "Este trench redefine la elegancia atemporal con su diseño clásico y sofisticado. Confeccionado en un tejido ligero y resistente, su corte estructurado y largo proporciona un ajuste fluido que realza la figura sin sacrificar comodidad. Las solapas anchas y el cinturón de la misma tela aportan un toque de distinción, mientras que su color neutro lo convierte en una prenda versátil que puede adaptarse a cualquier estilo.",
    stock: 7,
  },
  {
    id: "06",
    name: "Blazer Osk",
    price: 79490,
    category: "sale",
    img: "https://i.ibb.co/TBDs5VbW/Captura-de-Pantalla-2025-01-30-a-la-s-01-26-00.png",
    description:
      "Este blazer oversize es la pieza clave que transforma cualquier look con su diseño vanguardista y su corte relajado. Con una silueta amplia y caída fluida, aporta una sensación de confort sin perder la sofisticación. Su confección en materiales de alta calidad y su color neutro lo hacen perfecto para llevarlo en cualquier ocasión, desde un día de trabajo hasta un look de noche. Las solapas estructuradas y el cierre de botones añaden un toque de formalidad, mientras que su estilo oversize le da un aire desenfadado y moderno. Una prenda esencial para quienes buscan un equilibrio entre lo clásico y lo contemporáneo.",
    stock: 0,
  },
  {
    id: "07",
    name: "Chaleco Orne",
    price: 61190,
    category: "sale",
    img: "https://i.ibb.co/mCFZgRj4/Captura-de-Pantalla-2025-01-30-a-la-s-01-25-45.png",
    description:
      "Este chaleco oversize es la prenda versátil que eleva cualquier atuendo con su estilo audaz y su ajuste relajado. Con un diseño amplio y moderno, su corte oversized se combina perfectamente con la suavidad de su tejido, brindando una sensación de comodidad y fluidez. Ideal para agregar una capa extra de estilo sin perder la frescura, este chaleco es perfecto para llevar sobre camisetas, camisas o incluso vestidos, creando un look que va desde lo casual hasta lo más chic. Los detalles minimalistas y la estructura ligera hacen de este chaleco una opción única para quienes buscan sofisticación sin esfuerzo.",
    stock: 20,
  },
  {
    id: "08",
    name: "Pantalon Aurora",
    price: 61190,
    category: "new",
    img: "https://i.ibb.co/YHLj8m4/Captura-de-Pantalla-2025-01-30-a-la-s-03-10-53.png",
    description:
      "Este pantalón con brillo es la elección perfecta para quienes buscan un look audaz y sofisticado. Su tejido metálico y brillante refleja la luz con cada movimiento, añadiendo un toque de glamour instantáneo a cualquier atuendo. Con un corte ajustado y cómodo, se adapta perfectamente a la figura, creando una silueta elegante y moderna. Ideal para salir de noche, eventos especiales o cuando quieras destacar, este pantalón es una declaración de estilo que combina la elegancia del brillo con la versatilidad de una prenda de uso diario. Atrévete a brillar con confianza.",
    stock: 1,
  },
  {
    id: "09",
    name: "Conjunto Palta",
    price: 61190,
    category: "new",
    img: "https://i.ibb.co/BKCchc4M/Captura-de-Pantalla-2025-01-30-a-la-s-03-10-24.png",
    description:
      "Este conjunto sastrero en un sofisticado tono palta es una apuesta fresca y elegante para quienes buscan algo diferente y moderno. El color suave y único aporta un toque de serenidad, mientras que el corte estructurado de la chaqueta y los pantalones de talle alto crean una silueta afilada y estilizada. La combinación perfecta de estilo y comodidad, ideal tanto para ocasiones formales como para eventos más relajados. Con detalles refinados como las solapas finas y los acabados de calidad, este conjunto es una opción perfecta para quienes buscan destacar con un look sofisticado y lleno de personalidad.",
    stock: 4,
  },
  {
    id: "10",
    name: "Blazer Rend",
    price: 61190,
    category: "new",
    img: "https://i.ibb.co/4gRvCkPp/Captura-de-Pantalla-2025-01-30-a-la-s-03-12-30.png",
    description:
      "Este blazer corto de cuero negro es una pieza audaz y elegante que redefine el estilo moderno. Con su corte ajustado y líneas definidas, destaca la figura y añade un toque de actitud a cualquier look. El cuero suave y de alta calidad ofrece un acabado sofisticado y duradero, mientras que el color negro clásico lo convierte en una prenda versátil que se adapta fácilmente a diferentes ocasiones. Ya sea con jeans para un look casual o con pantalones de vestir para una apariencia más refinada, este blazer es perfecto para quienes buscan un toque de rebeldía y elegancia al mismo tiempo.",
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

export const getOneProduct = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let product = products.find((item) => item.id === id);
      resolve(product);
    }, 1000);
  });
};
