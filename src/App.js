import { BrowserRouter } from "react-router-dom";
import Header from "./elements/Header";

import Hero from "./elements/Hero";
import Partners from "./elements/Partners";
import Auctions from "./elements/Auctions";
import '@mantine/core/styles.css';
import "./styles/App.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Hero />
        <Partners />
        <Auctions />

      </BrowserRouter>
    </div>
  );
}

export default App;
