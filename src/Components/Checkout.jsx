import React from 'react'
import { Home, ChevronRight } from 'lucide-react'
import { X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const products = [
    {
      id: 1,
      Qty: '1',
      name: 'Bike',
    price: '250',
    img: "https://images.pexels.com/photos/8318189/pexels-photo-8318189.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    description: 'It is a wall clock made from iron and heavy materials',
    },
    {
      id: 2,
      Qty: '1',
      name: 'Bike',
      price: '250',
      img: "https://images.pexels.com/photos/18527411/pexels-photo-18527411/free-photo-of-man-decorating-ganesha-statue-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      description: 'It is a wall clock made from iron and heavy materials',
    },
    {
      id: 3,
      Qty: '1',
      name: 'Bike',
      price: '250',
      img: "https://images.pexels.com/photos/15496145/pexels-photo-15496145/free-photo-of-grayscale-photo-of-buddha-statue.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      description: 'It is a wall clock made from iron and heavy materials',
    },
    
  ]
  const Nav = [ 
    {
     name:'Cart',
     to:'Cart',
     
    },
    {
       name: 'Confirmation',
       to:'Checkout'

    }
    ]

function Checkout() {

  const [isOpencard, setIsOpencard] = useState(false);

  const toggleDropdowncard = () => {
    setIsOpencard(!isOpencard);
  };
  const [isOpenupi, setIsOpenupi] = useState(false);

  const toggleDropdownupi = () => {
    setIsOpenupi(!isOpenupi);
  };

  const [isOpencod, setIsOpencod] = useState(false);

  const toggleDropdowncod = () => {
    setIsOpencod(!isOpencod);
  };

  return (
    <div>
    <div className="mx-auto my-4 max-w-4xl md:my-6">
        <nav className="mb-8 flex " aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <div className="flex items-center">
            <li className="inline-flex items-center ">
              <NavLink
                to='/'
                className="ml-1 inline-flex text-lg font-medium text-gray-900 hover:underline md:ml-2"
              >
                <Home size={25} className="mr-2 text-gray-900 hover:text-orange-700" />
              </NavLink>
              <ChevronRight size={25} className="mr-2 text-gray-600" />
            </li>
            <li className="inline-flex items-center">
              <NavLink
                to='/Cart'
                className="ml-1 inline-flex text-[25px] font-medium text-orange-700 hover:underline   md:ml-2"
              >
                <span className="mr-2 text-gray-900 hover:text-orange-700 " >
                  Cart
                </span>
              </NavLink>
              <ChevronRight size={25} className="mr-2 text-gray-600" />
            </li>
            <li className="inline-flex items-center">
              <NavLink
                to=''
                className="ml-1 inline-flex text-[25px] font-medium text-orange-700 hover:underline md:ml-2"
              >
                <span className="mr-2 text-orange-700 underline" > Order Conformation</span>
              </NavLink>
            </li>
            </div>
            </ol>
            </nav>
    <div className="overflow-hidden  rounded-xl shadow">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Contact Info */}
        <div className="px-5 py-6 text-gray-900 md:px-8">
          <div className="flow-root">
            <div className="-my-6 divide-y divide-gray-200">
              <div className="py-6">
                <form>
                  <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
                    <div>
                      <h3
                        id="contact-info-heading"
                        className="text-lg font-semibold text-gray-900"
                      >
                        Contact information
                      </h3>

                      <div className="mt-4 w-full">
                        <label
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          htmlFor="name"
                        >
                          Full Name
                        </label>
                        <input
                          className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="text"
                          placeholder="Enter your name"
                          id="name"
                        ></input>
                      </div>
                    </div>
                    <hr className="my-8" />
                    <div className="mt-10">
                      <h3 className="text-lg font-semibold text-gray-900">Shipping address</h3>

                      <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3">
                        <div className="sm:col-span-3">
                          <label
                            htmlFor="address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Address
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              id="address"
                              name="address"
                              autoComplete="street-address"
                              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="city"
                            className="block text-sm font-medium text-gray-700"
                          >
                            City
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              id="city"
                              name="city"
                              autoComplete="address-level2"
                              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="region"
                            className="block text-sm font-medium text-gray-700"
                          >
                            State / Province
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              id="region"
                              name="region"
                              autoComplete="address-level1"
                              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="postal-code"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Postal code
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              id="postal-code"
                              name="postal-code"
                              autoComplete="postal-code"
                              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                          </div>
                        </div>
                      </div>
                      <hr className="my-8" />
                    </div>
                    <div className="mt-10">
                      <h3 className="text-lg font-semibold text-gray-900">Payment </h3>
                      <hr className="my-8" />
                      <button
                             type="button"
                             onClick={toggleDropdowncard}
                             className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50  "
                             id="options-menu"
                             aria-haspopup="true"
                             aria-expanded="true"
                             > Credit/Debit Cart</button>
                              {isOpencard && (
                                    <div
                                    
                                       role="menu"
                                       aria-orientation="vertical"
                                      >  <div className="mt-6 grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-4">
                                      <div className="col-span-3 sm:col-span-4">
                                        <label
                                          htmlFor="cardNum"
                                          className="block text-sm font-medium text-gray-700"
                                        >
                                          Card number
                                        </label>
                                        <div className="mt-1">
                                          <input
                                            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="text"
                                            placeholder="4242 4242 4242 4242"
                                            id="cardNum"
                                          ></input>
                                        </div>
                                      </div>
                                      <div className="col-span-2 sm:col-span-3">
                                        <label
                                          htmlFor="expiration-date"
                                          className="block text-sm font-medium text-gray-700"
                                        >
                                          Expiration date (MM/YY)
                                        </label>
                                        <div className="mt-1">
                                          <input
                                            type="date"
                                            name="expiration-date"
                                            id="expiration-date"
                                            autoComplete="cc-exp"
                                            className="block h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                          />
                                        </div>
                                      </div>
              
                                      <div>
                                        <label
                                          htmlFor="cvc"
                                          className="block text-sm font-medium text-gray-700"
                                        >
                                          CVC
                                        </label>
                                        <div className="mt-1">
                                          <input
                                            type="text"
                                            name="cvc"
                                            id="cvc"
                                            autoComplete="csc"
                                            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  <div className="mt-10 flex justify-end border-t border-gray-200 pt-6">
                       <button
                        type="button"
                        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        Make payment
                      </button>
                                   </div>
                    </div>) }
                    <button
                             type="button"
                             onClick={toggleDropdownupi}
                             className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 mt-2 "
                             id="options-menu"
                             aria-haspopup="true"
                             aria-expanded="true"
                             > UPI</button>
                             {isOpenupi && (
                                    <div
                                    
                                       role="menu"
                                       aria-orientation="vertical"
                                      > 
                                      <div className="col-span-3 sm:col-span-4">
                                        <label
                                          htmlFor=" Upi"
                                          className="block text-sm font-medium text-gray-700 mt-2"
                                        >
                                          Enter UPI
                                        </label>
                                        <div className="mt-1">
                                          <input
                                            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="text"
                                            placeholder=""
                                            id="upi"
                                          ></input>
                                        </div>
                                      </div>
                                      <div className="mt-10 flex justify-end  pt-0 pb-4">
                       <button
                        type="button"
                        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        Make payment
                      </button>
                                   </div>
                                </div>)}
                                        
                                <button
                             type="button"
                             onClick={toggleDropdowncod}
                             className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 mt-2 "
                             id="options-menu"
                             aria-haspopup="true"
                             aria-expanded="true"
                             > Cash On Delivery</button>
                              {isOpencod && (
                                    <div
                                    
                                       role="menu"
                                       aria-orientation="vertical"
                                      > 
                                      <button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-black text-sm font-medium text-white hover:bg-gray-700 mt-2 ">Place Order</button>
                                      </div>
                              )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Product List */}
        <div className="bg-gray-100 px-5 py-6 md:px-8">
          <div className="flow-root">
            <ul className="-my-7 divide-y divide-gray-200">
              {products.map((product) => (
                <li
                  key={product.id}
                  className="flex items-stretch justify-between space-x-5 py-7"
                >
                  <div className="flex flex-1 items-stretch">
                    <div className="flex-shrink-0">
                      <img
                        className="h-20 w-20 rounded-lg border border-gray-200 bg-white object-contain"
                        src={product.img}
                        alt={product.img}
                      />
                    </div>
                    <div className="ml-5 flex flex-col justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-bold">{product.name}</p>
                        <p className="mt-1.5 text-sm font-medium text-gray-500">
                        ₹{product.price}-/
                        </p>
                        <p className="mt-1.5 text-sm font-medium text-gray-700">
                        {product.description}
                        </p>
                      </div>
                      <p className="mt-4 text-xs font-medium ">x {product.Qty}</p>
                    </div>
                  </div>
                  <div className="ml-auto flex flex-col items-end justify-between">
                    <button
                      type="button"
                      className="-m-2 inline-flex rounded p-2 text-gray-400 transition-all duration-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                    >
                      <span className="sr-only">Remove</span>
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <hr className="mt-6 border-gray-200" />
          <ul className="mt-6 space-y-3">
            <li className="flex items-center justify-between text-gray-600">
              <p className="text-sm font-medium">Sub total</p>
              <p className="text-sm font-medium">₹1,14,399</p>
            </li>
            <li className="flex items-center justify-between text-gray-900">
              <p className="text-sm font-medium ">Total</p>
              <p className="text-sm font-bold ">₹1,14,399</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
 

  )
}

export default Checkout