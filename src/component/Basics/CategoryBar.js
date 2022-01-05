import React from "react";

const CategoryBar = ({ filterItem, MenuList }) => {
  return (
    <>
      <div id="newContainer" className="new_container">
        <div className="menu_category">
          {MenuList.map((curElem) => {
            return (
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => filterItem(curElem)}
              >
                {curElem}
              </button>
            );
          })}

        </div>
      </div>
    </>
  );
};

export default CategoryBar;
