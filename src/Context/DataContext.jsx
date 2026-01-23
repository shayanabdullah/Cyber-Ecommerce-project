import axios from "axios";
import { createContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [productDetail, setProductDetail] = useState([]);
  const [productSearch, setProductSearch] = useState([]);
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

    if (res.data?.products?.length) {
      setProducts(res.data.products);
    } else {
      setProducts([]);
    }
  } catch (err) {
    console.log(err);
    setProducts([]);
  } finally {
    setLoading(false); 
  }
};


const fetchProductDetails = async (id) => {


  try {
    const res = await axios.get(
      `https://dummyjson.com/products/${id}`
    );
    setProductDetail(res.data);

  } catch (err) {
    console.log(err);
    setProductDetail(null);
  } finally {
    setLoading(false); 
  }
};


const fetchSearchProduct = async (keyword) => {
  try {
    const res = await axios.get(
      `https://dummyjson.com/products/search?q=${keyword}`
    );
    setProductSearch(res.data);
    console.log(res.data);
  } catch (err) {
    console.log(err);
    setProductSearch(null);
  } finally {
    setLoading(false); 
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
