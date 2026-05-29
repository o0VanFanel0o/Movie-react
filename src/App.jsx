import { Routes, Route} from "react-router-dom"

import Home from "./pages/Home.jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/favorites" element={<FavoritesPage/>}/>
    </Routes>
  )
}

export default App;
