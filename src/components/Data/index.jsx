import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Pranicko from "../Pranicko";

const Data = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);

  const fetchData = () => {
    fetch(`https://xmas-api.itgirls.cz/cards/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCard(data.data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(card);
  return (
    <>
      {card !== null || undefined ? (
        <Pranicko card={card} />
      ) : (
        <div>
          <p>Načítám data</p>
        </div>
      )}
    </>
  );
};

export default Data;
