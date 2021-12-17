import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import "./style.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import config from "./configuration";

import Uvod from "./components/Uvod";
import Vytvorit from "./components/Vytvorit";
import Vyzvednout from "./components/Vyzvednout";
import Hotovo from "./components/Hotovo";
import Data from "./components/Data";

const App = () => {
  const [myConfig, setMyConfig] = useState({});
  const [final, setFinal] = useState(null);

  const getChoice = (name, value) => {
    setMyConfig({ ...myConfig, [name]: value });
  };

  const fetchData = () => {
    fetch("https://xmas-api.itgirls.cz/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myConfig),
    })
      .then((response) => response.json())
      .then((data) => {
        setFinal(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, [myConfig]);

  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Uvod />} />
        <Route path="/vyzvednout" element={<Vyzvednout />} />
        <Route
          path="/vytvorit"
          element={<Vytvorit data={config} getChoice={getChoice}/>}
        />
        <Route path="/vytvorit/hotovo" element={<Hotovo final={final}/>} />
        <Route path="/pranicko/:id" element={<Data />} />
      </Routes>
    </BrowserRouter>
  );
};

render(<App />, document.querySelector("#app"));
