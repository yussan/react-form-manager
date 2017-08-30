import ReactDom from 'react-dom'
import React, {Component} from 'react'
import {InputText, Button} from '../../../src/index'

class RegisterForm extends Component 
{
  constructor(props)
  {
    super(props)
    this.state = {}
  }

  render()
  {
    return (
      <div className="form-container">
        <InputText 
          name='email'
          label='Your Email'
          value={this.state.email || ''}
          placeholder='Input your email'
          setState={(obj) => this.setState(obj)}
        />
        <InputText 
          name='username'
          label='Username'
          value={this.state.username || ''}
          placeholder='Input your username'
          setState={(obj) => this.setState(obj)}
        />
        <Button
        
         />
      </div>
    )
  }
}

ReactDom.render(
  <RegisterForm />,
  document.getElementById('app')
)