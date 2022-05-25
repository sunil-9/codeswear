import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Featured from '../components/Featured'
import Hero1 from '../components/Hero1'
export default function Home() {
  return (
    <div >     
      <img className='m-auto py-10 container' src="/home.jpg" alt="" />
      <h2 className='md:text-3xl text-2xl font-medium title-font text-gray-900 text-center pt-16'>Featured Product</h2>
      <Featured/>
      <Hero1/>
     
    </div>
  )
}
