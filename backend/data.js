import bcrypt from 'bcryptjs';

const data = {
  users:[
    {
      name:'Dami  ana',
      email:'admin@example.com',
      password: bcrypt.hashSync('1234',8),
      isAdmin:true
    },
    {
      name:'John',
      email:'user@example.com',
      password: bcrypt.hashSync('5678',8),
      isAdmin:false
    },
    {
      name:'Chris',
      email:'chris@chris.com',
      password: 'aA!qw234e',
      isAdmin:false
    }
  ],
  products: [
    {
      name: "Nike Slim Shirt",
      category: "Shirts",
      image: "https://picsum.photos/200/300",
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Adidas Fit Shirt",
      category: "Shirts",
      image: "https://picsum.photos/200/300?a=1",
      price: 100,
      countInStock: 20,
      brand: "Adidas",
      rating: 4.0,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Lacoste Free Shirt",
      category: "Shirts",
      image: "https://picsum.photos/200/300?b=2",
      price: 220,
      countInStock: 0,
      brand: "Lacoste",
      rating: 4.8,
      numReviews: 17,
      description: "high quality product",
    },
    {
      name: "Nike Slim Pant",
      category: "Pants",
      image: "https://picsum.photos/200/300?c=3",
      price: 78,
      countInStock: 15,
      brand: "Nike",
      rating: 4.5,
      numReviews: 14,
      description: "high quality product",
    },
    {
      name: "Puma Slim Pant",
      category: "Pants",
      image: "https://picsum.photos/200/300?d=4",
      price: 65,
      countInStock: 5,
      brand: "Puma",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Adidas Fit Pant",
      category: "Pants",
      image: "https://picsum.photos/200/300?e=5",
      price: 139,
      countInStock: 12,
      brand: "Adidas",
      rating: 4.5,
      numReviews: 15,
      description: "high quality product",
    },
  ],
};
export default data;
