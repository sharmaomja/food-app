import React, { useEffect, useState, useRef } from "react";
import { useCart, useDispatchCart } from "./ContextReducer";

export default function Card(props) {
  let dispatch = useDispatchCart();
  let data = useCart();
  const priceRef = useRef();
  let options = props.options;
  let priceOptions = Object.keys(options);
  let foodItem = props.foodItems;
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  
  let finalPrice = qty * parseInt(options[size] || 0); // Calculation moved here

  const handleAddToCart = async () => {
    let food = data.find(item => item.id === props.foodItems._id);
    
    if (food && food.size === size) {
      await dispatch({
        type: "UPDATE",
        id: foodItem._id,
        price: finalPrice,
        qty: qty,
      });
    } else {
      await dispatch({
        type: "ADD",
        id: props.foodItems._id,
        name: props.foodItems.name,
        price: finalPrice,
        qty: qty,
        size: size,
      });
    }
  };

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  return (
    <div>
      <div>
        <div
          className="card m-3"
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          <img
            src={foodItem.img}
            className="card-img-top"
            alt="..."
            style={{ height: "170px", objectFit: "fill" }}
          />
          <div className="card-body">
            <h5 className="card-title">{foodItem.name}</h5>
            {/* <p className="card-text">{props.description}</p> */}
            <div className="container w-100">
              <select
                className="m-2 h-100 w-30 rounded"
                style={{ backgroundColor: "#007791" }}
                onChange={(e) => setQty(e.target.value)}
              >
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {" "}
                      {i + 1}{" "}
                    </option>
                  );
                })}
              </select>
              <select
                className="m-2 h-100 w-30 rounded"
                style={{ backgroundColor: " #007791" }}
                ref={priceRef}
                onChange={(e) => setSize(e.target.value)}
              >
                {priceOptions.map((data) => {
                  return (
                    <option key={data} value={data}>
                      {" "}
                      {data}
                    </option>
                  );
                })}
              </select>
              <div className="d-inline h-100 fs-5">₹{finalPrice}/-</div>
            </div>
            <hr></hr>
            <button
              className="btn"
              style={{ backgroundColor: "#007791" }}
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
