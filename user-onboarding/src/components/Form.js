import React, { useEffect, useState } from 'react';
import * as yup from 'yup'
import schema from "./formSchema"

const initialFormData = {
    name: '',
    email: '',
    password: '',
    role: '',
    tosCheck: false,
}

const intialFromErrors = {
    name: '',
    email: '',
    password: '',
    role: '',
    tosCheck: '',
}

const Form = (props) => {
    const { submit } = props;

    const [formData, setFormData] = useState(initialFormData)
    const [formErrors, setFormErrors] = useState(intialFromErrors)
    const [disabled, setDisabled] = useState(true)

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === "checkbox" ? checked : value;
        yup
      .reach(schema, name)
      .validate(val)
      .then(() =>
        setFormErrors({
          ...formErrors,
          [name]: " ",
        })
      ) //success
      .catch((err) =>
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      ); //error
        setFormData({ ...formData, [name]: val })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        submit(formData);
        setFormData(initialFormData)
      };

      useEffect(() => {
          schema.isValid(formData).then((valid) => setDisabled(!valid))
      }, [formData])
    
      return (
        <form action="submit" id="form">
          <label htmlFor="name">
            Enter your name
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="minimuum of 3 characters"
              onChange={handleChange}
            />
          </label>
    
          <label htmlFor="email">
            Enter your email
            <input
              type="text"
              name="email"
              value={formData.email}
              placeholder="email"
              onChange={handleChange}
            />
          </label>
    
          <label htmlFor="password">
            Create a password
            <input
              type="password"
              name="password"
              value={formData.password}
              placeholder="4-10 character password"
              onChange={handleChange}
            />
          </label>

          <label>Role{formErrors.role.length > 0 ? ` - ${formErrors.role}` : formErrors.role}
          <select value={formData.role} name='role' onChange={handleChange}>
            <option value=''>Select</option>
            <option value='Engineer'>Engineer</option>
            <option value='Developer'>Developer</option>
            <option value='Designer'>Designer</option>
          </select>
        </label>
    
          <label htmlFor="tosCheck">
            Accept{" "}
            <a href="#" onClick={(e) => e.preventDefault()}>
              Terms of Service
            </a>
            <input
              id="tosCheck"
              type="checkbox"
              name="tosCheck"
              checked={formData.tosCheck}
              onChange={handleChange}
              className={formData.tosCheck ? "filled-in" : "unChecked"}
            />
          </label>
          <button action="submit" onClick={handleSubmit} disabled={disabled}>
            Submit
          </button>
         <div className="errors">
         <div>{formErrors.name}</div>
         <div>{formErrors.email}</div>
         <div>{formErrors.password}</div>
         <div>{formErrors.tosCheck}</div>
         <div>{formErrors.role}</div>
         </div>
        </form>
      )
}

export default Form;