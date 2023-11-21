
import { Link, NavLink,useNavigate} from 'react-router-dom' 
import React from 'react'
import { Menu, X } from 'lucide-react'
import Logo from '../assets/logo.jpeg'


 
const menuItems = [
  {
    name: 'Home',
    to: '',
  },
  {
      name: 'About',
      to: 'About',
  },
  {
    name: 'Contact',
    to: 'Contact',
  },
  {
    name:'Product',
    to: 'Product', 
  },
  
]

 function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false) 
  const [isAuthenticated, setIsAuthenticated] = React.useState(true);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  
  const handleSignIn = () => {
    setIsAuthenticated(true);
    navigate("/signup") 
  }
   
  const Cartclick = () =>{
    navigate("/Cart")
  }
  

  return (
    <div className="relative w-full bg-white ">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2 ">
          <span>
            
              <img src={Logo} alt=""  className='h-20 w-70 my-0 py-0'/>  
          </span>
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name} className='font-bold text-lg'>
                <NavLink
                  to={item.to}
                  className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 lg:hover:underline`
                   }
                  
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
        {!isAuthenticated ? (
        <button onClick={handleSignIn}
        type="button"
            className="rounded-lg bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >Sign Up</button>
      ) : (
        <>
        <div className='flex'>
          <Link  to='Cart' >
        <img
        className="inline-block h-[50px] w-[50px] rounded-full "
        src="https://media.istockphoto.com/id/1062126574/vector/shopping-cart-icon.jpg?s=612x612&w=0&k=20&c=nM40s2XAvh-YX0r-rNPNFTNSDfVCfMxrVnem783qPnQ="
        alt="Cart"
        
      />
      </Link>
        </div>
        </>
      )}
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span>
                    <img src={Logo} alt=""  className='h-20 w-20 '/>  
                    </span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        className={({isActive}) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 lg:hover:underline`
                     }
                      >
                        <span className="ml-3 text-base font-medium text-gray-900  hover:underline hover:text-slate-400">
                          {item.name}
                        </span>
                      
                     </NavLink>
                    ))}
                  </nav>
                </div>
                {!isAuthenticated ? (
        <button onClick={handleSignIn}
        type="button"
            className="mt-4 w-[100px] rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >Sign Up</button>
      ) : (
        <NavLink to='Cart'
        className={({isActive}) =>
        `block py-2 pr-4 pl-3 duration-200 mt-4 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 lg:hover:underline`
     }>
           <span className="ml-3  text-base font-medium text-gray-900  hover:underline hover:text-slate-400">
             My Cart
           </span>
           </NavLink>
      )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
 export default Navbar
