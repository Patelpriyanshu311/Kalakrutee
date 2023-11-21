import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ProductItems = [
  {
    name: 'Bike',
    price: '250',
    img: "https://images.pexels.com/photos/8318189/pexels-photo-8318189.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    description: 'It is a wall clock made from iron and heavy materials',
  },
  {
    name: 'Bike',
    price: '250',
    img: "https://images.pexels.com/photos/18527411/pexels-photo-18527411/free-photo-of-man-decorating-ganesha-statue-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    description: 'It is a wall clock made from iron and heavy materials',
  },
  {
    name: 'Bike',
    price: '250',
    img: "https://images.pexels.com/photos/15496145/pexels-photo-15496145/free-photo-of-grayscale-photo-of-buddha-statue.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    description: 'It is a wall clock made from iron and heavy materials',
  },
  {
    name: 'Bike',
    price: '250',
    img: "https://images.pexels.com/photos/247163/pexels-photo-247163.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    description: 'It is a wall clock made from iron and heavy materials',
  },
  {
    name: 'Bike',
    price: '250',
    img: "https://images.pexels.com/photos/39348/musician-trumpet-metal-snowman-39348.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: 'It is a wall clock made from iron and heavy materials',
  },
  // ... (other products)
];

function Product() {
  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-2 my-4  justify-items-center '>
        {ProductItems.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4 rounded-md border   ">
            <img
              src={item.img}
              alt={`Image of ${item.name}`}
              className="h-[200px] w-full rounded-t-md object-cover"
            />
            <div className="p-4">
              <h1 className="inline-flex items-center text-lg font-semibold">
                { item.name }
              </h1>
              <p className="mt-3 text-sm text-gray-600">{item.description}</p>
              <p className="mt-3 text-md text-gray-600">{item.price}/-</p>
              <div className="mt-4">
                {/* Tags or labels */}
              </div>
              <button
                type="button"
                className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Add to Cart
              </button>
              <button
                type="button"
                className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Buy 
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
