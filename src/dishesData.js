import greekSalad from "../src/images/greek salad.jpg"
import lemonPie from "../src/images/lemon dessert.jpg"
import {ReactComponent as Bruschetta} from "../src/images/bruchetta.svg"

const dishes = [
  {
    id: 0,
    name: "Greek Salada",
    price: "12,99",
    descriptioin: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.",
    order: "Order a delivery",
    image: greekSalad
  },
  {
    id: 1,
    name: "Bruschetta",
    price: "5,99",
    descriptioin: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    order: "Order a delivery",
    image: <Bruschetta />
  },
  {
    id: 2,
    name: "Lemon Dessert",
    price: "5,00",
    descriptioin: "This comes straight from grandma's recipe book; every last ingredient has been sourced and is as authentic as can be imagined.",
    order: "Order a delivery",
    image: lemonPie
}
]

export default dishes
