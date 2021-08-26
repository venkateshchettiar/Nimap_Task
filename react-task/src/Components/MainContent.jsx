import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AddToCartAction } from "../Redux/Action/AddToCartAction";
import Axios from "axios";

const MainContent = (props) => {
  const { color, data } = props;
  const [colors, setColors] = useState([]);
  const [material, setMaterial] = useState([]);
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(AddToCartAction());
  };

  useEffect(() => {
    Axios.get(
      "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/colors"
    ).then((response) => {
      setColors(response.data.colors);
    });
    Axios.get(
      "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/material"
    ).then((response) => setMaterial(response.data.material));
  }, []);

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
              {colors.map((m) => {
                if (m.id == user.colorId) {
                  return <p style={{ marginRight: "15px" }}>{m.name}</p>;
                }
              })}
              {material.map((m) => {
                if (m.id == user.materialId) {
                  return <p style={{ marginRight: "15px" }}>{m.name}</p>;
                }
              })}
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
