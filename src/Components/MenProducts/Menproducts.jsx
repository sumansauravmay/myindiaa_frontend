import React,{useState, useEffect} from "react";
import ProductCard from "../Product/ProductCard";
import axios from "axios";
import { FaSearch } from "react-icons/fa";


const Menproducts = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      axios
        .get("https://myindiaa-deployement.onrender.com/products")
        .then((res) => {
          console.log(res.data);
          setData(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mx-auto px-6">
      <div className="flex justify-center">
        <div class="relative mt-2 rounded-md shadow-sm">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span class="text-black sm:text-sm">
              <FaSearch />
            </span>
          </div>
          <input
            type="text"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-black ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Search"
          />
        </div>
      </div>

      {/* Products Data */}

      <div className="mt-16">
        <h3 className="text-gray-600 text-2xl font-medium">Men's Products</h3>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {data
          .filter((item)=>{
            return item.category=="men"
          })
          .map((item) => (
            <ProductCard
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              btnval="See Details"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menproducts;