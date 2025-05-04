import { BrowserRouter } from "react-router-dom";
import Header from "./elements/Header";
import "./styles/App.css";
import Hero from "./elements/Hero";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Hero/>
      </BrowserRouter>
    </div>
  );
}

export default App;
