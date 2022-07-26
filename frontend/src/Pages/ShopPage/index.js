import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import ProductBlock from "./ProductBlock";

const ShopPage = () => {
  const [products, setProducts] = useState([]);

  //sidebar elements
  const [category, setCategory] = useState([]);
  const [rating, setRating] = useState([]);
  const [price, setPrice] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:4000/products");
      setProducts(response.data);
      console.log(response);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const filterCategories =
    category.length === 0
      ? [...products]
      : [...products].filter((product) => {
          //return product.category.title === category;
          return category.includes(product.category.title);
        });

  const categoryTypes = [
    "Electronics",
    "Jewelery",
    "Men's Clothing",
    "Women's Clothing",
  ];

  // console.log("category", category);
  // console.log("products", filterCategories);
  // console.log("lengths", products.length, filterCategories.length);
  return (
    <div className="ShopPage">
      <div className="sidebar">
        <div className="sidebarItems">
          <p> Categories</p>{" "}
          {categoryTypes.map((type) => (
            <>
              <div className="sidebarCategory">
                <input
                  type="checkbox"
                  value={type}
                  checked={category.includes(type)}
                  //checked={category === type}
                  onChange={(e) => {
                    if (e.target.checked) {
                      //setCategory(e.target.value); // now i need to add to an array;
                      setCategory([...category, e.target.value]);
                    } else {
                      //setCategory([]); // I want to remove THIS categoryfrom the array
                      setCategory(
                        category.filter((element) => element !== e.target.value)
                      );
                    }
                  }}
                />

                {type}
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="product-block">
        {filterCategories.map((product, index) => {
          return (
            <ProductBlock
              key={index}
              id={product.id}
              title={product.title}
              price={product.price}
              rating={product.rating}
              description={product.description}
              mainImage={product.mainImage}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ShopPage;
