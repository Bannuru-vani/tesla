import React from "react";
import "./Headerblock.css";
function HeaderBlock() {
  return (
    <div className="headerBlock">
      <div className="headerBlock_info">
        <div>
          <img src="https://cars.usnews.com/static/images/Auto/izmo/i159614637/2022_hyundai_elantra_angularfront.jpg" />
        </div>
        <div className="headerBlock_infotext">
          <h1>Model 3</h1>
          <h4>
            Order online for <span>Touchless Delivery</span>
          </h4>
        </div>
        <div className="headerBlock_actions">
          <button className="headerBlock_buttonPrimary">Custom Order</button>
          <button className="headerBlock_buttonSecondary">
            Existing Inventory
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderBlock;
