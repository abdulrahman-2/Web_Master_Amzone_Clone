import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchProducts } from "../features/product/productSlice";


const Shop = () => {
  
  const {products,loading,error}=useSelector((state)=>state.products)
  const dispatch=useDispatch()
  useEffect(()=>{dispatch(fetchProducts()) ;},[dispatch])
  
  console.log(products)
  return(
     <div className="relative">
        <div className=" xsm:absolute xsm:left-[150px] xs:top-[100px] sm:left-[250px] sm:top-[150px] md:left-[300px] md:top-200px lg:left-[500px] lg:top-[200px]">{loading&&<h1 className="font-bold text-[2rem] text-[blue]">loading...</h1>}</div>
        <div className="xsm:absolute xsm:left-[150px] xsm:top-[200px] sm:left-[250px] sm:top-[150px] md:left-[300px] md:top-200px lg:left-[500px] lg:top-[200px] ">{error&&<h1 className="font-bold text-[2rem] text-[blue]">error:{error}</h1>}</div>
    <div className="xsm:grid xsm:gap-[40px] xsm:grid-cols-1 xsm:justify-items-center sm:grid sm:grid-cols-1 gap-[40px] sm:justify-items-center md:grid md:grid-cols-2 md:justify-items-center lg:grid lg:grid-cols-3 ">
    {products.map((x)=>
    <div className="flex flex-col p-5 items-center w-[300px] gap-3 bg-[#fff]  border border-gray-300 " key={x.id} >
      <img className="w-[200px] " src={x.images} alt={x.id}/>
      <h2 className="font-bold">{x.title}</h2>
      <p>{x.description}</p>
     
      

<div className="flex items-center">

    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <p className="ml-8 text-blue-500">{x.rating}</p>
</div>

      <p className="font-[600]">{x.price} $</p>
      <button className="w-[130px] bg-yellow-500 p-[5px] rounded-[20px]">add to cart</button>

    </div>
    

  )}
  </div>
  </div>);
};

export default Shop;
