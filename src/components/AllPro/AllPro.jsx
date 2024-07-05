import React from "react";
import { useGetProductsQuery } from "../context/api/ProductApi";
import Product from "../Product/Product";
const AllPro = () => {
  const { data, isLoading } = useGetProductsQuery();
  return (
    <div className="all container">
      <Product data={data} isLoading={isLoading} />
    </div>
  );
};

export default AllPro;
