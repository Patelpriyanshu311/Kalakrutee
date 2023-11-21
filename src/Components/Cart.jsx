import React from 'react'
import { Trash, Heart } from 'lucide-react'
import { Link,useNavigate } from 'react-router-dom'


const products = [
    {
      id: 1,
      name: 'Bike',
    price: '250',
    img: "https://images.pexels.com/photos/8318189/pexels-photo-8318189.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    description: 'It is a wall clock made from iron and heavy materials',
    },
    {
      id: 2,
      name: 'Bike',
      price: '250',
      img: "https://images.pexels.com/photos/18527411/pexels-photo-18527411/free-photo-of-man-decorating-ganesha-statue-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      description: 'It is a wall clock made from iron and heavy materials',
    },
    {
      id: 3,
      name: 'Bike',
      price: '250',
      img: "https://images.pexels.com/photos/15496145/pexels-photo-15496145/free-photo-of-grayscale-photo-of-buddha-statue.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      description: 'It is a wall clock made from iron and heavy materials',
    },
  ]

function Cart() {

  const navigate = useNavigate();

  const Backtoshop = () =>{
    navigate("/Product")
 
  }
  const Checkout = () =>{
    navigate("/Checkout")
  }

  return (
    <div className="mx-auto flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2">
      <h2 className="text-3xl font-bold">Your cart</h2>
      <p className="mt-3 text-sm font-medium text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eius repellat ipsam, sit
        praesentium incidunt.
      </p>
      <ul className="flex flex-col divide-y divide-gray-200">
        {products.map((product) => (
          <li key={product.id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32 "
                src={product.img}
                alt={product.name}
              />
              <div className="flex w-full flex-col justify-between pb-4">
                <div className="flex w-full justify-between space-x-2 pb-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">{product.name}</h3>
                    <p className="text-sm">{product.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">₹{product.price}/-</p>
                  </div>
                </div>
                <div className="flex divide-x text-sm hover:text-red-700">
                  <button type="button" className="flex items-center space-x-2 px-2 py-1 pl-0">
                    <Trash size={20} />
                    <span>Remove</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="space-y-1 text-right">
        <p>
          Total amount:
          <span className="font-semibold"> ₹750/-</span>
        </p>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          onClick={Backtoshop}
          type="button"
          className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:bg-black hover:text-white"
        >
          Back to shop
        </button>
       
        <button
          onClick={Checkout}
          type="button"
          className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black  hover:bg-black hover:text-white"
        >
          Checkout
        </button>
      </div>
    </div>
  )
}

export default Cart