import React, { useEffect, useState } from "react";
import API from "../../Utils/API";
import "./TopAssets.css"; // Import your CSS file for styling
import ReactPaginate from "react-paginate";
const TopAssets = () => {
  const [currencyList, setCurrencyList] = useState([]);

  useEffect(() => {
    getCurrencyList();
  }, []);

  const getCurrencyList = () => {
    API.get("/assets")
      .then((res) => {
        setCurrencyList(res.data.data);
      })
      .catch((error) => {
        setCurrencyList([]);
        console.log(error);
      });
  };

  return (
    <div className="top-assets">
    <h2 className="heading" style={{textAlign:"center",padding:"10px"}}>Crypto Assets Market</h2>
      <table className="currency-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Changes (24Hr)</th>
          </tr>
        </thead>
        <tbody>
          {currencyList.map((currency) => (
            <tr key={currency.id}>
              <td>{currency.name}</td>
              <td>${Math.round(currency.priceUsd * 100) / 100}</td>
              <td
                className={
                  currency.changePercent24Hr >= 0 ? "positive" : "negative"
                }
              >
                {Math.round(currency.changePercent24Hr * 100) / 100}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopAssets;
