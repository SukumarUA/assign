import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import News from "./Components/News";
import Header from "./Components/Header";
import Addition from "./Components/Addition";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path="/Addition" element={<Addition />} />
    </Routes>
  </Router>
);

export default App;
