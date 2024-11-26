import {ReactComponent as BruschettaSVG} from "../images/bruchetta.svg"
const dishesData = [
  {
    id: 1,
    name: "Greek Salada",
    price: "12,99",
    descriptioin: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.",
    order: "Order a delivery",
    image: "../images/greek salad.jpg"
  },
  {
    id: 1,
    name: "Bruschetta",
    price: "5,99",
    descriptioin: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    order: "Order a delivery",
    image: <BruschettaSVG />
  },
  {
    id: 1,
    name: "Lemon Dessert",
    price: "5,00",
    descriptioin: "This comes straight from grandma's recipe book; every last ingredient has been sourced and is as authentic as can be imagined.",
    order: "Order a delivery",
    image: "../images/lemon dessert.jpg"
  },
]
export default dishesData;
