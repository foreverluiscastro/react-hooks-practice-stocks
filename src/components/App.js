import React, { useEffect, useState } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [sort, setSort] = useState("")
  const [filter, setFilter] = useState("Tech")

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then((r) => r.json())
    .then((r) => setStocks(r))
  },[])

  const visibleStocks = stocks
  // filter by
  .filter((stock) => {
    if (filter === "Tech") return stock.type === "Tech"
    if (filter === "Sportswear") return stock.type === "Sportswear"
    if (filter === "Finance") return stock.type === "Finance"
  })
  // sort alphabetically
  .sort((a,b) => {
    if (sort === "") return true
    if (sort === "Alphabetically") return a.name.localeCompare(b.name)
    if (sort === "Price") return a.price - b.price
  })

  function handleAddToPortfolio(stock) {
    // if portfolio does not include the stock
    if (!portfolio.includes(stock)) {
      // add it
      setPortfolio([...portfolio, stock])
    }
  }

  function handleRemoveFromPortfolio(stockToRemove) {
    // Remove the stock
    const filteredList = portfolio.filter((stock) => stock.id !== stockToRemove.id)
    // set the new portfolio state
    setPortfolio(filteredList)
  }

  function handleSort(sortQuery) {
    if (sort === sortQuery) {
      console.log("sort matches sortQuery")
      setSort("")
    } else {
      setSort(sortQuery)
    }
  }

  function handleFilter(filterQuery) {
    setFilter(filterQuery)
  }

  return (
    <div>
      <Header />
      <MainContainer stocks={visibleStocks} portfolio={portfolio} onAddStock={handleAddToPortfolio} onRemoveStock={handleRemoveFromPortfolio} onSort={handleSort} sort={sort} onFilter={handleFilter}/>
    </div>
  );
}

export default App;
