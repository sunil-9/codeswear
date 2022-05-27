import React from 'react'
import Link from 'next/Link'
import { AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { BsFillBagCheckFill, BsFillCartCheckFill } from 'react-icons/bs';
import { MdAccountCircle,  } from 'react-icons/md';
import { useRef } from 'react';
import Image from 'next/image'


const Navbar = ( {cart, addToCart, removeFromCart, clearCart, subTotal}) => {
  // console.log(cart, addToCart, removeFromCart, clearCart, subTotal)
  const toggleCart = () => {
    // alert('button clicked')
    if (ref.current.classList.contains('hidden')) {
      ref.current.classList.remove('hidden')
    }
    else if (!ref.current.classList.contains('hidden')) {
      ref.current.classList.add('hidden')
    }
  }
  const ref = useRef()
  return (

    <div className="flex flex-col sticky top-0 z-10 md:flex-row md:justify-start items-center py-2 shadow-md  bg-white">
      <div className="logo mx-5">
        <Link href='/'><a className="flex title-font font-medium items-center text-purple-800 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-purple-800 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Wear The Code</span>
        </a>
        </Link>
      </div>
      <div className="nav ">
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href='/tshirts'><a className="mr-5 hover:text-purple-500 font-bold">Tshirts</a></Link>
          <Link href='/mugs'><a className="mr-5 hover:text-purple-500  font-bold">Mugs</a></Link>
          <Link href='/stickers'><a className="mr-5 hover:text-purple-500  font-bold">Stickers</a></Link>
          <Link href='/hoodies'><a className="mr-5 hover:text-purple-500  font-bold">Hoodies</a></Link>
        </nav>
      </div>
      <Link href='/login'>
      <div  className=" cart absolute cursor-pointer   focus:outline-none hover:bg-gray-200 md:mx-5 md:mt-0 md:right-6 right-2">
        <MdAccountCircle className='font-bold text-2xl mt-2  text-purple-800' />
      </div>
      </Link>
      <div onClick={toggleCart} className=" cart absolute cursor-pointer  focus:outline-none hover:bg-gray-200 md:mt-0 mt-8 md:right-3 right-2">
        <BsFillCartCheckFill className='font-bold text-2xl mt-2  text-purple-800' />
      </div>


      <div ref={ref} className="h-[100vh] sidebar absolute top-0 right-0 bg-purple-300 p-10 hidden ">
        <span onClick={toggleCart} className='absolute top-5 right-5 text-2xl cursor-pointer text-purple-800'><AiFillCloseCircle /></span>
        <h2 className='font-bold text-lg text-center'> Shoping Cart</h2>
        <ol className="list-decimal font-semibold">
          {(Object.keys(cart).length ==0 && Object.keys(cart)!=null) && <div className='mt-2 flex justify-center'>The Cart is Empty!</div>}
        
       { Object.keys(cart).map((k)=>{ 
        //  console.log(cart[k].itemCode,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant,cart[k].imgUrl)
        return <li key={k}>
         
            <div className="item flex my-5">
            <div className="w-2/3 font-semibold"> {cart[k].name}</div>
            
              <div className="flex font-semibold items-center justify-center w-1/3 text-lg"><AiFillMinusCircle onClick={()=>{removeFromCart(cart[k].itemCode,cart[k].qty)}} className='cursor-pointer text-purple-800' />
                <span className='mx-2 text-sm'>{cart[k].qty}</span><AiFillPlusCircle onClick={()=>{addToCart(cart[k].itemCode,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant,cart[k].imgUrl)}} className='cursor-pointer text-purple-800' />
              </div>
            </div>
            { console.log(cart[k].imgUrl)}
              <div className="font-semibold"> <Image alt='\' src={cart[k].imgUrl} height={100} width={100} /> </div>
          </li>
       }) }
     

        </ol>
        <div className="flex py-2 ">
                            <span className="font-semibold ">SubTotal: रु {subTotal}</span>
                        </div>
        <div className="flex">
       <Link href='/checkout'><button onClick={toggleCart} className="flex mx-auto mt-5 mr-1 bg-purple-500 border-0 py-2 px-3 focus:outline-none text-purple-50 hover:bg-purple-600 rounded text-base"><BsFillBagCheckFill className='m-1' />Checkout</button></Link>
          <button onClick={clearCart} className="flex mx-auto mt-5 ml-1 bg-purple-500 border-0 py-2 px-3 focus:outline-none text-purple-50 hover:bg-purple-600 rounded text-base">Clear Cart</button>
       
       

        </div>

      </div>

    </div>
  )
}

export default Navbar