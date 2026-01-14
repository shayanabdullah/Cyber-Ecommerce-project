import axios from "axios";
import { createContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [productDetail, setProductDetail] = useState([]);
 const [loading, setLoading] = useState(true)
 

  const fetchCategories = async () => {
    try {
      const res = await axios.get(
        "https://dummyjson.com/products/categories"
      );
      setCategories(res.data);
      setLoading(false)
    } catch (err) {
      console.log(err);
    }
  };

  const fetchProductsByCategory = async (slug) => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products/category/${slug}`
      );
      setProducts(res.data.products);
   setLoading(false)
    } catch (err) {
      console.log(err);
    }
  };


  const fetchProductDetails = async (id) => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products/${id}`
      );
      setProductDetail(res.data);
      setLoading(false)
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <DataContext.Provider
      value={{
        categories,
        products,
        fetchCategories,
        fetchProductsByCategory,
        fetchProductDetails,
        productDetail,
        loading
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
