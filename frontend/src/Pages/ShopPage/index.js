import {useEffect, useState} from "react"
import axios from "axios"
import "./style.css"
import ProductBlock from "./ProductBlock";

const ShopPage = () => {

const[products, setProducts] = useState([]);

//sidebar elements
const [category, setCategory] = useState([]);
const [rating, setRating] = useState([]);
const [price, setPrice] = useState([])

const getProducts = async () => {
  try{
      const response = await axios.get('http://localhost:4000/products')
      console.log(response)
      setProducts(response.data)

  } catch(e){
    console.log(e.message)
  }
}
 
useEffect(() => {
  getProducts();
}, []);

const filterCategories =
    category.length === 0
      ? [...products]
      : [...products].filter((product) => {
          return product.category.title === category;
        });

  return <div className="ShopPage">

   <div className="sidebar-items"> <input
  type="checkbox"
  value="Electronics"
  onChange={(e) => {
    if (e.target.checked) {
      setCategory(e.target.value);
    } else {
      setCategory([]);
    } }} />

    </div>
    <div>Electronics</div>

    <div> <input
  type="checkbox"
  value="Jewelery"
  onChange={(e) => {
    if (e.target.checked) {
      setCategory(e.target.value);
    } else {
      setCategory([]);
    } }} />

    </div>
    <div>Jewelery</div>

    <div> <input
  type="checkbox"
  value="Men's Clothing"
  onChange={(e) => {
    if (e.target.checked) {
      setCategory(e.target.value);
    } else {
      setCategory([]);
    } }} />

    </div>
    <div>Men's Clothing</div>

    <div> <input
  type="checkbox"
  value="Women's Clothing"
  onChange={(e) => {
    if (e.target.checked) {
      setCategory(e.target.value);
    } else {
      setCategory([]);
    } }} />

    </div>
    <div>Women's Clothing</div>

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
    </div>;

};

export default ShopPage;
