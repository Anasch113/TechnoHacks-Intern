import React, {useEffect, useState} from 'react'
import './App.css'
import axios from 'axios'
import Home from "../src/home"
import pic1 from "../src/assets/equal.png"
function App() {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('EUR');
  const [rates, setRates] = useState([]);

  useEffect(() => {
    axios.get('http://data.fixer.io/api/latest?access_key=e0856cb9a8b0b66788c41165e4fdf6fc')
      .then(response => {
        setRates(response.data.rates);
      })
  }, []);
  useEffect(() => {
    if (!!rates) {
      function init() {
        handleAmount1Change(1);
      }
      init();
    }
  }, [rates]);

  function format(number) {
    return number.toFixed(4);
  }

  function handleAmount1Change(amount1) {
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1) {
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
    setCurrency1(currency1);
  }

  function handleAmount2Change(amount2) {
    setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
    setAmount2(amount2);
  }

  function handleCurrency2Change(currency2) {
    setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
    setCurrency2(currency2);
  }

  return (
    <>
      <div className='container'>
    <div className="main-container">
        <div className="heading-container">
            <h3>Currency Converter</h3>
            <h5>Interchange the most widely recognised currencies at the newest rates.</h5>
        </div>
        <div className="rectangle">
        <Home 
         currencies= {Object.keys(rates)}
          amount= {amount1}
           currency= {currency1} 
           onAmountChange={handleAmount1Change}
           onCurrencyChange={handleCurrency1Change}/>

<div className="img">
<img src={pic1} alt="" />
</div>

<Home 
currencies= {Object.keys(rates)}
 amount= {amount2}
  currency= {currency2}
  onAmountChange={handleAmount2Change}
  onCurrencyChange={handleCurrency2Change} />

        </div>
      
        
    </div>
   
    </div>
    <div className="end-text">
		<p>© 2023 All Rights Reserved by Anas Rafiq Ch</p>
	</div>
    </>
  )
}

export default App
