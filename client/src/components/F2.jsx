import React from 'react';
import '../App.css';

class F2 extends React.Component {
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
            <label> Adress : </label>
            <input type="text"
            placeholder='Adress'
            onChange={this.props.handleChange('adress')}
            defaultValue={values.adress}></input>
            <br></br>
            <input type="text" 
            placeholder='Adress'
            onChange={this.props.handleChange('adress')}
            defaultValue={values.adress}></input>
            <br></br>
            <label> City :</label>
            <input type="text"
            placeholder='city'
            onChange={this.props.handleChange('city')}
            defaultValue={values.city}></input>
            <br></br>
            <label> Zip Code : </label>
            <input type="text"
            placeholder='Zip Code'
            onChange={this.props.handleChange('zipCode')}
            defaultValue={values.zipCode}></input>
            <br></br>
            <input type='submit' value='Next' onClick={this.nextForm}></input>
            <br></br>
        </form>
        </div>
    )}
}
    export default F2;