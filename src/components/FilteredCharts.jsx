import React from "react";
import Chart from "./Chart";

const Charts = ({ coinData, coinValue, coinObject, handleSubmit }) => {
  // console.log('New Coin Value:',newCoin);
  return (
    <>
    <form onSubmit={e=> handleSubmit(e)}>
      <select>
        <option value="bitcoin">Bitcoin</option>
        <option value="litecoin">Litecoin</option>
        <option value="ethereum">Ethereum</option>
        <option value="digibyte">Digibyte</option>
      </select>
      <button>Filter</button>
    </form>
    <div className="charts">
        <div className="chart__container">
          <h2 className="coin__title">{coinObject.name}</h2>
          <h4 className="coin__symbol">{coinObject.symbol}</h4>
          <div className="coin__logo">
            <img src={coinObject.image} height="40" alt={coinObject.name} />
          </div>
          {(coinValue === '' || coinObject === []) ? <p>Loading...</p> : <Chart sparklineData={coinObject.sparkline_in_7d.price} />}
        </div>
    </div>
    </>
  );
};
export default Charts;
