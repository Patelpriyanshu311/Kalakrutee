import React from 'react'

function About() {
  return (
    <div>
  <div className="mx-auto max-w-7xl px-4">
    <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
      <p className="text-3xl font-bold text-gray-900   md:text-5xl md:leading-10 ">
        Made with love, right here in India
      </p>
      <p className="max-w-4xl text-base text-gray-600 md:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        veritatis voluptates neque itaque repudiandae sint, explicabo assumenda
        quam ratione placeat?
      </p>
    </div>
    <div className="w-full space-y-4">
      <img
        className="h-[200px] w-full rounded-xl object-cover md:h-full"
        src="https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/google-map.jpg"
        alt=""
      />
    </div>
    <div className="my-8 flex flex-col gap-y-6 md:flex-row lg:justify-around">
      <div className="flex flex-col space-y-3 md:w-4/4 lg:w-5/5 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-5 w-5"
        >
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        <p className="w-full text-xl font-semibold  text-gray-900">
          KalaKrutee
        </p>
        <p className="w-full text-base text-gray-700">Mon-Sat 10am to 7pm.</p>
        <p className="text-sm font-medium">
          Shop No.06,Ground Floor, Earth Aaron, Beside Bachubhai Crave Eatable, Ghogha Cricle to Rupani Road, Bhavnagar, Gujarat   
        </p>
      </div>
    </div>
    <hr className="mt-20" />
    <div className="flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row">
      <div className="space-y-6">
        <h1 className='text-2xl font-bold  text-gray-900 md:text-5xl md:leading-10' >Kalakrutee</h1>
        <p className="text-base text-gray-600 md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem possimus cum saepe natus ut dicta, animi repudiandae harum, doloribus voluptatum, porro illum. Quam distinctio facilis porro a, debitis ratione laboriosam!
        </p>
        <button
          type="button"
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Buy Now 
        </button>
      </div>
      <div className="md:mt-o mt-10 w-full">
        <img
          src=" https://images.pexels.com/photos/39348/musician-trumpet-metal-snowman-39348.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Getting Started"
          className="rounded-lg"
        />
      </div>
    </div>
  </div>
  <hr className="mt-6" />
</div>

  )
}

export default About