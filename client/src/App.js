import React from 'react';
import logo from './logo.svg';
import './App.css';
import F1 from './components/F1'
import F2 from './components/F2'
import F3 from './components/F3'

class App extends React.Component {
  state = {
    step: 1,
    name: '',
    email: '',
    password: '',
    adress: '',
    city: '',
    zipCode: '',
    creditCard: '',
    expiryDate: '',
    zipCodeCard: '',
    cvv: '',
    billingZipCode: '',
  }

  nextStep = () => {
    const { step } = this.state
    this.setState({
        step : step + 1
    })
  }
  handleChange = input => event => {
    this.setState({ [input] : event.target.value })
  }
  render(){
    const {step} = this.state;
        const { name, email, password, adress, city, zipCode , creditCard,expiryDate,zipCodeCard,cvv,billingZipCode } = this.state;
        const values = { name, email, password, adress, city, zipCode , creditCard,expiryDate,zipCodeCard,cvv,billingZipCode };
        switch(step) {
        case 1:
            return <F1
                    nextStep={this.nextStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 2:
            return <F2
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 3:
            return <F3
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        }
    }
  
  
}


export default App;
