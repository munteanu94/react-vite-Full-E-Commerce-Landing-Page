import "./Product.css";
import prod1 from "./img/prod1.png";
import Star from "./Feedback";
import { listPopular } from "./ListPopular";
import "./PopularProducts.css";
export default function Product(props) {
  return (
    <div className="PopularProduct">
      <img src={props.src} alt="products" />
      <p className="nameProducts">{props.name}</p>
      <Star
        className="feedbackProducts"
        stars={props.stars}
        review={props.review}
      />

      <p className="discreabeProducts">{props.describe}</p>
      <div className="boxPrice">
        <h4 className="priceProducts">${props.price}</h4>
        <del className="prePriceProducts">${props.preprice}</del>
      </div>
    </div>
  );
}
