import React from 'react';
import '../App.css';

class F3 extends React.Component {
    state = {
      
    }
    nextForm = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }
    
    render(){
        const { values } = this.props;
    return (
        <div class="divForm">
        <form>
            <label> Credit Card : </label>
            <input type="text"
            placeholder='Crediit Card'
            onChange={this.props.handleChange('creditCard')}
            defaultValue={values.creditCard}></input>
            <br></br>
            <label> Expiry Date :</label>
            <input type="text"
            placeholder='Expiry Date'
            onChange={this.props.handleChange('expiryDate')}
            defaultValue={values.expiryDate}></input>
            <br></br>
            <label> Zip Code : </label>
            <input type="text"
            placeholder='Zip Code'
            onChange={this.props.handleChange('zipCodeCard')}
            defaultValue={values.zipCodeCard}></input>
            <br></br>
            <label> CVV: </label>
            <input type="text"
            placeholder='CVV'
            onChange={this.props.handleChange('CVV')}
            defaultValue={values.cvv}></input>
            <br></br>
            <label> Billing Zip Code : </label>
            <input type="text"
            placeholder='Billing Zip Code'
            onChange={this.props.handleChange('billingZipCode')}
            defaultValue={values.billingZipCode}></input>
            <br></br>
            <input type='submit' value='Submit'></input>
            <br></br>
        </form>
        </div>
    )}
}
    export default F3;