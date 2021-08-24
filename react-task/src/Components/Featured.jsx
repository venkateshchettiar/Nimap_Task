import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainContent from "./MainContent";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import { getAllProductAction } from "./../Redux/Action/AllProductAction";
import { getFeaturedAction } from "../Redux/Action/FeaturedAction";
import Axios from "axios";

const Featured = () => {
  const [color, setColor] = useState([]);
  const [material, setMaterial] = useState([]);
  const data = useSelector((state) => state.AllProductData.allProducts);
  const prod = useSelector((state) => state.FeaturedData.allProducts);
  const res = prod.map((f) => f.id);
  const list = data.filter((item) => res.includes(item.id));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductAction());
    dispatch(getFeaturedAction());
    Axios.get(
      "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/colors"
    ).then((response) => setColor(response.data.colors));

    Axios.get(
      "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/material"
    ).then((response) => setMaterial(response.data.material));
  }, []);

  return (
    <div>
      <div>
        <h1 className="tophead">MY COOLSHOP.COM</h1>
        <NavBar />
      </div>
      <div className="flex">
        <div className="flex-left">
          <Sidebar color={color} material={material} />
        </div>
        <div className="flex-right">
          <div>
            <MainContent data={list} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
