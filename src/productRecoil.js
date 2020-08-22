import { atom } from "recoil";

export const productState = atom({
  key: "productState",
  default: [
    {
      id: 1,
      price: 3000,
      brand: "Nike B50",
      colors: ["#264653", "#2a9d8f", "#e9c46a", "#e76f51"],
      discount: "50%",
      ratings: 5,
      reviews: 115,
      warranty: "30 days",
      url:
        "https://res.cloudinary.com/dxrbrkfvv/image/upload/v1594750290/react-recoil-shooes/1_etyjm6.jpg",
    },
    {
      id: 2,
      price: 6500,
      brand: "adidas X54",
      colors: ["#000000", "#14213d", "#fca311", "#e5e5e5"],
      discount: "50%",
      ratings: 4,
      reviews: 155,
      warranty: "45 days",
      url:
        "https://res.cloudinary.com/dxrbrkfvv/image/upload/v1594750288/react-recoil-shooes/2_wt1srr.jpg",
    },
    {
      id: 3,
      price: 7000,
      brand: "Nike N75",
      colors: ["#ffbe0b", "#ff006e", "#8338ec", "#3a86ff"],
      discount: "30%",
      ratings: 5,
      reviews: 215,
      warranty: "7 days",
      url:
        "https://res.cloudinary.com/dxrbrkfvv/image/upload/v1594750867/react-recoil-shooes/3_w7byfv.jpg",
    },
    {
      id: 4,
      price: 2500,
      brand: "adidas A21",
      colors: ["#007f5f", "#55a630", "#aacc00", "#d4d700"],
      discount: "20%",
      ratings: 3,
      reviews: 344,
      warranty: "35 days",
      url:
        "https://res.cloudinary.com/dxrbrkfvv/image/upload/v1594750276/react-recoil-shooes/4_zmphnk.jpg",
    },
    {
      id: 5,
      price: 4000,
      brand: "adidas B90",
      colors: ["#54478c", "#16db93", "#f29e4c", "#efea5a"],
      discount: "80%",
      ratings: 5,
      reviews: 215,
      warranty: "90 days",
      url:
        "https://res.cloudinary.com/dxrbrkfvv/image/upload/v1594750290/react-recoil-shooes/5_jpmfpl.jpg",
    },
    {
      id: 6,
      price: 3000,
      brand: "Bata B33",
      colors: ["#e500a4", "#2d00f7", "#bc00dd", "#6a00f4"],
      discount: "90%",
      ratings: 4,
      reviews: 515,
      warranty: "25 days",
      url:
        "https://res.cloudinary.com/dxrbrkfvv/image/upload/v1594750293/react-recoil-shooes/6_e6xand.jpg",
    },
    {
      id: 7,
      price: 6000,
      brand: "Bata X34",
      colors: ["#136f63", "#032b43", "#d00000", "#ffba08"],
      discount: "10%",
      ratings: 5,
      reviews: 665,
      warranty: "30 days",
      url:
        "https://res.cloudinary.com/dxrbrkfvv/image/upload/v1594750906/react-recoil-shooes/7_eoltwt.jpg",
    },
    {
      id: 8,
      price: 2000,
      brand: "Nike N65",
      colors: ["#0081a7", "#00afb9", "#f07167", "#f07167"],
      discount: "40%",
      ratings: 2,
      reviews: 653,
      warranty: "30 days",
      url:
        "https://res.cloudinary.com/dxrbrkfvv/image/upload/v1594750293/react-recoil-shooes/8_ar8mlp.jpg",
    },
  ],
});

export const compareProductState = atom({
  key: "compareProductState",
  default: [],
});
