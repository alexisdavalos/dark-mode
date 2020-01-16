import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Charts from "./components/Charts";
import FilteredCharts from './components/FilteredCharts';
import Navbar from "./components/Navbar";

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [coinValue, setCoinValue] = useState([]);
  const [coinObject, setCoinObject]= useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));

  }, []);
  const getCoin = (coin) =>{
    axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${coin}/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true`
    )
    .then(res => {
      setCoinObject(res.data);
      console.log('Filtered Coin:',coinObject);
    })
    .catch(err => console.log(err));
  }
  const handleSubmit = (e) =>{
      e.preventDefault(); //prevents default
      console.log('CoinData', coinData);
     setCoinValue(document.querySelector('select').value) //sets form value to state
     console.log('CoinValue',coinValue)
     console.log('filtered coin:',coinData.filter(coin => (coin.name === coinValue) ));
     return coinData.filter(coin => (coin.name === coinValue) );
    //  getCoin(coinValue) //fetches coin 

  }
  console.log('response',coinData)
  return (
  <Router>
    <div className="App">
      <Navbar />
      <Route exact path='/'>
        <FilteredCharts handleSubmit={handleSubmit} coinValue={coinValue} coinData={coinData}/>
      </Route>
      <Route path="/home">
        <Charts coinData={coinData} />
      </Route>
    </div>
  </Router>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
