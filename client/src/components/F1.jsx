import React from 'react';
import '../App.css';

class F1 extends React.Component {
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
            <label> Name: </label>
            <input type="text"
             placeholder='Name'
             onChange={this.props.handleChange('name')}
             defaultValue={values.name}></input>
            <br></br>
            <label> Email: </label>
            <input type="text" 
             placeholder='Email'
             onChange={this.props.handleChange('email')}
             defaultValue={values.email}></input>
            <br></br>
            <label> Password: </label>
            <input type="text"
             placeholder='Password'
             onChange={this.props.handleChange('password')}
             defaultValue={values.password}></input>
            <br></br>
            <input type='submit' value='Next' onClick={this.nextForm}></input>
        </form>
        </div>
    )}
    }

    export default F1;