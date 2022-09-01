import React from "react";
import Link from "next/link";
import mongoose from "mongoose";
import Product from "../models/product";
const Tshirts = ({ products }) => {
  console.log(products);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 pt-16 mx-auto">
        <div className="flex flex-wrap md:ml-20">
          {Object.keys(products).map((p) => {
            return (
              <Link key={products[p]._id} href={"/product/" + products[p].slug}>
                <div className="lg:w-1/6 md:w-1/2 p-4 w-full  shadow-lg cursor-pointer m-5 place-content-center">
                  <a className="block  h-50 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="m-auto  h-[30vh] md:h-[36vh] block"
                      src={products[p].img}
                    />
                  </a>
                  <div className="mt-4 text-center ">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {products[p].category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {products[p].title}
                    </h2>
                    <p className="mt-1 line-through">
                      रु {parseInt(products[p].price) + 100}
                    </p>
                    <p className="mt-1">रु {products[p].price}</p>
                    <div className="mt-1">
                      {products[p].size.includes("S") && (
                        <span className="border border-gray-300 px-1 mx-1">
                          S
                        </span>
                      )}
                      {products[p].size.includes("M") && (
                        <span className="border border-gray-300 px-1 mx-1">
                          M
                        </span>
                      )}
                      {products[p].size.includes("L") && (
                        <span className="border border-gray-300 px-1 mx-1">
                          L
                        </span>
                      )}
                      {products[p].size.includes("XL") && (
                        <span className="border border-gray-300 px-1 mx-1">
                          XL
                        </span>
                      )}
                    </div>
                    <div className="mt-1">
                      {/* {console.log(products[p].title +" and color is "+products[p].color)} */}
                      {products[p].color.includes("red") && (
                        <button className="border-2 border-gray-300 ml-1 bg-red-700 rounded-full w-6 h-6 focus:outline-none"></button>
                      )}
                      {products[p].color.includes("gray") && (
                        <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                      )}
                      {products[p].color.includes("yellow") && (
                        <button className="border-2 border-gray-300 ml-1 bg-yellow-700 rounded-full w-6 h-6 focus:outline-none"></button>
                      )}
                      {products[p].color.includes("blue") && (
                        <button className="border-2 border-gray-300 ml-1 bg-blue-700 rounded-full w-6 h-6 focus:outline-none"></button>
                      )}
                      {products[p].color.includes("green") && (
                        <button className="border-2 border-gray-300 ml-1 bg-green-700 rounded-full w-6 h-6 focus:outline-none"></button>
                      )}
                      {products[p].color.includes("pink") && (
                        <button className="border-2 border-gray-300 ml-1 bg-pink-700 rounded-full w-6 h-6 focus:outline-none"></button>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find({ category: "tshirt" });
  let tshirts = {};
  for (let item of products) {
    if (item.title in tshirts) {
      console.log(item.title);
      if (
        !tshirts[item.title].color.includes(item.color) &&
        item.availableQty > 0
      ) {
        tshirts[item.title].color.push(item.color);
      }
      if (
        !tshirts[item.title].size.includes(item.size) &&
        item.availableQty > 0
      ) {
        tshirts[item.title].size.push(item.size);
      }
    } else {
      tshirts[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        // console.log(tshirts[item.title].color +" = "+ [item.color])
        tshirts[item.title].color = [item.color];
        tshirts[item.title].size = [item.size];
      }
    }
  }
  console.log(tshirts);
  return {
    props: { products: JSON.parse(JSON.stringify(tshirts)) },
  };
}
export default Tshirts;
