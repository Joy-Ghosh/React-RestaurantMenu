import React from "react";

const MenuCard = ({ MenuData }) => {
  console.log(MenuData);
  return (
    <>
      {MenuData.map((curElem) => {
        const {id, image, foodname, fooddetails, category, price} = curElem;
        return (
          <>
            
              <div className="menu_container" key={id}>
                <div className="menu_items">
                  <div className="card">
                    <div className="card-body">
                      <div className="left_text">
                        <h2 className="foodname">
                          <span className="veg_circle">
                            <i className="far fa-stop-circle"></i>
                          </span>
                          {foodname}
                        </h2>
                        <p className="fooddetails">
                        {fooddetails}
                        </p>
                      </div>
                      <div className="right_image">
                        <img src={image} alt="" />
                        <p className="price">₹ {price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
          </>
        );
      })}
    </>
  );
};

export default MenuCard;
