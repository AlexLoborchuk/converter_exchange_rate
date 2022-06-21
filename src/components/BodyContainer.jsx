import { useState } from "react";
import "../style/bodyComponents.css";
import SwapImage from "../assets/swap.png";

export const BodyContainer = (props) => {
  const [sum1, setSum1] = useState("");
  const [sum2, setSum2] = useState("");
  const [currency1, setCurrency1] = useState("1");
  const [currency2, setCurrency2] = useState("");

  let exchange_rate = props.rates?.map((rate, id) => {
    return (
      <option key={id} value={rate.buy}>
        {rate.ccy}
      </option>
    );
  });
  return (
    <div className="bodyWrapper">
      <form>
        <div className="bodyForms">
          <select
            className="bodyForms__selectCurrency"
            name="currency"
            onChange={(event) => {
              setCurrency1(event.target.value);
              setSum1(
                String(
                  Math.round(((sum2 * currency2) / event.target.value) * 100) /
                    100
                )
              );
            }}
          >
            <option value="1">UAH</option>
            {exchange_rate}
          </select>
          <input
            name="sum"
            className="bodyForms__inputSum inputSum"
            type="number"
            placeholder="Вкажіть суму"
            value={sum1}
            onChange={(event) => {
              setSum1(event.target.value);
              setSum2(
                String(Math.round((event.target.value / currency2) * 100) / 100)
              );
              console.log(event.target.value);
            }}
          />
        </div>
        <div className="swapImage">
          <img src={SwapImage} alt="convert" />
        </div>
        <div>
          <select
            name="currency2"
            className="bodyForms__selectCurrency"
            onChange={(event) => {
              setCurrency2(event.target.value);
              setSum2(
                String(
                  Math.round((sum1 / event.target.value) * currency1 * 100) /
                    100
                )
              );
            }}
          >
            <option>Оберіть Валюту</option>
            <option value="1">UAH</option>
            {exchange_rate}
          </select>
          <input
            name="sum2"
            className="bodyForms__inputSum  inputSum"
            type="number"
            placeholder="Вкажіть суму"
            value={sum2}
            onChange={(e) => {
              setSum2(e.target.value);
              setSum1(
                String(Math.round(e.target.value * currency2 * 100) / 100)
              );
            }}
          />
        </div>
      </form>
    </div>
  );
};
