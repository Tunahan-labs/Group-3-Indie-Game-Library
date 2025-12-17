
import { useState } from "react";
import GameFilter from "./components/GameFilter.component";
import WishlistPage from "./components/WishListPage";
import Navbar from "./components/Navbar";

type Page = "games" | "wishlist";

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("games");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === "games" ? <GameFilter /> : <WishlistPage setCurrentPage={setCurrentPage} />}
    </div>
  );
}

export default App;
