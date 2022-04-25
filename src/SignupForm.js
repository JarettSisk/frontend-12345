import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupForm = ({registerUser}) => {
  const navigate = useNavigate();
  const INITIAL_STATE = {
    username: "testuser3",
    password: "12345",
    firstName: "john",
    lastName: "doe",
    email: "myemail@gmail.com"
  }
  
  // state for form
  const [formData, setFormData] = useState(INITIAL_STATE);

  // handle form submit
  const handleSubmit = async (e)  => {
    e.preventDefault();
    await registerUser(formData);
    navigate("/");
  }

  // handle form change
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((data) => {
      return {
        ...data,
        [name]: value
      }
    })
  }

  // render form
  return (
    <div className="SignupForm-wrapper">
      <form onSubmit={handleSubmit} className="NewColorForm">
        <label htmlFor="username">username</label>
        <input
          className="SignupForm-input-username"
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="testuser"
          required
        />
        <label htmlFor="password">password</label>
        <input
          className="SignupForm-input-password"
          type="text"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <label htmlFor="firstName">first name</label>
        <input
          className="SignupForm-input-firstName"
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="john"
          required
        />
        <label htmlFor="lastName">last name</label>
        <input
          className="SignupForm-input-lastName"
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="doe"
          required
        />
        <label htmlFor="email">email</label>
        <input
          className="SignupForm-input-email"
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="myEmail@gmail.com"
          required
        />
        

        <button className="SignupForm-button">Add</button>
      </form>
    </div>
    
  )
  
}

export default SignupForm;