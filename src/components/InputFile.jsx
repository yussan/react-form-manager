import React, {Component} from 'react'

export default class InputFile extends Component 
{
  render()
  {
    const {style, label, name, min, max, placeholder, value, description, 
      validation} = this.props
    return(
      <div>
        {label ? <label>{label}</label> : null  }
        <input 
          type='file' 
          name={name}
          onChange={(e) => this.handleChange(e)}
          onBlur={(e) => this.handleChange(e)}
          placeholder={placeholder}
          value={value}
          />
      </div>
    )
  }
}