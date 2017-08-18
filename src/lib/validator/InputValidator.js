const IS_VALID = {is_valid: true}

export function checkValidation(inputs,e)
{
    const {state} = e
    let is_valid = true
    inputs.map((n, key) => {
        if(!state[`${n}_validation`])
        {
            is_valid = is_valid && false
        }else
        {
            is_valid = is_valid && state[`${n}_validation`].is_valid
        }
    })
    return is_valid
}

// function to set validation in first submit
export function setValidation(inputs, e)
{
    inputs.map((n, key) => {
        if(!e.state[`${n}_validation`]) e.setState({[`${n}_validation`]: {is_valid: false, msg: 'wajib diisi'}})
    })
}

export default class InputTextValidation
{
    constructor(props)
    {
        this.props = props
    }

    validate()
    {
        const {required, value, name, type, min, max} = this.props
        if(required && value == '')
        {
            return {
                msg: `wajib diisi`,
                is_valid: false
            }
        }else if(min && value.length < min)
        {
            return {
                msg: `minimal karakter adalah ${min}`,
                is_valid: false
            }
        }else if(max && value.length > max)
        {
            return {
                msg: `maksimal karakter adalah ${max}`,
                is_valid: false
            }
        }else{
            switch(type)
            {
                case 'text':
                    return this.validateText()
                case 'email':
                    return this.validateEmail()
                case 'number':
                    return this.validateNumber()
                default:
                    return IS_VALID
            }
        }
    }

    validateEmail()
    {
        const {value} = this.props
        if(value.indexOf('@') < 1)
        {
            return {
                msg: `email tidak valid`,
                is_valid: false
            }
        }else
        {
            return IS_VALID
        }
    }

    validateText()
    {
        return IS_VALID
    }

    validateNumber()
    {
        return IS_VALID
    }

    checkAllInput()
    {

    }

}
