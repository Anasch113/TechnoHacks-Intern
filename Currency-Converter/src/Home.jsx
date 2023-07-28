
import "./home.css"
import PropTypes from "prop-types";

const home = (props) => {


  return (
    <>

      <div className="amounts">
        <input onChange={ev => props.onAmountChange(ev.target.value)} className="input" value={props.amount} type="number" />
        <select onChange={ev => props.onCurrencyChange(ev.target.value)} value={props.currency}>
          {props.currencies.map((currency => (
            <option className="options" value={currency}>{currency}</option>
          )))}


        </select>
      </div>






    </>
  )
}
home.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
};
export default home
