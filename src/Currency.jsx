import React, { useState } from 'react'
import "./currency.css"
import { FaArrowAltCircleRight } from "react-icons/fa";
import axios, { Axios } from 'axios'

function Currency() {
    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("TRY");
    const [result, setResult] = useState(0);

    let BASE_URL = "https://api.freecurrencyapi.com/v1/latest"
    let API_KEY = "fca_live_Kjm5EOyGD0fQjVkDC9XivlvEoTxDGi5jHjnd9h5S"

    const exchange = async () => {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
        setResult((response.data.data[toCurrency] * amount).toFixed(3));

    }



    return (
        <div>
            <div className="container">
                <h2>KUR HESAPLAMA</h2>
                <div className="currency">
                    <input type="number" className='input'
                        onChange={(e) => setAmount(e.target.value)}
                    />

                    <select name="" id="select1"
                        onChange={(e) => setFromCurrency(e.target.value)}>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="TRY">TRY</option>
                    </select>

                    <FaArrowAltCircleRight style={{ fontSize: "40px" }} />

                    <select name="" id="select2"
                        onChange={(e) => setToCurrency(e.target.value)}>
                        <option value="TRY">TRY</option>
                        <option value="EUR">EUR</option>
                        <option value="USD">USD</option>
                    </select>

                    <input value={result} readOnly type="number" className='result' /></div>

                <button onClick={exchange}>ÇEVİR</button>
            </div>
        </div>
    )
}

export default Currency