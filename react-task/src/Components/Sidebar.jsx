import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMatColAction } from "./../Redux/Action/Action";

const Sidebar = (props) => {
  const { color, material } = props;
  const [colo, setColo] = useState("");
  const [mate, setMate] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.AllProductData.allProducts);
  const handleMaterial = () => {
    dispatch(getMatColAction(data, { color: colo, material: mate }));
  };

  useEffect(() => {
    handleMaterial();
  }, [colo, mate]);

  return (
    <div>
      <div>
        <h5>Tags</h5>
        <h5>All</h5>
        <ul>
          <li>Generic</li>
          <li>Generic</li>
          <li>Generic</li>
          <li>Generic</li>
        </ul>
      </div>
      <div>
        <h5>Materials</h5>
        <button className="bt bg-transparent mt-1" style={{ fontSize: "20px" }}>
          All
        </button>
        <ul>
          {material.map((tag) => (
            <li key={tag.id}>
              <button
                className="bt bg-transparent mt-1"
                onClick={() => {
                  setMate(tag.id);
                }}
                style={{ color: tag.id === mate ? "blue" : "#000" }}
              >
                {tag.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h5>Color</h5>
        <h5>All</h5>
        <ul>
          {color.map((tag) => (
            <li key={tag.id}>
              <button
                className="bt bg-transparent mt-1"
                style={{ color: tag.id === colo ? "blue" : "#000" }}
                onClick={() => {
                  setColo(tag.id);
                }}
              >
                {tag.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
