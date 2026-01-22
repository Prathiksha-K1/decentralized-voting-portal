import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Language from "./pages/Language"
import Voice from "./pages/Voice"
import Vote from "./pages/Vote"
import Success from "./pages/Success"

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-bg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/language" element={<Language />} />
          <Route path="/voice" element={<Voice />} />
          <Route path="/vote" element={<Vote />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
