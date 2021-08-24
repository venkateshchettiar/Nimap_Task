import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductAction } from "../Redux/Action/AllProductAction";
import MainContent from "./MainContent";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import Axios from "axios";

const AllProducts = () => {
  const [color, setColor] = useState([]);
  const [material, setMaterial] = useState([]);
  const dispatch = useDispatch();
  var data = useSelector((state) => state.AllProductData.allProducts);
  const list = useSelector((state) => state.AllMatColData.matCol);
  if (list && list.length !== 0) {
    data = list;
  }
  useEffect(() => {
    dispatch(getAllProductAction());
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
            <MainContent data={data} color={color} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
