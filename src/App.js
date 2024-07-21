import { BrowserRouter, Route, Router } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router>
        <Route path="/" exact={true} element={<Home />} />
      </Router>
    </BrowserRouter>
  );
}

export default App;
