import sellerSea from "./img/shrimppizza.jpg";
import sellerTradi from "./img/chessepizaa.jpg";
import sellerMixed from "./img/baconpizza.jpg";

import multiple1 from "./img/multiple1.png";
import multiple2 from "./img/multiple2.png";
import multiple3 from "./img/multiple3.png";
import multiple4 from "./img/multiple4.png";
import multiple5 from "./img/multiple5.png";
import multiple6 from "./img/multiple6.png";
import multiple7 from "./img/multiple7.png";
import multiple8 from "./img/multiple8.png";
import multiple9 from "./img/multiple9.png";

import GaNuongDua from "./img/GaNuongDua.png";
import PhoMai from "./img/pizzphomai.png";
import XucXichY from "./img/sucxichy.png";
import ThitVaNam from "./img/thitnguoiNam.png";
import Hawailian from "./img/hawailian.png";
import Raucu from "./img/raucu.png";
import HaiSanCocktail from "./img/haisanCoctail.png";
import HaiSanCaoCap from "./img/haisanPrenimum.png";
import HaiSanNhietDoi from "./img/haisannhietdoi.png";
import TomCocktail from "./img/haisantomcoctail.png";
import Aloha from "./img/thapcamAloha.png";
import ThitXongKhoi from "./img/thitxongkhoi.png";
import ThitNguoiCanada from "./img/thitnguoiCanada.png";
import GaNuong3Vi from "./img/ganuong3vi.png";
import Thit5loai from "./img/5loaithitdacbiet.png";
import Thit5loaiRaucu from "./img/5loaithitdacbietvaraucu.png";
export const lists = {
  tradipizza: [
    {
      id: 1,
      name: "Grilled Chicken",
      type: "Traditional Pizza",
      prices: 5.5,
      img: [GaNuongDua, multiple1, multiple2, multiple3],
      description:
        "Chicken has the sweet taste of pineapple combined with the hot spicy taste.",
    },
    {
      id: 2,
      name: "Cheese Pizza",
      type: "Traditional Pizza",
      prices: 7.5,
      img: [PhoMai, multiple1, multiple2, multiple3],
      description: "Pizza with lots of cheese for you to enjoy.",
    },
    {
      id: 3,
      name: "Sausage Pizza",
      type: "Traditional Pizza",
      prices: 9.5,
      img: [XucXichY, multiple1, multiple2, multiple3],
      description: "Spicy Italian sausage on tomato sauce",
    },
    {
      id: 4,
      name: "Ham & Mushroom",
      type: "Traditional Pizza",
      prices: 6.5,
      img: [ThitVaNam, multiple1, multiple2, multiple3],
      description:
        "Pizza with ham and mushrooms gives you an interesting experience.",
    },
    {
      id: 5,
      name: "Hawaiian Pizza",
      type: "Traditional Pizza",
      prices: 10.5,
      img: [Hawailian, multiple1, multiple2, multiple3],
      description:
        "Ham, bacon and pineapple combine together make you happy all day long.",
    },
    {
      id: 6,
      name: "Vegetable Pizza",
      type: "Traditional Pizza",
      prices: 11.5,
      img: [Raucu, multiple1, multiple2, multiple3],
      description:
        "Onion, bell pepper, mushroom, pineapple, tomato.Very delicious.",
    },
  ],
  seafoodpizza: [
    {
      id: 7,
      name: "Seafood Cocktail",
      type: "Seafood Pizza",
      prices: 6.35,
      img: [HaiSanCocktail, multiple4, multiple5, multiple6],
      description: "Shrimp, crab, ham,... with Thousand Island sauce.",
    },
    {
      id: 8,
      name: "Premium Seafood",
      type: "Seafood Pizza",
      prices: 8.35,
      img: [HaiSanCaoCap, multiple4, multiple5, multiple6],
      description: "Shrimp, crab, squid and clams with Marinara sauce.",
    },
    {
      id: 9,
      name: "Tropical Seafood",
      type: "Seafood Pizza",
      prices: 5.35,
      img: [HaiSanNhietDoi, multiple4, multiple5, multiple6],
      description: "Shrimp, crab, ham,... with Thousand Island sauce.",
    },
    {
      id: 10,
      name: "Shrimp Pizza",
      type: "Seafood Pizza",
      prices: 7.35,
      img: [TomCocktail, multiple4, multiple5, multiple6],
      description:
        "Shrimp with mushrooms, pineapple, tomato and Thousand Island sauce.",
    },
  ],
  mixedpizza: [
    {
      id: 11,
      name: "Aloha Pizza",
      type: "Mixed Pizza",
      prices: 5.9,
      img: [Aloha, multiple7, multiple8, multiple9],
      description:
        "Ham, spicy pepper sausage and pineapple blended with Thousand Island sauce",
    },
    {
      id: 12,
      name: "Bacon Pizza",
      type: "Mixed Pizza",
      prices: 7.9,
      img: [ThitXongKhoi, multiple7, multiple8, multiple9],
      description: "Ham, bacon and two vegetables of green peppers, tomatoes",
    },
    {
      id: 13,
      name: "Canadian Ham",
      type: "Mixed Pizza",
      prices: 6.9,
      img: [ThitNguoiCanada, multiple7, multiple8, multiple9],
      description: "The combination of cold meat and sweet corn",
    },
    {
      id: 14,
      name: "Three Flavors",
      type: "Mixed Pizza",
      prices: 8.9,
      img: [GaNuong3Vi, multiple7, multiple8, multiple9],
      description:
        "Grilled chicken, garlic butter chicken and chicken marinated in mushroom sauce",
    },
    {
      id: 15,
      name: "Special Meats",
      type: "Mixed Pizza",
      prices: 10.9,
      img: [Thit5loai, multiple7, multiple8, multiple9],
      description: "Typical Italian beef and pork sausage, ham, bacon",
    },
    {
      id: 16,
      name: "Meats & Vegetables",
      type: "Mixed Pizza",
      prices: 11.9,
      img: [Thit5loaiRaucu, multiple7, multiple8, multiple9],
      description: "Beef sausage, ham, bacon,...and a rich world of vegetables",
    },
  ],
  bestseller: [
    {
      id: 2,
      name: "Cheese Pizza",
      type: "Traditional Pizza",
      prices: 7.05,
      img: [sellerTradi, multiple1, multiple2, multiple3],
      description: "Pizza with lots of cheese for you to enjoy.",
    },
    {
      id: 10,
      name: "Shrimp Pizza",
      type: "Seafood Pizza",
      prices: 7.35,
      img: [sellerSea, multiple4, multiple5, multiple6],
      description:
        "Shrimp with mushrooms, pineapple, tomato and Thousand Island sauce.",
    },
    {
      id: 12,
      name: "Bacon Pizza",
      type: "Mixed Pizza",
      prices: 7.9,
      img: [sellerMixed, multiple7, multiple8, multiple9],
      description: "Ham, bacon and two vegetables of green peppers, tomatoes",
    },
  ],
  AllProducts: [
    {
      id: 1,
      name: "Grilled Chicken",
      type: "Traditional Pizza",
      prices: 5.5,
      img: [GaNuongDua, multiple1, multiple2, multiple3],
      description:
        "Chicken has the sweet taste of pineapple combined with the hot spicy taste.",
    },
    {
      id: 2,
      name: "Cheese Pizza",
      type: "Traditional Pizza",
      prices: 7.5,
      img: [PhoMai, multiple1, multiple2, multiple3],
      description: "Pizza with lots of cheese for you to enjoy.",
    },
    {
      id: 3,
      name: "Sausage Pizza",
      type: "Traditional Pizza",
      prices: 9.5,
      img: [XucXichY, multiple1, multiple2, multiple3],
      description: "Spicy Italian sausage on tomato sauce",
    },
    {
      id: 4,
      name: "Ham & Mushroom",
      type: "Traditional Pizza",
      prices: 6.5,
      img: [ThitVaNam, multiple1, multiple2, multiple3],
      description:
        "Pizza with ham and mushrooms gives you an interesting experience.",
    },
    {
      id: 5,
      name: "Hawaiian Pizza",
      type: "Traditional Pizza",
      prices: 10.5,
      img: [Hawailian, multiple1, multiple2, multiple3],
      description:
        "Ham, bacon and pineapple combine together make you happy all day long.",
    },
    {
      id: 6,
      name: "Vegetable Pizza",
      type: "Traditional Pizza",
      prices: 11.5,
      img: [Raucu, multiple1, multiple2, multiple3],
      description:
        "Onion, bell pepper, mushroom, pineapple, tomato.  Very delicious.",
    },
    {
      id: 7,
      name: "Seafood Cocktail",
      type: "Seafood Pizza",
      prices: 6.35,
      img: [HaiSanCocktail, multiple4, multiple5, multiple6],
      description: "Shrimp, crab, ham,... with Thousand Island sauce.",
    },
    {
      id: 8,
      name: "Premium Seafood",
      type: "Seafood Pizza",
      prices: 8.35,
      img: [HaiSanCaoCap, multiple4, multiple5, multiple6],
      description: "Shrimp, crab, squid and clams with Marinara sauce.",
    },
    {
      id: 9,
      name: "Tropical Seafood",
      type: "Seafood Pizza",
      prices: 5.35,
      img: [HaiSanNhietDoi, multiple4, multiple5, multiple6],
      description: "Shrimp, crab, ham,... with Thousand Island sauce.",
    },
    {
      id: 10,
      name: "Shrimp Pizza",
      type: "Seafood Pizza",
      prices: 7.35,
      img: [TomCocktail, multiple4, multiple5, multiple6],
      description:
        "Shrimp with mushrooms, pineapple, tomato and Thousand Island sauce.",
    },
    {
      id: 11,
      name: "Aloha Pizza",
      type: "Mixed Pizza",
      prices: 5.9,
      img: [Aloha, multiple7, multiple8, multiple9],
      description:
        "Ham, spicy pepper sausage and pineapple blended with Thousand Island sauce",
    },
    {
      id: 12,
      name: "Bacon Pizza",
      type: "Mixed Pizza",
      prices: 7.9,
      img: [ThitXongKhoi, multiple7, multiple8, multiple9],
      description: "Ham, bacon and two vegetables of green peppers, tomatoes",
    },
    {
      id: 13,
      name: "Canadian Ham",
      type: "Mixed Pizza",
      prices: 6.9,
      img: [ThitNguoiCanada, multiple7, multiple8, multiple9],
      description: "The combination of cold meat and sweet corn",
    },
    {
      id: 14,
      name: "Three Flavors",
      type: "Mixed Pizza",
      prices: 8.9,
      img: [GaNuong3Vi, multiple7, multiple8, multiple9],
      description:
        "Grilled chicken, garlic butter chicken and chicken marinated in mushroom sauce",
    },
    {
      id: 15,
      name: "Special Meats",
      type: "Mixed Pizza",
      prices: 10.9,
      img: [Thit5loai, multiple7, multiple8, multiple9],
      description: "Typical Italian beef and pork sausage, ham, bacon",
    },
    {
      id: 16,
      name: "Meats & Vegetables",
      type: "Mixed Pizza",
      prices: 11.9,
      img: [Thit5loaiRaucu, multiple7, multiple8, multiple9],
      description: "Beef sausage, ham, bacon,...and a rich world of vegetables",
    },
  ],
};
