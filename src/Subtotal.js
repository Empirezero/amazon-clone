import React, { useState } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { getValue } from "@testing-library/user-event/dist/utils";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length}items):<strong>{value}</strong>)
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contain gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Ksh"}
      />
      <button>Proceed to checout</button>
    </div>
  );
}

export default Subtotal;
