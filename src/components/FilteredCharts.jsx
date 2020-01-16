import React from "react";
import Chart from "./Chart";

const Charts = ({ coinData, coinValue, handleSubmit }) => {
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
      {coinData.map(coin => (
        <div className="chart__container" key={coin.name}>
          <h2 className="coin__title">{coin.name}</h2>
          <h4 className="coin__symbol">{coin.symbol}</h4>
          <div className="coin__logo">
            <img src={coin.image} height="40" alt={coin.name} />
          </div>
          <Chart sparklineData={coin.sparkline_in_7d.price} />
        </div>
      ))}
    </div>
    </>
  );
};
export default Charts;
