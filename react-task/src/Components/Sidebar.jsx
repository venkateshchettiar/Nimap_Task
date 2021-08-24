import React from "react";
import { useSelector } from "react-redux";

const Sidebar = (props) => {
  const { color, material } = props;
  const data = useSelector((state) => state.AllProductData.allProducts);
  const arr = [];
  const handleMaterial = (tag) => {
    arr.push(tag.id);
    data.filter((item) => arr.includes(item.materialId));
  };

  const handleColor = (tag) => {
    arr.push(tag.id);
    data.filter((item) => arr.includes(item.colorId));
  };
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
        <h5>All</h5>
        <ul>
          {material.map((tag) => (
            <li key={tag.id}>
              <button
                className="bt bg-transparent mt-1"
                onClick={() => handleMaterial(tag)}
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
                onClick={() => handleColor(tag)}
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
