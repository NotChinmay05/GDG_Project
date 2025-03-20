import Login from "./components/login";
import Create from "./components/create";
import Home from "./components/home";
import Support from './components/support';
import Shop from './components/shop';
import { Routes, Route } from "react-router-dom";
import "./styles/login.css"
import "./styles/sidebar.css"
import "./styles/chatbot.css"
import "./styles/weather.css"
import "./styles/forecast.css"
import "./styles/support.css"
import "./styles/shop.css"

function App(){
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<Create />} />
        <Route path="user/:id/home" element={<Home />} />
        <Route path="user/:id/support" element={<Support />} />
        <Route path="user/:id/shop" element={<Shop />} />
      </Routes>
    </div>
  )
}

export default App;
