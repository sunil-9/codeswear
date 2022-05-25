import React from 'react'

const Order = ({cart,subTotal}) => {
  return (
<section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">Wear The Code</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">order Id: #00908108</h1>
        <p className='my-3'>Your order have been successfully placed!</p>
        <div className="flex mb-4">
          <a className="flex-grow 500 border-b-2  py-2 text-lg px-1">Description</a>
          <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Price</a>
          <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Quentity</a>
        </div>
       {Object.keys(cart).map((k) => {
                            // console.log(cart[k].itemCode, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant, cart[k].imgUrl + " are the data")
                            return <div key={k}  className="flex mb-4">
          <a className="flex-grow 500   py-2 text-lg px-1">{cart[k].name}</a>
          <a className="flex-grow  border-gray-300 py-2 text-lg px-1">रु {cart[k].price }</a>
          <a className="flex-grow  border-gray-300 py-2 text-lg px-1">{cart[k].qty}</a>
        </div>})}

          <span className="title-font font-bold text-2xl text-gray-900">Total: रु {subTotal}</span>
          <button className="flex mt-2 text-white bg-purple-500 border-0 py-2 px-6 mt-3 focus:outline-none hover:bg-purple-600 rounded">Track your order</button>
       
      </div>
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/>
    </div>
  </div>
</section>  )
}

export default Order