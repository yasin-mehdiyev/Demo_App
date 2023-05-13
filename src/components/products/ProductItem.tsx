import { FC } from "react";
import { Product } from "../../models/api/Product/Product";

const ProductItem: FC<Product> = ({
  thumbnail,
  title,
  brand,
  category,
  price,
  discountPercentage,
  rating,
}) => {
  return (
    <>
      <div className="card mb-3" style={{ width: "25rem" }}>
        <img
          className="card-img-top"
          src={thumbnail}
          alt="Product Image"
          style={{ height: "210px" }}
        />
        <div className="card-body">
          <h5 className="card-title">
            {title} {"-"} {brand} {"-"} {category}
          </h5>
          <p className="card-text">
            Price: {price} {"-"} DiscountPercentage: {discountPercentage}{" "}
          </p>
          <p className="card-text">Rating: {rating}</p>
          <a href="#" className="btn btn-primary">
            View More
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
