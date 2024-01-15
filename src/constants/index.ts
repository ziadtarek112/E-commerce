import {Product} from '../models/index'

export const images = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
];


export const cartData : Product[] = [
    {
        id : 1,
        img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600" ,
        img2: "https://images.pexels.com/photos/1972116/pexels-photo-1972116.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Winter Coat",
        desc : 'lore ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        isNew: true,
        oldPrice: 19,
        price: 12,
    },
    {
        id : 2,
        img: "https://images.pexels.com/photos/1972116/pexels-photo-1972116.jpeg?auto=compress&cs=tinysrgb&w=1600",
        img2: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
        desc : 'lore ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        title: "Long Dress",
        isNew: false,
        oldPrice: 27,
        price: 12,
    },
]

export const products:Product[] = [
    {
        id : 1,
        img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600" ,
        img2: "https://images.pexels.com/photos/1972116/pexels-photo-1972116.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Winter Coat",
        isNew: true,
        oldPrice: 19,
        price: 12,
    },
    {
        id : 2,
        img: "https://images.pexels.com/photos/1972116/pexels-photo-1972116.jpeg?auto=compress&cs=tinysrgb&w=1600",
        img2: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Long Dress",
        isNew: false,
        oldPrice: 27,
        price: 12,
    },
    {
        id : 3,
        img: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Summer Shirt",
        isNew: true,
        oldPrice: 30,
        price: 20,
    },
    {
        id : 4,
        img:"https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Black Suit ",
        isNew: false,
        oldPrice: 20,
        price: 10,
    }


]