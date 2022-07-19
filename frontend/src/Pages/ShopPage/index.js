import {useEffect, useState} from "react"
import axios from "axios"
import "./style.css"

const ShopPage = () => {

const[productsList, setProductList] = useState([]);

//sidebar elements
const [categories, setCategories] = useState([]);
const [rating, setRating] = useState([]);
const [price, setPrice] = useState([])

const getProducts = async () => {
  try{
      const response = await axios.get('http://localhost:4000/products')
      setProductList(response.data)

  } catch(e){
    console.log(e.message)
  }
}
 
useEffect(() => {
  getProducts();
}, []);


  return <div className="ShopPage">ShopPage</div>;
};

export default ShopPage;
