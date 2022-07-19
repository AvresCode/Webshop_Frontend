import { NavLink } from "react-router-dom";

const ProductBlock = (props) => {

    return(

 <div className="product-display">
    <div>
        <NavLink
        
          to={`/details/${props.id}`}
        >
          <img className="image" width="300px" alt={props.title} src={props.mainImage} />
         </NavLink>
    </div>
     <div>
         <NavLink  to={`/details/${props.id}`}>
 
              {props.title}

         </NavLink>
      </div>
      <div>
    €{props.price}
     {props.rating}
      </div>
            <div >
            <p>{props.description}</p>
          </div>

</div>
    )
    
}

export default ProductBlock