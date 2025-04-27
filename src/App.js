import { BrowserRouter } from "react-router-dom";
import Header from "./elements/Header";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </div>
  );
}

export default App;
