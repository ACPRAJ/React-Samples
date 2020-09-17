import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

function CreditCardsComponent() {
  const [name, setName] = useState("");
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [focus, setFocus] = useState("");
  return (
    <div>
      <Cards
        name={name}
        number={creditCardNumber}
        expiry={expiry}
        cvc={cvv}
        focused={focus}
      />
      <br />
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          focus={(e) => setFocus(e.target.value)}
        />
        <input
          type="tel"
          name="creditCardNumber"
          placeholder="Card Number"
          value={creditCardNumber}
          onChange={(e) => setCreditCardNumber(e.target.value)}
          focus={(e) => setFocus(e.target.value)}
        />
        <input
          type="tel"
          name="expiry"
          placeholder="MM/YY Expiry"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          focus={(e) => setFocus(e.target.value)}
        />
        <input
          type="password"
          name="focus"
          placeholder="CVV"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          focus={(e) => setFocus(e.target.value)}
        />
      </form>
    </div>
  );
}

export default CreditCardsComponent;
