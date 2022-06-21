import "./App.css";
import axios from "axios";
import { HeaderContainer } from "./components/HeaderComponent";
import { BodyContainer } from "./components/BodyContainer";
import { useEffect, useState } from "react";

function App() {
  const [rates, setRate] = useState();
  useEffect(() => {
    axios
      .get("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11")
      .then((resp) => {
        setRate(resp.data);
        console.log(resp.data);
      });
  }, [setRate]);
  return (
    <div className="App">
      <HeaderContainer rates={rates} />
      <BodyContainer rates={rates} />
    </div>
  );
}

export default App;
