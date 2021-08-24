import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AddToCartAction } from "../Redux/Action/AddToCartAction";

const MainContent = (props) => {
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    console.log("object1");
    dispatch(AddToCartAction());
  };

  return (
    <div className="grid">
      {props.data.map((user) => (
        <Card key={user.id} style={{ width: "350px", height: "auto" }}>
          <div className="img__wrap">
            <Card.Img variant="top" src={user.image} className="img" />
            <div className="img__description_layer" onClick={handleAdd}>
              <p className="img__description">Add to Cart</p>
            </div>
          </div>
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <div className="d-flex">
              <button className="bt bg-transparent">Black</button>
              <button className="bt bg-transparent">Cotton</button>
            </div>
            <div className="mt-2">
              <h5>INR {user.price}</h5>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default MainContent;
