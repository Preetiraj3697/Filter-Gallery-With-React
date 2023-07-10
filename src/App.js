import React, { useState } from "react";
import "./styles.css";
import Menu from "./Menu";

export default function App() {
  const [item, setItem] = useState(Menu);
  const getItem = (cat) => {
    var upadatedValue = Menu.filter((items) => {
      return items.category === cat;
    });
    setItem(upadatedValue);
  };

  return (
    <div className="App py-4">
      <button
        className="btn btn-secondary ml-2"
        onClick={() => getItem("breakfast")}
      >
        Breakfast
      </button>
      <button
        className="btn btn-secondary ml-2"
        onClick={() => getItem("lunch")}
      >
        Lunch
      </button>
      <button
        className="btn btn-secondary ml-2"
        onClick={() => getItem("dinner")}
      >
        Dinner
      </button>
      <button className="btn btn-secondary ml-2" onClick={() => setItem(Menu)}>
        All
      </button>
      <div className="row container mx-auto">
        <br />
        {item.map((data, index) => {
          const { name, price, category, image } = data;
          return (
            <>
              <div className="col-md-4 col-10 col-sm-10 col-lg-4 mx-auto py-3">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={image}
                    alt=""
                    style={{
                      height: "200px"
                    }}
                  />
                  <h2 className="text-info text-uppercase pt-2">{category}</h2>
                  <h4 className="text-secondary text-capitalize pt-2">
                    {name}
                  </h4>
                  <p className="text-success text-uppercase pt-2">{price}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
