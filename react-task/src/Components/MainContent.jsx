import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AddToCartAction } from "../Redux/Action/AddToCartAction";
import Axios from "axios";

const MainContent = (props) => {
  const { color, data } = props;
  const [colors, setColors] = useState([]);
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(AddToCartAction());
  };

  useEffect(() => {
    Axios.get(
      "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/colors"
    ).then((response) => {
      console.log(response.data.colors);
    });
  });

  const func = (id) => {
    if (id == 2) {
      return <p style={{ marginRight: "15px" }}>black</p>;
    } else if (id == 3) {
      return <p style={{ marginRight: "15px" }}>red</p>;
    } else if (id == 4) {
      return <p style={{ marginRight: "15px" }}>yellow</p>;
    } else if (id == 5) {
      return <p style={{ marginRight: "15px" }}>green</p>;
    } else {
      return <p style={{ marginRight: "15px" }}>blue</p>;
    }
  };

  const funct = (id) => {
    if (id == 2) {
      return <p style={{ marginRight: "15px" }}>cotton</p>;
    } else if (id == 3) {
      return <p style={{ marginRight: "15px" }}>leather</p>;
    } else if (id == 4) {
      return <p style={{ marginRight: "15px" }}>lycra</p>;
    } else if (id == 5) {
      return <p style={{ marginRight: "15px" }}>plastic</p>;
    } else {
      return <p style={{ marginRight: "15px" }}>polyester</p>;
    }
  };
  return (
    <div className="grid">
      {data.map((user) => (
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
              {/* <p style={{ marginRight: "15px" }}>Black</p> */}
              <p>{func(user.colorId)}</p>
              {/* <p style={{ marginRight: "15px" }}>cotton</p> */}

              <p>{funct(user.materialId)}</p>
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
