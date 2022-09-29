import React from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({ stocks , portfolio , onAddStock , onRemoveStock, sort, onSort , onFilter }) {
  return (
    <div>
      <SearchBar onSort={onSort} sort={sort} onFilter={onFilter}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} onAddStock={onAddStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} onRemoveStock={onRemoveStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
