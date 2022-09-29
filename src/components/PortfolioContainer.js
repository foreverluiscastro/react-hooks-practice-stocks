import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio , onRemoveStock }) {

  const stocksToDisplay = portfolio.map((stock) => (
    <Stock key={stock.id} stock={stock} onStockClick={onRemoveStock}/>
  ))

  return (
    <div>
      <h2>My Portfolio</h2>
      {
        //render your portfolio stocks here
      }
      {stocksToDisplay}
    </div>
  );
}

export default PortfolioContainer;
