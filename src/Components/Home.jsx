import React from 'react'

function Home() {
  return (
  <div className="w-full">
  <div className="relative w-full bg-white">
    <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
      <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
        <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
          People who care about your growth
        </h1>
        <p className="mt-8 text-lg text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          modi blanditiis dolores quasi eaque explicabo!
        </p>
      </div>
      <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
        <img
          className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9] lg:rounded-l-full"
          src="https://images.pexels.com/photos/22824/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600 "
          alt=""
        />
      </div>
    </div>
  </div>
  <div className="mx-auto my-32 max-w-7xl px-2 lg:px-8">
    <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
      <div>
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
          <svg
            className="h-9 w-9 text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
            ></path>
          </svg>
        </div>
        <h3 className="mt-8 text-lg font-semibold text-black">Secured Payments</h3>
        <p className="mt-4 text-sm text-gray-600">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
      <div>
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
          <svg
            className="h-9 w-9 text-orange-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </div>
        <h3 className="mt-8 text-lg font-semibold text-black">
          Fast &amp; Easy  Delivery
        </h3>
        <p className="mt-4 text-sm text-gray-600">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
      <div>
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-9 w-9 text-green-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            ></path>
          </svg>
        </div>
        <h3 className="mt-8 text-lg font-semibold text-black">
          Handcrafted
        </h3>
        <p className="mt-4 text-sm text-gray-600">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
      <div>
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
          <svg
            className="h-9 w-9 text-red-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            ></path>
          </svg>
        </div>
        <h3 className="mt-8 text-lg font-semibold text-black">Filter Blocks</h3>
        <p className="mt-4 text-sm text-gray-600">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
    </div>
  </div>
 
</div>

  )
}

export default Home