import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const isEmpty = value => value.trim() === '';
const isFiveChars = value => value.trim().length === 5;

const Checkout = (props) => {
    const [formInputesValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true
    });
    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();

    const confirmHandler = (e) => {
        e.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);
        const enteredCityIsValid = !isEmpty(enteredCity);
        setFormInputsValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postalCode: enteredPostalCodeIsValid
        });
        const formIsValid = enteredNameIsValid && enteredStreetIsValid
            && enteredPostalCodeIsValid && enteredCityIsValid;

        if (!formIsValid) {
            return;

        }
    };

    const nameControlClasses = `${classes.control} ${formInputesValidity.name ? '' : classes.invalid}`
    const streetControlClasses = `${classes.control} ${formInputesValidity.street ? '' : classes.invalid}`
    const postalCodeControlClasses = `${classes.control} ${formInputesValidity.postalCode ? '' : classes.invalid}`
    const cityControlClasses = `${classes.control} ${formInputesValidity.city ? '' : classes.invalid}`

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={nameControlClasses}>
                <label htmlFor='name'>Your Name</label>
                <input id='name' type='text' ref={nameInputRef} />
                {!formInputesValidity.name && <p>Please enter a valid name!</p>}
            </div>
            <div className={streetControlClasses}>
                <label htmlFor='street'>Street</label>
                <input id='street' type='text' ref={streetInputRef} />
                {!formInputesValidity.street && <p>Please enter a valid street!</p>}
            </div>
            <div className={postalCodeControlClasses}>
                <label htmlFor='postal'>Postal Code</label>
                <input id='postal' type='text' ref={postalCodeInputRef} />
                {!formInputesValidity.postalCode && <p>Please enter a valid postal code (5 characters long)!</p>}
            </div>
            <div className={cityControlClasses}>
                <label htmlFor='city'>City</label>
                <input id='city' type='text' ref={cityInputRef} />
                {!formInputesValidity.city && <p>Please enter a valid city!</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.OnCancel}>
                    Cancel
                </button>
                <button>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;