import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import CategoryBar from "./CategoryBar";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];
// console.log(uniqueList);

const Restaurent = () => {
  const [MenuData, setMenuData] = useState(Menu);
  const [MenuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };

  // console.log(MenuData);
  return (
    <>
      <div className="main_container">
        <div id="bannerContainer" className="banner_container">
          <div className="up">
            <div className="icon">
              <i className="fas fa-home">0</i>
            </div>
            <div className="icon">
              <i className="fas fa-share-alt">1</i>
            </div>
          </div>

          <div className="down">
            <a href="">
              <div className="banner_text">
                <h1 className="banner_heading">
                  Khabardabar Menu
                  <i className="far fa-arrow-alt-circle-right new_right_arrow"></i>
                </h1>
              </div>
            </a>
          </div>
        </div>

        <CategoryBar filterItem={filterItem} MenuList={MenuList} />
        <MenuCard MenuData={MenuData} />
      </div>
    </>
  );
};

export default Restaurent;
