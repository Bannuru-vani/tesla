import React from "react";
import "./MenuItem.css";

function MenuItem({ title }) {
  return (
    <div className="menu-item">
      <h4>{title}</h4>
    </div>
  );
}

export default MenuItem;
