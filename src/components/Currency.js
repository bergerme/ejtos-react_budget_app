import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

import './Currency.css';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);

    const handleCurrencyChange = (event) => {
        dispatch({ 
            type: "CHG_CURRENCY", 
            payload: event.target.value
        });
        setNewCurrency(event.target.value);
    };

    return (
        <div className='alert alert-warning'>
            <label>Currency:  
                <select value={newCurrency} onChange={handleCurrencyChange} className='hoi'>
                    <option value="$">$ Dollar</option>
                    <option value="£">£ Pound</option>
                    <option value="€">€ Euro</option>
                    <option value="₹">₹ Ruppee</option>
                </select>
            </label>
        </div>
    );
};
export default Currency;