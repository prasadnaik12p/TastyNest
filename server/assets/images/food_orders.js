const FOOD_ORDERS = [
  {
    id: "1",
    item: "order-1",
    status: "Pending",
    slug: "order-1",
    items: [
      {
        id: 1,
        title: "chicken biriyani",
        slug: "product-1",
        imagesUrl: ["url-1"],
        price: 160,
        heroImage: require("../food_images/chicken_biriyani.webp"),
      },
      {
        id: 2,
        title: "chicken tikka",
        slug: "product-2",
        imagesUrl: ["url-2"],
        price: 60,
        heroImage: require("../food_images/chicken_tikka"),
      },
      {
        id:3,
        title: "mojito",
        slug:"product-3",
        imagesUrl:['url-3'],
        price: 70,
        heroImage:require("../food_images/mojito")
      }
    ]
  },
  {
    id: "2",
    item: "order-2",
    status: "delivered",
    slug: "order-2",
    items: [
      {
        id: 1,
        title: "gobi manchuri",
        slug: "product-1",
        imagesUrl: ["url-1"],
        price: 90,
        heroImage: require("../food_images/gobi_manchuri.webp"),
      },
      {
        id: 2,
        title: "paneer roti",
        slug: "product-2",
        imagesUrl: ["url-2"],
        price: 150,
        heroImage: require("../food_images/paneer_roti.webp"),
      },
      {
        id:3,
        title: "lassi",
        slug:"product-3",
        imagesUrl:['url-3'],
        price: 50,
        heroImage:require("../food_images/lassi.webp")
      }
    ]
  },
   {
    id: "3",
    item: "order-3",
    status: "delivered",
    slug: "order-3",
    items: [
      {
        id: 1,
        title: "masala dosa",
        slug: "product-1",
        imagesUrl: ["url-1"],
        price: 60,
        heroImage: require("../food_images/masala_dosa.webp"),
      },
      {
        id: 2,
        title: "aloo paratha",
        slug: "product-2",
        imagesUrl: ["url-2"],
        price: 40,
        heroImage: require("../food_images/aloo_paratha.webp"),
      },
      {
        id:3,
        title: "tea",
        slug:"product-3",
        imagesUrl:['url-3'],
        price: 30,
        heroImage:require("../food_images/tea_coffee.webp")
      }
    ]
  }
];
