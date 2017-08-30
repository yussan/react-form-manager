import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Validator from '../lib/validator/InputValidator'

const supported_types = ['text','email','url','tel','search']

export default class InputText extends Component 
{
  handleChange(e)
  {
      const {name, value} = e.target
      const validator = new Validator(Object.assign({},{name, value},this.props))
      const validate_result = validator.validate()
      this.props.setState({
          [name]: value,
          [`${name}_validation`]: validate_result
      })
  }

  render()
  {
    const {style, label, name, min, max, placeholder, value, description, 
      validation} = this.props
    return(
      <div className='form-row' style={style}>
        {label ? <label>{label}</label> : null}
        <input
            name={name}
            onChange={(e) => this.handleChange(e)}
            onBlur={(e) => this.handleChange(e)}
            placeholder={placeholder}
            value={value}
        />
        {
          description ? <div className='form-description'>{description}</div> : null
        }
        {
          validation && !validation.is_valid ? 
            <div className='form-error--message'>
              {validation.msg}
            </div>
          : null
        }
      </div>
    )
  }
}

InputText.defaultProps = {
    style: {},
    value: '',
    type: 'text'
}

InputText.propType = {
    setState: PropTypes.func.isRequired,
    type: PropTypes.oneOf(supported_types),
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    validation: PropTypes.object,
    value: PropTypes.any
}