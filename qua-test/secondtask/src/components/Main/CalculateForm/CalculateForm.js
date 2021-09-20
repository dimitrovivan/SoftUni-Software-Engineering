import { useState } from 'react';

import './CalculateForm.css';
import sumTotalPriceForPeriod from '../engine';

function CalculateForm() {
    const [price, setPrice] = useState();

    const getDataFromStorage = (key) => localStorage.getItem(key);

    const onCalcSubmitHandler = (e) => {
        e.preventDefault();
        const { currentTarget } = e;
        let startDateElement = currentTarget.querySelector('.start-date');
        let endDateElement = currentTarget.querySelector('.end-date');
        let defaultPriceElement = currentTarget.querySelector('.default-price');

        let totalPrice = sumTotalPriceForPeriod(
                           JSON.parse(getDataFromStorage("PERIODS")),
                           startDateElement.value,
                           endDateElement.value,
                           Number(defaultPriceElement.value)
        )
        
        startDateElement.value = '';
        endDateElement.value = '';
        defaultPriceElement.value = '';
        setPrice(totalPrice);
    };

    return (
        <>
        <form className="calculate-form" onSubmit={onCalcSubmitHandler}>
            <label htmlFor="start-date">
                <h3 className="form-heading">Enter start date:</h3>
                <input type="date" id="start-date" className="start-date" required/>
            </label>

            <label htmlFor="end-date">
                <h3 className="form-heading">Enter end date:</h3>
                <input type="date" id="end-date" className="end-date" required/>
            </label>      

            <label htmlFor="default-price">
                <h3 className="form-heading">Enter default price:</h3>
                <input type="number" id="default-price" className="default-price" required/>
            </label>     
            <input type="submit" value="Calculate" className="main-submit-btn" />
        </form>
        <div className="total-price">Total Price: {price}</div>
        </>
    )
}

export default CalculateForm;